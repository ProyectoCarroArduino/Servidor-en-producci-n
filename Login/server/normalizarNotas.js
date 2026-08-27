// Normaliza las notas ya guardadas al modelo de evaluacion actual.
//
// Hace dos cosas:
//   1. Los subejercicios que nunca se presentaron (ultimo_intento === null)
//      pasan de nota 0 a nota null. Antes un 0 era ambiguo: no se distinguia
//      "no presentado" de "presentado y reprobado".
//   2. Recalcula la nota de cada categoria como el promedio de lo PRESENTADO,
//      no como suma / total de subejercicios.
//
// Ademas imprime el inventario de nombres (curso > modulo > submodulo >
// ejercicio > categoria) para poder contrastarlo con lo que envian las vistas.
//
// Uso:
//   node normalizarNotas.js           -> solo reporta, no escribe (dry-run)
//   node normalizarNotas.js --apply   -> aplica los cambios
//
import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import { User } from './models/User.js';

const APLICAR = process.argv.includes('--apply');
const NOTA_APROBATORIA = 3;

function estaPresentado(sub) {
  return sub.ultimo_intento !== null && sub.ultimo_intento !== undefined;
}

async function normalizar() {
  try {
    await connectManual();

    const usuarios = await User.find();
    if (usuarios.length === 0) {
      console.log('No hay usuarios registrados.');
      return;
    }

    let notasLimpiadas = 0;
    let categoriasRecalculadas = 0;
    let usuariosAfectados = 0;
    const inventario = new Set();

    for (const user of usuarios) {
      let cambio = false;
      const cursos = Array.isArray(user.curso) ? user.curso : [];

      for (const curso of cursos) {
        for (const modulo of curso.modulos || []) {
          for (const submodulo of modulo.submodulos || []) {
            for (const ejercicio of submodulo.ejercicios || []) {
              const categorias = ejercicio.categorias || {};

              for (const nombreCat of Object.keys(categorias)) {
                const cat = categorias[nombreCat];
                if (!cat || !Array.isArray(cat.subejercicios)) continue;

                inventario.add([
                  curso.nombre,
                  modulo.nombre,
                  submodulo.nombre,
                  ejercicio.nombre,
                  nombreCat,
                  cat.subejercicios.length + ' subejercicio(s)'
                ].join(' | '));

                // 1. Limpiar notas de lo no presentado.
                for (const sub of cat.subejercicios) {
                  if (!estaPresentado(sub) && sub.nota !== null && sub.nota !== undefined) {
                    sub.nota = null;
                    notasLimpiadas++;
                    cambio = true;
                  }
                }

                // 2. Recalcular la nota de la categoria.
                const presentados = cat.subejercicios.filter(estaPresentado);
                const notaPrevia = cat.nota;
                const fechaPrevia = cat.ultimo_intento
                  ? new Date(cat.ultimo_intento).getTime()
                  : null;

                if (presentados.length > 0) {
                  const suma = presentados.reduce((acc, s) => acc + (s.nota ?? 0), 0);
                  cat.nota = Number((suma / presentados.length).toFixed(2));
                  const fechas = presentados.map(s => new Date(s.ultimo_intento).getTime());
                  cat.ultimo_intento = new Date(Math.max(...fechas));
                } else {
                  cat.nota = null;
                  cat.ultimo_intento = null;
                }

                const fechaNueva = cat.ultimo_intento
                  ? new Date(cat.ultimo_intento).getTime()
                  : null;

                if (notaPrevia !== cat.nota || fechaPrevia !== fechaNueva) {
                  categoriasRecalculadas++;
                  cambio = true;
                }
              }
            }
          }
        }
      }

      if (cambio) {
        usuariosAfectados++;
        if (APLICAR) await user.save();
      }
    }

    console.log('\n=== INVENTARIO DE RUTAS EN LA BD ===');
    console.log('(compara estos nombres con los que envian las vistas .vue)\n');
    for (const ruta of [...inventario].sort()) {
      console.log('  ' + ruta);
    }

    console.log('\n=== RESUMEN ===');
    console.log('Usuarios revisados:        ' + usuarios.length);
    console.log('Usuarios con cambios:      ' + usuariosAfectados);
    console.log('Notas 0 -> null:           ' + notasLimpiadas);
    console.log('Categorias recalculadas:   ' + categoriasRecalculadas);
    console.log(
      APLICAR
        ? '\nCambios GUARDADOS en la base de datos.'
        : '\nDRY-RUN: no se escribio nada. Ejecuta con --apply para guardar.'
    );

  } catch (error) {
    console.error('Error al normalizar notas:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

normalizar();

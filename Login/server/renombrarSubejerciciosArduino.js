// Renombra los subejercicios de DESCOMPOSICION de la guia de Arduino:
//
//   "Subejercicio 1"  ->  "Imagen"
//   "Subejercicio 2"  ->  "Video"
//
// Por que: en pantalla el subejercicio de video aparece PRIMERO y el de imagen
// segundo, pero estaban guardados como "Subejercicio 1" (imagen) y
// "Subejercicio 2" (video). En el perfil, que los lista por numero, se leian al
// reves de como se responden. Con nombres propios el orden deja de importar.
//
// Solo cambia el campo `nombre`. La nota, los intentos y la fecha se quedan
// donde estan: cada registro sigue perteneciendo al mismo subejercicio, solo
// que ahora se llama por su tipo.
//
// Uso:
//   node renombrarSubejerciciosArduino.js           -> solo reporta (dry-run)
//   node renombrarSubejerciciosArduino.js --apply   -> aplica los cambios
//
import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import { User } from './models/User.js';
import { CourseTemplate } from './models/CourseTemplate.js';

const APLICAR = process.argv.includes('--apply');

const CURSO = 'Guía Construcción Carro Arduino';
const CATEGORIA = 'descomposicion';
const RENOMBRES = {
  'Subejercicio 1': 'Imagen',
  'Subejercicio 2': 'Video'
};

// Recorre las categorias de descomposicion del curso de Arduino y renombra.
// Devuelve cuantos subejercicios cambiaron.
function renombrarEnCurso(curso, detalle) {
  let cambios = 0;

  for (const modulo of curso.modulos || []) {
    for (const submodulo of modulo.submodulos || []) {
      for (const ejercicio of submodulo.ejercicios || []) {
        const cat = ejercicio.categorias ? ejercicio.categorias[CATEGORIA] : null;
        if (!cat || !Array.isArray(cat.subejercicios)) continue;

        for (const sub of cat.subejercicios) {
          const nuevo = RENOMBRES[sub.nombre];
          if (!nuevo) continue;

          // Si ya existe uno con el nombre destino, no se toca: seria duplicar.
          if (cat.subejercicios.some(s => s.nombre === nuevo)) {
            detalle.push('    OMITIDO (ya existe "' + nuevo + '") en ' + submodulo.nombre);
            continue;
          }

          sub.nombre = nuevo;
          cambios++;
        }
      }
    }
  }

  return cambios;
}

async function renombrar() {
  try {
    await connectManual();

    // --- Plantilla ---
    const detallePlantilla = [];
    let cambiosPlantilla = 0;
    const plantilla = await CourseTemplate.findOne({ nombre: CURSO });

    if (!plantilla) {
      console.log('AVISO: no existe la plantilla "' + CURSO + '".');
      console.log('       Corre primero: node seedCourseTemplate.js');
    } else {
      cambiosPlantilla = renombrarEnCurso(plantilla, detallePlantilla);
      if (cambiosPlantilla > 0 && APLICAR) {
        plantilla.markModified('modulos');
        await plantilla.save();
      }
    }

    // --- Usuarios ---
    const usuarios = await User.find();
    let usuariosAfectados = 0;
    let cambiosUsuarios = 0;
    const detalleUsuarios = [];

    for (const user of usuarios) {
      const curso = (user.curso || []).find(c => c.nombre === CURSO);
      if (!curso) continue;

      const n = renombrarEnCurso(curso, detalleUsuarios);
      if (n > 0) {
        usuariosAfectados++;
        cambiosUsuarios += n;
        if (APLICAR) {
          user.markModified('curso');
          await user.save();
        }
      }
    }

    console.log('\n=== RESUMEN ===');
    console.log('Plantilla: ' + cambiosPlantilla + ' subejercicio(s) renombrado(s)');
    detallePlantilla.forEach(d => console.log(d));
    console.log('Usuarios revisados:     ' + usuarios.length);
    console.log('Usuarios con cambios:   ' + usuariosAfectados);
    console.log('Subejercicios renombrados en usuarios: ' + cambiosUsuarios);
    [...new Set(detalleUsuarios)].forEach(d => console.log(d));

    console.log(
      APLICAR
        ? '\nCambios GUARDADOS. Ninguna nota ni intento fue modificado.'
        : '\nDRY-RUN: no se escribio nada. Ejecuta con --apply para guardar.'
    );

  } catch (error) {
    console.error('Error al renombrar subejercicios:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

renombrar();

// Copia a los usuarios lo que les falte de las plantillas de curso, SIN tocar
// lo que ya tienen.
//
// Es la alternativa segura a sincronizarUsuarios.js, que hace
// `user.curso[i] = plantillaClonada` y con eso borra notas, intentos y fechas
// de todos los estudiantes.
//
// Solo agrega: cursos, modulos, submodulos, ejercicios, categorias y
// subejercicios que no existan en el usuario. Nunca modifica ni elimina un
// subejercicio existente.
//
// Uso:
//   node fusionarPlantillaUsuarios.js           -> solo reporta (dry-run)
//   node fusionarPlantillaUsuarios.js --apply   -> aplica los cambios
//
import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import { User } from './models/User.js';
import { CourseTemplate } from './models/CourseTemplate.js';

const APLICAR = process.argv.includes('--apply');

// Categorias donde la plantilla renombro subejercicios: no se pueden fusionar,
// hay que renombrar. Ver renombrarSubejerciciosArduino.js
const renombradosDetectados = new Set();

const conteo = {
  cursos: 0,
  modulos: 0,
  submodulos: 0,
  ejercicios: 0,
  categorias: 0,
  subejercicios: 0
};

function clonar(x) {
  return JSON.parse(JSON.stringify(x));
}

// Detecta un RENOMBRADO disfrazado de faltante: el usuario tiene la misma
// cantidad de subejercicios que la plantilla, pero con otros nombres. Si se
// fusionara, se agregarian los nombres nuevos y quedarian huerfanos los viejos,
// que son los que tienen la nota. Ese caso se resuelve renombrando, no
// fusionando.
function pareceRenombrado(catUsuario, catPlantilla) {
  const enUsuario = (catUsuario.subejercicios || []).map(s => s.nombre);
  const enPlantilla = (catPlantilla.subejercicios || []).map(s => s.nombre);
  if (enUsuario.length === 0 || enUsuario.length !== enPlantilla.length) return false;
  return enPlantilla.some(n => !enUsuario.includes(n));
}

function fusionarCategoria(catUsuario, catPlantilla, ruta) {
  if (pareceRenombrado(catUsuario, catPlantilla)) {
    renombradosDetectados.add(
      ruta + '\n      usuario:   [' + (catUsuario.subejercicios || []).map(s => s.nombre).join(', ') + ']' +
      '\n      plantilla: [' + (catPlantilla.subejercicios || []).map(s => s.nombre).join(', ') + ']'
    );
    return false;
  }

  let cambio = false;
  for (const subPlantilla of catPlantilla.subejercicios || []) {
    const existe = (catUsuario.subejercicios || []).some(s => s.nombre === subPlantilla.nombre);
    if (!existe) {
      catUsuario.subejercicios.push(clonar(subPlantilla));
      conteo.subejercicios++;
      cambio = true;
    }
  }
  return cambio;
}

function fusionarEjercicio(ejeUsuario, ejePlantilla, ruta) {
  let cambio = false;
  const categorias = ejePlantilla.categorias || {};
  for (const nombreCat of Object.keys(categorias)) {
    if (!ejeUsuario.categorias) ejeUsuario.categorias = {};
    if (!ejeUsuario.categorias[nombreCat]) {
      ejeUsuario.categorias[nombreCat] = clonar(categorias[nombreCat]);
      conteo.categorias++;
      cambio = true;
    } else if (fusionarCategoria(ejeUsuario.categorias[nombreCat], categorias[nombreCat], ruta + ' > ' + nombreCat)) {
      cambio = true;
    }
  }
  return cambio;
}

function fusionarSubmodulo(subUsuario, subPlantilla, ruta) {
  let cambio = false;
  for (const ejePlantilla of subPlantilla.ejercicios || []) {
    const existente = (subUsuario.ejercicios || []).find(e => e.nombre === ejePlantilla.nombre);
    if (!existente) {
      subUsuario.ejercicios.push(clonar(ejePlantilla));
      conteo.ejercicios++;
      cambio = true;
    } else if (fusionarEjercicio(existente, ejePlantilla, ruta + ' > ' + ejePlantilla.nombre)) {
      cambio = true;
    }
  }
  return cambio;
}

function fusionarModulo(modUsuario, modPlantilla, ruta) {
  let cambio = false;
  for (const subPlantilla of modPlantilla.submodulos || []) {
    const existente = (modUsuario.submodulos || []).find(s => s.nombre === subPlantilla.nombre);
    if (!existente) {
      modUsuario.submodulos.push(clonar(subPlantilla));
      conteo.submodulos++;
      cambio = true;
    } else if (fusionarSubmodulo(existente, subPlantilla, ruta + ' > ' + subPlantilla.nombre)) {
      cambio = true;
    }
  }
  return cambio;
}

function fusionarCurso(cursoUsuario, cursoPlantilla, ruta) {
  let cambio = false;
  for (const modPlantilla of cursoPlantilla.modulos || []) {
    const existente = (cursoUsuario.modulos || []).find(m => m.nombre === modPlantilla.nombre);
    if (!existente) {
      cursoUsuario.modulos.push(clonar(modPlantilla));
      conteo.modulos++;
      cambio = true;
    } else if (fusionarModulo(existente, modPlantilla, ruta + ' > ' + modPlantilla.nombre)) {
      cambio = true;
    }
  }
  return cambio;
}

async function fusionar() {
  try {
    await connectManual();

    const plantillas = await CourseTemplate.find();
    if (plantillas.length === 0) {
      console.log('No hay plantillas de curso. Corre primero: node seedCourseTemplate.js');
      return;
    }

    const usuarios = await User.find();
    if (usuarios.length === 0) {
      console.log('No hay usuarios registrados.');
      return;
    }

    let usuariosAfectados = 0;
    // Se recorre todo primero y se guarda al final: si aparece un renombrado
    // pendiente hay que abortar SIN haber escrito nada.
    const porGuardar = [];

    for (const user of usuarios) {
      if (!Array.isArray(user.curso)) user.curso = [];
      let cambio = false;

      for (const plantilla of plantillas) {
        const cursoUsuario = user.curso.find(c => c.nombre === plantilla.nombre);

        if (!cursoUsuario) {
          user.curso.push(clonar(plantilla.toObject()));
          conteo.cursos++;
          cambio = true;
        } else if (fusionarCurso(cursoUsuario, plantilla.toObject(), plantilla.nombre)) {
          cambio = true;
        }
      }

      if (cambio) {
        usuariosAfectados++;
        porGuardar.push(user);
      }
    }

    if (renombradosDetectados.size > 0) {
      console.log('\n[BLOQUEADO] Estas categorias tienen los mismos subejercicios con OTRO nombre.');
      console.log('            Fusionar aqui agregaria los nombres nuevos y dejaria huerfanos los');
      console.log('            viejos, que son los que tienen la nota. Hay que RENOMBRAR:');
      console.log('              node renombrarSubejerciciosArduino.js --apply');
      console.log('');
      [...renombradosDetectados].forEach(d => console.log('    ' + d));
      console.log('\n            No se escribio nada. Corre el renombrado y vuelve a intentar.');
      return;
    }

    if (APLICAR) {
      for (const user of porGuardar) {
        // Mongoose no siempre detecta cambios dentro de objetos anidados que
        // no son arrays (categorias es un objeto, no una lista).
        user.markModified('curso');
        await user.save();
      }
    }

    console.log('\n=== RESUMEN ===');
    console.log('Usuarios revisados:     ' + usuarios.length);
    console.log('Usuarios con faltantes: ' + usuariosAfectados);
    console.log('Cursos agregados:       ' + conteo.cursos);
    console.log('Modulos agregados:      ' + conteo.modulos);
    console.log('Submodulos agregados:   ' + conteo.submodulos);
    console.log('Ejercicios agregados:   ' + conteo.ejercicios);
    console.log('Categorias agregadas:   ' + conteo.categorias);
    console.log('Subejercicios agregados:' + conteo.subejercicios);
    console.log(
      APLICAR
        ? '\nCambios GUARDADOS. No se modifico ninguna nota existente.'
        : '\nDRY-RUN: no se escribio nada. Ejecuta con --apply para guardar.'
    );

  } catch (error) {
    console.error('Error al fusionar plantillas:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

fusionar();

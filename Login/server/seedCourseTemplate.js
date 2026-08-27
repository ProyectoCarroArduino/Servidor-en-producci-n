import mongoose from 'mongoose';
import { CourseTemplate } from './models/CourseTemplate.js';
import { connectManual } from './config/connectManual.js';
import { CURSOS } from './cursosConfig.js';

// Crea o COMPLETA las plantillas de curso. Es aditivo e idempotente: agrega los
// modulos, submodulos y ejercicios que falten y no toca los que ya existen, asi
// que se puede correr sobre una base con datos sin riesgo.
//
// Los nombres de aqui son la fuente de verdad: deben coincidir EXACTAMENTE con
// los que envian las vistas .vue en useEvaluacionSubejercicio({...}).
//
//   node seedCourseTemplate.js

// ============================================================

const cambios = [];

function fusionarSubmodulo(submoduloExistente, submoduloNuevo) {
  for (const ejercicioNuevo of submoduloNuevo.ejercicios) {
    const existe = submoduloExistente.ejercicios.some(e => e.nombre === ejercicioNuevo.nombre);
    if (!existe) {
      submoduloExistente.ejercicios.push(ejercicioNuevo);
      cambios.push('  + ejercicio "' + ejercicioNuevo.nombre + '"');
    }
  }
}

function fusionarModulo(moduloExistente, moduloNuevo) {
  for (const submoduloNuevo of moduloNuevo.submodulos) {
    const existente = moduloExistente.submodulos.find(s => s.nombre === submoduloNuevo.nombre);
    if (existente) {
      fusionarSubmodulo(existente, submoduloNuevo);
    } else {
      moduloExistente.submodulos.push(submoduloNuevo);
      cambios.push('  + submodulo "' + submoduloNuevo.nombre + '"');
    }
  }
}

async function runSeed() {
  try {
    await connectManual();

    for (const cursoConfig of CURSOS) {
      console.log('\n=== ' + cursoConfig.nombre + ' ===');
      const antes = cambios.length;

      let plantilla = await CourseTemplate.findOne({ nombre: cursoConfig.nombre });

      if (!plantilla) {
        plantilla = new CourseTemplate({
          nombre: cursoConfig.nombre,
          modulos: cursoConfig.modulos
        });
        cambios.push('  + curso completo (' + cursoConfig.modulos.length + ' modulos)');
      } else {
        for (const moduloNuevo of cursoConfig.modulos) {
          const existente = plantilla.modulos.find(m => m.nombre === moduloNuevo.nombre);
          if (existente) {
            fusionarModulo(existente, moduloNuevo);
          } else {
            plantilla.modulos.push(moduloNuevo);
            cambios.push('  + modulo "' + moduloNuevo.nombre + '"');
          }
        }
      }

      const nuevos = cambios.slice(antes);
      if (nuevos.length === 0) {
        console.log('  sin cambios, la plantilla ya estaba completa');
      } else {
        await plantilla.save();
        nuevos.forEach(c => console.log(c));
      }
    }

    console.log('\nPlantillas actualizadas. Para que los usuarios ya registrados');
    console.log('reciban lo nuevo SIN perder notas, corre:');
    console.log('  node fusionarPlantillaUsuarios.js --apply');
    console.log('(NO uses sincronizarUsuarios.js: reemplaza el curso completo y borra las notas.)');

  } catch (error) {
    console.error('Error al actualizar plantillas:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

runSeed();

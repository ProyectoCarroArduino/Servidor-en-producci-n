import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { User } from './models/User.js';
import { CourseTemplate } from './models/CourseTemplate.js';
import { CURSOS } from './cursosConfig.js';

// cursosConfig.js es la fuente de verdad, incluso si MongoDB conserva
// plantillas antiguas. Solo elimina cursos completos, no sus componentes.
// Los nombres deben coincidir exactamente: renombrar elimina el curso anterior.
// Uso desde la raíz del proyecto:
//   node Login/server/LimpiarCursos.js           (simulación)
//   node Login/server/LimpiarCursos.js --apply   (eliminación definitiva)
// No agrega cursos faltantes: usa seedCourseTemplate.js y luego
// fusionarPlantillaUsuarios.js. Conserva el progreso de los cursos vigentes.

export function obtenerNombresValidos(cursos) {
  if (!Array.isArray(cursos) || cursos.length === 0) {
    throw new Error('La configuración de cursos está vacía. Se cancela la limpieza.');
  }
  const nombres = cursos.map(curso => curso?.nombre);
  if (nombres.some(nombre => typeof nombre !== 'string' || !nombre.trim())) {
    throw new Error('Todos los cursos de la configuración deben tener un nombre válido.');
  }
  if (new Set(nombres).size !== nombres.length) {
    throw new Error('Hay nombres de cursos duplicados en la configuración.');
  }
  return nombres;
}

export async function limpiarCursosObsoletos({
  aplicar = false,
  cursos = CURSOS,
  usuarios = User,
  plantillas = CourseTemplate,
  log = console.log
} = {}) {
  const nombres = obtenerNombresValidos(cursos);
  const validos = new Set(nombres);
  const filtroObsoletos = { nombre: { $nin: nombres } };
  const resumen = {
    usuariosRevisados: 0,
    usuariosAfectados: 0,
    cursosObsoletos: 0,
    plantillasObsoletas: 0,
    usuariosActualizados: 0,
    plantillasEliminadas: 0
  };

  log(aplicar ? 'Modo APLICAR: se eliminarán los cursos obsoletos.' : 'SIMULACIÓN: no se guardarán cambios.');
  log(`Cursos vigentes: ${nombres.join(' | ')}`);
  const antiguas = await plantillas.find(filtroObsoletos).select('_id nombre').lean();
  resumen.plantillasObsoletas = antiguas.length;
  for (const plantilla of antiguas) {
    log(`Plantilla obsoleta: ${plantilla.nombre ?? '(sin nombre)'} [${plantilla._id}]`);
  }

  // $pull evita sobrescribir notas guardadas mientras se ejecuta la limpieza.
  const cursor = usuarios.find().select('_id email curso.nombre').lean().cursor();
  try {
    for await (const usuario of cursor) {
      resumen.usuariosRevisados++;
      if (!Array.isArray(usuario.curso)) continue;
      const obsoletos = usuario.curso.filter(curso => !validos.has(curso?.nombre));
      if (obsoletos.length === 0) continue;

      resumen.usuariosAfectados++;
      resumen.cursosObsoletos += obsoletos.length;
      log(`${usuario.email ?? usuario._id}: ${obsoletos.map(curso => curso?.nombre ?? '(sin nombre)').join(' | ')}`);
      if (aplicar) {
        const resultado = await usuarios.updateOne(
          { _id: usuario._id },
          { $pull: { curso: filtroObsoletos } }
        );
        resumen.usuariosActualizados += resultado.modifiedCount;
      }
    }
  } finally {
    await cursor.close();
  }

  if (aplicar && antiguas.length > 0) {
    const resultado = await plantillas.deleteMany({
      _id: { $in: antiguas.map(plantilla => plantilla._id) },
      ...filtroObsoletos
    });
    resumen.plantillasEliminadas = resultado.deletedCount;
  }

  log(`Usuarios revisados: ${resumen.usuariosRevisados}. Con cursos obsoletos: ${resumen.usuariosAfectados}.`);
  log(`Cursos obsoletos en usuarios: ${resumen.cursosObsoletos}. Plantillas obsoletas: ${resumen.plantillasObsoletas}.`);
  log(aplicar
    ? `Limpieza completa. Usuarios actualizados: ${resumen.usuariosActualizados}. Plantillas eliminadas: ${resumen.plantillasEliminadas}.`
    : 'Para eliminar los cursos indicados, vuelve a ejecutar con --apply.');
  return resumen;
}

const AYUDA = `Uso desde Login/server:
  node LimpiarCursos.js             Simular la limpieza
  node LimpiarCursos.js --dry-run   Simular la limpieza
  node LimpiarCursos.js --apply     Eliminar los cursos obsoletos
  node LimpiarCursos.js --help      Mostrar esta ayuda
Escribe --apply sin corchetes.`;

export function leerArgumentos(argumentos) {
  const desconocidos = argumentos.filter(arg => !['--apply', '--dry-run', '--help', '-h'].includes(arg));
  if (desconocidos.length > 0) {
    throw new Error(`Argumentos no reconocidos: ${desconocidos.map(arg => JSON.stringify(arg)).join(', ')}.\n${AYUDA}`);
  }
  if (argumentos.includes('--apply') && argumentos.includes('--dry-run')) {
    throw new Error(`Usa solo uno de los modos: --apply o --dry-run.\n${AYUDA}`);
  }
  return {
    aplicar: argumentos.includes('--apply'),
    ayuda: argumentos.includes('--help') || argumentos.includes('-h')
  };
}

async function main() {
  const argumentos = process.argv.slice(2);
  try {
    const opciones = leerArgumentos(argumentos);
    if (opciones.ayuda) {
      console.log(AYUDA);
      return;
    }
    obtenerNombresValidos(CURSOS);
    dotenv.config({ path: fileURLToPath(new URL('./.env', import.meta.url)) });
    if (!process.env.URI_MONGODB) {
      throw new Error('No se encontró URI_MONGODB en el entorno o en Login/server/.env.');
    }
    await mongoose.connect(process.env.URI_MONGODB);
    await limpiarCursosObsoletos({ aplicar: opciones.aplicar });
  } catch (error) {
    console.error('Error al limpiar cursos:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

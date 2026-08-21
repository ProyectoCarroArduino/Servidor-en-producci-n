import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Respuestas } from './models/Respuestas.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Borra todas las respuestas de la encuesta TAM para dejar la coleccion en limpio.
 */
async function limpiarEncuestas() {
  const confirmado = process.argv.includes('--confirmar');

  try {
    const documentos = await Respuestas.find().lean();
    console.log(`Respuestas encontradas: ${documentos.length}`);

    if (!documentos.length) {
      console.log('La coleccion ya esta vacia. Nada que hacer.');
      return;
    }

    const carpeta = path.join(__dirname, 'backups');
    fs.mkdirSync(carpeta, { recursive: true });

    const marca = new Date().toISOString().replace(/[:.]/g, '-');
    const archivo = path.join(carpeta, `respuestas-${marca}.json`);
    fs.writeFileSync(archivo, JSON.stringify(documentos, null, 2), 'utf8');
    console.log(`Respaldo guardado en: ${archivo}`);

    if (!confirmado) {
      console.log('Modo simulacion: no se borro nada.');
      console.log('Vuelve a ejecutar con --confirmar para borrar de verdad.');
      return;
    }

    const { deletedCount } = await Respuestas.deleteMany({});
    console.log(`Respuestas eliminadas: ${deletedCount}`);
    console.log('Todos los usuarios pueden responder la encuesta nuevamente.');
  } catch (error) {
    console.error('Error al limpiar las encuestas:', error.message);
    process.exitCode = 1;
  } finally {
    // El modelo abre su propia conexion en models/Respuestas.js
    await Respuestas.db.close();
  }
}

limpiarEncuestas();

import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import { User } from './models/User.js';
import CourseTemplate from './models/CourseTemplate.js';

async function limpiarCursosObsoletos() {
  try {
    await connectManual();

    // 1. Obtener nombres de cursos válidos
    const plantillas = await CourseTemplate.find();
    const cursosValidos = plantillas.map(p => p.nombre);

    // 2. Obtener usuarios
    const usuarios = await User.find();

    let totalActualizados = 0;

    for (const user of usuarios) {
      if (!Array.isArray(user.curso)) continue;

      const cursosAntes = user.curso.length;

      // 3. Filtrar solo los cursos que aún existen
      user.curso = user.curso.filter(c => cursosValidos.includes(c.nombre));

      const cursosDespues = user.curso.length;

      if (cursosAntes !== cursosDespues) {
        await user.save();
        totalActualizados++;
        console.log(`Cursos obsoletos eliminados de ${user.email}`);
      }
    }

    console.log(`Limpieza completa. Usuarios actualizados: ${totalActualizados}`);
  } catch (error) {
    console.error('Error al limpiar cursos:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

limpiarCursosObsoletos();

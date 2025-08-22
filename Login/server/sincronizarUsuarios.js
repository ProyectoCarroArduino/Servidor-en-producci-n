import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import { User } from './models/User.js';
import {CourseTemplate} from './models/CourseTemplate.js';

async function sincronizarUsuarios() {
  try {
    await connectManual();

    const plantillas = await CourseTemplate.find();
    if (plantillas.length === 0) throw new Error('No hay plantillas de curso registradas');

    const usuarios = await User.find();

    for (const user of usuarios) {
      if (!Array.isArray(user.curso)) {
        user.curso = [];
      }

      for (const plantilla of plantillas) {
        const cursoClonado = JSON.parse(JSON.stringify(plantilla.toObject()));
        const index = user.curso.findIndex(c => c.nombre === cursoClonado.nombre);

        if (index === -1) {
          user.curso.push(cursoClonado);
          console.log(`AÑADIDIO: Curso nuevo "${cursoClonado.nombre}" asignado a ${user.email}`);
        } else {
          user.curso[index] = cursoClonado;
          console.log(`ACTUALIZADO: Curso "${cursoClonado.nombre}" actualizado para ${user.email}`);
        }
      }

      await user.save();
    }

    console.log(`Sincronización completa. Usuarios actualizados: ${usuarios.length}`);
  } catch (error) {
    console.error('Error al sincronizar:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

sincronizarUsuarios();

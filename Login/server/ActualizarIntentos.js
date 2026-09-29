// scripts/resetIntentosUsuario.js
import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import { User } from './models/User.js';

const EMAIL_OBJETIVO = 'j.d.jose.b.a.2000@gmail.com'; // email del usuario a actualizar
const NUEVO_INTENTO = 3 // numero de intentos a asignar
const NOTA_RESETEADA = null // Limpiar nota

async function resetearIntentos() {
  try {
    await connectManual();

    const user = await User.findOne({ email: EMAIL_OBJETIVO });
    if (!user) throw new Error('Usuario no encontrado');

    let subejerciciosActualizados = 0;
    let notasRestablecidas = 0;
    const cursos = Array.isArray(user.curso) ? user.curso : (user.curso ? [user.curso] : []);

    if (cursos.length === 0) {
      throw new Error('Usuario no tiene cursos cargados');
    }

    for (const curso of cursos) {
      const modulos = Array.isArray(curso.modulos) ? curso.modulos : [];
      for (const modulo of modulos) {
        const submodulos = Array.isArray(modulo.submodulos) ? modulo.submodulos : [];
        for (const submodulo of submodulos) {
          const ejercicios = Array.isArray(submodulo.ejercicios) ? submodulo.ejercicios : [];
          for (const ejercicio of ejercicios) {
            const categorias = ejercicio.categorias || {};
            for (const categoriaKey of Object.keys(categorias)) {
              const categoria = categorias[categoriaKey];
              const subejercicios = Array.isArray(categoria?.subejercicios) ? categoria.subejercicios : [];
              for (const subejercicio of subejercicios) {
                subejercicio.intentos_restantes = NUEVO_INTENTO;
                subejercicio.nota = NOTA_RESETEADA;
                subejercicio.ultimo_intento = null;
                subejerciciosActualizados++;
                notasRestablecidas++;
              }
              if (categoria) {
                categoria.nota = NOTA_RESETEADA;
                categoria.ultimo_intento = null;
              }
            }
          }
        }
      }
    }

    await user.save();
    console.log(`Intentos actualizados a ${NUEVO_INTENTO} para ${subejerciciosActualizados} subejercicios de ${EMAIL_OBJETIVO}`);
    console.log(`Notas restablecidas para ${notasRestablecidas} subejercicios de ${EMAIL_OBJETIVO}`);
  } catch (error) {
    console.error('Error al actualizar intentos:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

resetearIntentos();

import mongoose from 'mongoose';
import {CourseTemplate} from './models/CourseTemplate.js';
import { connectManual } from './config/connectManual.js';

function generarCategoria(subejerciciosCount = 1) {
  const subejercicios = Array.from({ length: subejerciciosCount }, (_, i) => ({
    nombre: `Subejercicio ${i + 1}`,
    nota: 0,
    intentos_restantes: 3,
    ultimo_intento: null
  }));

  return {
    subejercicios,
    nota: 0,
    ultimo_intento: null
  };
}

function generarEjercicio(nombre, config = {}) {
  return {
    nombre,
    categorias: {
      descomposicion: generarCategoria(config.descomposicion || 1),
      algoritmo: generarCategoria(config.algoritmo || 1),
      abstraccion: generarCategoria(config.abstraccion || 1),
      generalizacion: generarCategoria(config.generalizacion || 1)
    }
  };
}
 
// CONFIGURACIÓN CENTRAL

// Guía Construcción Carro Arduino 
// Guía Programación en C
const cursoConfig = {
  nombreCurso: 'Guía Programación en C',
  modulo: {
    nombre: '4. Variables y operaciones',
    nota: 0,
    submodulo: {
      nombre: '',
      nota: 0,
      ejercicios: [
        generarEjercicio('Ejercicio 1', { descomposicion: 4 }),
      ]
    }
  }
};

async function runSeed() {
  try {
    await connectManual();

    const { nombreCurso, modulo } = cursoConfig;
    const { nombre: nombreModulo, submodulo } = modulo;

    let plantilla = await CourseTemplate.findOne({ nombre: nombreCurso });

    if (!plantilla) {
      // Crear nueva plantilla desde cero
      plantilla = new CourseTemplate({
        nombre: nombreCurso,
        modulos: [
          {
            nombre: nombreModulo,
            nota: 0,
            submodulos: [submodulo]
          }
        ]
      });
      await plantilla.save();
      console.log('Plantilla creada con nuevo módulo y submódulo.');
    } else {
      // Buscar módulo existente
      const moduloExistente = plantilla.modulos.find(m => m.nombre === nombreModulo);

      if (moduloExistente) {
        const existeSubmodulo = moduloExistente.submodulos.some(sub => sub.nombre === submodulo.nombre);
        if (!existeSubmodulo) {
          moduloExistente.submodulos.push(submodulo);
          await plantilla.save();
          console.log('Submódulo agregado al módulo existente.');
        } else {
          console.log('El submódulo ya existe. No se agregó nada.');
        }
      } else {
        // Módulo no existe, lo agregamos con el submódulo
        plantilla.modulos.push({
          nombre: nombreModulo,
          nota: 0,
          submodulos: [submodulo]
        });
        await plantilla.save();
        console.log('Módulo nuevo con submódulo agregado.');
      }
    }
  } catch (error) {
    console.error('Error al actualizar plantilla:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

runSeed();

// controlllers/encuestaController.js
import { Respuestas } from '../models/Respuestas.js';

export async function registrarRespuesta(req, res) {
  try {
    const nuevaRespuesta = new Respuestas(req.body);
    await nuevaRespuesta.save();
    res.status(201).json({ message: 'Respuesta registrada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la respuesta:', error);
    res.status(500).json({ error: 'No se pudo guardar la respuesta' });
  }
}

export async function obtenerResumen(req, res) {
  try {
    const respuestas = await Respuestas.find();

    // Si no hay respuestas aún
    if (!respuestas.length) {
      return res.json({
        categorias: {
          utilidad: 0,
          facilidad: 0,
          actitud: 0,
          intencion: 0
        },
        edad: {},
        genero: {},
        empleo: {}
      });
    }

    // Promedio general de cada categoría (suma de todos los valores dividido total de respuestas)
    const calcularPromedioCategoria = (lista) => {
      const total = lista.reduce((sum, arr) => sum + arr.reduce((a, b) => a + b, 0), 0);
      const cantidad = lista.length * 3; // 3 preguntas por categoría
      return (total / cantidad).toFixed(2);
    };

    const utilidad = calcularPromedioCategoria(respuestas.map(r => r.utility));
    const facilidad = calcularPromedioCategoria(respuestas.map(r => r.easeOfUse));
    const actitud = calcularPromedioCategoria(respuestas.map(r => r.attitude));
    const intencion = calcularPromedioCategoria(respuestas.map(r => r.intention));

    // Conteos demográficos
    const contarPorCampo = (campo) => {
      const conteo = {};
      respuestas.forEach((r) => {
        const key = r[campo] || 'No especificado';
        conteo[key] = (conteo[key] || 0) + 1;
      });
      return conteo;
    };

    const edad = contarPorCampo('age');
    const genero = contarPorCampo('gender');
    const empleo = contarPorCampo('employment');

    res.json({
      categorias: {
        utilidad,
        facilidad,
        actitud,
        intencion
      },
      edad,
      genero,
      empleo
    });

  } catch (error) {
    console.error('Error al obtener resumen:', error);
    res.status(500).json({ error: 'Error al obtener resultados' });
  }
}


import { Respuestas } from '../models/Respuestas.js';

// Registrar una respuesta (solo una vez por usuario)
export async function registrarRespuesta(req, res) {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const yaRespondio = await Respuestas.findOne({ userId });
    if (yaRespondio) {
      return res.status(400).json({ message: 'Ya has respondido la encuesta TAM.' });
    }

    const nuevaRespuesta = new Respuestas({
      ...req.body,
      userId
    });

    await nuevaRespuesta.save();

    res.status(201).json({ message: 'Respuesta registrada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la respuesta:', error);
    res.status(500).json({ error: 'No se pudo guardar la respuesta' });
  }
}

// Obtener resumen estadístico de todas las respuestas
export async function obtenerResumen(req, res) {
  try {
    const respuestas = await Respuestas.find();

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

    const calcularPromedioCategoria = (lista) => {
      const total = lista.reduce((sum, arr) => sum + arr.reduce((a, b) => a + b, 0), 0);
      const cantidad = lista.length * 3;
      return (total / cantidad).toFixed(2);
    };

    const utilidad = calcularPromedioCategoria(respuestas.map(r => r.utility));
    const facilidad = calcularPromedioCategoria(respuestas.map(r => r.easeOfUse));
    const actitud = calcularPromedioCategoria(respuestas.map(r => r.attitude));
    const intencion = calcularPromedioCategoria(respuestas.map(r => r.intention));

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

// Verificar si un usuario ya respondió la encuesta
export async function verificarRespuesta(req, res) {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const respuesta = await Respuestas.findOne({ userId });

    res.status(200).json({ yaRespondio: !!respuesta });
  } catch (error) {
    console.error('Error al verificar respuesta:', error);
    res.status(500).json({ error: 'Error al verificar estado de encuesta' });
  }
}

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

// Mapea cada dimension TAM al campo del documento que la almacena
const DIMENSIONES_TAM = {
  utilidad: 'utility',
  facilidad: 'easeOfUse',
  actitud: 'attitude',
  intencion: 'intention'
};

const CAMPOS_DEMOGRAFICOS = {
  edad: 'age',
  genero: 'gender',
  empleo: 'employment',
  cursos: 'tech_courses',
  hogar: 'household',
  ingresos: 'income'
};

// La encuesta usa una escala Likert ASCENDENTE (1 = Muy baja ... 5 = Muy alta),
// como el TAM estandar. Los valores se guardan y se devuelven tal cual, sin ninguna
// transformacion. El campo `escala` declara la direccion para que los consumidores no
// tengan que asumirla. Ver documentacion/metodologia-tam.md.
const ESCALA = { min: 1, max: 5, direccion: 'ascendente', mejor: 'max' };

// Obtener resumen estadístico de todas las respuestas
export async function obtenerResumen(req, res) {
  try {
    const respuestas = await Respuestas.find();

    const dimensiones = Object.keys(DIMENSIONES_TAM);

    if (!respuestas.length) {
      return res.json({
        total: 0,
        escala: ESCALA,
        categorias: Object.fromEntries(dimensiones.map(d => [d, null])),
        desviaciones: Object.fromEntries(dimensiones.map(d => [d, null])),
        distribuciones: Object.fromEntries(
          dimensiones.map(d => [d, { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }])
        ),
        demografia: Object.fromEntries(Object.keys(CAMPOS_DEMOGRAFICOS).map(k => [k, {}])),
        // Compatibilidad con consumidores previos del endpoint
        edad: {},
        genero: {},
        empleo: {}
      });
    }

    // Aplana los 3 items de una dimension en una sola lista de valores validos
    const valoresDe = (campo) =>
      respuestas
        .flatMap(r => r[campo] ?? [])
        .filter(v => typeof v === 'number' && Number.isFinite(v));

    const promedio = (valores) =>
      valores.length ? Number((valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2)) : null;

    // Desviacion estandar poblacional: acompaña al promedio para reportar dispersion
    const desviacion = (valores) => {
      if (valores.length < 2) return null;
      const media = valores.reduce((a, b) => a + b, 0) / valores.length;
      const varianza = valores.reduce((sum, v) => sum + (v - media) ** 2, 0) / valores.length;
      return Number(Math.sqrt(varianza).toFixed(2));
    };

    // Conteo de cuantas veces se marco cada punto 1..5 de la escala
    const distribucion = (valores) => {
      const conteo = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      valores.forEach(v => {
        if (v >= ESCALA.min && v <= ESCALA.max) conteo[v] += 1;
      });
      return conteo;
    };

    const categorias = {};
    const desviaciones = {};
    const distribuciones = {};

    for (const [dimension, campo] of Object.entries(DIMENSIONES_TAM)) {
      const valores = valoresDe(campo);
      categorias[dimension] = promedio(valores);
      desviaciones[dimension] = desviacion(valores);
      distribuciones[dimension] = distribucion(valores);
    }

    const contarPorCampo = (campo) => {
      const conteo = {};
      respuestas.forEach((r) => {
        const key = r[campo] || 'No especificado';
        conteo[key] = (conteo[key] || 0) + 1;
      });
      return conteo;
    };

    const demografia = Object.fromEntries(
      Object.entries(CAMPOS_DEMOGRAFICOS).map(([clave, campo]) => [clave, contarPorCampo(campo)])
    );

    res.json({
      total: respuestas.length,
      escala: ESCALA,
      categorias,
      desviaciones,
      distribuciones,
      demografia,
      // Compatibilidad con consumidores previos del endpoint
      edad: demografia.edad,
      genero: demografia.genero,
      empleo: demografia.empleo
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

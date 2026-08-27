import { User } from '../models/User.js';

// Reglas del modelo de evaluacion. Se definen aqui, en el servidor, para que
// exista una sola fuente de verdad: el cliente reporta si la respuesta fue
// correcta y el servidor decide la nota.
export const INTENTOS_POR_SUBEJERCICIO = 3;
const NOTA_MAXIMA = 5;
const NOTA_MINIMA = 1;
const NOTA_APROBATORIA = 3;

// La nota depende de cuantos intentos le quedaban al estudiante ANTES de
// responder: 3 intentos -> 5, 2 -> 4, 1 -> 3. Una respuesta incorrecta vale
// siempre la nota minima.
function calcularNota(correcto, intentosRestantes) {
  if (!correcto) return NOTA_MINIMA;
  const usados = INTENTOS_POR_SUBEJERCICIO - intentosRestantes;
  return Math.max(NOTA_APROBATORIA, Math.min(NOTA_MAXIMA, NOTA_MAXIMA - usados));
}

// Un subejercicio se considera presentado cuando tiene fecha de intento.
// La nota no sirve como senal: nota 0 es ambigua entre "no presentado" y
// "presentado y reprobado".
function estaPresentado(sub) {
  return sub.ultimo_intento !== null && sub.ultimo_intento !== undefined;
}

function estaAprobado(sub) {
  return typeof sub.nota === 'number' && sub.nota >= NOTA_APROBATORIA;
}

function resumenSubejercicio(sub) {
  return {
    nombre: sub.nombre,
    nota: typeof sub.nota === 'number' ? sub.nota : null,
    intentos_restantes: sub.intentos_restantes,
    intentos_totales: INTENTOS_POR_SUBEJERCICIO,
    ultimo_intento: sub.ultimo_intento ?? null,
    presentado: estaPresentado(sub),
    aprobado: estaAprobado(sub)
  };
}

function resumenCategoria(cat) {
  const presentados = cat.subejercicios.filter(estaPresentado);
  return {
    nota: typeof cat.nota === 'number' ? cat.nota : null,
    ultimo_intento: cat.ultimo_intento ?? null,
    avance: {
      presentados: presentados.length,
      total: cat.subejercicios.length
    }
  };
}

// La nota de la categoria es el promedio de lo PRESENTADO. Lo que el
// estudiante todavia no ha respondido no cuenta como cero: se reporta aparte
// como avance, para no mezclar desempeno con progreso.
function recalcularCategoria(cat) {
  const presentados = cat.subejercicios.filter(estaPresentado);

  if (presentados.length > 0) {
    const suma = presentados.reduce((acc, s) => acc + (s.nota ?? 0), 0);
    cat.nota = Number((suma / presentados.length).toFixed(2));
    const fechas = presentados.map(s => new Date(s.ultimo_intento).getTime());
    cat.ultimo_intento = new Date(Math.max(...fechas));
  } else {
    cat.nota = null;
    cat.ultimo_intento = null;
  }

  return resumenCategoria(cat);
}

// Resuelve la ruta curso > modulo > submodulo > ejercicio > categoria >
// subejercicio. Devuelve { error } con el mensaje del primer nivel que falle,
// para que el cliente pueda mostrar exactamente que nombre no coincide.
function resolverSubejercicio(user, ruta) {
  const { cursoNombre, modulo, submodulo, ejercicio, categoria, subejercicio } = ruta;

  const curso = user.curso.find(c => c.nombre === cursoNombre);
  if (!curso) return { error: 'Curso no encontrado: ' + cursoNombre };

  const mod = curso.modulos.find(m => m.nombre === modulo);
  if (!mod) return { error: 'Modulo no encontrado: ' + modulo };

  const sub = mod.submodulos.find(s => s.nombre === submodulo);
  if (!sub) return { error: 'Submodulo no encontrado: ' + submodulo };

  const eje = sub.ejercicios.find(e => e.nombre === ejercicio);
  if (!eje) return { error: 'Ejercicio no encontrado: ' + ejercicio };

  const cat = eje.categorias ? eje.categorias[categoria] : null;
  if (!cat) return { error: 'Categoria no valida: ' + categoria };

  const subEj = cat.subejercicios.find(s => s.nombre === subejercicio);
  if (!subEj) return { error: 'Subejercicio no encontrado: ' + subejercicio };

  return { cat, subEj };
}

// POST /api/curso/evaluar
//
// Consulta de estado:  { ...ruta }                    -> no modifica nada
// Registro (actual):   { ...ruta, correcto: boolean } -> el servidor calcula la nota
// Registro (legado):   { ...ruta, nota: number }      -> compatibilidad con las
//                      guias que todavia calculan la nota en el cliente
//
// Responde siempre con la misma forma:
//   { registrado, motivo, subejercicio: {...}, categoria: {...} }
export const registrarEvaluacion = async (req, res) => {
  const {
    cursoNombre,
    modulo,
    submodulo,
    ejercicio,
    categoria,
    subejercicio,
    correcto,
    nota
  } = req.body;

  if (!cursoNombre || !modulo || !submodulo || !ejercicio || !categoria || !subejercicio) {
    return res.status(400).json({ message: 'Faltan datos para evaluar' });
  }

  const esRegistroPorResultado = typeof correcto === 'boolean';
  const esRegistroPorNota = nota !== null && nota !== undefined;

  if (esRegistroPorNota && !esRegistroPorResultado) {
    if (typeof nota !== 'number' || Number.isNaN(nota) || nota < 0 || nota > NOTA_MAXIMA) {
      return res.status(400).json({ message: 'La nota debe ser un numero entre 0 y ' + NOTA_MAXIMA });
    }
  }

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const { error, cat, subEj } = resolverSubejercicio(user, {
      cursoNombre, modulo, submodulo, ejercicio, categoria, subejercicio
    });
    if (error) return res.status(404).json({ message: error });

    // Consulta de estado: no toca nada.
    if (!esRegistroPorResultado && !esRegistroPorNota) {
      return res.status(200).json({
        registrado: false,
        motivo: 'consulta',
        subejercicio: resumenSubejercicio(subEj),
        categoria: resumenCategoria(cat)
      });
    }

    // Sin intentos o ya aprobado: se responde 200 con el estado actual y
    // registrado:false. No es un error de la peticion, asi que no se usa 4xx
    // (un 403 aqui hace que el interceptor del cliente intente refrescar el
    // token y reenviar la peticion).
    if (subEj.intentos_restantes <= 0) {
      return res.status(200).json({
        registrado: false,
        motivo: 'sin_intentos',
        subejercicio: resumenSubejercicio(subEj),
        categoria: resumenCategoria(cat)
      });
    }

    if (estaAprobado(subEj)) {
      return res.status(200).json({
        registrado: false,
        motivo: 'ya_aprobado',
        subejercicio: resumenSubejercicio(subEj),
        categoria: resumenCategoria(cat)
      });
    }

    const notaCalculada = esRegistroPorResultado
      ? calcularNota(correcto, subEj.intentos_restantes)
      : nota;

    // Nunca se baja una nota ya obtenida: un intento posterior solo puede
    // mejorarla.
    const notaPrevia = typeof subEj.nota === 'number' ? subEj.nota : null;
    subEj.nota = notaPrevia === null ? notaCalculada : Math.max(notaPrevia, notaCalculada);
    subEj.intentos_restantes -= 1;
    subEj.ultimo_intento = new Date();

    const resumenCat = recalcularCategoria(cat);

    await user.save();

    return res.status(200).json({
      registrado: true,
      motivo: 'ok',
      subejercicio: resumenSubejercicio(subEj),
      categoria: resumenCat
    });

  } catch (error) {
    console.error('Error en registrarEvaluacion:', error.message);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// GET /api/curso/progreso
export const obtenerProgresoCurso = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({
      cursos: user.curso,
      intentos_por_subejercicio: INTENTOS_POR_SUBEJERCICIO
    });

  } catch (err) {
    console.error('Error en obtenerProgresoCurso:', err.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

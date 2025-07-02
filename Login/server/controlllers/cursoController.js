import { User } from '../models/User.js';

// POST /api/curso/evaluar
export const registrarEvaluacion = async (req, res) => {
  const {
    cursoNombre,
    modulo,
    submodulo,
    ejercicio,
    categoria,
    subejercicio,
    nota
  } = req.body;

  if (!cursoNombre || !modulo || !submodulo || !ejercicio || !categoria || !subejercicio) {
    return res.status(400).json({ message: 'Faltan datos para evaluar' });
  }

  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const curso = user.curso.find(c => c.nombre === cursoNombre);
    if (!curso) return res.status(404).json({ message: 'Curso no encontrado' });

    const mod = curso.modulos.find(m => m.nombre === modulo);
    if (!mod) return res.status(404).json({ message: 'Módulo no encontrado' });

    const sub = mod.submodulos.find(s => s.nombre === submodulo);
    if (!sub) return res.status(404).json({ message: 'Submódulo no encontrado' });

    const eje = sub.ejercicios.find(e => e.nombre === ejercicio);
    if (!eje) return res.status(404).json({ message: 'Ejercicio no encontrado' });

    const cat = eje.categorias[categoria];
    if (!cat) return res.status(404).json({ message: 'Categoría no válida' });

    const subEj = cat.subejercicios.find(s => s.nombre === subejercicio);
    if (!subEj) return res.status(404).json({ message: 'Subejercicio no encontrado' });

    // Consulta sin registrar nota
    if (nota === null || nota === undefined) {
      return res.status(200).json({
        subejercicio: {
          intentos_restantes: subEj.intentos_restantes,
          nota: subEj.nota,
          ultimo_intento: subEj.ultimo_intento
        }
      });
    }

    // Validar intentos disponibles
    if (subEj.intentos_restantes <= 0) {
      return res.status(403).json({ message: 'Ya no tiene intentos disponibles para este subejercicio' });
    }

    // Registrar nota e intento
    subEj.nota = nota;
    subEj.intentos_restantes -= 1;
    subEj.ultimo_intento = new Date();

    // Recalcular promedio de la categoría
    const total = cat.subejercicios.reduce((acc, s) => acc + (s.nota || 0), 0);
    cat.nota = total / cat.subejercicios.length;

    // Calcular última fecha de intento de la categoría
    const fechas = cat.subejercicios.map(s => s.ultimo_intento).filter(f => f);
    cat.ultimo_intento = fechas.length > 0 ? new Date(Math.max(...fechas.map(f => new Date(f)))) : null;

    await user.save();

    return res.status(200).json({
      message: 'Evaluación registrada',
      subejercicio: {
        nota: subEj.nota,
        intentos_restantes: subEj.intentos_restantes,
        ultimo_intento: subEj.ultimo_intento
      },
      nota_categoria: cat.nota
    });

  } catch (error) {
    console.error('Error en registrarEvaluacion:', error.message);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// GET /api/curso/progreso
export const obtenerProgresoCurso = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Devuelve todos los cursos asignados
    res.status(200).json({ cursos: user.curso });

  } catch (err) {
    console.error('Error en obtenerProgresoCurso:', err.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

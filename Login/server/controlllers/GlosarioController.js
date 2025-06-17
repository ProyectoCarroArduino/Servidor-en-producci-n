import GlosarioReferencias from '../models/GlosarioConcepto.js';

// Obtener todo el contenido (conceptos y referencias)
export const obtenerContenido = async (req, res) => {
  try {
    const data = await GlosarioReferencias.findOne();
    res.json(data || { conceptos: [], referencias: [] });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el contenido' });
  }
};

// Crear o reemplazar el contenido completo (reset + insertar)
export const crearContenido = async (req, res) => {
  try {
    await GlosarioReferencias.deleteMany();
    const creado = await GlosarioReferencias.create(req.body);
    res.status(201).json(creado);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear contenido', detalle: err.message });
  }
};

// Agregar un nuevo concepto al documento existente
export const agregarConcepto = async (req, res) => {
  try {
    const documento = await GlosarioReferencias.findOne();
    if (!documento) return res.status(404).json({ error: 'Contenido no encontrado' });

    documento.conceptos.push(req.body);
    await documento.save();
    res.status(201).json(req.body);
  } catch (err) {
    res.status(400).json({ error: 'Error al agregar concepto', detalle: err.message });
  }
};

// Eliminar un concepto por ID
export const eliminarConcepto = async (req, res) => {
  try {
    const documento = await GlosarioReferencias.findOne();
    if (!documento) return res.status(404).json({ error: 'Contenido no encontrado' });

    const index = documento.conceptos.findIndex(c => c._id.toString() === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Concepto no encontrado' });

    documento.conceptos.splice(index, 1);
    await documento.save();
    res.json({ mensaje: 'Concepto eliminado correctamente' });
  } catch (err) {
    console.error('Error al eliminar concepto:', err);
    res.status(500).json({ error: 'Error al eliminar concepto' });
  }
};

// Agregar una nueva referencia
export const agregarReferencia = async (req, res) => {
  try {
    const documento = await GlosarioReferencias.findOne();
    if (!documento) return res.status(404).json({ error: 'Contenido no encontrado' });

    documento.referencias.push(req.body);
    await documento.save();
    res.status(201).json(req.body);
  } catch (err) {
    res.status(400).json({ error: 'Error al agregar referencia', detalle: err.message });
  }
};

// Eliminar una referencia por ID
export const eliminarReferencia = async (req, res) => {
  try {
    const documento = await GlosarioReferencias.findOne();
    if (!documento) return res.status(404).json({ error: 'Contenido no encontrado' });

    const index = documento.referencias.findIndex(r => r._id.toString() === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Referencia no encontrada' });

    documento.referencias.splice(index, 1);
    await documento.save();
    res.json({ mensaje: 'Referencia eliminada correctamente' });
  } catch (err) {
    console.error('Error al eliminar referencia:', err);
    res.status(500).json({ error: 'Error al eliminar referencia' });
  }
};

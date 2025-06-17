import mongoose from 'mongoose';

const conceptoSchema = new mongoose.Schema({
  termino: { type: String, required: true, trim: true },
  definicion: { type: String, required: true, trim: true }
}, { _id: true });

const referenciaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  tipo: { type: String, enum: ['Lectura', 'Video', 'Sitio Web', 'Curso'], default: 'Lectura' },
  enlace: { type: String, required: true },
  descripcion: { type: String }
}, { _id: true });

const GlosarioReferenciasSchema = new mongoose.Schema({
  conceptos: [conceptoSchema],
  referencias: [referenciaSchema]
});

const GlosarioReferencias = mongoose.model('GlosarioReferencias', GlosarioReferenciasSchema);
export default GlosarioReferencias;

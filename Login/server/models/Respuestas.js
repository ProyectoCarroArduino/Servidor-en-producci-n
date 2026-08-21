// models/Respuestas.js
import mongoose from 'mongoose';

const registroDBConnection = mongoose.createConnection(process.env.URI_MONGODB);

// Esquema principal de la respuesta de encuesta
// Nota: cada dimension TAM se guarda como un arreglo plano de 4 valores 1..5
// en la escala ascendente del formulario (1 = Muy baja ... 5 = Muy alta).
// Antes del 10 de agosto de 2026 eran 3 items por dimension; los documentos
// anteriores siguen siendo legibles, pero no comparables con los actuales.
const ITEMS_POR_DIMENSION = 4;
const ESCALA_MIN = 1;
const ESCALA_MAX = 5;

// Valida cantidad de items y rango de cada valor. El rango faltaba: el esquema
// aceptaba cualquier numero mientras el arreglo tuviera el largo correcto.
const escalaTAM = {
  validator: (arr) =>
    Array.isArray(arr) &&
    arr.length === ITEMS_POR_DIMENSION &&
    arr.every(v => Number.isInteger(v) && v >= ESCALA_MIN && v <= ESCALA_MAX),
  message: `Cada dimension requiere ${ITEMS_POR_DIMENSION} valores enteros entre ${ESCALA_MIN} y ${ESCALA_MAX}`
};

const respuestaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // asegura una sola respuesta por usuario
  },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  tech_courses: { type: String, required: true },
  household: { type: String, required: true },
  income: { type: String, required: true },
  employment: { type: String, required: true },
  utility: {
    type: [Number],
    validate: escalaTAM
  },
  easeOfUse: {
    type: [Number],
    validate: escalaTAM
  },
  attitude: {
    type: [Number],
    validate: escalaTAM
  },
  intention: {
    type: [Number],
    validate: escalaTAM
  },
  submittedAt: { type: Date, default: Date.now }
});

export const Respuestas = registroDBConnection.model(
  'Respuestas',
  respuestaSchema,
  'Respuestas' // Nombre explícito de la colección
);

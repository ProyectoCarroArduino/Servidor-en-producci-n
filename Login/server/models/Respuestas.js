// models/Respuestas.js
import mongoose from 'mongoose';

const registroDBConnection = mongoose.createConnection(process.env.URI_MONGODB);

// Esquema para las secciones TAM (utility, easeOfUse, etc.)
const SeccionTAMSchema = new mongoose.Schema({
  respuestas: {
    type: [Number],
    validate: arr => arr.length === 3 // asegura que lleguen 3 respuestas
  }
}, { _id: false });

// Esquema principal de la respuesta de encuesta
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
    validate: arr => arr.length === 3
  },
  easeOfUse: {
    type: [Number],
    validate: arr => arr.length === 3
  },
  attitude: {
    type: [Number],
    validate: arr => arr.length === 3
  },
  intention: {
    type: [Number],
    validate: arr => arr.length === 3
  },
  submittedAt: { type: Date, default: Date.now }
});

export const Respuestas = registroDBConnection.model(
  'Respuestas',
  respuestaSchema,
  'Respuestas' // Nombre explícito de la colección
);

// routes/api/encuesta.js
import express from 'express';
import { registrarRespuesta, obtenerResumen } from '../../controlllers/EncuestaController';

const router = express.Router();

router.post('/responder', registrarRespuesta);

// Nueva ruta para enviar los resultados estadísticos al frontend
router.get('/resumen', obtenerResumen);

export default router;
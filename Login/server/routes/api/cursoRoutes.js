import express from 'express';
import { registrarEvaluacion, obtenerProgresoCurso } from '../../controlllers/cursoController.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

console.log("cursoRoutes cargado correctamente")
router.post('/evaluar', auth, registrarEvaluacion);
router.get("/curso/progreso", auth, obtenerProgresoCurso);

export default router;

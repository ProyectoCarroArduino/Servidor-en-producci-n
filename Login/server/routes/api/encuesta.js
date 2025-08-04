import express from 'express';
import {
  registrarRespuesta,
  obtenerResumen,
  verificarRespuesta
} from '../../controlllers/EncuestaController.js';

import { authentication } from '../../middlewares/authentication.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

router.use(authentication); // añade req.user desde JWT si hay token

router.post('/responder', auth, registrarRespuesta);
router.get('/verificar', auth, verificarRespuesta);
router.get('/resumen', obtenerResumen); // pública

export default router;
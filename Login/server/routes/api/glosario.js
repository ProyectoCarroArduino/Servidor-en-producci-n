import express from 'express';
import {
  obtenerContenido,
  crearContenido,
  agregarConcepto,
  eliminarConcepto,
  agregarReferencia,
  eliminarReferencia
} from '../../controlllers/GlosarioController.js';

import { authentication } from '../../middlewares/authentication.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

// Solo usuarios autenticados
router.use(authentication);
router.use(auth);

// Obtener todos los conceptos y referencias
router.get('/', obtenerContenido);

// Reemplazar todo el contenido (crear estructura base)
router.post('/', crearContenido);

// Conceptos
router.post('/concepto', agregarConcepto);
router.delete('/concepto/:id', eliminarConcepto);

// Referencias
router.post('/referencia', agregarReferencia);
router.delete('/referencia/:id', eliminarReferencia);

export default router;

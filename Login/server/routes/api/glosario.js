import express from 'express';
import {
  obtenerContenido,
  crearContenido,
  agregarConcepto,
  eliminarConcepto,
  agregarReferencia,
  eliminarReferencia
} from '../../controlllers/GlosarioController.js';

const router = express.Router();

router.get('/', obtenerContenido);
router.post('/', crearContenido);

// CRUD parcial por tipo
router.post('/concepto', agregarConcepto);
router.delete('/concepto/:id', eliminarConcepto);

router.post('/referencia', agregarReferencia);
router.delete('/referencia/:id', eliminarReferencia);

export default router;

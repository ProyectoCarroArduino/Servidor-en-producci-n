// Pruebas del modelo de evaluacion. NO requieren base de datos: se reemplaza
// User.findById por un documento en memoria.
//
//   node testEvaluacion.js
//
import { User } from './models/User.js';
import { registrarEvaluacion } from './controlllers/cursoController.js';

const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 1',
  categoria: 'descomposicion'
};

let guardados = 0;

function nuevoUsuario() {
  const subejercicios = Array.from({ length: 7 }, (_, i) => ({
    nombre: `Subejercicio ${i + 1}`,
    nota: null,
    intentos_restantes: 3,
    ultimo_intento: null
  }));

  return {
    curso: [{
      nombre: RUTA.cursoNombre,
      modulos: [{
        nombre: RUTA.modulo,
        submodulos: [{
          nombre: RUTA.submodulo,
          ejercicios: [{
            nombre: RUTA.ejercicio,
            categorias: {
              descomposicion: { nota: null, ultimo_intento: null, subejercicios }
            }
          }]
        }]
      }]
    }],
    save: async () => { guardados++; }
  };
}

const usuario = nuevoUsuario();
User.findById = async () => usuario;

async function llamar(body) {
  const req = { body: { ...body }, user: { id: 'test' } };
  let estado = 200;
  let cuerpo = null;
  const res = {
    status(c) { estado = c; return this; },
    json(b) { cuerpo = b; return this; }
  };
  await registrarEvaluacion(req, res);
  return { estado, cuerpo };
}

let fallos = 0;

function check(nombre, real, esperado) {
  const ok = JSON.stringify(real) === JSON.stringify(esperado);
  if (!ok) fallos++;
  console.log(
    (ok ? '  OK   ' : '  FALLA') + '  ' + nombre +
    (ok ? '' : `\n         esperado ${JSON.stringify(esperado)} / obtenido ${JSON.stringify(real)}`)
  );
}

async function correr() {
  console.log('\n1) Consulta inicial: un subejercicio sin presentar no tiene nota 0, tiene nota null');
  let r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 1' });
  check('nota null', r.cuerpo.subejercicio.nota, null);
  check('intentos 3 de 3', [r.cuerpo.subejercicio.intentos_restantes, r.cuerpo.subejercicio.intentos_totales], [3, 3]);
  check('presentado false', r.cuerpo.subejercicio.presentado, false);
  check('avance 0/7', r.cuerpo.categoria.avance, { presentados: 0, total: 7 });
  check('una consulta no escribe', guardados, 0);

  console.log('\n2) Acierta al primer intento: la nota la calcula el servidor');
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 1', correcto: true });
  check('nota 5', r.cuerpo.subejercicio.nota, 5);
  check('quedan 2 intentos', r.cuerpo.subejercicio.intentos_restantes, 2);
  check('aprobado', r.cuerpo.subejercicio.aprobado, true);

  console.log('\n3) Responde otra vez y falla: no puede destruir la nota ya obtenida');
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 1', correcto: false });
  check('registrado false', r.cuerpo.registrado, false);
  check('motivo ya_aprobado', r.cuerpo.motivo, 'ya_aprobado');
  check('la nota sigue en 5', r.cuerpo.subejercicio.nota, 5);
  check('no consume intento', r.cuerpo.subejercicio.intentos_restantes, 2);

  console.log('\n4) Falla y despues acierta: la nota sube, nunca baja');
  await llamar({ ...RUTA, subejercicio: 'Subejercicio 2', correcto: false });
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 2', correcto: true });
  check('nota 4', r.cuerpo.subejercicio.nota, 4);
  check('queda 1 intento', r.cuerpo.subejercicio.intentos_restantes, 1);

  console.log('\n5) La nota de la categoria promedia lo presentado, no divide entre 7');
  check('nota 4.5 (promedio de 5 y 4)', r.cuerpo.categoria.nota, 4.5);
  check('avance 2/7', r.cuerpo.categoria.avance, { presentados: 2, total: 7 });

  console.log('\n6) Agotar los intentos no devuelve 403 (eso disparaba un refresh de token)');
  await llamar({ ...RUTA, subejercicio: 'Subejercicio 3', correcto: false });
  await llamar({ ...RUTA, subejercicio: 'Subejercicio 3', correcto: false });
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 3', correcto: false });
  check('nota minima 1', r.cuerpo.subejercicio.nota, 1);
  check('0 intentos', r.cuerpo.subejercicio.intentos_restantes, 0);
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 3', correcto: true });
  check('motivo sin_intentos', r.cuerpo.motivo, 'sin_intentos');
  check('responde 200', r.estado, 200);

  console.log('\n7) Validacion de entrada');
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 4', nota: 99 });
  check('nota fuera de rango -> 400', r.estado, 400);
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 4', nota: 'cinco' });
  check('nota no numerica -> 400', r.estado, 400);
  r = await llamar({ ...RUTA, modulo: 'Modulo inexistente', subejercicio: 'Subejercicio 4' });
  check('ruta inexistente -> 404', r.estado, 404);
  check('el mensaje dice que nivel fallo', r.cuerpo.message, 'Modulo no encontrado: Modulo inexistente');

  console.log('\n8) La via legada (nota calculada en el cliente) sigue funcionando');
  r = await llamar({ ...RUTA, subejercicio: 'Subejercicio 5', nota: 5 });
  check('registra 5', r.cuerpo.subejercicio.nota, 5);
  check('misma forma de respuesta', Object.keys(r.cuerpo).sort(), ['categoria', 'motivo', 'registrado', 'subejercicio']);

  console.log('\n' + (fallos === 0 ? 'TODAS LAS PRUEBAS PASARON' : fallos + ' PRUEBA(S) FALLARON'));
  process.exit(fallos === 0 ? 0 : 1);
}

correr();

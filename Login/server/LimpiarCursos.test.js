import test from 'node:test';
import assert from 'node:assert/strict';
import { limpiarCursosObsoletos, leerArgumentos } from './LimpiarCursos.js';

test('argumentos: simula por defecto y exige --apply exacto para eliminar', () => {
  assert.deepEqual(leerArgumentos([]), { aplicar: false, ayuda: false });
  assert.deepEqual(leerArgumentos(['--dry-run']), { aplicar: false, ayuda: false });
  assert.deepEqual(leerArgumentos(['--apply']), { aplicar: true, ayuda: false });
  assert.deepEqual(leerArgumentos(['--help']), { aplicar: false, ayuda: true });
  assert.throws(() => leerArgumentos(['[--apply]']), /Argumentos no reconocidos: "\[--apply\]"/);
  assert.throws(() => leerArgumentos(['--apply', '--dry-run']), /Usa solo uno/);
  assert.throws(() => leerArgumentos(['--apply', '--otro']), /Argumentos no reconocidos/);
});

// Modelos en memoria: estas pruebas nunca se conectan a MongoDB.
function escenario() {
  const datos = {
    usuarios: [
      { _id: 'u1', curso: [
        { nombre: 'Vigente', modulos: [{ nota: 4.5, intentos_restantes: 2 }] },
        { nombre: 'Antiguo' },
        { nombre: 'Retirado' },
        { modulos: [] }
      ] },
      { _id: 'u2', curso: [{ nombre: 'Vigente', modulos: [] }] },
      { _id: 'u3', curso: [] },
      { _id: 'u4' }
    ],
    plantillas: [{ _id: 'p1', nombre: 'Vigente' }, { _id: 'p2', nombre: 'Antiguo' }],
    escrituras: 0,
    cerrado: false
  };
  const usuarios = {
    find() {
      return { select() { return this; }, lean() { return this; }, cursor() {
        return {
          async *[Symbol.asyncIterator]() { yield* structuredClone(datos.usuarios); },
          async close() { datos.cerrado = true; }
        };
      } };
    },
    async updateOne(filtro, cambio) {
      assert.deepEqual(Object.keys(cambio), ['$pull']);
      assert.deepEqual(Object.keys(cambio.$pull), ['curso']);
      datos.escrituras++;
      const usuario = datos.usuarios.find(u => u._id === filtro._id);
      usuario.curso = usuario.curso.filter(c => cambio.$pull.curso.nombre.$nin.includes(c.nombre));
      return { modifiedCount: 1 };
    }
  };
  const plantillas = {
    find(filtro) {
      return { select() { return this; }, async lean() {
        return datos.plantillas.filter(p => !filtro.nombre.$nin.includes(p.nombre));
      } };
    },
    async deleteMany(filtro) {
      datos.escrituras++;
      const antes = datos.plantillas.length;
      datos.plantillas = datos.plantillas.filter(p =>
        !filtro._id.$in.includes(p._id) || filtro.nombre.$nin.includes(p.nombre));
      return { deletedCount: antes - datos.plantillas.length };
    }
  };
  return { datos, opciones: { cursos: [{ nombre: 'Vigente' }], usuarios, plantillas, log() {} } };
}

test('la simulación informa los obsoletos sin escribir', async () => {
  const { datos, opciones } = escenario();
  const antes = structuredClone(datos.usuarios);
  const resumen = await limpiarCursosObsoletos(opciones);
  assert.equal(resumen.cursosObsoletos, 3);
  assert.equal(resumen.usuariosAfectados, 1);
  assert.equal(resumen.plantillasObsoletas, 1);
  assert.equal(datos.escrituras, 0);
  assert.deepEqual(datos.usuarios, antes);
  assert.equal(datos.cerrado, true);
});

test('elimina cursos y plantillas retirados, conserva progreso y permite repetir', async () => {
  const { datos, opciones } = escenario();
  const vigente = structuredClone(datos.usuarios[0].curso[0]);
  const resumen = await limpiarCursosObsoletos({ ...opciones, aplicar: true });
  assert.deepEqual(datos.usuarios[0].curso, [vigente]);
  assert.deepEqual(datos.plantillas, [{ _id: 'p1', nombre: 'Vigente' }]);
  assert.equal(resumen.usuariosActualizados, 1);
  assert.equal(resumen.plantillasEliminadas, 1);
  const escrituras = datos.escrituras;
  const repetido = await limpiarCursosObsoletos({ ...opciones, aplicar: true });
  assert.equal(repetido.cursosObsoletos, 0);
  assert.equal(datos.escrituras, escrituras);
});

test('una colección de plantillas vacía no elimina cursos configurados', async () => {
  const { datos, opciones } = escenario();
  datos.plantillas = [];
  await limpiarCursosObsoletos({ ...opciones, aplicar: true });
  assert.equal(datos.usuarios[0].curso[0].nombre, 'Vigente');
  assert.equal(datos.usuarios[1].curso.length, 1);
});

test('configuraciones vacías, inválidas o duplicadas cancelan sin escribir', async () => {
  for (const cursos of [[], null, [{}], [null], [{ nombre: ' ' }], [{ nombre: 'A' }, { nombre: 'A' }]]) {
    const { datos, opciones } = escenario();
    await assert.rejects(limpiarCursosObsoletos({ ...opciones, cursos, aplicar: true }));
    assert.equal(datos.escrituras, 0);
  }
});

test('un error de escritura se propaga y cierra el cursor', async () => {
  const { datos, opciones } = escenario();
  opciones.usuarios.updateOne = async () => { throw new Error('Fallo de escritura'); };
  await assert.rejects(limpiarCursosObsoletos({ ...opciones, aplicar: true }), /Fallo de escritura/);
  assert.equal(datos.cerrado, true);
  assert.equal(datos.plantillas.length, 2);
});

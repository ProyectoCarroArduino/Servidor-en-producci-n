// Comprueba que TODA ruta de evaluacion que envian las vistas exista en la
// plantilla de cursos, y avisa de rutas compartidas por varios ejercicios.
//
// No necesita base de datos: lee los .vue del cliente y los compara contra
// cursosConfig.js.
//
// Esta es la comprobacion que detecta de una sola pasada los dos errores que ya
// aparecieron en el proyecto:
//   1. una vista que apunta a un nombre que no existe (404 al evaluar),
//   2. varias vistas copiadas que apuntan al mismo subejercicio y se pisan la
//      nota entre si.
//
//   node verificarRutas.js
//
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CURSOS } from './cursosConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '../client/src');

// --- Rutas validas segun la plantilla ---
const validas = new Set();
for (const curso of CURSOS) {
  for (const modulo of curso.modulos) {
    for (const submodulo of modulo.submodulos) {
      for (const ejercicio of submodulo.ejercicios) {
        for (const [cat, datos] of Object.entries(ejercicio.categorias)) {
          for (const sub of datos.subejercicios) {
            validas.add([curso.nombre, modulo.nombre, submodulo.nombre, ejercicio.nombre, cat, sub.nombre].join(' | '));
          }
        }
      }
    }
  }
}

// --- Rutas que declaran las vistas ---
function listarVue(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) listarVue(p, acc);
    else if (e.name.endsWith('.vue')) acc.push(p);
  }
  return acc;
}

// El lookbehind evita que "ejercicio" haga match dentro de "subejercicio"
// (y "modulo" dentro de "submodulo").
const campo = (bloque, clave) => {
  const m = bloque.match(new RegExp(String.raw`(?<![A-Za-z])` + clave + String.raw`:\s*['"]([^'"]+)`));
  return m ? m[1] : null;
};

const usos = new Map(); // ruta -> [archivos]
const incompletas = [];

for (const archivo of listarVue(SRC)) {
  const s = fs.readFileSync(archivo, 'utf8');
  if (!s.includes('useEvaluacionSubejercicio(')) continue;

  const rel = path.relative(SRC, archivo).replace(/\\/g, '/');
  const bloques = s.match(/useEvaluacionSubejercicio\(\{[\s\S]*?\}\)/g) || [];

  // Algunas vistas sacan la parte comun a una constante y la esparcen:
  //   const RUTA = { cursoNombre: ..., modulo: ... };
  //   useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' })
  // Hay que resolver ese spread antes de leer los campos.
  const constantes = {};
  for (const m of s.matchAll(/const\s+([A-Za-z_$][\w$]*)\s*=\s*\{([\s\S]*?)\n\};/g)) {
    constantes[m[1]] = m[2];
  }

  for (const bruto of bloques) {
    let b = bruto;
    for (const m of bruto.matchAll(/\.\.\.([A-Za-z_$][\w$]*)/g)) {
      if (constantes[m[1]]) b += '\n' + constantes[m[1]];
    }
    const partes = ['cursoNombre', 'modulo', 'submodulo', 'ejercicio', 'categoria', 'subejercicio'].map(k => campo(b, k));
    if (partes.some(p => p === null)) {
      incompletas.push(rel + '  (faltan campos: ' +
        ['cursoNombre', 'modulo', 'submodulo', 'ejercicio', 'categoria', 'subejercicio']
          .filter((_, i) => partes[i] === null).join(', ') + ')');
      continue;
    }
    const ruta = partes.join(' | ');
    if (!usos.has(ruta)) usos.set(ruta, []);
    usos.get(ruta).push(rel);
  }
}

// --- Reporte ---
let problemas = 0;

const inexistentes = [...usos.keys()].filter(r => !validas.has(r));
if (inexistentes.length) {
  problemas += inexistentes.length;
  console.log('\n[ERROR] Rutas que NO existen en la plantilla (evaluar devolvera 404):');
  for (const r of inexistentes.sort()) {
    console.log('  ' + r);
    usos.get(r).forEach(f => console.log('      <- ' + f));
  }
}

if (incompletas.length) {
  problemas += incompletas.length;
  console.log('\n[ERROR] Llamadas sin todos los campos (evaluar devolvera 400):');
  incompletas.forEach(f => console.log('  ' + f));
}

const compartidas = [...usos.entries()].filter(([, fs_]) => fs_.length > 1);
if (compartidas.length) {
  console.log('\n[AVISO] Rutas declaradas por mas de un archivo. Si los archivos son');
  console.log('        ejercicios distintos, se pisan la nota entre si:');
  for (const [r, archivos] of compartidas.sort()) {
    console.log('  ' + r);
    archivos.forEach(f => console.log('      <- ' + f));
  }
}

const sinUsar = [...validas].filter(r => !usos.has(r));
if (sinUsar.length) {
  console.log('\n[INFO] Subejercicios de la plantilla que ninguna vista registra todavia:');
  sinUsar.sort().forEach(r => console.log('  ' + r));
}

console.log('\n=== RESUMEN ===');
console.log('Subejercicios en la plantilla: ' + validas.size);
console.log('Rutas distintas en las vistas: ' + usos.size);
console.log('Errores: ' + problemas);
console.log(problemas === 0 ? '\nTodas las rutas de las vistas existen en la plantilla.' : '');
process.exitCode = problemas === 0 ? 0 : 1;

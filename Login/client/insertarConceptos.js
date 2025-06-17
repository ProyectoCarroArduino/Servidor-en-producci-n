import mongoose from 'mongoose';
import { connectManual } from './config/connectManual.js';
import GlosarioReferencias from './models/GlosarioConcepto.js';

const conceptos = [
  { termino: "Algoritmo", definicion: "Conjunto ordenado de pasos que describen cómo resolver un problema o realizar una tarea." },
  { termino: "Descomposición", definicion: "Técnica para dividir un problema complejo en subproblemas más simples y manejables." },
  { termino: "Abstracción", definicion: "Proceso para enfocarse en los aspectos esenciales de un problema, ignorando los detalles menores." },
  { termino: "Generalización", definicion: "Capacidad de aplicar una solución a una variedad de problemas similares." },
  { termino: "Pensamiento computacional", definicion: "Forma de abordar problemas que implica descomponer, abstraer, reconocer patrones y diseñar algoritmos." },
  { termino: "Iteración", definicion: "Repetición de un conjunto de instrucciones hasta que se cumpla una condición." },
  { termino: "Condicional", definicion: "Instrucción que permite tomar decisiones (como 'si esto ocurre, entonces haz esto otro')." },
  { termino: "Variable", definicion: "Espacio de memoria para guardar un valor que puede cambiar durante la ejecución del programa." },
  { termino: "Constante", definicion: "Valor que no cambia durante la ejecución del programa." },
  { termino: "Bucles (Loops)", definicion: "Estructuras que permiten repetir bloques de código (por ejemplo: for, while)." },
  { termino: "Función", definicion: "Bloque de código reutilizable que realiza una tarea específica." },
  { termino: "Parámetro", definicion: "Valor que se pasa a una función para que lo utilice internamente." },
  { termino: "Retorno (Return)", definicion: "Resultado que una función entrega después de ejecutarse." },
  { termino: "Entrada (Input)", definicion: "Información que el usuario proporciona al sistema o programa." },
  { termino: "Salida (Output)", definicion: "Información que el sistema entrega al usuario como resultado." },
  { termino: "Depuración", definicion: "Proceso de encontrar y corregir errores en un programa." },
  { termino: "Error de sintaxis", definicion: "Fallo en las reglas del lenguaje (como olvidar un punto y coma o paréntesis)." },
  { termino: "Error lógico", definicion: "Cuando el programa corre pero no da el resultado esperado." },
  { termino: "Patrón", definicion: "Repetición o estructura reconocible que se puede usar para simplificar o predecir soluciones." },
  { termino: "Pseudo-código", definicion: "Representación informal de un algoritmo, escrita en lenguaje natural o simplificado." },
  { termino: "Diagrama de flujo", definicion: "Representación visual de un proceso, con símbolos que muestran decisiones, procesos y acciones." },
  { termino: "Recursividad", definicion: "Técnica en la que una función se llama a sí misma para resolver un problema." },
  { termino: "Compilador", definicion: "Programa que traduce el código fuente a lenguaje de máquina antes de ejecutarse." },
  { termino: "Intérprete", definicion: "Programa que ejecuta el código fuente línea por línea sin compilarlo previamente." }
];

const referencias = [
  {
    nombre: "Manual de Pensamiento Computacional",
    tipo: "Lectura",
    enlace: "https://ejemplo.com/manual.pdf",
    descripcion: "Documento base para desarrollar los conceptos y ejercicios."
  },
  {
    nombre: "Video: ¿Qué es un algoritmo?",
    tipo: "Video",
    enlace: "https://www.youtube.com/watch?v=aywZrzNaKjs",
    descripcion: "Explicación visual y sencilla sobre algoritmos."
  },
  {
    nombre: "Scratch (programación visual)",
    tipo: "Sitio Web",
    enlace: "https://scratch.mit.edu",
    descripcion: "Plataforma para crear programas usando bloques visuales."
  },
  {
    nombre: "Curso básico de programación (edX)",
    tipo: "Curso",
    enlace: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
    descripcion: "Curso introductorio gratuito de Harvard CS50."
  },
  {
    nombre: "Glosario TIC (MinTIC)",
    tipo: "Lectura",
    enlace: "https://www.mintic.gov.co/portal/glosario",
    descripcion: "Definiciones técnicas comunes en tecnología y computación."
  }
];

async function runSeed() {
  try {
    await connectManual();
    await GlosarioReferencias.deleteMany(); // borrar documento anterior
    const creado = await GlosarioReferencias.create({ conceptos, referencias });
    console.log('Contenido del glosario y referencias insertado con éxito.');
    console.log('ID del documento:', creado._id);
  } catch (err) {
    console.error('Error al insertar:', err.message);
  } finally {
    await mongoose.disconnect();
  }
}

runSeed();

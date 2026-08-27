// Estructura de los cursos: modulos, submodulos, ejercicios y cuantos
// subejercicios tiene cada categoria.
//
// Es la FUENTE DE VERDAD de los nombres. Deben coincidir exactamente con los
// que envian las vistas .vue en useEvaluacionSubejercicio({...}).
// Para comprobarlo: node verificarRutas.js

// Acepta un numero (genera "Subejercicio 1..N") o una lista de nombres.
// Los nombres explicitos son preferibles cuando los subejercicios son de tipos
// distintos: en el perfil se lee "Video" o "Imagen" en vez de un numero que no
// dice nada y que ademas no tiene por que coincidir con el orden en pantalla.
function generarCategoria(subejercicios = 1) {
  const nombres = Array.isArray(subejercicios)
    ? subejercicios
    : Array.from({ length: subejercicios }, (_, i) => `Subejercicio ${i + 1}`);

  return {
    subejercicios: nombres.map(nombre => ({
      nombre,
      nota: null,
      intentos_restantes: 3,
      ultimo_intento: null
    })),
    nota: null,
    ultimo_intento: null
  };
}

function generarEjercicio(nombre, config = {}) {
  return {
    nombre,
    categorias: {
      descomposicion: generarCategoria(config.descomposicion || 1),
      algoritmo: generarCategoria(config.algoritmo || 1),
      abstraccion: generarCategoria(config.abstraccion || 1),
      generalizacion: generarCategoria(config.generalizacion || 1)
    }
  };
}

// Todos los pasos de la guia de Arduino tienen la misma forma: un ejercicio con
// las cuatro didacticas, y descomposicion con dos subejercicios (imagen y video).
//
// PENDIENTE CONOCIDO: en pantalla el subejercicio de VIDEO aparece primero, pero
// esta guardado como "Subejercicio 2"; el de IMAGEN aparece segundo y es
// "Subejercicio 1". El perfil los lista por numero, asi que se leen al reves de
// como se responden. Las notas SI estan bien guardadas, es solo el rotulo.
//
// Para corregirlo hay que renombrar los slots (los datos ya guardados se
// conservan, solo cambia el nombre):
//   1. cambiar aqui a  { descomposicion: ['Imagen', 'Video'] }
//   2. en las 10 vistas Descomposition*.vue de la guia, poner
//      subejercicio: 'Imagen'  (evaluacionImagenRaw)  y  'Video'  (evaluacionVideoRaw)
//   3. node renombrarSubejerciciosArduino.js --apply
// Los tres pasos van juntos: hacer 1 y 2 sin 3 deja los ejercicios en 404.
function pasoArduino(nombre) {
  return {
    nombre,
    ejercicios: [generarEjercicio('Ejercicio 1', { descomposicion: 2 })]
  };
}

// ============================================================
// CONFIGURACION CENTRAL
// ============================================================

export const CURSOS = [
  {
    nombre: 'Guía Programación en C',
    modulos: [
      {
        nombre: '1. Conceptos basicos',
        submodulos: [
          {
            nombre: '1.1 Introduccion a C',
            ejercicios: [generarEjercicio('Ejercicio 1', { descomposicion: 7 })]
          }
        ]
      }
    ]
  },

  {
    nombre: 'Guía Construcción Carro Arduino',
    modulos: [
      {
        nombre: '1. Fase de ensamblaje',
        submodulos: [
          pasoArduino('1.1 Conectar cables a los motorreductores'),
          pasoArduino('1.2 Conectar soportes de los motoreductores al chasis'),
          pasoArduino('1.3 Ensamblar motorreductores a los soportes'),
          pasoArduino('1.4 Ensamblar ruedas a los motorreductores')
        ]
      },
      {
        nombre: '2. Fase de montaje del circuito en el Arduino UNO',
        submodulos: [
          pasoArduino('2.1 Montaje del Arduino UNO en el soporte'),
          pasoArduino('2.2 Montaje del módulo Bluetooth HC-06 al Arduino UNO'),
          pasoArduino('2.3 Montaje del puente H (módulo L298N) y conectarlo al Arduino UNO')
        ]
      },
      {
        nombre: '3. Fase de conectar la fuente de poder al circuito',
        submodulos: [
          pasoArduino('3.1 Conectar la fuente de poder a la bornera macho'),
          pasoArduino('3.2 Preparar la bornera hembra para conexión'),
          pasoArduino('3.3 Conectar bornera tipo hembra al puente H (módulo L298N)')
        ]
      },
      {
        nombre: '4. Montaje del circuito al chasis',
        submodulos: [
          pasoArduino('4.1 Desplazar circuito al chasis')
        ]
      }
    ]
  }
];


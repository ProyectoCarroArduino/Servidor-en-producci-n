// Contenido de los ejercicios de "1.1 Introduccion a C" (Guia Programacion en C).
// Fuente: Ejercicios_Conceptos_Basicos_Guia_C.docx (ejercicios 2 y 3).
//
// Aqui solo va el contenido. Las vistas de cada ejercicio (Ejercicios/2 y 3)
// leen de este archivo y son las que registran la nota.
//
// MEDIA PENDIENTE
// ---------------
// Mientras un campo `imagen` o `audio` este en null, la vista muestra un
// marcador con el texto de la tarjeta o el guion del audio. Para poner la media
// real, importala arriba y asignala en el campo correspondiente, por ejemplo:
//
//   import ej2Alg1 from '@/assets/GuiaProgramacionC/ConceptosBasicos/Ejercicio2/Algoritmo1.png';
//   ...
//   { texto: 'Iniciar programa', forma: 'inicio-fin', imagen: ej2Alg1 },
//
// En las preguntas de seleccion tambien se puede agregar `imagen` a una opcion;
// si la tiene, se muestra la imagen en lugar del texto.
//
// Formas del diagrama de flujo: 'inicio-fin' (ovalo), 'proceso' (rectangulo),
// 'mostrar' (hoja con esquina doblada).

const INSTRUCCION_ABSTRACCION =
  'Digite el código correcto en C para solucionar el ejercicio. Elimine cualquier comentario que haya agregado al código.';

export const EJERCICIOS = {
  // ============================================================
  // EJERCICIO 2
  // ============================================================
  2: {
    numero: 2,
    nombre: 'Programa comentado',
    enunciado:
      'Hacer un programa que muestre en pantalla el mensaje Los comentarios no se ven en pantalla. El programa debe tener un comentario de varias líneas al inicio que explique qué hace el programa y un comentario de una sola línea que indique quién es el autor.',
    codigo: null,

    descomposicion: [
      {
        tipo: 'seleccion',
        pregunta: 'De las siguientes palabras, ¿cuál define lo que el programa debe hacer al ejecutarse?',
        opciones: [
          { texto: 'mostrar', correcta: true, porque: 'Al ejecutarse, el programa solo muestra el mensaje; los comentarios no hacen nada.' },
          { texto: 'comentar', porque: 'Los comentarios se escriben en el código, pero el programa no los ejecuta.' },
          { texto: 'explicar', porque: 'La explicación va en un comentario, y el compilador la ignora.' },
          { texto: 'borrar', porque: 'El problema no pide borrar nada.' },
        ],
        errores: [
          '¡Error! Piensa en lo que ocurre cuando el programa se ejecuta',
          '¡Error! Recuerda que los comentarios son notas para las personas',
          '¡Error! Vuelve a leer el problema e identifica el verbo que se necesita',
          '¡Error! Ten en cuenta que la palabra clave en el texto está conjugada, pero en las opciones no',
        ],
      },
      {
        tipo: 'seleccion',
        pregunta: 'Selecciona cuántos subproblemas hay en este problema y cuáles son:',
        opciones: [
          { texto: '2: documentar el programa con comentarios y mostrar el mensaje', correcta: true, porque: 'Se pide escribir los comentarios en el código y mostrar el mensaje en pantalla.' },
          { texto: '1: mostrar el mensaje', porque: 'Falta documentar el programa con los comentarios pedidos.' },
          { texto: '2: mostrar el mensaje y mostrar los comentarios', porque: 'Los comentarios no se muestran en pantalla.' },
          { texto: '3: escribir los comentarios, ejecutar los comentarios y mostrar el mensaje', porque: 'Los comentarios no se ejecutan; el compilador los ignora.' },
        ],
        errores: [
          '¡Error! Considera que los subproblemas están implícitos en el texto',
          '¡Error! Recuerda que los comentarios no aparecen en pantalla',
          '¡Error! No olvides que un problema siempre tiene uno o más subproblemas',
          '¡Error! Revisa todo lo que pide el enunciado, no solo el mensaje',
        ],
      },
      {
        tipo: 'seleccion',
        pregunta: '¿Qué hace el compilador con los comentarios?',
        opciones: [
          { texto: 'Los ignora', correcta: true, porque: 'Los comentarios son notas para las personas; el compilador no los traduce.' },
          { texto: 'Los muestra en pantalla', porque: 'Solo se muestra lo que va dentro de printf.' },
          { texto: 'Los convierte en instrucciones', porque: 'Los comentarios no son instrucciones.' },
          { texto: 'Marca un error', porque: 'Un comentario bien escrito no produce errores.' },
        ],
        errores: [
          '¡Error! Revisa la sección "Reglas básicas de escritura" de la teoría',
          '¡Error! Piensa para quién se escriben los comentarios',
          '¡Error! Recuerda que el mensaje del enunciado dice lo que pasa con los comentarios',
          '¡Error! Los comentarios no cambian lo que hace el programa',
        ],
      },
      {
        tipo: 'seleccion',
        pregunta: '¿Cómo empieza un comentario de una sola línea?',
        codigo: true,
        opciones: [
          { texto: '//', correcta: true, porque: 'Todo lo que va después de // en esa línea es comentario.' },
          { texto: '/*', porque: '/* inicia un comentario de varias líneas.' },
          { texto: '#', porque: '# se usa en #include, no para comentarios.' },
          { texto: '\\n', porque: '\\n es el salto de línea dentro de un texto.' },
        ],
        errores: [
          '¡Error! Ese símbolo existe en C, pero no inicia un comentario de una línea',
          '¡Error! Revisa el ejemplo de comentarios en la teoría',
          '¡Error! Fíjate en el tipo de comentario que se pide',
          '¡Error! El comentario de una línea usa dos símbolos iguales',
        ],
      },
    ],

    algoritmo: {
      correctas: [
        { texto: 'Iniciar programa', forma: 'inicio-fin', imagen: null },
        { texto: 'Documentar el programa con comentarios', forma: 'proceso', imagen: null },
        { texto: 'Mostrar mensaje en pantalla', forma: 'mostrar', imagen: null },
        { texto: 'Terminar programa', forma: 'inicio-fin', imagen: null },
      ],
      incorrectas: [
        { texto: 'Mostrar los comentarios en pantalla', forma: 'mostrar', imagen: null },
        { texto: 'Ejecutar los comentarios', forma: 'proceso', imagen: null },
        { texto: 'Pedir el nombre del autor al usuario', forma: 'proceso', imagen: null },
        { texto: 'Borrar el mensaje', forma: 'proceso', imagen: null },
      ],
    },

    abstraccion: {
      instruccion:
        'Digite el código correcto en C para solucionar el ejercicio. Incluya los dos comentarios que pide el enunciado.',
      // Cada estudiante escribe sus propios comentarios: se comparan las
      // instrucciones sin comentarios y se exige al menos un // y un /* */.
      requiereComentarios: true,
      solucion: `/* Programa que muestra un mensaje en pantalla
   para comprobar que los comentarios no se ven */
#include <stdio.h>
// Autor: estudiante de la guia de programacion en C
int main(void) {
    printf("Los comentarios no se ven en pantalla\\n");
    return 0;
}`,
      salida: 'Los comentarios no se ven en pantalla',
    },

    generalizacion: {
      instruccion:
        'Teniendo en cuenta la teoría sobre las reglas básicas de escritura, generalice paso a paso el proceso para documentar un programa con comentarios:',
      audios: [
        { texto: 'Primero se decide qué información ayuda a entender el programa, como qué hace y quién lo escribió.', audio: null },
        { texto: 'Para una nota corta se usa un comentario de una línea, que empieza con dos barras.', audio: null },
        { texto: 'Para una explicación más larga se usa un comentario de varias líneas, que empieza con barra asterisco.', audio: null },
        { texto: 'El comentario de varias líneas se cierra con asterisco barra; si no se cierra, el resto del código queda comentado.', audio: null },
        { texto: 'Luego se escribe el programa: se incluye stdio punto h y se define la función main.', audio: null },
        { texto: 'Dentro de main se usa printf con el mensaje entre comillas dobles.', audio: null },
        { texto: 'Se termina con return cero y se cierra la llave del bloque.', audio: null },
        { texto: 'Al compilar, el compilador ignora los comentarios; por eso no aparecen en pantalla.', audio: null },
        { texto: 'Así se puede documentar cualquier programa con comentarios sin cambiar lo que hace.', audio: null },
      ],
    },
  },

  // ============================================================
  // EJERCICIO 3
  // ============================================================
  3: {
    numero: 3,
    nombre: 'Corrigiendo errores de compilación',
    enunciado:
      'El siguiente programa debería mostrar en pantalla el mensaje Aprendiendo C paso a paso, pero al compilarlo aparecen errores. Encontrar los errores y escribir el programa corregido.',
    codigo: {
      archivo: 'Código con errores',
      texto: `#include <stdio.h>
int main(void) {
    Printf("Aprendiendo C paso a paso\\n")
    return 0;`,
    },

    descomposicion: [
      {
        tipo: 'seleccion',
        pregunta: 'De las siguientes palabras, ¿cuál es la que define lo que el problema está solicitando?',
        opciones: [
          { texto: 'corregir', correcta: true, porque: 'Se pide encontrar los errores y escribir el programa corregido.' },
          { texto: 'mostrar', porque: 'El programa mostrará el mensaje, pero lo que se te pide a ti es arreglarlo.' },
          { texto: 'ejecutar', porque: 'Un programa con errores de compilación no se puede ejecutar.' },
          { texto: 'calcular', porque: 'No hay ninguna operación que hacer.' },
        ],
        errores: [
          '¡Error! Seleccionaste un verbo, pero no es la respuesta correcta',
          '¡Error! Piensa en qué te pide hacer el enunciado a ti, no al programa',
          '¡Error! Un programa con errores de compilación no genera el ejecutable',
          '¡Error! Ten en cuenta que la palabra clave en el texto está conjugada, pero en las opciones no',
        ],
      },
      {
        tipo: 'seleccion',
        pregunta: '¿Qué tipo de errores tiene el programa?',
        opciones: [
          { texto: 'De compilación (sintaxis)', correcta: true, porque: 'El código no respeta las reglas del lenguaje y el compilador no genera el ejecutable.' },
          { texto: 'De ejecución', porque: 'Los errores de ejecución aparecen cuando el programa ya compiló y está corriendo.' },
          { texto: 'De lógica', porque: 'En un error de lógica el programa corre, pero el resultado es incorrecto.' },
          { texto: 'No tiene errores', porque: 'El enunciado dice que al compilar aparecen errores.' },
        ],
        errores: [
          '¡Error! Revisa en la teoría los tres tipos de errores',
          '¡Error! Piensa en qué momento aparecen los errores: al compilar o al ejecutar',
          '¡Error! Este programa ni siquiera llega a ejecutarse',
          '¡Error! Fíjate en si el código respeta las reglas de escritura de C',
        ],
      },
      {
        tipo: 'seleccion',
        pregunta: 'Selecciona cuántos errores tiene el programa y cuáles son:',
        opciones: [
          { texto: '3: Printf escrito con mayúscula, falta el punto y coma después de printf y falta la llave de cierre', correcta: true, porque: 'Son los tres errores del código.' },
          { texto: '1: falta la llave de cierre', porque: 'Hay más errores.' },
          { texto: '2: falta el punto y coma y return 0 está mal escrito', porque: 'return 0; está bien escrito.' },
          { texto: '3: #include mal escrito, falta el punto y coma y falta la llave de cierre', porque: '#include <stdio.h> está bien escrito.' },
        ],
        errores: [
          '¡Error! Revisa el código línea por línea',
          '¡Error! Recuerda que C distingue mayúsculas de minúsculas',
          '¡Error! Cuenta las llaves que se abren y las que se cierran',
          '¡Error! Verifica que cada instrucción termine en punto y coma',
        ],
      },
      {
        tipo: 'seleccion',
        pregunta: '¿Por qué Printf es un error?',
        opciones: [
          { texto: 'Porque C distingue mayúsculas de minúsculas y la función se llama printf', correcta: true, porque: 'Printf y printf son palabras distintas para C.' },
          { texto: 'Porque printf solo se puede usar una vez', porque: 'No es la causa del error.' },
          { texto: 'Porque falta incluir una biblioteca', porque: 'stdio.h, que contiene printf, ya está incluida.' },
          { texto: 'Porque las funciones se escriben en mayúsculas', porque: 'Es al revés: printf va en minúsculas.' },
        ],
        errores: [
          '¡Error! Revisa las reglas básicas de escritura en la teoría',
          '¡Error! Compara letra por letra Printf y printf',
          '¡Error! La biblioteca correcta ya está incluida',
          '¡Error! Recuerda que main, Main y MAIN son palabras distintas para C',
        ],
      },
    ],

    algoritmo: {
      correctas: [
        { texto: 'Leer el código fuente', forma: 'inicio-fin', imagen: null },
        { texto: 'Compilar y revisar los mensajes de error', forma: 'proceso', imagen: null },
        { texto: 'Corregir los errores de sintaxis', forma: 'proceso', imagen: null },
        { texto: 'Compilar y ejecutar de nuevo', forma: 'mostrar', imagen: null },
      ],
      incorrectas: [
        { texto: 'Ejecutar sin compilar', forma: 'proceso', imagen: null },
        { texto: 'Borrar todo el código', forma: 'proceso', imagen: null },
        { texto: 'Ignorar los mensajes del compilador', forma: 'proceso', imagen: null },
        { texto: 'Cambiar printf por print', forma: 'proceso', imagen: null },
      ],
    },

    abstraccion: {
      instruccion: INSTRUCCION_ABSTRACCION,
      solucion: `#include <stdio.h>
int main(void) {
    printf("Aprendiendo C paso a paso\\n");
    return 0;
}`,
      salida: 'Aprendiendo C paso a paso',
    },

    generalizacion: {
      instruccion:
        'Teniendo en cuenta la teoría sobre los tipos de errores y la compilación, generalice paso a paso el proceso para corregir un programa que no compila:',
      audios: [
        { texto: 'Se compila el programa y se leen con atención los mensajes del compilador.', audio: null },
        { texto: 'Cada mensaje indica la línea aproximada donde está el problema.', audio: null },
        { texto: 'Se revisa primero el error que está más arriba, porque un error puede provocar otros.', audio: null },
        { texto: 'Se verifica que cada instrucción termine en punto y coma.', audio: null },
        { texto: 'Se comprueba que las palabras tengan las mayúsculas y minúsculas correctas, como printf y main.', audio: null },
        { texto: 'Se revisa que cada llave que se abre tenga su llave de cierre.', audio: null },
        { texto: 'Se corrige el error y se vuelve a compilar.', audio: null },
        { texto: 'Se repite el proceso hasta que el compilador no muestre errores.', audio: null },
        { texto: 'Finalmente se ejecuta el programa y se revisa el resultado; si no es el esperado, hay un error de lógica.', audio: null },
      ],
    },
  },
};

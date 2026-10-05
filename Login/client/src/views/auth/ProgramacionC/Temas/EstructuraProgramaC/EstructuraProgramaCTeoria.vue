<template>
  <TeoriaLayout
    titulo="Estructura de un programa e impresiones por pantalla"
    migas="3. Estructura de un programa e impresiones por pantalla"
  >
    <p>
      En la sección 1 viste tu primer programa en C. Ahora toca entender cómo está
      armado: qué partes tiene todo programa, qué reglas hay que respetar al
      escribirlo y cómo usar <code>printf</code> para mostrar mensajes en pantalla.
    </p>

    <h2>1. Las partes de un programa en C</h2>
    <p>
      Por pequeño que sea, todo programa en C sigue la misma estructura básica, de
      arriba hacia abajo:
    </p>
    <ol>
      <li>
        <strong>Inclusión de bibliotecas:</strong> líneas que empiezan con
        <code>#include</code> y traen herramientas ya hechas, como la que permite
        imprimir en pantalla.
      </li>
      <li>
        <strong>Función principal <code>main</code>:</strong> el punto de entrada
        del programa. Al ejecutarlo, el computador busca <code>main</code> y empieza
        por ahí.
      </li>
      <li>
        <strong>Cuerpo de <code>main</code>:</strong> las instrucciones escritas
        entre llaves <code>{ }</code>, que se ejecutan una tras otra, de arriba hacia
        abajo.
      </li>
      <li>
        <strong>Fin del programa:</strong> la instrucción <code>return 0;</code>,
        que indica que el programa terminó correctamente.
      </li>
    </ol>
    <BloqueCodigo archivo="estructura.c" :codigo="codigoEstructura" />
    <div class="nota">
      <p>
        <strong>Idea clave:</strong> un programa sin <code>main</code> no se puede
        ejecutar, porque el computador no sabría por dónde empezar.
      </p>
    </div>

    <h2>2. El primer programa, línea por línea</h2>
    <p>
      Este es el programa que muestra un saludo en pantalla. Cada una de sus líneas
      cumple una función:
    </p>
    <BloqueCodigo archivo="hola.c" :codigo="codigoHola" salida="Hola, mundo" />

    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>¿Qué significa?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in explicacionHola" :key="fila.codigo">
          <td><code>{{ fila.codigo }}</code></td>
          <td>{{ fila.texto }}</td>
        </tr>
      </tbody>
    </table>

    <h2>3. Reglas básicas de escritura</h2>
    <ul>
      <li>Casi todas las instrucciones terminan en <strong>punto y coma</strong> (<code>;</code>).</li>
      <li>
        Las <strong>llaves</strong> <code>{ }</code> agrupan instrucciones en un
        bloque. Cada llave que se abre debe cerrarse.
      </li>
      <li>
        C distingue <strong>mayúsculas de minúsculas</strong>: escribir
        <code>Printf</code> en lugar de <code>printf</code> produce un error.
      </li>
      <li>
        Los <strong>textos</strong> que se van a mostrar se escriben entre
        <strong>comillas dobles</strong> (<code>" "</code>).
      </li>
      <li>Los <strong>comentarios</strong> son notas para las personas; el compilador los ignora.</li>
      <li>
        La <strong>indentación</strong> (sangría) no es obligatoria, pero hace que
        el código se lea y se corrija con facilidad.
      </li>
    </ul>

    <h3>Comentarios</h3>
    <p>
      Sirven para explicar qué hace una parte del código. Hay dos formas de
      escribirlos:
    </p>
    <BloqueCodigo archivo="Comentarios" :codigo="codigoComentarios" />

    <h3>Indentación</h3>
    <p>
      Los dos programas siguientes hacen exactamente lo mismo y ambos compilan,
      pero el segundo deja ver de un vistazo qué instrucciones están dentro de
      <code>main</code>:
    </p>
    <BloqueCodigo archivo="Sin indentación" :codigo="codigoSinSangria" />
    <BloqueCodigo archivo="Con indentación" :codigo="codigoConSangria" />

    <h2>4. Imprimir en pantalla con printf</h2>
    <p>
      <code>printf</code> es la función que muestra texto en la pantalla. Está en
      la biblioteca <code>stdio.h</code>, por eso el programa debe empezar con
      <code>#include &lt;stdio.h&gt;</code>. Su forma más sencilla es:
    </p>
    <BloqueCodigo archivo="Forma general" :codigo="codigoFormaPrintf" />
    <p>
      El texto entre comillas se llama <strong>cadena de caracteres</strong> y se
      imprime tal cual está escrito, con sus espacios y signos de puntuación.
    </p>

    <h3>Varias impresiones seguidas</h3>
    <p>
      Un programa puede tener tantos <code>printf</code> como necesite; se
      ejecutan en el orden en que aparecen. Pero ojo: <code>printf</code>
      <strong>no salta de línea por sí solo</strong>. Si no se le indica, el
      siguiente texto aparece pegado al anterior:
    </p>
    <BloqueCodigo
      archivo="sin_salto.c"
      :codigo="codigoSinSalto"
      salida="Buenos dias.Bienvenido al curso."
    />
    <p>Para que cada mensaje quede en su propia línea se agrega <code>\n</code> al final:</p>
    <BloqueCodigo
      archivo="con_salto.c"
      :codigo="codigoConSalto"
      :salida="salidaConSalto"
    />

    <h3>Unir textos (concatenación)</h3>
    <p>
      <strong>Concatenar</strong> es unir dos o más textos para que se muestren
      como uno solo. En C <strong>no se usa el signo <code>+</code></strong> para
      unir textos, como sí ocurre en otros lenguajes: escribir
      <code>printf("Hola, " + "mundo");</code> produce un error de compilación.
      Con lo visto hasta ahora hay dos formas de hacerlo:
    </p>
    <p>
      <strong>1. Varios <code>printf</code> sin salto de línea.</strong> Como
      <code>printf</code> no salta de línea por sí solo, los textos quedan unidos
      en la pantalla. Solo el último lleva <code>\n</code>:
    </p>
    <BloqueCodigo
      archivo="concatenar_printf.c"
      :codigo="codigoConcatenarPrintf"
      salida="Hola, mundo. Bienvenido a C."
    />
    <p>
      <strong>2. Textos seguidos dentro del mismo <code>printf</code>.</strong>
      Si se escriben dos o más textos entre comillas, uno al lado del otro y sin
      nada entre ellos, el compilador los une automáticamente en uno solo. Es útil
      para partir un mensaje largo en varias líneas de código:
    </p>
    <BloqueCodigo
      archivo="concatenar_textos.c"
      :codigo="codigoConcatenarTextos"
      :salida="salidaConcatenarTextos"
    />
    <div class="nota">
      <p>
        <strong>Ojo con los espacios:</strong> al unir textos, C no agrega
        espacios por su cuenta. <code>"Hola," "mundo"</code> se imprime como
        <code>Hola,mundo</code>; el espacio debe estar dentro de alguna de las
        comillas: <code>"Hola, " "mundo"</code>.
      </p>
    </div>
    <p class="aparte">
      Para unir textos con datos guardados en variables se usa otra herramienta de
      <code>printf</code>, que se estudia en la sección
      <strong>4. Variables y operaciones</strong>.
    </p>

    <h2>5. Secuencias de escape</h2>
    <p>
      Algunos caracteres no se pueden escribir directamente dentro de las comillas,
      como un salto de línea o las propias comillas. Para ellos existen las
      <strong>secuencias de escape</strong>: una barra invertida <code>\</code>
      seguida de un carácter.
    </p>
    <table>
      <thead>
        <tr>
          <th>Secuencia</th>
          <th>¿Qué hace?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in secuenciasEscape" :key="fila.codigo">
          <td><code>{{ fila.codigo }}</code></td>
          <td>{{ fila.texto }}</td>
        </tr>
      </tbody>
    </table>
    <BloqueCodigo
      archivo="escape.c"
      :codigo="codigoEscape"
      :salida="salidaEscape"
    />
    <div class="nota">
      <p>
        <strong>Recomendación:</strong> evita tildes y la letra ñ dentro de los
        textos de <code>printf</code>. Según la configuración de la consola, pueden
        mostrarse como símbolos extraños. Por eso en esta guía se escribe
        <code>"Buenos dias"</code> en lugar de <code>"Buenos días"</code>.
      </p>
    </div>

    <h2>6. Errores frecuentes</h2>
    <p>
      Al empezar es normal equivocarse. Estos son los errores de compilación más
      comunes en programas que solo imprimen texto:
    </p>
    <table>
      <thead>
        <tr>
          <th>Código con error</th>
          <th>¿Qué está mal?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in erroresFrecuentes" :key="fila.codigo">
          <td><code>{{ fila.codigo }}</code></td>
          <td>{{ fila.texto }}</td>
        </tr>
      </tbody>
    </table>
    <p class="aparte">
      Recuerda de la sección <strong>1. Conceptos básicos</strong>: si el
      compilador encuentra un error de este tipo, no genera el ejecutable. Lee el
      mensaje que muestra, porque suele indicar la línea donde está el problema.
    </p>

    <h2>7. Ejemplo completo: tarjeta de presentación</h2>
    <div class="nota">
      <p>
        <strong>Problema:</strong> mostrar en pantalla una tarjeta con un título,
        el nombre de un estudiante, su curso y una frase entre comillas.
      </p>
    </div>
    <BloqueCodigo
      archivo="tarjeta.c"
      :codigo="codigoTarjeta"
      :salida="salidaTarjeta"
    />
    <p>
      Fíjate en que cada <code>printf</code> produce una línea gracias a
      <code>\n</code>, que <code>\t</code> alinea los datos y que
      <code>\"</code> permite mostrar comillas dentro del texto.
    </p>

    <h2>Puntos clave</h2>
    <div class="nota">
      <ul>
        <li>Todo programa en C empieza a ejecutarse en la función <code>main</code>.</li>
        <li>Para usar <code>printf</code> hay que incluir la biblioteca <code>stdio.h</code>.</li>
        <li>Las instrucciones terminan en <code>;</code> y las llaves agrupan bloques que deben cerrarse.</li>
        <li><code>printf</code> imprime el texto entre comillas dobles tal cual, y no salta de línea si no se usa <code>\n</code>.</li>
        <li>Los textos se concatenan con varios <code>printf</code> o escribiéndolos seguidos entre comillas, nunca con <code>+</code>.</li>
        <li>Las secuencias de escape (<code>\n</code>, <code>\t</code>, <code>\"</code>, <code>\\</code>) representan caracteres especiales.</li>
      </ul>
    </div>
    <p class="aparte">
      Por ahora solo imprimes textos fijos. En la sección
      <strong>4. Variables y operaciones</strong> aprenderás a guardar datos y a
      mostrarlos con <code>printf</code>.
    </p>
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

const codigoEstructura = `#include <stdio.h>          // 1. Inclusión de bibliotecas

int main(void) {            // 2. Función principal
    // 3. Cuerpo: aquí van las instrucciones

    return 0;               // 4. Fin del programa
}`;

const codigoHola = `#include <stdio.h>

int main(void) {
    printf("Hola, mundo\\n");
    return 0;
}`;

const explicacionHola = [
  {
    codigo: "#include <stdio.h>",
    texto:
      "Incluye la biblioteca estándar de entrada y salida, que contiene la función printf para imprimir en pantalla.",
  },
  {
    codigo: "int main(void)",
    texto:
      "Declara la función principal. Todo programa en C comienza a ejecutarse aquí. int indica que al terminar devuelve un número entero.",
  },
  {
    codigo: "{ … }",
    texto: "Las llaves delimitan el bloque de instrucciones que pertenece a main.",
  },
  {
    codigo: 'printf("Hola, mundo\\n");',
    texto:
      "Imprime el texto entre comillas. \\n es un salto de línea y el punto y coma indica el final de la instrucción.",
  },
  {
    codigo: "return 0;",
    texto: "Termina el programa e informa al sistema operativo que todo salió bien.",
  },
];

const codigoComentarios = `// Comentario de una sola línea

/* Comentario que puede
   ocupar varias líneas */`;

const codigoSinSangria = `#include <stdio.h>
int main(void) {
printf("Hola\\n");
return 0;
}`;

const codigoConSangria = `#include <stdio.h>

int main(void) {
    printf("Hola\\n");
    return 0;
}`;

const codigoFormaPrintf = `printf("Texto que se quiere mostrar");`;

const codigoSinSalto = `#include <stdio.h>

int main(void) {
    printf("Buenos dias.");
    printf("Bienvenido al curso.");
    return 0;
}`;

const codigoConSalto = `#include <stdio.h>

int main(void) {
    printf("Buenos dias.\\n");
    printf("Bienvenido al curso.\\n");
    return 0;
}`;

const salidaConSalto = `Buenos dias.
Bienvenido al curso.`;

const codigoConcatenarPrintf = `#include <stdio.h>

int main(void) {
    printf("Hola, ");
    printf("mundo. ");
    printf("Bienvenido a C.\\n");
    return 0;
}`;

const codigoConcatenarTextos = `#include <stdio.h>

int main(void) {
    printf("Este es un mensaje largo "
           "escrito en dos lineas de codigo.\\n");
    printf("Hola, " "mundo\\n");
    return 0;
}`;

const salidaConcatenarTextos = `Este es un mensaje largo escrito en dos lineas de codigo.
Hola, mundo`;

const secuenciasEscape = [
  { codigo: "\\n", texto: "Salto de línea: lo que sigue se imprime en la línea de abajo." },
  { codigo: "\\t", texto: "Tabulación: deja un espacio amplio, útil para alinear texto en columnas." },
  { codigo: '\\"', texto: "Imprime unas comillas dobles sin cerrar el texto." },
  { codigo: "\\\\", texto: "Imprime una barra invertida." },
];

const codigoEscape = `#include <stdio.h>

int main(void) {
    printf("Linea 1\\nLinea 2\\n");
    printf("Lunes\\tMartes\\n");
    printf("El profesor dijo: \\"Practiquen\\"\\n");
    printf("Ruta: C:\\\\Programas\\n");
    return 0;
}`;

const salidaEscape = `Linea 1
Linea 2
Lunes\tMartes
El profesor dijo: "Practiquen"
Ruta: C:\\Programas`;

const erroresFrecuentes = [
  {
    codigo: 'printf("Hola")',
    texto: "Falta el punto y coma al final de la instrucción.",
  },
  {
    codigo: 'Printf("Hola");',
    texto: "printf se escribe en minúsculas; C distingue mayúsculas de minúsculas.",
  },
  {
    codigo: 'printf("Hola);',
    texto: "Las comillas se abren pero no se cierran.",
  },
  {
    codigo: "printf('Hola');",
    texto: "Los textos van entre comillas dobles, no simples.",
  },
  {
    codigo: 'printf("Hola, " + "mundo");',
    texto: "En C los textos no se unen con +; se escriben seguidos o en varios printf.",
  },
  {
    codigo: "int main(void) { …",
    texto: "Se abrió la llave de main pero falta la llave de cierre }.",
  },
  {
    codigo: "(sin #include <stdio.h>)",
    texto: "Sin la biblioteca stdio.h, el compilador no reconoce printf.",
  },
];

const codigoTarjeta = `#include <stdio.h>

int main(void) {
    // Título de la tarjeta
    printf("==== TARJETA DE PRESENTACION ====\\n");

    // Datos del estudiante
    printf("Nombre:\\tAna Torres\\n");
    printf("Curso:\\tProgramacion en C\\n");

    // Frase final
    printf("Frase:\\t\\"Aprender es practicar\\"\\n");
    return 0;
}`;

const salidaTarjeta = `==== TARJETA DE PRESENTACION ====
Nombre:\tAna Torres
Curso:\tProgramacion en C
Frase:\t"Aprender es practicar"`;
</script>

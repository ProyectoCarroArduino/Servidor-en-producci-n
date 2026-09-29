<template>
  <TeoriaLayout
    titulo="Introducción a C"
    migas="1. Conceptos básicos · 1.1 Introducción a C"
    siguiente-ruta="/CBDescomposicion1"
    siguiente-texto="Ir al Ejercicio 1: Descomposición"
  >
    <p>
      Antes de escribir código conviene entender qué es un programa, qué es el
      lenguaje C y cómo un computador pasa de un texto escrito por una persona a
      algo que puede ejecutar.
    </p>

    <h2>1. ¿Qué es programar?</h2>
    <p>
      Un computador no piensa por sí mismo: solo ejecuta instrucciones, una tras
      otra, muy rápido y sin equivocarse en lo que se le pidió. Un
      <strong>programa</strong> es un conjunto ordenado de esas instrucciones que
      resuelve un problema concreto.
    </p>
    <p>
      <strong>Programar</strong> es, por tanto, dos cosas a la vez: pensar la
      solución a un problema y expresarla en un
      <strong>lenguaje de programación</strong>, que funciona como puente entre la
      forma en que las personas razonamos y lo que la máquina es capaz de ejecutar.
    </p>
    <div class="nota">
      <p>
        <strong>Idea clave:</strong> el computador hace exactamente lo que se le
        indica, no lo que se quiso decir. Por eso la claridad y el orden de las
        instrucciones son tan importantes.
      </p>
    </div>

    <h2>2. ¿Qué es el lenguaje C?</h2>
    <p>
      C es un lenguaje de programación de propósito general creado por
      <strong>Dennis Ritchie</strong> en los Laboratorios Bell entre 1969 y 1973.
      Nació para escribir el sistema operativo UNIX y, desde entonces, se ha usado
      para construir sistemas operativos, compiladores, bases de datos y el
      software de millones de dispositivos electrónicos.
    </p>
    <p>
      Con el tiempo fue estandarizado para que un mismo programa funcione igual en
      distintos equipos. Las versiones más conocidas del estándar son C89/C90,
      C99, C11, C17 y C23.
    </p>

    <h3>¿Por qué aprender C?</h3>
    <ul>
      <li>
        <strong>Es la base de muchos lenguajes.</strong> C++, Java, C# y JavaScript
        heredan gran parte de su sintaxis; lo que aprendas aquí te servirá después.
      </li>
      <li>
        <strong>Está en todas partes.</strong> Núcleos de sistemas operativos como
        Linux y Windows, microcontroladores y placas como Arduino se programan en C
        o en lenguajes derivados de él.
      </li>
      <li>
        <strong>Enseña cómo funciona la máquina.</strong> C obliga a pensar en tipos
        de datos, memoria y en el orden exacto de las operaciones.
      </li>
      <li>
        <strong>Es eficiente.</strong> Los programas en C son rápidos y ocupan pocos
        recursos.
      </li>
    </ul>

    <h3>Características principales</h3>
    <ul>
      <li><strong>Compilado:</strong> el código se traduce completo a lenguaje de máquina antes de ejecutarse.</li>
      <li><strong>Estructurado:</strong> los programas se organizan en funciones y bloques de instrucciones.</li>
      <li><strong>Tipado:</strong> cada dato tiene un tipo (entero, decimal, carácter…) que se declara.</li>
      <li>
        <strong>Sensible a mayúsculas:</strong> <code>main</code>, <code>Main</code>
        y <code>MAIN</code> son palabras distintas.
      </li>
    </ul>

    <h2>3. Del código al programa: la compilación</h2>
    <p>
      El computador no entiende directamente el texto que escribimos en C. Ese
      texto, llamado <strong>código fuente</strong>, se guarda en un archivo con
      extensión <code>.c</code> y debe pasar por un <strong>compilador</strong> que
      lo traduce a un <strong>programa ejecutable</strong>:
    </p>
    <ol>
      <li><strong>Escribir:</strong> se redacta el código fuente en un editor o IDE (<code>programa.c</code>).</li>
      <li><strong>Compilar:</strong> el compilador revisa que el código respete las reglas del lenguaje y lo traduce a lenguaje de máquina.</li>
      <li><strong>Enlazar:</strong> se une el código traducido con las bibliotecas que utiliza, por ejemplo, la que permite imprimir en pantalla.</li>
      <li><strong>Ejecutar:</strong> se obtiene el ejecutable y se corre para ver el resultado.</li>
    </ol>

    <h3>Tipos de errores</h3>
    <ul>
      <li>
        <strong>De compilación (sintaxis):</strong> el código no respeta las reglas
        del lenguaje, por ejemplo, falta un punto y coma. El compilador los detecta
        y no genera el ejecutable.
      </li>
      <li>
        <strong>De ejecución:</strong> el programa compila, pero falla mientras
        corre, por ejemplo, al dividir entre cero.
      </li>
      <li>
        <strong>De lógica:</strong> el programa corre sin fallar, pero el resultado
        es incorrecto porque la solución estaba mal planteada. Son los más
        difíciles de encontrar.
      </li>
    </ul>
    <p class="aparte">
      En la sección <strong>2. ¿Cómo instalar el IDE de C?</strong> verás cómo
      preparar tu equipo para compilar y ejecutar tus propios programas.
    </p>

    <h2>4. Tu primer programa en C</h2>
    <p>
      Por tradición, el primer programa que se escribe en un lenguaje nuevo muestra
      un saludo en pantalla:
    </p>
    <BloqueCodigo archivo="hola.c" :codigo="codigoHola" salida="Hola, mundo" />

    <h3>Línea por línea</h3>
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

    <h2>5. Reglas básicas de escritura</h2>
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
      <li>Los <strong>comentarios</strong> son notas para las personas; el compilador los ignora.</li>
      <li>
        La <strong>indentación</strong> (sangría) no es obligatoria, pero hace que
        el código se lea y se corrija con facilidad.
      </li>
    </ul>
    <BloqueCodigo archivo="Comentarios" :codigo="codigoComentarios" />

    <h2>6. Pensar antes de programar</h2>
    <p>
      Escribir código es solo la última parte del trabajo. En esta guía, cada
      ejercicio se resuelve en cuatro etapas del
      <strong>pensamiento computacional</strong>, las mismas que encontrarás en el
      menú lateral:
    </p>
    <ol>
      <li><strong>Descomposición:</strong> dividir el problema en partes más pequeñas: qué datos hay, qué se pide y qué operaciones se necesitan.</li>
      <li><strong>Algoritmo:</strong> ordenar los pasos que llevan desde los datos hasta el resultado.</li>
      <li><strong>Abstracción:</strong> quedarse solo con la información importante y descartar los detalles que no afectan la solución.</li>
      <li><strong>Generalización:</strong> reconocer el patrón para que la solución sirva en otros casos parecidos.</li>
    </ol>

    <h3>Ejemplo: el área de un rectángulo</h3>
    <div class="nota">
      <p><strong>Problema:</strong> calcular el área de un rectángulo de base 5 cm y altura 3 cm.</p>
    </div>
    <ul>
      <li>
        <strong>Descomposición:</strong> la figura es un rectángulo; los datos son
        la base (5) y la altura (3); se pide el área.
      </li>
      <li>
        <strong>Algoritmo:</strong> 1) tomar la base, 2) tomar la altura,
        3) multiplicarlas, 4) mostrar el resultado.
      </li>
      <li>
        <strong>Abstracción:</strong> el color o el material del rectángulo no
        importan; solo sus medidas.
      </li>
      <li>
        <strong>Generalización:</strong> la fórmula base × altura sirve para
        cualquier rectángulo, así que las medidas se guardan en
        <strong>variables</strong> en lugar de fijarlas en el cálculo.
      </li>
    </ul>
    <p>Así se vería la solución en C:</p>
    <BloqueCodigo
      archivo="area_rectangulo.c"
      :codigo="codigoRectangulo"
      salida="El area del rectangulo es: 15"
    />
    <p class="aparte">
      No te preocupes si aún no entiendes <code>int</code> o <code>%d</code>: las
      variables y las operaciones se estudian a fondo en la sección
      <strong>4. Variables y operaciones</strong>. Por ahora, fíjate en cómo cada
      etapa del razonamiento se refleja en el código.
    </p>

    <h2>Puntos clave</h2>
    <div class="nota">
      <ul>
        <li>Un programa es un conjunto ordenado de instrucciones que resuelve un problema.</li>
        <li>C es un lenguaje compilado, estructurado y tipado, base de muchos lenguajes actuales.</li>
        <li>El código fuente (<code>.c</code>) se compila para obtener un ejecutable.</li>
        <li>Todo programa en C empieza a ejecutarse en la función <code>main</code>.</li>
        <li>Antes de programar se descompone el problema, se diseña el algoritmo, se abstrae lo esencial y se generaliza.</li>
      </ul>
    </div>
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

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

const codigoRectangulo = `#include <stdio.h>

int main(void) {
    int base = 5;               // dato 1
    int altura = 3;             // dato 2
    int area = base * altura;   // operación

    printf("El area del rectangulo es: %d\\n", area);   // resultado
    return 0;
}`;
</script>

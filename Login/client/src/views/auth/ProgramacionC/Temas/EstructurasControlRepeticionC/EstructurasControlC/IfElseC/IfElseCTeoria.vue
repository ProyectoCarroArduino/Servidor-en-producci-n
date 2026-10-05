<template>
  <TeoriaLayout
    titulo="Estructuras de control (if else)"
    migas="5. Estructuras de control y repetición · 5.1 Estructuras de control (if else)"
    siguiente-ruta="/IEEjDescomposicion"
    siguiente-texto="Ir al Ejemplo: Descomposición"
  >
    <p>
      Hasta ahora, tus programas ejecutan todas sus instrucciones, una tras otra,
      de arriba hacia abajo. Pero muchos problemas exigen tomar decisiones: mostrar
      un mensaje si el estudiante aprobó y otro si no, o hacer un cálculo solo
      cuando un dato es válido. Para eso existe la estructura <code>if else</code>.
    </p>

    <h2>1. ¿Qué es una estructura de control?</h2>
    <p>
      Una <strong>estructura de control</strong> decide el orden en que se ejecutan
      las instrucciones de un programa. Hay dos tipos:
    </p>
    <ul>
      <li>
        <strong>Condicionales (de selección):</strong> eligen qué instrucciones se
        ejecutan según se cumpla o no una condición. Aquí están <code>if else</code>
        y <code>switch case</code>.
      </li>
      <li>
        <strong>De repetición (ciclos):</strong> repiten un bloque de instrucciones
        varias veces, como <code>for</code> y <code>while</code>.
      </li>
    </ul>
    <p>
      En la vida diaria tomamos decisiones condicionales todo el tiempo:
      <em>si llueve, llevo paraguas; si no, llevo gorra</em>. La estructura
      <code>if else</code> expresa exactamente esa idea en C.
    </p>
    <div class="nota">
      <p>
        <strong>Idea clave:</strong> <code>if</code> significa "si" y
        <code>else</code> significa "si no". El programa evalúa una condición y,
        según el resultado, toma un camino u otro.
      </p>
    </div>

    <h2>2. Las condiciones</h2>
    <p>
      Una <strong>condición</strong> es una expresión cuyo resultado es
      <strong>verdadero</strong> o <strong>falso</strong>. Se construye con los
      operadores relacionales y lógicos que viste en la sección
      <strong>4. Variables y operaciones</strong>.
    </p>

    <h3>Operadores relacionales</h3>
    <table>
      <thead>
        <tr>
          <th>Operador</th>
          <th>Significado</th>
          <th>Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in operadoresRelacionales" :key="fila.operador">
          <td><code>{{ fila.operador }}</code></td>
          <td>{{ fila.texto }}</td>
          <td><code>{{ fila.ejemplo }}</code></td>
        </tr>
      </tbody>
    </table>

    <h3>Operadores lógicos</h3>
    <p>Sirven para unir o negar condiciones:</p>
    <table>
      <thead>
        <tr>
          <th>Operador</th>
          <th>Significado</th>
          <th>Es verdadero cuando…</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in operadoresLogicos" :key="fila.operador">
          <td><code>{{ fila.operador }}</code></td>
          <td>{{ fila.texto }}</td>
          <td>{{ fila.cuando }}</td>
        </tr>
      </tbody>
    </table>
    <div class="nota">
      <p>
        <strong>Cuidado:</strong> <code>=</code> <strong>asigna</strong> un valor y
        <code>==</code> <strong>compara</strong> dos valores. Para preguntar si la
        edad es 18 se escribe <code>edad == 18</code>, no <code>edad = 18</code>.
      </p>
    </div>
    <p class="aparte">
      En C, una condición falsa vale <code>0</code> y una verdadera vale
      <code>1</code>. Por eso cualquier valor distinto de cero se considera
      verdadero.
    </p>

    <h2>3. La instrucción if</h2>
    <p>
      Ejecuta un bloque de instrucciones <strong>solo si</strong> la condición es
      verdadera. Si es falsa, el bloque se salta y el programa continúa con lo que
      sigue después de la llave de cierre.
    </p>
    <BloqueCodigo archivo="Forma general" :codigo="sintaxisIf" />
    <BloqueCodigo
      archivo="aprobado.c"
      :codigo="codigoIf"
      :salida="salidaIf"
    />
    <p>
      Como <code>80 &gt;= 60</code> es verdadero, se imprime el mensaje de
      felicitación. Si cambias el puntaje a <code>45</code>, ese mensaje no
      aparece, pero <code>Fin del programa</code> se imprime de todos modos, porque
      está fuera del <code>if</code>.
    </p>

    <h2>4. La instrucción if else</h2>
    <p>
      Agrega un camino alternativo: si la condición es verdadera se ejecuta el
      bloque del <code>if</code>; si es falsa, el bloque del <code>else</code>.
      <strong>Siempre se ejecuta uno de los dos, nunca ambos.</strong>
    </p>
    <BloqueCodigo archivo="Forma general" :codigo="sintaxisIfElse" />
    <BloqueCodigo
      archivo="par_impar.c"
      :codigo="codigoIfElse"
      salida="7 es impar"
    />
    <p>
      El operador <code>%</code> devuelve el residuo de una división. Un número es
      par cuando el residuo de dividirlo entre 2 es <code>0</code>; como
      <code>7 % 2</code> da <code>1</code>, la condición es falsa y se ejecuta el
      <code>else</code>.
    </p>

    <h2>5. Varias opciones: if, else if, else</h2>
    <p>
      Cuando hay más de dos caminos posibles, se encadenan condiciones con
      <code>else if</code>. El programa las revisa en orden, de arriba hacia abajo,
      y ejecuta <strong>solo el primer bloque</strong> cuya condición sea
      verdadera. El <code>else</code> final es opcional y atrapa todos los casos
      que no cumplieron ninguna condición.
    </p>
    <BloqueCodigo archivo="Forma general" :codigo="sintaxisElseIf" />
    <BloqueCodigo
      archivo="temperatura.c"
      :codigo="codigoElseIf"
      salida="Clima templado"
    />
    <p>
      Con <code>temperatura = 22</code>, la primera condición
      (<code>&gt;= 30</code>) es falsa, la segunda (<code>&gt;= 18</code>) es
      verdadera y se imprime <code>Clima templado</code>. El resto de condiciones
      ya no se revisan.
    </p>
    <div class="nota">
      <p>
        <strong>El orden importa:</strong> si la primera condición fuera
        <code>temperatura &gt;= 18</code>, una temperatura de 35 también la
        cumpliría y el programa diría "templado". Ordena las condiciones de la más
        exigente a la menos exigente.
      </p>
    </div>

    <h2>6. Condiciones compuestas</h2>
    <p>
      Con <code>&amp;&amp;</code> y <code>||</code> se evalúan varias condiciones
      en un mismo <code>if</code>. Un uso muy común es saber si un valor está
      dentro de un rango:
    </p>
    <BloqueCodigo
      archivo="rango_edad.c"
      :codigo="codigoCompuesta"
      salida="Es adolescente"
    />
    <BloqueCodigo
      archivo="fin_de_semana.c"
      :codigo="codigoOr"
      salida="Hoy es fin de semana"
    />
    <p class="aparte">
      En matemáticas se escribe 13 ≤ edad ≤ 17, pero en C hay que separar las dos
      comparaciones y unirlas con <code>&amp;&amp;</code>:
      <code>edad &gt;= 13 &amp;&amp; edad &lt;= 17</code>.
    </p>

    <h2>7. if anidados</h2>
    <p>
      Un <code>if</code> puede ir dentro de otro. El <code>if</code> interno solo
      se evalúa cuando la condición del externo es verdadera:
    </p>
    <BloqueCodigo
      archivo="anidado.c"
      :codigo="codigoAnidado"
      salida="El numero es positivo y par"
    />
    <p>
      Los <code>if</code> anidados son útiles, pero si se abusa de ellos el código
      se vuelve difícil de leer. Cuando sea posible, usa <code>else if</code> o
      condiciones compuestas, y respeta siempre la indentación para ver qué bloque
      pertenece a cada condición.
    </p>

    <h2>8. Reglas de escritura y errores frecuentes</h2>
    <ul>
      <li>La condición va siempre <strong>entre paréntesis</strong>: <code>if (x &gt; 0)</code>.</li>
      <li>Después del paréntesis <strong>no</strong> va punto y coma.</li>
      <li>
        Las <strong>llaves</strong> delimitan el bloque. Si se omiten, solo la
        primera instrucción pertenece al <code>if</code>; por eso se recomienda
        usarlas siempre.
      </li>
      <li>El <code>else</code> no lleva condición y siempre va después de un <code>if</code>.</li>
    </ul>
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
    <p>
      Varios de estos errores <strong>compilan sin problema</strong> pero dan un
      resultado equivocado: son errores de lógica. Este es el caso de las llaves
      olvidadas:
    </p>
    <BloqueCodigo
      archivo="sin_llaves.c"
      :codigo="codigoSinLlaves"
      salida="Saldo insuficiente"
    />
    <p>
      Aunque el saldo alcanza, se imprime <code>Saldo insuficiente</code>. Sin
      llaves, el <code>if</code> solo controla el primer <code>printf</code>; el
      segundo se ejecuta siempre, aunque la indentación sugiera lo contrario.
    </p>

    <h2>9. Ejemplo completo: desempeño de un estudiante</h2>
    <div class="nota">
      <p>
        <strong>Problema:</strong> dado el puntaje de un estudiante (de 0 a 100),
        indicar si aprobó (60 o más) y clasificar su desempeño como Superior
        (90 o más), Alto (75 a 89), Basico (60 a 74) o Bajo (menos de 60). Si el
        puntaje está fuera del rango 0 a 100, mostrar un mensaje de error.
      </p>
    </div>
    <ul>
      <li>
        <strong>Descomposición:</strong> el dato es el puntaje; se pide validar que
        esté entre 0 y 100, decidir si aprobó y clasificar el desempeño.
      </li>
      <li>
        <strong>Algoritmo:</strong> 1) tomar el puntaje, 2) si está fuera de 0 a
        100, mostrar error, 3) si no, comparar de mayor a menor con 90, 75 y 60,
        4) mostrar el desempeño y si aprobó.
      </li>
      <li>
        <strong>Abstracción:</strong> el nombre del estudiante o la materia no
        cambian la decisión; solo importa el puntaje y los límites de cada nivel.
      </li>
      <li>
        <strong>Generalización:</strong> el mismo patrón de
        <code>if</code> / <code>else if</code> / <code>else</code> sirve para
        cualquier clasificación por rangos: tallas de ropa, tarifas por edad o
        niveles de velocidad.
      </li>
    </ul>
    <BloqueCodigo
      archivo="desempeno.c"
      :codigo="codigoCompleto"
      :salida="salidaCompleto"
    />
    <p class="aparte">
      En estos programas los datos tienen un valor fijo en el código. Para probar
      los demás caminos, cambia el valor de la variable, compila y ejecuta de
      nuevo: por ejemplo, con <code>puntaje = 120</code> debe aparecer el mensaje
      de error.
    </p>

    <h2>Puntos clave</h2>
    <div class="nota">
      <ul>
        <li>Las estructuras condicionales permiten que el programa tome decisiones según una condición.</li>
        <li>Una condición se construye con operadores relacionales y lógicos, y es verdadera o falsa.</li>
        <li><code>if</code> ejecuta un bloque solo si la condición es verdadera; <code>else</code> ofrece el camino contrario.</li>
        <li>Con <code>else if</code> se elige entre varias opciones; solo se ejecuta el primer bloque cuya condición se cumpla.</li>
        <li>No confundas <code>=</code> con <code>==</code>, no pongas <code>;</code> después de la condición y usa siempre llaves.</li>
      </ul>
    </div>
    <p class="aparte">
      Cuando hay que comparar una variable con muchos valores exactos, como las
      opciones de un menú, existe una alternativa más ordenada: la estructura que
      se estudia en <strong>5.5 Estructuras de repetición (switch case)</strong>.
    </p>
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

const operadoresRelacionales = [
  { operador: "==", texto: "Igual a", ejemplo: "edad == 18" },
  { operador: "!=", texto: "Diferente de", ejemplo: "opcion != 0" },
  { operador: ">", texto: "Mayor que", ejemplo: "nota > 3" },
  { operador: "<", texto: "Menor que", ejemplo: "precio < 1000" },
  { operador: ">=", texto: "Mayor o igual que", ejemplo: "puntaje >= 60" },
  { operador: "<=", texto: "Menor o igual que", ejemplo: "edad <= 17" },
];

const operadoresLogicos = [
  { operador: "&&", texto: "Y (and)", cuando: "Las dos condiciones son verdaderas." },
  { operador: "||", texto: "O (or)", cuando: "Al menos una de las condiciones es verdadera." },
  { operador: "!", texto: "No (not)", cuando: "La condición es falsa (invierte el resultado)." },
];

const sintaxisIf = `if (condicion) {
    // instrucciones si la condicion es verdadera
}`;

const codigoIf = `#include <stdio.h>

int main(void) {
    int puntaje = 80;

    if (puntaje >= 60) {
        printf("Felicitaciones, aprobaste\\n");
    }

    printf("Fin del programa\\n");
    return 0;
}`;

const salidaIf = `Felicitaciones, aprobaste
Fin del programa`;

const sintaxisIfElse = `if (condicion) {
    // instrucciones si la condicion es verdadera
} else {
    // instrucciones si la condicion es falsa
}`;

const codigoIfElse = `#include <stdio.h>

int main(void) {
    int numero = 7;

    if (numero % 2 == 0) {
        printf("%d es par\\n", numero);
    } else {
        printf("%d es impar\\n", numero);
    }

    return 0;
}`;

const sintaxisElseIf = `if (condicion1) {
    // si condicion1 es verdadera
} else if (condicion2) {
    // si condicion1 es falsa y condicion2 es verdadera
} else {
    // si ninguna condicion se cumple
}`;

const codigoElseIf = `#include <stdio.h>

int main(void) {
    int temperatura = 22;

    if (temperatura >= 30) {
        printf("Clima caluroso\\n");
    } else if (temperatura >= 18) {
        printf("Clima templado\\n");
    } else {
        printf("Clima frio\\n");
    }

    return 0;
}`;

const codigoCompuesta = `#include <stdio.h>

int main(void) {
    int edad = 15;

    if (edad >= 13 && edad <= 17) {
        printf("Es adolescente\\n");
    } else {
        printf("No es adolescente\\n");
    }

    return 0;
}`;

const codigoOr = `#include <stdio.h>

int main(void) {
    int dia = 7;   // 1 = lunes ... 7 = domingo

    if (dia == 6 || dia == 7) {
        printf("Hoy es fin de semana\\n");
    } else {
        printf("Hoy es dia de semana\\n");
    }

    return 0;
}`;

const codigoAnidado = `#include <stdio.h>

int main(void) {
    int numero = 12;

    if (numero > 0) {
        if (numero % 2 == 0) {
            printf("El numero es positivo y par\\n");
        } else {
            printf("El numero es positivo e impar\\n");
        }
    } else {
        printf("El numero no es positivo\\n");
    }

    return 0;
}`;

const erroresFrecuentes = [
  {
    codigo: "if (edad = 18)",
    texto: "Usa = (asignación) en lugar de == (comparación). Compila, pero la condición no compara nada.",
  },
  {
    codigo: "if (x > 0);",
    texto: "El punto y coma termina el if ahí mismo: el bloque siguiente se ejecuta siempre.",
  },
  {
    codigo: "if x > 0 {",
    texto: "Faltan los paréntesis alrededor de la condición.",
  },
  {
    codigo: "else (x < 0) {",
    texto: "else no lleva condición; para eso se usa else if.",
  },
  {
    codigo: "if (1 <= x <= 10)",
    texto: "No funciona como en matemáticas; se escribe x >= 1 && x <= 10.",
  },
  {
    codigo: "If (x > 0)",
    texto: "if se escribe en minúsculas; C distingue mayúsculas de minúsculas.",
  },
];

const codigoSinLlaves = `#include <stdio.h>

int main(void) {
    int saldo = 50000;
    int precio = 30000;

    if (saldo < precio)
        printf("No puedes comprar\\n");
        printf("Saldo insuficiente\\n");

    return 0;
}`;

const codigoCompleto = `#include <stdio.h>

int main(void) {
    int puntaje = 82;   // dato

    if (puntaje < 0 || puntaje > 100) {          // validación
        printf("Error: el puntaje debe estar entre 0 y 100\\n");
    } else {
        if (puntaje >= 90) {                     // clasificación
            printf("Desempeno: Superior\\n");
        } else if (puntaje >= 75) {
            printf("Desempeno: Alto\\n");
        } else if (puntaje >= 60) {
            printf("Desempeno: Basico\\n");
        } else {
            printf("Desempeno: Bajo\\n");
        }

        if (puntaje >= 60) {                     // resultado
            printf("Estado: Aprobado\\n");
        } else {
            printf("Estado: Reprobado\\n");
        }
    }

    return 0;
}`;

const salidaCompleto = `Desempeno: Alto
Estado: Aprobado`;
</script>

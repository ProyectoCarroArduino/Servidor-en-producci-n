<template>
  <TeoriaLayout
    titulo="Estructuras de repetición (ciclo for)"
    migas="5. Estructuras de control y repetición · 5.2 Estructuras de repetición (ciclo for)"
  >
    <p>
      Con <code>if else</code> aprendiste a que el programa tome decisiones. Ahora
      verás cómo hacer que repita instrucciones sin tener que escribirlas una y
      otra vez. La primera estructura de repetición que estudiarás es el
      <strong>ciclo for</strong>.
    </p>

    <h2>1. ¿Por qué repetir instrucciones?</h2>
    <p>
      Imagina que necesitas mostrar los números del 1 al 5. Con lo que sabes hasta
      ahora tendrías que escribir un <code>printf</code> por cada número:
    </p>
    <BloqueCodigo archivo="sin_ciclo.c" :codigo="codigoSinCiclo" :salida="salidaUnoACinco" />
    <p>
      Funciona, pero ¿y si fueran los números del 1 al 1000? Escribir mil
      instrucciones casi iguales es lento y fácil de equivocar. Con un ciclo
      <code>for</code> basta con indicar <strong>desde dónde</strong>,
      <strong>hasta dónde</strong> y <strong>de cuánto en cuánto</strong> contar:
    </p>
    <BloqueCodigo archivo="con_ciclo.c" :codigo="codigoConCiclo" :salida="salidaUnoACinco" />
    <p>
      Para mostrar hasta 1000 solo hay que cambiar el <code>5</code> por
      <code>1000</code>; el resto del programa queda igual.
    </p>

    <h2>2. ¿Qué es un ciclo?</h2>
    <p>
      Un <strong>ciclo</strong> (o bucle) es una estructura que repite un bloque de
      instrucciones mientras se cumpla una condición. Cada repetición se llama
      <strong>iteración</strong> o vuelta.
    </p>
    <p>
      El ciclo <code>for</code> se usa cuando <strong>se sabe de antemano cuántas
      veces</strong> hay que repetir: 10 vueltas, una por cada día de la semana,
      una por cada número del 1 al 100. Para llevar la cuenta usa una variable
      llamada <strong>contador</strong>, que por costumbre se nombra
      <code>i</code>.
    </p>
    <div class="nota">
      <p>
        <strong>Idea clave:</strong> un ciclo <code>for</code> es como decir
        "para <code>i</code> desde 1 hasta 5, de uno en uno, haz esto".
      </p>
    </div>

    <h2>3. Sintaxis del ciclo for</h2>
    <BloqueCodigo archivo="Forma general" :codigo="sintaxisFor" />
    <p>
      Dentro de los paréntesis van tres partes separadas por
      <strong>punto y coma</strong>:
    </p>
    <table>
      <thead>
        <tr>
          <th>Parte</th>
          <th>Ejemplo</th>
          <th>¿Qué hace?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in partesFor" :key="fila.parte">
          <td><strong>{{ fila.parte }}</strong></td>
          <td><code>{{ fila.ejemplo }}</code></td>
          <td>{{ fila.texto }}</td>
        </tr>
      </tbody>
    </table>
    <p class="aparte">
      Los operadores <code>++</code>, <code>--</code>, <code>+=</code> y
      <code>-=</code> los viste en la sección <strong>4. Variables y
      operaciones</strong>: <code>i++</code> equivale a <code>i = i + 1</code> y
      <code>i += 2</code> equivale a <code>i = i + 2</code>.
    </p>

    <h2>4. ¿Cómo se ejecuta un ciclo for?</h2>
    <p>El ciclo sigue siempre este orden:</p>
    <ol>
      <li><strong>Inicialización:</strong> se ejecuta una sola vez, al comienzo.</li>
      <li>
        <strong>Condición:</strong> si es verdadera, se entra al cuerpo; si es
        falsa, el ciclo termina y el programa sigue después de la llave de cierre.
      </li>
      <li><strong>Cuerpo:</strong> se ejecutan las instrucciones entre llaves.</li>
      <li><strong>Actualización:</strong> se cambia el contador y se vuelve al paso 2.</li>
    </ol>
    <p>
      Seguir los valores de una variable vuelta por vuelta se llama hacer una
      <strong>prueba de escritorio</strong>. Esta es la del siguiente programa:
    </p>
    <BloqueCodigo archivo="vueltas.c" :codigo="codigoVueltas" :salida="salidaVueltas" />
    <table>
      <thead>
        <tr>
          <th>Vuelta</th>
          <th>Valor de i</th>
          <th>¿i &lt;= 3?</th>
          <th>¿Qué pasa?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in pruebaEscritorio" :key="fila.vuelta">
          <td>{{ fila.vuelta }}</td>
          <td>{{ fila.valor }}</td>
          <td>{{ fila.condicion }}</td>
          <td>{{ fila.accion }}</td>
        </tr>
      </tbody>
    </table>
    <div class="nota">
      <p>
        <strong>Observa:</strong> la condición se revisa una vez más que el número
        de vueltas. La última revisión, cuando <code>i</code> vale 4, es la que da
        falso y termina el ciclo.
      </p>
    </div>

    <h2>5. Formas de contar</h2>
    <p>
      Cambiando las tres partes del <code>for</code> se puede contar de muchas
      maneras:
    </p>
    <table>
      <thead>
        <tr>
          <th>Encabezado del ciclo</th>
          <th>Valores que toma i</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in formasContar" :key="fila.codigo">
          <td><code>{{ fila.codigo }}</code></td>
          <td>{{ fila.valores }}</td>
        </tr>
      </tbody>
    </table>
    <p>Por ejemplo, una cuenta regresiva usa un contador que disminuye:</p>
    <BloqueCodigo
      archivo="cuenta_regresiva.c"
      :codigo="codigoRegresiva"
      salida="5 4 3 2 1 Despegue!"
    />
    <p>
      Fíjate en que el <code>printf</code> del ciclo no lleva <code>\n</code>, por
      eso los números quedan en la misma línea. El mensaje
      <code>Despegue!</code> está fuera del ciclo y se imprime una sola vez.
    </p>

    <h2>6. Acumuladores y contadores</h2>
    <p>
      Dos usos muy frecuentes de los ciclos son sumar valores y contar cuántos
      cumplen una condición. Para eso se usa una variable que se crea
      <strong>antes</strong> del ciclo, empieza en <code>0</code> y se actualiza en
      cada vuelta.
    </p>

    <h3>Acumulador: sumar</h3>
    <p>
      Un <strong>acumulador</strong> va guardando un total. En cada vuelta se le
      suma un valor nuevo:
    </p>
    <BloqueCodigo
      archivo="suma.c"
      :codigo="codigoSuma"
      salida="La suma del 1 al 10 es: 55"
    />

    <h3>Contador con condición: contar</h3>
    <p>
      Al combinar el ciclo con un <code>if</code>, se pueden contar solo los
      valores que cumplen una condición. Aquí se buscan los múltiplos de 3 entre 1
      y 20:
    </p>
    <BloqueCodigo
      archivo="multiplos.c"
      :codigo="codigoMultiplos"
      :salida="salidaMultiplos"
    />
    <div class="nota">
      <p>
        <strong>Recuerda:</strong> el acumulador o el contador debe tener valor
        inicial (<code>0</code>) y declararse <strong>fuera</strong> del ciclo. Si
        se declarara dentro, volvería a empezar en cada vuelta.
      </p>
    </div>

    <h2>7. Usar el contador en cálculos</h2>
    <p>
      La variable del ciclo no solo sirve para contar vueltas: también se puede
      usar en operaciones. Así se genera la tabla de multiplicar del 7:
    </p>
    <BloqueCodigo
      archivo="tabla_del_7.c"
      :codigo="codigoTabla"
      :salida="salidaTabla"
    />

    <h2>8. Ciclos anidados</h2>
    <p>
      Un ciclo puede ir dentro de otro. Por cada vuelta del ciclo
      <strong>externo</strong>, el ciclo <strong>interno</strong> hace todas sus
      vueltas. Es útil para trabajar con filas y columnas:
    </p>
    <BloqueCodigo
      archivo="rectangulo.c"
      :codigo="codigoAnidado"
      :salida="salidaAnidado"
    />
    <p>
      El ciclo de <code>fila</code> da 3 vueltas y, en cada una, el ciclo de
      <code>columna</code> imprime 5 asteriscos. En total se imprimen
      3 × 5 = 15 asteriscos. Cada ciclo necesita su propio contador, con un nombre
      distinto.
    </p>

    <h2>9. Reglas de escritura y errores frecuentes</h2>
    <ul>
      <li>Las tres partes del <code>for</code> se separan con <strong>punto y coma</strong>, no con comas.</li>
      <li>Después del paréntesis <strong>no</strong> va punto y coma.</li>
      <li>Usa siempre <strong>llaves</strong> para el cuerpo, aunque tenga una sola instrucción.</li>
      <li>
        Una variable declarada en la inicialización (<code>int i = 1</code>) solo
        existe dentro del ciclo. Si la necesitas después, declárala antes:
        <code>int i;</code> y luego <code>for (i = 1; i &lt;= 5; i++)</code>.
      </li>
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
    <div class="nota">
      <p>
        <strong>Ciclo infinito:</strong> si la condición nunca se vuelve falsa, el
        programa no termina. Si te pasa, detén la ejecución con
        <strong>Ctrl + C</strong> en la consola y revisa la condición y la
        actualización del ciclo.
      </p>
    </div>

    <h2>10. Ejemplo completo: plan de ahorro</h2>
    <div class="nota">
      <p>
        <strong>Problema:</strong> una estudiante ahorra 1000 pesos la primera
        semana y cada semana ahorra 500 más que la anterior. Mostrar cuánto ahorra
        cada semana y el total acumulado durante 8 semanas, e indicar si alcanzó su
        meta de 20000 pesos o cuánto le faltó.
      </p>
    </div>
    <ul>
      <li>
        <strong>Descomposición:</strong> los datos son el ahorro inicial (1000), el
        aumento semanal (500), el número de semanas (8) y la meta (20000); se pide
        el ahorro de cada semana, el total y si se cumplió la meta.
      </li>
      <li>
        <strong>Algoritmo:</strong> 1) empezar el total en 0, 2) para cada semana
        de 1 a 8, calcular el ahorro de esa semana, sumarlo al total y mostrarlo,
        3) al terminar, comparar el total con la meta y mostrar el resultado.
      </li>
      <li>
        <strong>Abstracción:</strong> no importa en qué se gastará el dinero ni el
        día de la semana en que se ahorra; solo los montos y la cantidad de
        semanas.
      </li>
      <li>
        <strong>Generalización:</strong> cambiando los valores iniciales, el mismo
        programa sirve para cualquier plan de ahorro, de pagos o de crecimiento que
        aumente una cantidad fija cada periodo.
      </li>
    </ul>
    <BloqueCodigo
      archivo="plan_ahorro.c"
      :codigo="codigoCompleto"
      :salida="salidaCompleto"
    />
    <p>
      El ahorro de cada semana se calcula a partir del contador:
      <code>1000 + (semana - 1) * 500</code> da 1000 en la semana 1, 1500 en la
      semana 2, y así sucesivamente. La comparación con la meta se hace
      <strong>después</strong> del ciclo, cuando el total ya está completo.
    </p>

    <h2>Puntos clave</h2>
    <div class="nota">
      <ul>
        <li>Un ciclo repite un bloque de instrucciones; cada repetición es una iteración.</li>
        <li>El ciclo <code>for</code> se usa cuando se conoce el número de repeticiones.</li>
        <li>Sus tres partes son inicialización, condición y actualización, separadas por <code>;</code>.</li>
        <li>Los acumuladores y contadores se inician en 0 antes del ciclo y se actualizan dentro de él.</li>
        <li>Si la condición nunca se vuelve falsa, se produce un ciclo infinito.</li>
      </ul>
    </div>
    <p class="aparte">
      Cuando no se sabe de antemano cuántas veces hay que repetir, existe otra
      estructura más adecuada: el ciclo que se estudia en
      <strong>5.3 Estructuras de repetición (ciclo while)</strong>.
    </p>
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

const codigoSinCiclo = `#include <stdio.h>

int main(void) {
    printf("1\\n");
    printf("2\\n");
    printf("3\\n");
    printf("4\\n");
    printf("5\\n");
    return 0;
}`;

const codigoConCiclo = `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`;

const salidaUnoACinco = `1
2
3
4
5`;

const sintaxisFor = `for (inicializacion; condicion; actualizacion) {
    // instrucciones que se repiten (cuerpo del ciclo)
}`;

const partesFor = [
  {
    parte: "Inicialización",
    ejemplo: "int i = 1",
    texto: "Crea el contador y le da su valor inicial. Se ejecuta una sola vez.",
  },
  {
    parte: "Condición",
    ejemplo: "i <= 5",
    texto: "Se revisa antes de cada vuelta. Mientras sea verdadera, el ciclo continúa.",
  },
  {
    parte: "Actualización",
    ejemplo: "i++",
    texto: "Cambia el contador al final de cada vuelta para acercarlo al final.",
  },
];

const codigoVueltas = `#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 3; i++) {
        printf("Vuelta %d\\n", i);
    }
    printf("Fin\\n");
    return 0;
}`;

const salidaVueltas = `Vuelta 1
Vuelta 2
Vuelta 3
Fin`;

const pruebaEscritorio = [
  { vuelta: "1", valor: "1", condicion: "Sí", accion: "Imprime Vuelta 1 y i pasa a 2" },
  { vuelta: "2", valor: "2", condicion: "Sí", accion: "Imprime Vuelta 2 y i pasa a 3" },
  { vuelta: "3", valor: "3", condicion: "Sí", accion: "Imprime Vuelta 3 y i pasa a 4" },
  { vuelta: "—", valor: "4", condicion: "No", accion: "El ciclo termina e imprime Fin" },
];

const formasContar = [
  { codigo: "for (int i = 1; i <= 5; i++)", valores: "1, 2, 3, 4, 5" },
  { codigo: "for (int i = 1; i < 5; i++)", valores: "1, 2, 3, 4 (el 5 no se incluye)" },
  { codigo: "for (int i = 0; i <= 10; i += 2)", valores: "0, 2, 4, 6, 8, 10" },
  { codigo: "for (int i = 5; i <= 25; i += 5)", valores: "5, 10, 15, 20, 25" },
  { codigo: "for (int i = 10; i >= 1; i--)", valores: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1" },
];

const codigoRegresiva = `#include <stdio.h>

int main(void) {
    for (int i = 5; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("Despegue!\\n");
    return 0;
}`;

const codigoSuma = `#include <stdio.h>

int main(void) {
    int suma = 0;                    // acumulador

    for (int i = 1; i <= 10; i++) {
        suma = suma + i;             // también: suma += i;
    }

    printf("La suma del 1 al 10 es: %d\\n", suma);
    return 0;
}`;

const codigoMultiplos = `#include <stdio.h>

int main(void) {
    int contador = 0;

    for (int i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            printf("%d ", i);
            contador++;
        }
    }

    printf("\\nHay %d multiplos de 3 entre 1 y 20\\n", contador);
    return 0;
}`;

const salidaMultiplos = `3 6 9 12 15 18
Hay 6 multiplos de 3 entre 1 y 20`;

const codigoTabla = `#include <stdio.h>

int main(void) {
    int numero = 7;

    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", numero, i, numero * i);
    }

    return 0;
}`;

const salidaTabla = `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`;

const codigoAnidado = `#include <stdio.h>

int main(void) {
    for (int fila = 1; fila <= 3; fila++) {
        for (int columna = 1; columna <= 5; columna++) {
            printf("*");
        }
        printf("\\n");   // salto al terminar cada fila
    }
    return 0;
}`;

const salidaAnidado = `*****
*****
*****`;

const erroresFrecuentes = [
  {
    codigo: "for (int i = 1, i <= 5, i++)",
    texto: "Las partes se separan con punto y coma, no con comas. Error de compilación.",
  },
  {
    codigo: "for (int i = 1; i <= 5; i++);",
    texto: "El punto y coma deja el ciclo vacío: el bloque siguiente se ejecuta una sola vez.",
  },
  {
    codigo: "for (int i = 1; i <= 10; i--)",
    texto: "El contador se aleja del final en lugar de acercarse: ciclo infinito.",
  },
  {
    codigo: "for (int i = 10; i < 5; i++)",
    texto: "La condición es falsa desde el inicio: el cuerpo nunca se ejecuta.",
  },
  {
    codigo: "for (int i = 1; i < 10; i++)",
    texto: "Si se quería llegar hasta 10, falta una vuelta: debe ser i <= 10.",
  },
  {
    codigo: "For (int i = 1; i <= 5; i++)",
    texto: "for se escribe en minúsculas; C distingue mayúsculas de minúsculas.",
  },
];

const codigoCompleto = `#include <stdio.h>

int main(void) {
    int ahorroInicial = 1000;   // datos
    int aumento = 500;
    int semanas = 8;
    int meta = 20000;
    int total = 0;              // acumulador

    for (int semana = 1; semana <= semanas; semana++) {
        int ahorro = ahorroInicial + (semana - 1) * aumento;
        total += ahorro;
        printf("Semana %d: ahorra %d, total %d\\n", semana, ahorro, total);
    }

    if (total >= meta) {        // resultado
        printf("Meta cumplida: ahorro %d de %d\\n", total, meta);
    } else {
        printf("Faltaron %d para la meta\\n", meta - total);
    }

    return 0;
}`;

const salidaCompleto = `Semana 1: ahorra 1000, total 1000
Semana 2: ahorra 1500, total 2500
Semana 3: ahorra 2000, total 4500
Semana 4: ahorra 2500, total 7000
Semana 5: ahorra 3000, total 10000
Semana 6: ahorra 3500, total 13500
Semana 7: ahorra 4000, total 17500
Semana 8: ahorra 4500, total 22000
Meta cumplida: ahorro 22000 de 20000`;
</script>

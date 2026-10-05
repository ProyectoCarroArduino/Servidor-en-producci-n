<template>
  <TeoriaLayout
    titulo="Estructuras de datos (matrices)"
    migas="6. Estructuras de datos · 6.2 Matrices"
    siguiente-ruta="/MATEjDescomposicion"
    siguiente-texto="Ir al Ejemplo: Descomposición"
  >
    <p>
      Un arreglo guarda una lista de datos del mismo tipo, como las notas de un
      estudiante. Pero muchos problemas se organizan en forma de
      <strong>tabla</strong>: las notas de varios estudiantes en varias materias,
      los asientos de un cine o las casillas de un tablero. Para guardar datos con
      filas y columnas se usan las <strong>matrices</strong>.
    </p>

    <h2>1. Repaso: los arreglos</h2>
    <p>
      En la sección <strong>6.1 Arreglos</strong> viste que un arreglo es un grupo
      de variables del mismo tipo, con un solo nombre, en el que cada elemento se
      identifica por su <strong>índice</strong>, que empieza en <code>0</code>:
    </p>
    <BloqueCodigo archivo="arreglo.c" :codigo="codigoRepaso" salida="La segunda nota es 72" />
    <p>
      Un arreglo tiene <strong>una sola dimensión</strong>: es una fila de datos.
      Una matriz agrega una segunda dimensión.
    </p>

    <h2>2. ¿Qué es una matriz?</h2>
    <p>
      Una <strong>matriz</strong> es un arreglo de <strong>dos
      dimensiones</strong>: sus datos se organizan en <strong>filas</strong> y
      <strong>columnas</strong>, como una tabla. Cada elemento se identifica con
      dos índices: primero el de la fila y después el de la columna.
    </p>
    <p>
      Esta es una matriz de 3 filas y 4 columnas con las notas de 3 estudiantes
      (filas) en 4 materias (columnas):
    </p>
    <table class="matriz-visual">
      <thead>
        <tr>
          <th></th>
          <th v-for="c in 4" :key="'c' + c">Columna {{ c - 1 }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fila, f) in notasEjemplo" :key="'f' + f">
          <th>Fila {{ f }}</th>
          <td v-for="(valor, c) in fila" :key="'v' + f + c">
            {{ valor }} <span class="indice">[{{ f }}][{{ c }}]</span>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Por ejemplo, el elemento <code>[1][2]</code> está en la fila 1 y la columna
      2, y vale <code>88</code>: es la nota del segundo estudiante en la tercera
      materia.
    </p>
    <div class="nota">
      <p>
        <strong>Idea clave:</strong> en una matriz siempre se nombra primero la
        <strong>fila</strong> y después la <strong>columna</strong>:
        <code>matriz[fila][columna]</code>.
      </p>
    </div>

    <h2>3. Declarar una matriz</h2>
    <p>Se indica el tipo, el nombre y, entre corchetes, el número de filas y de columnas:</p>
    <BloqueCodigo archivo="Forma general" :codigo="sintaxisDeclaracion" />
    <BloqueCodigo archivo="Ejemplos" :codigo="codigoDeclaracion" />
    <p>
      El número total de elementos es <strong>filas × columnas</strong>: la matriz
      <code>notas[3][4]</code> guarda 3 × 4 = 12 números enteros. Todos los
      elementos son del mismo tipo.
    </p>
    <p class="aparte">
      Igual que en los arreglos, una matriz declarada sin valores iniciales
      contiene datos basura: valores impredecibles que había en la memoria. Antes
      de usarla, hay que darle valores.
    </p>

    <h2>4. Darle valores iniciales</h2>
    <p>
      Al declararla, se pueden escribir sus valores entre llaves. Cada fila va en
      su propio par de llaves, separadas por comas:
    </p>
    <BloqueCodigo archivo="Inicialización" :codigo="codigoInicializacion" />
    <ul>
      <li>
        Escribir cada fila en una línea distinta no es obligatorio, pero deja ver
        la forma de la tabla.
      </li>
      <li>
        Si se dan menos valores de los que caben, los que faltan quedan en
        <code>0</code>. Por eso <code>int m[3][4] = {0};</code> llena toda la
        matriz con ceros.
      </li>
      <li>
        Se puede omitir el número de filas si se dan los valores, pero el de
        columnas siempre es obligatorio: <code v-pre>int m[][3] = {{1, 2, 3}, {4, 5, 6}};</code>
      </li>
    </ul>

    <h2>5. Acceder a un elemento</h2>
    <p>
      Para leer o cambiar un elemento se escribe el nombre de la matriz con sus dos
      índices. Un elemento de una matriz se usa como cualquier variable:
    </p>
    <BloqueCodigo archivo="acceso.c" :codigo="codigoAcceso" :salida="salidaAcceso" />
    <p>
      Como los índices empiezan en <code>0</code>, en una matriz de
      <strong>3 filas y 3 columnas</strong> las filas válidas son 0, 1 y 2, igual
      que las columnas. El último elemento es <code>numeros[2][2]</code>.
    </p>
    <div class="nota">
      <p>
        <strong>Cuidado:</strong> C no revisa que los índices estén dentro de la
        matriz. Escribir <code>numeros[3][0]</code> compila, pero lee una posición
        de memoria que no pertenece a la matriz: el programa puede mostrar valores
        sin sentido o detenerse con un error de ejecución.
      </p>
    </div>

    <h2>6. Recorrer una matriz con ciclos anidados</h2>
    <p>
      Para visitar todos los elementos se usan dos ciclos <code>for</code>, como
      los anidados de la sección <strong>5.2 Ciclo for</strong>: el externo
      recorre las <strong>filas</strong> y el interno las <strong>columnas</strong>.
      Por costumbre, el contador de filas se llama <code>i</code> y el de columnas
      <code>j</code>.
    </p>
    <BloqueCodigo
      archivo="mostrar_matriz.c"
      :codigo="codigoRecorrido"
      :salida="salidaRecorrido"
    />
    <p>Este es el orden en que se visitan los elementos:</p>
    <table>
      <thead>
        <tr>
          <th>Valor de i (fila)</th>
          <th>Valores de j (columna)</th>
          <th>Elementos visitados</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in ordenRecorrido" :key="fila.i">
          <td>{{ fila.i }}</td>
          <td>{{ fila.j }}</td>
          <td><code>{{ fila.elementos }}</code></td>
        </tr>
      </tbody>
    </table>
    <p>
      El <code>\t</code> separa las columnas y el <code>printf("\n")</code>, que
      está fuera del ciclo interno, salta de línea al terminar cada fila.
    </p>

    <h3>Llenar una matriz con un ciclo</h3>
    <p>
      Los ciclos también sirven para asignar valores. Aquí cada elemento guarda el
      producto de su fila por su columna (contando desde 1), lo que forma una tabla
      de multiplicar:
    </p>
    <BloqueCodigo
      archivo="llenar_matriz.c"
      :codigo="codigoLlenar"
      :salida="salidaLlenar"
    />

    <h2>7. Operaciones frecuentes</h2>

    <h3>Suma total y suma por fila</h3>
    <p>
      Para la suma total basta un acumulador que se suma en cada elemento. Para
      sumar cada fila, el acumulador de la fila debe volver a <code>0</code> antes
      de empezar cada fila, es decir, dentro del ciclo externo:
    </p>
    <BloqueCodigo
      archivo="suma_filas.c"
      :codigo="codigoSumaFilas"
      :salida="salidaSumaFilas"
    />

    <h3>Suma por columna</h3>
    <p>
      Para sumar por columnas se invierte el orden de los ciclos: el externo
      recorre las columnas y el interno las filas.
    </p>
    <BloqueCodigo
      archivo="suma_columnas.c"
      :codigo="codigoSumaColumnas"
      :salida="salidaSumaColumnas"
    />

    <h3>Buscar el mayor</h3>
    <p>
      Se toma el primer elemento como el mayor provisional y se compara con todos
      los demás usando un <code>if</code>. También se guarda su posición:
    </p>
    <BloqueCodigo
      archivo="mayor.c"
      :codigo="codigoMayor"
      salida="La temperatura mayor es 27, en la fila 1 y la columna 1"
    />

    <h3>La diagonal principal</h3>
    <p>
      En una matriz cuadrada (igual número de filas y columnas), la
      <strong>diagonal principal</strong> son los elementos cuya fila y columna
      coinciden: <code>[0][0]</code>, <code>[1][1]</code>, <code>[2][2]</code>…
      Para recorrerla basta un solo ciclo:
    </p>
    <BloqueCodigo
      archivo="diagonal.c"
      :codigo="codigoDiagonal"
      salida="Suma de la diagonal: 15"
    />

    <h2>8. Errores frecuentes</h2>
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
      Los errores de índices fuera de rango no los detecta el compilador. Para
      evitarlos, revisa que la condición de cada ciclo use <code>&lt;</code> con
      el número de filas o de columnas, no <code>&lt;=</code>.
    </p>

    <h2>9. Ejemplo completo: ventas de una tienda</h2>
    <div class="nota">
      <p>
        <strong>Problema:</strong> una tienda tiene 3 sucursales y registra las
        unidades vendidas en cada una durante 4 semanas. Mostrar el total vendido
        por cada sucursal, el total vendido en cada semana y cuál sucursal vendió
        más.
      </p>
    </div>
    <ul>
      <li>
        <strong>Descomposición:</strong> los datos son las ventas, organizadas en
        3 sucursales (filas) por 4 semanas (columnas); se pide el total de cada
        fila, el total de cada columna y la fila con el mayor total.
      </li>
      <li>
        <strong>Algoritmo:</strong> 1) guardar las ventas en una matriz de 3 × 4,
        2) para cada sucursal, sumar su fila, mostrarla y compararla con la mayor
        hasta ahora, 3) para cada semana, sumar su columna y mostrarla, 4) mostrar
        la sucursal con más ventas.
      </li>
      <li>
        <strong>Abstracción:</strong> no importan los productos vendidos ni los
        días exactos; solo la cantidad de unidades de cada sucursal en cada
        semana.
      </li>
      <li>
        <strong>Generalización:</strong> el mismo recorrido por filas y columnas
        sirve para cualquier tabla: notas por estudiante y materia, goles por
        equipo y fecha, o asistencias por curso y día.
      </li>
    </ul>
    <BloqueCodigo
      archivo="ventas.c"
      :codigo="codigoCompleto"
      :salida="salidaCompleto"
    />
    <p>
      Fíjate en que al mostrar los resultados se escribe <code>i + 1</code> y
      <code>j + 1</code>: los índices empiezan en 0, pero para las personas la
      primera sucursal es la 1.
    </p>

    <h2>Puntos clave</h2>
    <div class="nota">
      <ul>
        <li>Una matriz es un arreglo de dos dimensiones que organiza datos del mismo tipo en filas y columnas.</li>
        <li>Se declara con <code>tipo nombre[filas][columnas]</code> y guarda filas × columnas elementos.</li>
        <li>Cada elemento se accede con <code>matriz[fila][columna]</code>; los índices empiezan en 0.</li>
        <li>Se recorre con dos ciclos <code>for</code> anidados: el externo para las filas y el interno para las columnas.</li>
        <li>C no revisa los límites de la matriz: un índice fuera de rango compila, pero da resultados impredecibles.</li>
      </ul>
    </div>
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

const codigoRepaso = `#include <stdio.h>

int main(void) {
    int notas[4] = {85, 72, 90, 64};   // indices 0, 1, 2 y 3

    printf("La segunda nota es %d\\n", notas[1]);
    return 0;
}`;

const notasEjemplo = [
  [85, 72, 90, 64],
  [70, 95, 88, 79],
  [60, 81, 74, 92],
];

const sintaxisDeclaracion = `tipo nombre[filas][columnas];`;

const codigoDeclaracion = `int notas[3][4];        // 3 estudiantes, 4 materias: 12 enteros
int asientos[10][20];    // sala de cine: 10 filas de 20 asientos
char tablero[8][8];      // tablero de ajedrez de 8 x 8`;

const codigoInicializacion = `int notas[3][4] = {
    {85, 72, 90, 64},    // fila 0
    {70, 95, 88, 79},    // fila 1
    {60, 81, 74, 92}     // fila 2
};`;

const codigoAcceso = `#include <stdio.h>

int main(void) {
    int numeros[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    printf("El elemento [1][2] es %d\\n", numeros[1][2]);

    numeros[0][0] = 10;                        // cambiar un valor
    printf("Ahora [0][0] vale %d\\n", numeros[0][0]);

    int suma = numeros[0][0] + numeros[2][2];  // usarlo en operaciones
    printf("[0][0] + [2][2] = %d\\n", suma);

    return 0;
}`;

const salidaAcceso = `El elemento [1][2] es 6
Ahora [0][0] vale 10
[0][0] + [2][2] = 19`;

const codigoRecorrido = `#include <stdio.h>

int main(void) {
    int m[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for (int i = 0; i < 2; i++) {          // filas
        for (int j = 0; j < 3; j++) {      // columnas
            printf("%d\\t", m[i][j]);
        }
        printf("\\n");                      // fin de la fila
    }

    return 0;
}`;

const salidaRecorrido = `1\t2\t3\t
4\t5\t6\t`;

const ordenRecorrido = [
  { i: "0", j: "0, 1, 2", elementos: "m[0][0], m[0][1], m[0][2]" },
  { i: "1", j: "0, 1, 2", elementos: "m[1][0], m[1][1], m[1][2]" },
];

const codigoLlenar = `#include <stdio.h>

int main(void) {
    int tabla[3][4];

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            tabla[i][j] = (i + 1) * (j + 1);
        }
    }

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%d\\t", tabla[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`;

const salidaLlenar = `1\t2\t3\t4\t
2\t4\t6\t8\t
3\t6\t9\t12\t`;

const codigoSumaFilas = `#include <stdio.h>

int main(void) {
    int m[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int total = 0;

    for (int i = 0; i < 3; i++) {
        int sumaFila = 0;                  // vuelve a 0 en cada fila
        for (int j = 0; j < 3; j++) {
            sumaFila += m[i][j];
        }
        printf("Fila %d: %d\\n", i, sumaFila);
        total += sumaFila;
    }

    printf("Total: %d\\n", total);
    return 0;
}`;

const salidaSumaFilas = `Fila 0: 6
Fila 1: 15
Fila 2: 24
Total: 45`;

const codigoSumaColumnas = `#include <stdio.h>

int main(void) {
    int m[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    for (int j = 0; j < 3; j++) {          // columnas afuera
        int sumaColumna = 0;
        for (int i = 0; i < 3; i++) {      // filas adentro
            sumaColumna += m[i][j];
        }
        printf("Columna %d: %d\\n", j, sumaColumna);
    }

    return 0;
}`;

const salidaSumaColumnas = `Columna 0: 12
Columna 1: 15
Columna 2: 18`;

const codigoMayor = `#include <stdio.h>

int main(void) {
    int temp[2][4] = {
        {18, 21, 25, 19},
        {22, 27, 20, 24}
    };
    int mayor = temp[0][0];
    int filaMayor = 0;
    int columnaMayor = 0;

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 4; j++) {
            if (temp[i][j] > mayor) {
                mayor = temp[i][j];
                filaMayor = i;
                columnaMayor = j;
            }
        }
    }

    printf("La temperatura mayor es %d, en la fila %d y la columna %d\\n",
           mayor, filaMayor, columnaMayor);
    return 0;
}`;

const codigoDiagonal = `#include <stdio.h>

int main(void) {
    int m[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int suma = 0;

    for (int i = 0; i < 3; i++) {
        suma += m[i][i];                   // 1 + 5 + 9
    }

    printf("Suma de la diagonal: %d\\n", suma);
    return 0;
}`;

const erroresFrecuentes = [
  {
    codigo: "int m[2][3]; … m[2][0] = 5;",
    texto: "La matriz solo tiene las filas 0 y 1. El índice 2 está fuera de rango: compila, pero el resultado es impredecible.",
  },
  {
    codigo: "for (int j = 0; j <= 3; j++)",
    texto: "Con 3 columnas, j debe llegar hasta 2. Con <= se intenta leer la columna 3, que no existe.",
  },
  {
    codigo: "m[1, 2]",
    texto: "Cada índice va en sus propios corchetes: m[1][2].",
  },
  {
    codigo: "int m[][] = {{1, 2}, {3, 4}};",
    texto: "El número de columnas siempre es obligatorio: int m[][2] o int m[2][2].",
  },
  {
    codigo: "int m[2][2] = {{1, 2}, {3, 4}, {5, 6}};",
    texto: "Se dan 3 filas de valores para una matriz de 2 filas.",
  },
  {
    codigo: "m[columna][fila]",
    texto: "Los índices están al revés: primero la fila y después la columna.",
  },
  {
    codigo: "int sumaFila = 0; antes de ambos ciclos",
    texto: "El acumulador no vuelve a 0 en cada fila, así que cada suma arrastra las anteriores.",
  },
];

const codigoCompleto = `#include <stdio.h>

int main(void) {
    // ventas[sucursal][semana]
    int ventas[3][4] = {
        {12, 15, 10, 18},
        {20, 22, 19, 25},
        { 8, 11, 14,  9}
    };
    int mayorTotal = 0;
    int mejorSucursal = 0;

    printf("Ventas por sucursal:\\n");
    for (int i = 0; i < 3; i++) {
        int totalSucursal = 0;
        for (int j = 0; j < 4; j++) {
            totalSucursal += ventas[i][j];
        }
        printf("Sucursal %d: %d unidades\\n", i + 1, totalSucursal);

        if (totalSucursal > mayorTotal) {
            mayorTotal = totalSucursal;
            mejorSucursal = i;
        }
    }

    printf("Ventas por semana:\\n");
    for (int j = 0; j < 4; j++) {
        int totalSemana = 0;
        for (int i = 0; i < 3; i++) {
            totalSemana += ventas[i][j];
        }
        printf("Semana %d: %d unidades\\n", j + 1, totalSemana);
    }

    printf("La sucursal con mas ventas es la %d con %d unidades\\n",
           mejorSucursal + 1, mayorTotal);
    return 0;
}`;

const salidaCompleto = `Ventas por sucursal:
Sucursal 1: 55 unidades
Sucursal 2: 86 unidades
Sucursal 3: 42 unidades
Ventas por semana:
Semana 1: 40 unidades
Semana 2: 48 unidades
Semana 3: 43 unidades
Semana 4: 52 unidades
La sucursal con mas ventas es la 2 con 86 unidades`;
</script>

<style scoped>
.matriz-visual td,
.matriz-visual th {
  text-align: center;
}

.matriz-visual td {
  font-weight: 600;
  color: var(--t-texto);
}

.indice {
  display: block;
  font-family: "Consolas", "Fira Code", "Courier New", monospace;
  font-size: 12px;
  font-weight: 400;
  color: var(--t-azul-600);
}
</style>

<template>
  <TeoriaLayout
    titulo="Funciones (con parámetros)"
    migas="7. Funciones · 7.2 Funciones (con parámetros)"
    siguiente-ruta="/FCPEjDescomposicion"
    siguiente-texto="Ir al Ejemplo: Descomposición"
  >
    <p>
      Una función sin parámetros hace siempre exactamente lo mismo. Eso sirve para
      tareas fijas, como mostrar un saludo, pero la mayoría de las tareas cambian
      según los datos: sumar <em>estos</em> dos números, dibujar una línea de
      <em>este</em> largo o calcular el subtotal de <em>este</em> producto. Los
      <strong>parámetros</strong> permiten entregarle datos a una función para que
      trabaje con ellos.
    </p>

    <h2>1. Repaso: las funciones</h2>
    <p>
      En la sección <strong>7.1 Funciones (sin parámetros)</strong> viste que una
      función es un bloque de instrucciones con nombre que cumple una tarea
      específica y que se puede usar (<strong>llamar</strong>) las veces que se
      necesite. Un programa con funciones tiene tres partes:
    </p>
    <ul>
      <li>
        <strong>Prototipo:</strong> se escribe antes de <code>main</code> y le
        avisa al compilador que la función existe. Termina en punto y coma.
      </li>
      <li>
        <strong>Llamada:</strong> el nombre de la función seguido de paréntesis,
        escrito donde se quiere usar.
      </li>
      <li>
        <strong>Definición:</strong> el encabezado de la función y, entre llaves,
        las instrucciones que ejecuta.
      </li>
    </ul>
    <BloqueCodigo archivo="repaso.c" :codigo="codigoRepaso" :salida="salidaRepaso" />

    <h2>2. ¿Qué es un parámetro?</h2>
    <p>
      Un <strong>parámetro</strong> es una variable que se declara entre los
      paréntesis de una función y que recibe un valor cada vez que la función es
      llamada. El valor que se le entrega en la llamada se llama
      <strong>argumento</strong>.
    </p>
    <p>
      Piensa en una licuadora: siempre hace lo mismo (licuar), pero el resultado
      depende de lo que le pongas. La licuadora es la función, el espacio del vaso
      es el parámetro y la fruta que pones cada vez es el argumento.
    </p>
    <p>
      Compara una función que dibuja una línea fija con otra que recibe el largo
      como parámetro:
    </p>
    <BloqueCodigo archivo="sin_parametro.c" :codigo="codigoLineaFija" salida="*****" />
    <BloqueCodigo
      archivo="con_parametro.c"
      :codigo="codigoLineaParametro"
      :salida="salidaLineaParametro"
    />
    <p>
      La misma función dibuja líneas de distinto largo: en la primera llamada
      <code>largo</code> vale 3 y en la segunda vale 7.
    </p>
    <div class="nota">
      <p>
        <strong>Idea clave:</strong> el <strong>parámetro</strong> es la variable
        de la definición (<code>int largo</code>) y el <strong>argumento</strong>
        es el valor de la llamada (<code>3</code> o <code>7</code>). Al llamar a la
        función, el argumento se copia en el parámetro.
      </p>
    </div>

    <h2>3. Sintaxis de una función con parámetros</h2>
    <BloqueCodigo archivo="Forma general" :codigo="sintaxisFuncion" />
    <table>
      <thead>
        <tr>
          <th>Parte</th>
          <th>Ejemplo</th>
          <th>¿Qué indica?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in partesFuncion" :key="fila.parte">
          <td><strong>{{ fila.parte }}</strong></td>
          <td><code>{{ fila.ejemplo }}</code></td>
          <td>{{ fila.texto }}</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>Cada parámetro lleva su propio tipo, aunque todos sean del mismo: <code>int a, int b</code>.</li>
      <li>Los parámetros se separan con comas.</li>
      <li>
        El prototipo debe coincidir con la definición en tipo de retorno, nombre y
        tipos de los parámetros. En el prototipo los nombres de los parámetros son
        opcionales: <code>int sumar(int, int);</code> también es válido.
      </li>
    </ul>

    <h2>4. Los cuatro tipos de funciones</h2>
    <p>
      Que una función devuelva un valor depende de su <strong>tipo de
      retorno</strong>, no de si tiene parámetros. Combinando ambas cosas hay
      cuatro tipos:
    </p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>No recibe parámetros</th>
          <th>Recibe parámetros</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>No devuelve valor (<code>void</code>)</th>
          <td><code>void saludar(void)</code></td>
          <td><code>void dibujarLinea(int largo)</code></td>
        </tr>
        <tr>
          <th>Devuelve un valor</th>
          <td><code>int obtenerMaximo(void)</code></td>
          <td><code>int sumar(int a, int b)</code></td>
        </tr>
      </tbody>
    </table>
    <p class="aparte">
      Las dos de la izquierda se estudiaron en la sección 7.1. Aquí se estudian
      las dos de la derecha.
    </p>

    <h3>Con parámetros y sin valor de retorno</h3>
    <p>
      Su tipo es <code>void</code>: hacen una tarea con los datos que reciben,
      como imprimir, pero no entregan ningún resultado. La función
      <code>dibujarLinea</code> del punto 2 es de este tipo. Otro ejemplo:
    </p>
    <BloqueCodigo
      archivo="tabla.c"
      :codigo="codigoTablaVoid"
      :salida="salidaTablaVoid"
    />

    <h3>Con parámetros y con valor de retorno</h3>
    <p>
      Reciben datos, hacen un cálculo y devuelven el resultado con
      <code>return</code>. El valor devuelto debe ser del mismo tipo con el que se
      declaró la función:
    </p>
    <BloqueCodigo archivo="sumar.c" :codigo="codigoSumar" :salida="salidaSumar" />
    <p>El valor que devuelve una función se puede usar de varias formas:</p>
    <ul>
      <li><strong>Guardarlo en una variable:</strong> <code>int total = sumar(4, 6);</code></li>
      <li><strong>Usarlo directamente en <code>printf</code>:</strong> <code>printf("%d", sumar(7, 8));</code></li>
      <li><strong>Pasarlo como argumento a otra llamada:</strong> <code>sumar(sumar(1, 2), 3)</code></li>
      <li><strong>Usarlo en una condición:</strong> <code>if (sumar(a, b) &gt; 10)</code></li>
    </ul>

    <h3>Funciones que toman decisiones</h3>
    <p>
      Dentro de una función se puede usar todo lo visto hasta ahora, incluido
      <code>if else</code>. Una función puede tener varios <code>return</code>,
      pero en cuanto se ejecuta uno, la función termina:
    </p>
    <BloqueCodigo
      archivo="decisiones.c"
      :codigo="codigoDecisiones"
      :salida="salidaDecisiones"
    />
    <p>
      La función <code>esPar</code> devuelve <code>1</code> (verdadero) o
      <code>0</code> (falso), por eso se puede escribir directamente dentro del
      <code>if</code>.
    </p>

    <h2>5. ¿Cómo viajan los valores?</h2>

    <h3>Los argumentos se asignan en orden</h3>
    <p>
      El primer argumento se copia en el primer parámetro, el segundo en el
      segundo, y así sucesivamente. Por eso el orden importa:
    </p>
    <BloqueCodigo archivo="restar.c" :codigo="codigoRestar" :salida="salidaRestar" />
    <table>
      <thead>
        <tr>
          <th>Llamada</th>
          <th>Valor de a</th>
          <th>Valor de b</th>
          <th>Devuelve</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in tablaRestar" :key="fila.llamada">
          <td><code>{{ fila.llamada }}</code></td>
          <td>{{ fila.a }}</td>
          <td>{{ fila.b }}</td>
          <td>{{ fila.resultado }}</td>
        </tr>
      </tbody>
    </table>
    <p>
      La llamada debe tener la <strong>misma cantidad</strong> de argumentos que
      parámetros tiene la función, y cada argumento debe ser del tipo esperado.
    </p>

    <h3>Paso por valor</h3>
    <p>
      En C, la función recibe una <strong>copia</strong> del argumento, no la
      variable original. Si la función cambia su parámetro, la variable de
      <code>main</code> no se entera:
    </p>
    <BloqueCodigo
      archivo="por_valor.c"
      :codigo="codigoPorValor"
      :salida="salidaPorValor"
    />
    <p>
      Si se quiere que el cambio llegue a <code>main</code>, la función debe
      <strong>devolver</strong> el nuevo valor y <code>main</code> debe
      guardarlo: <code>numero = duplicar(numero);</code>
    </p>

    <h3>Variables locales</h3>
    <p>
      Los parámetros y las variables declaradas dentro de una función son
      <strong>locales</strong>: solo existen mientras la función se ejecuta y solo
      se pueden usar dentro de ella. Por eso <code>main</code> no puede usar el
      parámetro <code>x</code> de <code>duplicar</code>, y dos funciones pueden
      tener variables con el mismo nombre sin que se mezclen.
    </p>

    <h2>6. Arreglos como parámetros</h2>
    <p>
      Una función también puede recibir un arreglo. Como la función no sabe cuántos
      elementos tiene, se le pasa el tamaño en otro parámetro. En la llamada se
      escribe solo el nombre del arreglo, sin corchetes:
    </p>
    <BloqueCodigo
      archivo="arreglo_parametro.c"
      :codigo="codigoArreglo"
      :salida="salidaArreglo"
    />
    <div class="nota">
      <p>
        <strong>Excepción importante:</strong> a diferencia de las variables
        simples, un arreglo <strong>no se copia</strong>. La función trabaja
        directamente sobre el arreglo original, así que los cambios que haga sí se
        ven en <code>main</code>, como ocurre con <code>sumarPuntos</code>.
      </p>
    </div>
    <p class="aparte">
      Las matrices también se pueden pasar como parámetro, pero el número de
      columnas es obligatorio: <code>void mostrar(int m[][3], int filas)</code>.
    </p>

    <h2>7. Errores frecuentes</h2>
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

    <h2>8. Ejemplo completo: factura de una tienda</h2>
    <div class="nota">
      <p>
        <strong>Problema:</strong> un cliente compra 3 productos. Con sus precios y
        cantidades, mostrar el subtotal de cada producto y el total de la compra.
        Si el total es de 50000 pesos o más, aplicar un descuento del 10 % y
        mostrar el valor a pagar.
      </p>
    </div>
    <ul>
      <li>
        <strong>Descomposición:</strong> los datos son los precios y las
        cantidades de 3 productos; se pide cada subtotal, el total, el descuento y
        el valor a pagar. Hay tres tareas que se repiten o se pueden aislar:
        calcular un subtotal, calcular un descuento y mostrar un producto.
      </li>
      <li>
        <strong>Algoritmo:</strong> 1) para cada producto, calcular su subtotal con
        una función, mostrarlo y sumarlo al total, 2) mostrar el total, 3) si el
        total es de 50000 o más, calcular el descuento con otra función, 4) mostrar
        el descuento y el valor a pagar.
      </li>
      <li>
        <strong>Abstracción:</strong> no importan los nombres de los productos ni
        la forma de pago; solo los precios, las cantidades y la regla del
        descuento. Cada función se ocupa de una sola tarea.
      </li>
      <li>
        <strong>Generalización:</strong> <code>calcularSubtotal</code> y
        <code>calcularDescuento</code> sirven para cualquier producto y cualquier
        porcentaje, en este programa o en otros, sin cambiar una sola línea.
      </li>
    </ul>
    <BloqueCodigo
      archivo="factura.c"
      :codigo="codigoCompleto"
      :salida="salidaCompleto"
    />
    <p>
      <code>main</code> queda corto y fácil de leer: describe <em>qué</em> se hace,
      mientras que cada función se encarga de <em>cómo</em> se hace.
    </p>

    <h2>Puntos clave</h2>
    <div class="nota">
      <ul>
        <li>Los parámetros permiten que una función reciba datos y trabaje con valores distintos en cada llamada.</li>
        <li>El parámetro está en la definición; el argumento es el valor que se entrega en la llamada.</li>
        <li>Los argumentos se copian en los parámetros en orden, y deben coincidir en cantidad y tipo.</li>
        <li>Una función con tipo distinto de <code>void</code> devuelve su resultado con <code>return</code>.</li>
        <li>Las variables simples se pasan por valor (copia); los arreglos, en cambio, se modifican directamente.</li>
      </ul>
    </div>
  </TeoriaLayout>
</template>

<script setup>
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";

const codigoRepaso = `#include <stdio.h>

void saludar(void);                // prototipo

int main(void) {
    saludar();                     // llamada
    saludar();                     // se puede llamar varias veces
    return 0;
}

void saludar(void) {               // definicion
    printf("Hola, bienvenido\\n");
}`;

const salidaRepaso = `Hola, bienvenido
Hola, bienvenido`;

const codigoLineaFija = `#include <stdio.h>

void dibujarLinea(void);

int main(void) {
    dibujarLinea();                // siempre 5 asteriscos
    return 0;
}

void dibujarLinea(void) {
    for (int i = 1; i <= 5; i++) {
        printf("*");
    }
    printf("\\n");
}`;

const codigoLineaParametro = `#include <stdio.h>

void dibujarLinea(int largo);      // recibe el largo

int main(void) {
    dibujarLinea(3);               // argumento: 3
    dibujarLinea(7);               // argumento: 7
    return 0;
}

void dibujarLinea(int largo) {     // parametro: largo
    for (int i = 1; i <= largo; i++) {
        printf("*");
    }
    printf("\\n");
}`;

const salidaLineaParametro = `***
*******`;

const sintaxisFuncion = `// prototipo (antes de main)
tipo nombre(tipo1 parametro1, tipo2 parametro2);

// llamada (dentro de main u otra funcion)
nombre(argumento1, argumento2);

// definicion (despues de main)
tipo nombre(tipo1 parametro1, tipo2 parametro2) {
    // instrucciones que usan los parametros
    return valor;   // solo si el tipo no es void
}`;

const partesFuncion = [
  {
    parte: "Tipo de retorno",
    ejemplo: "int",
    texto: "El tipo del valor que devuelve la función. Si no devuelve nada, es void.",
  },
  {
    parte: "Nombre",
    ejemplo: "sumar",
    texto: "El identificador con el que se llama a la función. Sigue las mismas reglas que los nombres de variables.",
  },
  {
    parte: "Lista de parámetros",
    ejemplo: "(int a, int b)",
    texto: "Las variables que reciben los datos, cada una con su tipo. Si no hay ninguno, se escribe void.",
  },
  {
    parte: "Cuerpo",
    ejemplo: "{ return a + b; }",
    texto: "Las instrucciones que realiza la función con los parámetros.",
  },
];

const codigoTablaVoid = `#include <stdio.h>

void mostrarTabla(int numero, int hasta);

int main(void) {
    mostrarTabla(3, 4);
    return 0;
}

void mostrarTabla(int numero, int hasta) {
    for (int i = 1; i <= hasta; i++) {
        printf("%d x %d = %d\\n", numero, i, numero * i);
    }
}`;

const salidaTablaVoid = `3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12`;

const codigoSumar = `#include <stdio.h>

int sumar(int a, int b);

int main(void) {
    int total = sumar(4, 6);                       // guardar en variable
    printf("4 + 6 = %d\\n", total);

    int x = 7;
    int y = 8;
    printf("7 + 8 = %d\\n", sumar(x, y));            // usar en printf

    printf("1 + 2 + 3 = %d\\n", sumar(sumar(1, 2), 3));   // como argumento
    return 0;
}

int sumar(int a, int b) {
    int resultado = a + b;
    return resultado;                              // devuelve un int
}`;

const salidaSumar = `4 + 6 = 10
7 + 8 = 15
1 + 2 + 3 = 6`;

const codigoDecisiones = `#include <stdio.h>

int mayor(int a, int b);
int esPar(int n);

int main(void) {
    printf("El mayor entre 15 y 9 es %d\\n", mayor(15, 9));

    if (esPar(8)) {
        printf("8 es par\\n");
    } else {
        printf("8 es impar\\n");
    }

    return 0;
}

int mayor(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

int esPar(int n) {
    if (n % 2 == 0) {
        return 1;      // verdadero
    }
    return 0;          // falso
}`;

const salidaDecisiones = `El mayor entre 15 y 9 es 15
8 es par`;

const codigoRestar = `#include <stdio.h>

int restar(int a, int b);

int main(void) {
    printf("%d\\n", restar(10, 3));
    printf("%d\\n", restar(3, 10));
    return 0;
}

int restar(int a, int b) {
    return a - b;
}`;

const salidaRestar = `7
-7`;

const tablaRestar = [
  { llamada: "restar(10, 3)", a: "10", b: "3", resultado: "7" },
  { llamada: "restar(3, 10)", a: "3", b: "10", resultado: "-7" },
];

const codigoPorValor = `#include <stdio.h>

void duplicar(int x);

int main(void) {
    int numero = 5;

    duplicar(numero);
    printf("En main: %d\\n", numero);
    return 0;
}

void duplicar(int x) {
    x = x * 2;                              // cambia solo la copia
    printf("Dentro de la funcion: %d\\n", x);
}`;

const salidaPorValor = `Dentro de la funcion: 10
En main: 5`;

const codigoArreglo = `#include <stdio.h>

int sumarArreglo(int datos[], int tamano);
void sumarPuntos(int datos[], int tamano, int extra);

int main(void) {
    int notas[4] = {80, 65, 90, 75};

    printf("Suma: %d\\n", sumarArreglo(notas, 4));

    sumarPuntos(notas, 4, 5);               // modifica el arreglo original
    printf("Con 5 puntos extra: ");
    for (int i = 0; i < 4; i++) {
        printf("%d ", notas[i]);
    }
    printf("\\n");

    return 0;
}

int sumarArreglo(int datos[], int tamano) {
    int suma = 0;
    for (int i = 0; i < tamano; i++) {
        suma += datos[i];
    }
    return suma;
}

void sumarPuntos(int datos[], int tamano, int extra) {
    for (int i = 0; i < tamano; i++) {
        datos[i] += extra;
    }
}`;

const salidaArreglo = `Suma: 310
Con 5 puntos extra: 85 70 95 80`;

const erroresFrecuentes = [
  {
    codigo: "int sumar(int a, b)",
    texto: "Cada parámetro necesita su tipo: int sumar(int a, int b).",
  },
  {
    codigo: "sumar(5);",
    texto: "La función espera 2 argumentos y recibe 1. Error de compilación.",
  },
  {
    codigo: "sumar(int 5, int 3);",
    texto: "Los tipos se escriben en el prototipo y la definición, no en la llamada: sumar(5, 3).",
  },
  {
    codigo: "int sumar(int a, int b) { int r = a + b; }",
    texto: "Falta el return: la función no devuelve el resultado y el valor recibido es impredecible.",
  },
  {
    codigo: "int r = dibujarLinea(5);",
    texto: "dibujarLinea es void: no devuelve nada que se pueda guardar.",
  },
  {
    codigo: "printf(\"%d\", largo); dentro de main",
    texto: "largo es un parámetro de otra función; solo existe dentro de ella.",
  },
  {
    codigo: "int sumar(int a, int b); { … }",
    texto: "La definición no lleva punto y coma después del paréntesis; solo el prototipo lo lleva.",
  },
  {
    codigo: "sumarArreglo(notas[], 4);",
    texto: "En la llamada el arreglo se pasa solo con su nombre: sumarArreglo(notas, 4).",
  },
];

const codigoCompleto = `#include <stdio.h>

int calcularSubtotal(int precio, int cantidad);
int calcularDescuento(int total, int porcentaje);
void mostrarProducto(int numero, int cantidad, int subtotal);

int main(void) {
    int precios[3] = {12000, 5000, 3000};
    int cantidades[3] = {2, 3, 4};
    int total = 0;

    for (int i = 0; i < 3; i++) {
        int subtotal = calcularSubtotal(precios[i], cantidades[i]);
        mostrarProducto(i + 1, cantidades[i], subtotal);
        total += subtotal;
    }
    printf("Total: %d\\n", total);

    int descuento = 0;
    if (total >= 50000) {
        descuento = calcularDescuento(total, 10);
    }
    printf("Descuento: %d\\n", descuento);
    printf("Total a pagar: %d\\n", total - descuento);

    return 0;
}

int calcularSubtotal(int precio, int cantidad) {
    return precio * cantidad;
}

int calcularDescuento(int total, int porcentaje) {
    return total * porcentaje / 100;
}

void mostrarProducto(int numero, int cantidad, int subtotal) {
    printf("Producto %d: %d unidades, subtotal %d\\n", numero, cantidad, subtotal);
}`;

const salidaCompleto = `Producto 1: 2 unidades, subtotal 24000
Producto 2: 3 unidades, subtotal 15000
Producto 3: 4 unidades, subtotal 12000
Total: 51000
Descuento: 5100
Total a pagar: 45900`;
</script>

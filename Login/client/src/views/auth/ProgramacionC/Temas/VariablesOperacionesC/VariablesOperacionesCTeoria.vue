<template>
  <TeoriaLayout titulo="4. Variables y operaciones">
    <!--<h1 class="text-center">Programación en C</h1>-->
    <h2>4.1 Concepto de variable</h2>

    <p class="texto-personalizado">
      Una variable es un espacio donde se almacena la información que el
      programa necesita o va a necesitar, además de ello, una variable permite
      recuperar esa información en cualquier momento.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Recordar que para un
        programa en el lenguaje C la declaración de variables es de las primeras
        cosas que se digita.
      </p>
    </div>
    <p class="texto-personalizado">
      Antes de hablar de los tipos de variables que se suelen implementar a
      menudo, se debe de tener en cuenta que en el lenguaje de programación C el
      uso de una variable sin definir su valor dará como resultado un error de
      sintaxis, es decir, que no se puede hacer uso de una variable que no tenga
      definido el valor.
    </p>

    <h2>4.1.1 Tipos de variables</h2>

    <p class="texto-personalizado">
      Entre los tipos de variables se puede encontrar los siguientes tres
      grupos:
    </p>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >4.1.1.1. Variables para valores numéricos:</span
      >
      Son variables a las que se les asignan valores pertenecientes a los
      números reales. Están divididas en dos tipos:
    </p>
    <ul>
      <li>
        <p class="texto-personalizado">
          Varaibles para números enteros
          <span style="font-weight: bold">(int)</span>
        </p>
      </li>
      <li>
        <p class="texto-personalizado">
          Varaibles para números decimales
          <span style="font-weight: bold">(float)</span>
        </p>
      </li>
      <li>
        <p class="texto-personalizado">
          Varaibles para números decimales
          <span style="font-weight: bold">(double)</span>
        </p>
      </li>
    </ul>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >4.1.1.2. Variables para valores tipo carácter:</span
      >
      Estas variables permiten guardar y asignarles carácteres, los cuales son
      símbolos como las letras del abecedario. Solo existe un tipo de esta
      variable y se representa con la palabra reservada <strong>(Char)</strong>.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Char solo permite la
        declaración de un carácter, más adelante se tratará la forma en la cual
        se puede definir una palabra <strong>(cadena de carácteres)</strong>.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >4.1.1.3. Variables para valores de tipo estado:</span
      >
      Una variable de este tipo es la que permite definirse su propio estado
      verdadero o falso <strong>(true/false)</strong>. Se representa con la
      palabra reservada <strong>(bool)</strong>.
    </p>

    <h2>4.1.2 Declaración de una variable</h2>

    <p class="texto-personalizado">
      Para declarar una variable se debe de tener en cuenta su estructura
      básica:
    </p>

    <div class="teoria-sintaxis">
      <p class="text-center">
        <span style="font-weight: bold">
          Tipo_de_variable / Nombre_de_la_variable = Valor_de_la_variable</span
        >
      </p>
    </div>
    <p class="texto-personalizado">
      El nombre de la variable puede ser cualquiera y puede estar conformado por
      números y letras al mismo tiempo, pero no puede tener ninguna de las
      siguientes restricciones:
    </p>

    <ul>
      <li class="texto-personalizado">
        <strong>Empezar por un número.</strong>
      </li>
      <li class="texto-personalizado"><strong>Tener espacios.</strong></li>
      <li class="texto-personalizado">
        <strong>Utilizar palabras reservadas.</strong>
      </li>
      <li class="texto-personalizado">
        <strong>Tener carácteres especiales como tildes, comas, etc.</strong>
      </li>
    </ul>

    <img class="centrada2" src="/imagenes/Definir variables.PNG?url" alt="" />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> El valor de la variable
        debe de ir asociado al tipo de variable que se declare.
      </p>
    </div>

    <h2>4.2 Concepto de operación</h2>

    <p class="texto-personalizado">
      Un operador es un elemento que permite realizar acciones entre operandos
      <strong>(variables)</strong>.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> El operador más importante
        que se usa es el de asignación, el cual se representa por el
        símbolo<strong>(=)</strong>.
      </p>
    </div>

    <h2>4.2.1 Tipos de operadores</h2>

    <p class="texto-personalizado">
      Los tipos de operadores son seis según su función, los cuales son
      aritméticos, relacionales, de asignación, lógicos, de manejo de dirección
      y de Bits.
    </p>

    <p class="texto-personalizado">
      <span style="font-weight: bold">4.2.1.1. Operadores aritméticos:</span>
      Son aquellos que se usan para realizar cálculos y operaciones con números
      reales. Entre los más comunes se pueden encontrar:
    </p>

    <img
      class="centrada"
      src="/imagenes/Operadores aritméticos.PNG?url"
      alt=""
    />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Los operadores de
        incremento y decremento son más comunes en el uso de estructuras de
        repetición <strong>(ciclos)</strong>.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold">4.2.1.2. Operadores relacionales:</span>
      También llamados operadores lógicos y de comparación, son utilizados para
      validar la veracidad o falsedad de las propuestas de relación. Las
      expresiones relacionales
      <strong>(operadores relacionales)</strong> aceptan diversos tipos de
      argumentos y su respuesta siempre es verdadero <strong>(true)</strong> o
      falso <strong>(false)</strong>, es decir, un resultado booleano.
    </p>

    <img class="centrada" src="/imagenes/Oper relacionales.PNG?url" alt="" />

    <p class="texto-personalizado">
      <span style="font-weight: bold">4.2.1.3. Operadores de asignación:</span>
      Como su nombre lo dice estos operadores se usan para asignar un valor
      determinado a una variable. Los más comunes son:
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Los operadores de
        asignación no deben tener espacios entre el medio y los últimos cuatro
        de la lista solo permiten el uso de variables del tipo entero
        <strong>(int)</strong>.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold">4.2.1.4. Operadores lógicos:</span> Estos
      operadores son utilizados para hacer preguntas, en donde la respuesta es
      booleana, es decir, del tipo verdadero <strong>(true)</strong> y falso
      <strong>(false)</strong>. Existen solo tres tipos de estos operadores:
    </p>

    <img class="centrada" src="/imagenes/Oper lógicos.PNG?url" alt="" />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Los operadores lógicos se
        suelen usar en estructuras de control <strong>(if else)</strong>.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >4.2.1.5. Operadores de manejo de dirección:</span
      >
      En C existen operadores específicos de dirección
      <strong>(punteros)</strong> y referencia, los cuales permiten obtener
      datos o dirigir alguna información a alguna parte.
    </p>

    <img class="centrada2" src="/imagenes/Oper management.PNG?url" alt="" />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Los operadores de manejo de
        dirección son utilizados cuando se imprime por pantalla algún dato, o en
        las estructuras de datos.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold">4.2.1.6. Operadores de Bits:</span> Son
      operadores de movimiento a nivel de Bits, lo que significa que una
      cantidad determinada es convertida a su equivalente en Bits y luego se
      realiza el desplazamiento de dicho valor.
    </p>

    <img class="centrada2" src="/imagenes/Oper bits.PNG?url" alt="" />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Los operandos de este tipo
        de operadores tienen que ser del tipo entero <strong>(int)</strong>,
        esto debido a que el desplazamiento siempre dará como resultado un
        número entero.
      </p>
    </div>
    <div class="teoria-acciones">
      <button class="teoria-boton" @click="finish">Avanzar</button>
    </div>
  </TeoriaLayout>
</template>

<script>
import router from '@/router'
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
export default {
    components: {
        TeoriaLayout
    },

    methods: {
      finish() {
      router.push('/DescomposicionVariablesOperacionesCEjemplo').then(() => {
          window.scrollTo(0, 0);
        });
      }
    },

};
</script>

<style scoped src="@/components/teoria/teoriaContenidoIlustrado.css"></style>

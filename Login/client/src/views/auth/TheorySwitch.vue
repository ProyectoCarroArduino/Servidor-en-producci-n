<template>
    <div id="user">
      <div class="card card-body mt-8, align-left, col-md-15">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">5.2 Switch case</h1>
        <br>
        <br>
        <h2>5.2.1 Concepto de switch case</h2>
        <p class="texto-personalizado">La instrucción Switch case es una estructura de control condicional, la cual permite ejecutar multiples bloques de instrucciones o casos que puede llegar a cumplir una variable, y de este modo, qué acción tomar en cada situación, incluso es posible determinar qué acción llevar a cabo en caso de que no se cumpla ninguna de las condiciones dadas.</p>
        <p><span style="font-weight: bold;">Nota:</span> Esta estructura se suele usar para la creación de menús debido a la facilidad con la que maneja las diferentes situaciones.</p>
        <br>
        <h2>5.2.2 Sintaxis switch case</h2>
        <p class="texto-personalizado">La estructura de Switch case está dividida en las siguientes partes:</p>
        <ul>
          <li><p class="texto-personalizado"> <strong>Variable de entrada:</strong> Se utilizará como interruptor de la sentencia y esta debe de ser de tipo entero <span style="font-weight: bold">(int)</span>.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La variable de entrada también puede ser de tipo <strong>(char)</strong>, pero lo más es común es usar la variable de tipo entera.</p>
          <li><p class="texto-personalizado"> <strong>Expresión Switch:</strong> Es la expresión que se encarga de recibir la variable que se va a comparar en cada situación <span style="font-weight: bold">(casos)</span>.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La expresión Switch no permite que dos casos <strong>(case)</strong> tengan el mismo valor.</p>
          <li><p class="texto-personalizado"> <strong>Case:</strong> También llamado constante o bloque de instrucción, es el que se encarga de cumplir la validación <span style="font-weight: bold">(variable de entrada)</span> si esta coincide con el valor asignado a algún <strong>(case)</strong>.</p></li>
          <li><p class="texto-personalizado"> <strong>Break:</strong> Es la declaración encargada de detener, salir o terminar la ejecución de algún bloque de instrucción <strong>(case)</strong>.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La declaración break siempre debe de estar escrita al final de un bloque de instrucción <strong>(case)</strong>, en caso de ser una declaración <strong>(default)</strong> es opcional usarlo.</p>
          <li><p class="texto-personalizado"> <strong>Default:</strong> Esta declaración es opcional y especifica algún caso o instrucción <strong>(case)</strong>, que se ejecutará si no hay coincidencia entre la <strong>(variable de entrada)</strong> y el valor de los casos.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La declaración default se suele usar para imprimir un mensaje de error al usuario.</p>
        </ul>
        <br>
        <img class="centrada" src="/imagenes/Sintaxis Switch.png?url" alt="">
        <br>
        <h2>5.2.3 Declaración switch case</h2>
        <p class="texto-personalizado">Para declarar una variable se debe de tener en cuenta su estructura básica:</p>
        <p class="text-center"><span style="font-weight: bold;">Tipo_de_variable / Nombre_de_la_variable = Valor_de_la_variable</span></p>
        <p class="texto-personalizado">El nombre de la variable puede ser cualquiera y puede estar conformado por números y letras al mismo tiempo, pero no puede tener ninguna de las siguientes restricciones:</p>
        <ul>
          <li class="texto-personalizado">Empezar por un número.</li>
          <li class="texto-personalizado">Tener espacios.</li>
          <li class="texto-personalizado">Utilizar palabras reservadas.</li>
          <li class="texto-personalizado">Tener carácteres especiales como tildes, comas, etc.</li>
        </ul>
        <img class="centrada" src="/imagenes/Definir variables.PNG?url" alt="">
        <br> 
        <p><span style="font-weight: bold;">Nota:</span> El valor de la variable debe de ir asociado al tipo de variable que se declare.</p>
        <h2>4.2 Concepto de operación</h2>
        <p class="texto-personalizado">Un operador es un elemento que permite realizar acciones entre operandos <strong>(variables)</strong>.</p>
        <p><span style="font-weight: bold;">Nota:</span> El operador más importante que se usa es el de asignación, el cual se representa por el símbolo<strong>(=)</strong>.</p>
        <h2>4.2.1 Tipos de operadores</h2>
        <p class="texto-personalizado">Los tipos de operadores son seis según su función, los cuales son aritméticos, relacionales, de asignación, lógicos, de manejo de dirección y de Bits.</p>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.1. Operadores aritméticos:</span> Son aquellos que se usan para realizar cálculos y operaciones con números reales. Entre los más comunes se pueden encontrar:</p>
        <img class="centrada" src="/imagenes/Operadores aritméticos.PNG?url" alt="">
        <br>
        <p><span style="font-weight: bold; padding-left: 20px;">Nota:</span> Los operadores de incremento y decremento son más comunes en el uso de estructuras de repetición <strong>(ciclos)</strong>.</p>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.2. Operadores relacionales:</span> También llamados operadores lógicos y de comparación, son utilizados para validar la veracidad o falsedad de las propuestas de relación. Las expresiones relacionales <strong>(operadores relacionales)</strong> aceptan diversos tipos de argumentos y su respuesta siempre es verdadero <strong>(true)</strong> o falso <strong>(false)</strong>, es decir, un resultado booleano.</p>
        <img class="centrada" src="/imagenes/Oper relacionales.PNG?url" alt="">
        <br>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.3. Operadores de asignación:</span> Como su nombre lo dice estos operadores se usan para asignar un valor determinado a una variable. Los más comunes son:</p>
        <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operadores de asignación no deben tener espacios entre el medio y los últimos cuatro de la lista solo permiten el uso de variables del tipo entero <strong>(int)</strong>.</p>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.4. Operadores lógicos:</span> Estos operadores son utilizados para hacer preguntas, en donde la respuesta es booleana, es decir, del tipo verdadero <strong>(true)</strong> y falso <strong>(false)</strong>. Existen solo tres tipos de estos operadores:</p>
        <img class="centrada" src="/imagenes/Oper lógicos.PNG?url" alt="">
        <br>
        <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operadores lógicos se suelen usar en estructuras de control <strong>(if else)</strong>.</p>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.5. Operadores de manejo de dirección:</span> En C existen operadores específicos de dirección <strong>(punteros)</strong> y referencia, los cuales permiten obtener datos o dirigir alguna información a alguna parte.</p>
        <img class="centrada" src="/imagenes/Oper management.PNG?url" alt="">
        <br>
        <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operadores de manejo de dirección son utilizados cuando se imprime por pantalla algún dato, o en las estructuras de datos.</p>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">4.2.1.6. Operadores de Bits:</span> Son operadores de movimiento a nivel de Bits, lo que significa que una cantidad determinada es convertida a su equivalente en Bits y luego se realiza el desplazamiento de dicho valor.</p>
        <img class="centrada" src="/imagenes/Oper bits.PNG?url" alt="">
        <br>
        <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Los operandos de este tipo de operadores tienen que ser del tipo entero <strong>(int)</strong>, esto debido a que el desplazamiento siempre dará como resultado un número entero.</p>
        <br>
        <h2>4.3 Video explicativo y demostrativo: Agregar cualquier video</h2>
        <br>
        <div>
          <button class="bt-validate" @click="finish">Avanzar</button>
        </div>
      </div>
      <div class="col-md-3">
        <div class="temas">
          <Menu />
        </div>
      </div>
  </div>
  </template>

<script>
import router from '@/router'
import Menu from "../../components/Menu.vue";
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar,
        Menu
    },

    methods: {
      finish() {
      router.push('/descomposicion')
    },
    },

};
</script>

<style scoped>

#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.card {
  max-width: 100%;
  margin: auto;
}

.align-left {
  text-align: left; /* Alinea el contenido a la izquierda */
}

.square-card {
  width: 330px; /* Define el ancho deseado de la tarjeta */
  margin-top: 0px;
  overflow: hidden; /* Evita que el contenido se desborde */
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.centrada {
    display: block;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 80%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
}

.temas {
  position: sticky;
  margin-top: -245px;
}

.letras {
  font-size: 22px;
  height: 25px;
  font-weight: bold;
  color: #16161696;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

</style>
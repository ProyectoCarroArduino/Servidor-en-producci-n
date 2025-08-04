<template>
    <div id="user">
      <div class="card card-body mt-8, align-left, col-md-15">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">5.4 Ciclo while</h1>
        <br>
        <br>
        <h2>5.4.1 Concepto de ciclo while</h2>
        <p class="texto-personalizado">La instrucción while es una estructura de repetición o cíclica, la cual permite ejecutar en 
        <strong>bucle</strong> un conjunto de instrucciones <strong>(sentencias)</strong> hasta que se cumpla una condición especificada. El ciclo while no depende
        de un valor númerico, sino de una <strong>(condición booleana)</strong> que determinará dos posibles respuestas. La primera 
        <strong>true</strong> se ingresa al conjunto de instrcciones, y la segunda <strong>false</strong> no se ingresa al conjunto de instrucciones.</p>
        <p><span style="font-weight: bold;">Nota:</span> La estructura while se suele usar en casos donde no se sabe cuántas veces haya que ejecutar el conjunto de instrucciones para satisfacer la condición dada.</p>
        <br>
        <h2>5.4.2 Sintaxis ciclo while</h2>
        <p class="texto-personalizado">La sentencia while consta de los siguientes elementos:</p>
        <ul>
          <li><p class="texto-personalizado"> <strong>Palabra reservada (while):</strong> Es la encargada de administrar la <span style="font-weight: bold">(expresión)</span> o condición determinada.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> Al ser una palabra reservada no necesita estár declarada por ningún tipo de <strong>(variable)</strong>.</p>
          <li><p class="texto-personalizado"> <strong>Expresión o condición determinada:</strong> Es la que evaluará si la <span style="font-weight: bold">(condición booleana)</span> es verdadera o falsa. Si es verdadera <strong>(true)</strong> el 
          programa continuará ejecutándose, pero si es falso <strong>(false)</strong> el programa finalizará al instante. La <strong>(condicón booleana)</strong> es del tipo:</p></li>
          <p class="text-center"><span style="font-weight: bold;"> ( variable a comparar +  operador relacional + valor de comparación )</span></p>          
          <ul class=" custom-list" style="padding-left: 20px;">
          <li><p class="texto-li" style="padding-left: 20px;"> La variable a comparar puede ser de cualquier tipo y tiene que estar declarada.</p></li>
          <li><p class="texto-li" style="padding-left: 20px;"> El operador relacional es el que se va a comparar y siempre debe de haber uno.</p></li>
          <li><p class="texto-li" style="padding-left: 20px;"> El valor de comparación puede ser otra variable y siempre tiene que haber alguno.</p></li>
          </ul>
          <p><span style="font-weight: bold;">Nota:</span> La expresión o condición determinada siempre deberá ir encerrada entre <strong>paréntesis</strong>.</p>
          <li><p class="texto-personalizado"> <strong>Sentencias o conjunto de instrucciones:</strong> Son aquellas instrucciones que se quiere que se ejecuten cada vez que la <strong>(condición booleana)</strong> sea verdadera <strong>(true)</strong>.
          Las sentencias pueden ser:</p></li>
          <ul class=" custom-list" style="padding-left: 20px;">
          <li><p class="texto-li" style="padding-left: 20px;"> Impresiones y solicitud de datos.</p></li>
          <li><p class="texto-li" style="padding-left: 20px;"> operaciones aritmeticas.</p></li>
          <li><p class="texto-li" style="padding-left: 20px;"> Condicionales de cualquier tipo <strong>(switch case o if else)</strong>.</p></li>
          <li><p class="texto-li" style="padding-left: 20px;"> Ciclos de cualquier tipo <strong>(for, while, do while)</strong>.</p></li>
          </ul>
          <p><span style="font-weight: bold;">Nota:</span> Las sentencias siempre deben ir delimitadas por  <strong>(corchetes)</strong> de lo contrario solo se ejecutaría la primera sentencia y no el conjunto de sentencias.</p>
        </ul>
        <br>
        <img class="centrada" src="/imagenes/Sintaxis while.png?url" alt="">
        <br>
        <br>
        <p class="texto-personalizado" style="padding-left: 20px;"><span style="font-weight: bold;">5.4.2.3 Elementos que se suelen usar:</span> En la mayoría de ejemplos hay elementos que no son parte de la sintaxis, pero que su uso es casi que obligatorio. 
        Algunos de los más comunes son:</p>
        <ul>
          <li><p class="texto-personalizado"> <strong>Contador:</strong> Es el encargado de administrar el número de ejecuciones determinadas por el usuario.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> El contador no es obligatorio ni usado en todos los programas, solo se usa si el usuario determina el número de veces que quiere que las <strong>(sentencias)</strong> se ejecuten.</p>
          <li><p class="texto-personalizado"> <strong>Funcion system pause:</strong> Incorpora una pausa en el programa, lo que siginifica que si se quiere seguir ejecutando se necesita que el usuario presione alguna tecla para poder continuar. Para poder 
          hacer uso de esta función se necesita implementar la biblioteca <strong>(stdlib.h)</strong></p></li>
          <p><span style="font-weight: bold;">Nota:</span> La función system pause es utilizada en ejemplos donde se solicita que el usuario sea el que verifique si la <strong>(condición booleana)</strong> se cumple o no.</p>
        </ul>
        <br>
        <img class="centrada" src="/imagenes/Elementos while.png?url" alt="">
        <br>
        <div>
          <br>
          <br>
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
        router.push('/descomposicionWhileEj').then(() => {
          window.scrollTo(0, 0);
        });
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

ul.custom-list {
  list-style-type: square; /* Puedes cambiar 'square' por 'circle', 'disc', etc. */

}

.texto-li{
  font-family: Arial, sans-serif; /* Tipo de letra */
  font-size: 16px; /* Tamaño de fuente */
  text-align: justify; /* Alineación justificada */
}

</style>
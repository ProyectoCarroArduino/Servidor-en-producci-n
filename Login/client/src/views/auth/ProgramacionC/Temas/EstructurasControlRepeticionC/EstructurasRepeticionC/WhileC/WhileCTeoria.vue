<template>
  <TeoriaLayout titulo="5.4 Ciclo while">
    <!--<h1 class="text-center">Programación en C</h1>-->
    <h2>5.4.1 Concepto de ciclo while</h2>
    <p class="texto-personalizado">
      La instrucción <strong>while</strong> es una estructura de repetición o
      cíclica, la cual permite ejecutar en <strong>bucle</strong> un conjunto de
      instrucciones <strong>(sentencias)</strong> hasta que se cumpla una
      condición especifica. El ciclo while <strong>no depende</strong> de un
      valor númerico, sino de una <strong>(condición booleana)</strong> que
      determinará dos posibles respuestas. La primera <strong>true</strong> se
      ingresa al conjunto de instrcciones, y la segunda
      <strong>false</strong> no se ingresa al conjunto de instrucciones.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> La estructura while se
        suele usar en casos donde <strong>no se sabe</strong> cuántas veces haya
        que ejecutar el conjunto de instrucciones para satisfacer la condición
        dada.
      </p>
    </div>

    <h2>5.4.2 Sintaxis ciclo while</h2>
    <p class="texto-personalizado">
      La sentencia while consta de los siguientes elementos:
    </p>
    <ul>
      <li>
        <p class="texto-personalizado">
          <strong>Palabra reservada (while):</strong> Es la encargada de
          administrar la <span style="font-weight: bold">(expresión)</span> o
          condición determinada.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Al ser una palabra
          reservada no necesita estár declarada por ningún tipo de
          <strong>(variable)</strong>.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Expresión o condición determinada:</strong> Es la que evaluará
          si la <span style="font-weight: bold">(condición booleana)</span> es
          verdadera o falsa. Si es verdadera <strong>(true)</strong> el programa
          continuará ejecutándose, pero si es falso <strong>(false)</strong> el
          programa finalizará al instante. La
          <strong>(condicón booleana)</strong> es del tipo:
        </p>
      </li>

      <div class="teoria-sintaxis">
        <p class="text-center">
          <span style="font-weight: bold">
            ( variable a comparar + operador relacional + valor de comparación
            )</span
          >
        </p>
      </div>
      <ul class="custom-list">
        <li class="texto-personalizado">
          <p class="texto-li">
            La variable a comparar puede ser de
            <strong>cualquier tipo</strong> y tiene que estar declarada.
          </p>
        </li>
        <li class="texto-personalizado">
          <p class="texto-li">
            El operador relacional es el que se va a comparar y
            <strong>siempre</strong> debe de haber uno.
          </p>
        </li>
        <li class="texto-personalizado">
          <p class="texto-li">
            El valor de comparación <strong>puede ser</strong> otra variable y
            siempre tiene que haber alguno.
          </p>
        </li>
      </ul>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La expresión o condición
          determinada siempre deberá ir encerrada entre
          <strong>paréntesis</strong>.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Sentencias o conjunto de instrucciones:</strong> Son aquellas
          instrucciones que se quiere que se ejecuten cada vez que la
          <strong>(condición booleana)</strong> sea verdadera
          <strong>(true)</strong>. Las sentencias pueden ser:
        </p>
      </li>
      <ul class="custom-list">
        <li>
          <p class="texto-personalizado">Impresiones y solicitud de datos.</p>
        </li>
        <li><p class="texto-personalizado">operaciones aritmeticas.</p></li>
        <li>
          <p class="texto-personalizado">
            Condicionales de cualquier tipo
            <strong>(switch case o if else)</strong>.
          </p>
        </li>
        <li>
          <p class="texto-personalizado">
            Ciclos de cualquier tipo <strong>(for, while, do while)</strong>.
          </p>
        </li>
      </ul>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Las sentencias siempre
          deben ir delimitadas por <strong>(corchetes)</strong> de lo contrario
          solo se ejecutaría la primera sentencia y no el conjunto de
          sentencias.
        </p>
      </div>
    </ul>

    <img class="centrada" src="/imagenes/Sintaxis while.png?url" alt="" />

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >5.4.2.3 Elementos que se suelen usar:</span
      >
      En la mayoría de ejemplos hay elementos que no son parte de la sintaxis,
      pero que su uso es casi que obligatorio. Algunos de los más comunes son:
    </p>
    <ul>
      <li>
        <p class="texto-personalizado">
          <strong>Contador:</strong> Es el encargado de administrar el número de
          ejecuciones determinadas por el usuario.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> El contador no es
          obligatorio ni usado en todos los programas, solo se usa si el usuario
          determina el número de veces que quiere que las
          <strong>(sentencias)</strong> se ejecuten.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Funcion system pause:</strong> Incorpora una pausa en el
          programa, lo que siginifica que si se quiere seguir ejecutando se
          necesita que el usuario presione alguna tecla para poder continuar.
          Para poder hacer uso de esta función se necesita implementar la
          biblioteca <strong>(stdlib.h)</strong>
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La función system pause
          es utilizada en ejemplos donde se solicita que el usuario sea el que
          verifique si la <strong>(condición booleana)</strong> se cumple o no.
        </p>
      </div>
    </ul>

    <img class="centrada" src="/imagenes/Elementos while.png?url" alt="" />
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
      router.push('/DescomposicionWhileCEjemplo').then(() => {
          window.scrollTo(0, 0);
        });
      }
    },

};
</script>

<style scoped src="@/components/teoria/teoriaContenidoIlustrado.css"></style>

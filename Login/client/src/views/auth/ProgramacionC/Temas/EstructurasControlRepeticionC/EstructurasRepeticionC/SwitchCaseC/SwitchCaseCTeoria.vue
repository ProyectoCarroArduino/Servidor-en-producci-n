<template>
  <TeoriaLayout titulo="5.2 Switch case">
    <!--<h1 class="text-center">Programación en C</h1>-->
    <h2>5.2.1 Concepto de switch case</h2>

    <p class="texto-personalizado">
      La instrucción Switch case es una estructura de control condicional, la
      cual permite ejecutar multiples bloques de instrucciones o casos que puede
      llegar a cumplir una variable, y de este modo, qué acción tomar en cada
      situación, incluso es posible determinar qué acción llevar a cabo en caso
      de que no se cumpla ninguna de las condiciones dadas.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Esta estructura se suele
        usar para la creación de menús debido a la facilidad con la que maneja
        las diferentes situaciones.
      </p>
    </div>

    <h2>5.2.2 Sintaxis switch case</h2>

    <p class="texto-personalizado">
      La estructura de Switch case está dividida en las siguientes partes:
    </p>

    <ul>
      <li>
        <p class="texto-personalizado">
          <strong>Instrucción switch:</strong> Es la palabra reservada que se
          encarga de evaluar la variable recibida y decidir qué bloque de
          instrucciones <strong>(case)</strong> se va a ejecutar a
          continucación.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La instrucción Switch no
          permite que dos casos <strong>(case)</strong> tengan el mismo valor
          <strong>(expresión constante)</strong>.
        </p>
      </div>

      <li>
        <p class="texto-personalizado">
          <strong>Variable de entrada:</strong> Se utilizará como interruptor de
          la sentencia y esta por lo general es de tipo entero
          <span style="font-weight: bold">(int)</span>.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La variable de entrada
          también puede ser de tipo <strong>(char)</strong>, pero lo más común
          es usar la variable de tipo entera.
        </p>
      </div>

      <li>
        <p class="texto-personalizado">
          <strong>Instrucción case:</strong> También llamado constante o bloque
          de instrucción, es el que se encarga de cumplir la validación
          <span style="font-weight: bold">(variable de entrada)</span> si esta
          coincide con el valor asignado a algún <strong>(case)</strong>.
        </p>
      </li>

      <li>
        <p class="texto-personalizado">
          <strong>Expresión constante:</strong> Es el complemento de la
          instrucción <strong>case</strong>. Esta debe coincidir con el tipo y
          valor que se le ha asignado a la <strong>variable de entrada</strong>,
          la cual en la mayoría de casos es de tipo entera
          <strong>(int)</strong>, es decir, la expresión constante es: 1,2,3...
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La expresión constante
          también puede ser de tipo <strong>(char)</strong>, pero en ese caso
          sus valores asignados serían de tipo: a,b,c. Si la expresión constante
          es de tipo <strong>char</strong> se debe tener en cuenta si el
          caracter ingresado es en <strong>mayúscula o minúscula</strong>,
          debido a que la <strong>instrucción switch no valida</strong> este
          detalle.
        </p>
      </div>

      <li>
        <p class="texto-personalizado">
          <strong>Break:</strong> Es la declaración encargada de detener, salir
          o terminar la ejecución de algún bloque de instrucción
          <strong>(case)</strong>.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La declaración break
          siempre debe de estar escrita al final de un bloque de instrucción
          <strong>(case)</strong>, en caso de ser una declaración
          <strong>(default)</strong> es opcional usarlo.
        </p>
      </div>

      <li>
        <p class="texto-personalizado">
          <strong>Default:</strong> Esta declaración es opcional y especifica
          algún caso o instrucción <strong>(case)</strong>, que se ejecutará si
          no hay coincidencia entre la <strong>(variable de entrada)</strong> y
          el valor de los casos.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> La declaración default se
          suele usar para imprimir un mensaje de error al usuario.
        </p>
      </div>
    </ul>

    <h2>5.2.3 Declaración switch case</h2>

    <p class="texto-personalizado">
      Para declarar una estructura switch case (menú) se debe de tener en cuenta
      su estructura básica:
    </p>

    <div class="teoria-sintaxis">
      <p class="text-center">
        <span style="font-weight: bold">
          Instrucción switch (variable de entrada) {</span
        >
      </p>
      <p class="text-center">
        <span style="font-weight: bold">
          Instrucción case (expresion constante):
        </span>
      </p>
      <p class="text-center"><span style="font-weight: bold"> break; </span></p>
      <p class="text-center">
        <span style="font-weight: bold"> default: </span>
      </p>
      <p class="text-center"><span style="font-weight: bold"> } </span></p>
    </div>
    <img class="centrada" src="/imagenes/Sintaxis Switch.png?url" alt="" />
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
      router.push('/DescomposicionSwitchCaseCEjemplo').then(() => {
          window.scrollTo(0, 0);
        });
      }
    },

};
</script>

<style scoped src="@/components/teoria/teoriaContenidoIlustrado.css"></style>

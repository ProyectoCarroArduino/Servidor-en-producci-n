<template>
  <TeoriaLayout titulo="7.1 Funciones (sin parámetros)">
    <!--<h1 class="text-center">Programación en C</h1>-->
    <h2>7.1.1 Concepto de función</h2>
    <p class="texto-personalizado">
      Una función es un conjunto de intrucciones que se van a ejecutar en orden
      descendente o <strong>(bloque)</strong> y se espera que cumpla con una
      tarea específica. Una función es reutilizable dentro de un programa, por
      lo que puede ser <strong>(llamada)</strong> en cualquier parte del
      programa, permitiendo que haya un manejo más óptimo en el código. Hay dos
      tipos de funciones que se suelen usar en un programa, primero está la
      función <strong>(sin parámetros)</strong> y segundo se encuentra la
      función <strong>(con parámetros)</strong>.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> En este apartado de la
        teoria solo se hablará de la función <strong>(sin parámetros)</strong>.
      </p>
    </div>

    <h2>7.1.2 Sintaxis o declaración de una función</h2>
    <p class="texto-personalizado">
      Para declarar una función se necesitan los siguientes elementos:
    </p>
    <ul>
      <li>
        <p class="texto-personalizado">
          <strong>Tipo de la función o de retorno:</strong> Se encarga de
          especificar el tipo de dato que la función va a retornar
          <span style="font-weight: bold">(devolver)</span> como respuesta. Si
          la función es <strong>(sin parámetros)</strong> el tipo debe ser
          <strong>(void)</strong>. Por otro lado, si la función es
          <strong>(con parámetros)</strong> el tipo puede ser el de cualquier
          tipo de variable, como por ejemplo, int, double, char, etc.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Para este apartado de la
          teoria, el cual habla sobre funciones
          <strong>(sin parámetros)</strong> el tipo que se debe asignar es
          <strong>(void)</strong>.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Nombre de la función:</strong> Es el identificador o nombre
          que se va a usar para poder
          <span style="font-weight: bold">(invocar o llamar)</span> la función.
          Se le llama <strong>(invocar o llamar)</strong> cuando se quiere
          reutilizar la función en alguna parte del código.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Para entender más sobre
          qué es <strong>(llamar o invocar)</strong> una función siga leyendo
          este apartado y dirijase a la parte de
          <strong>(estructura o cuerpo de una función)</strong>.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Parámetros:</strong> Son valores que se pasan o
          <strong>(entregan)</strong> a la función para que esta los utilice.
          Los parámetros pueden ser de cualquier tipo, ya que lo que se conoce
          como <strong>(parámetro)</strong> es una variable que puede llamarse
          de cualquier forma. Lo más importante acerca de los
          <strong>(parámetros)</strong> es que deben ir dentro de los paréntesis
          si se quiere declarar uan función <strong>(con parámetros)</strong>,
          pero si se quiere declarar una función
          <strong>(sin parámetros)</strong> los paréntesis deben estar vacios.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Si se quiere declarar una
          funcion <strong>(sin parámetros)</strong> los paréntesis deben estar
          vacios, no agregue ninguna palabra reservada como while, void, if,
          etc.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>return o respuesta:</strong> Es el encargado de
          <strong>(devolver)</strong> una respuesta o valor al lugar desde donde
          se <strong>(llama)</strong> a la función, este lugar puede ser la
          función main y otras funciones. El valor que devuelve una función
          <strong>(sin parámetros)</strong> no esta limitado a ningún tipo de
          dato, es decir que lo que haga específicamente la función llegará como
          respuesta. Por otro lado, el valor que debe devolver una función
          <strong>(con parámetros)</strong> debe ser el mismo que el tipo con el
          que se declaró la función, de la contrario el programa arrojará un
          error de sintaxis.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Una función
          <strong>(sin parámetros)</strong> no necesariamente necesita un
          <strong>(return)</strong>. Por otro lado, una función
          <strong>(con parámetros)</strong> necesita contener el
          <strong>(return)</strong> de lo contrario se retornará el valor
          predeterminado de la función.
        </p>
      </div>
    </ul>
    <div class="teoria-sintaxis">
      <p class="text-center">
        <span style="font-weight: bold">
          tipo de la función + nombre de la función + (parámetros)
        </span>
      </p>

      <p class="text-center">
        <span style="font-weight: bold">
          {

          <br />

          bloque de instrucción

          <br />
          <br />

          return valor;

          <br />

          }
        </span>
      </p>
    </div>
    <h2>7.1.3 Tipos de función</h2>
    <p class="texto-personalizado">
      Existen cuatro tipos de funciones que se pueden usar en el lenguaje C:
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> En este apartado de la
        teoria solo se hablará de los tipos que tienen que ver con la función
        <strong>(sin parámetros)</strong>.
      </p>
    </div>
    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >7.1.3.1 Funciones sin párametros que no retornan nada:</span
      >
      Son funciones que no reciben ningún tipo de dato para ser manejado
      <strong>(parámetro)</strong> y tampoco devuelven
      <strong>(retornan)</strong> ningún tipo de resultado. Ejemplo:
    </p>

    <img
      class="centrada"
      src="/imagenes/Funciones sin parámetros ni return.png?url"
      alt=""
    />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Si la función es llamada
        por ejemplo por la función <strong>(main)</strong> y esta a su vez
        intenta imprimir el resultado que la función de tipo
        <strong>(void)</strong> tiene alamcenado, la respuesta será
        <strong>(Hola mundo)</strong>.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >7.1.3.2 Funciones que no devuelven ningún valor pero si reciben
        parámetros:</span
      >
      Para saber más acerca de estas funciones dirijase al tema
      <strong>(7.2 Funciones con parámetros)</strong>.
    </p>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >7.1.3.3 Funciones que devuelven un valor y no reciben parámetros:</span
      >
      Son funciones que no reciben ningún <strong>(parámetro)</strong>. Sin
      embargo, si devuelven una respuesta o tienen un <strong>(return)</strong>.
      Ejemplo:
    </p>

    <img
      class="centrada"
      src="/imagenes/Funciones sin parámetros y con return.png?url"
      alt=""
    />

    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> En este tipo de función es
        muy importante que el tipo que se le declaró a la función coincida con
        el valor que se va a retornar. Si la función
        <strong>(main)</strong> llama a la función y a la vez intenta imrpirmir
        el resultado que está almacenado, el valor será <strong>(10)</strong>.
      </p>
    </div>

    <p class="texto-personalizado">
      <span style="font-weight: bold"
        >7.1.3.4 Funciones que devuelven un valor y reciben parámetros:</span
      >
      Para saber más acerca de estas funciones dirijase al tema
      <strong>(7.2 Funciones con parámetros)</strong>.
    </p>

    <h2>7.1.4 Estructura de una función</h2>
    <p class="texto-personalizado">
      Para que una funcion pueda ser reutilizada en cualquier parte de un
      programa se necesita definir su estructura:
    </p>
    <ul>
      <li>
        <p class="texto-personalizado">
          <strong>Función prototipo:</strong> En el lenguaje C es importante
          definir la función prototipo antes que la función
          <strong>(main)</strong>, de esta forma otra función puede
          <strong>(llamar)</strong> a una función específica. La función
          prototipo se define de la siguiente forma:
        </p>
      </li>
      <div class="teoria-sintaxis">
        <p class="text-center">
          <span style="font-weight: bold">
            ( tipo de la función + nombre de la función + (parámetros) )</span
          >
        </p>
      </div>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> El tipo de función para
          una función <strong>(sin parámetros)</strong> debe ser
          <strong>(void)</strong>, también una función
          <strong>(sin parámetros)</strong> no debe llevar nada dentro de los
          paréntesis.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>llamada:</strong> Es la encargada de invocar
          <strong>(llamar)</strong> a una función desde cualquier parte del
          código. La sintaxis de la llamada es la siguiente:
        </p>
      </li>
      <div class="teoria-sintaxis">
        <p class="text-center">
          <span style="font-weight: bold">
            ( nombre de la función + (parámetros) + punto y coma (;))</span
          >
        </p>
      </div>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> Para una función
          <strong>(sin parámetros)</strong> que no devuelva
          <strong>(return)</strong> un valor los paréntesis deben estar vacios,
          y para una función <strong>(sin parámetros)</strong> que si devuelva
          <strong>(return)</strong> un valor en los paréntesis debe ir el nombre
          que almacena el valor o el valor en si.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Definición o declaración de una función:</strong> Es donde la
          función se <strong>(define)</strong>. Para aprender más sobre este
          tema ir al punto
          <strong>(7.2 Sintaxis o declaración de una función)</strong> en este
          mismo apartado.
        </p>
      </li>
    </ul>

    <img class="centrada" src="/imagenes/Estructura función.png?url" alt="" />
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
        router.push('/descomposicionFuncionesSinparEj').then(() => {
          window.scrollTo(0, 0);
        });
      },
  
    },

};
</script>

<style scoped src="@/components/teoria/teoriaContenidoIlustrado.css"></style>

<template>
    <div id="layout-general">
      <main class="contenido">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">5.4 Ciclo while</h1>
        <br>
        <br>
        <h2>5.4.1 Concepto de ciclo while</h2>
        <p class="texto-personalizado">La instrucción <strong>while</strong> es una estructura de repetición o cíclica, la cual permite ejecutar en 
        <strong>bucle</strong> un conjunto de instrucciones <strong>(sentencias)</strong> hasta que se cumpla una condición especifica. El ciclo while <strong>no depende</strong>
        de un valor númerico, sino de una <strong>(condición booleana)</strong> que determinará dos posibles respuestas. La primera 
        <strong>true</strong> se ingresa al conjunto de instrcciones, y la segunda <strong>false</strong> no se ingresa al conjunto de instrucciones.</p>
        <p><span style="font-weight: bold;">Nota:</span> La estructura while se suele usar en casos donde <strong>no se sabe</strong> cuántas veces haya que ejecutar el conjunto de instrucciones para satisfacer la condición dada.</p>
        <br>
        <h2>5.4.2 Sintaxis ciclo while</h2>
        <p class="texto-personalizado">La sentencia while consta de los siguientes elementos:</p>
        <ul>
          <li><p class="texto-personalizado"> <strong>Palabra reservada (while):</strong> Es la encargada de administrar la <span style="font-weight: bold">(expresión)</span> o condición determinada.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> Al ser una palabra reservada no necesita estár declarada por ningún tipo de <strong>(variable)</strong>.</p>
          <li><p class="texto-personalizado"> <strong>Expresión o condición determinada:</strong> Es la que evaluará si la <span style="font-weight: bold">(condición booleana)</span> es verdadera o falsa. Si es verdadera <strong>(true)</strong> el 
          programa continuará ejecutándose, pero si es falso <strong>(false)</strong> el programa finalizará al instante. La <strong>(condicón booleana)</strong> es del tipo:</p></li>
          <br>
          <p class="text-center"><span style="font-weight: bold;"> ( variable a comparar +  operador relacional + valor de comparación )</span></p>
          <br>          
          <ul class=" custom-list" style="padding-left: 20px;">
            <li class="texto-personalizado"><p class="texto-li" style="padding-left: 20px;"> La variable a comparar puede ser de <strong>cualquier tipo</strong> y tiene que estar declarada.</p></li>
            <li class="texto-personalizado"><p class="texto-li" style="padding-left: 20px;"> El operador relacional es el que se va a comparar y <strong>siempre</strong> debe de haber uno.</p></li>
            <li class="texto-personalizado"><p class="texto-li" style="padding-left: 20px;"> El valor de comparación <strong>puede ser</strong> otra variable y siempre tiene que haber alguno.</p></li>
          </ul>
          <p><span style="font-weight: bold;">Nota:</span> La expresión o condición determinada siempre deberá ir encerrada entre <strong>paréntesis</strong>.</p>
          <li><p class="texto-personalizado"> <strong>Sentencias o conjunto de instrucciones:</strong> Son aquellas instrucciones que se quiere que se ejecuten cada vez que la <strong>(condición booleana)</strong> sea verdadera <strong>(true)</strong>.
          Las sentencias pueden ser:</p></li>
          <ul class=" custom-list" style="padding-left: 20px;">
          <li><p class="texto-personalizado" style="padding-left: 20px;"> Impresiones y solicitud de datos.</p></li>
          <li><p class="texto-personalizado" style="padding-left: 20px;"> operaciones aritmeticas.</p></li>
          <li><p class="texto-personalizado" style="padding-left: 20px;"> Condicionales de cualquier tipo <strong>(switch case o if else)</strong>.</p></li>
          <li><p class="texto-personalizado" style="padding-left: 20px;"> Ciclos de cualquier tipo <strong>(for, while, do while)</strong>.</p></li>
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
      </main>
      <aside class="menu-lateral">
        <div>
          <Menu />
        </div>
      </aside>
  </div>
  </template>

<script>
import router from '@/router'
import Menu from "@/components/Menu.vue";
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar,
        Menu
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

<style scoped>

#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.layout-general {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin: 0 auto; /* centra horizontalmente */
  box-sizing: border-box;
  gap: 2rem;
  }

/* Contenido principal */
.contenido {
  flex: 1; /* Ocupa el resto del espacio disponible */
  min-width: 0; /* evita overflow horizontal */
  max-width: 82%; /* Ajusta este valor según quieras */
  overflow-x: hidden;
  }

/* Menú lateral */
.menu-lateral {
  flex: 0 0 280px;
  background-color: transparent;
  border-radius: 10px;
  padding: 1rem;
  position: sticky;
  top: 20px;
  height: fit-content;
  }

  /* Versión responsive */
@media (max-width: 992px) {
  .layout-general {
    flex-direction: column;
    align-items: center;
  }

  .contenido {
    flex: 1;
    max-width: 120%;
  }
  .menu-lateral {
    max-width: 100%;
  }

  .menu-lateral {
    position: relative; /* deja de ser sticky en móviles */
    top: 0;
  }

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
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 40%;
}

.centrada2 {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 25%;
}

.centradados {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 32%;
}

.temas {
  position: sticky;
  margin-top: -245px;
}

.letras {
  font-size: 0px;
  height: 0px;
  font-weight: bold;
  color: #16161696;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

.contenedor {
  display: flex;
  justify-content: space-between; /* Se asegura que haya espacio entre las imágenes */
  align-items: flex-start; /* Alineación de las imágenes desde la parte superior */
  gap: 10px; /* Espacio entre las imágenes */
  flex-wrap: wrap; /* Permite que las imágenes se ajusten si el espacio es insuficiente */
}

.imagen-item {
  text-align: center;
  width: 18%; /* Ajusta el tamaño de cada contenedor de imagen */
  display: flex;
  flex-direction: column; /* Coloca el texto debajo de la imagen */
  justify-content: center;
  align-items: center;
}

.imagen-item img {
  width: 100%; /* Las imágenes llenan el contenedor */
  height: 200px; /* Establece una altura fija para todas las imágenes */
  object-fit: contain; /* Mantiene la proporción de la imagen */
}

.texto {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  min-height: 50px; /* Ajusta la altura mínima del texto */
}

.contenedordos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  flex-wrap: nowrap;
}

.imagen-item-dos {
  text-align: center;
  width: 22%;
  position: relative;
}

.imagen-item-dos::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-dos img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.contenedordosv2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  flex-wrap: nowrap;
}

.imagen-item-dosv2 {
  text-align: center;
  width: 20%;
  position: relative;
}

.imagen-item-dosv2::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-dosv2 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.contenedortres {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 110px;
  flex-wrap: nowrap;
}

.imagen-item-tres {
  text-align: center;
  width: 25%;
  position: relative;
}

.imagen-item-tres::before {
  content: "";
  display: block;
  padding-top: 100%; /* Esto hace que el contenedor tenga una relación de aspecto de 4:3 */
}

.imagen-item-tres img {
  position: absolute;
  top: 0;
  left: 0;
  width: 115%;
  height: 85%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px; /* Espaciado superior e inferior */
}

</style>
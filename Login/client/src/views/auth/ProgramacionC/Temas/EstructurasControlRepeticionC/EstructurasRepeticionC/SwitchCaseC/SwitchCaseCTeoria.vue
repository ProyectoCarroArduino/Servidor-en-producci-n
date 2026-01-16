<template>
    <div id="layout-general">
      <main class="contenido">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">5.2 Switch case</h1>
        <br>
        <br>
        <h2>5.2.1 Concepto de switch case</h2>
        <br>
        <p class="texto-personalizado">La instrucción Switch case es una estructura de control condicional, la cual permite ejecutar multiples bloques de instrucciones o casos que puede llegar a cumplir una variable, y de este modo, qué acción tomar en cada situación, incluso es posible determinar qué acción llevar a cabo en caso de que no se cumpla ninguna de las condiciones dadas.</p>
        <p><span style="font-weight: bold;">Nota:</span> Esta estructura se suele usar para la creación de menús debido a la facilidad con la que maneja las diferentes situaciones.</p>
        <br>
        <h2>5.2.2 Sintaxis switch case</h2>
        <br>
        <p class="texto-personalizado">La estructura de Switch case está dividida en las siguientes partes:</p>
        <br>
        <ul>
          <li><p class="texto-personalizado"> <strong>Instrucción switch:</strong> Es la palabra reservada que se encarga de evaluar la variable recibida y decidir qué bloque de instrucciones <strong>(case)</strong> se va a ejecutar a continucación.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La instrucción Switch no permite que dos casos <strong>(case)</strong> tengan el mismo valor <strong>(expresión constante)</strong>.</p>
          <br>  
          <li><p class="texto-personalizado"> <strong>Variable de entrada:</strong> Se utilizará como interruptor de la sentencia y esta por lo general es de tipo entero <span style="font-weight: bold">(int)</span>.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La variable de entrada también puede ser de tipo <strong>(char)</strong>, pero lo más común es usar la variable de tipo entera.</p>
          <br>
          <li><p class="texto-personalizado"> <strong>Instrucción case:</strong> También llamado constante o bloque de instrucción, es el que se encarga de cumplir la validación <span style="font-weight: bold">(variable de entrada)</span> si esta coincide con el valor asignado a algún <strong>(case)</strong>.</p></li>
          <br>
          <li><p class="texto-personalizado"> <strong>Expresión constante:</strong> Es el complemento de la instrucción <strong>case</strong>. Esta debe coincidir con el tipo y valor que se le ha asignado a la <strong>variable de entrada</strong>, la cual en la mayoría de casos es de tipo entera <strong>(int)</strong>, es decir, la expresión constante es: 1,2,3...</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La expresión constante también puede ser de tipo <strong>(char)</strong>, pero en ese caso sus valores asignados serían de tipo: a,b,c. Si la expresión constante es de tipo <strong>char</strong> se debe tener en cuenta si el caracter ingresado es en <strong>mayúscula o minúscula</strong>, debido a que la <strong>instrucción switch no valida</strong> este detalle.</p>
          <br>
          <li><p class="texto-personalizado"> <strong>Break:</strong> Es la declaración encargada de detener, salir o terminar la ejecución de algún bloque de instrucción <strong>(case)</strong>.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La declaración break siempre debe de estar escrita al final de un bloque de instrucción <strong>(case)</strong>, en caso de ser una declaración <strong>(default)</strong> es opcional usarlo.</p>
          <br>
          <li><p class="texto-personalizado"> <strong>Default:</strong> Esta declaración es opcional y especifica algún caso o instrucción <strong>(case)</strong>, que se ejecutará si no hay coincidencia entre la <strong>(variable de entrada)</strong> y el valor de los casos.</p></li>
          <p><span style="font-weight: bold;">Nota:</span> La declaración default se suele usar para imprimir un mensaje de error al usuario.</p>
          <br>
        </ul>
        <br>
        <h2>5.2.3 Declaración switch case</h2>
        <br>
        <p class="texto-personalizado">Para declarar una estructura switch case (menú) se debe de tener en cuenta su estructura básica:</p>
        <br>
        <p class="text-center"><span style="font-weight: bold;"> Instrucción switch (variable de entrada) {</span></p>
        <p class="text-center"><span style="font-weight: bold;"> Instrucción case (expresion constante): </span></p>
        <p class="text-center"><span style="font-weight: bold;"> break; </span></p>
        <p class="text-center"><span style="font-weight: bold;"> default: </span></p>
        <p class="text-center"><span style="font-weight: bold;"> } </span></p>
        <br>
        <br>
        <img class="centrada" src="/imagenes/Sintaxis Switch.png?url" alt="">
        <br>
        <br>
        <br>
        <div>
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
<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 1. Conectar fuente de energía al interruptor de 4 pines</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son un interruptor on off 4 pines, cautín tipo lápiz y un multímetro.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>conexion</strong> de la 
        fuente de poder o energía al interruptor de 4 pines, y para la construcción del carro <strong>solo se necesita conectar</strong> la fuente de energía al interruptor de cables una vez, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Interruptor4Pines.png" alt="Interruptor4Pines">
          <p class="texto">Interruptor de 4 pines</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Cautin.png" alt="Cautin">
          <p class="texto">Cautín tipo lápiz</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Multimetro.png" alt="Multimetro">
          <p class="texto">Multímetro</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Antes de empezar se debe conocer qué pines <strong>tiene</strong> el interruptor de 4 pines y qué funciones tienen estos, en este caso <strong>sí se utilizarán todos</strong> los pines en la conexión del interruptor a la fuente de poder. 
        El interruptor de 4 pines cuenta con los siguientes pines:</p>
      <br>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Pines de entrada (C1 y C2):</strong> Son las entradas de corriente para cada polo. Cada uno maneja un circuito independiente.</p></li>
          <li><p class="texto-personalizado"> <strong>Pines de salida (NO1 y NO2):</strong> Son las salidas de corriente para cada polo. En la posición de encendido del interruptor, conectan <strong>C1 con NO1</strong> y <strong>C2 con NO2</strong>, permitiendo el paso de corriente.</p></li>
      </ul>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> En la posición de apagado, el circuito se abre y no hay conexión.</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/PinesInterruptor.png" alt="PinesInterruptor">
      <br>
      <br>
      <p class="texto-personalizado">Usualmente los pines del interruptor <strong>no tienen símbolos</strong> o marcas que indiquen cuál es un pin de <strong>entrada</strong> y cuál es uno de <strong>salida</strong>. Por lo tanto, lo primero que se debe hacer es conocer cuál es un pin de entrada o corriente <strong>(C1 o C2)</strong> 
      y cuál es un pin de salida o normalmente abierto <strong>(NO)</strong>. Para ello, se  necesitará usar un <strong>multímetro</strong> en modo <strong>continuidad</strong> y los respectivos cables del dispositivo también llamados <strong>bananas</strong>. Para encontrar qué pines son de entrada y cuáles de salida se debe de hacer lo siguiente:</p>
      <br>
      <br>
      <ul>
          <li><p class="texto-personalizado">Con el interruptor en una posición <strong>(ON o OFF)</strong>, se debe de tocar con las puntas del multímetro dos pines al azar. Si el multímetro emite un pitido o muestra baja resistencia <strong>(cerca de 0 Ω)</strong>, esos dos pines están conectados.</p></li>
      </ul>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Si no hay continuidad, se debe probar con otra combinación de pines.</p>
      <ul> 
          <li><p class="texto-personalizado">Después se debe cambiar la posición del interruptor <strong>(ON o OFF)</strong>  y se vuelve a medir los mismos pines. Si dejan de estar conectados, entonces uno es la entrada <strong>(C)</strong> y el otro es la salida <strong>(NO o NC)</strong>.</p></li>
      </ul>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Lo mismo se hace con los otros dos pines para identificar su función de entrada o salida.</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/ModoContinuidad.png" alt="ModoContinuidad">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/ReaccionContinuidad.png" alt="ReaccionContinuidad">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p class="texto-personalizado">Aunque usar el multímetro es necesario para saber qué pines <strong>van conectados</strong> a la fuente de poder y qué pines van a ir <strong>conectados a los componentes</strong> más adelante, existe una forma de determinar esta asignación. Sin embargo, esta forma <strong>no es recomendada</strong> debido a que no se puede generalizar dicho método,
       es decir, <strong>no en todos</strong> los interruptores de cuatro pines se aplica este método. Dicho método consiste en que la mayoría de los interruptores de cuatro pines o de <strong>doble vía</strong> tienen una estructura básica de: </p>
      <br>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>pin 1 (entrada o C1) -> pin 3 (salida o NO1)</strong></p></li>
          <li><p class="texto-personalizado"> <strong>pin 2 (entrada o C2) -> pin 4 (salida o NO2)</strong></p></li>
      </ul>
      <br>
      <br>
      <p class="texto-personalizado">Ahora bien para determinar este orden basta con tomar el interruptor y <strong>fijarse</strong> en que el botón tiene <strong>dos símbolos</strong>, el primero es una línea vertical <strong>(encendido)</strong> y el segundo es un círculo <strong>(apagado)</strong>. 
      En la mayoría de interruptores de este tipo el pin 1 o de entrada <strong>(C1)</strong> suele estar debajo del símbolo en forma de círculo <strong>(apagado)</strong> a mano izquierda, así mismo, el pin 3 o de salida <strong>(NO1)</strong> está en la segunda fila de pines a mano izquierda, es decir, debajo del pin 1.</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/EncendidoApagado.png" alt="EncendidoApagado">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/EntradasSalidas.png" alt="EntradasSalidas">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Para los otros dos pines es el mismo orden solo que están a mano derecha siendo el pin 2 <strong>(C2)</strong> el que está a mano derecha del pin 1 y el pin 4 <strong>(NO2)</strong> el que se encuentra a mano derecha del pin 4.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> En caso de que la asignación de pines con el método <strong>no sea la correcta</strong> se deberá usar el procedimiento del <strong>multímetro</strong>. Se debe recalcar que el método o técnica de determinación de pines <strong>no es general</strong>
       para todos los interruptores de 4 pines, por eso lo más recomendable es usar el multímetro.</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/PinesCyNO.png" alt="PinesCyNO">
      <br>
      <br>
      <p class="texto-personalizado">Para finalizar, se hará la conexión de la fuente de poder al interruptor de 4 pines. En este proceso no se necesita preparar ningún cable ya que estos ya se han preparado en la <strong>Fase de conectar fuente de poder al circuito: Paso 2. Preparar la bornera tipo hembra para conexión.</strong>
       En el paso anteriormente mencionado se hizo la conexión de dos cables (rojo, amarillo o naranja) a la bornera hembra, pero no se hizo la conexión de esos cables a ningún otro componente, ya que se mencionó que más adelante se haría la conexión de alimentación del circuito.</p>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/ConectarInterruptor.png" alt="ConectarInterruptor">
      <br>
      <br>
      <p class="texto-personalizado">Una vez verificado esto se procede a conectar el cable al interruptor, el proceso que se debe de seguir es tomar los cables pequeños enrollados y envolverlos alrededor del pin 1 o de entrada <strong>(C1)</strong>, y por último, se aplicará soldadura en donde termina la envoltura de los cables.</p>
      <br>
      <br>
      <div class="contenedordosv2">
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/SoldarCables.png" alt="SoldarCables">
        </div>
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/CablesSoldados.png" alt="CablesSoldados">
        </div>
      </div>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Para la conexión de los dos cables anteriormente mencionados se debe tener en cuenta que el pin del cable jumper <strong>se debió de haber cortado</strong>, luego la cobertura del extremo arrancada y por último, sus cables internos enrollados.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Asegurarse de que la soldadura aplicada sea resistente y esté bien sujeta al pin.</p>
      <br>
      <br>
      <br>
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/8qKIQV-42Ug?si=njIX1aBliUnUQ0p7" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
      </div>
      <br>
      <br>
      <div>
        <button class="bt-validate" @click="finish">Avanzar</button>
      </div>
    </main>
    <aside class="menu-lateral">
      <div>
        <MenuCarro />
      </div>
    </aside>
</div>
</template>

<script>
import router from '@/router';
import MenuCarro from "@/components/MenuCarro.vue";
import NavBar from '@/components/NavBar.vue';
import Moto from '@/assets/imagenesCarro/Moto.png';
export default {
    components: {
        NavBar,
        MenuCarro
    },

    data() {
        return {
            Moto // Agregar la imagen a `data()`
        };
    },

    methods: {
      finish() {
      router.push('/DescomposicionConectarFuenteEnergiaInterruptor4Pines').then(() => {
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
    width: 22%;
}

.centrada2 {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 45%;
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
  height: 140%;
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
  height: 100%;
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
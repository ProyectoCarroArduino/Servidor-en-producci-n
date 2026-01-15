<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 4. Desplazar circuito al chasis parte 2</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son algunos de los componentes que se han ido preparando para el montaje del circuito. 
        En este paso se utilizarán los siguientes componentes: La placa Arduino UNO, el módulo bluetooth HC-06 y la silicona para poder pegar los componentes.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la segunda parte del <strong>desplazamiento</strong> del 
        circuito al chasis, y para la construcción del carro <strong>solo se necesita desplazar o ubicar</strong> los componentes mencionados una vez, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/ArduinoUNO.png" alt="ArduinoUNO">
          <p class="texto">Placa Arduino UNO</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/ModuloHC06.png" alt="ModuloHC06">
          <p class="texto">Módulo bluetooth HC-06</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/Silicona.png" alt="Silicona">
          <p class="texto">Silicona</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Antes de empezar lo que se debe hacer es tener en cuenta que al momento de desplazar el circuito al chasis, <strong>ninguno</strong> de los componentes principales (Fuente de poder, módulo L298N y placa Arduino UNO) 
        preparados anteriormente deben estar <strong>conectados entre sí</strong>, esto se hace para evitar que los cables sufran algún daño o algún pin se parta y deje <strong>obsoleto</strong> el componente.</p>
      <br>
      <p class="texto-personalizado">Como en el anterior desplazamiento de la parte 1 los espacios de <strong>atrás y el medio ya han sido ocupados</strong> y se <strong>ha pegado</strong> un soporte que abarca gran espacio del chasis, 
      en este desplazamiento solo se va a usar la parte <strong>delantera del chasis</strong>, es decir, que tanto la placa Arduino UNO como el módulo bluetooth HC-06 deben estar <strong>ubicados o pegados en el mismo lugar</strong>.</p>
      <br>
      <h4>El orden será el siguiente en la parte delantera:</h4>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Placa Arduino UNO             → Parte delantera</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Módulo bluetooth HC-06     → Parte delantera superior</strong></p></li>
      </ul>
      <br>
      <p class="texto-personalizado">Lo primero que se necesita hacer es <strong>ubicar</strong> la placa Arduino UNO en la parte <strong>delantera del chasis</strong>, en donde, en pasos anteriores <strong>se ha pegado</strong> el soporte, es decir, 
      <strong>delante del módulo L298N o puente H</strong>, esto para poder facilitar la conexión del <strong>pin GND</strong> del módulo L298N al <strong>pin GND</strong> placa Arduino UNO.</p>
      <br>
      <p class="texto-personalizado">La ubicación de la placa <strong>no es solo</strong> pegarla en la parte delantera del soporte, también es importante <strong>ubicar el puerto o conector de transferencia de datos</strong> con el que cuenta la placa a un <strong>lado del chasis</strong>, 
        en este caso se ha escogido el lado derecho, esto se hace con el fin de que más adelante cuando se <strong>vaya a ingresar</strong> el código de movimiento y control a la placa Arduino UNO el carro se pueda <strong>mantener</strong> en una posición en la que no se vaya a caer o se dañe algún componente interno. </p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/UbicarArduinoUNO.png" alt="UbicarArduinoUNO">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/UbicacionArduinoUNO.png" alt="UbicacionArduinoUNO">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <h3>Placa Arduino UNO ubicada (pegada):</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesDesplazarCircuitoChasisParte2/ArduinoUNOUbicado.png" alt="ArduinoUNOUbicado">
      <br>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Es importante recordar que la placa Arduino UNO <strong>no debe</strong> estar conectada al módulo L298N o puente H.</p>
      <br>
      <br>
      <p class="texto-personalizado">Una vez se ha posicionado el Arduino UNO será el turno de <strong>posicionar</strong> el módulo bluetooth HC-06, el cual <strong>está conectado y debe estar conectado</strong> a la placa Arduino UNO, 
        de hecho es el <strong>único</strong> de los componentes que debe estar conectado a la placa en el momento en el que se hace el desplazamiento.</p>
      <br>
      <p class="texto-personalizado">El posicionamiento del módulo bluetooth HC-06 es el más simple, pero a la vez el más complejo, esto se debe a que este <strong>estará ubicado</strong> en un lado en el que <strong>no estorbará o molestará</strong>  
      al conector de transferencia de datos de la placa Arduino UNO, pero <strong>tampoco puede estar alejado</strong> de la placa, por lo tanto su posición será en <strong>una esquina en la parte superior izquierda</strong> del chasis, es decir, 
      debe estar <strong>pegado encima</strong> de la placa Arduino UNO.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Cerciorarse de que todos los pines conectados de la placa Arduino UNO al módulo bluetooth HC-06 <strong>estén conectados correctamente</strong> y ninguno haya <strong>sufrido algún daño</strong> en el desplazamiento.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/UbicarModuloHC06.png" alt="UbicarModuloHC06">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte2/UbicacionModuloHC06.png" alt="UbicacionModuloHC06">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3>Módulo bluetooth HC06 ubicado (pegado):</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesDesplazarCircuitoChasisParte2/ModuloHC06Ubicado.png" alt="ModuloHC06Ubicado">
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
        src="https://www.youtube.com/embed/nR16UVJ0jSw?si=8M-qKZa8sDOQUIU5" 
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
      router.push('/DescomposicionDesplazarCircuitoChasisParte2').then(() => {
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
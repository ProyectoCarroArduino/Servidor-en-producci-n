<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 2. Preparar la bornera tipo hembra para conexión</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son cables jumper macho hembra, una bornera tipo hembra, pinzas o pelacables y un destornillador pequeño tipo estrella.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>preparación</strong> de una
        bornera de tipo hembra, y para la construcción del carro <strong>solo se necesita preparar</strong> una bornera tipo hembra, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong>repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/CablesJumper.png" alt="CablesJumper">
          <p class="texto">Cables jumper tipo macho hembra</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/BorneraHembra.png" alt="BorneraHembra">
          <p class="texto">Bornera tipo hembra</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/AlicatesPelacables.png" alt="AlicatesPelacables">
          <p class="texto">Alicates/pelacables</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/DestornilladorPequeno.png" alt="DestornilladorPequeno">
          <p class="texto">Destornillador pequeño</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Lo primero que se va a hacer es <strong>tomar cuatro cables</strong> jumper macho hembra, dos para cada terminal.</p>
      <br>
      <img class="centrada" src="@/assets/ImagenesPrepararBorneraHembraConexion/CuatroCables.png" alt="CuatroCables">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El color de los cables se sugiere que sean <strong>rojo, naranja o amarillo (positivo)</strong> y <strong>negro, gris o azul oscuro (negativo)</strong>, 
      la asignación de colores a los cables es para poder conocer qué cables van al <strong>pin de alimentación</strong> y qué cables van al <strong>pin GND</strong>.</p>
      <br>
      <p class="texto-personalizado">A continuación se va a <strong>cortar ambos extremos</strong> de un cable, con mucho cuidado se toman unos alicates o pelacables y se corta las partes <strong>donde se encuentra los pines</strong> del cable, 
        posteriormente se procede a arrancar o quitar la cobertura de los extremos de ese cable para una vez más poder enrollar los cables pequeños de cobre. Adicional se <strong>puede soldar</strong> cada par de cables del <strong>mismo color</strong> 
        para que cuando se vayan a conectar a la bornera macho ningún cable pequeño vaya a <strong>quedar fuera</strong> del pin de conexión.</p>
      <br>
      <br>
      <div class="contenedortres">
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/CortarPines.png" alt="CortarPines">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ConectarCablesArduinoUNO.png" alt="ConectarCablesArduinoUNO">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarModuloBluetoothHC06/ArduinoUNOConectado.png" alt="ArduinoUNOConectado">
        </div>
      </div>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El mismo proceso de cortar los pines en ambos extremos de un cable jumper se va a <strong>repetir para los otros tres cables</strong>, a este proceso se le llama preparación de las conexiones de la bornera hembra.</p>
      <br>
      <p class="texto-personalizado">Una vez ya se han preparado los cuatro cables jumper macho hembra que se necesitan, se procede a conectarlos  a los terminales de la bornera hembra, la cual tiene dos terminales una <strong>positiva</strong> y otra <strong>negativa</strong>. 
        En la parte superior se pueden ver los símbolos que representan las dos terminales, los cables <strong>rojos</strong> deberan ir en donde se encuentra el símbolo <strong>(+)</strong> y los cables <strong>negros o azul oscuro</strong> deberan ir en donde se encuentra el símbolo <strong>(-)</strong>.</p>
      <br>
      <img class="centrada" src="@/assets/ImagenesPrepararBorneraHembraConexion/PinesBorneraHembra.png" alt="PinesBorneraHembra">
      <br>
      <p class="texto-personalizado">Nuevamente se va a volver a usar un destornillador pequeño tipo estrella para aflojar los pines (terminales) y se procederá a conectar los cables enrollados de la siguiente manera:</p>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Dos cables (rojo, amarillo o naranja) conectados al pin (terminal) positivo</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Dos cables (negro, gris o azul oscuro) conectados al pin (terminal) negativo</strong></p></li>
      </ul>
      <br>
      <p class="texto-personalizado">Para finalizar se volverá a ajustar los terminales con el destornillador pequeño y se <strong>revisará</strong> si los cables han quedado ajustados a los pines.</p>
      <br>
      <h2>Pin (terminal) positivo:</h2>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/ConectarTerminalPositivo.png" alt="ConectarTerminalPositivo">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/TerminalPositivoConectado.png" alt="TerminalPositivoConectado">
        </div>
      </div>
      <br>
      <h2>Pin (terminal) negativo:</h2>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/ConectarTerminalNegativo.png" alt="ConectarTerminalNegativo">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararBorneraHembraConexion/TerminalNegativoConectado.png" alt="TerminalNegativoConectado">
        </div>
      </div>
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
        src="https://www.youtube.com/embed/JoCrzMQhATI?si=eht6Bb1gGR13Bd_8" 
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
      router.push('/DescomposicionPrepararBorneraHembraConexion').then(() => {
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
  height: 100%;
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
  width: 155%;
  height: 105%;
  object-fit: cover; /* Cubre el contenedor sin distorsionar la imagen */
}

.contenedortres {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
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
  height: 80%;
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
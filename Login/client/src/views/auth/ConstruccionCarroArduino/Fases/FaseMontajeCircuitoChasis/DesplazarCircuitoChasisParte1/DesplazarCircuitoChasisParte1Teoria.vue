<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 2. Desplazar circuito al chasis parte 1</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son algunos de los componentes que se han ido preparando para el montaje del circuito. En este paso se utilizarán los siguientes componentes: el portapilas modelo 18650, el módulo L298N o puente H,  
        las borneras macho y hembra y silicona para poder pegar los componentes. </p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la primera parte del <strong>desplazamiento</strong> del 
        circuito al chasis, y para la construcción del carro <strong>solo se necesita desplazar o ubicar</strong> los componentes mencionados una vez, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/PortapilasModelo18650.png" alt="PortapilasModelo18650">
          <p class="texto">Portapilas modelo 18650</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/ModuloL298N.png" alt="ModuloL298N">
          <p class="texto">Módulo L298N (puente H)</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/BorneraMacho.png" alt="BorneraMacho">
          <p class="texto">Bornera tipo macho</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/BorneraHembra.png" alt="BorneraHembra">
          <p class="texto">Bornera tipo hembra</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/Silicona.png" alt="Silicona">
          <p class="texto">silicona</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Antes de empezar lo que se debe hacer es tener en cuenta que al momento de desplazar el circuito al chasis <strong>ninguno</strong> de los componentes principales <strong>(Fuente de poder, módulo L298N y placa Arduino UNO)</strong> 
      preparados anteriormente deben estar <strong>conectados entre sí</strong>, esto se hace para evitar que los cables sufran algún daño o algún pin se parta y deje <strong>obsoleto</strong> el componente. </p>
      <br>
      <p class="texto-personalizado">Otro aspecto importante es que el desplazamiento del circuito se va a hacer de <strong>atrás hacia el medio</strong>, es decir, desde la fuente de poder o portapilas modelo 18650 al módulo L298N (puente H), 
        el cual es el último componente que se ubica en esta primera parte.</p>
      <br>
      <h4>El orden será el siguiente de atrás hacia el medio:</h4>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Portapilas modelo 18650 y bornera tipo macho        → Parte de atrás</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Módulo L298N o puente H y bornera tipo hembra       → Parte media</strong></p></li>
      </ul>
      <br>
      <p class="texto-personalizado">Lo primero que se necesita hacer es ubicar o <strong>desplazar</strong> la fuente de poder a la <strong>parte trasera</strong> del chasis del carro, con mucho cuidado se toma el portapilas modelo 18650 conectado junto a la bornera tipo macho y 
        se posiciona o pega con la ayuda de la silicona líquida de modo que el <strong>conector jack</strong> de la bornera quede ubicada hacia la parte delantera del chasis.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Si es difícil <strong>ubicar o pegar</strong> el portapilas modelo 18650 <strong>sobre las tuercas y tornillos</strong> de los soportes en el chasis, se <strong>puede usar</strong> 
      alguna base de <strong>cartón o plástico</strong> que se pegue encima de esos tornillos, para posteriormente <strong>pegar</strong> encima de esa base el portapilas.</p>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/UbicarFuentePoder.png" alt="UbicarFuentePoder">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/UbicacionFuentePoder.png" alt="UbicacionFuentePoder">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <h3>Fuente de poder ubicada (pegada):</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesDesplazarCircuitoChasisParte1/FuentePoderUbicada.png" alt="FuentePoderUbicada">
      <br>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Es importante recordar que la parte delantera del chasis es la que tiene una forma de <strong>medio óvalo</strong>. </p>
      <br>
      <br>
      <p class="texto-personalizado">Una vez se ha posicionado el portapilas, lo siguiente será <strong>ubicar</strong> el módulo L298N o puente H, el cual tiene <strong>conectado a su pin GND</strong>
       los dos cables de color negro que pertenecen al <strong>pin GND</strong> de la bornera tipo hembra. </p>
      <br>
      <p class="texto-personalizado">Para ello, lo primero que se hará es <strong>pegar</strong> con la silicona líquida <strong>un soporte en cartón o plástico</strong> en donde se pueda pegar el módulo L298N, 
        pero el soporte <strong>se tiene que ubicar</strong> de modo que <strong>no obstruya</strong> los cables de los motorreductores que ya han pasado por las aberturas en los lados, los cuales más adelante se usarán para conectar al módulo L298N o puente H. 
        Adicional a esto, este también <strong>debe estar posicionado delante</strong> del portapilas y la bornera tipo macho.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/Soporte.png" alt="Soporte">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/UbicacionSoporte.png" alt="UbicacionSoporte">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3>Soporte ubicado (pegado):</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesDesplazarCircuitoChasisParte1/SoporteUbicado.png" alt="SoporteUbicado">
      <br>
      <br>
      <br>
      <p class="texto-personalizado">Una vez se ha pegado el soporte, lo último que se hará es ubicar los dos componentes en el chasis, de estos dos el que debe estar pegado en el soporte es el módulo L298N o puente H, es decir, <strong>delante</strong> de la bornera tipo macho, 
        pero en este caso es la bornera tipo hembra la que <strong>va a estar</strong> primero, eso quiere decir que la bornera tipo hembra <strong>deberá hacer conexión</strong> con el <strong>conector jack</strong> de la bornera tipo macho, 
        esto es debido a que más adelante las dos borneras <strong>alimentarán el circuito</strong>.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> <strong>No conectar</strong> las dos borneras, ya que esto se hará más adelante, pero se <strong>debe acomodar</strong> las dos borneras de tal forma que se puedan conectar ambas sin ningún inconveniente.</p>
      <br>
      <div class="contenedordosv2">
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/UbicarModuloL298N.png" alt="UbicarModuloL298N">
        </div>
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesDesplazarCircuitoChasisParte1/UbicacionModuloL298N.png" alt="UbicacionModuloL298N">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3>Modulo L298N (puente H) ubicado (pegado):</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesDesplazarCircuitoChasisParte1/ModuloL298NUbicado.png" alt="ModuloL298NUbicado">
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Es importante pegar el módulo L298N de forma correcta, es decir, con los pines de salida de energía para los motores <strong>(OUT) hacia los lados</strong>, 
      de modo que los cables que pasen por las hendiduras puedan ser <strong>conectados</strong> al módulo L298N o puente H.</p>
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
        src="https://www.youtube.com/embed/F8eaMd502AU?si=yBG-FA6W_Qnor_f9" 
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
      router.push('/DescomposicionDesplazarCircuitoChasisParte1').then(() => {
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
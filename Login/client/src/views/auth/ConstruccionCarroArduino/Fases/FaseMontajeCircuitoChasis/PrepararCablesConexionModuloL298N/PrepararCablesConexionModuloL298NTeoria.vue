<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 1. Preparar cables de los motorreductores para la conexión al módulo L298N (puente H)</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son el chasis, un cautín tipo lápiz, un pedazo de estaño y pelacables.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>preparación</strong> de los
        los cables de los motorreductores para la conexión de un módulo L298N (puente H), y para la construcción del carro <strong>solo se necesita preparar</strong> los cables de los motorreductores una vez, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/Chasis.png" alt="Chasis">
          <p class="texto">Chasis</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/CautinLapiz.png" alt="CautinLapiz">
          <p class="texto">Cautín tipo lápiz</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/Estanio.png" alt="Estanio">
          <p class="texto">Estaño</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/Pelacables.png" alt="PinzasPelacables">
          <p class="texto">Pinzas/Pelacables</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Lo primero que se hace es <strong>tomar los dos cables</strong> de teléfono que hay en cada motorreductor. Posteriormente, se debe hacer que todos los cables conectados a los motorreductores <strong>pasen</strong> por una rendija del chasis, 
        para que más adelante se puedan conectar al <strong>módulo L298N o puente H</strong>.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/CablesMotorreductores.png" alt="CablesMotorreductores">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/AberturaChasis.png" alt="AberturaChasis">
        </div>
      </div>
      <br>
      <br>
      <p class="texto-personalizado">Después de haber <strong>acomodado</strong> los cables se les va a quitar su cobertura con ayuda del pelacables y luego se va a enrollar los cables pequeños de cobre que haya dentro, 
      esto se hace para <strong>los cuatro motorreductores</strong> que se han ajustado al chasis.</p>
      <br>
      <div class="contenedortres">
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/QuitarCobertura.png" alt="QuitarCobertura">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/EnrrollarCables.png" alt="EnrrollarCables">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/CablesEnrrollados.png" alt="CablesEnrrollados">
        </div>
      </div>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> <strong>No hacer</strong> la parte de arrancar las coberturas de los cables antes de que los cables pasen por la rendija o espacio del chasis, 
      ya que esto <strong>podría dañar</strong> los pequeños cables y dejar el cable <strong>inservible</strong> para la conexión.</p>
      <br>
      <p class="texto-personalizado">Una vez se han <strong>preparado</strong> los cables de todos los motorreductores, se van a juntar los cables <strong>positivos y negativos</strong> de los dos motorreductores del lado derecho, es decir, 
        se enrrollan como uno solo los cables pequeños de los dos cables <strong>rojos</strong> de los <strong>dos motorreductores de la derecha</strong> y los dos cables <strong>negros</strong> de los <strong>dos motorredcutores de la derecha también</strong>.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El proceso se <strong>repite</strong> para los motorreductores de la izquierda también.</p>
      <br>
      <h3>Cables de los motorreductores del lado derecho:</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesPrepararCablesConexionModuloL298N/LadoDerecho.png" alt="LadoDerecho">
      <br>
      <br>
      <h3>Cables de los motorreductores del lado izquierdo:</h3>
      <br>
      <br>
      <img class="centrada" src="@/assets/ImagenesPrepararCablesConexionModuloL298N/LadoIzquierdo.png" alt="LadoIzquierdo">
      <br>
      <br>
      <p class="texto-personalizado">Por último, lo que se hará es tomar el cautín tipo lápiz en una mano y un pedazo de estaño en la otra, y se <strong>aplicará soldadura</strong> en la unión de los cables que se han enrollado, 
        la soldadura debe de ser <strong>resistente</strong>, de lo contrario no servirá.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/SoldarCables.png" alt="SoldarCables">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesPrepararCablesConexionModuloL298N/CablesSoldados.png" alt="CablesSoldados">
        </div>
      </div>
      <br>
      <br>
      <br>
      <h3>Esquema de la conexión de los cables de los motorredcutores:</h3>
      <br>
      <br>
      <img class="centrada2" src="@/assets/ImagenesPrepararCablesConexionModuloL298N/Simulacion1.png" alt="Simulacion1">
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
        src="https://www.youtube.com/embed/349uzRFLOAs?si=j491e7LbsfoUmLth" 
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
      router.push('/DescomposicionConectarBorneraHembraPuenteH').then(() => {
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
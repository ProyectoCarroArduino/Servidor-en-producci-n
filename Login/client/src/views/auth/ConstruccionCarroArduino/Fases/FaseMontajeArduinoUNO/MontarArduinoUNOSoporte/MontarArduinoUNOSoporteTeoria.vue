<template>
  <div>
  <div class="layout-general"> 
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 1. Montar Arduino UNO en el soporte </h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales que se usarán son el soporte para placa Arduino y el Arduino UNO.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden al <strong>montaje</strong> de una
        placa Arduino UNO a su soporte, y para la construcción del carro <strong>solo se necesita hacer el montaje</strong> de una sola placa Arduino UNO, es decir, que 
        el paso a paso que se va a explicar a continuación <strong>se debe</strong> repetir solo una vez.</p> 
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarArduinoUNOSoporte/SoporteArduinoUNO.png" alt="SoporteArduinoUNO">
          <p class="texto">Soporte para placa Arduino UNO</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesMontarArduinoUNOSoporte/ArduinoUNO.png" alt="ArduinoUNO">
          <p class="texto">Placa Arduino UNO</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">El proceso de ajustar o montar la placa Arduino al soporte es sencillo, sólo se <strong>debe ubicar</strong> los agujeros o espacios donde la placa <strong>debe de encajar</strong> con el soporte, 
        y por último, <strong>aplicar algo de fuerza</strong> para que la placa quede bien ajustada al soporte.</p>
      <br>
      <div class="contenedortres">         
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarArduinoUNOSoporte/AgujerosSoporte.png" alt="AgujerosSoporte">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarArduinoUNOSoporte/AjustarArduinoUNO.png" alt="AjustarArduinoUNO">
        </div>
        <div class="imagen-item-tres">
          <img src="@/assets/ImagenesMontarArduinoUNOSoporte/ArduinoUNOAjustado.png" alt="ArduinoUNOAjustado">
        </div>
      </div>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Tener cuidado de <strong>no aplicar</strong> demasiada fuerza para que la placa Arduino no se parta o agriete.</p> 
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
        src="https://www.youtube.com/embed/Zc5CRSSZVr0?si=XCNZ3105CJizdccH" 
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
</div>
</template>

<script>
import router from '@/router';
import MenuCarro from "@/components/MenuCarro.vue";
import NavBar from '@/components/NavBar.vue';
import LayoutMenu from '@/components/LayoutConMenu.vue';
import Moto from '@/assets/imagenesCarro/Moto.png';
export default {
    components: {
        NavBar,
        MenuCarro,
        LayoutMenu,
    },

    data() {
        return {
            Moto // Agregar la imagen a `data()`
        };
    },

    methods: {
    finish() {
      router.push('/DescomposicionMontarArduinoUNOSoporte').then(() => {
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
  align-items: flex-start;
  width: 100%;
  margin-top: 0px;
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
  top: 20px;
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
  justify-content: center; /* Se asegura que haya espacio entre las imágenes */
  align-items: flex-start; /* Alineación de las imágenes desde la parte superior */
  gap: 100px; /* Espacio entre las imágenes */
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
  height: 90%;
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
  width: 95%;
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
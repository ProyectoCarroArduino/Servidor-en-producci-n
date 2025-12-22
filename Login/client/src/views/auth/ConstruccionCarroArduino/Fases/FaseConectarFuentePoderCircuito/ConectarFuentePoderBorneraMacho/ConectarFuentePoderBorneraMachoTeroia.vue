<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 1. Conectar la fuente de poder a la bornera macho</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son un portapilas X3 modelo 18650, tres pilas de litio o 3,7V, una bornera tipo macho, pelacables o alicates y un destornillador pequeño tipo estrella.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>conexión</strong> de la
        fuente de poder a una bornera de tipo macho, y para la construcción del carro se <strong>necesitan conectar</strong> solo una fuente de poder a una bornera tipo macho, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez. </p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/PortapilasModelo18650.png" alt="PortapilasModelo18650">
          <p class="texto">Portapilas X3 modelo 18650</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/PilasLitio.png" alt="PilasLitio">
          <p class="texto">Pilas de litio</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/BorneraMacho.png" alt="BorneraMacho">
          <p class="texto">Bornera tipo macho</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/AlicatesPelacables.png" alt="AlicatesPelacables">
          <p class="texto">Alicates/pelacables</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/DestornilladorPequeno.png" alt="DestornilladorPequeno">
          <p class="texto">Destornillador</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Antes de empezar con el paso <strong>se debe</strong> asegurar de que el portapilas ya tiene conectadas las pilas o baterías de 3,7V, en este caso se están utilizando <strong>tres</strong>, 
      las cuales van a proveer el voltaje y la corriente necesaria para el funcionamiento del circuito.</p>
      <br>
      <p class="texto-personalizado">Lo primero que se hace es tomar el portapilas y hacer <strong>lo mismo</strong> que se hizo con los cables que fueron conectados a los motorreductores, es decir, arrancar la cobertura de los dos cables teniendo cuidado de <strong>no dañar</strong> los cables internos. 
        En este caso el portapilas <strong>ya tiene</strong> la cobertura de los dos cables arrancada y posteriormente se han enrollado los pequeños cables de cobre.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Tener en cuenta que algunos portapilas <strong>vienen</strong> con estos cables ya enrollados cuando se arranca la cobertura, otros ya han sido enrollados y su cobertura arrancada debido a <strong>previo uso</strong> y, 
      otros simplemente <strong>vienen de fábrica</strong>, a estos últimos se les tiene que quitar la cobertura y enrrollar los cables pequeños del cable rojo y negro para poder conectar a la bornera tipo macho.</p>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/QuitarCables.png" alt="QuitarCables">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/CablesQuitados.png" alt="CablesQuitados">
        </div>
      </div>
      <br>
      <br>
      <br>
      <p class="texto-personalizado">Luego se procederá a preparar los cables para la conexión a la bornera de tipo macho, para poder hacer esto se van a <strong>enrollar los cables internos</strong> de los dos cables rojo y negro. 
        Adicional <strong>se puede soldar</strong> los cables enrollados para que cuando se vaya a conectar a la bornera macho ningún cable pequeño vaya a quedar fuera del pin de conexión.</p>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarFuentePoderBorneraMacho/CablesEnrrolladosSoldados.png" alt="CablesEnrrolladosSoldados">
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> <strong>No comprar</strong> portapilas que tenga el conector a la placa Arduino directamente, ya que estos <strong>no vienen</strong> separados por cable rojo y negro, 
      lo que significaría que el proceso de preparación para la conexión sería más complejo.</p>
      <br>
      <p class="texto-personalizado">Una vez se tienen preparados los cables del portapilas se procede a hacer la conexión a la bornera de tipo macho, la cual es la que <strong>tiene un conector</strong> en su centro. La bornera tiene <strong>dos terminales</strong> una positiva y otra negativa. 
        En la parte superior se pueden ver los símbolos que representan las dos terminales, el cable rojo <strong>deberá ir</strong> a donde se encuentra el símbolo <strong>(+)</strong> y el cable negro <strong>deberá ir</strong> a donde se encuentra el símbolo <strong>(-)</strong>. </p>
      <br>
      <img class="centrada" src="@/assets/ImagenesConectarFuentePoderBorneraMacho/PinesBorneraMacho.png" alt="PinesBorneraMacho">
      <br>
      <br>
      <p class="texto-personalizado">Por último se procede a hacer <strong>la conexión</strong> de los cables a la bornera tipo macho, para ello se va a usar un destornillador pequeño tipo estrella para aflojar los terminales y <strong>poder introducir</strong> los cables dentro, 
        cuando ya se hayan introducido los cables se vuelve a usar el destornillador pequeño para <strong>ajustar el puerto</strong>, así evitando que en el futuro funcione mal.</p>
      <br>
      <div class="contenedordosv2">
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/ConectarBorneraMacho.png" alt="ConectarBorneraMacho">
        </div>
        <div class="imagen-item-dosv2">
          <img src="@/assets/ImagenesConectarFuentePoderBorneraMacho/BorneraMachoConectada.png" alt="BorneraMachoConectada">
        </div>
      </div>
      <br>
      <br>
      <h2>Video del paso:</h2>
      <br>
      <br>
      <div class="video-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/mfY1akMiDTk?si=GyV21fGPdFElTbJX" 
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
      router.push('/DescomposicionConectarFuentePoderBorneraMacho').then(() => {
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
  width: 90%;
  height: 110%;
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

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px; /* Espaciado superior e inferior */
}

</style>
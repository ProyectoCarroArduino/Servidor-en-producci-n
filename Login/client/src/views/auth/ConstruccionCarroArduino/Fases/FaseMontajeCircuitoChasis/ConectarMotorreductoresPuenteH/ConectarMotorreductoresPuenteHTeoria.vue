<template>
  <div id="layout-general">
    <main class="contenido">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 3. Conectar los motorreductores al módulo L298N (puente H)</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son módulo L298N o puente H y un destornillador pequeño.</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe tener en cuenta que los materiales mencionados anteriormente corresponden a la <strong>conexión</strong> de los 
        motorreductores al módulo L298N (puente H), y para la construcción del carro <strong>solo se necesita conectar</strong> los motorreductores una vez, es decir, el paso a paso que se va a explicar a continuación
        <strong>se debe</strong> repetir solo una vez.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarMotorreductoresPuenteH/ModuloL298N.png" alt="PModuloL298N">
          <p class="texto">Módulo L298N (puente H)</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/ImagenesConectarMotorreductoresPuenteH/DestornilladorPequenio.png" alt="DestornilladorPequenio">
          <p class="texto">Destornillador pequeño</p>
        </div>
      </div>
      <br>
      <p class="texto-personalizado">Lo primero que se necesita es conectar los motorreductores al <strong>módulo L298N</strong>, para ello se <strong>usarán</strong> los pines que permiten controlar los motores en el siguiente orden: </p>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Motor 1 (derecho superior) → Out1 y Out2</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Motor 2 (derecho inferior) → Out1 y Out2 (en paralelo con Motor 1)</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Motor 3 (izquierdo superior) → Out3 y Out4</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Motor 4 (izquierdo inferior) → Out3 y Out4 (en paralelo con Motor 3)</strong></p></li>
      </ul>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe definir qué pines son los que van a tener conectados los cables de color <strong>rojo</strong> soldados y qué pines van a tener conectados los cables de color <strong>negro</strong> soldados, 
      para poder conocer esto se debe de tener un conocimiento común acerca de qué pines tiene el <strong>módulo L298N</strong> y cuáles son sus usos o para qué se utilizan, Sin embargo, 
      esto ya se ha mencionado antes en el paso: <strong>3. Montar puente H y conectarlo al Arduino UNO</strong>. Por lo tanto, no se hará énfasis en esta teoría.</p>
      <br>
      <p class="texto-personalizado">La asignación de pines para los cables soldados de color rojo y negro en el <strong>módulo L298N o puente H</strong> es:</p>
      <br>
      <ul>
          <li><p class="texto-personalizado"> <strong>Motores parte derecha:</strong></p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>Out1 (positivo) → cables rojos</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Out2 (negativo) → cables negros o azul oscuro</strong></p></li>
            </ul>
          <li><p class="texto-personalizado"> <strong>Motores parte izquierda: </strong></p></li>
            <ul>
                <li><p class="texto-personalizado"> <strong>Out3 (positivo) → cables rojos</strong></p></li>
                <li><p class="texto-personalizado"> <strong>Out4 (negativo) → cables negros o azul oscuro</strong></p></li>
            </ul>
      </ul>
      <br>
      <p class="texto-personalizado">Para poder conectar los cables en <strong>cada pin</strong> lo que se tiene que hacer es usar el destornillador pequeño de tipo estrella y <strong>aflojar</strong> los pequeños tornillos que tienen ajustado el pin, 
        para de esta forma poder <strong>conectar o introducir el cable</strong> que se ha soldado y volver a atornillar el pin para que el <strong>módulo L298N o puente H</strong> no vaya a fallar en el proceso de funcionamiento. </p>
      <br>
      <br>
      <h3>Motores parte derecha:</h3>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarMotorreductoresPuenteH/ConectarCablesDerecha.png" alt="ConectarCablesDerecha">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarMotorreductoresPuenteH/CablesConectadosDerecha.png" alt="CablesConectadosDerecha">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h3>Motores parte izquierda:</h3>
      <br>
      <br>
      <div class="contenedordos">
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarMotorreductoresPuenteH/ConectarCablesIzquierda.png" alt="ConectarCablesIzquierda">
        </div>
        <div class="imagen-item-dos">
          <img src="@/assets/ImagenesConectarMotorreductoresPuenteH/CablesConectadosIzquierda.png" alt="CablesConectadosIzquierda">
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> Se debe <strong>conectar bien</strong> los cables por pares en sus pines adecuados para que las ruedas no vayan a girar en sentido <strong>anti horario o contrario</strong> 
       y el carro en vez de acelerar haga el movimiento de reversa.</p>
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
        src="https://www.youtube.com/embed/njlXm02J6cI?si=rdKgzm2XIXsTnjdk" 
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
      router.push('/DescomposicionConectarMotorreductoresPuenteH').then(() => {
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
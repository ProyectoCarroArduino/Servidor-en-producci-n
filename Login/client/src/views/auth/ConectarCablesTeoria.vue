<template>
  <div id="user">
    <div class="card card-body mt-8, align-left, col-md-15">
      <!--<h1 class="text-center">Programación en C</h1>-->
      <h1 class="text-center">Paso 1. Conectar cables a los motorreductores</h1>
      <br>
      <br>
      <p class="texto-personalizado">Para este paso los materiales necesarios son una unidad de motorreductor <strong>(puede o no tener caja reductora)</strong> dos cables de teléfono
      <strong>(el color puede ser el que se guste, pero preferible que sean negro y rojo)</strong>, pinzas o alicates y un cautín tipo lapiz.</p>
      <br>
      <div class="contenedor">
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/Moto.png" alt="Moto">
          <p class="texto">Motorreductor</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/CableTeléfono.png" alt="CablesTeléfono">
          <p class="texto">Cable de teléfono</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/Alicates.png" alt="Alicates">
          <p class="texto">Alicates/pinzas/pelacable</p>
        </div>
        <div class="imagen-item">
          <img src="@/assets/imagenesCarro/Cautin.png" alt="Cautin">
          <p class="texto">Cautín tipo lápiz</p>
        </div>
      </div>
      <br>
      <div class="justify-container">
      <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/DxX0sUtk9_M?si=LSws90oVe6Lx2DaQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
      </div>
      <div>
        <button class="bt-validate" @click="finish">Avanzar</button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="temas">
        <MenuCarro />
      </div>
    </div>
</div>
</template>

<script>
import router from '@/router';
import MenuCarro from "../../components/MenuCarro.vue";
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
      router.push('/DescomposicionConectarCables')
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
    display: block;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 80%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
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
  justify-content: center;
  align-items: flex-start; /* Alinea desde la parte superior */
  gap: 40px; /* Espacio entre elementos */
}

.imagen-item {
  text-align: center;
  width: 275px; /* Establece un ancho fijo */
}

.imagen-item img {
  width: 100x;
  height: 150px; /* Tamaño uniforme para todas las imágenes */
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.texto {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  min-height: 80px; /* Asegura que todos los textos ocupen la misma altura */
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px; /* Espaciado superior e inferior */
}

</style>
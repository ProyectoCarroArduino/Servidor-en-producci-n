<template>
    <div id="user">
      <div class="card card-body mt-8, align-left, col-md-15">
        <!--<h1 class="text-center">Programación en C</h1>-->
        <h1 class="text-center">Nota Final</h1>
        <div>
          <br>
          El valor de total es: {{ total }}
          <br>
          <button class="bt-validate" @click="finish">Avanzar</button>
        </div>
      </div>
      <div class="col-md-3">
        <div class="temas">
          <Menu />
        </div>
      </div>
  </div>
  </template>

<script>
import router from '@/router'
import Menu from "../../components/Menu.vue";
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        NavBar,
        Menu,
    },
    
    props: {
    total: {
      type: Number,
      required: true
    }
  },

    methods: {
      
    finish() {
        router.push('/').then(() => {
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
  font-size: 22px;
  height: 25px;
  font-weight: bold;
  color: #16161696;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

ul.custom-list {
  list-style-type: square; /* Puedes cambiar 'square' por 'circle', 'disc', etc. */

}

.texto-li{
  font-family: Arial, sans-serif; /* Tipo de letra */
  font-size: 16px; /* Tamaño de fuente */
  text-align: justify; /* Alineación justificada */
}

</style>
<template>
  <div id="user">
    <div class="card card-body mt-8 align-left col-md-15">
      <h1 class="text-center">4. Variables y operaciones</h1>
      <h3>Ejercicio 1:</h3>
      <br>
      <p class="texto-personalizado">
        Hacer un programa que calcule el <strong>área</strong> de un
        triángulo de base 12 cm y altura 8 cm <strong>(no usar fórmula de
        Herón)</strong>.
      </p>
      <br>
      <h3>Descomposición:</h3>
      <br>
      <h4 class="texto-personalizado">Seleccione la figura a la cual el problema está solicitando hallar el <strong>área</strong>:</h4>
      <br>
      <div class="figuras">
        <div
          v-for="figura in figuras"
          :key="figura.alt"
          class="figura"
          @click="manejarClick(figura.alt)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <div v-if="respuesta" class="respuesta">
        <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
      </div>
      <br>
      <br>
      <h4 class="texto-personalizado">Seleccione una medida <strong>"variable"</strong>que pueda identificar en la descripción del problema para poder resolverlo:</h4>
      <br>
      <div class="figuras">
        <div
          v-for="figura in figurasV"
          :key="figura.alt"
          class="figura"
          @click="manejarClickVar(figura.alt)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
      </div>
      <br>
      <br>
      <h4 class="texto-personalizado">Seleccione una medida <strong>"variable"</strong>que pueda identificar en la descripción del problema para poder resolverlo:</h4>
      <br>
      <div class="figuras">
        <div
          v-for="figura in figurasV2"
          :key="figura.alt"
          class="figura"
          @click="manejarClickVar2(figura.alt)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <div v-if="respuestaVar2" class="respuesta">
        <p v-if="CorrectaVar2" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar2 }}</p>
      </div>
      <br>
      <div>
        <br>
        <br>
        <Variables />
        <Operaciones />
      </div>
    </div>
    <div class="align-left col-md-3">
      <div class="temas">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/Menu.vue";
import Variables from "../../components/Variables.vue";
import Operaciones from "../../components/Operaciones.vue";
import Figura1 from '@/assets/Figuras/figura 1.webp';
import Figura2 from '@/assets/Figuras/figura 2.jpg';
import Figura3 from '@/assets/Figuras/figura 3.webp';
import Figura4 from '@/assets/Figuras/figura 4.webp';
import Figura5 from '@/assets/Figuras/figura 5.jpg';
import Figura6 from '@/assets/Figuras/figura 6.jpg';
import Figura7 from '@/assets/Figuras/figura 7.jpg';
import Figura8 from '@/assets/Figuras/figura 8.jpg';
import Figura9 from '@/assets/Figuras/figura 9.jpg';
import Figura10 from '@/assets/Figuras/figura 10.jpg';
import Figura11 from '@/assets/Figuras/figura 11.jpg';
import Figura12 from '@/assets/Figuras/figura 12.jpg';

export default {
  name: 'App',

  components: {
    Menu,
    Variables,
    Operaciones,
  },

  data() {
    return {
      figuras: [
        { src: Figura1, alt: 'Figura 1' },
        { src: Figura2, alt: 'Figura 2' },
        { src: Figura3, alt: 'Figura 3' },
        { src: Figura4, alt: 'Figura 4' },
      ].sort(() => Math.random() - 0.5),

      figurasV: [
        { src: Figura5, alt: 'Figura 5' },
        { src: Figura6, alt: 'Figura 6' },
        { src: Figura7, alt: 'Figura 7' },
        { src: Figura8, alt: 'Figura 8' },
      ].sort(() => Math.random() - 0.5),

      figurasV2: [
        { src: Figura9, alt: 'Figura 9' },
        { src: Figura10, alt: 'Figura 10' },
        { src: Figura11, alt: 'Figura 11' },
        { src: Figura12, alt: 'Figura 12' },
      ].sort(() => Math.random() - 0.5),

      respuesta: null,
      esCorrecta: false,
      mensajeError: '',
      mensajesError: [
        '¡Error! Selecciona la figura que está en la descripción del problema',
        '¡Error! Identifica la figura correcta a la cual el problema se refiere',
        '¡Error! Intenta tener en cuenta los datos que la descripción te esta dando',
        '¡Error! Recuerda que debes de seleccionar la figura que el problema esta presentando, no las figuras de anteriores problemas',
      ],

      respuestaVar: null,
      CorrectaVar: false,
      mensajeErrorVar: '',
      mensajesErrorVar: [
        '¡Error! Selecciona una de las medidas que identifiques que esta en la descripción del problema y en las opciones',
        '¡Error! Esta medida no hace parte de la figura presentada',
        '¡Error! Esta medida no es mencionada en el problema',
        '¡Error! Como ya identificaste la figura podrías usar la figura como referencia para hallar las medidas',
      ],

      respuestaVar2: null,
      CorrectaVar2: false,
      mensajeErrorVar2: '',
      mensajesErrorVar2: [
        '¡Error! Selecciona una de las medidas que identifiques que esta en la descripción del problema y en las opciones',
        '¡Error! Esta medida no hace parte de la figura presentada',
        '¡Error! Esta medida no es mencionada en el problema',
        '¡Error! Como ya identificaste la figura podrías usar la figura como referencia para hallar las medidas',
      ],

    };
    
    },

  methods: {
    manejarClick(figura) {
      this.respuesta = figura;
      this.esCorrecta = figura === 'Figura 1';
      if (!this.esCorrecta) {
        this.mensajeError = this.obtenerMensajeError();
      }
    },

    obtenerMensajeError() {
      const randomIndex = Math.floor(Math.random() * this.mensajesError.length);
      return this.mensajesError[randomIndex];
    },

    manejarClickVar(figurasV) {
      this.respuestaVar = figurasV;
      this.CorrectaVar = figurasV === 'Figura 5';
      if (!this.CorrectaVar) {
        this.mensajeErrorVar = this.obtenerMensajeErrorVar();
      }
    },

    obtenerMensajeErrorVar() {
      const randomIndex = Math.floor(Math.random() * this.mensajesErrorVar.length);
      return this.mensajesErrorVar[randomIndex];
    },

    manejarClickVar2(figurasV2) {
      this.respuestaVar2 = figurasV2;
      this.CorrectaVar2 = figurasV2 === 'Figura 10';
      if (!this.CorrectaVar2) {
        this.mensajeErrorVar2 = this.obtenerMensajeErrorVar2();
      }
    },

    obtenerMensajeErrorVar2() {
      const randomIndex = Math.floor(Math.random() * this.mensajesErrorVar2.length);
      return this.mensajesErrorVar2[randomIndex];
    },
  },


};
</script>

<style scoped>
#app {
  text-align: center;
}
.figuras {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* Añade un espacio entre las figuras */
}
.figura {
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  border: 2px solid #ccc; /* Añade un borde para distinguir cada figura */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Asegura que la imagen no sobresalga del contenedor */
  transition: transform 0.2s; /* Añade una transición para el efecto de agrandamiento */
}
.figura:hover {
  transform: scale(1.1); /* Agranda la imagen al pasar el cursor sobre ella */
}
.figura img {
  width: 250px; /* Ajusta el tamaño de la imagen */
  height: 250px; /* Ajusta el tamaño de la imagen */
  object-fit: cover; /* Asegura que la imagen mantenga su proporción dentro del contenedor */
}
.respuesta {
  margin-top: 20px;
}

.correcto {
  font-size: 20px;
  color: green;
}

.incorrecto {
  font-size: 20px;
  color: red;
}

#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.card {
  max-width: 100%;
  margin: auto;
  padding: 20px;
}

.texto-personalizado {
  font-family: Arial, sans-serif; /* Tipo de letra */
  font-size: 18px; /* Tamaño de fuente */
  text-align: justify; /* Alineación justificada */
}

.temas {
  position: fixed;
  margin-top: -245px;
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

</style>
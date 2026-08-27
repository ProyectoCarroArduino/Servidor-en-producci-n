<template>
  <div id="user">
    <div class="card card-body mt-8 align-left col-md-15">
      <h1 class="text-center">4. Variables y operaciones</h1>
      <h3>Ejercicio 1:</h3>
      <br />
      <p class="texto-personalizado">
        Hacer un programa que calcule el <strong>área</strong> de un triángulo de base 12 cm y altura 8 cm <strong>(no usar fórmula de Herón)</strong>.
      </p>
      <br />

      <!-- SUBEJERCICIO 1 -->
      <h3>Descomposición:</h3>
      <br />
      <h4 class="texto-personalizado">
        1. Seleccione la figura a la cual el problema está solicitando hallar el <strong>área</strong>:
      </h4>
      <div class="figuras">
        <div
          v-for="figura in figuras"
          :key="figura.alt"
          class="figura"
          :class="{ 'figura-bloqueada': ev1.bloqueado || ev1.cargando }"
          @click="manejarClick(figura.alt)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <EstadoSubejercicio :estado="ev1" />
      <div v-if="respuesta" class="respuesta">
        <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeError }}</p>
      </div>

      <!-- SUBEJERCICIO 2 -->
      <br /><br />
      <h4 class="texto-personalizado">
        2. Seleccione una medida <strong>"variable"</strong> que pueda identificar en la descripción del problema:
      </h4>
      <div class="figuras">
        <div
          v-for="figura in figurasV"
          :key="figura.alt"
          class="figura"
          :class="{ 'figura-bloqueada': ev2.bloqueado || ev2.cargando }"
          @click="manejarClickVar(figura.alt)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <EstadoSubejercicio :estado="ev2" />
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
      </div>

      <!-- SUBEJERCICIO 3 -->
      <br /><br />
      <h4 class="texto-personalizado">
        3. Seleccione otra medida <strong>"variable"</strong> identificable en el problema:
      </h4>
      <div class="figuras">
        <div
          v-for="figura in figurasV2"
          :key="figura.alt"
          class="figura"
          :class="{ 'figura-bloqueada': ev3.bloqueado || ev3.cargando }"
          @click="manejarClickVar2(figura.alt)"
        >
          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <EstadoSubejercicio :estado="ev3" />
      <div v-if="respuestaVar2" class="respuesta">
        <p v-if="CorrectaVar2" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar2 }}</p>
      </div>

      <!-- COMPONENTES DE APOYO -->
      <br /><br />
      <Variables />
      <Operaciones />
    </div>

    <div class="align-left col-md-3">
      <div class="temas">
        <Menu />
      </div>
    </div>
  </div>
</template>


<script>
import Menu from "../../../../../../components/Menu.vue";
import EstadoSubejercicio from "../../../../../../components/EstadoSubejercicio.vue";
import Variables from "../../Ejercicios/1/CB_DescomposicionComp2.vue";
import Operaciones from "../../Ejercicios/1/CB_DescomposicionComp1.vue";
import { reactive, onMounted } from 'vue';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';

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

// Ruta comun de los tres subejercicios. Debe coincidir EXACTAMENTE con los
// nombres de la plantilla del curso (ver server/seedCourseTemplate.js).
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 1',
  categoria: 'descomposicion'
};

export default {
  name: 'CBDescomposicion1',

  components: {
    Menu,
    EstadoSubejercicio,
    Variables,
    Operaciones,
  },

  setup() {
    const ev1 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 1' }));
    const ev2 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 2' }));
    const ev3 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: 'Subejercicio 3' }));

    onMounted(() => {
      ev1.obtenerIntentos();
      ev2.obtenerIntentos();
      ev3.obtenerIntentos();
    });

    return { ev1, ev2, ev3 };
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

      respuestaVar: null,
      CorrectaVar: false,
      mensajeErrorVar: '',

      respuestaVar2: null,
      CorrectaVar2: false,
      mensajeErrorVar2: '',

      mensajesError: [
        '¡Error! Selecciona la figura que está en la descripción del problema',
        '¡Error! Intenta tener en cuenta los datos que la descripción te esta dando',
        '¡Error! Recuerda que debes de seleccionar la figura que el problema está presentando',
      ],
      mensajesErrorVar: [
        '¡Error! Esta medida no hace parte de la figura presentada',
        '¡Error! Esta medida no es mencionada en el problema',
      ],
      mensajesErrorVar2: [
        '¡Error! Esta medida no hace parte de la figura presentada',
        '¡Error! Esta medida no es mencionada en el problema',
      ],
    };
  },

  methods: {
    // Un subejercicio ya aprobado o sin intentos no vuelve a registrarse: antes
    // se podia acertar (nota 5) y luego bajarla a 1 haciendo clic otra vez.
    puedeResponder(ev) {
      return ev.estadoCargado && !ev.bloqueado && !ev.cargando;
    },

    mensajeAleatorio(lista) {
      return lista[Math.floor(Math.random() * lista.length)];
    },

    async manejarClick(figura) {
      if (!this.puedeResponder(this.ev1)) return;

      this.respuesta = figura;
      this.esCorrecta = figura === 'Figura 1';
      if (!this.esCorrecta) {
        this.mensajeError = this.mensajeAleatorio(this.mensajesError);
      }

      // El servidor calcula la nota a partir de los intentos restantes.
      await this.ev1.registrarResultado(this.esCorrecta);
    },

    async manejarClickVar(figura) {
      if (!this.puedeResponder(this.ev2)) return;

      this.respuestaVar = figura;
      this.CorrectaVar = figura === 'Figura 5';
      if (!this.CorrectaVar) {
        this.mensajeErrorVar = this.mensajeAleatorio(this.mensajesErrorVar);
      }

      await this.ev2.registrarResultado(this.CorrectaVar);
    },

    async manejarClickVar2(figura) {
      if (!this.puedeResponder(this.ev3)) return;

      this.respuestaVar2 = figura;
      this.CorrectaVar2 = figura === 'Figura 10';
      if (!this.CorrectaVar2) {
        this.mensajeErrorVar2 = this.mensajeAleatorio(this.mensajesErrorVar2);
      }

      await this.ev3.registrarResultado(this.CorrectaVar2);
    },
  }
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
/* El subejercicio ya esta cerrado (aprobado o sin intentos): se ve y se
   comporta como no interactivo. */
.figura-bloqueada {
  cursor: not-allowed;
  opacity: 0.55;
  filter: grayscale(60%);
}
.figura-bloqueada:hover {
  transform: none;
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

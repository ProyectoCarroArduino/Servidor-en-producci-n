<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">4. Variables y operaciones</h1>
      <br>
      <br>
      <h3>Ejemplo:</h3>
      <br>
      <p class="texto-personalizado">Hacer un programa en C que calcule el <strong>área</strong> de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el <strong>área</strong> de un triángulo de base 12 cm y altura 8 cm.</p>
      <p><span style="font-weight: bold;">Nota:</span> <strong>(no usar fórmula de Herón)</strong>.</p>
      <br>
      <hr class="my-4" />
      <br>
      <h3>Descomposición:</h3>
      <br>
      <h4 class="texto-personalizado">De acuerdo a la teroria sobre <strong>variables y operaciones</strong> seleccione la imagen que <strong>representa</strong> las variables que se necesitan:</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figuras"
          :key="figura.alt"
          class="figura"
          @click="manejarClick(figura.alt, index)"
        >

          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <div v-if="respuesta" class="respuesta">
        <p v-if="esCorrecta" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">¡Incorrecto!</p>
      </div>

      <br>
      <br>
      <h4 class="texto-personalizado">De acuerdo a la teoria sobre <strong>variables y operaciones</strong> seleccione la imagen que <strong>representa</strong> las operaciones que se necesitan para resolver el problema:</h4>
      <br>
      <div class="figuras">
        <div
          v-for="(figura, index) in figurasV"
          :key="figura.alt"
          class="figura"
          @click="manejarClickVar(figura.alt, index)"
        >

          <img :src="figura.src" :alt="figura.alt" />
        </div>
      </div>
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">¡Incorrecto!</p>
      </div>

      <br>
      <div>
        <br>
        <br>
        <DragAndDrop1Checker @resultado="drag1Correcto = $event === true"/>
        <DragAndDrop2Checker @resultado="drag2Correcto = $event === true"/>
      </div>
      <div>
        <br>
        <br>
      </div>
      <br>

      <button class="bt-validate"
        @click="finish"
        :disabled="!puedeAvanzar">
        Avanzar
      </button>
    </main>
    <aside class="menu-lateral">
      <div>
        <Menu />
      </div>
    </aside>
  </div>
</template>

<script>
import router from '@/router';
import Menu from '@/components/Menu.vue';
import DragAndDrop1Checker from '@/components/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/DragAndDrop1CheckerVariablesOperacionesCEjemplo.vue';
import DragAndDrop2Checker from '@/components/ProgramacionC/Temas/VariablesOperacionesC/Ejemplo/DragAndDrop2CheckerVariablesOperacionesCEjemplo.vue';
import Figura1 from '@/assets/ImagenesVariablesOperacionesC/Codigo1.png';
import Figura2 from '@/assets/ImagenesVariablesOperacionesC/Codigo2.png';
import Figura3 from '@/assets/ImagenesVariablesOperacionesC/Codigo3.png';
import Figura4 from '@/assets/ImagenesVariablesOperacionesC/Codigo4.png';
import Figura5 from '@/assets/ImagenesVariablesOperacionesC/Codigo5.png';
import Figura6 from '@/assets/ImagenesVariablesOperacionesC/Codigo6.png';
import Figura7 from '@/assets/ImagenesVariablesOperacionesC/Codigo7.png';
import Figura8 from '@/assets/ImagenesVariablesOperacionesC/Codigo8.png';

export default {
  name: 'App',

  components: {
    Menu,
    DragAndDrop1Checker,
    DragAndDrop2Checker,
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
      respuesta: null,
      esCorrecta: false,
      respuestaCorrecta: 'Figura 1',
      respuestaVar: null,
      CorrectaVar: false,
      respuestaCorrectaV: 'Figura 5',
      drag1Correcto: false,
      drag2Correcto: false,
    };
  },

  computed: {
    puedeAvanzar() {
      return this.esCorrecta && this.CorrectaVar && this.drag1Correcto && this.drag2Correcto;
    },
  },

  methods: {
    manejarClick(figura, index) {
      this.respuesta = figura;
      this.esCorrecta = this.figuras[index].alt === this.respuestaCorrecta;
    },
    manejarClickVar(figura, index) {
      this.respuestaVar = figura;
      this.CorrectaVar = this.figurasV[index].alt === this.respuestaCorrectaV;
    },
    finish() {
      if (!this.puedeAvanzar) return;
      router.push('/AlgoritmoVariablesOperacionesCEjemplo').then(() => window.scrollTo(0, 0));
    },
  },
};
</script>

<style scoped>

.figuras {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* Añade un espacio entre las figuras */
}

.figura {
  position: relative;
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
  width: 350px; /* Ajusta el tamaño de la imagen */
  height: 350px; /* Ajusta el tamaño de la imagen */
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

.align-left {
  text-align: left; /* Alinea el contenido a la izquierda */
}

.square-card {
  width: 330px; /* Define el ancho deseado de la tarjeta */
  margin-top: 0px;
  overflow: hidden; /* Evita que el contenido se desborde */
}

.centrada {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 35%;
}

.centrada2 {
    display: flex;
    margin: 0 auto; /* Esto centra horizontalmente la imagen */
    max-width: 100%; /* Puedes ajustar el tamaño máximo de la imagen según tus necesidades */
    height: auto; /* La altura se ajusta automáticamente para mantener la proporción */
    width: 25%;
}

.bt-validate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
}

</style>
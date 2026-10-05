<template>
  <div>

    <br>
     <p class="texto-personalizado">
      <strong> Instrucciones:</strong> {{ instruccion }}
    </p>
    <br>
    <!-- Imagenes para ordenar -->
    <div class="image-container">
      <div class="image-item" v-for="(image, index) in puzzle" :key="image.id">
        <p>{{ index + 1 }}</p>
        <img :src="image.src" />
      </div>
    </div>

    <!-- Instrucciones -->
    <br>
    <br>
    <!-- Inputs -->
    <div class="input-container">
      <div class="input-item" v-for="(input, index) in inputs" :key="input.key">
        <p>{{ index + 1 }}</p>
        <input
          type="number"
          v-model.number="input.value"
          :ref="input.name"
          min="1"
          :max="numSteps"
          required
        />
      </div>
    </div>

    <!-- Boton para enviar -->
    <div class="button-container mt-3">
      <button
        @click="validateInputs"
        :disabled="isButtonDisabled"
        class="btn btn-primary"
      >
        Enviar respuesta
      </button>
    </div>

    <!-- Mensaje de error si las entradas no son válidas -->
    <div class="message mt-2" v-if="showErrorMessage">
      <p class="alert alert-warning">¡Verifica los datos ingresados!</p>
    </div>

    <!-- Retroalimentación -->
    <div v-if="showResult" class="mt-3">
      <p v-if="isCorrect" class="alert alert-success">¡Correcto!</p>
      <p v-else class="alert alert-danger">¡Incorrecto!</p>
    </div>

    <button
      class="bt-validate mt-3"
      @click="finish"
      :disabled="!isFinishEnabled"
    >
      Avanzar
    </button>
  </div>
</template>



<script>
import router from '@/router';
import image1 from '@/assets/ImagenesWhileC/Algoritmo1.png';
import image2 from '@/assets/ImagenesWhileC/Algoritmo2.png';
import image3 from '@/assets/ImagenesWhileC/Algoritmo3.png';

export default {
  name: 'ImageOrderingModule',

  data() {
    return {
      instruccion: 'Ingrese el orden correcto del algoritmo',
      puzzle: [],
      correct: [
        { id: 1, src: image1 },
        { id: 2, src: image2 },
      ],
      bad: [{ id: 3, src: image3 }],
      inputs: Array(2)
        .fill()
        .map((_, index) => ({
          key: index,
          value: null,
          name: `input-${index + 1}`,
        })),
      numSteps: 3,
      isCorrect: false,
      showPrincipal: true,
      showResult: false,
      showErrorMessage: false,
    };
  },

  created() {
    this.puzzle = this.puzzle.concat(this.getImages(this.correct, 1), this.correct);
    this.shuffleImages();
  },

  computed: {
    isButtonDisabled() {
      return !this.inputs.every(
        (input) =>
          Number.isInteger(input.value) && input.value >= 1 && input.value <= this.puzzle.length,
      );
    },
    isFinishEnabled() {
      return this.isCorrect;
    },
  },

  methods: {
    shuffleImages() {
      for (let i = this.puzzle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.puzzle[i], this.puzzle[j]] = [this.puzzle[j], this.puzzle[i]];
      }
    },
    getImages(images, n) {
      const allImages = this.getUniqueImages([...images, ...this.bad]);
      return allImages.slice(allImages.length - n);
    },
    getUniqueImages(images) {
      return images.filter((image, index) => {
        return images.indexOf(images.find((i) => i.id === image.id)) === index;
      });
    },
    validateInputs() {
      if (this.isButtonDisabled) return;
      this.showErrorMessage = false;
      this.isCorrect = this.inputs.every(
        (input, index) => this.puzzle[input.value - 1].id === this.correct[index].id,
      );
      this.showResult = true;
    },
    finish() {
      if (!this.isFinishEnabled) return;
      router.push('/AbstraccionSwitchCaseCEjemplo').then(() => window.scrollTo(0, 0));
    },
  },
  watch: {
    inputs: {
      deep: true,
      handler() {
        this.isCorrect = false;
        this.showResult = false;
      },
    },
  },
};
</script>



    
    <style scoped>
    input {
      font-size: large;
      margin-left: 10px;
      border-radius: 5px;
      text-align: center;
    }
    
    button {
      margin: auto;
      width: calc(100% / 3);
      padding: 10px;
      font-size: 1em;
      margin-top: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .algoritmos {
      margin: 0 auto;
      width: 70%;
    }
    
    .image-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
    }
    
    .image-item {
  width: calc(33.333% - 20px);
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px 5px 0 0;
}

    
    .image-item p {
      font-weight: bold;
      position: static;
      z-index: 1;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      margin-bottom: -0px;
      padding: 0px;
      border-radius: 0 0 5px 5px;
      color: rgb(27, 27, 27);
      background-color: transparent;
    }
    
    .message p {
      margin-top: 20px;
      text-align: center;
      font-size: 1em;
      font-weight: bold;
    }
    
    .text {
      font-size: 1.2em;
      margin-top: 0;
      margin-bottom: 20px;
    }
    
    .description {
      text-align: center;
      font-size: 1em;
      margin-top: -15px;
      margin-bottom: 20px;
    }
    
    .input-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .input-item {
      display: flex;
      flex-wrap: wrap;
      margin-right: 10px;
      border-radius: 5px;
      border: none;
      margin-left: 0;
    }
    
    .input-item p {
      font-size: 1.2em;
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 10 px;
      margin-left: 10px;
    }
    
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1%;
    }
    
    .validate-msg {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1%;
      font-size: 200%;
      margin: 0 auto;
      text-align: center;
    }
    
    .bt-validate {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1%;
    }
    
    .texto-personalizado {
        font-family: Arial, sans-serif; /* Tipo de letra */
        font-size: 18px; /* Tamaño de fuente */
        text-align: justify; /* Alineación justificada */
    }
    
    @media (max-width: 768px) {
      .image-item {
        width: 100%;
      }
    
      .text {
        font-size: 1em;
      }
    
      .description {
        font-size: 0.5em;
      }
    
      .message {
        font-size: 0.75em;
      }
    
      .button {
        font-size: 0.75em;
      }
    
      .step {
        font-size: 1.1em;
      }
    }
    </style>
    
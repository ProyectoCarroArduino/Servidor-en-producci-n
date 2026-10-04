<template>
  <div>
    <!-- Instrucciones -->
    <br>
    <p class="texto-personalizado">
      <strong>Instrucciones:</strong> {{ instruccion }}
    </p>
    <br>

    <!-- Imágenes para ordenar -->
    <div class="image-container">
      <div
        class="image-item"
        v-for="(image, index) in puzzle"
        :key="image.id"
      >
        <p>{{ index + 1 }}</p>
        <img :src="image.src" />
      </div>
    </div>

    <br>
    <br>

    <!-- Inputs -->
    <div class="input-container">
      <div
        class="input-item"
        v-for="(input, index) in inputs"
        :key="input.key"
      >
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

    <!-- Botón para enviar respuesta -->
    <div class="button-container mt-3">
      <button
        @click="validateInputs"
        :disabled="isButtonDisabled"
        class="btn btn-primary"
      >
        Enviar respuesta
      </button>
    </div>

    <!-- Mensaje de error por entrada inválida -->
    <div
      class="message mt-2"
      v-if="showErrorMessage"
    >
      <p class="alert alert-warning">
        ¡Verifica los datos ingresados!
      </p>
    </div>

    <!-- Retroalimentación -->
    <div
      v-if="feedbackMessage"
      class="mt-3"
    >
      <p :class="feedbackClass">
        {{ feedbackMessage }}
      </p>
    </div>

    <!-- Botón avanzar: siempre habilitado -->
    <button
      class="bt-validate mt-3"
      @click="finish"
    >
      Avanzar
    </button>
  </div>
</template>

<script>
import router from '@/router';

import image1 from '@/assets/ImagenesVariablesOperacionesC/Algoritmo1.png';
import image2 from '@/assets/ImagenesVariablesOperacionesC/Algoritmo2.png';
import image3 from '@/assets/ImagenesVariablesOperacionesC/Algoritmo3.png';

export default {
  name: 'ImageCheckerVariablesOperacionesEjemplo',

  data() {
    return {
      instruccion: 'Ingrese el orden correcto del algoritmo',

      puzzle: [],

      correct: [
        {
          id: 1,
          src: image1
        },
        {
          id: 2,
          src: image2
        }
      ],

      bad: [
        {
          id: 3,
          src: image3
        }
      ],

      inputs: Array(2)
        .fill()
        .map((_, index) => ({
          key: index,
          value: null,
          name: `input-${index + 1}`
        })),

      numSteps: 3,

      feedbackMessage: '',
      feedbackClass: '',

      isCorrect: false,

      showErrorMessage: false
    };
  },

  created() {
    this.puzzle = this.puzzle.concat(
      this.getImages(this.correct, 1),
      this.correct
    );

    this.shuffleImages();
  },

  computed: {
    /*
     * El botón "Enviar respuesta" solamente se habilita
     * cuando todos los campos contienen números válidos.
     */
    isButtonDisabled() {
      return !this.inputs.every(
        (input) =>
          Number.isInteger(input.value) &&
          input.value >= 1 &&
          input.value <= this.puzzle.length
      );
    }
  },

  methods: {
    shuffleImages() {
      for (let i = this.puzzle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [this.puzzle[i], this.puzzle[j]] = [
          this.puzzle[j],
          this.puzzle[i]
        ];
      }
    },

    getImages(images, n) {
      const allImages = this.getUniqueImages([
        ...images,
        ...this.bad
      ]);

      return allImages.slice(allImages.length - n);
    },

    getUniqueImages(images) {
      return images.filter((image, index) => {
        return (
          images.indexOf(
            images.find((i) => i.id === image.id)
          ) === index
        );
      });
    },

    validateInputs() {
      /*
       * Si los campos no son válidos, no se procesa
       * la respuesta.
       */
      if (this.isButtonDisabled) {
        this.showErrorMessage = true;
        this.feedbackMessage = '';
        return;
      }

      this.showErrorMessage = false;
      this.feedbackMessage = '';
      this.isCorrect = false;

      /*
       * Validación adicional de los valores.
       */
      const entradasValidas = this.inputs.every((input) => {
        const inputValue = Number.parseInt(input.value, 10);

        return (
          !Number.isNaN(inputValue) &&
          inputValue >= 1 &&
          inputValue <= this.puzzle.length
        );
      });

      if (!entradasValidas) {
        this.showErrorMessage = true;
        return;
      }

      /*
       * Comprobar si el orden introducido corresponde
       * al orden correcto de las imágenes.
       */
      this.isCorrect = this.inputs.every((input, index) => {
        const inputValue = Number.parseInt(input.value, 10);

        return (
          this.puzzle[inputValue - 1].id ===
          this.correct[index].id
        );
      });

      /*
       * Retroalimentación.
       *
       * No se guarda ninguna nota.
       * No se registra ninguna respuesta.
       * No se descuentan intentos.
       */
      if (this.isCorrect) {
        this.feedbackMessage =
          '¡Respuesta correcta! El orden del algoritmo es correcto.';

        this.feedbackClass = 'alert alert-success';
      } else {
        this.feedbackMessage =
          'La respuesta no es correcta. Revisa el orden e inténtalo nuevamente.';

        this.feedbackClass = 'alert alert-danger';
      }
    },

    finish() {
      /*
       * El ejemplo no depende de una evaluación
       * para poder avanzar.
       */
      router
        .push('/AbstraccionVariablesOperacionesCEjemplo')
        .then(() => {
          window.scrollTo(0, 0);
        });
    }
  }
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
  margin-bottom: 0;
  padding: 0;
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
  margin-right: 10px;
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
  font-family: Arial, sans-serif;
  font-size: 18px;
  text-align: justify;
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

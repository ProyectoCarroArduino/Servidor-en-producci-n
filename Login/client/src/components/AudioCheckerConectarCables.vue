<template>
    <div>
    <div v-if="showPrincipal" class="generalizacion">
      <div class="audio-container">
        <div class="audio-item" v-for="(audio, index) in audio" :key="audio.id">
          <audio :ref="'audioPlayer_' + index" :controls="true">
            <source :src="audio.src" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <input
            type="number"
            v-model.number="inputs[index].value"
            :ref="'input-${index+1}'"
            min="1"
            :max="numSteps"
            size="1"
            required
          />
        </div>
      </div>
  
      <div class="button-container">
        <button 
          @click="validateInputs" 
          :disabled="isButtonDisabled">
          Enviar
        </button>
      </div>
      <p v-if="attempts > 0 " class="contador">
        intentos restantes: {{ maxAttempts - attempts }}
      </p>
      <div class="message" v-if="showErrorMessage">
        <p>Verifica los datos!</p>
      </div>
    </div>
  
    <div v-if="showResult" class="validate-container">
      <div v-if="showResult">
        <p class="validate-msg" v-if="isCorrect">¡Correcto!</p>
        <p class="validate-msg" v-else>Lo sentimos, es incorrecto.</p>
      </div>
      <div class="button-container">
        <button 
            class="bt-validate" 
            v-if="isCorrect || attempts === maxAttempts" 
            :disabled="!isFinishEnabled" 
            @click="finish">
            Finalizar
          </button>
          <button 
            class="bt-validate" 
            v-if="!isCorrect" 
            :disabled="isRetryDisabled" 
            @click="showModule">
            Volver a intentar
          </button>
      </div>
      <p v-if="isCorrect || attempts >= maxAttempts" class="correcto alert alert-success mt-3">
        Tu evaluación final es: {{ evaluacion }}
      </p>
    </div>
    <br>
      <p class="alert alert-primary">
        Evaluación Generalización: {{ evaluacionGeneralizationStore.evaluacion.toFixed(1) }}
      </p>
</div>
  </template>
  
  <script>
  import router from '@/router'
  import audio1 from '@/assets/FuncionesSinparAudios/Funcion 1.mp3'
  import audio2 from '@/assets/FuncionesSinparAudios/Funcion 2.mp3'
  import audio3 from '@/assets/FuncionesSinparAudios/Funcion 3.mp3'
  import audio4 from '@/assets/FuncionesSinparAudios/Funcion 4.mp3'
  import audio5 from '@/assets/FuncionesSinparAudios/Funcion 5.mp3'
  import audio6 from '@/assets/FuncionesSinparAudios/Funcion 6.mp3'
  import audio7 from '@/assets/FuncionesSinparAudios/Funcion 7.mp3'
  import { useEvaluacionGeneralizationStore } from '@/stores/evaluation'
  
  export default {

    setup() {
        const evaluacionGeneralizationStore = useEvaluacionGeneralizationStore();
        return {
          evaluacionGeneralizationStore, // devuelve todo el store, no solo el valor
        };
      },

  data() {
    return {
      audio: [
        { id: 1, src: audio1 },
        { id: 2, src: audio2 },
        { id: 3, src: audio3 },
        { id: 4, src: audio4 },
        { id: 5, src: audio5 },
        { id: 6, src: audio6 },
        { id: 7, src: audio7 }
      ],
      showErrorMessage: false,
      showResult: false,
      isCorrect: false,
      showPrincipal: true,
      attempts : 0,
      maxAttempts: 3, 
      evaluacion : 0,
      inputs: Array(7)
        .fill()
        .map((_, index) => ({
          key: index,
          value: null,
          name: `input-${index + 1}`
        })),
      numSteps: 7
    };
  },

  created() {
    this.shuffleAudios();
  },


  computed: {
        isButtonDisabled() {
          // Verifica si todas las entradas tienen valores válidos (entre 1 y numSteps)
          return !this.inputs.every(
            (input) =>
              Number.isInteger(input.value) &&
              input.value >= 1 &&
              input.value <= 9
          );
        },

        isRetryDisabled() {
          // El botón se desactiva si la respuesta es correcta o los intentos disponibles se agotaron
          return this.isCorrect || this.attempts >= this.maxAttempts;
        },

        isFinishEnabled() {
          // El botón de finalizar está disponible si la respuesta es correcta o se acaban los intentos
          return this.isCorrect || this.attempts >= this.maxAttempts;
        },
      },

  methods: {
    hideModule() {
      this.showModule = false;
    },
    showModule() {
      this.showPrincipal = true;
      this.showResult = false;
      this.shuffleAudios();
      this.inputs = Array(7)
        .fill()
        .map((_, index) => ({
          key: index,
          value: null,
          name: `input-${index + 1}`
        }));
    },

    finish() {
        this.evaluacionGeneralizationStore.evaluacion = this.evaluacion;

        router.push('/EvaluacionConectarCables').then(() => {
          window.scrollTo(0, 0);
        });
      },

    shuffleAudios() {
      // Fisher-Yates
      for (let i = this.audio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.audio[i], this.audio[j]] = [this.audio[j], this.audio[i]];
      }
    },
    
    validateInputs() {
      if(this.isCorrect === true || this.attempts >= this.maxAttempts){
          return;
      }
      this.attempts++;
    // Reset de variables
      this.showErrorMessage = false;
      this.showResult = false;
      this.isCorrect = false;

      // Verifica si todas las entradas están llenas y son números válidos
      const allInputsValid = this.inputs.every((input) => {
          const inputValue = Number.parseInt(input.value, 10); // Convierte a número
          return !Number.isNaN(inputValue) && inputValue >= 1 && inputValue <= this.audio.length;
      });

      if (!allInputsValid) {
          this.showErrorMessage = true;
          return;
      }

      // Verifica si el orden de los audios es correcto según su posición original
      this.isCorrect = this.inputs.every((input, index) => {
          const inputValue = Number.parseInt(input.value, 10);
          return inputValue === this.audio[index].id;
      });

      this.calcularEvaluacion();

      if (this.isCorrect || this.attempts >= this.maxAttempts) {
        this.showPrincipal = true; // Mantener la vista principal para mostrar evaluación
      } else {
        this.showErrorMessage = true;
      }

      this.showPrincipal = false;
      this.showResult = true;
    },

    calcularEvaluacion() {
      if (this.isCorrect === true) {
        // Calcular evaluación solo si la respuesta es correcta
        if (this.attempts === 1) {
          this.evaluacion = 5;
        } else if (this.attempts === 2) {
          this.evaluacion = 4;
        } else if (this.attempts === 3) {
          this.evaluacion = 3;
        }
      } else if (this.attempts === this.maxAttempts) {
        // Asignar calificación mínima al alcanzar intentos máximos sin éxito
        this.evaluacion = 1;
      }
    },

  }
};
  </script>
  
  <style scoped>
  .audio-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .audio-item audio {
    width: 70%;
    margin-bottom: 2%;
  }
  
  .audio-item input[type='number'] {
    align-items: center;
    font-size: large;
    margin-left: 2%;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 2%;
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
  
  .generalizacion {
    margin: 0 auto;
    width: 90%;
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
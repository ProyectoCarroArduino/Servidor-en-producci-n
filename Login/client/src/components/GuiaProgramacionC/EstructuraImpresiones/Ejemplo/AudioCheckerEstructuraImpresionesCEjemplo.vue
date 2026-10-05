<template>
  <div>
    <div v-if="showPrincipal" class="generalizacion">
      <h2>Ordena correctamente los audios</h2>
      <br>

      <br>
      <div class="audio-container">
        <div class="audio-item" v-for="(audioItem, index) in audio" :key="audioItem.id">
          <audio :ref="'audioPlayer_' + index" controls>
            <source :src="audioItem.src" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <input
            type="number"
            v-model.number="inputs[index].value"
            :ref="'input-' + (index + 1)"
            min="1"
            :max="numSteps"
            size="1"
            required
          />
        </div>
      </div>

      <!-- Botón para validar -->
      <div class="button-container mt-3">
        <button
          class="ec-btn ec-btn-primary"
          @click="validateInputs"
          :disabled="isButtonDisabled"
        >
          Enviar
        </button>
      </div>

      <!-- Mensaje de error si inputs no son válidos -->
      <div v-if="showErrorMessage" class="alert alert-warning mt-3">
        Verifica los datos. Asegúrate de que todos los campos estén completos y sean válidos.
      </div>

      <!-- Resultado del intento -->
      <div v-if="showResult" class="mt-4">
        <p v-if="isCorrect" class="alert alert-success">¡Correcto!</p>
        <p v-else class="alert alert-danger">¡Incorrecto!</p>
      </div>

      <!-- Botón para finalizar -->
      <div class="ec-acciones">
        <button
          class="ec-btn ec-btn-secondary"
          @click="finish"
          :disabled="!isFinishEnabled"
        >
          Finalizar
          <span class="material-icons" aria-hidden="true">arrow_forward</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import router from '@/router';
import audio1 from '@/assets/AudiosEstructuraEImpresiones/Ejemplo_Gen_Audio1.mp3';
import audio2 from '@/assets/AudiosEstructuraEImpresiones/Ejemplo_Gen_Audio2.mp3';

export default {
  name: 'AudioCheckerConectarCables',

  data() {
    return {
      audio: [
        { id: 1, src: audio1 }, // espacio (1): \n
        { id: 2, src: audio2 }, // espacio (2): return 0;
      ],
      showErrorMessage: false,
      showResult: false,
      isCorrect: false,
      showPrincipal: true,
      inputs: [],
      numSteps: 0,
    };
  },

  created() {
    this.inputs = Array(this.audio.length)
      .fill()
      .map((_, index) => ({
        key: index,
        value: null,
        name: `input-${index + 1}`,
      }));
    this.numSteps = this.audio.length;
    this.shuffleAudios();
  },

  computed: {
    isButtonDisabled() {
      return !this.inputs.every(
        (input) =>
          Number.isInteger(input.value) && input.value >= 1 && input.value <= this.audio.length,
      );
    },
    isFinishEnabled() {
      return this.isCorrect;
    },
  },

  methods: {
    shuffleAudios() {
      for (let i = this.audio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.audio[i], this.audio[j]] = [this.audio[j], this.audio[i]];
      }
    },
    validateInputs() {
      if (this.isButtonDisabled) return;
      this.showErrorMessage = false;
      this.isCorrect = this.inputs.every((input, index) => input.value === this.audio[index].id);
      this.showResult = true;
    },
    finish() {
      if (!this.isFinishEnabled) return;
      router.push('/EIDescomposicion1').then(() => window.scrollTo(0, 0));
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
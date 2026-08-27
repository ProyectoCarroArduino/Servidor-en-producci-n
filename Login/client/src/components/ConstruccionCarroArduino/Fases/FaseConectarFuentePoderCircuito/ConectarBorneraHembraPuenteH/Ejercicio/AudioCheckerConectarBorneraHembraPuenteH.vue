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

      <EstadoSubejercicio :estado="ev" />

      <!-- Botón para validar -->
      <div class="button-container mt-3">
        <button 
          class="btn btn-primary"
          @click="validateInputs" 
          :disabled="isButtonDisabled || !puedeResponder">
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
        <p v-else class="alert alert-danger">Lo sentimos, es incorrecto.</p>
      </div>

      <!-- Botón para finalizar -->
      <button
        class="btn btn-success mt-3"
        @click="finish"
        :disabled="!isFinishEnabled">
        Finalizar
      </button>
    </div>
  </div>
</template>


<script>
import router from '@/router'; 
import audio1 from '@/assets/AudiosMontarArduinoUNOSoporte/Audio1.mp3';  
import audio2 from '@/assets/AudiosMontarArduinoUNOSoporte/Audio2.mp3';
import audio3 from '@/assets/AudiosMontarArduinoUNOSoporte/Audio3.mp3';
import audio4 from '@/assets/AudiosMontarArduinoUNOSoporte/Audio4.mp3';
import audio5 from '@/assets/AudiosMontarArduinoUNOSoporte/Audio4.mp3';
import { onMounted, reactive, toRefs } from 'vue';
import { useEvaluacionGeneralizationStore } from '@/stores/evaluation';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';
import EstadoSubejercicio from '@/components/EstadoSubejercicio.vue';

export default {
  name: 'AudioCheckerConectarCables',

  components: { EstadoSubejercicio },

  setup() {
    const evaluacionGeneralizationStore = useEvaluacionGeneralizationStore();

    const evaluacionGeneralizationRaw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
        modulo: '3. Fase de conectar la fuente de poder al circuito',
        submodulo: '3.3 Conectar bornera tipo hembra al puente H (módulo L298N)',
        ejercicio: 'Ejercicio 1',
        categoria: 'generalizacion',
        subejercicio: 'Subejercicio 1'
      })
    );

    const evaluacionGeneralization = {
      ...toRefs(evaluacionGeneralizationRaw),
      registrarEvaluacion: evaluacionGeneralizationRaw.registrarEvaluacion,
      obtenerIntentos: evaluacionGeneralizationRaw.obtenerIntentos
    };

    onMounted(() => {
      evaluacionGeneralization.obtenerIntentos();
    });

    return {
      ev: evaluacionGeneralizationRaw,
      registrarResultado: evaluacionGeneralizationRaw.registrarResultado,
      evaluacionGeneralizationStore,
      intentosDisponiblesGeneralization: evaluacionGeneralization.intentosRestantes,
      obtenerIntentosGeneralization: evaluacionGeneralization.obtenerIntentos,
      registrarEvaluacionGeneralization: evaluacionGeneralization.registrarEvaluacion
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
      ],
      evaluacion: null,
      showErrorMessage: false,
      showResult: false,
      isCorrect: false,
      showPrincipal: true,
      inputs: Array(5).fill().map((_, index) => ({
        key: index,
        value: null,
        name: `input-${index + 1}`
      })),
      numSteps: 5,
      feedbackMessage: '',
      feedbackClass: ''
    };
  },

  created() {
    this.shuffleAudios();
  },

  computed: {
    isButtonDisabled() {
      return !this.inputs.every(
        (input) =>
          Number.isInteger(input.value) &&
          input.value >= 1 &&
          input.value <= 5
      );
    },
    isFinishEnabled() {
      return this.ev.bloqueado;
    },
    puedeResponder() {
      return this.ev.estadoCargado && !this.ev.bloqueado && !this.ev.cargando;
    }
  },

  methods: {
    shuffleAudios() {
      for (let i = this.audio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.audio[i], this.audio[j]] = [this.audio[j], this.audio[i]];
      }
    },

    async validateInputs() {
      if (this.isButtonDisabled || !this.puedeResponder) {
        return;
      }

      this.showErrorMessage = false;
      this.showResult = false;
      this.isCorrect = false;

      const entradasValidas = this.inputs.every((input) => {
        const inputValue = Number.parseInt(input.value, 10);
        return !Number.isNaN(inputValue) && inputValue >= 1 && inputValue <= this.audio.length;
      });

      if (!entradasValidas) {
        this.showErrorMessage = true;
        return;
      }

      this.isCorrect = this.inputs.every((input, index) => {
        const inputValue = Number.parseInt(input.value, 10);
        return inputValue === this.audio[index].id;
      });

      // La nota la calcula el servidor a partir de los intentos restantes.
      const respuesta = await this.registrarResultado(this.isCorrect);
      this.evaluacion = respuesta ? respuesta.subejercicio.nota : null;

      this.showPrincipal = true; // Mantiene la vista principal
      this.showResult = true;
    },


    finish() {
      if (this.isFinishEnabled) {
        this.evaluacionGeneralizationStore.evaluacion = this.evaluacion;
        router.push('/DesplazarCircuitoChasisTeoria').then(() => {
          window.scrollTo(0, 0);
        });
      }
    }
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
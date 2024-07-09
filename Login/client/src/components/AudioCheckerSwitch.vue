<template>
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
        <button @click="validateInputs">Enviar</button>
      </div>
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
        <button class="bt-validate" v-if="isCorrect" @click="finish">Finalizar</button>
        <button class="bt-validate" v-else @click="showModule">Volver a intentar</button>
      </div>
    </div>
  </template>
  
  <script>
  import router from '@/router'
  import audio1 from '@/assets/audiosSwitch/audio 1.mp3'
  import audio2 from '@/assets/audiosSwitch/audio 2.mp3'
  import audio3 from '@/assets/audiosSwitch/audio 3.mp3'
  import audio4 from '@/assets/audiosSwitch/audio 4.mp3'
  import audio5 from '@/assets/audiosSwitch/audio 5.mp3'
  import audio6 from '@/assets/audiosSwitch/audio 6.mp3'
  import audio7 from '@/assets/audiosSwitch/audio 7.mp3'
  import audio8 from '@/assets/audiosSwitch/audio 8.mp3'
  import audio9 from '@/assets/audiosSwitch/audio 9.mp3'
  import audio10 from '@/assets/audiosSwitch/audio 10.mp3'
  import audio11 from '@/assets/audiosSwitch/audio 11.mp3'
  import audio12 from '@/assets/audiosSwitch/audio 12.mp3'
  import audio13 from '@/assets/audiosSwitch/audio 13.mp3'
  
  export default {
    data() {
      return {
        /*enunciado:
          'Teniendo en cuenta la teoria sobre variables y operaciones generalice el proceso de la obtención del área de un rectángulo paso a paso',
        instruccion: 'Ingrese el orden correcto de los audios:',*/
        audio: [
          {
            id: 1,
            src: audio1
          },
          {
            id: 2,
            src: audio2
          },
          {
            id: 3,
            src: audio3
          },
          {
            id: 4,
            src: audio4
          },
          {
            id: 5,
            src: audio5
          },
          {
            id: 6,
            src: audio6
          },
          {
            id: 7,
            src: audio7
          },
          {
            id: 8,
            src: audio8
          },
          {
            id: 9,
            src: audio9
          },
          {
            id: 10,
            src: audio10
          },
          {
            id: 11,
            src: audio11
          },
          {
            id: 12,
            src: audio12
          },
          {
            id: 13,
            src: audio13
          },
        ],
  
        showErrorMessage: false,
        showResult: false,
        isCorrect: false,
        showPrincipal: true,
        inputs: Array(13)
          .fill()
          .map((_, index) => ({
            key: index,
            value: null,
            name: `input-${index + 1}`
          })),
        numSteps: 9
      }
    },
    created() {
      this.shuffleAudios()
    },
    methods: {
      hideModule() {
        this.showModule = false
      },
      showModule() {
        this.showPrincipal = true
        this.showResult = false
        this.shuffleAudios()
        this.inputs = Array(6)
          .fill()
          .map((_, index) => ({
            key: index,
            value: null,
            name: `input-${index + 1}`
          }))
      },
      finish() {
        router.push('/descomposicionEj')
      },
  
      shuffleAudios() {
        // Fisher-Yates
        for (let i = this.audio.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[this.audio[i], this.audio[j]] = [this.audio[j], this.audio[i]]
        }
      },
  
      validateInputs() {
        //reset de variables
        this.showErrorMessage = false
        this.showResult = false
        this.isCorrect = false
        // Verifica si todas las entradas están llenas y son números
        this.showErrorMessage = !this.inputs.every((input) => {
          const inputValue = Number.parseInt(input.value, 10) // Intenta convertir el valor de entrada a un número
          // Si el valor de entrada no es un número o está fuera de rango, no es válido
          if (Number.isNaN(inputValue) || inputValue < 1 || inputValue > this.audio.length) {
            return false
          } else {
            return true
          }
        })
        //Verifica si las entradas son correctas
        if (!this.showErrorMessage) {
          this.showPrincipal = false
          this.isCorrect = this.inputs.every((input, index) => {
            const inputValue = Number.parseInt(input.value, 10)
            return this.audio[inputValue - 1].id === this.audio[index].id
          })
          this.showResult = true
        } else {
          this.showErrorMessage = true
        }
      }
    }
  }
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
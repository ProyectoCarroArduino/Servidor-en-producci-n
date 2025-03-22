<template>
    <div>
      <div v-if="showPrincipal" class="algoritmos">
        <div class="image-container">
          <div class="image-item" v-for="(image, index) in puzzle" :key="image.id">
            <p>{{ index + 1 }}</p>
            <img :src="image.src" />
          </div>
        </div>
        <br>
        <p class="texto-personalizado"> <strong>Instrucciones:</strong> {{ instruccion }} </p>
        <br>
        <div class="input-container">
          <div class="input-item" v-for="(input, index) in inputs" :key="input.key">
            <p>{{ index + 1 }}</p>
            <input
              type="number"
              v-model.number="input.value"
              :ref="input.name"
              min="1"
              :max="numSteps"
              size="1"
              required
            />
          </div>
        </div>
        <br>
        <div class="button-container">
          <button 
            @click="validateInputs" 
            :disabled="isButtonDisabled">
            Enviar
          </button>
        </div>
        <br>
        <p v-if="attemps > 0 " class="contador">
          intentos restantes: {{ maxAttemps - attemps }}
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
            v-if="isCorrect || attemps === maxAttemps" 
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
      </div>
      <p v-if="isCorrect || attemps === maxAttemps" class="correcto alert alert-success mt-3">
        Tu evaluación final es: {{ evaluacion }}
      </p>
    </div>
    </template>
    
    <script>
    import router from '@/router'
    import image1 from '@/assets/ConectarCablesImages/Conectar 1.png'
    import image2 from '@/assets/ConectarCablesImages/Conectar 2.png'
    import image3 from '@/assets/ConectarCablesImages/Conectar 3.png'
    import image4 from '@/assets/ConectarCablesImages/Conectar 4.png'
    import image5 from '@/assets/ConectarCablesImages/Conectar 5.png'
    import image6 from '@/assets/ConectarCablesImages/Conectar 6.png'
    import image7 from '@/assets/ConectarCablesImages/Conectar 7.png'
    import image8 from '@/assets/ConectarCablesImages/Conectar 8.png'
    import image9 from '@/assets/ConectarCablesImages/Conectar 9.png'



    export default {
      name: 'ImageOrderingModule',
      data() {
        return {
          /*enunciado:
            'Hacer un programa que calcule el área de un rectángulo que tiene dos lados de 12cm y otros dos lados de 6cm.',*/
          instruccion: 'Ingrese el orden correcto del algoritmo',
          puzzle: [],
          attemps : 0,
          maxAttemps : 3,
          evaluacion : null,
          correct: [
            {
              id: 1,
              src: image1
            },
            {
              id: 2,
              src: image2
            },
            {
              id: 3,
              src: image3
            },
            {
              id: 4,
              src: image4
            },
            {
              id: 5,
              src: image5
            },
            {
              id: 6,
              src: image6
            },
            {
              id: 7,
              src: image7
            },
            {
              id: 8,
              src: image8
            },

          ],
          bad: [
            {
              id: 9,
              src: image9
            },
          ],
          showErrorMessage: false,
          showResult: false,
          isCorrect: false,
          showPrincipal: true,
          inputs: Array(8)
            .fill()
            .map((_, index) => ({
              key: index,
              value: null,
              name: `input-${index + 1}`
            })),
          numSteps: 8
        }
      },
      created() {
        this.puzzle = this.puzzle.concat(this.getImages(this.correct, 1), this.correct)
        this.shuffleImages()
      },


      computed: {
        isButtonDisabled() {
          // Verifica si todas las entradas tienen valores válidos (entre 1 y numSteps)
          return !this.inputs.every(
            (input) =>
              Number.isInteger(input.value) &&
              input.value >= 1 &&
              input.value <= 13
          );
        },

        isRetryDisabled() {
          // El botón se desactiva si la respuesta es correcta o los intentos disponibles se agotaron
          return this.isCorrect || this.attemps >= this.maxAttemps;
        },

        isFinishEnabled() {
          // El botón de finalizar está disponible si la respuesta es correcta o se acaban los intentos
          return this.isCorrect || this.attemps >= this.maxAttemps;
        },
      },


      methods: {
        hideModule() {
          this.showModule = false
        },
        showModule() {
          this.showPrincipal = true
          this.showResult = false
          this.shuffleImages()
          this.inputs = Array(6)
            .fill()
            .map((_, index) => ({
              key: index,
              value: null,
              name: `input-${index + 1}`
            }))
        },
        finish() {
          router.push('/abstraccionFuncionesSinparEj')
        },
    
        shuffleImages() {
          // Fisher-Yates
          for (let i = this.puzzle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[this.puzzle[i], this.puzzle[j]] = [this.puzzle[j], this.puzzle[i]]
          }
        },
    
        getImages(images, n) {
          const allImages = this.getUniqueImages([...images, ...this.bad])
          return allImages.slice(allImages.length - n)
        },
    
        getUniqueImages(images) {
          return images.filter((image, index) => {
            return images.indexOf(images.find((i) => i.id === image.id)) === index
          })
        },
    
        validateInputs() {
          if (this.isButtonDisabled) {
            return; // Evita validaciones adicionales si el botón está deshabilitado
          }

          this.attemps++;
          this.showErrorMessage = false
          this.showResult = false
          this.isCorrect = false
          // Verifica si todas las entradas están llenas y son números
          this.showErrorMessage = !this.inputs.every((input) => {
            const inputValue = Number.parseInt(input.value, 10) // Intenta convertir el valor de entrada a un número
            // Si el valor de entrada no es un número o está fuera de rango, no es válido
            if (Number.isNaN(inputValue) || inputValue < 1 || inputValue > this.puzzle.length) {
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
              return this.puzzle[inputValue - 1].id === this.correct[index].id
            })
            this.showResult = true
            this.calcularEvaluacion();
          } else {
            
            this.showErrorMessage = true
          }
        },

        calcularEvaluacion() {
      if (this.isCorrect === true) {
        // Calcular evaluación solo si la respuesta es correcta
        if (this.attemps === 1) {
          this.evaluacion = 5;
        } else if (this.attemps === 2) {
          this.evaluacion = 4;
        } else if (this.attemps === 3) {
          this.evaluacion = 3;
        } 
      } else if (this.attemps === this.maxAttemps) {
        // Asignar calificación mínima al alcanzar intentos máximos sin éxito
        this.evaluacion = 1;
      }
    },
    }
  }
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
      position: relative;
      width: calc(33.333% - 20px);
      margin-bottom: 30px;
      z-index: 0;
    }
    
    .image-item img {
      width: 100%;
      height: auto;
      border-radius: 5px 5px 0 0;
    }
    
    .image-item p {
      font-weight: bold;
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      margin-bottom: -14px;
      padding: 0px;
      border-radius: 0 0 5px 5px;
      color: rgb(27, 27, 27);
      background-color: rgb(119, 119, 119);
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
    
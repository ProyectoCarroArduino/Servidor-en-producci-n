<template>
    <div id="user">
      <div class="card card-body mt-8 align-left col-md-15">
        <h1 class="text-center">Paso 1. Conectar cables a los motorreductores</h1>
        <br>
        <h3>ejercicio:</h3>
        <br>
        <p class="texto-personalizado">
            Se necesita un programa en C que simule la conexión de dos cables uno rojo y otro negro a un motoreductor. 
            Cuando se haga la conexión imrpimir el mensaje: "cable rojo y negro conectados".
        </p>
        <p class="texto-personalizado"> <strong>Instrucciones:</strong> Los cables deben ser variables del tipo cadena de caracter. 
            La conexión debe ser una función del tipo cadena de caracter, la cual debe imprimir el mensaje.
        </p>
        <br>
        <h3>Descomposición:</h3>
        <br>
        <h4 class="texto-personalizado">Seleccione el video que muestra la <strong>conexión</strong> de los cables rojo y negro al motorreductor: </h4>
        <br>
        <div class="video-selection">
          <br>
          <p class="texto-personalizado">Selecciona el video correcto:</p>
          <br>
          <div class="videos-container">
            <div 
              v-for="(video, index) in videos" 
              :key="index" 
              class="video-item">
              <video width="300" height="200" controls>
                <source :src="video.src" type="video/mp4">
                Tu navegador no soporta la reproducción de videos.
              </video>
              <div class="option">
                <input 
                  type="radio" 
                  :id="`video${index}`" 
                  :value="video" 
                  v-model="selectedVideo"
                />
                <label :for="`video${index}`">
                  Seleccionar
                </label>
              </div>
            </div>
          </div>
          <br>
          <p class="texto-personalizado">Respuesta seleccionada: {{ selectedVideo }}</p>
          <br>
          <button @click="checkAnswer" class="btn btn-primary">Submit</button>
          <br>
          <div v-if="feedbackMessage" class="respuesta">
            <p v-if="correctVideoIndex" class="correcto alert alert-success mt-3">¡Correcto!</p>
            <p v-else class="incorrecto alert alert-danger mt-3">{{ feedbackMessage }}</p>
          </div>
          <br>
          <div v-if="evaluacionVideo !== null" class="correcto">
            <p 
              class="alert"
              :class="{
                'alert-danger': evaluacionVideo === 1,
                'alert-success': evaluacionVideo >= 3 && evaluacionVideo <= 5
              }">
              Tu evaluación es: {{ evaluacionVideo }}
            </p>
            <br>
          </div>
            <p v-if="totalClicksVideo > 0" class="contador">
              Intentos restantes: {{ maxClicksVideo - totalClicksVideo }}
            </p>
          </div>
        <br>
        <br>
        <h4 class="texto-personalizado">Seleccione la imagen que representa la <strong>conexión de los cables al motorreductor</strong> en el simulador tinkerCAD: </h4>
        <br>
        <div class="figuras">
          <div
            v-for="(funcion, index) in funcionesV"
            :key="funcion.alt"
            class="figura"
            @click="manejarClickVar(funcion.alt, index)"
          >
          <div
            v-if="totalClicksV > 0 && mostrarContadorV === index"
            class="contador-imagen"
          >
            {{ maxClicksV - totalClicksV }}
          </div>
            <img :src="funcion.src" :alt="funcion.alt" 
            :style="{ 
                pointerEvents: isBlockedV ? 'none' : 'auto', 
                opacity: isBlockedV ? 0.5 : 1 
            }"/>
          </div>
        </div>
        <div v-if="respuestaVar" class="respuesta">
          <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
          <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
        </div>
        <div v-if="evaluacionV !== null" class="correcto">
            <p 
              class="alert"
              :class="{
                'alert-danger': evaluacionV === 1,
                'alert-success': evaluacionV >= 3 && evaluacionV <= 5
              }">
              Tu evaluación es: {{ evaluacionV }}
            </p>
            <br>
          </div>
        <br>
        <div>
          <br>
        </div>
        <br>
        <div v-if="puedeAvanzar" class="evaluacion-final">
          <p class="alert alert-primary">
            Evaluación total: {{ evaluacionTotal.toFixed(1) }}
          </p>
        </div>
        <br>
        <p class="alert alert-primary">
          Evaluación Descomposición: {{ evaluacionStore.evaluacion.toFixed(1) }}
        </p>
        <br>
        <button class="bt-validate" 
          @click="finish"
          :disabled="!puedeAvanzar">
          Avanzar
        </button>
      </div>
      <div class="align-left col-md-3">
        <div class="temas">
          <MenuCarro />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import router from '@/router';
  import MenuCarro from "../../components/MenuCarro.vue";
  import Funcion5 from '@/assets/FuncionesSinparImages/Funciones 5.png';
  import Funcion6 from '@/assets/FuncionesSinparImages/Funciones 6.png';
  import Funcion7 from '@/assets/FuncionesSinparImages/Funciones 7.png';
  import Funcion8 from '@/assets/FuncionesSinparImages/Funciones 8.png';
  import Video1 from '@/assets/VideosConectarCables/Video 1.mp4';
  import Video2 from '@/assets/VideosConectarCables/Video 2.mp4';
  import Video3 from '@/assets/VideosConectarCables/Video 3.mp4';
  import { useEvaluacionStore } from '@/stores/evaluation';

  
  export default {
    name: 'App',
  
    components: {
      MenuCarro,
    },

    setup() {
      const evaluacionStore = useEvaluacionStore();
      return {
        evaluacionStore, // devuelve todo el store, no solo el valor
      };
    },
  
    data() {
      return {

        funcionesV: [
          { src: Funcion5, alt: 'Funcion 5' },
          { src: Funcion6, alt: 'Funcion 6' },
          { src: Funcion7, alt: 'Funcion 7' },
          { src: Funcion8, alt: 'Funcion 8' },
        ].sort(() => Math.random() - 0.5),
  
        
        respuestaVar: null,
        CorrectaVar: false,
        mensajeErrorVar: '',
        mensajesErrorVar: [
          '¡Error! Recuerda que debes de seleccionar la imagen que tenga la declaración de la función (laboratorio) de forma correcta',
          '¡Error! La forma en la que estas haciendo la declaración de la función (laboratorio) no es correcta',
          '¡Error! Intenta ir a revisar la teoria sobre la declaración de una función e intentalo de nuevo',
          '¡Error! Ten en cuenta que la declaración de la función (laboratorio) para este caso es una función (sin parámetros)',
        ],
  
        respuestaCorrectaV: 'Funcion 5',
        totalClicksV: 0,
        maxClicksV: 3,
        mostrarContadorV: null,
        isBlockedV: false,
        evaluacionV: null,
        evaluacionLlamada: null,
        evaluacionEstructura: null,

        videos: [
        { src: Video1, alt: 'Video 1' },
        { src: Video2, alt: 'Video 2' },
        { src: Video3, alt: 'Video 3' },
      ].sort(() => Math.random() - 0.5),

      correctVideoIndex: null, // Índice del video correcto
      selectedVideo: null,
      feedbackMessage: "",
      feedbackClass: "",
      BlockedVideo: null,
      totalClicksVideo: 0, 
      maxClicksVideo: 3,
      mostrarContadorVideo: null,
      evaluacionVideo: null,

      mensajesErrorVideo: [
          '¡Error! Recuerda que debes de seleccionar la imagen que tenga la declaración de la función (laboratorio) de forma correcta',
          '¡Error! La forma en la que estas haciendo la declaración de la función (laboratorio) no es correcta',
          '¡Error! Intenta ir a revisar la teoria sobre la declaración de una función e intentalo de nuevo',
          '¡Error! Ten en cuenta que la declaración de la función (laboratorio) para este caso es una función (sin parámetros)',
        ],

    };
      
    },
  
      computed: {
      // Propiedad computada para habilitar o deshabilitar el botón
      puedeAvanzar() {
        return (
          this.evaluacionV !== null &&
          this.evaluacionVideo !== null
        );
      },
  
      evaluacionTotal() {
        const total =
          (this.evaluacionV ?? 0) +
          (this.evaluacionVideo ?? 0)
        return total / 2; // Dividimos entre el total de actividades
      },
      
    },
  
    methods: {
  
      manejarClickVar(funcionesV, index) {
        if (this.isBlockedV || this.totalClicksV >= this.maxClicksV) {
          return; // Bloquea clics adicionales si se alcanzó el límite o la respuesta es correcta
        }
  
        const funcionSeleccionada = this.funcionesV[index].alt;
        
        if (funcionSeleccionada === this.respuestaCorrectaV) {
          this.isBlockedV = true; // Bloquea clics adicionales
          this.calcularEvaluacionVar();
          this.mostrarContadorV = index; // Muestra el contador en la imagen seleccionada
          this.respuestaVar = funcionesV;
          this.CorrectaVar = true;
          return; // Termina aquí para evitar incrementar el contador
        }
  
        this.totalClicksV++; // Incrementa el contador global
        this.mostrarContadorV = index; // Muestra el contador en la imagen seleccionada
        this.respuestaVar = funcionesV;
        this.CorrectaVar = funcionesV === 'Funcion 5';
  
        if (this.totalClicksV >= this.maxClicksV) {
          this.isBlockedV = true; 
          this.evaluacionV = 1; // Asegura que se evalúe como 1
          return;
        }
  
        if (!this.CorrectaVar) {
          this.mensajeErrorVar = this.obtenerMensajeErrorVar();
        }
      },
  
      calcularEvaluacionVar() {
        if (this.totalClicksV === 0) {
          this.evaluacionV = 5;
        } else if (this.totalClicksV === 1) {
          this.evaluacionV = 4;
        } else if (this.totalClicksV === 2) {
          this.evaluacionV = 3;
        } 
      },
  
      obtenerMensajeErrorVar() {
        const randomIndex = Math.floor(Math.random() * this.mensajesErrorVar.length);
        return this.mensajesErrorVar[randomIndex];
      },
  
      finish() {

        this.evaluacionStore.evaluacion = this.evaluacionTotal;

        router.push('/AlgoritmoConectarCables').then(() => {
          window.scrollTo(0, 0);
        });
      },

      checkAnswer() {
        if (this.BlockedVideo || this.totalClicksVideo >= this.maxClicksVideo) {
          return;
        }

        if (!this.selectedVideo) {
          this.feedbackMessage = "Debes seleccionar un video antes de enviar la respuesta.";
          this.feedbackClass = "error-message";
          return;
        }

        if (this.selectedVideo.src === Video1) {
          this.BlockedVideo = true;
          this.calcularEvaluacionVideo();
          this.feedbackMessage = "¡Correcto! Seleccionaste el video adecuado.";
          this.feedbackClass = "success-message";
          this.correctVideoIndex = true;
        } else {
          this.totalClicksVideo++;
          this.feedbackMessage = this.obtenerMensajeErrorVideo();
          this.feedbackClass = "error-message";

          if (this.totalClicksVideo >= this.maxClicksVideo) {
            this.BlockedVideo = true;
            this.evaluacionVideo = 1; // Puntuación mínima
          }
        }
      },

      obtenerMensajeErrorVideo() {
        const randomIndex = Math.floor(Math.random() * this.mensajesErrorVideo.length);
        return this.mensajesErrorVideo[randomIndex];
      },


      calcularEvaluacionVideo() {
        if (this.totalClicksVideo === 0) {
          this.evaluacionVideo = 5;
        } else if (this.totalClicksVideo === 1) {
          this.evaluacionVideo = 4;
        } else if (this.totalClicksVideo === 2) {
          this.evaluacionVideo = 3;
        } 
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
    width: 250px; /* Ajusta el tamaño de la imagen */
    height: 250px; /* Ajusta el tamaño de la imagen */
    object-fit: cover; /* Asegura que la imagen mantenga su proporción dentro del contenedor */
  }
  .respuesta {
    margin-top: 20px;
  }
  
  .contador-imagen {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
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
  
.evaluacion-final {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

.video-selection {
  text-align: center;
}

.videos-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.video-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.option {
  margin-top: 10px;
}

.success-message {
  color: green;
  font-weight: bold;
}

.error-message {
  color: red;
  font-weight: bold;
}
  
  </style>
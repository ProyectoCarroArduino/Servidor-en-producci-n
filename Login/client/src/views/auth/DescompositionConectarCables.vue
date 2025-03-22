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
        <h2>Selecciona el video correcto</h2>
        <br>
        <br>
        <div class="videos-container">
          <div v-for="(video, index) in videos" :key="index" class="video-item">
            <video width="320" height="180" controls>
              <source :src="video.src" type="video/mp4">
              Tu navegador no soporta la reproducción de videos.
            </video>
            <div class="option">
              <input 
                type="radio" 
                :id="'video' + index" 
                :value="index" 
                v-model="selectedVideo"
              />
              <label :for="'video' + index">Seleccionar</label>
            </div>
          </div>
        </div>
        <br>
        <button class="btn-check" @click="checkAnswer">Validar</button>
        <p v-if="feedbackMessage" :class="feedbackClass">{{ feedbackMessage }}</p>
      </div>
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
          <p class="alert alert-info">Tu evaluación es: {{ evaluacionV }}</p>
        </div>
        <br>
        <div>
          <br>
          <br>
          <Llamada @evaluacionLlamada="actualizarEvaluacionLlamada" />
          <Estructura @evaluacionEstructura="actualizarEvaluacionEstructura"/>
        </div>
        <div>
          <br>
          <br>
        </div>
        <br>
        <div v-if="puedeAvanzar" class="evaluacion-final">
          <p class="alert alert-primary">
            Evaluación total: {{ evaluacionTotal.toFixed(1) }}
          </p>
        </div>
        <br>
        <NotaDeEjercicio1 :total="evaluacionTotal" />
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
  import NotaDeEjercicio1 from './NotaDeEjercicio1.vue';
  import router from '@/router'
  import MenuCarro from "../../components/MenuCarro.vue";
  import Llamada from "../../components/LlamadaFunction.vue";
  import Estructura from "../../components/EstructuraFunction.vue";
  import Funcion1 from '@/assets/FuncionesSinparImages/Funciones 1.png';
  import Funcion2 from '@/assets/FuncionesSinparImages/Funciones 2.png';
  import Funcion3 from '@/assets/FuncionesSinparImages/Funciones 3.png';
  import Funcion4 from '@/assets/FuncionesSinparImages/Funciones 4.png';
  import Funcion5 from '@/assets/FuncionesSinparImages/Funciones 5.png';
  import Funcion6 from '@/assets/FuncionesSinparImages/Funciones 6.png';
  import Funcion7 from '@/assets/FuncionesSinparImages/Funciones 7.png';
  import Funcion8 from '@/assets/FuncionesSinparImages/Funciones 8.png';
  import Video1 from '@/assets/VideosConectarCables/Video 1.mp4';
  import Video2 from '@/assets/VideosConectarCables/Video 2.mp4';
  import Video3 from '@/assets/VideosConectarCables/Video 3.mp4';

  
  export default {
    name: 'App',
  
    components: {
      MenuCarro,
      Llamada,
      Estructura,
      NotaDeEjercicio1,
    },
  
    data() {
      return {
        funciones: [
          { src: Funcion1, alt: 'Funcion 1' },
          { src: Funcion2, alt: 'Funcion 2' },
          { src: Funcion3, alt: 'Funcion 3' },
          { src: Funcion4, alt: 'Funcion 4' },
        ].sort(() => Math.random() - 0.5),
  
        funcionesV: [
          { src: Funcion5, alt: 'Funcion 5' },
          { src: Funcion6, alt: 'Funcion 6' },
          { src: Funcion7, alt: 'Funcion 7' },
          { src: Funcion8, alt: 'Funcion 8' },
        ].sort(() => Math.random() - 0.5),
  
  
        respuesta: null,
        esCorrecta: false,
        mensajeError: '',
        mensajesError: [
          '¡Error! Selecciona la imagen que tenga sentido con lo solicitado, pero ten presente la teoria sobre: funciones (sin parámetros) en la parte de estructura de una función',
          '¡Error! Identifica la imagen correcta que tiene la estructura necesaría',
          '¡Error! Intenta tener en cuenta que la imagen seleccionada debe de resolver el problema dado',
          '¡Error! Recuerda que debes de seleccionar la imagen que concuerde con la función prototipo que resuelva el problema',
        ],
        
        respuestaCorrecta: 'Funcion 1',
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
        totalClicks: 0,
        totalClicksV: 0,
        maxClicks: 3,
        maxClicksV: 3,
        mostrarContador: null,
        mostrarContadorV: null,
        isBlocked: false,
        isBlockedV: false,
        evaluacion: null,
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
      feedbackClass: ""
      };
      
      },

      created() {
        this.correctVideoIndex = this.videos.findIndex(video => video.src === Video1);
      },
  
      computed: {
      // Propiedad computada para habilitar o deshabilitar el botón
      puedeAvanzar() {
        return (
          this.evaluacion !== null &&
          this.evaluacionV !== null &&
          this.evaluacionLlamada !== null && // Incluye la evaluación de Llamada
          this.evaluacionEstructura !== null
        );
      },
  
      evaluacionTotal() {
        const total =
          (this.evaluacion ?? 0) +
          (this.evaluacionV ?? 0) +
          (this.evaluacionLlamada ?? 0) +
          (this.evaluacionEstructura ?? 0);
  
        return total / 4; // Dividimos entre el total de actividades
      },
    },
  
    methods: {
      manejarClick(funcion, index) {
        if (this.isBlocked || this.totalClicks >= this.maxClicks) {
          return; // Bloquea clics adicionales si se alcanzó el límite o la respuesta es correcta
        }
  
        const funcionSeleccionada = this.funciones[index].alt;
        
        if (funcionSeleccionada === this.respuestaCorrecta) {
          this.isBlocked = true; // Bloquea clics adicionales
          this.calcularEvaluacion();
          this.mostrarContador = index; // Muestra el contador en la imagen seleccionada
          this.respuesta = funcion;
          this.esCorrecta = true;
          return; // Termina aquí para evitar incrementar el contador
        }
  
        this.totalClicks++; // Incrementa el contador global
        this.mostrarContador = index; // Muestra el contador en la imagen seleccionada
        this.respuesta = funcion;
        this.esCorrecta = funcion === 'Funcion 1';
  
        if (this.totalClicks >= this.maxClicks) {
          this.isBlocked = true; 
          this.evaluacion = 1; // Asegura que se evalúe como 0
          return;
        }
  
        if (!this.esCorrecta) {
          this.mensajeError = this.obtenerMensajeError();
        }
      },
  
      calcularEvaluacion() {
        if (this.totalClicks === 0) {
          this.evaluacion = 5;
        } else if (this.totalClicks === 1) {
          this.evaluacion = 4;
        } else if (this.totalClicks === 2) {
          this.evaluacion = 3;
        } 
      },
  
      obtenerMensajeError() {
        const randomIndex = Math.floor(Math.random() * this.mensajesError.length);
        return this.mensajesError[randomIndex];
      },
  
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
          this.evaluacionV = 1; // Asegura que se evalúe como 0
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
  
      actualizarEvaluacionLlamada(evaluacion) {
        this.evaluacionLlamada = evaluacion;
      },
  
      actualizarEvaluacionEstructura(evaluacion) {
        this.evaluacionEstructura = evaluacion;
      },
  
      finish() {
        router.push('/AlgoritmoConectarCables').then(() => {
          window.scrollTo(0, 0);
        });
      },

      checkAnswer() {
        if (this.selectedVideo === null) {
          this.feedbackMessage = "Por favor, selecciona un video.";
          this.feedbackClass = "error-message";
        } else if (this.selectedVideo === this.correctVideoIndex) {
          this.feedbackMessage = "¡Correcto! Has seleccionado el video adecuado.";
          this.feedbackClass = "success-message";
        } else {
          this.feedbackMessage = "Incorrecto, intenta de nuevo.";
          this.feedbackClass = "error-message";
        }
      },
  
    },
  
  
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

.btn-check {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-check:hover {
  background-color: #0056b3;
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
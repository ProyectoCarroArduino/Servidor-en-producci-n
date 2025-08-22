<template>
  <div id="user">
    <div class="card card-body mt-8 align-left col-md-15">
      <h1 class="text-center">Paso 2. Ensamblar soportes de los motorreductores al chasis</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el ajuste de un soporte para motorreductor al chasis. 
        Para ello se debe tener en cuenta que para atornillar el soporte <strong>se necesitan exactamente dos tornillos y dos tuercas</strong>, y que cada tornillo debe tener una tuerca correspondiente para ser ajustada.
        El programa deberá <strong>solicitar al usuario</strong> el número de tornillos y tuercas que se necesitan para ajustar el soporte. Finalmente, el programa deberá <strong>imprimir</strong>
        cuántas veces se ha atornillado un tornillo y se ha ajustado una tuerca.</p>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Los tornillos y tuercas deben ser variables del tipo entero (int).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo int llamada "ajustarSoporte" que reciba el número de tornillos y tuercas como parámetros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Validar que el número de tuercas y tornillos sea exactamente dos (2), si no es así imprimir el siguiente mensaje: "Error: debe ingresar exactamente 2 tornillos y 2 tuercas".</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo (for) que itere, y en cada iteración atornille un tornillo y ajuste una tuerca.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>En cada iteración, imprimir el siguiente mensaje: "Se ha atornillado n tornillo(s) y ajustado n tuerca(s)". Entiéndase (n) como el número de veces que se ha realizado el proceso.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final el programa deberá imprimir el número de veces que se ha atornillado un tornillo y se ha ajustado una tuerca.</strong></p></li>
        </ul>
      <hr class="my-4" />
      <br>
      <!-- Intentos de Video -->
      <p v-if="intentosDisponiblesVideo !== null" class="alert alert-info">
        Intentos video restantes: {{ intentosDisponiblesVideo }}
      </p>
      <br>
      <!-- Video -->
      <h3>Descomposición - Sub. Video</h3>
      <p class="texto-personalizado">Selecciona el video que muestra el ensamblaje del motorredcutor al chasis:</p>
      <br>
      <div class="videos-container">
        <div v-for="(video, index) in videos" :key="index" class="video-item">
          <iframe
            width="300"
            height="200"
            :src="video.src"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          <div class="option">
            <input type="radio" :id="`video${index}`" :value="video" v-model="selectedVideo" />
            <label :for="`video${index}`">Seleccionar</label>
          </div>
        </div>
      </div>
      <br>
      <button @click="checkAnswer" class="btn btn-primary mt-2">Submit</button>

      <div v-if="feedbackMessage" class="respuesta">
        <p :class="{
          'correcto alert alert-success mt-3': correctVideoIndex,
          'incorrecto alert alert-danger mt-3': !correctVideoIndex
        }">{{ feedbackMessage }}</p>
      </div>

      <div v-if="evaluacionVideo !== null" class="correcto">
        <p class="alert" :class="{
          'alert-danger': evaluacionVideo === 1,
          'alert-success': evaluacionVideo >= 3 && evaluacionVideo <= 5
        }">Tu evaluación (video): {{ evaluacionVideo }}</p>
      </div>
      <br>
      <hr class="my-4" />
      <br>
      <!-- Intentos de Imagen -->
      <p v-if="intentosDisponiblesImagen !== null" class="alert alert-info">
        Intentos imagen restantes: {{ intentosDisponiblesImagen }}
      </p>
      <br>
      <!-- Imagen -->
      <h3>Descomposición - Sub. Imagen</h3>
      <p class="texto-personalizado">Selecciona la imagen correcta que muestra la simulación hecha en TinkerCAD del soporte para motorreductor que tiene dos espacios para atornillar:</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El soporte correcto es <strong>similar</strong> al mostrado en los materiales necesarios para realizar este paso.</p>
      <br>
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
            {{ intentosDisponiblesImagen - totalClicksV }}
          </div>
          <img :src="funcion.src" :alt="funcion.alt"
               :style="{ pointerEvents: isBlockedV ? 'none' : 'auto', opacity: isBlockedV ? 0.5 : 1 }" />
        </div>
      </div>

      <!-- Resultado parcial imagen -->
      <div v-if="respuestaVar" class="respuesta">
        <p v-if="CorrectaVar" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-else class="incorrecto alert alert-danger mt-3">{{ mensajeErrorVar }}</p>
      </div>

      <!-- Nota imagen -->
      <div v-if="evaluacionV !== null" class="correcto">
        <p class="alert" :class="{
          'alert-danger': evaluacionV === 1,
          'alert-success': evaluacionV >= 3 && evaluacionV <= 5
        }">Tu evaluación (imagen): {{ evaluacionV }}</p>
      </div>

      <!-- Retroalimentación opcional -->
      <div v-if="isBlockedV" class="alert alert-info mt-3">
        Evaluación del subejercicio de imagen registrada.
      </div>
      <br>
      <hr class="my-4" />

      <!-- Evaluación combinada -->
      <div v-if="puedeAvanzar" class="evaluacion-final">
        <p class="alert alert-primary">
          Evaluación total: {{ evaluacionTotal.toFixed(1) }}
        </p>
      </div>

      <p class="alert alert-primary">
        Evaluación Descomposición: {{ evaluacionStore.evaluacion.toFixed(1) }}
      </p>

      <!-- Botón avanzar solo si ambas evaluaciones están completas -->
      <button
        class="bt-validate"
        @click="finish"
        :disabled="evaluacionV === null || evaluacionVideo === null"
      >
        Avanzar
      </button>
    </div>

    <!-- Menú lateral -->
    <div class="align-left col-md-3">
      <div class="temas">
        <MenuCarro />
      </div>
    </div>
  </div>
</template>




<script>
import router from '@/router';
import MenuCarro from "@/components/MenuCarro.vue";
import Funcion5 from '@/assets/ImagenesEnsamblarSoportesMotorreductores/Soporte1.png';
import Funcion6 from '@/assets/ImagenesEnsamblarSoportesMotorreductores/Soporte2.png';
import Funcion7 from '@/assets/ImagenesEnsamblarSoportesMotorreductores/Soporte3.png';
import Funcion8 from '@/assets/ImagenesEnsamblarSoportesMotorreductores/Soporte4.png';
import { onMounted, reactive, toRefs } from 'vue';
import { useEvaluacionStore } from '@/stores/evaluation';
import { useEvaluacionSubejercicio } from '@/composables/useEvaluacionSubejercicio';

  export default {
    name: 'App',
    components: {
      MenuCarro,
    },

    
setup() {
  const evaluacionStore = useEvaluacionStore();

  // Sub. Imagen - Descomposición
  const evaluacionImagenRaw = reactive(useEvaluacionSubejercicio({
    cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
    modulo: '1. Fase de ensamblaje',
    submodulo: '1.2 Conectar soportes de los motoreductores al chasis',
    ejercicio: 'Ejercicio 1',
    categoria: 'descomposicion',
    subejercicio: 'Subejercicio 1'
  }));

  const evaluacionVideoRaw = reactive(useEvaluacionSubejercicio({
    cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
    modulo: '1. Fase de ensamblaje',
    submodulo: '1.2 Conectar soportes de los motoreductores al chasis',
    ejercicio: 'Ejercicio 1',
    categoria: 'descomposicion',
    subejercicio: 'Subejercicio 2'
  }));

  // Exponer refs y funciones
  const evaluacionImagen = {
    ...toRefs(evaluacionImagenRaw),
    registrarEvaluacion: evaluacionImagenRaw.registrarEvaluacion,
    obtenerIntentos: evaluacionImagenRaw.obtenerIntentos
  };

  const evaluacionVideo = {
    ...toRefs(evaluacionVideoRaw),
    registrarEvaluacion: evaluacionVideoRaw.registrarEvaluacion,
    obtenerIntentos: evaluacionVideoRaw.obtenerIntentos
  };

  // Ejecutar obtención de estado al montar
  onMounted(() => {
    console.log('Mounted ejecutado');
    evaluacionImagen.obtenerIntentos();
    evaluacionVideo.obtenerIntentos();
  });

  return {
    evaluacionStore,

    // Imagen
    intentosDisponiblesImagen: evaluacionImagen.intentosRestantes,
    obtenerIntentosImagen: evaluacionImagen.obtenerIntentos,
    registrarEvaluacionImagen: evaluacionImagen.registrarEvaluacion,

    // Video
    intentosDisponiblesVideo: evaluacionVideo.intentosRestantes,
    obtenerIntentosVideo: evaluacionVideo.obtenerIntentos,
    registrarEvaluacionVideo: evaluacionVideo.registrarEvaluacion,
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

        respuestaCorrectaV: 'Funcion 5',
        totalClicksV: 0,
        mostrarContadorV: null,
        isBlockedV: false,
        respuestaVar: null,
        CorrectaVar: false,
        evaluacionV: null,
        mensajeErrorVar: '',
        mensajesErrorVar: [
          '¡Error! Recuerda que debes de seleccionar la imagen donde se evidencie que el soporte tiene dos espacios para atornillar.',
          '¡Error! Debes seleccionar la imagen que simula el soporte para motorreductor y que además tenga dos espacios para atornillar. ',
          '¡Error! Intenta ir a la página de la teoria del paso a paso y ver la forma que tiene el soporte. ',
          '¡Error! Ten en cuenta que el soporte es similar al de la imagen de lod materiales necesarios del paso. '
          
        ],

        videos: [
          { src: "https://www.youtube.com/embed/VzUpCmrKC6E?si=gi4CtrxcZEAh4rc9", alt: 'Video 1' },
          { src: "https://www.youtube.com/embed/IhoLSJ6vEiQ?si=3v4HuaTQzpSKkmTp", alt: 'Video 2' },
          { src: "https://www.youtube.com/embed/--53vWBO79I?si=zQDIneq7dsRQ20fi", alt: 'Video 3' },
        ].sort(() => Math.random() - 0.5),

        selectedVideo: null,
        feedbackMessage: "",
        feedbackClass: "",
        BlockedVideo: null,
        totalClicksVideo: 0,
        evaluacionVideo: null,
        correctVideoIndex: null,
        mostrarContadorVideo: null,
        mensajesErrorVideo: [
          '¡Error! Recuerda que debes de seleccionar el video donde se evidencie el proceso de ajustamiento del soporte. ',
          '¡Error! Desbes tener en cuenta que para el ajuste del soporte se necesita tener dos tornillos y cada uno debe de tener una tuerca. ',
          '¡Error! Intenta revisar el video de la teoria del paso a paso y comprender en qué momento se empieza a ajustar el soporte.  ',
          '¡Error! El video es del paso a paso, pero no es el proceso de ajustar el soporte para motorreductor. '
        ]
      };
    },

    computed: {
      puedeAvanzar() {
        return this.evaluacionV !== null && this.evaluacionVideo !== null;
      },
      evaluacionTotal() {
        const total = (this.evaluacionV ?? 0) + (this.evaluacionVideo ?? 0);
        return total / 2;
      }
    },

    methods: {
  // --- Subejercicio de Imagen ---
  async manejarClickVar(funcionSeleccionada, index) {
  if (this.intentosDisponiblesImagen <= 0) return;

  this.mostrarContadorV = index;
  this.respuestaVar = funcionSeleccionada;

  if (funcionSeleccionada === this.respuestaCorrectaV) {
    this.CorrectaVar = true;
  } else {
    this.totalClicksV++;
    this.CorrectaVar = false;
    this.mensajeErrorVar = this.obtenerMensajeErrorVar();
  }

  this.calcularEvaluacionVar();

  try {
    await this.registrarEvaluacionImagen(this.evaluacionV);
    await this.obtenerIntentosImagen();

    // Solo bloquear si ya no quedan intentos
    if (this.intentosDisponiblesImagen <= 0) {
      this.isBlockedV = true;
    }

    console.log("Imagen evaluada y estado actualizado");
  } catch (err) {
    console.error("Error registrando evaluación imagen:", err);
    alert("Hubo un problema al guardar la evaluación de imagen.");
  }
}
,

  calcularEvaluacionVar() {
    const intentos = this.totalClicksV;
    this.evaluacionV = intentos === 0 ? 5 : intentos === 1 ? 4 : 3;
  },

  obtenerMensajeErrorVar() {
    const i = Math.floor(Math.random() * this.mensajesErrorVar.length);
    return this.mensajesErrorVar[i];
  },

  // --- Subejercicio de Video ---
  async checkAnswer() {
  if (this.intentosDisponiblesVideo <= 0) return;

  if (!this.selectedVideo) {
    this.feedbackMessage = "Debes seleccionar un video antes de enviar la respuesta.";
    this.feedbackClass = "error-message";
    return;
  }

  if (this.selectedVideo.src === "https://www.youtube.com/embed/VzUpCmrKC6E?si=gi4CtrxcZEAh4rc9") {
    this.correctVideoIndex = true;
    this.feedbackMessage = "¡Correcto! Seleccionaste el video adecuado.";
    this.feedbackClass = "success-message";
    this.calcularEvaluacionVideo();
  } else {
    this.totalClicksVideo++;
    this.correctVideoIndex = false;
    this.feedbackMessage = this.obtenerMensajeErrorVideo();
    this.feedbackClass = "error-message";

    if (this.totalClicksVideo >= this.intentosDisponiblesVideo) {
      this.evaluacionVideo = 1;
    } else {
      this.calcularEvaluacionVideo();
    }
  }

  try {
    await this.registrarEvaluacionVideo(this.evaluacionVideo);
    await this.obtenerIntentosVideo();

    // Solo bloquear si ya no quedan intentos
    if (this.intentosDisponiblesVideo <= 0) {
      this.BlockedVideo = true;
    }

    console.log("✔ Video evaluado y estado actualizado");
  } catch (err) {
    console.error("Error registrando evaluación video:", err);
    alert("Hubo un problema al guardar la evaluación del video.");
  }
},

  calcularEvaluacionVideo() {
    const intentos = this.totalClicksVideo;
    this.evaluacionVideo = intentos === 0 ? 5 : intentos === 1 ? 4 : 3;
  },

  obtenerMensajeErrorVideo() {
    const i = Math.floor(Math.random() * this.mensajesErrorVideo.length);
    return this.mensajesErrorVideo[i];
  },

  // --- Finalizar ---
  async finish() {
    if (this.evaluacionV === null || this.evaluacionVideo === null) {
      alert("Debes completar ambas evaluaciones antes de avanzar.");
      return;
    }

    const notaFinal = (this.evaluacionV + this.evaluacionVideo) / 2;
    this.evaluacionStore.evaluacion = notaFinal;

    this.$router.push('/AlgoritmoEnsamblarSoportesMotorreductores').then(() => {
      window.scrollTo(0, 0);
    });
  }
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
    display: hidden;
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
    object-fit: contain; /* Asegura que la imagen mantenga su proporción dentro del contenedor */
    background-color: white;
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
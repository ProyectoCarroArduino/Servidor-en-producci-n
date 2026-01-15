<template>
  <div id="layout-general">
    <main class="contenido">
        <h1 class="text-center">Paso 1. Conectar fuente de energía al interruptor de 4 pines</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule el proceso de conexión de dos cables de color rojo al interruptor de 4 pines, esto se hace con el fin de <strong>alimentar el interruptor con energía</strong>. 
        Es importante tener en cuenta que el interruptor tiene <strong>4 pines</strong>, de los cuales 2 son de entrada, que reciben la energía, y los otros dos son de salida. Los cables rojos <strong>solo pueden</strong> ir conectados a los pines de entrada. 
        <strong>El orden de los pines es el siguiente</strong>:</p>
      <ul>
          <li><p class="texto-personalizado"> <strong>1: Pin 1 (entrada).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>2: Pin 2 (entrada).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>3. Pin 3 (salida).</strong></p></li>
          <li><p class="texto-personalizado"> <strong>4. Pin 4 (salida).</strong></p></li>
      </ul>
      <p class="texto-personalizado">El programa <strong>deberá solicitar</strong> al usuario los pines del (1 - 4) a los cuales quiere conectar los cables. Se <strong>debe validar</strong> que los cables estén conectados a los pines de entrada, de lo contrario imprimir el mensaje: "Debe haber un cable en el pin 1 y otro en el pin 2.".
         Si se conectan los cables a los pines 3 y 4 se debe imprimir el siguiente mensaje: "No se permiten cables en los pines 3 y 4.". </p>
      <p class="texto-personalizado">Al final, si se cumple la validación para que el interruptor funcione correctamente, el programa <strong>deberá imprimir</strong> el siguiente mensaje: "¡Conexion correcta!".</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función prototipo de tipo entero (int) llamada interruptor4Pines.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo entero (int) llamada interruptor4Pines, la cual deberá recibir los pines a los cuales el usuario ha decidido conectar los cables rojos y, también debe validar que los cables estén conectados a sus respectivos pines .</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una matriz de tipo entero (int) interruptor[4][2].</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar un ciclo que solicite al usuario en qué pines quiere conectar los cables.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que los pines de entrada (1 y 2) tengan conectados un cable. Para ello, hacer uso del ciclo para recorrer la matriz. </strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una validación que verifique que los pines de salida (3 y 4) no tengan conectados ninguno de los cables. Para ello, hacer uso del ciclo para recorrer la matriz.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar una variable de tipo entero llamada suma, la cual permita validar si los pines (3 y 4) tienen conectado un cable, si si lo tienen retornar 0, pero si los pines (1 y 2) tienen conectado un cable retornar 1.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si la validación de que hay cables conectados a los pines 3 y 4 es correcta se debe imprimir el siguiente mensaje: "No se permiten cables en los pines 3 y 4.".</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, si se cumple la validación para que el interruptor funcione correctamente, el programa deberá imprimir el siguiente mensaje: "¡Conexion correcta!".</strong></p></li>
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
      <p class="texto-personalizado">Selecciona el video que muestra el proceso de conexión (soldar) los cables de la bornera tipo hembra al interruptor de 4 pines:</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El video del proceso <strong>solo debe contener</strong> la parte en la cual se ubica (solda) los cables al interruptor de 4 pines.</p>
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
      <button @click="checkAnswer" class="btn btn-primary w-100 mt-2 d-block mx-auto">Enviar</button>

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
      <p class="texto-personalizado">Selecciona la imagen correcta que muestra la simulación hecha en Fritzing de la conexión de la fuente de energia (poder) al interruptor de 4 pines:</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> La imagen correcta debe <strong>contener</strong> la conexión de los cables de la bornera tipo hembra al interruptor. 
      Sin embargo, se debe respetar las conexiones que la bornera tiene.</p>
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
    </main>

    <!-- Menú lateral -->
    <aside class="menu-lateral">
      <div>
        <MenuCarro />
      </div>
    </aside>
  </div>
</template>




<script>
import router from '@/router';
import MenuCarro from "@/components/MenuCarro.vue";
import Funcion5 from '@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Simulacion1.png';
import Funcion6 from '@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Simulacion2.png';
import Funcion7 from '@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Simulacion3.png';
import Funcion8 from '@/assets/ImagenesConectarFuenteEnergiaInterruptor4Pines/Simulacion4.png';
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
    modulo: '5. Fase de conectar interruptor de cuatro (4) pines',
    submodulo: '5.1 Conectar fuente de poder al interruptor de 4 pines:',
    ejercicio: 'Ejercicio 1',
    categoria: 'descomposicion',
    subejercicio: 'Subejercicio 1'
  }));

  const evaluacionVideoRaw = reactive(useEvaluacionSubejercicio({
    cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
    modulo: '5. Fase de conectar interruptor de cuatro (4) pines',
    submodulo: '5.1 Conectar fuente de poder al interruptor de 4 pines:',
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
          { src: "https://www.youtube.com/embed/CtWPAx3ElFE?si=nTuQf1mrG_lRgvmh", alt: 'Video 1' },
          { src: "https://www.youtube.com/embed/KjwrWdDjcR8?si=27k2c9B_ah619BU8", alt: 'Video 2' },
          { src: "https://www.youtube.com/embed/EMf0bO1n5l4?si=AvFXvCrTEb4__Zf_", alt: 'Video 3' },
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

  if (this.selectedVideo.src === "https://www.youtube.com/embed/CtWPAx3ElFE?si=nTuQf1mrG_lRgvmh") {
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

    this.$router.push('/AlgoritmoConectarFuenteEnergiaInterruptor4Pines').then(() => {
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

    .layout-general {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin: 0 auto; /* centra horizontalmente */
  box-sizing: border-box;
  gap: 2rem;
  }

/* Contenido principal */
.contenido {
  flex: 1; /* Ocupa el resto del espacio disponible */
  min-width: 0; /* evita overflow horizontal */
  max-width: 82%; /* Ajusta este valor según quieras */
  overflow-x: hidden;
  }

/* Menú lateral */
.menu-lateral {
  flex: 0 0 280px;
  background-color: transparent;
  border-radius: 10px;
  padding: 1rem;
  position: sticky;
  top: 20px;
  height: fit-content;
  }

  /* Versión responsive */
@media (max-width: 992px) {
  .layout-general {
    flex-direction: column;
    align-items: center;
  }

  .contenido {
    flex: 1;
    max-width: 120%;
  }
  .menu-lateral {
    max-width: 100%;
  }

  .menu-lateral {
    position: relative; /* deja de ser sticky en móviles */
    top: 0;
  }

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
    width: 500px; /* Ajusta el tamaño de la imagen */
    height: 500px; /* Ajusta el tamaño de la imagen */
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
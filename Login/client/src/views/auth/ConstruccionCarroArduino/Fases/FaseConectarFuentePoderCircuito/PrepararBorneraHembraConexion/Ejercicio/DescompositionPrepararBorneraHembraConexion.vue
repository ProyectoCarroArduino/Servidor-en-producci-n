<template>
  <div id="layout-general">
    <main class="contenido">
      <h1 class="text-center">Paso 2. Preparar la bornera tipo hembra para conexión</h1>
      <br>
      <br>
      <h2>Ejercicio:</h2>
      <br>
      <p class="texto-personalizado">Se necesita un programa en C que simule la conexión de cuatro cables jumper tipo macho hembra a una bornera tipo hembra. Dos cables son <strong>rojos</strong> y otros dos son <strong>negros</strong>. La bornera tipo hembra tiene <strong>dos pines</strong>, 
        uno <strong>positivo</strong> para la conexión a la fuente de poder y el otro <strong>negativo</strong> para el polo a tierra.</p>
      <p class="texto-personalizado">El programa <strong>deberá asignar</strong> dos cables de color <strong>rojo</strong> y otros dos de color <strong>negro</strong>. Para la conexión correcta de los cables a los pines de la bornera tipo hembra, se debe <strong>validar</strong> 
      que el pin positivo tenga conectado <strong>dos cables rojos</strong> y el pin negativo <strong>dos cables de color negro</strong>, de lo contrario imprimir el mensaje: “Los cables no están bien conectados”.</p>
      <p class="texto-personalizado">Al final el programa <strong>deberá imprimir</strong> qué cables están conectados al pin positivo y al pin negativo.</p>
      <br>
      <br>
      <p class="texto-personalizado"><strong>Requisitos:</strong></p>
      <ul>
          <li><p class="texto-personalizado"> <strong>Debe implementarse una función tipo void llamada borneraHembra, la cual deberá recibir cuatro cables, debe validar que el pin positivo tenga conectado dos cables rojos y el pin negativo tenga conectados dos cables negros.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Implementar cuatro variables de tipo cadena de carácter llamadas cableR1, cableR2, cableN1 y cableN2.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin positivo de la bornera hembra tiene conectados cables diferentes al rojo imprimir el mensaje de error: “Los cables conectados al pin positivo deben ser de color rojo”.</strong></p></li>
          <li><p class="texto-personalizado"> <strong>Si el pin negativo de la bornera hembra tiene conectados cables diferentes al negro imprimir el mensaje de error: “Los cables conectados al pin negativo debe ser de color negro”. </strong></p></li>
          <li><p class="texto-personalizado"> <strong>Al final, el programa deberá imprimir qué cables están conectados al pin positivo y al pin negativo, pero solo si los cables son los correctos para el funcionamiento, de lo contrario imprimir el mensaje: “Los cables no están conectados a sus respectivos pines”.</strong></p></li>
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
      <p class="texto-personalizado">Selecciona el video que muestra la conexión de los cuatro cables tipo jumper macho hembra a la bornera de tipo hembra:</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> El video del montaje <strong>solo debe contener</strong> la parte en la cual se ingresan los cuatro cables a los pines de la <strong>bornera de tipo hembra</strong>.</p>
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
      <p class="texto-personalizado">Selecciona la imagen correcta que muestra la simulación hecha en Fritzing del resultado final de la conexión de los cuatro cables a la bornera de tipo hembra:</p>
      <br>
      <p style="padding-left: 20px;"><span style="font-weight: bold;">Nota:</span> La imagen correcta es <strong>similar</strong> a la conexión de los cuatro cables a la bornera tipo hembra.</p>
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
import Funcion5 from '@/assets/ImagenesPrepararBorneraHembraConexion/Simulacion1.png';
import Funcion6 from '@/assets/ImagenesPrepararBorneraHembraConexion/Simulacion2.png';
import Funcion7 from '@/assets/ImagenesPrepararBorneraHembraConexion/Simulacion3.png';
import Funcion8 from '@/assets/ImagenesPrepararBorneraHembraConexion/Simulacion4.png';
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
    modulo: '3. Fase de Conectar fuente de poder al circuito',
    submodulo: '3.2 Preparar la bornera hembra para conexión:',
    ejercicio: 'Ejercicio 1',
    categoria: 'descomposicion',
    subejercicio: 'Subejercicio 1'
  }));

  const evaluacionVideoRaw = reactive(useEvaluacionSubejercicio({
    cursoNombre: 'Guía Construcción Carro Arduino', // Añadido
    modulo: '3. Fase de Conectar fuente de poder al circuito',
    submodulo: '3.2 Preparar la bornera hembra para conexión:',
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
          { src: "https://www.youtube.com/embed/7rS4J514ymw?si=h4EFFELPVbE-DZsU", alt: 'Video 1' },
          { src: "https://www.youtube.com/embed/DNLMXbudMws?si=Pw96JeZ-1Fbr4sG-", alt: 'Video 2' },
          { src: "https://www.youtube.com/embed/i3776bsk_Wg?si=dQwg67nG3LKN-tRj", alt: 'Video 3' },
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

  if (this.selectedVideo.src === "https://www.youtube.com/embed/7rS4J514ymw?si=h4EFFELPVbE-DZsU") {
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

    this.$router.push('/AlgoritmoPrepararBorneraHembraConexion').then(() => {
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
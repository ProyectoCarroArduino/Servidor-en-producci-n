<template>
    <div>
      <h4 class="texto-personalizado">Ordene las líneas que van dentro del else de la validación, desde el primer if hasta el mensaje del fin de semana (no se incluyen las llaves que cierran solas):</h4>
      <br>
      <div>
        <div ref="parent" class="grid gray-background">
          <article
            v-for="tape in tapes"
            :key="tape"
            class="bg-blue text-white rounded-full p-4 flex items-center justify-center"
          >
            <p>{{ tape }}</p>
          </article>
        </div>
        <br>
        <EstadoSubejercicio :estado="ev3" />
        <br>
        <button
          class="ec-btn ec-btn-primary"
          @click="verificarOrden"
          :disabled="!puedeResponder(ev3)"
        >
          <span v-if="ev3.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
          Verificar Orden
        </button>
        <br>
        <p
          v-if="ordenCorrecto === true"
          class="correcto alert alert-success mt-3"
        >
          ¡Orden correcto!
        </p>
        <p
          v-if="ordenCorrecto === false"
          class="incorrecto alert alert-danger mt-3"
        >
          {{ mensajeError }}
        </p>
      </div>
      <br>
      <br>
    </div>
  </template>
  
  <script>
  import { animations } from "@formkit/drag-and-drop";
  import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
  import { reactive, onMounted, watch } from "vue";
  import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";
  import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";


  // Debe coincidir EXACTAMENTE con los nombres de la plantilla del curso
  // (ver server/seedCourseTemplate.js).
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '5. Estructuras de control y repetición',
  submodulo: '5.1 Estructuras de control (if else)',
  ejercicio: 'Ejercicio 3',
  categoria: 'descomposicion'
};


  export default {
    name: 'DragAndDrop1Checker',

    components: { EstadoSubejercicio },

  // Avisa a la vista cuando el subejercicio queda cerrado (aprobado o sin intentos).
  emits: ['finalizado'],

    setup(props, { emit }) {
    const ev3 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: "Subejercicio 3" }));

    watch(() => ev3.bloqueado, (finalizado) => emit('finalizado', finalizado), { immediate: true });

    onMounted(() => {
      ev3.obtenerIntentos();
    });

    // DnD setup
    const [parent, tapes] = useDragAndDrop(
      ["if (edad < 12) {", "printf(\"Tarifa: Infantil\\n\");", "} else if (edad <= 17) {", "printf(\"Tarifa: Juvenil\\n\");", "} else {", "printf(\"Tarifa: General\\n\");", "if (dia == 6 || dia == 7) {", "printf(\"Dia: fin de semana\\n\");"].sort(() => Math.random() - 0.5),
      { plugins: [animations()] }
    );

    return {
      ev3,

      // Drag and drop
      parent,
      tapes,
    };
  },
  
    data() {
    return {
      ordenCorrecto: null,
      mensajeError: "",
      respuestasIncorrectas: [
        "¡Error! Las condiciones de la tarifa van de la edad menor a la mayor, en el orden del enunciado",
        "¡Error! Cada mensaje va justo después de la condición que lo produce",
        "¡Error! La decisión del día se toma después de terminar la de la tarifa",
        "¡Error! else if y else van después del if que inicia la cadena",
      ],
    };
  },

    methods: {
    // Compara contenido Y longitud: un Array.every() sobre una lista mas corta
    // que la esperada devuelve true.
    listasIguales(actual, esperado) {
      return (
        Array.isArray(actual) &&
        actual.length === esperado.length &&
        actual.every((item, i) => item === esperado[i])
      );
    },

    puedeResponder(ev) {
      return ev.estadoCargado && !ev.bloqueado && !ev.cargando;
    },

    obtenerMensajeAleatorio() {
      const i = Math.floor(Math.random() * this.respuestasIncorrectas.length);
      return this.respuestasIncorrectas[i];
    },

    async verificarOrden() {
      if (!this.puedeResponder(this.ev3)) return;

      const esCorrecto = this.listasIguales(this.tapes, ["if (edad < 12) {", "printf(\"Tarifa: Infantil\\n\");", "} else if (edad <= 17) {", "printf(\"Tarifa: Juvenil\\n\");", "} else {", "printf(\"Tarifa: General\\n\");", "if (dia == 6 || dia == 7) {", "printf(\"Dia: fin de semana\\n\");"]);
      this.ordenCorrecto = esCorrecto;
      if (!esCorrecto) {
        this.mensajeError = this.obtenerMensajeAleatorio();
      }

      // El servidor calcula la nota a partir de los intentos restantes.
      await this.ev3.registrarResultado(esCorrecto);
    },

  },
  
  };
  </script>
  
  <style scoped>
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 1rem; /* Espacio entre los elementos */
  }
  
  .flex {
    display: flex;
  }
  
  .flex-container {
    display: flex;
    gap: 1rem; /* Espacio entre los contenedores */
    align-items: center;
    justify-content: center;
  }
  
  .space-x-4 > * + * {
    margin-left: 1rem; /* Espacio horizontal entre elementos */
  }
  
  .bg-blue {
    background-color: hsla(135, 60%, 26%, 0.705);
  }
  
  .text-white {
    color: white;
  }
  
  .rounded-full {
    border-radius: 10px;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .correcto {
    font-size: 20px;
    color: green;
  }
  
  .incorrecto {
    font-size: 20px;
    color: red;
  }
  
  .texto-personalizado {
      font-family: Arial, sans-serif; /* Tipo de letra */
      font-size: 18px; /* Tamaño de fuente */
      text-align: justify; /* Alineación justificada */
  }
  
  </style> 
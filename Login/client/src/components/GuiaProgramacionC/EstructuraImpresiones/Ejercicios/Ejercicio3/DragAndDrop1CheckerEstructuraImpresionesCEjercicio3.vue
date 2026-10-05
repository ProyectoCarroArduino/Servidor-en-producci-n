<template>
    <div>
      <h4 class="texto-personalizado">Ordene las instrucciones del cuerpo de main y el cierre del programa:</h4>
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
          @click="verificarOrden"
          :disabled="!puedeResponder(ev3)"
          class="btn btn-primary"
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
  import { reactive, onMounted } from "vue";
  import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";
  import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";


  // Debe coincidir EXACTAMENTE con los nombres de la plantilla del curso
  // (ver server/seedCourseTemplate.js).
const RUTA = {
  cursoNombre: 'Guía Programación en C',
  modulo: '3. Estructutura de un programa e impresiones por pantalla',
  submodulo: '3.1 Estructutura de un programa e impresiones por pantalla',
  ejercicio: 'Ejercicio 3',
  categoria: 'descomposicion'
};


  export default {
    name: 'DragAndDrop1Checker',

    components: { EstadoSubejercicio },

    setup() {
    const ev3 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: "Subejercicio 3" }));

    onMounted(() => {
      ev3.obtenerIntentos();
    });

    // DnD setup
    const [parent, tapes] = useDragAndDrop(
      ["printf(\"==== FICHA DEL PROYECTO ====\\n\");", "printf(\"Archivo:\\tficha.c\\n\");", "printf(\"Carpeta:\\tC:\\\\Proyectos\\\\Guia\\n\");", "printf(\"Mensaje:\\t\\\"Compilado sin errores\\\"\\n\");", "printf(\"Consejo:\\t\");", "printf(\"Usa \\\\n \" \"para saltar de linea\\n\");", "return 0;", "}"].sort(() => Math.random() - 0.5),
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
        "¡Error! El título de la ficha se muestra antes que los datos",
        "¡Error! Revisa el orden de los datos: Archivo, Carpeta, Mensaje y Consejo",
        "¡Error! La línea Consejo: se arma con dos printf; el que lleva la tabulación va primero",
        "¡Error! return 0; y la llave de cierre van después del último printf",
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

      const esCorrecto = this.listasIguales(this.tapes, ["printf(\"==== FICHA DEL PROYECTO ====\\n\");", "printf(\"Archivo:\\tficha.c\\n\");", "printf(\"Carpeta:\\tC:\\\\Proyectos\\\\Guia\\n\");", "printf(\"Mensaje:\\t\\\"Compilado sin errores\\\"\\n\");", "printf(\"Consejo:\\t\");", "printf(\"Usa \\\\n \" \"para saltar de linea\\n\");", "return 0;", "}"]);
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
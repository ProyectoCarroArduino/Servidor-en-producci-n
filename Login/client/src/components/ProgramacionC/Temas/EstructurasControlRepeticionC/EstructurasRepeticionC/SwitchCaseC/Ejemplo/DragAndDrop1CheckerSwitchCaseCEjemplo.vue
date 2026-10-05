<template>
    <div>
      <h4 class="texto-personalizado">De acuerdo a la teoria sobre la estructura switch case, ordene de forma correcta
        los elementos para construir el caso:</h4>
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

        <br>
        <button
          @click="verificarOrden"
          >
          Verificar Orden
        </button>
        <br>
        <p v-if="ordenCorrecto === true" class="correcto alert alert-success mt-3">¡Correcto!</p>
        <p v-if="ordenCorrecto === false" class="incorrecto alert alert-danger mt-3">¡Incorrecto!</p>

      </div>
      <br>
      <br>
    </div>
  </template>
  
  <script>
import { animations } from '@formkit/drag-and-drop';
import { useDragAndDrop } from '@formkit/drag-and-drop/vue';
export default {
  name: 'DragAndDrop1Checker',

  data() {
    return {
      ordenCorrecto: null,
    };
  },

  methods: {
    verificarOrden() {
      const ordenEsperado = ['case 1:', 'bloque de instrucción (mensaje)', 'break;'];
      this.ordenCorrecto =
        this.tapes.length === ordenEsperado.length &&
        this.tapes.every((tape, index) => tape === ordenEsperado[index]);
      this.$emit('resultado', this.ordenCorrecto);
    },
  },

  setup() {
    const [parent, tapes] = useDragAndDrop(
      ['case 1:', 'bloque de instrucción (mensaje)', 'break;'].sort(() => Math.random() - 0.5),
      {
        plugins: [animations()],
      },
    );

    return {
      parent,
      tapes,
    };
  },

  emits: ['resultado'],
  watch: {
    tapes: {
      deep: true,
      handler() {
        this.ordenCorrecto = null;
        this.$emit('resultado', null);
      },
    },
  },
};
</script>
  
  <style scoped>
  
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem; /* Espacio entre los elementos */
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
    background-color: hsla(44, 85%, 29%, 0.705);
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
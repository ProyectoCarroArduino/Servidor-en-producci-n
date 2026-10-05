<template>
    <div>
      <h4 class="texto-personalizado">Ordene las partes de un programa en C de arriba hacia abajo:</h4>
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
          class="ec-btn ec-btn-primary"
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
      const ordenEsperado = [
        'Inclusión de bibliotecas: #include <stdio.h>',
        'Función principal: int main(void) {',
        'Cuerpo: los printf con los mensajes',
        'Fin del programa: return 0; }',
      ];
      this.ordenCorrecto =
        this.tapes.length === ordenEsperado.length &&
        this.tapes.every((tape, index) => tape === ordenEsperado[index]);
      this.$emit('resultado', this.ordenCorrecto);
    },
  },

  setup() {
    const [parent, tapes] = useDragAndDrop(
      [
        'Inclusión de bibliotecas: #include <stdio.h>',
        'Función principal: int main(void) {',
        'Cuerpo: los printf con los mensajes',
        'Fin del programa: return 0; }',
      ].sort(() => Math.random() - 0.5),
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
    background-color: hsl(260, 1%, 40%);
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
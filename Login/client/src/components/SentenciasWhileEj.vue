<template>
    <div>
      <h4 class="texto-personalizado">Seleccione el orden correcto del conjunto de instrucciones <strong>(sentencias)</strong> que se deben de usar en el problema:</h4>
      <p><span style="font-weight: bold;">Nota:</span> Considere si es necesario agregar el <strong>(contador)</strong> y la <strong>(función system pause)</strong> al cuadro gris de la derecha.</p>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> las <strong>sentencias</strong> deben ir en el cuadro a la derecha de color <strong>verde</strong> y el orden debe ser descendente.</p>
      <br>
      <div class="flex-container">
        <div ref="todoList" class="kanban-board kanban-column gray-background scrollable">
          <article
            v-for="todo in todos"
            :key="todo.id"
            class="kanban-item"
          >
            <span class="kanban-handle"></span>
            <p>{{ todo.text }}</p>
          </article>
        </div>
        <div ref="doneList" class="kanban-board kanban-column gray-background2 scrollable">
          <article
            v-for="done in dones"
            :key="done.id"
            class="kanban-item"
          >
            <span class="kanban-handle"></span>
            <p>{{ done.text }}</p>
          </article>
        </div>
      </div>
      <div v-if="resultadoValidacion === 'correcto'">
        <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
      </div>
      <div v-else-if="resultadoValidacion === 'incorrecto'">
        <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuesta }}</p>
      </div>
      <button @click="enviarOrden">Enviar Orden</button>
      <br>
      <br>
    </div>
  </template>
  
  <script>
  import { animations } from "@formkit/drag-and-drop";
  import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
  
  export default {
    name: 'Break',
  
    data() {
      return {
        ordenCorrecto: [
          { id: 1, text: "printf" },
          { id: 2, text: "contador ++;" },

        ],
        respuestasIncorrectas: [
          "¡Error! Revisa la sintaxis para poder determinar cuales son las sentencias necesarias",
          "¡Error! Ten presente el orden en el que los elementos están asignados en la sintaxis",
          "¡Error! No olvides que en el cuadro verde solo tienen que estar los elementos requeridos o las sentencias",
          "¡Error! Considera si los elementos o sentencias que estas agregando son los adecuados para el problema ",
        ],
        mensajeRespuesta: "",
        resultadoValidacion: null,
      
      };
    },
  
    setup() {
  
      const [todoList, todos] = useDragAndDrop(
        [
          { id: 1, text: "case 1" },
          { id: 2, text: "break" },
          { id: 3, text: "int expresion;" },
          { id: 4, text: "printf" },
          { id: 5, text: "system (pause);" },
        ].sort(() => Math.random() - 0.5),
        {
          plugins: [animations()],
          group: "kanbanGroup1",
          dragHandle: ".kanban-handle"
        }
      );
  
      const [doneList, dones] = useDragAndDrop(
        [
          { id: 6, text: "contador ++;" },
          { id: 7, text: "system (pause)" },
          { id: 8, text: "break;" },
        ],
        {
          plugins: [animations()],
          group: "kanbanGroup1",
          dragHandle: ".kanban-handle"
        }
      );

      return {
        todoList,
        todos,
        doneList,
        dones,
      };
    },
  
    methods: {
      
      validarOrden(arr) {
        for (let i = 0; i < this.ordenCorrecto.length; i++) {
          if (arr[i].text !== this.ordenCorrecto[i].text) {
            this.mensajeRespuesta = this.respuestasIncorrectas[Math.floor(Math.random() * this.respuestasIncorrectas.length)];
            return 'incorrecto';
          }
        }
        return 'correcto';
      },
      enviarOrden() {
        this.resultadoValidacion = this.validarOrden(this.dones);
      },
  
    },
  
  };
  </script>
  
  <style scoped>
  
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
  
  .bg-black {
    background-color: black;
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
  
  .draggable-item {
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
  }
  
  .draggable-item:active {
    cursor: grabbing;
  }
  
  .kanban-board {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 10px;
  }
  
  .kanban-column {
    margin: 0.5rem 0;
  }
  
  .kanban-item {
    padding: 0.5rem;
    background-color: rgba(202, 217, 219, 0.808);
    border: 1px solid hsl(0, 0%, 3%);
    border-radius: 5px;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    cursor: grab;
  }
  
  .kanban-item:active {
    cursor: grabbing;
  }
  
  .kanban-handle {
    cursor: grab;
    margin-right: 0.5rem;
    background-color: hsl(0, 0%, 0%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  
  .gray-background {
    background-color: rgb(124, 118, 118); /* Fondo gris claro */
  }
  
  .gray-background2 {
    background-color: hwb(157 10% 58% / 0.827); /* Fondo gris claro */
  }
  
  .scrollable {
    max-height: 1000px; /* Ajusta esto según sea necesario */
    overflow-y: auto;
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
  
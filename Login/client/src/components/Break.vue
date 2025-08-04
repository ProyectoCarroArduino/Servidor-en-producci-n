<template>
    <div>
      <h4 class="texto-personalizado">Selecciona el orden correcto de los bloques de instrucción <strong>(case)</strong> y los mensajes <strong>(printf)</strong> que se deben de usar en el problema:</h4>
      <p><span style="font-weight: bold;">Nota:</span> Considere agregar la declaración <strong>(default)</strong> al cuadro gris si lo considera necesario.</p>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> los bloques de instrucción y los mensajes deben ir en el cuadro a la derecha de color <strong>gris</strong> y el orden debe ser descendente.</p>
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
      <br>
      <br>
      <h4 class="texto-personalizado">Selecciona el orden de los bloques de instrucción <strong>(case)</strong>, los mensajes <strong>(printf)</strong> y los finalizadores de instrucción 
        <strong>(break)</strong> que se deben de usar para poder resolver el problema de forma correcta:</h4>
      <p><span style="font-weight: bold;">Nota:</span> Considere agregar la declaración <strong>(default)</strong> al cuadro gris si lo considera necesario.</p>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> los bloques de instrucción y los mensajes deben ir en el cuadro a la derecha de color <strong>gris</strong> y el orden debe ser descendente.</p>
      <br>
      <div class="flex-container">
        <div ref="todoList2" class="kanban-board kanban-column gray-background scrollable">
          <article
            v-for="todo2 in todos2"
            :key="todo2.id"
            class="kanban-item"
          >
            <span class="kanban-handle"></span>
            <p>{{ todo2.text }}</p>
          </article>
        </div>
        <div ref="doneList2" class="kanban-board kanban-column gray-background2 scrollable">
          <article
            v-for="done2 in dones2"
            :key="done2.id"
            class="kanban-item"
          >
            <span class="kanban-handle"></span>
            <p>{{ done2.text }}</p>
          </article>
        </div>
      </div>
      <div v-if="resultadoValidacionDones2 === 'correcto'">
        <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
      </div>
      <div v-else-if="resultadoValidacionDones2 === 'incorrecto'">
        <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuestaDones2 }}</p>
      </div>
      <button @click="enviarOrdenDones2">Enviar Orden</button>
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
          { id: 1, text: "case 1" },
          { id: 2, text: "printf" },
          { id: 3, text: "case 2" },
          { id: 4, text: "printf" },
          { id: 5, text: "default" },
          { id: 6, text: "printf" }
        ],
        respuestasIncorrectas: [
          "¡Error! Revisa la formula para poder determinar cuales son los elementos necesarios",
          "¡Error! Ten presente el orden en el que los elementos están asignados en la formula",
          "¡Error! No olvides que en el cuadro gris solo tienen que estar los elementos que se usan en la formula y el orden correcto en el que se usan",
          "¡Error! Considera si los elementos que estas agregando son los adecuados para la formula ",
        ],
        mensajeRespuesta: "",
        resultadoValidacion: null,
  
        ordenCorrectoDones2: [
          { id: 18, text: "case 1" },
          { id: 19, text: "printf" },
          { id: 15, text: "break" },
          { id: 20, text: "case 2" },
          { id: 21, text: "printf" },
          { id: 16, text: "break" },
          { id: 22, text: "default" },
          { id: 23, text: "printf" },
        ],
        respuestasIncorrectasDones2: [
          "¡Error! Ten en cuenta el orden correcto de las operaciones en la formula",
          "¡Error! Recuerda que son las operaciones que se usan en la formula para hallar el área de un triángulo",
          "¡Error! Vuelve a revisar la formula y ubica de la forma correcta las operaciones necesarias",
          "¡Error! No olvides que en el cuadro gris solo tienen que estar las operaciones que se usan en la formula y el orden correcto en el que se usan",
        ],
        mensajeRespuestaDones2: "",
        resultadoValidacionDones2: null,
      };
    },
  
    setup() {
  
      const [todoList, todos] = useDragAndDrop(
        [
          { id: 1, text: "case 1" },
          { id: 2, text: "break" },
          { id: 3, text: "int valor" },
          { id: 4, text: "break" },
          { id: 5, text: "printf" },
          { id: 6, text: "default" },
        ].sort(() => Math.random() - 0.5),
        {
          plugins: [animations()],
          group: "kanbanGroup1",
          dragHandle: ".kanban-handle"
        }
      );
  
      const [doneList, dones] = useDragAndDrop(
        [
          { id: 7, text: "case 2" },
          { id: 8, text: "printf" },
          { id: 9, text: "printf" },
          { id: 10, text: "break" },
        ],
        {
          plugins: [animations()],
          group: "kanbanGroup1",
          dragHandle: ".kanban-handle"
        }
      );
  
      const [todoList2, todos2] = useDragAndDrop(
        [
          { id: 11, text: "case 3" },
          { id: 12, text: "int variable" },
          { id: 13, text: "return 0" },
          { id: 14, text: "printf" },
          { id: 15, text: "break" },
          { id: 16, text: "break" },

        ].sort(() => Math.random() - 0.5),
        {
          plugins: [animations()],
          group: "kanbanGroup2",
          dragHandle: ".kanban-handle"
        }
      );
  
      const [doneList2, dones2] = useDragAndDrop(
        [
          { id: 18, text: "case 1" },
          { id: 19, text: "printf" },
          { id: 20, text: "case 2" },
          { id: 21, text: "printf" },
          { id: 22, text: "default" },
          { id: 23, text: "printf" },
        ],
        {
          plugins: [animations()],
          group: "kanbanGroup2",
          dragHandle: ".kanban-handle"
        }
      );  
  
      return {
        todoList,
        todos,
        doneList,
        dones,
        todoList2,
        todos2,
        doneList2,
        dones2,
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
  
      validarOrdenDones2(arr) {
        for (let i = 0; i < this.ordenCorrectoDones2.length; i++) {
          if (arr[i].text !== this.ordenCorrectoDones2[i].text) {
            this.mensajeRespuestaDones2 = this.respuestasIncorrectasDones2[Math.floor(Math.random() * this.respuestasIncorrectasDones2.length)];
            return 'incorrecto';
          }
        }
        return 'correcto';
      },
      enviarOrdenDones2() {
        this.resultadoValidacionDones2 = this.validarOrdenDones2(this.dones2);
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
    background-color: rgba(206, 204, 207, 0.808);
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
    background-color: #f0f0f0; /* Fondo gris claro */
  }
  
  .gray-background2 {
    background-color: hsla(253, 78%, 73%, 0.827); /* Fondo gris claro */
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
  
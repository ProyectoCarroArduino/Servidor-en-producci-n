<template>
    <div>
      <h4 class="texto-personalizado">Seleccione las líneas que forman el ciclo y ordénelas de arriba hacia abajo.</h4>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> Los elementos deben ir en el cuadro morado de la derecha, en el orden en que aparecen en el programa.</p>
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
      <br>
      <p v-if="contadorOrden > 0 && !ordenVerdadero" class="contador">
        intentos restantes: {{ Maxintento - contadorOrden }}
      </p>
      <br>
      <button @click="enviarOrden"
      :disabled="contadorOrden >= 3 || ordenVerdadero === true"
      >Enviar Orden</button>
      <br>
      <div v-if="resultadoValidacion === 'correcto'">
        <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
      </div>
      <div v-else-if="resultadoValidacion === 'incorrecto'">
        <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuesta }}</p>
      </div>
      <p v-if="ordenVerdadero || contadorOrden === Maxintento" class="correcto alert alert-success mt-3">
        Tu evaluación final es: {{ evaluacion }}
      </p>
      <br>
    </div>
  </template>
  
  <script>
  import { animations } from "@formkit/drag-and-drop";
  import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
  
  export default {
    name: 'DragAndDrop2Checker',
  
    data() {
      return {
        ordenCorrecto: [
          { id: 1, text: "for (int i = 2; i <= 10; i += 2) {" },
          { id: 2, text: "printf(\"%d\\n\", i);" },
          { id: 3, text: "}" },
        ],
        respuestasIncorrectas: [
          "¡Error! Para mostrar el valor de i se usa %d y la variable después de la coma",
          "¡Error! Revisa si la condición incluye el 10",
          "¡Error! El printf va dentro del cuerpo del ciclo",
          "¡Error! El ciclo se cierra con una llave después del cuerpo",
        ],
        mensajeRespuesta: "",
        resultadoValidacion: null,
        contadorOrden : 0, 
        Maxintento : 3,
        ordenVerdadero : null,
        evaluacion : null,

      
      };
    },
  
    setup() {
  
      const [todoList, todos] = useDragAndDrop(
        [
          { id: 1, text: "for (int i = 2; i <= 10; i += 2) {" },
          { id: 2, text: "printf(\"%d\\n\", i);" },
          { id: 3, text: "}" },
          { id: 4, text: "printf(\"i\\n\");" },
          { id: 5, text: "for (int i = 2; i < 10; i += 2) {" },
        ].sort(() => Math.random() - 0.5),
        {
          plugins: [animations()],
          group: "kanbanGroup1",
          dragHandle: ".kanban-handle"
        }
      );
  
      const [doneList, dones] = useDragAndDrop(
        [],
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
        if(this.ordenVerdadero === true || this.contadorOrden >= this.Maxintento){
          return;
        }
        this.contadorOrden++;
        const esCorrecto =
          arr.length === this.ordenCorrecto.length &&
          arr.every((item, i) => item.text === this.ordenCorrecto[i].text);
        if (!esCorrecto) {
          this.mensajeRespuesta = this.respuestasIncorrectas[Math.floor(Math.random() * this.respuestasIncorrectas.length)];
          this.ordenVerdadero = false;
          this.calcularEvaluacion(false);
          return 'incorrecto';
        }
        this.ordenVerdadero = true;
        this.calcularEvaluacion();
        return 'correcto';
      },

      enviarOrden() {
        this.resultadoValidacion = this.validarOrden(this.dones);
      },

      calcularEvaluacion() {
      if (this.ordenVerdadero === true) {
        // Calcular evaluación solo si la respuesta es correcta
        if (this.contadorOrden === 1) {
          this.evaluacion = 5;
        } else if (this.contadorOrden === 2) {
          this.evaluacion = 4;
        } else if (this.contadorOrden === 3) {
          this.evaluacion = 3;
        } 
      } else if (this.contadorOrden === this.Maxintento) {
        // Asignar calificación mínima al alcanzar intentos máximos sin éxito
        this.evaluacion = 1;
      }

      this.$emit('evaluacionEstructura', this.evaluacion); // Emitir la evaluación al componente padre
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
    background-color: rgba(108, 158, 216, 0.808);
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
    background-color: rgb(248, 247, 247); /* Fondo gris claro */
  }
  
  .gray-background2 {
    background-color: hwb(268 6% 14% / 0.863); /* Fondo morado (columna destino) */
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
  
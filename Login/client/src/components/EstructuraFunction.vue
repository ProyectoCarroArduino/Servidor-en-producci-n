<template>
    <div>
      <h4 class="texto-personalizado">De acuerdo a la teoria sobre funciones <strong>(sin parámetros)</strong> seleccione los elementos necesarios que se necesitan para construir la estructura de una función:</h4>
      <p><span style="font-weight: bold;">Nota:</span> Entiendase que <strong>(elementos)</strong> pueden ser: <strong>(funciones, condicionales, estructuras de repetición, variables y operaciones, arreglos e impresiones y solicitudes por pantalla)</strong>.</p>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> los <strong>Elementos</strong> deben ir en el cuadro a la derecha de color <strong>marrón</strong> y el orden debe ser descendente.</p>
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
      <button @click="enviarOrden"
      :disabled="contadorOrden >= 3 || ordenVerdadero === true"
      >Enviar Orden</button>
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
    name: 'Break',
  
    data() {
      return {
        ordenCorrecto: [
          { id: 1, text: "void laboratorio();" },
          { id: 2, text: "int main(){" },
          { id: 3, text: "laboratorio();" },
          { id: 4, text: "return 0;" },
          { id: 5, text: "}" },
          { id: 6, text: "void laboratorio(){" },
          { id: 7, text: "printf(mensaje)" },
          { id: 8, text: "}" },

        ],
        respuestasIncorrectas: [
          "¡Error! Revisa la teoria sobre la estructura de una función para poder determinar cuales son los elementos necesarios",
          "¡Error! Ten presente el orden en el que los elementos están determinados en la estructura de una función",
          "¡Error! No olvides que en el cuadro marrón solo tienen que estar los elementos necesarios para resolver el ejercicio",
          "¡Error! Considera si los elementos que estas agregando son los adecuados para una función (sin parámetros)",
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
          { id: 1, text: "void laboratorio();" },
          { id: 2, text: "break" },
          { id: 3, text: "laboratorio();" },
          { id: 4, text: "printf(mensaje)" },
          { id: 5, text: "}" },
          { id: 6, text: "return mensaje" },
        ].sort(() => Math.random() - 0.5),
        {
          plugins: [animations()],
          group: "kanbanGroup1",
          dragHandle: ".kanban-handle"
        }
      );
  
      const [doneList, dones] = useDragAndDrop(
        [
          { id: 7, text: "int main(){" },
          { id: 8, text: "return 0;" },
          { id: 9, text: "}" },
          { id: 10, text: "void laboratorio(){" },
          { id: 11, text: "if" },
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
        if(this.ordenVerdadero === true || this.contadorOrden >= this.Maxintento){
          return;
        }
        this.contadorOrden++;
        for (let i = 0; i < this.ordenCorrecto.length; i++) {
          if (arr[i].text !== this.ordenCorrecto[i].text) {
            this.mensajeRespuesta = this.respuestasIncorrectas[Math.floor(Math.random() * this.respuestasIncorrectas.length)];
            this.ordenVerdadero = false;
            this.calcularEvaluacion(false);
            return 'incorrecto';

          } else {
            this.ordenVerdadero = true;
            this.calcularEvaluacion();
            return 'correcto';
          }
        }
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
    background-color: hwb(29 18% 37% / 0.827); /* Fondo gris claro */
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
  
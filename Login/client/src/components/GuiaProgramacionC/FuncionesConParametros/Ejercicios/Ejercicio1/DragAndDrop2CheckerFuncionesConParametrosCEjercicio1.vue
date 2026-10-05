<template>
    <div>
      <h4 class="texto-personalizado">Seleccione los pasos correctos de la prueba de escritorio y ordénelos según ocurren.</h4>
      <p class="texto-personalizado"><strong>Instrucciones:</strong> Los elementos deben ir en el cuadro morado de la derecha, en el orden en que ocurren.</p>
      <br>
      <div class="flex-container">
        <div ref="todoList" class="kanban-board kanban-column gray-background">
          <article
            v-for="todo in todos"
            :key="todo"
            class="kanban-item"
          >
            <span class="kanban-handle"></span>
            <p>{{ todo }}</p>
          </article>
        </div>
        <div ref="doneList" class="kanban-board kanban-column gray-background2">
          <article
            v-for="done in dones"
            :key="done"
            class="kanban-item"
          >
            <span class="kanban-handle"></span>
            <p>{{ done }}</p>
          </article>
        </div>
      </div>
      <br>
      <div v-if="resultadoValidacion === 'correcto'">
        <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
      </div>
      <div v-else-if="resultadoValidacion === 'incorrecto'">
        <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuesta }}</p>
      </div>
      <EstadoSubejercicio :estado="ev4" />
      <br>
      <button
        class="ec-btn ec-btn-primary"
        @click="enviarOrden"
        :disabled="!puedeResponder(ev4)"
      >
        <span v-if="ev4.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
        Enviar Orden
      </button>
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
  modulo: '7. Funciones',
  submodulo: '7.2 Funciones con parametros',
  ejercicio: 'Ejercicio 1',
  categoria: 'descomposicion'
};
  
export default {
  name: 'DragAndDrop2Checker',
    
  components: { EstadoSubejercicio },

  // Avisa a la vista cuando el subejercicio queda cerrado (aprobado o sin intentos).
  emits: ['finalizado'],

  setup(props, { emit }) {
    const ev4 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: "Subejercicio 4" }));

    watch(() => ev4.bloqueado, (finalizado) => emit('finalizado', finalizado), { immediate: true });

    onMounted(() => {
      ev4.obtenerIntentos();
    });

    const [todoList, todos] = useDragAndDrop(
      ["Llamada 1: precio = 20000, descuento = 3000", "Devuelve 17000 y se guarda en primerPrecio", "Llamada 2: precio = 15000, descuento = 2500", "Devuelve 12500 y se muestra con printf", "Llamada 1: precio = 3000, descuento = 20000", "Devuelve 23000 y se guarda en primerPrecio", "Llamada 2: precio = 17000, descuento = 2500"].sort(() => Math.random() - 0.5),
      {
        plugins: [animations()],
        group: "kanbanGroup1",
        dragHandle: ".kanban-handle",
      }
    );

    const [doneList, dones] = useDragAndDrop(
      [], 
      {
        plugins: [animations()],
        group: "kanbanGroup1",
        dragHandle: ".kanban-handle",
    });

    return {
      ev4,

      // Kanban
      todoList,
      todos,
      doneList,
      dones,
    };
  },
  
    data() {
      return {
        ordenCorrecto: [
          "Llamada 1: precio = 20000, descuento = 3000",
          "Devuelve 17000 y se guarda en primerPrecio",
          "Llamada 2: precio = 15000, descuento = 2500",
          "Devuelve 12500 y se muestra con printf",
        ],
        respuestasIncorrectas: [
          "¡Error! Los argumentos se copian en los parámetros en el mismo orden",
          "¡Error! La función devuelve precio menos descuento",
          "¡Error! Cada llamada recibe sus propios argumentos",
          "¡Error! El primer resultado se guarda en una variable y el segundo se muestra directamente",
        ],
        mensajeRespuesta: "",
        resultadoValidacion: null,
      
      };
    },
  

    methods: {
    // Compara contenido Y longitud. Sin la comparacion de longitud, un
    // Array.every() sobre una lista mas corta que la esperada devuelve true:
    // vaciar la columna gris se calificaba como respuesta correcta.
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

    mensajeAleatorio(lista) {
      return lista[Math.floor(Math.random() * lista.length)];
    },

    async enviarOrden() {
      if (!this.puedeResponder(this.ev4)) return;

      const esCorrecto = this.listasIguales(this.dones, this.ordenCorrecto);
      this.resultadoValidacion = esCorrecto ? "correcto" : "incorrecto";
      if (!esCorrecto) {
        this.mensajeRespuesta = this.mensajeAleatorio(this.respuestasIncorrectas);
      }

      // El servidor calcula la nota a partir de los intentos restantes.
      await this.ev4.registrarResultado(esCorrecto);
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
    background-color: rgba(196, 150, 65, 0.808);
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
  
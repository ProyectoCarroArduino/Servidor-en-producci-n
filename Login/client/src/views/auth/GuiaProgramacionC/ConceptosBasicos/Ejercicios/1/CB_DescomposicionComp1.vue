<template>
  <div>
    <!-- SUBEJERCICIO 6 -->
    <h4 class="texto-personalizado">
      6. Selecciona los elementos <strong>(variables)</strong> que se deben usar en la variable: <strong>"int area = "</strong> para poder hallar el área de un triángulo.
    </h4>
    <p class="texto-personalizado">
      <strong>Instrucciones:</strong> las operaciones deben ir en el cuadro a la derecha de color <strong>gris</strong> y el orden debe ser descendente.
    </p>
    <div class="flex-container">
      <div ref="todoList" class="kanban-board kanban-column gray-background">
        <article v-for="todo in todos" :key="todo" class="kanban-item">
          <span class="kanban-handle"></span>
          <p>{{ todo }}</p>
        </article>
      </div>
      <div ref="doneList" class="kanban-board kanban-column gray-background2">
        <article v-for="done in dones" :key="done" class="kanban-item">
          <span class="kanban-handle"></span>
          <p>{{ done }}</p>
        </article>
      </div>
    </div>

    <div v-if="resultadoValidacion === 'correcto'">
      <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
    </div>
    <div v-else-if="resultadoValidacion === 'incorrecto'">
      <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuesta }}</p>
    </div>

    <EstadoSubejercicio :estado="ev6" />

    <button
      @click="enviarOrden"
      :disabled="!puedeResponder(ev6)"
      class="btn btn-primary"
    >
      <span v-if="ev6.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Enviar Orden
    </button>

    <br /><br /><br />

    <!-- SUBEJERCICIO 7 -->
    <h4 class="texto-personalizado">
      7. Selecciona las operaciones que se deben usar en la variable: <strong>"int area = base _____ altura _____ 2 ="</strong> para poder hallar el área de un triángulo.
    </h4>
    <p class="texto-personalizado">
      <strong>Instrucciones:</strong> las operaciones deben ir en el cuadro a la derecha de color <strong>gris</strong> y el orden debe ser descendente.
    </p>
    <div class="flex-container">
      <div ref="todoList2" class="kanban-board kanban-column gray-background">
        <article v-for="todo2 in todos2" :key="todo2" class="kanban-item">
          <span class="kanban-handle"></span>
          <p>{{ todo2 }}</p>
        </article>
      </div>
      <div ref="doneList2" class="kanban-board kanban-column gray-background2">
        <article v-for="done2 in dones2" :key="done2" class="kanban-item">
          <span class="kanban-handle"></span>
          <p>{{ done2 }}</p>
        </article>
      </div>
    </div>

    <div v-if="resultadoValidacionDones2 === 'correcto'">
      <p class="correcto alert alert-success mt-3">¡El orden es correcto!</p>
    </div>
    <div v-else-if="resultadoValidacionDones2 === 'incorrecto'">
      <p class="incorrecto alert alert-danger mt-3">{{ mensajeRespuestaDones2 }}</p>
    </div>

    <EstadoSubejercicio :estado="ev7" />

    <button
      @click="enviarOrdenDones2"
      :disabled="!puedeResponder(ev7)"
      class="btn btn-primary"
    >
      <span v-if="ev7.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Enviar Orden
    </button>
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
  modulo: '1. Conceptos basicos',
  submodulo: '1.1 Introduccion a C',
  ejercicio: 'Ejercicio 1',
  categoria: 'descomposicion'
};

export default {
  name: "Operaciones",

  components: { EstadoSubejercicio },

  setup() {
    const ev6 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: "Subejercicio 6" }));
    const ev7 = reactive(useEvaluacionSubejercicio({ ...RUTA, subejercicio: "Subejercicio 7" }));

    onMounted(() => {
      ev6.obtenerIntentos();
      ev7.obtenerIntentos();
    });

    const [todoList, todos] = useDragAndDrop(
      ["ancho", "altura", "diametro", "ángulo", "cateto opuesto"].sort(() => Math.random() - 0.5),
      {
        plugins: [animations()],
        group: "kanbanGroup1",
        dragHandle: ".kanban-handle",
      }
    );

    const [doneList, dones] = useDragAndDrop(["fuerza", "base", "X2"], {
      plugins: [animations()],
      group: "kanbanGroup1",
      dragHandle: ".kanban-handle",
    });

    const [todoList2, todos2] = useDragAndDrop(
      ["sumar", "restar", "factorizar", "multiplicar", "integrar", "calcular"].sort(() => Math.random() - 0.5),
      {
        plugins: [animations()],
        group: "kanbanGroup2",
        dragHandle: ".kanban-handle",
      }
    );

    const [doneList2, dones2] = useDragAndDrop(["limite", "dividir", "transformar"], {
      plugins: [animations()],
      group: "kanbanGroup2",
      dragHandle: ".kanban-handle",
    });

    return {
      ev6,
      ev7,

      // Kanban
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

  data() {
    return {
      ordenCorrecto: ["base", "altura"],
      ordenCorrectoDones2: ["multiplicar", "dividir"],
      resultadoValidacion: null,
      resultadoValidacionDones2: null,
      mensajeRespuesta: "",
      mensajeRespuestaDones2: "",
      respuestasIncorrectas: [
        "¡Error! Revisa la fórmula para determinar qué elementos son necesarios.",
        "¡Error! Ten presente el orden correcto para definir la variable.",
      ],
      respuestasIncorrectasDones2: [
        "¡Error! Revisa el orden de operaciones en la fórmula del área.",
        "¡Error! Considera si estás seleccionando las operaciones correctas.",
      ],
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
      if (!this.puedeResponder(this.ev6)) return;

      const esCorrecto = this.listasIguales(this.dones, this.ordenCorrecto);
      this.resultadoValidacion = esCorrecto ? "correcto" : "incorrecto";
      if (!esCorrecto) {
        this.mensajeRespuesta = this.mensajeAleatorio(this.respuestasIncorrectas);
      }

      // El servidor calcula la nota a partir de los intentos restantes.
      await this.ev6.registrarResultado(esCorrecto);
    },

    async enviarOrdenDones2() {
      if (!this.puedeResponder(this.ev7)) return;

      const esCorrecto = this.listasIguales(this.dones2, this.ordenCorrectoDones2);
      this.resultadoValidacionDones2 = esCorrecto ? "correcto" : "incorrecto";
      if (!esCorrecto) {
        this.mensajeRespuestaDones2 = this.mensajeAleatorio(this.respuestasIncorrectasDones2);
      }

      await this.ev7.registrarResultado(esCorrecto);
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
  background-color: white;
  border: 1px solid #ccc;
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
  background-color: #ccc;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.gray-background {
  background-color: #f0f0f0; /* Fondo gris claro */
}

.gray-background2 {
  background-color: hsla(0, 2%, 22%, 0.827); /* Fondo gris claro */
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

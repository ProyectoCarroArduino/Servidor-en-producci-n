<template>
  <div>
    <!-- SUBEJERCICIO 6 -->
    <h4 class="texto-personalizado">
      6. Selecciona los elementos <strong>(variables)</strong> que se deben usar en la variable: <strong>"int area = "</strong> para poder hallar el área de un triángulo.
    </h4>
    <p class="texto-personalizado">
      <strong>Instrucciones:</strong> las operaciones deben ir en el cuadro a la derecha de color <strong>gris</strong> y el orden debe ser descendente.
    </p>
    <p
      v-if="intentosRestantes !== null"
      class="alert"
      :class="(intentosRestantes === 1 || (intentosRestantes === 0 && notaActual === 1)) ? 'alert-danger' : 'alert-info'"
    >
      Intentos restantes: {{ intentosRestantes }} | Nota actual: {{ notaActual !== null ? notaActual : '-' }}
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

    <button
      @click="enviarOrden"
      :disabled="intentosRestantes <= 0 || resultadoValidacion === 'correcto'"
      class="btn btn-primary"
    >
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
    <p
      v-if="intentos7 !== null"
      class="alert"
      :class="(intentos7 === 1 || (intentos7 === 0 && nota7 === 1)) ? 'alert-danger' : 'alert-info'"
    >
      Intentos restantes: {{ intentos7 }} | Nota actual: {{ nota7 !== null ? nota7 : '-' }}
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

    <button
      @click="enviarOrdenDones2"
      :disabled="intentos7 <= 0 || resultadoValidacionDones2 === 'correcto'"
      class="btn btn-primary"
    >
      Enviar Orden
    </button>
  </div>
</template>


<script>
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
import { reactive, toRefs, onMounted } from "vue";
import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";

export default {
  name: "Operaciones",

  setup() {
    // Subejercicio 6 - variables para "int area = "
    const evaluacion6Raw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Programación en C', // Añadido
        modulo: '1. Conceptos basicos',
        submodulo: '1.1 Introduccion a C',
        ejercicio: 'Ejercicio 1',
        categoria: "descomposicion",
        subejercicio: "Subejercicio 6",
      })
    );

    // Subejercicio 7 - operaciones para fórmula
    const evaluacion7Raw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Programación en C', // Añadido
        modulo: '1. Conceptos basicos',
        submodulo: '1.1 Introduccion a C',
        ejercicio: 'Ejercicio 1',
        categoria: "descomposicion",
        subejercicio: "Subejercicio 7",
      })
    );

    const evaluacion6 = toRefs(evaluacion6Raw);
    const evaluacion7 = toRefs(evaluacion7Raw);

    onMounted(() => {
      evaluacion6Raw.obtenerIntentos();
      evaluacion7Raw.obtenerIntentos();
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
      // Evaluación Sub 6
      ...evaluacion6,
      registrarEvaluacion6: evaluacion6Raw.registrarEvaluacion,
      obtenerIntentos6: evaluacion6Raw.obtenerIntentos,

      // Evaluación Sub 7
      intentos7: evaluacion7.intentosRestantes,
      nota7: evaluacion7.notaActual,
      registrarEvaluacion7: evaluacion7Raw.registrarEvaluacion,
      obtenerIntentos7: evaluacion7Raw.obtenerIntentos,

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
    async enviarOrden() {
      const esCorrecto = this.dones.every((item, i) => item === this.ordenCorrecto[i]);
      this.resultadoValidacion = esCorrecto ? "correcto" : "incorrecto";
      if (!esCorrecto) {
        this.mensajeRespuesta = this.respuestasIncorrectas[Math.floor(Math.random() * this.respuestasIncorrectas.length)];
      }

      const intentos = this.intentosRestantes;
      const nota = esCorrecto
        ? (intentos === 3 ? 5 : intentos === 2 ? 4 : 3)
        : (intentos <= 1 ? 1 : 1);

      await this.registrarEvaluacion6(nota);
      await this.obtenerIntentos6();
    },

    async enviarOrdenDones2() {
      const esCorrecto = this.dones2.every((item, i) => item === this.ordenCorrectoDones2[i]);
      this.resultadoValidacionDones2 = esCorrecto ? "correcto" : "incorrecto";
      if (!esCorrecto) {
        this.mensajeRespuestaDones2 = this.respuestasIncorrectasDones2[Math.floor(Math.random() * this.respuestasIncorrectasDones2.length)];
      }

      const intentos = this.intentos7;
      const nota = esCorrecto
        ? (intentos === 3 ? 5 : intentos === 2 ? 4 : 3)
        : (intentos <= 1 ? 1 : 1);

      await this.registrarEvaluacion7(nota);
      await this.obtenerIntentos7();
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

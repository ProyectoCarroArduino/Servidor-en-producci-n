<template>
  <div>
    <!-- SUBEJERCICIO 4 -->
    <h4 class="texto-personalizado">
      4. De acuerdo al tema de <strong>declaración de una variable</strong>,
      ordene de manera que la variable esté bien definida:
    </h4>
    <p v-if="intentosRestantes !== null" class="alert alert-info">
      Intentos restantes: {{ intentosRestantes }}
    </p>

    <div>
      <div ref="parent" class="grid gray-background">
        <article
          v-for="tape in tapes"
          :key="tape"
          class="bg-black text-white rounded-full p-4 flex items-center justify-center"
        >
          <p>{{ tape }}</p>
        </article>
      </div>
      <br /><br />
      <button
        @click="verificarOrden"
        :disabled="intentosRestantes <= 0 || ordenCorrecto === true"
        class="btn btn-primary"
      >
        Verificar Orden
      </button>
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

    <br /><br /><br />

    <!-- SUBEJERCICIO 5 -->
    <h4 class="texto-personalizado">
      5. De acuerdo al tema de <strong>declaración de una variable</strong>,
      ordene de forma que la variable esté bien definida:
    </h4>
    <p v-if="intentos5 !== null" class="alert alert-info">
      Intentos restantes: {{ intentos5 }}
    </p>

    <div>
      <div ref="parent2" class="grid gray-background">
        <article
          v-for="tape2 in tapes2"
          :key="tape2"
          class="bg-black text-white rounded-full p-4 flex items-center justify-center"
        >
          <p>{{ tape2 }}</p>
        </article>
      </div>
      <br /><br />
      <button
        @click="verificarOrden2"
        :disabled="intentos5 <= 0 || ordenCorrecto2 === true"
        class="btn btn-primary"
      >
        Verificar Orden 2
      </button>
      <p
        v-if="ordenCorrecto2 === true"
        class="correcto alert alert-success mt-3"
      >
        ¡Orden correcto!
      </p>
      <p
        v-if="ordenCorrecto2 === false"
        class="incorrecto alert alert-danger mt-3"
      >
        {{ mensajeError2 }}
      </p>
    </div>

    <br /><br />
  </div>
</template>


<script>
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
import { reactive, toRefs, onMounted } from "vue";
import { useEvaluacionSubejercicio } from "@/composables/useEvaluacionSubejercicio";

export default {
  name: "Variables",

  setup() {
    // Evaluación subejercicio 4
    const evaluacion4Raw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Programación en C', // Añadido
        modulo: '1. Conceptos basicos',
        submodulo: '1.1 Introduccion a C',
        ejercicio: 'Ejercicio 1',
        categoria: "descomposicion",
        subejercicio: "Subejercicio 4",
      })
    );

    // Evaluación subejercicio 5
    const evaluacion5Raw = reactive(
      useEvaluacionSubejercicio({
        cursoNombre: 'Guía Programación en C', // Añadido
        modulo: '1. Conceptos basicos',
        submodulo: '1.1 Introduccion a C',
        ejercicio: 'Ejercicio 1',
        categoria: "descomposicion",
        subejercicio: "Subejercicio 5",
      })
    );

    const evaluacion4 = toRefs(evaluacion4Raw);
    const evaluacion5 = toRefs(evaluacion5Raw);

    // Intentos al montar
    onMounted(() => {
      evaluacion4Raw.obtenerIntentos();
      evaluacion5Raw.obtenerIntentos();
    });

    // DnD setup
    const [parent, tapes] = useDragAndDrop(
      ["int", "base", "=", 12, ";"].sort(() => Math.random() - 0.5),
      { plugins: [animations()] }
    );

    const [parent2, tapes2] = useDragAndDrop(
      ["int", "altura", "=", 8, ";"].sort(() => Math.random() - 0.5),
      { plugins: [animations()] }
    );

    return {
      // Evaluación sub 4
      ...evaluacion4,
      registrarEvaluacion4: evaluacion4Raw.registrarEvaluacion,
      obtenerIntentos4: evaluacion4Raw.obtenerIntentos,

      // Evaluación sub 5
      intentos5: evaluacion5.intentosRestantes,
      nota5: evaluacion5.notaActual,
      registrarEvaluacion5: evaluacion5Raw.registrarEvaluacion,
      obtenerIntentos5: evaluacion5Raw.obtenerIntentos,

      // Drag and drop
      parent,
      tapes,
      parent2,
      tapes2,
    };
  },

  data() {
    return {
      ordenCorrecto: null,
      ordenCorrecto2: null,
      mensajeError: "",
      mensajeError2: "",
      respuestasIncorrectas: [
        "¡Error! Por favor, ten en cuenta la estructura para definir una variable",
        "¡Error! Revisa el orden en el que estás ubicando los elementos de la estructura",
        "¡Error! Recuerda que la declaración de una variable cuenta con una estructura fija",
        "¡Error! Considera el paso a paso para definir una variable correctamente",
      ],
    };
  },

  methods: {
    async verificarOrden() {
      const esperado = ["int", "base", "=", 12, ";"];
      const esCorrecto = this.tapes.every((t, i) => t === esperado[i]);

      this.ordenCorrecto = esCorrecto;
      if (!esCorrecto) {
        this.mensajeError = this.obtenerMensajeAleatorio();
      }

      const intentos = this.intentosRestantes;
      const nota = esCorrecto
        ? (intentos === 3 ? 5 : intentos === 2 ? 4 : 3)
        : (intentos <= 1 ? 1 : 1);

      await this.registrarEvaluacion4(nota);
      await this.obtenerIntentos4();
    },

    async verificarOrden2() {
      const esperado = ["int", "altura", "=", 8, ";"];
      const esCorrecto = this.tapes2.every((t, i) => t === esperado[i]);

      this.ordenCorrecto2 = esCorrecto;
      if (!esCorrecto) {
        this.mensajeError2 = this.obtenerMensajeAleatorio();
      }

      const intentos = this.intentos5;
      const nota = esCorrecto
        ? (intentos === 3 ? 5 : intentos === 2 ? 4 : 3)
        : (intentos <= 1 ? 1 : 1);

      await this.registrarEvaluacion5(nota);
      await this.obtenerIntentos5();
    },

    obtenerMensajeAleatorio() {
      const i = Math.floor(Math.random() * this.respuestasIncorrectas.length);
      return this.respuestasIncorrectas[i];
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

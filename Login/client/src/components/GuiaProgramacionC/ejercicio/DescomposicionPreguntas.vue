<template>
  <div>
    <template v-for="(pregunta, i) in preguntas" :key="i">
      <PreguntaOrdenar
        v-if="pregunta.tipo === 'ordenar'"
        :numero="i + 1"
        :pregunta="pregunta"
        :ev="evaluaciones[i]"
      />
      <PreguntaSeleccion
        v-else
        :numero="i + 1"
        :pregunta="pregunta"
        :ev="evaluaciones[i]"
      />
    </template>

    <p v-if="!todasCerradas" class="aparte">
      Podrás avanzar cuando termines todas las preguntas (aprobadas o sin intentos).
    </p>
    <button
      type="button"
      class="btn btn-primary"
      :disabled="!todasCerradas"
      @click="avanzar"
    >
      Avanzar al Algoritmo
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import PreguntaSeleccion from "./PreguntaSeleccion.vue";
import PreguntaOrdenar from "./PreguntaOrdenar.vue";

// Todas las preguntas de Descomposicion de un ejercicio. La pregunta i usa la
// evaluacion i: la vista crea una por subejercicio, en el mismo orden.
const props = defineProps({
  preguntas: { type: Array, required: true },
  evaluaciones: { type: Array, required: true },
  siguiente: { type: String, required: true },
});

const router = useRouter();

const todasCerradas = computed(() => props.evaluaciones.every((ev) => ev.bloqueado));

function avanzar() {
  router.push(props.siguiente).then(() => window.scrollTo(0, 0));
}
</script>

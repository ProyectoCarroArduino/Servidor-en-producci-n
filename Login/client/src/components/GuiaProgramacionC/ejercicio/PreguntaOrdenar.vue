<template>
  <div class="pregunta">
    <h3>{{ numero }}. {{ pregunta.pregunta }}</h3>
    <p class="aparte">Arrastra los elementos hasta dejarlos en el orden correcto, de arriba hacia abajo.</p>

    <ol ref="lista" class="ordenar-lista" :class="{ 'ordenar-bloqueada': !puedeResponder(ev) }">
      <li
        v-for="elemento in elementos"
        :key="elemento"
        class="ordenar-item"
        :class="{ 'ordenar-codigo': pregunta.codigo }"
      >
        <span class="ordenar-asa" aria-hidden="true">⋮⋮</span>
        {{ elemento }}
      </li>
    </ol>

    <EstadoSubejercicio :estado="ev" />

    <button
      type="button"
      class="btn btn-primary mt-2"
      :disabled="!puedeResponder(ev)"
      @click="enviar"
    >
      <span v-if="ev.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Enviar orden
    </button>

    <p v-if="resultado === 'correcto'" class="alert alert-success mt-3">¡El orden es correcto!</p>
    <p v-else-if="resultado === 'incorrecto'" class="alert alert-danger mt-3">{{ mensajeError }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";
import { mezclar, aleatorio, puedeResponder } from "./evaluacion";

// Pregunta de ordenar. `pregunta` viene de datosEjercicios.js:
// { pregunta, orden: [...en el orden correcto], errores, codigo? }
const props = defineProps({
  numero: { type: Number, required: true },
  pregunta: { type: Object, required: true },
  /** Objeto reactivo de useEvaluacionSubejercicio(); lo crea la vista. */
  ev: { type: Object, required: true },
});

const correcto = props.pregunta.orden;

// Se evita arrancar con la lista ya ordenada.
let inicial = mezclar(correcto);
while (correcto.length > 1 && inicial.every((e, i) => e === correcto[i])) {
  inicial = mezclar(correcto);
}

const [lista, elementos] = useDragAndDrop(inicial, { plugins: [animations()] });

const resultado = ref(null);
const mensajeError = ref("");

async function enviar() {
  if (!puedeResponder(props.ev)) return;

  const esCorrecto = elementos.value.every((e, i) => e === correcto[i]);
  resultado.value = esCorrecto ? "correcto" : "incorrecto";
  if (!esCorrecto) {
    mensajeError.value = aleatorio(props.pregunta.errores);
  }

  await props.ev.registrarResultado(esCorrecto);
}
</script>

<style scoped>
.pregunta {
  margin-bottom: 36px;
}

.ordenar-lista {
  list-style: decimal;
  margin: 14px 0 16px;
  padding-left: 28px;
  max-width: 640px;
}

.ordenar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  padding: 12px 14px;
  border: 2px solid #d7e7fb;
  border-radius: 10px;
  background: #ffffff;
  cursor: grab;
}

.ordenar-codigo {
  font-family: "Consolas", "Fira Code", "Courier New", monospace;
}

.ordenar-asa {
  color: #9aa9b8;
  letter-spacing: -2px;
}

.ordenar-bloqueada {
  pointer-events: none;
  opacity: 0.6;
}
</style>

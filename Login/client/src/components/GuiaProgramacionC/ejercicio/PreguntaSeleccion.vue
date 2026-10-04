<template>
  <div class="pregunta">
    <h3>{{ numero }}. {{ pregunta.pregunta }}</h3>

    <div class="opciones">
      <button
        v-for="opcion in opciones"
        :key="opcion.texto"
        type="button"
        class="opcion"
        :class="{
          'opcion-codigo': pregunta.codigo,
          'opcion-elegida': elegida === opcion,
        }"
        :disabled="!puedeResponder(ev)"
        @click="responder(opcion)"
      >
        <img v-if="opcion.imagen" :src="opcion.imagen" :alt="opcion.texto" />
        <span v-else>{{ opcion.texto }}</span>
      </button>
    </div>

    <EstadoSubejercicio :estado="ev" />

    <p v-if="elegida && elegida.correcta" class="alert alert-success mt-3">
      ¡Correcto! {{ elegida.porque }}
    </p>
    <p v-else-if="elegida" class="alert alert-danger mt-3">{{ mensajeError }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";
import { mezclar, aleatorio, puedeResponder } from "./evaluacion";

// Pregunta de seleccion unica. `pregunta` viene de datosEjercicios.js:
// { pregunta, opciones: [{ texto, correcta?, porque, imagen? }], errores, codigo? }
const props = defineProps({
  numero: { type: Number, required: true },
  pregunta: { type: Object, required: true },
  /** Objeto reactivo de useEvaluacionSubejercicio(); lo crea la vista. */
  ev: { type: Object, required: true },
});

const opciones = mezclar(props.pregunta.opciones);
const elegida = ref(null);
const mensajeError = ref("");

async function responder(opcion) {
  if (!puedeResponder(props.ev)) return;

  elegida.value = opcion;
  if (!opcion.correcta) {
    mensajeError.value = aleatorio(props.pregunta.errores);
  }

  // El servidor calcula la nota a partir de los intentos restantes.
  await props.ev.registrarResultado(Boolean(opcion.correcta));
}
</script>

<style scoped>
.pregunta {
  margin-bottom: 36px;
}

.opciones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 14px 0 16px;
}

.opcion {
  padding: 14px 16px;
  border: 2px solid #d7e7fb;
  border-radius: 12px;
  background: #ffffff;
  color: #0b1f33;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.opcion:hover:not(:disabled) {
  border-color: #2564a8;
  background: #eff6ff;
}

.opcion:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.opcion-elegida {
  border-color: #2564a8;
}

.opcion-codigo {
  font-family: "Consolas", "Fira Code", "Courier New", monospace;
  text-align: center;
}

.opcion img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
}
</style>

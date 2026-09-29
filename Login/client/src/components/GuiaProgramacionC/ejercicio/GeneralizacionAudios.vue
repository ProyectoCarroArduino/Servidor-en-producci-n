<template>
  <div>
    <p>{{ generalizacion.instruccion }}</p>
    <p><strong>Instrucciones:</strong> Ingrese el orden correcto de los audios.</p>
    <p class="aparte">Escribe junto a cada audio la posición (1, 2, 3…) que le corresponde.</p>

    <div class="audios">
      <div v-for="(item, i) in audios" :key="item.texto" class="audio-item">
        <audio v-if="item.audio" controls :src="item.audio">
          Tu navegador no soporta el elemento de audio.
        </audio>
        <!-- Marcador mientras no exista el audio -->
        <p v-else class="audio-pendiente">
          <span class="audio-etiqueta">Audio pendiente</span>
          {{ item.texto }}
        </p>
        <input
          v-model.number="posiciones[i]"
          type="number"
          min="1"
          :max="audios.length"
          :aria-label="`Posición del audio ${i + 1}`"
          :disabled="!puedeResponder(ev)"
        />
      </div>
    </div>

    <EstadoSubejercicio :estado="ev" />

    <button
      type="button"
      class="btn btn-primary mt-2"
      :disabled="incompleto || !puedeResponder(ev)"
      @click="enviar"
    >
      <span v-if="ev.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Enviar
    </button>

    <p v-if="resultado === 'correcto'" class="alert alert-success mt-3">¡Correcto!</p>
    <p v-else-if="resultado === 'incorrecto'" class="alert alert-danger mt-3">
      Lo sentimos, es incorrecto.
    </p>

    <div class="mt-3">
      <button type="button" class="btn btn-success" :disabled="!ev.bloqueado" @click="avanzar">
        {{ textoSiguiente }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";
import { mezclar, puedeResponder } from "./evaluacion";

// `generalizacion` viene de datosEjercicios.js: { instruccion, audios: [...en orden] }
const props = defineProps({
  generalizacion: { type: Object, required: true },
  /** Objeto reactivo de useEvaluacionSubejercicio(); lo crea la vista. */
  ev: { type: Object, required: true },
  siguiente: { type: String, required: true },
  textoSiguiente: { type: String, default: "Finalizar" },
});

const router = useRouter();

// Cada audio guarda su posicion correcta antes de mezclarlos.
const audios = mezclar(
  props.generalizacion.audios.map((a, i) => ({ ...a, posicion: i + 1 }))
);
const posiciones = reactive(audios.map(() => null));
const resultado = ref(null);

const incompleto = computed(() =>
  posiciones.some((p) => !Number.isInteger(p) || p < 1 || p > audios.length)
);

async function enviar() {
  if (incompleto.value || !puedeResponder(props.ev)) return;

  const esCorrecto = audios.every((a, i) => posiciones[i] === a.posicion);
  resultado.value = esCorrecto ? "correcto" : "incorrecto";

  // El servidor calcula la nota a partir de los intentos restantes.
  await props.ev.registrarResultado(esCorrecto);
}

function avanzar() {
  router.push(props.siguiente).then(() => window.scrollTo(0, 0));
}
</script>

<style scoped>
.audios {
  display: grid;
  gap: 10px;
  margin: 16px 0;
}

.audio-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  border: 1px solid #d7e7fb;
  border-radius: 12px;
  background: #ffffff;
}

.audio-item audio {
  flex: 1;
  min-width: 0;
}

.audio-pendiente {
  flex: 1;
  margin: 0 !important;
  font-size: 15px !important;
}

.audio-etiqueta {
  display: inline-block;
  margin-right: 6px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: #7a4b00;
  background: #fff1d6;
}

.audio-item input {
  width: 70px;
  flex: 0 0 70px;
  padding: 6px;
  font-size: 17px;
  text-align: center;
  border: 1px solid #9aa9b8;
  border-radius: 6px;
}
</style>

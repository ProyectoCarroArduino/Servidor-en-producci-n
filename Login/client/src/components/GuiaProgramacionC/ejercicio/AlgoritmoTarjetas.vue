<template>
  <div>
    <p><strong>Instrucciones:</strong> Ingrese el orden correcto del algoritmo.</p>
    <p class="aparte">
      Escribe en cada paso el número de la tarjeta que corresponde. Sobran tarjetas: no todas
      hacen parte del algoritmo.
    </p>

    <div class="tarjetas">
      <figure v-for="(tarjeta, i) in tarjetas" :key="tarjeta.texto" class="tarjeta">
        <figcaption class="tarjeta-numero">{{ i + 1 }}</figcaption>
        <img v-if="tarjeta.imagen" :src="tarjeta.imagen" :alt="tarjeta.texto" />
        <!-- Marcador mientras no exista la imagen -->
        <div v-else class="forma" :class="`forma-${tarjeta.forma}`">{{ tarjeta.texto }}</div>
      </figure>
    </div>

    <div class="pasos">
      <label v-for="(paso, i) in pasos" :key="i" class="paso">
        <span>Paso {{ i + 1 }}</span>
        <input
          v-model.number="paso.valor"
          type="number"
          min="1"
          :max="tarjetas.length"
          :disabled="!puedeResponder(ev)"
        />
      </label>
    </div>

    <EstadoSubejercicio :estado="ev" />

    <button
      type="button"
      class="btn btn-primary mt-2"
      :disabled="incompleto || !puedeResponder(ev)"
      @click="enviar"
    >
      <span v-if="ev.cargando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Enviar respuesta
    </button>

    <p v-if="resultado === 'correcto'" class="alert alert-success mt-3">¡Correcto!</p>
    <p v-else-if="resultado === 'incorrecto'" class="alert alert-danger mt-3">
      Incorrecto. Intenta de nuevo.
    </p>

    <div class="mt-3">
      <button type="button" class="btn btn-primary" :disabled="!ev.bloqueado" @click="avanzar">
        Avanzar a la Abstracción
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";
import { mezclar, puedeResponder } from "./evaluacion";

// `algoritmo` viene de datosEjercicios.js: { correctas: [...en orden], incorrectas: [...] }
const props = defineProps({
  algoritmo: { type: Object, required: true },
  /** Objeto reactivo de useEvaluacionSubejercicio(); lo crea la vista. */
  ev: { type: Object, required: true },
  siguiente: { type: String, required: true },
});

const router = useRouter();
const correctas = props.algoritmo.correctas;
const tarjetas = mezclar([...correctas, ...props.algoritmo.incorrectas]);
const pasos = reactive(correctas.map(() => ({ valor: null })));
const resultado = ref(null);

const incompleto = computed(() =>
  pasos.some((p) => !Number.isInteger(p.valor) || p.valor < 1 || p.valor > tarjetas.length)
);

async function enviar() {
  if (incompleto.value || !puedeResponder(props.ev)) return;

  const esCorrecto = pasos.every((p, i) => tarjetas[p.valor - 1] === correctas[i]);
  resultado.value = esCorrecto ? "correcto" : "incorrecto";

  // El servidor calcula la nota a partir de los intentos restantes.
  await props.ev.registrarResultado(esCorrecto);
}

function avanzar() {
  router.push(props.siguiente).then(() => window.scrollTo(0, 0));
}
</script>

<style scoped>
.tarjetas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin: 18px 0;
}

.tarjeta {
  margin: 0;
  padding: 12px;
  border: 1px solid #d7e7fb;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.tarjeta-numero {
  font-weight: 700;
  color: #123357;
}

.tarjeta img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
}

/* Marcadores con la forma del diagrama de flujo */
.forma {
  width: 100%;
  min-height: 90px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  line-height: 1.35;
  color: #0b1f33;
  border: 2px solid #2564a8;
  background: #eff6ff;
}

.forma-inicio-fin {
  border-radius: 999px;
}

.forma-proceso {
  border-radius: 2px;
}

/* Hoja con esquina doblada */
.forma-mostrar {
  border-radius: 2px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);
}

.pasos {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 14px;
}

.paso {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #123357;
}

.paso input {
  width: 70px;
  padding: 6px;
  font-size: 17px;
  text-align: center;
  border: 1px solid #9aa9b8;
  border-radius: 6px;
}
</style>

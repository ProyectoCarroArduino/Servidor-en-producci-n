<template>
  <div>
    <p><strong>Instrucciones:</strong> {{ abstraccion.instruccion }}</p>

    <textarea
      v-model="codigo"
      class="editor"
      spellcheck="false"
      placeholder="Escribe tu código aquí"
      :disabled="!puedeResponder(ev)"
    ></textarea>

    <EstadoSubejercicio :estado="ev" />

    <button
      type="button"
      class="btn btn-primary mt-2"
      :disabled="!codigo.trim() || analizando || !puedeResponder(ev)"
      @click="analizar"
    >
      <span v-if="analizando" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      Analizar código
    </button>

    <div v-if="resultado" class="alert mt-3" :class="resultado.correcto ? 'alert-success' : 'alert-warning'">
      <p class="mb-0">{{ resultado.mensaje }}</p>
      <pre v-if="resultado.detalle" class="detalle">{{ resultado.detalle }}</pre>
    </div>

    <BloqueCodigo
      v-if="resultado && resultado.correcto"
      archivo="Tu programa"
      :codigo="codigo"
      :salida="abstraccion.salida"
    />

    <div class="mt-3">
      <button type="button" class="btn btn-primary" :disabled="!ev.bloqueado" @click="avanzar">
        Avanzar a la Generalización
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import EstadoSubejercicio from "@/components/EstadoSubejercicio.vue";
import BloqueCodigo from "@/components/teoria/BloqueCodigo.vue";
import { puedeResponder } from "./evaluacion";

// `abstraccion` viene de datosEjercicios.js:
// { instruccion, solucion, salida, requiereComentarios?, alternativas? }
const props = defineProps({
  abstraccion: { type: Object, required: true },
  /** Objeto reactivo de useEvaluacionSubejercicio(); lo crea la vista. */
  ev: { type: Object, required: true },
  siguiente: { type: String, required: true },
});

const URL_ANALISIS =
  import.meta.env.VITE_API_URI_ANALYZE || `${import.meta.env.VITE_API_URI}/api/auth/analyze`;

const router = useRouter();
const codigo = ref("");
const analizando = ref(false);
const resultado = ref(null);

/**
 * Deja el codigo listo para comparar: quita espacios, saltos de linea y
 * comentarios, pero conserva intacto el texto entre comillas (el mensaje debe
 * ser exacto). Asi la sangria o un espacio de mas no cuentan como error.
 */
function normalizar(fuente) {
  let salida = "";
  let comentarioLinea = false;
  let comentarioBloque = false;
  let i = 0;

  while (i < fuente.length) {
    const c = fuente[i];
    const dos = fuente.slice(i, i + 2);

    if (dos === "//") {
      comentarioLinea = true;
      while (i < fuente.length && fuente[i] !== "\n") i++;
    } else if (dos === "/*") {
      comentarioBloque = true;
      const fin = fuente.indexOf("*/", i + 2);
      i = fin === -1 ? fuente.length : fin + 2;
    } else if (c === '"' || c === "'") {
      // Literal de texto o caracter: se copia tal cual hasta la comilla de cierre.
      let j = i + 1;
      while (j < fuente.length && fuente[j] !== c && fuente[j] !== "\n") {
        j += fuente[j] === "\\" ? 2 : 1;
      }
      salida += fuente.slice(i, j + 1);
      i = j + 1;
    } else {
      if (!/\s/.test(c)) salida += c;
      i++;
    }
  }

  return { salida, comentarioLinea, comentarioBloque };
}

async function analizar() {
  if (!puedeResponder(props.ev)) return;

  analizando.value = true;
  resultado.value = null;

  let erroresCompilador = "";
  try {
    const { data } = await axios.post(URL_ANALISIS, { code: codigo.value });
    erroresCompilador = data.errors || "";
  } catch (err) {
    // Si no se pudo analizar, el intento no se cuenta.
    console.error("Error al analizar el código:", err);
    resultado.value = {
      correcto: false,
      mensaje: "No se pudo analizar el código. Inténtalo nuevamente; este intento no se contó.",
    };
    analizando.value = false;
    return;
  }

  const estudiante = normalizar(codigo.value);
  const esperadas = [props.abstraccion.solucion, ...(props.abstraccion.alternativas || [])].map(
    (s) => normalizar(s).salida
  );
  const coincide = esperadas.includes(estudiante.salida);
  const faltanComentarios =
    props.abstraccion.requiereComentarios &&
    !(estudiante.comentarioLinea && estudiante.comentarioBloque);

  if (erroresCompilador) {
    resultado.value = {
      correcto: false,
      mensaje: "El compilador encontró errores en tu código:",
      detalle: erroresCompilador,
    };
  } else if (faltanComentarios) {
    resultado.value = {
      correcto: false,
      mensaje:
        "El código compila, pero el enunciado pide un comentario de varias líneas (/* */) y uno de una sola línea (//).",
    };
  } else if (!coincide) {
    resultado.value = {
      correcto: false,
      mensaje:
        "El código compila, pero no hace lo que pide el enunciado. Revisa el mensaje exacto entre comillas y el orden de las instrucciones.",
    };
  } else {
    resultado.value = { correcto: true, mensaje: "¡El código es correcto!" };
  }

  // El servidor calcula la nota a partir de los intentos restantes.
  await props.ev.registrarResultado(resultado.value.correcto);
  analizando.value = false;
}

function avanzar() {
  router.push(props.siguiente).then(() => window.scrollTo(0, 0));
}
</script>

<style scoped>
.editor {
  width: 100%;
  min-height: 240px;
  margin: 12px 0 14px;
  padding: 14px 16px;
  font-family: "Consolas", "Fira Code", "Courier New", monospace;
  font-size: 15px;
  line-height: 1.6;
  color: #e6f0fb;
  background: #0f2238;
  border: none;
  border-radius: 12px;
  resize: vertical;
  tab-size: 4;
}

.detalle {
  margin: 10px 0 0;
  white-space: pre-wrap;
  font-size: 13px;
}
</style>

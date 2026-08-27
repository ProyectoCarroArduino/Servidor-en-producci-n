<template>
  <!-- Fallo de red o ruta que no existe en la plantilla del curso. Antes esto
       era silencioso: el panel no aparecia y el ejercicio dejaba de responder
       sin decir por que. -->
  <div v-if="estado.error" class="estado-subejercicio estado-fallo" role="alert">
    <span class="material-icons estado-icono" aria-hidden="true">warning</span>
    <div class="estado-texto">
      <p class="estado-titulo">No se pudo cargar la evaluación</p>
      <p class="estado-detalle">{{ estado.error }}</p>
      <p class="estado-detalle">
        Tu respuesta no se está guardando. Recarga la página o avisa al docente.
      </p>
    </div>
  </div>

  <div v-else-if="!estado.estadoCargado" class="estado-subejercicio estado-cargando" role="status">
    <span class="estado-spinner" aria-hidden="true"></span>
    <p class="estado-detalle">Cargando estado del subejercicio...</p>
  </div>

  <div v-else class="estado-subejercicio" :class="tono" role="status">
    <div class="estado-dato">
      <span class="estado-label">Intentos restantes</span>
      <span class="estado-valor">
        {{ estado.intentosRestantes }} <span class="estado-total">de {{ estado.intentosTotales }}</span>
      </span>
    </div>

    <div class="estado-dato">
      <span class="estado-label">Nota actual</span>
      <span class="estado-valor">{{ notaTexto }}</span>
    </div>

    <span class="marca" :class="marca.clase">{{ marca.texto }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  /** Objeto reactivo devuelto por useEvaluacionSubejercicio(). */
  estado: {
    intentosRestantes: number | null;
    intentosTotales: number | null;
    notaActual: number | null;
    presentado: boolean;
    aprobado: boolean;
    estadoCargado: boolean;
    error: string | null;
  };
}>();

const sinIntentos = computed(
  () => props.estado.intentosRestantes !== null && props.estado.intentosRestantes <= 0
);

// Un subejercicio sin presentar muestra un guion, no un 0. Un 0 se lee como
// reprobado y no es lo mismo.
const notaTexto = computed(() =>
  props.estado.notaActual === null || props.estado.notaActual === undefined
    ? "—"
    : String(props.estado.notaActual)
);

// Mismas marcas que la vista de perfil (ProgresoCurso.vue), para que el
// estudiante lea el mismo lenguaje en el ejercicio y en su progreso.
const marca = computed(() => {
  if (props.estado.aprobado) return { texto: "Aprobado", clase: "marca-alta" };
  if (sinIntentos.value) return { texto: "Sin intentos", clase: "marca-baja" };
  if (!props.estado.presentado) return { texto: "Sin presentar", clase: "marca-neutra" };
  return { texto: "En curso", clase: "marca-curso" };
});

// Sombreado del panel segun los intentos que quedan, para que el ultimo intento
// se note antes de responder y no despues.
//   aprobado          -> tono de cerrado con exito
//   1 o 0 intentos    -> tono de alerta (era el alert-danger original)
//   2 o mas intentos  -> tono informativo (era el alert-info original)
const tono = computed(() => {
  if (props.estado.aprobado) return "tono-logrado";
  const restantes = props.estado.intentosRestantes;
  if (restantes !== null && restantes <= 1) return "tono-alerta";
  return "tono-info";
});
</script>

<style scoped>
.estado-subejercicio {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 28px;
  /* Va pegado al boton de enviar, que es donde el estudiante mira antes de
     responder: poco margen abajo, algo mas arriba para separarlo del contenido. */
  margin: 20px 0 10px;
  padding: 14px 20px;
  border-radius: var(--ec-radius-sm);
  border: 1px solid var(--ec-border);
  background: var(--ec-surface-sunken);
  box-shadow: var(--ec-shadow-sm);
  font-family: var(--ec-font-ui);
  color: var(--ec-text);
  transition: background 0.2s ease, border-color 0.2s ease;
}

/* --- Sombreado segun los intentos restantes --- */

.tono-info {
  background: var(--ec-blue-100);
  border-color: var(--ec-border);
}

.tono-alerta {
  background: rgba(184, 50, 50, 0.08);
  border-color: rgba(184, 50, 50, 0.35);
}

.tono-alerta .estado-valor {
  color: var(--viz-div-neg-2);
}

.tono-logrado {
  background: var(--ec-accent-soft);
  border-color: rgba(37, 100, 168, 0.3);
}

.estado-dato {
  display: grid;
  gap: 2px;
}

.estado-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ec-text-subtle);
}

.estado-valor {
  font-size: 17px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--ec-blue-800);
}

.estado-total {
  font-size: 13px;
  font-weight: 500;
  color: var(--ec-text-subtle);
}

/* --- Marcas: mismas clases y colores que ProgresoCurso.vue ---
   Rampa divergente validada (rojo <-> azul). No se usa verde: la paleta se
   valido para daltonismo protan/deutan.
   Ver documentacion/diseno-estilos-plantillas.md */

.marca {
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.marca-alta {
  background: var(--ec-blue-100);
  border-color: rgba(28, 92, 171, 0.35);
  color: var(--viz-div-pos-2);
}

.marca-baja {
  background: rgba(184, 50, 50, 0.1);
  border-color: rgba(184, 50, 50, 0.35);
  color: var(--viz-div-neg-2);
}

.marca-curso {
  background: var(--ec-accent-soft);
  border-color: rgba(37, 100, 168, 0.3);
  color: var(--ec-blue-700);
}

.marca-neutra {
  background: var(--ec-surface);
  border-color: var(--ec-border);
  color: var(--ec-text-subtle);
}

/* --- Variantes de error y carga --- */

.estado-fallo {
  align-items: flex-start;
  gap: 12px;
  background: rgba(184, 50, 50, 0.07);
  border-color: rgba(184, 50, 50, 0.35);
}

.estado-icono {
  color: var(--viz-div-neg-2);
  font-size: 22px;
  line-height: 1.2;
}

.estado-texto {
  display: grid;
  gap: 2px;
}

.estado-titulo {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--viz-div-neg-2);
}

.estado-detalle {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--ec-text-muted);
}

.estado-cargando {
  gap: 12px;
}

.estado-spinner {
  flex: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--ec-blue-200);
  border-top-color: var(--ec-blue-600);
  animation: estado-giro 0.8s linear infinite;
}

@keyframes estado-giro {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .estado-subejercicio {
    transition: none;
  }

  .estado-spinner {
    animation-duration: 2.4s;
  }
}

@media (max-width: 520px) {
  .marca {
    margin-left: 0;
  }
}
</style>

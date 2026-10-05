import { ref, computed } from "vue";
import type { EvaluacionParams } from "@/composables/useEvaluacionSubejercicio";

const INTENTOS = 3;

/**
 * Misma interfaz que useEvaluacionSubejercicio, pero sin servidor.
 *
 * Para los ejemplos de la guia: no tienen casilla en server/cursosConfig.js,
 * asi que los intentos y la nota solo viven en el navegador y no cuentan para
 * el progreso del estudiante.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useEvaluacionLocal(_params?: Partial<EvaluacionParams>) {
  const intentosRestantes = ref<number | null>(INTENTOS);
  const intentosTotales = ref<number | null>(INTENTOS);
  const notaActual = ref<number | null>(null);
  const ultimoIntento = ref<string | null>(null);
  const presentado = ref(false);
  const aprobado = ref(false);
  const notaCategoria = ref<number | null>(null);
  const avance = ref<{ presentados: number; total: number } | null>(null);
  const cargando = ref(false);
  const error = ref<string | null>(null);
  const motivo = ref<string | null>(null);

  const estadoCargado = computed(() => intentosRestantes.value !== null);
  const bloqueado = computed(
    () => aprobado.value || (intentosRestantes.value !== null && intentosRestantes.value <= 0)
  );

  function registrar(nota: number) {
    if (bloqueado.value) return null;

    intentosRestantes.value = Math.max(0, (intentosRestantes.value ?? INTENTOS) - 1);
    notaActual.value = Math.max(notaActual.value ?? 0, nota);
    notaCategoria.value = notaActual.value;
    ultimoIntento.value = new Date().toISOString();
    presentado.value = true;
    aprobado.value = nota >= 3;
    motivo.value = "ok";

    return {
      registrado: true,
      motivo: "ok",
      subejercicio: {
        nombre: "Ejemplo",
        nota: notaActual.value,
        intentos_restantes: intentosRestantes.value,
        intentos_totales: INTENTOS,
        ultimo_intento: ultimoIntento.value,
        presentado: true,
        aprobado: aprobado.value
      }
    };
  }

  async function obtenerEstado() {}

  async function registrarResultado(correcto: boolean) {
    const usados = INTENTOS - (intentosRestantes.value ?? INTENTOS);
    return registrar(correcto ? 5 - usados : 1);
  }

  async function registrarNota(nota: number) {
    return registrar(nota);
  }

  return {
    intentosRestantes,
    intentosTotales,
    notaActual,
    ultimoIntento,
    presentado,
    aprobado,
    estadoCargado,
    bloqueado,
    notaCategoria,
    avance,
    cargando,
    error,
    motivo,
    obtenerIntentos: obtenerEstado,
    registrarResultado,
    registrarEvaluacion: registrarNota
  };
}

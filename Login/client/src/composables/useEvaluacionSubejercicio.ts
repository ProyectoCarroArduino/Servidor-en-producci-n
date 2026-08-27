import { ref, computed } from "vue";
import { useApiPrivate } from "@/composables/useApi";

export interface EvaluacionParams {
  /** Debe coincidir EXACTAMENTE con el nombre del curso en la plantilla. */
  cursoNombre: string;
  modulo: string;
  submodulo: string;
  ejercicio: string;
  categoria: string;
  subejercicio: string;
}

/** Por que el servidor no registro el intento. */
export type MotivoEvaluacion =
  | "ok"
  | "consulta"
  | "sin_intentos"
  | "ya_aprobado";

interface RespuestaSubejercicio {
  nombre: string;
  nota: number | null;
  intentos_restantes: number;
  intentos_totales: number;
  ultimo_intento: string | null;
  presentado: boolean;
  aprobado: boolean;
}

interface RespuestaCategoria {
  nota: number | null;
  ultimo_intento: string | null;
  avance: { presentados: number; total: number };
}

interface RespuestaEvaluar {
  registrado: boolean;
  motivo: MotivoEvaluacion;
  subejercicio: RespuestaSubejercicio;
  categoria: RespuestaCategoria;
}

/**
 * Estado y registro de un subejercicio contra /api/curso/evaluar.
 *
 * El servidor es el que calcula la nota: aqui solo se le informa si la
 * respuesta fue correcta. `registrarEvaluacion(nota)` se conserva para las
 * guias que todavia no se han migrado.
 */
export function useEvaluacionSubejercicio(params: EvaluacionParams) {
  const intentosRestantes = ref<number | null>(null);
  const intentosTotales = ref<number | null>(null);
  const notaActual = ref<number | null>(null);
  const ultimoIntento = ref<string | null>(null);
  const presentado = ref(false);
  const aprobado = ref(false);
  const notaCategoria = ref<number | null>(null);
  const avance = ref<{ presentados: number; total: number } | null>(null);
  const cargando = ref(false);
  const error = ref<string | null>(null);
  const motivo = ref<MotivoEvaluacion | null>(null);

  const api = useApiPrivate();

  /** Solo es null mientras no se haya podido consultar el estado. */
  const estadoCargado = computed(() => intentosRestantes.value !== null);

  /** Ni intentos disponibles ni posibilidad de mejorar: el subejercicio esta cerrado. */
  const bloqueado = computed(
    () => aprobado.value || (intentosRestantes.value !== null && intentosRestantes.value <= 0)
  );

  function aplicar(data: RespuestaEvaluar) {
    const sub = data?.subejercicio;
    if (!sub) {
      error.value = "Respuesta invalida del servidor";
      return;
    }

    intentosRestantes.value = sub.intentos_restantes;
    intentosTotales.value = sub.intentos_totales;
    notaActual.value = sub.nota;
    ultimoIntento.value = sub.ultimo_intento;
    presentado.value = sub.presentado;
    aprobado.value = sub.aprobado;
    motivo.value = data.motivo ?? null;

    if (data.categoria) {
      notaCategoria.value = data.categoria.nota;
      avance.value = data.categoria.avance;
    }
  }

  function describirError(err: any, porDefecto: string) {
    return err?.response?.data?.message || porDefecto;
  }

  async function obtenerEstado() {
    cargando.value = true;
    error.value = null;

    try {
      const { data } = await api.post<RespuestaEvaluar>("/api/curso/evaluar", { ...params });
      aplicar(data);
    } catch (err: any) {
      error.value = describirError(err, "No se pudo consultar el estado del subejercicio");
    } finally {
      cargando.value = false;
    }
  }

  /**
   * Registra un intento. El servidor decide la nota a partir de los intentos
   * que quedaban. Devuelve la respuesta completa, o null si fallo.
   */
  async function registrarResultado(correcto: boolean) {
    // Evita que un doble clic consuma dos intentos mientras la primera
    // peticion sigue en vuelo.
    if (cargando.value) return null;

    cargando.value = true;
    error.value = null;

    try {
      const { data } = await api.post<RespuestaEvaluar>("/api/curso/evaluar", {
        ...params,
        correcto
      });
      aplicar(data);
      return data;
    } catch (err: any) {
      error.value = describirError(err, "No se pudo registrar la evaluacion");
      return null;
    } finally {
      cargando.value = false;
    }
  }

  /**
   * @deprecated La nota debe calcularla el servidor. Usa `registrarResultado`.
   * Se conserva para las guias que todavia envian la nota desde el cliente.
   */
  async function registrarNota(nota: number) {
    if (cargando.value) return null;

    cargando.value = true;
    error.value = null;

    try {
      const { data } = await api.post<RespuestaEvaluar>("/api/curso/evaluar", {
        ...params,
        nota
      });
      aplicar(data);
      return data;
    } catch (err: any) {
      error.value = describirError(err, "No se pudo registrar la evaluacion");
      return null;
    } finally {
      cargando.value = false;
    }
  }

  return {
    // Estado del subejercicio
    intentosRestantes,
    intentosTotales,
    notaActual,
    ultimoIntento,
    presentado,
    aprobado,
    estadoCargado,
    bloqueado,

    // Estado de la categoria
    notaCategoria,
    avance,

    // Estado de la peticion
    cargando,
    error,
    motivo,

    // Acciones
    obtenerIntentos: obtenerEstado,
    registrarResultado,
    registrarEvaluacion: registrarNota
  };
}

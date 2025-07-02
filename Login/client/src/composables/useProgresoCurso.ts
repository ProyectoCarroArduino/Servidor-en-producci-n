import { ref } from 'vue';
import { useApiPrivate } from '@/composables/useApi';

export function useProgresoCurso() {
  const cursos = ref<any[]>([]);
  const cursoSeleccionado = ref<any | null>(null);
  const cargando = ref(false);
  const error = ref<string | null>(null);

  const api = useApiPrivate();

  async function cargarCursos() {
    cargando.value = true;
    error.value = null;

    try {
      const { data } = await api.get('/api/curso/progreso');
      cursos.value = data.cursos || [];

      // Opcional: selecciona automáticamente el primer curso si hay uno solo
      if (cursos.value.length === 1) {
        cursoSeleccionado.value = cursos.value[0];
      }
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al obtener el progreso de los cursos';
    } finally {
      cargando.value = false;
    }
  }

  return {
    cursos,
    cursoSeleccionado,
    cargando,
    error,
    cargarCursos
  };
}

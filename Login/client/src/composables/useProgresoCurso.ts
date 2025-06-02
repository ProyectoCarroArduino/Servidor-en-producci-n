import { ref } from 'vue'
import { useApiPrivate } from '@/composables/useApi'

export function useProgresoCurso() {
  const curso = ref<any | null>(null)
  const cargando = ref(false)
  const error = ref<string | null>(null)

  const api = useApiPrivate()

  async function cargarCurso() {
    cargando.value = true
    error.value = null

    try {
      const { data } = await api.get('/api/curso/progreso') // '/api'
      curso.value = data.curso
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al obtener el progreso del curso'
    } finally {
      cargando.value = false
    }
  }

  return { curso, cargando, error, cargarCurso }
}

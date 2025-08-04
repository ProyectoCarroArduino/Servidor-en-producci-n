import { ref } from 'vue'
import { useApiPrivate } from '@/composables/useApi'

export function useConceptos() {
  const conceptos = ref<any[]>([])
  const referencias = ref<any[]>([])
  const cargando = ref(false)
  const error = ref<string | null>(null)

  const api = useApiPrivate()

  async function cargarContenido() {
    cargando.value = true
    error.value = null

    try {
      const { data } = await api.get('/api/glosario')
      conceptos.value = data?.conceptos || []
      referencias.value = data?.referencias || []
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al cargar contenido del glosario'
    } finally {
      cargando.value = false
    }
  }

  async function agregarConcepto(nuevo: { termino: string; definicion: string; imagen?: string }) {
    cargando.value = true
    error.value = null

    try {
      const { data } = await api.post('/api/glosario/concepto', nuevo)
      conceptos.value.push(data)
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al agregar concepto'
      throw err
    } finally {
      cargando.value = false
    }
  }

  async function eliminarConcepto(id: string) {
    cargando.value = true
    error.value = null

    try {
      await api.delete(`/api/glosario/concepto/${id}`)
      conceptos.value = conceptos.value.filter(c => c._id !== id)
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al eliminar concepto'
      throw err
    } finally {
      cargando.value = false
    }
  }

  async function agregarReferencia(ref: { nombre: string; tipo: string; enlace: string; descripcion?: string }) {
    cargando.value = true
    error.value = null

    try {
      const { data } = await api.post('/api/glosario/referencia', ref)
      referencias.value.push(data)
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al agregar referencia'
      throw err
    } finally {
      cargando.value = false
    }
  }

  async function eliminarReferencia(id: string) {
    cargando.value = true
    error.value = null

    try {
      await api.delete(`/api/glosario/referencia/${id}`)
      referencias.value = referencias.value.filter(r => r._id !== id)
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al eliminar referencia'
      throw err
    } finally {
      cargando.value = false
    }
  }

  return {
    conceptos,
    referencias,
    cargando,
    error,
    cargarContenido,
    agregarConcepto,
    eliminarConcepto,
    agregarReferencia,
    eliminarReferencia
  }
}

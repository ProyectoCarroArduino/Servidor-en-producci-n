<template>
  <div class="p-6 bg-white rounded shadow max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">📘 Glosario de Conceptos</h1>

    <!-- Formulario para agregar nuevo concepto -->
    <form @submit.prevent="crearConcepto" class="mb-6 space-y-4">
      <div>
        <label class="block text-sm font-medium">Término</label>
        <input v-model="nuevo.termino" type="text" class="w-full border rounded px-3 py-1" required />
      </div>
      <div>
        <label class="block text-sm font-medium">Definición</label>
        <textarea v-model="nuevo.definicion" class="w-full border rounded px-3 py-1" required />
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Agregar concepto</button>
    </form>

    <hr class="mb-4">

    <!-- Lista de conceptos -->
    <ul class="list-disc pl-6 space-y-2">
      <li v-for="concepto in conceptos" :key="concepto._id" class="flex justify-between items-start">
        <div>
          <strong>{{ concepto.termino }}:</strong> {{ concepto.definicion }}
        </div>
        <button
          @click="eliminarConcepto(concepto._id)"
          class="text-red-600 hover:underline text-sm ml-4"
        >Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApiPrivate } from '@/composables/useApi'

const conceptos = ref([])
const nuevo = ref({
  termino: '',
  definicion: ''
})

const api = useApiPrivate()

// Cargar conceptos al iniciar
const cargarConceptos = async () => {
  try {
    const res = await api.get('/api/glosario')
    conceptos.value = res.data
  } catch (err) {
    console.error('Error al cargar conceptos:', err)
  }
}

// Crear nuevo concepto
const crearConcepto = async () => {
  if (!nuevo.value.termino.trim() || !nuevo.value.definicion.trim()) return

  try {
    await api.post('/api/glosario', nuevo.value)
    await cargarConceptos()
    nuevo.value.termino = ''
    nuevo.value.definicion = ''
  } catch (err) {
    console.error('Error al crear concepto:', err)
  }
}

// Eliminar un concepto
const eliminarConcepto = async (id) => {
  if (!confirm('¿Eliminar este concepto?')) return
  try {
    await api.delete(`/api/glosario/${id}`)
    await cargarConceptos()
  } catch (err) {
    console.error('Error al eliminar:', err)
  }
}

onMounted(cargarConceptos)
</script>


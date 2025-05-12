<script setup lang="ts">
import { onMounted } from 'vue'
import { useProgresoCurso } from '@/composables/useProgresoCurso'

const { curso, cargando, error, cargarCurso } = useProgresoCurso()

onMounted(() => {
  cargarCurso()
})

function formatearFecha(fecha: string | null) {
  if (!fecha) return '—'
  return new Date(fecha).toLocaleDateString('es-CO')
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Progreso del Curso</h1>

    <div v-if="cargando">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="curso">
      <div v-for="(modulo, mi) in curso.modulos" :key="mi" class="mb-6">
        <h2 class="text-xl font-semibold">{{ modulo.nombre }}</h2>

        <div v-for="(submodulo, si) in modulo.submodulos" :key="si" class="ml-4 mt-2">
          <h3 class="text-lg font-medium">{{ submodulo.nombre }}</h3>

          <div v-for="(ejercicio, ei) in submodulo.ejercicios" :key="ei" class="ml-6 mt-1">
            <h4 class="font-semibold">{{ ejercicio.nombre }}</h4>

            <div
              v-for="(categoria, catNombre) in ejercicio.categorias"
              :key="catNombre"
              class="ml-6 mt-1"
            >
            <p class="font-medium">
            {{ String(catNombre).toUpperCase() }} – Nota: {{ categoria.nota?.toFixed(2) ?? '—' }} –
            Último intento: {{ formatearFecha(categoria.ultimo_intento) }}
            </p>


              <ul class="ml-4 list-disc">
                <li v-for="(sub, idx) in categoria.subejercicios" :key="idx">
                  {{ sub.nombre }} – Nota: {{ sub.nota }} – Intentos restantes:
                  {{ sub.intentos_restantes }} – Último intento:
                  {{ formatearFecha(sub.ultimo_intento) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2, h3, h4 {
  margin-top: 0.5rem;
}
</style>

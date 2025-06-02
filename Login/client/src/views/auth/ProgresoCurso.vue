<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProgresoCurso } from '@/composables/useProgresoCurso'

interface Subejercicio {
  nombre: string
  nota: number | null
  intentos_restantes: number
  ultimo_intento: string | null
}

interface Categoria {
  nota: number | null
  ultimo_intento: string | null
  subejercicios: Subejercicio[]
}

interface Ejercicio {
  nombre: string
  categorias: Record<string, Categoria>
}

interface Submodulo {
  nombre: string
  ejercicios: Ejercicio[]
}

interface Modulo {
  nombre: string
  submodulos: Submodulo[]
}

const { curso, cargando, error, cargarCurso } = useProgresoCurso()
const rootRef = ref<HTMLElement | null>(null)
const estanExpandidos = ref(false)

onMounted(() => {
  cargarCurso()
})

function formatearFecha(fecha: string | null) {
  if (!fecha) return '—'
  return new Date(fecha).toLocaleDateString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function claseNota(nota: number | null | undefined): string {
  if (nota == null) return 'text-gray-500'
  return nota >= 3 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'
}

function calcularNotaPromedio(notas: (number | null | undefined)[]): number | null {
  const notasValidas = notas.filter(n => typeof n === 'number') as number[]
  if (notasValidas.length === 0) return null
  const total = notasValidas.reduce((acc, n) => acc + n, 0)
  return +(total / notasValidas.length).toFixed(2)
}

// 🔧 Funciones de cálculo

function obtenerNotaEjercicio(e: Ejercicio): number | null {
  return calcularNotaPromedio((Object.values(e.categorias) as Categoria[]).map(c => c.nota))
}

function obtenerNotaSubmodulo(sub: Submodulo): number | null {
  return calcularNotaPromedio(sub.ejercicios.map(obtenerNotaEjercicio))
}

function obtenerNotaModulo(mod: Modulo): number | null {
  return calcularNotaPromedio(mod.submodulos.map(obtenerNotaSubmodulo))
}

function alternarTodos() {
  if (!rootRef.value) return
  const detalles = rootRef.value.querySelectorAll('details')
  detalles.forEach(d => (d.open = !estanExpandidos.value))
  estanExpandidos.value = !estanExpandidos.value
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen py-10 flex justify-center">
    <div class="w-full max-w-4xl px-4 sm:px-6 lg:px-8" ref="rootRef">
      <!-- Encabezado -->
      <div class="sticky top-0 z-10 bg-gray-50 py-3 flex justify-between items-center mb-4 border-b px-2">
        <h1 class="text-3xl font-bold text-blue-900">📊 Progreso del Curso</h1>
        <button
          @click="alternarTodos"
          class="flex items-center gap-2 bg-indigo-100 text-indigo-800 font-medium px-4 py-2 rounded-md border border-indigo-300 hover:bg-indigo-200 transition-all duration-200 shadow-sm"
        >
          <span v-if="estanExpandidos">🔽 Contraer todo</span>
          <span v-else>🔼 Expandir todo</span>
        </button>
      </div>

      <!-- Cuerpo -->
      <div v-if="cargando">Cargando progreso...</div>
      <div v-else-if="error" class="text-red-600">{{ error }}</div>

      <div v-else-if="curso">
        <div v-for="(modulo, mi) in curso.modulos" :key="mi" class="mb-6 border rounded-md bg-white shadow">
          <details>
            <summary class="cursor-pointer p-3 bg-indigo-100 text-indigo-800 text-lg font-semibold">
              {{ modulo.nombre }}
              <span :class="'ml-2 text-sm ' + claseNota(obtenerNotaModulo(modulo))">
                (Nota: {{ obtenerNotaModulo(modulo) ?? '—' }})
              </span>
            </summary>

            <div v-for="(submodulo, si) in modulo.submodulos" :key="si" class="mb-4">
              <details>
                <summary class="cursor-pointer text-indigo-700 font-medium bg-indigo-50 px-3 py-2 rounded">
                  {{ submodulo.nombre }}
                  <span :class="'ml-2 text-sm ' + claseNota(obtenerNotaSubmodulo(submodulo))">
                    (Nota: {{ obtenerNotaSubmodulo(submodulo) ?? '—' }})
                  </span>
                </summary>

                <div class="nivel-submodulo mt-2">
                  <div v-for="(ejercicio, ei) in submodulo.ejercicios" :key="ei" class="mb-3">
                    <details>
                      <summary class="cursor-pointer text-gray-700 font-semibold bg-gray-100 px-2 py-1 rounded">
                        {{ ejercicio.nombre }}
                        <span :class="'ml-2 text-sm ' + claseNota(obtenerNotaEjercicio(ejercicio))">
                          (Nota: {{ obtenerNotaEjercicio(ejercicio) ?? '—' }})
                        </span>
                      </summary>

                      <div class="nivel-ejercicio mt-2">
                        <div v-for="(categoria, catNombre) in ejercicio.categorias" :key="catNombre" class="mb-4">
                          <details>
                            <summary class="cursor-pointer text-gray-800 bg-white rounded px-2 py-1 border">
                              {{ String(catNombre).toUpperCase() }} –
                              <span :class="claseNota(categoria.nota)">
                                Nota: {{ categoria.nota?.toFixed(2) ?? '—' }}
                              </span>
                              –
                              Último intento: {{ formatearFecha(categoria.ultimo_intento) }}
                            </summary>

                            <div class="nivel-categoria mt-3">
                              <div class="nivel-tabla">
                                <table class="w-full table-auto border-collapse text-sm rounded overflow-hidden shadow-sm">
                                  <thead class="bg-gray-200 text-gray-700">
                                    <tr>
                                      <th class="p-2 border text-left">Subejercicio</th>
                                      <th class="p-2 border text-center">Nota</th>
                                      <th class="p-2 border text-center">Intentos restantes</th>
                                      <th class="p-2 border text-center">Último intento</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="(sub, idx) in categoria.subejercicios"
                                      :key="idx"
                                      class="bg-white even:bg-gray-50"
                                    >
                                      <td class="p-2 border">{{ sub.nombre }}</td>
                                      <td class="p-2 border text-center" :class="claseNota(sub.nota)">{{ sub.nota }}</td>
                                      <td class="p-2 border text-center">{{ sub.intentos_restantes }}</td>
                                      <td class="p-2 border text-center">{{ formatearFecha(sub.ultimo_intento) }}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </details>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </details>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nivel-submodulo {
  padding-left: 1.5rem;
}
.nivel-ejercicio {
  padding-left: 2.5rem;
}
.nivel-categoria {
  padding-left: 3.5rem;
}
.nivel-tabla {
  padding-left: 1rem;
}
</style>

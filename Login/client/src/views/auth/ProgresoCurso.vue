<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useProgresoCurso } from '@/composables/useProgresoCurso'
import { useAuthStore } from '@/stores/auth'

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

interface Curso {
  nombre: string
  modulos: Modulo[]
}

interface Avance {
  presentados: number
  total: number
}

const NOTA_APROBATORIA = 3

const { cursos, intentosPorSubejercicio, cargando, error, cargarCursos } = useProgresoCurso()
const authStore = useAuthStore()
const rootRef = ref<HTMLElement | null>(null)
const estanExpandidos = ref(false)

const user = computed(() => authStore.userDetail)
const nombreCompleto = computed(() => {
  const partes = [user.value?.first_name, user.value?.last_name].filter(Boolean)
  return partes.join(' ')
})

onMounted(async () => {
  await Promise.all([cargarCursos(), cargarUsuario()])
})

async function cargarUsuario() {
  try {
    await authStore.getUser()
  } catch (err) {
    console.error('Error al obtener el usuario:', err)
  }
}

function formatearFecha(fecha: string | null) {
  if (!fecha) return '—'
  return new Date(fecha).toLocaleDateString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

// Un subejercicio esta presentado cuando tiene fecha de intento. La nota no
// sirve como senal: un 0 no distingue "no presentado" de "reprobado".
function estaPresentado(sub: Subejercicio) {
  return sub.ultimo_intento !== null && sub.ultimo_intento !== undefined
}

function promedio(notas: (number | null | undefined)[]): number | null {
  const validas = notas.filter(n => typeof n === 'number') as number[]
  if (validas.length === 0) return null
  return +(validas.reduce((acc, n) => acc + n, 0) / validas.length).toFixed(2)
}

function sumarAvances(avances: Avance[]): Avance {
  return avances.reduce(
    (acc, a) => ({ presentados: acc.presentados + a.presentados, total: acc.total + a.total }),
    { presentados: 0, total: 0 }
  )
}

// La nota se calcula aqui a partir de los subejercicios y no se lee el campo
// `nota` guardado: asi la vista sigue siendo correcta aunque queden categorias
// con el promedio viejo (suma / total) en la base de datos.
function notaCategoria(cat: Categoria): number | null {
  return promedio(cat.subejercicios.filter(estaPresentado).map(s => s.nota))
}

function avanceCategoria(cat: Categoria): Avance {
  return {
    presentados: cat.subejercicios.filter(estaPresentado).length,
    total: cat.subejercicios.length
  }
}

function categoriasDe(e: Ejercicio): Categoria[] {
  return Object.values(e.categorias || {}) as Categoria[]
}

function notaEjercicio(e: Ejercicio): number | null {
  return promedio(categoriasDe(e).map(notaCategoria))
}

function avanceEjercicio(e: Ejercicio): Avance {
  return sumarAvances(categoriasDe(e).map(avanceCategoria))
}

function notaSubmodulo(sub: Submodulo): number | null {
  return promedio((sub.ejercicios || []).map(notaEjercicio))
}

function avanceSubmodulo(sub: Submodulo): Avance {
  return sumarAvances((sub.ejercicios || []).map(avanceEjercicio))
}

function notaModulo(mod: Modulo): number | null {
  return promedio((mod.submodulos || []).map(notaSubmodulo))
}

function avanceModulo(mod: Modulo): Avance {
  return sumarAvances((mod.submodulos || []).map(avanceSubmodulo))
}

function notaCurso(c: Curso): number | null {
  return promedio((c.modulos || []).map(notaModulo))
}

function avanceCurso(c: Curso): Avance {
  return sumarAvances((c.modulos || []).map(avanceModulo))
}

const listaCursos = computed(() => (cursos.value || []) as Curso[])

function textoNota(nota: number | null): string {
  return nota === null ? '—' : nota.toFixed(2)
}

// Estados semanticos sobre la rampa divergente validada del proyecto
// (rojo <-> azul, no rojo/verde: la paleta se valido para daltonismo
// protan/deutan). Ver documentacion/diseno-estilos-plantillas.md.
function claseNota(nota: number | null): string {
  if (nota === null) return 'marca-neutra'
  return nota >= NOTA_APROBATORIA ? 'marca-alta' : 'marca-baja'
}

function estadoSubejercicio(sub: Subejercicio) {
  if (!estaPresentado(sub)) return { texto: 'Sin presentar', clase: 'marca-neutra' }
  if ((sub.nota ?? 0) >= NOTA_APROBATORIA) return { texto: 'Aprobado', clase: 'marca-alta' }
  if (sub.intentos_restantes > 0) return { texto: 'En curso', clase: 'marca-curso' }
  return { texto: 'Reprobado', clase: 'marca-baja' }
}

function alternarTodos() {
  if (!rootRef.value) return
  const detalles = rootRef.value.querySelectorAll('details')
  detalles.forEach(d => (d.open = !estanExpandidos.value))
  estanExpandidos.value = !estanExpandidos.value
}
</script>

<template>
  <div class="progreso-page">
    <div class="progreso-shell" ref="rootRef">

      <!-- Encabezado -->
      <header class="progreso-hero">
        <div class="hero-text">
          <p class="hero-eyebrow">Perfil del estudiante</p>
          <h1 class="hero-title">Progreso del curso</h1>
          <p class="hero-lead">
            La <strong>nota</strong> es el promedio de los subejercicios que ya presentaste.
            El <strong>avance</strong> indica cuántos has presentado del total.
            Lo que todavía no presentas no cuenta como cero.
          </p>
          <div class="hero-chips">
            <span class="chip"><strong>{{ user?.username || 'Sin datos' }}</strong></span>
            <span class="chip chip-soft">{{ user?.email || 'Sin correo' }}</span>
            <span v-if="nombreCompleto" class="chip chip-soft">{{ nombreCompleto }}</span>
          </div>

          <!-- El control es global (afecta a todos los <details> de la vista),
               por eso vive en el encabezado y no dentro de un curso. -->
          <div v-if="!cargando && !error && listaCursos.length > 0" class="hero-acciones">
            <button type="button" class="boton boton-suave" @click="alternarTodos">
              {{ estanExpandidos ? 'Contraer todo' : 'Expandir todo' }}
            </button>
          </div>
        </div>
      </header>

      <!-- Carga -->
      <div v-if="cargando" class="estado-carga" aria-live="polite">
        <div class="skeleton skeleton-panel"></div>
        <div class="skeleton skeleton-panel"></div>
        <span class="sr-only">Cargando progreso del curso</span>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="estado-mensaje estado-error" role="alert">
        <p class="estado-titulo">No se pudo cargar tu progreso</p>
        <p class="estado-detalle">{{ error }}</p>
        <button type="button" class="boton" @click="cargarCursos">Reintentar</button>
      </div>

      <!-- Sin cursos asignados -->
      <div v-else-if="cursos.length === 0" class="estado-mensaje">
        <p class="estado-titulo">Todavía no tienes cursos asignados</p>
        <p class="estado-detalle">
          Cuando se te asigne una guía, aquí verás la nota y el avance de cada ejercicio.
        </p>
      </div>

      <!-- Cursos -->
      <template v-else>
        <section v-for="(curso, ci) in listaCursos" :key="ci" class="panel">
          <header class="panel-header">
            <div class="panel-encabezado">
              <div>
                <h2 class="panel-title">{{ curso.nombre }}</h2>
                <p class="panel-subtitle">
                  {{ avanceCurso(curso).presentados }} de {{ avanceCurso(curso).total }} subejercicios presentados
                </p>
              </div>
              <span class="marca marca-grande" :class="claseNota(notaCurso(curso))">
                {{ textoNota(notaCurso(curso)) }}
              </span>
            </div>
          </header>

          <!-- Módulos -->
          <details v-for="(modulo, mi) in curso.modulos" :key="mi" class="nivel nivel-modulo">
            <summary class="nivel-summary">
              <span class="nivel-nombre">{{ modulo.nombre }}</span>
              <span class="marca" :class="claseNota(notaModulo(modulo))">
                {{ textoNota(notaModulo(modulo)) }}
              </span>
              <span class="marca marca-avance">
                {{ avanceModulo(modulo).presentados }}/{{ avanceModulo(modulo).total }}
              </span>
            </summary>

            <div class="nivel-cuerpo">
              <!-- Submódulos -->
              <details v-for="(submodulo, si) in modulo.submodulos" :key="si" class="nivel nivel-submodulo">
                <summary class="nivel-summary">
                  <span class="nivel-nombre">{{ submodulo.nombre }}</span>
                  <span class="marca" :class="claseNota(notaSubmodulo(submodulo))">
                    {{ textoNota(notaSubmodulo(submodulo)) }}
                  </span>
                  <span class="marca marca-avance">
                    {{ avanceSubmodulo(submodulo).presentados }}/{{ avanceSubmodulo(submodulo).total }}
                  </span>
                </summary>

                <div class="nivel-cuerpo">
                  <!-- Ejercicios -->
                  <details v-for="(ejercicio, ei) in submodulo.ejercicios" :key="ei" class="nivel nivel-ejercicio">
                    <summary class="nivel-summary">
                      <span class="nivel-nombre">{{ ejercicio.nombre }}</span>
                      <span class="marca" :class="claseNota(notaEjercicio(ejercicio))">
                        {{ textoNota(notaEjercicio(ejercicio)) }}
                      </span>
                      <span class="marca marca-avance">
                        {{ avanceEjercicio(ejercicio).presentados }}/{{ avanceEjercicio(ejercicio).total }}
                      </span>
                    </summary>

                    <div class="nivel-cuerpo">
                      <!-- Categorías -->
                      <details
                        v-for="(categoria, catNombre) in ejercicio.categorias"
                        :key="catNombre"
                        class="nivel nivel-categoria"
                      >
                        <summary class="nivel-summary">
                          <span class="nivel-nombre nivel-nombre-categoria">{{ catNombre }}</span>
                          <span class="marca" :class="claseNota(notaCategoria(categoria))">
                            {{ textoNota(notaCategoria(categoria)) }}
                          </span>
                          <span class="marca marca-avance">
                            {{ avanceCategoria(categoria).presentados }}/{{ avanceCategoria(categoria).total }}
                          </span>
                          <span class="nivel-fecha">
                            Último intento: {{ formatearFecha(categoria.ultimo_intento) }}
                          </span>
                        </summary>

                        <div class="nivel-cuerpo">
                          <div class="tabla-scroll">
                            <table class="tabla">
                              <thead>
                                <tr>
                                  <th scope="col">Subejercicio</th>
                                  <th scope="col">Nota</th>
                                  <th scope="col">Estado</th>
                                  <th scope="col">Intentos restantes</th>
                                  <th scope="col">Último intento</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(sub, idx) in categoria.subejercicios" :key="idx">
                                  <th scope="row">{{ sub.nombre }}</th>
                                  <td class="celda-nota">
                                    <span v-if="sub.nota === null || sub.nota === undefined" class="sin-dato">—</span>
                                    <span v-else :class="claseNota(sub.nota)" class="nota-valor">{{ sub.nota }}</span>
                                  </td>
                                  <td>
                                    <span class="marca" :class="estadoSubejercicio(sub).clase">
                                      {{ estadoSubejercicio(sub).texto }}
                                    </span>
                                  </td>
                                  <td>{{ sub.intentos_restantes }} de {{ intentosPorSubejercicio }}</td>
                                  <td>{{ formatearFecha(sub.ultimo_intento) }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </details>
                    </div>
                  </details>
                </div>
              </details>
            </div>
          </details>
        </section>
      </template>

    </div>
  </div>
</template>

<style scoped>
.progreso-page {
  min-height: 100vh;
  background: var(--ec-page-bg);
  font-family: var(--ec-font);
  color: var(--ec-text);
}

.progreso-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) clamp(16px, 4vw, 48px) 72px;
  display: grid;
  gap: clamp(20px, 2.5vw, 32px);
}

/* --- Encabezado --- */

.progreso-hero {
  position: relative;
  overflow: hidden;
  background: var(--ec-surface-glass);
  border: 1px solid var(--ec-border);
  border-radius: var(--ec-radius-lg);
  box-shadow: var(--ec-shadow-lg);
  backdrop-filter: blur(6px);
  padding: clamp(26px, 4vw, 44px);
  display: grid;
  gap: clamp(20px, 4vw, 48px);
}

.progreso-hero::before {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  top: -150px;
  right: -110px;
  background: radial-gradient(circle, rgba(110, 198, 255, 0.35), transparent 70%);
  pointer-events: none;
}

.hero-text {
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ec-blue-600);
}

.hero-title {
  margin: 0;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.hero-lead {
  margin: 14px 0 0;
  max-width: 62ch;
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.65;
  color: var(--ec-text-muted);
}

.hero-chips {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  font-family: var(--ec-font-ui);
  font-size: 14px;
  color: var(--ec-blue-800);
  background: var(--ec-blue-100);
  border: 1px solid var(--ec-border);
}

.chip-soft {
  background: rgba(255, 255, 255, 0.7);
  color: var(--ec-text-muted);
}

/* --- Paneles --- */

.panel {
  background: var(--ec-surface);
  border: 1px solid var(--ec-border);
  border-radius: var(--ec-radius-lg);
  box-shadow: var(--ec-shadow-md);
  padding: clamp(22px, 3vw, 32px);
}

.panel-header {
  margin-bottom: 18px;
}

.panel-encabezado {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.panel-title {
  margin: 0;
  font-size: clamp(19px, 1.6vw, 23px);
  color: var(--ec-blue-800);
}

.panel-subtitle {
  margin: 8px 0 0;
  font-family: var(--ec-font-ui);
  font-size: 14px;
  line-height: 1.6;
  color: var(--ec-text-subtle);
}

.hero-acciones {
  margin-top: 18px;
}

/* --- Arbol de niveles ---
   Se usa <details> nativo: no necesita JS y "Expandir todo" solo alterna la
   propiedad `open`. */

.nivel + .nivel {
  margin-top: 8px;
}

.nivel-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 11px 16px;
  border-radius: var(--ec-radius-xs);
  list-style: none;
  transition: background 0.2s ease;
}

.nivel-summary::-webkit-details-marker {
  display: none;
}

.nivel-summary::before {
  content: "";
  flex: none;
  width: 0;
  height: 0;
  border-left: 6px solid currentColor;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  opacity: 0.55;
  transition: transform 0.15s ease-in-out;
}

.nivel[open] > .nivel-summary::before {
  transform: rotate(90deg);
}

.nivel-nombre {
  font-weight: 600;
  font-size: 15px;
}

.nivel-nombre-categoria {
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 12px;
}

.nivel-fecha {
  margin-left: auto;
  font-family: var(--ec-font-ui);
  font-size: 12px;
  color: var(--ec-text-subtle);
}

.nivel-cuerpo {
  padding: 10px 0 6px 18px;
}

.nivel-modulo > .nivel-summary {
  background: var(--ec-blue-100);
  color: var(--ec-blue-800);
}

.nivel-modulo > .nivel-summary:hover {
  background: var(--ec-blue-200);
}

.nivel-submodulo > .nivel-summary {
  background: var(--ec-surface-sunken);
  color: var(--ec-blue-700);
}

.nivel-ejercicio > .nivel-summary,
.nivel-categoria > .nivel-summary {
  background: var(--ec-surface);
  border: 1px solid var(--ec-border);
  color: var(--ec-text);
}

.nivel-ejercicio > .nivel-summary:hover,
.nivel-categoria > .nivel-summary:hover,
.nivel-submodulo > .nivel-summary:hover {
  background: var(--ec-blue-100);
}

/* Sangria progresiva para que se lea la jerarquia */
.nivel-categoria > .nivel-summary {
  border-style: dashed;
}

/* --- Marcas de nota y estado ---
   Se usa la rampa divergente validada del proyecto (rojo <-> azul). No se usa
   verde: la paleta se valido para daltonismo protan/deutan, donde el par
   rojo/verde no es distinguible. Ver documentacion/diseno-estilos-plantillas.md */

.marca {
  display: inline-flex;
  align-items: center;
  flex: none;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-family: var(--ec-font-ui);
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.marca-grande {
  padding: 7px 18px;
  font-size: 16px;
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
  background: var(--ec-surface-sunken);
  border-color: var(--ec-border);
  color: var(--ec-text-subtle);
}

.marca-avance {
  background: transparent;
  border-color: var(--ec-border-strong);
  color: var(--ec-text-muted);
  font-weight: 500;
}

/* --- Tabla de subejercicios --- */

.tabla-scroll {
  overflow-x: auto;
}

.tabla {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--ec-font-ui);
  font-size: 13px;
  white-space: nowrap;
}

.tabla th,
.tabla td {
  padding: 9px 12px;
  text-align: left;
  border-bottom: 1px solid var(--ec-border);
}

.tabla thead th {
  color: var(--ec-text-subtle);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.05em;
}

.tabla tbody th {
  font-weight: 600;
  color: var(--ec-text);
}

.tabla tbody td {
  font-variant-numeric: tabular-nums;
  color: var(--ec-text-muted);
}

.celda-nota .nota-valor {
  display: inline-flex;
  min-width: 34px;
  justify-content: center;
  padding: 3px 8px;
  border-radius: var(--ec-radius-xs);
  border: 1px solid transparent;
  font-weight: 700;
}

.sin-dato {
  color: var(--ec-text-subtle);
}

/* --- Botones y estados --- */

.boton {
  padding: 10px 22px;
  border-radius: var(--ec-radius-xs);
  border: 1px solid var(--ec-border-strong);
  background: var(--ec-blue-600);
  color: #ffffff;
  font-family: var(--ec-font-ui);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.boton:hover {
  background: var(--ec-blue-700);
  transform: translateY(-1px);
}

.boton-suave {
  background: var(--ec-surface);
  color: var(--ec-blue-700);
}

.boton-suave:hover {
  background: var(--ec-blue-100);
}

.estado-mensaje {
  background: var(--ec-surface);
  border: 1px solid var(--ec-border);
  border-radius: var(--ec-radius-lg);
  box-shadow: var(--ec-shadow-md);
  padding: clamp(30px, 5vw, 56px);
  text-align: center;
  display: grid;
  gap: 12px;
  justify-items: center;
  color: var(--ec-text-muted);
}

.estado-error {
  border-color: rgba(184, 50, 50, 0.35);
}

.estado-titulo {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--ec-blue-800);
}

.estado-detalle {
  margin: 0;
  font-family: var(--ec-font-ui);
  font-size: 14px;
  color: var(--ec-text-subtle);
}

.estado-carga {
  display: grid;
  gap: clamp(20px, 2.5vw, 32px);
}

.skeleton {
  border-radius: var(--ec-radius-lg);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.6) 30%,
    rgba(215, 231, 251, 0.85) 50%,
    rgba(255, 255, 255, 0.6) 70%
  );
  background-size: 220% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
}

.skeleton-panel {
  height: 220px;
}

@keyframes skeleton-shimmer {
  from {
    background-position: 180% 0;
  }
  to {
    background-position: -20% 0;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* --- Responsive --- */

@media (max-width: 620px) {
  .nivel-cuerpo {
    padding-left: 10px;
  }

  .nivel-fecha {
    margin-left: 0;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .boton,
  .nivel-summary,
  .nivel-summary::before {
    transition: none;
  }

  .skeleton {
    animation: none;
  }
}
</style>

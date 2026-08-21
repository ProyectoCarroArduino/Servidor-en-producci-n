<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type Plugin
} from 'chart.js'
import { useApi } from '@/composables/useApi'
import { useChartTheme } from '@/composables/useChartTheme'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const { vizColors, vizFont, vizMarks } = useChartTheme()

/* ------------------------------------------------------------------ *
 * Tipos del contrato de /api/encuesta/resumen
 * ------------------------------------------------------------------ */

type Dimension = 'utilidad' | 'facilidad' | 'actitud' | 'intencion'
type Conteo = Record<string, number>

interface Resumen {
  total: number
  escala: { min: number; max: number; direccion: string; mejor: string }
  categorias: Record<Dimension, number | null>
  desviaciones: Record<Dimension, number | null>
  distribuciones: Record<Dimension, Record<string, number>>
  demografia: {
    edad: Conteo
    genero: Conteo
    empleo: Conteo
    cursos: Conteo
    hogar: Conteo
    ingresos: Conteo
  }
}

/* ------------------------------------------------------------------ *
 * Escala
 *
 * El formulario usa una escala ASCENDENTE: 1 = "Muy baja", 5 = "Muy alta",
 * igual que el TAM estandar. Los valores se grafican tal como se guardaron;
 * no hay ninguna reorientacion.
 * ------------------------------------------------------------------ */

const ESCALA_MIN = 1
const ESCALA_MAX = 5

/** Etiquetas de los 5 puntos de la escala (indice 0 = punto 1 = peor). */
const PUNTOS_ESCALA = ['Muy baja', 'Baja', 'Moderada', 'Alta', 'Muy alta'] as const

const DIMENSIONES: { clave: Dimension; nombre: string; descripcion: string }[] = [
  { clave: 'utilidad', nombre: 'Utilidad percibida', descripcion: 'Que tanto la aplicacion aporta al aprendizaje' },
  { clave: 'facilidad', nombre: 'Facilidad de uso', descripcion: 'Que tan comprensible e intuitiva resulta' },
  { clave: 'actitud', nombre: 'Actitud hacia el uso', descripcion: 'Motivacion, agrado y satisfaccion al usarla' },
  { clave: 'intencion', nombre: 'Intencion de uso', descripcion: 'Proposito de seguir usandola y de recomendarla' }
]

/* ------------------------------------------------------------------ *
 * Demografia: orden canonico + etiquetas legibles
 *
 * `ordinal: true` marca las bandas con orden natural, que se pintan con la
 * rampa de un solo tono para que el orden se lea en el color. Las nominales
 * usan un unico color de serie.
 * ------------------------------------------------------------------ */

interface BloqueDemografico {
  clave: keyof Resumen['demografia']
  titulo: string
  ordinal: boolean
  orden: { valor: string; etiqueta: string }[]
}

const BLOQUES_DEMOGRAFICOS: BloqueDemografico[] = [
  {
    clave: 'edad',
    titulo: 'Rango de edad',
    ordinal: true,
    orden: [
      { valor: 'under17', etiqueta: 'Menos de 17' },
      { valor: '17-20', etiqueta: '17 a 20' },
      { valor: '20-23', etiqueta: '20 a 23' },
      { valor: '23-26', etiqueta: '23 a 26' },
      { valor: '26plus', etiqueta: '26 o mas' }
    ]
  },
  {
    clave: 'genero',
    titulo: 'Genero',
    ordinal: false,
    orden: [
      { valor: 'Masculino', etiqueta: 'Masculino' },
      { valor: 'Femenino', etiqueta: 'Femenino' },
      { valor: 'Otro', etiqueta: 'Otro' }
    ]
  },
  {
    clave: 'empleo',
    titulo: 'Situacion laboral',
    ordinal: false,
    orden: [
      { valor: 'Employed', etiqueta: 'Empleado' },
      { valor: 'Unemployed', etiqueta: 'Desempleado' }
    ]
  },
  {
    clave: 'cursos',
    titulo: 'Formacion previa en tecnologia',
    ordinal: false,
    orden: [
      { valor: 'SI', etiqueta: 'Si' },
      { valor: 'NO', etiqueta: 'No' }
    ]
  },
  {
    clave: 'hogar',
    titulo: 'Personas en el hogar',
    ordinal: true,
    orden: [
      { valor: 'Solo', etiqueta: 'Vive solo' },
      { valor: '1-2', etiqueta: '1 a 2' },
      { valor: '3-4', etiqueta: '3 a 4' },
      { valor: '5-6', etiqueta: '5 a 6' },
      { valor: '7plus', etiqueta: '7 o mas' }
    ]
  },
  {
    clave: 'ingresos',
    titulo: 'Ingreso familiar mensual (millones)',
    ordinal: true,
    orden: [
      { valor: 'under1_5', etiqueta: 'Menos de 1,5' },
      { valor: '1_5-2_5', etiqueta: '1,5 a 2,5' },
      { valor: '2_5-3_5', etiqueta: '2,5 a 3,5' },
      { valor: '3_5-5', etiqueta: '3,5 a 5' },
      { valor: '5plus', etiqueta: '5 o mas' }
    ]
  }
]

/* ------------------------------------------------------------------ *
 * Estado
 * ------------------------------------------------------------------ */

const resumen = ref<Resumen | null>(null)
const cargando = ref(true)
const error = ref<string | null>(null)

const total = computed(() => resumen.value?.total ?? 0)
const hayDatos = computed(() => total.value > 0)

async function cargarResumen() {
  cargando.value = true
  error.value = null
  try {
    const api = useApi()
    const { data } = await api.get<Resumen>('/api/encuesta/resumen')
    resumen.value = data
  } catch (e) {
    console.error('Error al obtener los resultados:', e)
    error.value = 'No fue posible cargar los resultados de la encuesta.'
  } finally {
    cargando.value = false
  }
}

onMounted(cargarResumen)

/* ------------------------------------------------------------------ *
 * Derivados
 * ------------------------------------------------------------------ */

interface FilaDimension {
  clave: Dimension
  nombre: string
  descripcion: string
  promedio: number | null
  etiqueta: string
}

/** Traduce un promedio ya reorientado al punto cualitativo mas cercano. */
function etiquetaCualitativa(promedio: number | null): string {
  if (promedio == null) return 'Sin datos'
  const indice = Math.min(PUNTOS_ESCALA.length - 1, Math.max(0, Math.round(promedio) - 1))
  return PUNTOS_ESCALA[indice]
}

const filasDimension = computed<FilaDimension[]>(() =>
  DIMENSIONES.map(({ clave, nombre, descripcion }) => {
    const promedio = resumen.value?.categorias?.[clave] ?? null
    return {
      clave,
      nombre,
      descripcion,
      promedio,
      etiqueta: etiquetaCualitativa(promedio)
    }
  })
)

/** Numero principal de la vista: promedio de las cuatro dimensiones. */
const indiceGlobal = computed(() => {
  const valores = filasDimension.value.map(f => f.promedio).filter((v): v is number => v != null)
  if (!valores.length) return null
  return Number((valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2))
})

/* ------------------------------------------------------------------ *
 * Grafica 1 — promedio por dimension
 *
 * Job: comparar magnitud sobre categorias nominales. Una sola serie, un solo
 * color. Nunca una rampa de valor: la longitud de la barra ya codifica el dato.
 * ------------------------------------------------------------------ */

/** Dibuja el valor en la punta de cada barra (etiqueta directa selectiva). */
const valorEnPunta: Plugin<'bar'> = {
  id: 'valorEnPunta',
  afterDatasetsDraw(chart) {
    const { ctx } = chart
    const meta = chart.getDatasetMeta(0)
    ctx.save()
    ctx.font = `600 13px ${vizFont}`
    ctx.fillStyle = vizColors.ink
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    meta.data.forEach((barra, i) => {
      const valor = chart.data.datasets[0].data[i] as number | null
      if (valor == null) return
      ctx.fillText(valor.toFixed(2), barra.x + 10, barra.y)
    })
    ctx.restore()
  }
}

const datosPromedios = computed(() => ({
  labels: filasDimension.value.map(f => f.nombre),
  datasets: [
    {
      label: 'Promedio (5 = mejor percepcion)',
      data: filasDimension.value.map(f => f.promedio),
      backgroundColor: vizColors.series1,
      maxBarThickness: vizMarks.maxBarThickness,
      borderRadius: {
        topLeft: 0,
        bottomLeft: 0,
        topRight: vizMarks.barEndRadius,
        bottomRight: vizMarks.barEndRadius
      },
      borderSkipped: false
    }
  ]
}))

const opcionesPromedios = computed<ChartOptions<'bar'>>(() => ({
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  // Espacio a la derecha para que la etiqueta directa no se recorte
  layout: { padding: { right: 44 } },
  // Una sola serie: el titulo del panel ya dice que se grafica
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (item) => {
          const fila = filasDimension.value[item.dataIndex]
          return `${(item.raw as number).toFixed(2)} de 5 — ${fila.etiqueta}`
        },
        // Contexto de la dimension, sin ocupar espacio permanente en la pagina
        afterLabel: (item) => filasDimension.value[item.dataIndex].descripcion
      }
    }
  },
  scales: {
    x: {
      // El piso real de la escala es 1, no 0: arrancar en 0 inventa un rango inexistente
      min: ESCALA_MIN,
      max: ESCALA_MAX,
      ticks: { stepSize: 1, color: vizColors.inkMuted },
      grid: { color: vizColors.grid, drawTicks: false },
      border: { color: vizColors.axis }
    },
    y: {
      ticks: { color: vizColors.ink, font: { size: 13, weight: 500 } },
      grid: { display: false },
      border: { color: vizColors.axis }
    }
  }
}))

/* ------------------------------------------------------------------ *
 * Grafica 2 — distribucion de la escala
 *
 * Job: reparto de una escala ordenada. Forma: barra apilada al 100%, una por
 * dimension, ordenada de "Muy baja" (izquierda) a "Muy alta" (derecha).
 *
 * Se descarto la barra divergente centrada en el punto neutro: obliga a partir
 * la categoria del medio en dos mitades y a usar un eje que va de 100% a 100%
 * pasando por cero, lo que se lee como si sumara 200%. Aqui cada barra suma
 * 100% y el eje va de 0 a 100. La rampa rojo - gris - azul sigue dejando la
 * direccion legible en el color.
 * ------------------------------------------------------------------ */

interface PorcentajesDimension {
  /** Indice 0..4 = puntos 1..5 ya reorientados. */
  porcentajes: number[]
  conteos: number[]
}

const distribucionPorDimension = computed<Record<Dimension, PorcentajesDimension>>(() => {
  const salida = {} as Record<Dimension, PorcentajesDimension>
  for (const { clave } of DIMENSIONES) {
    const conteoCrudo = resumen.value?.distribuciones?.[clave] ?? {}
    const conteos = [1, 2, 3, 4, 5].map(p => Number(conteoCrudo[String(p)] ?? 0))
    const suma = conteos.reduce((a, b) => a + b, 0)
    salida[clave] = {
      conteos,
      porcentajes: conteos.map(c => (suma ? (c / suma) * 100 : 0))
    }
  }
  return salida
})

/** Un dataset por punto de la escala; su orden es el orden de apilado. */
const datosDistribucion = computed(() => ({
  labels: filasDimension.value.map(f => f.nombre),
  datasets: PUNTOS_ESCALA.map((etiqueta, i) => ({
    label: etiqueta,
    data: DIMENSIONES.map(({ clave }) => distribucionPorDimension.value[clave].porcentajes[i]),
    backgroundColor: vizColors.diverging[i],
    maxBarThickness: vizMarks.maxBarThickness,
    // Hueco de 2px en color superficie entre segmentos contiguos
    borderColor: vizColors.surface,
    borderWidth: { left: 1, right: 1, top: 0, bottom: 0 },
    borderSkipped: false,
    stack: 'likert'
  }))
}))

const opcionesDistribucion = computed<ChartOptions<'bar'>>(() => ({
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    // Leyenda propia en HTML, para poder ubicarla sobre la grafica
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: (items) => String(items[0].label),
        label: (item) => {
          const clave = DIMENSIONES[item.dataIndex].clave
          const dist = distribucionPorDimension.value[clave]
          const pct = dist.porcentajes[item.datasetIndex]
          const n = dist.conteos[item.datasetIndex]
          const sufijo = n === 1 ? 'respuesta' : 'respuestas'
          return `${PUNTOS_ESCALA[item.datasetIndex]}: ${pct.toFixed(1)}% (${n} ${sufijo})`
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      min: 0,
      max: 100,
      ticks: {
        color: vizColors.inkMuted,
        stepSize: 25,
        callback: (v) => `${Number(v)}%`
      },
      grid: { color: vizColors.grid, drawTicks: false },
      border: { color: vizColors.axis }
    },
    y: {
      stacked: true,
      ticks: { color: vizColors.ink, font: { size: 13, weight: 500 } },
      grid: { display: false },
      border: { color: vizColors.axis }
    }
  }
}))

/** Leyenda HTML de la distribucion (una entrada por punto de la escala). */
const leyendaDistribucion = computed(() =>
  PUNTOS_ESCALA.map((etiqueta, i) => ({ etiqueta, color: vizColors.diverging[i] }))
)

/* ------------------------------------------------------------------ *
 * Demografia — barras en HTML/CSS
 * ------------------------------------------------------------------ */

interface FilaDemografica {
  etiqueta: string
  conteo: number
  porcentaje: number
  color: string
}

interface BloqueRenderizado {
  clave: string
  titulo: string
  filas: FilaDemografica[]
  total: number
}

const bloquesDemograficos = computed<BloqueRenderizado[]>(() =>
  BLOQUES_DEMOGRAFICOS.map((bloque) => {
    const datos = resumen.value?.demografia?.[bloque.clave] ?? {}

    // Orden canonico primero; cualquier valor inesperado se agrega al final
    const conocidos = bloque.orden.map(o => o.valor)
    const extras = Object.keys(datos)
      .filter(k => !conocidos.includes(k))
      .map(k => ({ valor: k, etiqueta: k }))
    const entradas = [...bloque.orden, ...extras]

    const suma = Object.values(datos).reduce((a, b) => a + b, 0)

    return {
      clave: bloque.clave,
      titulo: bloque.titulo,
      total: suma,
      filas: entradas.map((entrada, i) => ({
        etiqueta: entrada.etiqueta,
        conteo: datos[entrada.valor] ?? 0,
        porcentaje: suma ? ((datos[entrada.valor] ?? 0) / suma) * 100 : 0,
        // Bandas ordenadas -> rampa de un tono; nominales -> un solo color
        color: bloque.ordinal
          ? vizColors.ordinal[Math.min(i, vizColors.ordinal.length - 1)]
          : vizColors.series1
      }))
    }
  })
)

/* ------------------------------------------------------------------ *
 * Exportacion
 * ------------------------------------------------------------------ */

function descargarCSV() {
  const lineas: string[] = []
  lineas.push('Seccion;Categoria;Valor;Detalle')
  lineas.push(`Muestra;Respuestas totales;${total.value};`)

  filasDimension.value.forEach(f => {
    lineas.push(`Dimension TAM;${f.nombre};${f.promedio ?? ''};${f.etiqueta} (escala 1-5, 5 = mejor)`)
  })

  DIMENSIONES.forEach(({ clave, nombre }) => {
    const dist = distribucionPorDimension.value[clave]
    dist.conteos.forEach((n, i) => {
      lineas.push(`Distribucion;${nombre} - ${PUNTOS_ESCALA[i]};${n};${dist.porcentajes[i].toFixed(1)}%`)
    })
  })

  bloquesDemograficos.value.forEach(bloque => {
    bloque.filas.forEach(fila => {
      lineas.push(`Demografia;${bloque.titulo} - ${fila.etiqueta};${fila.conteo};${fila.porcentaje.toFixed(1)}%`)
    })
  })

  // BOM para que Excel reconozca UTF-8
  const blob = new Blob(['﻿' + lineas.join('\n')], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const enlace = document.createElement('a')
  enlace.href = url
  enlace.download = `resultados-tam-${new Date().toISOString().slice(0, 10)}.csv`
  enlace.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="tam-page">
    <div class="tam-shell">
      <!-- Encabezado -->
      <header class="tam-hero">
        <div class="hero-text">
          <p class="hero-eyebrow">Modelo de Aceptacion Tecnologica</p>
          <h1 class="hero-title">Resultados de la encuesta TAM</h1>
          <p class="hero-lead">
            Percepcion de los participantes sobre la utilidad, la facilidad de uso, la actitud
            y la intencion de uso de la plataforma.
          </p>
          <div class="hero-chips">
            <span class="chip chip-soft">Escala 1 a 5 &middot; 5 = valoracion mas alta</span>
          </div>
        </div>

        <div class="hero-figuras">
          <div class="hero-figure">
            <span class="figure-label">Total de encuestas</span>
            <span class="figure-value">{{ total }}</span>
            <span class="figure-unit">{{ total === 1 ? 'respuesta' : 'respuestas' }}</span>
          </div>
          <div v-if="hayDatos" class="hero-figure">
            <span class="figure-label">Indice global</span>
            <span class="figure-value">{{ indiceGlobal?.toFixed(2) }}</span>
            <span class="figure-unit">de 5</span>
          </div>
        </div>
      </header>

      <!-- Estado: cargando -->
      <div v-if="cargando" class="estado-carga" aria-live="polite">
        <div class="skeleton skeleton-chart"></div>
        <div class="skeleton skeleton-chart"></div>
        <span class="sr-only">Cargando resultados de la encuesta</span>
      </div>

      <!-- Estado: error -->
      <div v-else-if="error" class="estado-mensaje estado-error" role="alert">
        <p>{{ error }}</p>
        <button type="button" class="boton" @click="cargarResumen">Reintentar</button>
      </div>

      <!-- Estado: sin respuestas -->
      <div v-else-if="!hayDatos" class="estado-mensaje">
        <p>Todavia no hay respuestas registradas.</p>
        <p class="estado-detalle">
          Los resultados apareceran aqui en cuanto se conteste la encuesta.
        </p>
      </div>

      <!-- Contenido -->
      <template v-else>
        <!-- Promedio por dimension: el valor de cada item vive junto a su barra -->
        <section class="panel">
          <header class="panel-header">
            <div>
              <h2 class="panel-title">Promedio por dimension</h2>
              <p class="panel-subtitle">
                Media de los cuatro items de cada dimension, rotulada al final de su barra.
                El eje arranca en 1 porque ese es el minimo real de la escala.
              </p>
            </div>
          </header>
          <div class="chart-box chart-box-promedios">
            <Bar :data="datosPromedios" :options="opcionesPromedios" :plugins="[valorEnPunta]" />
          </div>
        </section>

        <!-- Distribucion Likert -->
        <section class="panel">
          <header class="panel-header">
            <div>
              <h2 class="panel-title">Distribucion de las respuestas</h2>
              <p class="panel-subtitle">
                Que porcentaje de las respuestas cayo en cada punto de la escala. Cada barra
                suma 100% y va de la valoracion mas baja, a la izquierda, a la mas alta, a la
                derecha. Al pasar el cursor se ve el numero exacto de respuestas.
              </p>
            </div>
          </header>

          <ul class="leyenda">
            <li v-for="item in leyendaDistribucion" :key="item.etiqueta" class="leyenda-item">
              <span class="leyenda-swatch" :style="{ background: item.color }"></span>
              {{ item.etiqueta }}
            </li>
          </ul>

          <div class="chart-box chart-box-distribucion">
            <Bar :data="datosDistribucion" :options="opcionesDistribucion" />
          </div>
        </section>

        <!-- Demografia -->
        <section class="panel">
          <header class="panel-header">
            <div>
              <h2 class="panel-title">Perfil de los participantes</h2>
              <p class="panel-subtitle">
                Composicion de la muestra. Las bandas con orden natural usan una rampa de un solo
                tono para que el orden se lea en el color.
              </p>
            </div>
          </header>

          <div class="demo-grid">
            <article v-for="bloque in bloquesDemograficos" :key="bloque.clave" class="demo-card">
              <h3 class="demo-title">{{ bloque.titulo }}</h3>
              <ul class="demo-list">
                <li v-for="fila in bloque.filas" :key="fila.etiqueta" class="demo-row">
                  <span class="demo-etiqueta">{{ fila.etiqueta }}</span>
                  <span class="demo-track">
                    <span class="demo-bar" :style="{ width: fila.porcentaje + '%', background: fila.color }"></span>
                  </span>
                  <span class="demo-valor">
                    {{ fila.conteo }}
                    <span class="demo-pct">{{ fila.porcentaje.toFixed(0) }}%</span>
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Vista de tabla: todo valor graficado es legible tambien como texto -->
        <section class="panel">
          <details class="tabla-detalle">
            <summary class="tabla-summary">Ver los datos en tabla</summary>

            <h3 class="tabla-titulo">Dimensiones TAM</h3>
            <div class="tabla-scroll">
              <table class="tabla">
                <thead>
                  <tr>
                    <th scope="col">Dimension</th>
                    <th scope="col">Promedio (de 5)</th>
                    <th scope="col">Lectura</th>
                    <th v-for="punto in PUNTOS_ESCALA" :key="punto" scope="col">{{ punto }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="fila in filasDimension" :key="fila.clave">
                    <th scope="row">{{ fila.nombre }}</th>
                    <td>{{ fila.promedio?.toFixed(2) ?? '—' }}</td>
                    <td>{{ fila.etiqueta }}</td>
                    <td v-for="(n, i) in distribucionPorDimension[fila.clave].conteos" :key="i">
                      {{ n }}
                      <span class="tabla-pct">
                        ({{ distribucionPorDimension[fila.clave].porcentajes[i].toFixed(0) }}%)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="tabla-titulo">Perfil de los participantes</h3>
            <div class="tabla-scroll">
              <table class="tabla">
                <thead>
                  <tr>
                    <th scope="col">Variable</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Respuestas</th>
                    <th scope="col">Porcentaje</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="bloque in bloquesDemograficos" :key="bloque.clave">
                    <tr v-for="fila in bloque.filas" :key="bloque.clave + fila.etiqueta">
                      <th scope="row">{{ bloque.titulo }}</th>
                      <td>{{ fila.etiqueta }}</td>
                      <td>{{ fila.conteo }}</td>
                      <td>{{ fila.porcentaje.toFixed(1) }}%</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </details>

          <div class="panel-acciones">
            <button type="button" class="boton" @click="descargarCSV">Descargar CSV</button>
          </div>
        </section>

        <p class="nota-escala">
          La encuesta usa una escala ascendente de 1 a 5, donde
          <strong>5 es la valoracion mas alta</strong>. Los valores se muestran tal como se
          registraron, sin ninguna transformacion.
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.tam-page {
  min-height: 100vh;
  background: var(--ec-page-bg);
  font-family: var(--ec-font);
  color: var(--ec-text);
}

.tam-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(24px, 4vw, 56px) clamp(16px, 4vw, 48px) 72px;
  display: grid;
  gap: clamp(20px, 2.5vw, 32px);
}

/* --- Encabezado --- */

.tam-hero {
  position: relative;
  overflow: hidden;
  background: var(--ec-surface-glass);
  border: 1px solid var(--ec-border);
  border-radius: var(--ec-radius-lg);
  box-shadow: var(--ec-shadow-lg);
  backdrop-filter: blur(6px);
  padding: clamp(26px, 4vw, 44px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(20px, 4vw, 48px);
  align-items: center;
}

.tam-hero::before {
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

.chip strong {
  font-size: 15px;
}

.chip-soft {
  background: rgba(255, 255, 255, 0.7);
  color: var(--ec-text-muted);
}

.hero-figuras {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-figure {
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 2px;
  min-width: 158px;
  padding: 22px 26px;
  border-radius: var(--ec-radius-md);
  background: var(--ec-surface);
  border: 1px solid var(--ec-border);
  box-shadow: var(--ec-shadow-md);
}

.figure-label {
  font-family: var(--ec-font-ui);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ec-text-subtle);
}

.figure-value {
  font-size: 46px;
  font-weight: 700;
  line-height: 1.05;
  color: var(--ec-blue-800);
}

.figure-unit {
  font-family: var(--ec-font-ui);
  font-size: 13px;
  color: var(--ec-text-subtle);
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
  margin-bottom: 20px;
}

.panel-title {
  margin: 0;
  font-size: clamp(19px, 1.6vw, 23px);
  color: var(--ec-blue-800);
}

.panel-subtitle {
  margin: 8px 0 0;
  max-width: 78ch;
  font-family: var(--ec-font-ui);
  font-size: 14px;
  line-height: 1.6;
  color: var(--ec-text-subtle);
}

/* Alturas fijas que ya incluyen la banda de ejes, para que nada quede recortado */
.chart-box {
  position: relative;
  width: 100%;
}

.chart-box-promedios {
  height: 280px;
}

.chart-box-distribucion {
  height: 300px;
}

.leyenda {
  list-style: none;
  margin: 0 0 18px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}

.leyenda-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--ec-font-ui);
  font-size: 13px;
  color: var(--ec-text-muted);
}

.leyenda-swatch {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  flex: none;
}

/* --- Demografia --- */

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(14px, 2vw, 24px);
}

.demo-card {
  background: var(--ec-surface-sunken);
  border: 1px solid var(--ec-border);
  border-radius: var(--ec-radius-sm);
  padding: 20px;
}

.demo-title {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
  color: var(--ec-blue-800);
}

.demo-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.demo-row {
  display: grid;
  grid-template-columns: minmax(84px, 30%) minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  font-family: var(--ec-font-ui);
  font-size: 13px;
}

.demo-etiqueta {
  color: var(--ec-text-muted);
}

.demo-track {
  height: 14px;
  background: var(--ec-surface);
  border-radius: 4px;
  overflow: hidden;
}

.demo-bar {
  display: block;
  height: 100%;
  min-width: 2px;
  border-radius: 0 4px 4px 0;
  transition: width 0.6s ease;
}

.demo-valor {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--ec-text);
  white-space: nowrap;
}

.demo-pct {
  font-weight: 500;
  color: var(--ec-text-subtle);
}

/* --- Tabla --- */

.tabla-detalle {
  border-top: 1px solid var(--ec-border);
  padding-top: 4px;
}

.tabla-summary {
  cursor: pointer;
  padding: 14px 0;
  font-family: var(--ec-font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--ec-blue-700);
}

.tabla-titulo {
  margin: 20px 0 10px;
  font-size: 15px;
  color: var(--ec-blue-800);
}

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

.tabla-pct {
  color: var(--ec-text-subtle);
}

.panel-acciones {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
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

.estado-detalle {
  margin: 0;
  font-size: 14px;
  color: var(--ec-text-subtle);
}

.estado-carga {
  display: grid;
  gap: clamp(20px, 2.5vw, 32px);
}

.skeleton {
  border-radius: var(--ec-radius-md);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.6) 30%,
    rgba(215, 231, 251, 0.85) 50%,
    rgba(255, 255, 255, 0.6) 70%
  );
  background-size: 220% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
}

.skeleton-chart {
  height: 320px;
  border-radius: var(--ec-radius-lg);
}

@keyframes skeleton-shimmer {
  from {
    background-position: 180% 0;
  }
  to {
    background-position: -20% 0;
  }
}

.nota-escala {
  margin: 0;
  padding: 16px 20px;
  border-left: 3px solid var(--ec-blue-600);
  border-radius: var(--ec-radius-xs);
  background: var(--ec-blue-100);
  font-family: var(--ec-font-ui);
  font-size: 13px;
  line-height: 1.65;
  color: var(--ec-text-muted);
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

@media (max-width: 1024px) {
  .tam-hero {
    grid-template-columns: 1fr;
  }

  .hero-figuras {
    justify-self: start;
  }
}

@media (max-width: 620px) {
  .demo-row {
    grid-template-columns: minmax(72px, 34%) minmax(0, 1fr) auto;
    gap: 8px;
  }

  .chart-box-promedios,
  .chart-box-distribucion {
    height: 340px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .demo-bar,
  .boton {
    transition: none;
  }

  .skeleton {
    animation: none;
  }
}
</style>

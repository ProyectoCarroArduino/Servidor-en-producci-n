import { Chart as ChartJS } from 'chart.js'

/**
 * Tema compartido para chart.js.
 *
 * Los colores replican los tokens de `assets/theme.css` y estan validados
 * (banda de luminosidad, piso de croma, separacion CVD protan/deutan y contraste
 * contra superficie blanca). Se declaran aqui como literales porque chart.js
 * pinta sobre <canvas> y no resuelve `var(--token)`.
 *
 * Reglas de asignacion de color que sostiene este tema:
 *  - Categorias nominales (dimensiones TAM, genero, empleo): UNA sola serie, un
 *    solo color (`series1`). Nunca una rampa de valor sobre categorias sin orden.
 *  - Bandas con orden natural (edad, hogar, ingresos): rampa `ordinal`, un solo
 *    tono, claro -> oscuro, para que el orden se lea en el color.
 *  - Escala Likert (1..5): rampa `diverging`, dos tonos opuestos con gris neutro
 *    al centro.
 */

export const vizColors = {
  series1: '#2a78d6',
  series1Soft: '#dce9fa',

  ordinal: ['#86b6ef', '#5598e7', '#2a78d6', '#1c5cab', '#104281'],

  /** Indice 0..4 = puntos 1..5 de la escala ya orientada (5 = mejor percepcion) */
  diverging: ['#b83232', '#ec8b8a', '#d9d7d2', '#86b6ef', '#1c5cab'],

  grid: '#e6ecf4',
  axis: '#c8d4e2',
  ink: '#0b1f33',
  inkMuted: '#6b7f94',
  surface: '#ffffff',
  track: '#e8eff8'
} as const

export const vizFont = '"Manrope", "Segoe UI", system-ui, sans-serif'

/** Grosor maximo de barra y separacion en superficie entre marcas contiguas. */
export const vizMarks = {
  maxBarThickness: 24,
  /** Radio del extremo de dato; el lado de la linea base queda recto. */
  barEndRadius: 4,
  /** Hueco de 2px en color superficie que separa marcas que se tocan. */
  surfaceGap: 2
} as const

let aplicado = false

/**
 * Aplica los defaults del tema una sola vez por sesion.
 * Idempotente: se puede llamar desde cualquier vista que dibuje graficas.
 */
export function useChartTheme() {
  if (!aplicado) {
    ChartJS.defaults.font.family = vizFont
    ChartJS.defaults.font.size = 13
    ChartJS.defaults.color = vizColors.inkMuted

    ChartJS.defaults.plugins.legend.labels.usePointStyle = true
    ChartJS.defaults.plugins.legend.labels.pointStyle = 'circle'
    ChartJS.defaults.plugins.legend.labels.boxWidth = 8
    ChartJS.defaults.plugins.legend.labels.boxHeight = 8
    ChartJS.defaults.plugins.legend.labels.padding = 16
    ChartJS.defaults.plugins.legend.labels.color = vizColors.ink

    // El tooltip complementa: nunca es la unica via para leer un valor
    // (la vista tambien expone la tabla de datos).
    ChartJS.defaults.plugins.tooltip.backgroundColor = '#0b1f33'
    ChartJS.defaults.plugins.tooltip.titleColor = '#ffffff'
    ChartJS.defaults.plugins.tooltip.bodyColor = '#d7e7fb'
    ChartJS.defaults.plugins.tooltip.padding = 12
    ChartJS.defaults.plugins.tooltip.cornerRadius = 10
    ChartJS.defaults.plugins.tooltip.displayColors = false
    ChartJS.defaults.plugins.tooltip.titleFont = { family: vizFont, size: 13, weight: 600 }
    ChartJS.defaults.plugins.tooltip.bodyFont = { family: vizFont, size: 13, weight: 400 }

    aplicado = true
  }

  return { vizColors, vizFont, vizMarks }
}

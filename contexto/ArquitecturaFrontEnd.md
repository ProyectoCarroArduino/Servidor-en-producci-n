# Arquitectura y funcionamiento front-end

## Estructura general
- App Vue 3 en `Login/client`.
- Entrada en `Login/client/src/main.ts` crea app, Pinia, y carga plugin `authentication` antes de montar.

## Router
- `Login/client/src/router/index.ts` define rutas de auth, teoria, ejercicios y guia de construccion.
- Rutas cargadas de forma lazy con `import()`.

## Estado y composables
- `Login/client/src/stores/auth.ts`: maneja usuario y token; login/refresh/logout.
- `Login/client/src/stores/evaluation.ts`: almacena evaluaciones locales por categoria.
- `Login/client/src/composables/useApi.ts`: instancias axios y refresh automatico.
- `Login/client/src/composables/useEvaluacionSubejercicio.ts`: integracion con `/api/curso/evaluar`.
- `Login/client/src/composables/useProgresoCurso.ts`: progreso del curso.
- `Login/client/src/composables/useConceptos.ts`: glosario/referencias.

## HTTP y entorno
- `Login/client/src/utils/axios.ts` usa `VITE_API_URI` y `withCredentials`.
- `Login/client/vite.config.ts` agrega proxy `/api` -> `http://localhost:5000`.

## UI y assets
- Bootstrap 5 + material icons.
- `Login/client/src/assets/theme.css`: tokens de diseno globales (solo variables CSS).
- Recursos en `Login/client/src/assets` y `Login/client/public/imagenes*`.

## Integraciones
- Analisis de codigo: vistas de ejercicios llaman `VITE_API_URI_ANALYZE` con axios.
- Encuesta TAM y glosario consumen endpoints `/api/encuesta` y `/api/glosario` a traves
  de la capa axios (`useApi` / `useApiPrivate`), es decir respetando `VITE_API_URI`.
  `EncuestaTAMCopy.vue` usa `useApiPrivate` (rutas con auth) y `ResultadosEncuesta.vue`
  usa `useApi` (el resumen es publico).

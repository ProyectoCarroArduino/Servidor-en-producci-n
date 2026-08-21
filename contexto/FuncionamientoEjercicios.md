# Funcionamiento relacionado a ejercicios

## Estructura en BD
- `User.curso[]` -> `modulos[]` -> `submodulos[]` -> `ejercicios[]`.
- Cada ejercicio tiene categorias: `descomposicion`, `algoritmo`, `abstraccion`, `generalizacion`.
- Cada categoria contiene `subejercicios[]` con `nota`, `intentos_restantes`, `ultimo_intento`.

## Plantillas y sincronizacion
- `CourseTemplate` define la plantilla base.
- `Login/server/seedCourseTemplate.js` crea/actualiza la plantilla.
- `Login/server/sincronizarUsuarios.js` clona o actualiza cursos en usuarios.
- `Login/server/LimpiarCursos.js` elimina cursos obsoletos.
- `Login/server/ActualizarIntentos.js` resetea intentos de subejercicios.

## Flujo de evaluacion (backend)
- Endpoint `/api/curso/evaluar` (`cursoController.registrarEvaluacion`).
- Requiere: `cursoNombre`, `modulo`, `submodulo`, `ejercicio`, `categoria`, `subejercicio`, `nota`.
- Si `nota` es `null` -> solo consulta intentos/nota/ultimo_intento.
- Si `nota` tiene valor -> reduce intentos, guarda nota, recalcula promedio de categoria y ultimo intento.

## Composables (frontend) para evaluacion
- `useEvaluacionSubejercicio` usa POST `/api/curso/evaluar` para consultar y registrar.
- `useEvaluacion` tambien registra, pero usa `/curso/evaluar`; requiere que `VITE_API_URI` apunte a `/api` o usar proxy.

## Tipos de ejercicios por curso
- Guia de programacion:
  - Temas: variables/operaciones, switch, while, arrays, funciones sin parametros.
  - Metodologia: ordenar imagenes/audios, drag-and-drop, crucigramas, completar estructuras.
- Guia de construccion del carro Arduino:
  - Fases y subfases en `Login/client/src/views/auth/ConstruccionCarroArduino/...`.
  - Cada fase tiene ejercicios por categoria (descomposicion/algoritmo/abstraccion/generalizacion).
  - En varios casos se valida codigo C desde el cliente usando `VITE_API_URI_ANALYZE`.

## Evaluacion y progreso
- La nota se calcula en el cliente (normalmente basada en numero de intentos) y se envia al backend.
- Progreso y notas se leen con `/api/curso/progreso` y se muestran en `Login/client/src/views/auth/ProgresoCurso.vue`.

## Requisito: validacion desde BD
- Los ejercicios validos deben usar composables (BD) para intentos/nota.
- Los ejercicios con validacion local estan listados en `contexto/EjerciciosPendientes.md`.

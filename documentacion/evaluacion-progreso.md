# Evaluacion y visualizacion de progreso

## Alcance
- Describe como se registra la evaluacion de ejercicios, como se calcula el progreso y donde se visualiza en la UI.

## Estructura de datos (BD)
- User.curso -> modulos -> submodulos -> ejercicios -> categorias -> subejercicios.
- Categorias fijas: descomposicion, algoritmo, abstraccion, generalizacion.
- Campos por subejercicio: nota, intentos_restantes, ultimo_intento.
- Modelos base: Login/server/models/User.js, Login/server/models/Module.js, Login/server/models/Submodule.js, Login/server/models/Exercise.js, Login/server/models/EvaluationCategory.js.

## Backend (API y scripts)
- Rutas: Login/server/routes/api/cursoRoutes.js expone POST /api/curso/evaluar y GET /api/curso/progreso.
- registrarEvaluacion en Login/server/controlllers/cursoController.js:
  - Requiere cursoNombre, modulo, submodulo, ejercicio, categoria, subejercicio.
  - Si nota es null, responde estado del subejercicio (intentos_restantes, nota, ultimo_intento).
  - Si nota tiene valor, descuenta intentos, guarda nota y recalcula promedio y ultimo_intento de la categoria.
- obtenerProgresoCurso retorna user.curso completo para la visualizacion del avance.
- Scripts operativos:
  - Login/server/seedCourseTemplate.js crea/actualiza la plantilla base.
  - Login/server/sincronizarUsuarios.js clona plantilla a usuarios existentes.
  - Login/server/ActualizarIntentos.js reinicia intentos para un usuario.

## Frontend (consumo y UI)
- Login/client/src/composables/useEvaluacionSubejercicio.ts consulta y registra la evaluacion con /api/curso/evaluar.
- Login/client/src/composables/useEvaluacion.ts hace lo mismo pero con /curso/evaluar (depende de VITE_API_URI).
- Login/client/src/composables/useProgresoCurso.ts consulta /api/curso/progreso.
- Login/client/src/views/auth/ProgresoCurso.vue renderiza un arbol con <details> y calcula promedios en el cliente.

## Estado actual y validacion
- Persistencia: varios ejercicios usan evaluacion local y no escriben en BD. Ver lista en contexto/EjerciciosPendientes.md.
- Respuesta API vs composables: /api/curso/evaluar devuelve subejercicio en data.subejercicio, pero useEvaluacionSubejercicio/useEvaluacion esperan data.intentos_restantes/nota. Esto puede dejar el estado en null hasta que se reconsulte.
- Cobertura de plantilla: seedCourseTemplate.js define un curso y un ejercicio; ejercicios fuera de esa estructura devolveran 404 en /api/curso/evaluar si no se amplian las plantillas.
- Progreso: la API no calcula promedios por modulo/submodulo; el frontend los calcula al mostrar.

# Funcionamiento principal

## Arquitectura general
- Repo dividido en `Login/client` (SPA Vue 3) y `Login/server` (API Express).
- La API maneja autenticacion, cursos, evaluacion, glosario y encuesta TAM.
- El cliente consume la API via Axios con `VITE_API_URI` y usa rutas de Vue Router.

## Stack
- Front-end: Vue 3 + Vite + Pinia + Vue Router + Bootstrap + Axios.
- Back-end: Node.js + Express + Mongoose + JWT + bcryptjs.
- BD: MongoDB (colecciones User, CourseTemplate, Respuestas, GlosarioReferencias).

## Backend (API)
- Entrada principal: `Login/server/index.js` crea servidor en puerto `5000`, habilita CORS y middlewares, y monta rutas:
  - `/api/auth` (registro, login, refresh, logout, profile, analyze, changePassword).
  - `/api/curso` (evaluacion y progreso).
  - `/api/encuesta` (TAM).
  - `/api/glosario` (conceptos y referencias).
- Conexion a MongoDB en `Login/server/config/database.js` usando `URI_MONGODB`.
- Conexion manual (scripts) en `Login/server/config/connectManual.js`.

## Base de datos
- Estructura del curso dentro de `User.curso`:
  - curso -> modulos -> submodulos -> ejercicios -> categorias -> subejercicios.
- Plantilla de curso en `CourseTemplate` se clona al registrar usuario (`register` en `Login/server/controlllers/authController.js`).

## Parametros y variables importantes
- `URI_MONGODB`: cadena de conexion MongoDB.
- `ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`: firmas JWT.
- `EMAIL_USER`, `EMAIL_PASS`, `CLIENT_URI`: usados por el mailer (verificacion de email).
- `VITE_API_URI`: base URL API desde el cliente.
- `VITE_API_URI_ANALYZE`: endpoint para analisis de codigo (cliente).

## Scripts operativos
- `Login/server/seedCourseTemplate.js`: crea o actualiza la plantilla de curso.
- `Login/server/sincronizarUsuarios.js`: sincroniza cursos de usuarios con la plantilla.
- `Login/server/LimpiarCursos.js`: elimina cursos obsoletos de usuarios.
- `Login/server/ActualizarIntentos.js`: resetea intentos de subejercicios.
- `Login/server/insertarConceptos.js`: carga glosario y referencias.

## Local
  - Backend en `http://localhost:5000` (`npm run dev` en `Login/server`).
  - Frontend en `http://localhost:5173` (`npm run dev` en `Login/client`).
  - El cliente usa `VITE_API_URI` para apuntar al backend y el proxy de Vite redirige `/api` a `http://localhost:5000`.
- Si se usa Vercel, se requiere adaptar el backend (serverless o API externa) y configurar variables de entorno.

# Funcionamiento y seguridad

## Autenticacion
- JWT access token en header `Authorization: Bearer <token>`.
- `authentication` middleware verifica token y carga `req.user` desde MongoDB.
- `auth` middleware bloquea rutas si `req.user.id` no existe (401).

## Tokens y sesiones
- Access token: `expiresIn: 1800s`.
- Refresh token: `expiresIn: 1d`, guardado en `User.refresh_token` y cookie httpOnly `refresh_token`.
- Cookie con `httpOnly`, `sameSite: None`, `secure: true`, `maxAge` ~30 dias.

## Passwords
- Hash con bcrypt (rounds=10) en registro y cambio de password.

## CORS y headers
- Origenes permitidos en `Login/server/config/allowed_origins.js`.
- `corsOptions` valida `origin` y habilita `credentials`.
- `credentials` middleware agrega headers CORS (solo `POST` y `Content-Type`).

## Validacion/entrada
- Validaciones manuales en controladores (campos requeridos y comparacion de passwords).
- Dependencia `express-validator` instalada pero no usada en rutas.

## Email/verify
- Ruta `/api/auth/verify-email` referencia `Login/server/middlewares/verifyEmail.js` pero el archivo no existe.
- `Login/server/utils/mailer.js` usa `nodemailer` y variables `EMAIL_USER`, `EMAIL_PASS`, `CLIENT_URI`.

## Observaciones de seguridad
- `authentication` se ejecuta globalmente, pero el bloqueo real depende de `auth`.
- Rutas declaradas sin implementacion visible en `authController`: `checkEmail` y `checkUsername`.

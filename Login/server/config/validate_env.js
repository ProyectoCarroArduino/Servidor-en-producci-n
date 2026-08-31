// Verifica al arrancar que estén todas las variables
// que el servidor necesita.
//
// Sin esto, la falta de una variable no se nota hasta que
// un usuario real intenta registrarse y el fallo aparece
// como un 400 genérico.

const requiredEnv = [
    "URI_MONGODB",
    "ACCESS_TOKEN_SECRET",
    "REFRESH_TOKEN_SECRET",
    "ACTIVATION_TOKEN_SECRET",
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "CLIENT_URI"
];

const missing = requiredEnv.filter((name) => !process.env[name]);

if (missing.length > 0) {
    console.error(
        "\nNo se puede iniciar el servidor. Faltan variables en server/.env:"
    );

    missing.forEach((name) => console.error("  - " + name));

    console.error(
        "\nRevisa server/env-example para ver como completarlas.\n"
    );

    process.exit(1);
}
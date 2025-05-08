// middlewares/credentials.js
import { allowedOrigins } from "./allowed_origins.js";

export const corsOptions = {
    origin: (origin, callback) => {
        // Permitir solicitudes de orígenes específicos
        if (allowedOrigins.includes(origin)) {
            callback(null, origin);
        } 
        // Permitir cualquier origen que contenga "vercel.app"
        else if (origin && origin.includes("vercel.app")) {
            callback(null, origin);
        }
        // Permitir solicitudes sin origen (como aplicaciones móviles o herramientas como Postman)
        else if (!origin) {
            callback(null, origin);
        } 
        // Rechazar otras solicitudes
        else {
            callback("Error de CORS origin: " + origin + " No autorizado!");
        }
    },
    credentials: true,
};




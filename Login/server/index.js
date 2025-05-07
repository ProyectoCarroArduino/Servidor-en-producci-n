import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieparser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { corsOptions } from "./config/cors.js";
import "./config/database.js";
import { credentials } from "./middlewares/credentials.js";
import { errorHandler } from "./middlewares/error_handler.js";
import authRouter from "./routes/api/auth.js";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas API - deben ir ANTES de las rutas de archivos estáticos
app.use("/api/auth", authRouter);

// Configuración para archivos estáticos de la API
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// Servir archivos estáticos del frontend Vue
// Usar la carpeta dist en la misma carpeta del servidor (donde tu script lo está copiando)
const clientDistPath = path.join(__dirname, "dist");
console.log("Ruta de archivos estáticos:", clientDistPath);
app.use(express.static(clientDistPath));

// Para manejar rutas del lado del cliente (Vue Router)
// Esta ruta debe ir DESPUÉS de todas las rutas API
app.get("*", (req, res, next) => {
  const indexPath = path.join(clientDistPath, "index.html");
  console.log("Intentando servir:", indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error enviando index.html:", err);
      next(err);
    }
  });
});

// Manejador de errores personalizado
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("DB conectada");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});


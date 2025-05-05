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
import {credentials} from "./middlewares/credentials.js";
import {errorHandler} from "./middlewares/error_handler.js";
import authRouter from "./routes/api/auth.js";
import bodyParser from "body-parser";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors(corsOptions));
app.use(credentials);
app.use(express.json());
app.use(cookieparser());
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth", authRouter);

// Servir archivos estáticos del frontend Vue
app.use(express.static(path.join(__dirname, '../client/dist')))

// 👉 CUALQUIER OTRA RUTA MANDA index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// Manejador de errores personalizado
app.use(errorHandler);

// 404 si no se atrapó antes
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "error 404 not found" });
  } else {
    res.type("text").send("404 not found");
  }
});


mongoose.connection.once("open", () => {
    console.log("DB conectada");
    
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});




// Importaciones y configuraciones principales ->
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import urlRoutes from "./routes/url.routes.js";
import { redirectToOriginalUrl } from "./controllers/urlController.js";
// import swaggerUi from "swagger-ui-express"; <- descomentar cuando sea necesario ***
// import swaggerSpec from "../swagger.js"; <- descomentar cuando sea necesario ***

// Inicializar app express y dotenv ->
dotenv.config();
const app = express();

// Middlewares ->
app.use(cors());
app.use(express.json());

// Conexion a BD ->
connectDB();

// Rutas ->
app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes); //
app.get("/:shortId", redirectToOriginalUrl); // <- ruta para accedar al sitio original con url acortada
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); <- descomentar cuando sea necesario ***

// Levantamiento de servidor ->
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running server in http://localhost:${PORT}`);
});

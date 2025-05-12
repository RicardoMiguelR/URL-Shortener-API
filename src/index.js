// Importaciones y configuraciones principales ->
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import urlRoutes from "./routes/url.routes.js";
import { redirectToOriginalUrl } from "./controllers/urlController.js";
import swaggerUi from "swagger-ui-express"; // <- swagger importaciones
import swaggerJSDoc from "swagger-jsdoc"; // <- swagger importaciones
import { swaggerOptions } from "./swagger.config.js"; // <- swagger importaciones (options)
const specs = swaggerJSDoc(swaggerOptions); // <- swagger importaciones

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
app.use("/api/url", urlRoutes);

// Documentacion de api con swagger ->
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customSiteTitle: "URL Shortener API - Documentación",
    customCss: ".swagger-ui .topbar { display: none }",
  })
);

app.get("/:shortId", redirectToOriginalUrl); // <- ruta para accedar al sitio original con url acortada

// Levantamiento de servidor ->
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running server in http://localhost:${PORT}`);
});

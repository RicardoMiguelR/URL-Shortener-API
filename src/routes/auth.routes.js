import express from "express";
import { registerUser, login } from "../controllers/authController.js";

// Router ->
const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *      summary: Registra un nuevo usuario
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          201:
 *              description: Usuario registradi correctamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/AuthResponse"
 *          400:
 *              description: Email ya registrado o datos invalidos
 *          500:
 *              description: Error en el servidor
 */
router.post("/register", registerUser); // <- Ruta para registro

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: Inicia sesion y devuelve un token JWT
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          200:
 *              description: Usuario autenticado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/AuthResponse"
 *          401:
 *              description: Credenciales invalidas
 *          500:
 *              description: Error en el servidor
 */
router.post("/login", login); // <- Ruta para login

// exportacion del router ->
export default router;

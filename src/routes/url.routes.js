import express from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
} from "../controllers/urlController.js";
import { getUserUrls } from "../controllers/getUrlsController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

// importamos el router ->
const router = express.Router();

/**
 * @swagger
 * /api/url/shorten:
 *  post:
 *    summary: Acorta una URL original o inicial
 *    tags: [URL]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - originalUrl
 *            properties:
 *              originalUrl:
 *                type: string
 *                example: "https://www.google.com"
 *    responses:
 *      201:
 *        description: URL acortada exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                shortUrl:
 *                  type: string
 *                shortId:
 *                  type: string
 *                originalUrl:
 *                  type: string
 *      400:
 *        description: Falta la URL original
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 *      404:
 *        $ref: "#/components/responses/NotFound"
 *      500:
 *        description: Error en el servidor
 */
router.post("/shorten", verifyToken, createShortUrl); // <- Ruta protegida: acortar URL

/**
 * @swagger
 * /{shortId}:
 *   get:
 *     summary: Redirige a la URL original usando el shortId
 *     tags: [URL]
 *     parameters:
 *       - in: path
 *         name: shortId
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID corto generado
 *     responses:
 *       302:
 *         description: Redirección exitosa
 *       404:
 *         description: URL no encontrada
 *       500:
 *         description: Error en el servidor
 */
router.get("/:shortId", redirectToOriginalUrl); // <- Ruta publica: redirigir

/**
 * @swagger
 * /api/url:
 *   get:
 *     summary: Obtener todas las URLs acortadas por el usuario
 *     tags: [URL]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de URLs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   originalUrl:
 *                     type: string
 *                   shortId:
 *                     type: string
 *                   shortUrl:
 *                     type: string
 */
router.get("/", verifyToken, getUserUrls); // <- Ruta para obtener todos los urls acortados

export default router;

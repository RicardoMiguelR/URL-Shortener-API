import express from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
} from "../controllers/urlController.js";
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

export default router;

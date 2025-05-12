import express from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
} from "../controllers/urlController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

// importamos el router ->
const router = express.Router();

// Ruta protegida: acortar URL ->
router.post("/shorten", verifyToken, createShortUrl);

// Ruta publica: redirigir ->
router.get("/:shortId", redirectToOriginalUrl);

export default router;

import express from "express";
import { register, login } from "../controllers/authController.js";

// Router ->
const router = express.Router();

// Ruta para registro ->
router.post("/register", register);

// Ruta para login ->
router.post("/login", login);

// exportacion del router ->
export default router;

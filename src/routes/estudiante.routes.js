import express from "express";
import { crearEstudiante, buscarEstudiantes, listarEstudiantes } from "../controllers/estudiante.controller.js";

const router = express.Router();

router.post("/", crearEstudiante);
router.get("/buscar", buscarEstudiantes); // Ruta para buscar estudiantes
router.get("/", listarEstudiantes); // Ruta para listar todos los estudiantes

export default router;

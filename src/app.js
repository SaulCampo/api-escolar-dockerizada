import express from "express";
import cors from "cors";
import estudianteRoutes from "./routes/estudiante.routes.js";
import { connectDB } from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use("/api/estudiantes", estudianteRoutes);

export default app;

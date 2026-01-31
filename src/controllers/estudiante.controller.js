import Estudiante from "../models/estudiante.model.js";

// Crear estudiante
export const crearEstudiante = async (req, res) => {
  try {
    const nuevo = new Estudiante(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Buscar estudiantes por nombre o curso
export const buscarEstudiantes = async (req, res) => {
  try {
    const { nombre, curso } = req.query;
    const filtro = {};
    if (nombre) filtro.nombres = new RegExp(nombre, "i");
    if (curso) filtro.curso = new RegExp(curso, "i");
    const estudiantes = await Estudiante.find(filtro);
    res.json(estudiantes);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};

// Leer todos los estudiantes
export const listarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

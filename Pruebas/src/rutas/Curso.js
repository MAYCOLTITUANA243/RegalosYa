const express = require("express");
const Curso = require("../modelos/Curso");
const cursoEsquema = require("../modelos/Curso");
const router = express.Router();

// METODO POST DE ESTUDIANTE
router.post("/cursos", (req, res) => {
  let curso = new cursoEsquema ({
    nombreCurso:req.body.nombreCurso,
    paralelo:req.body.paralelo
  });
  curso
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET TODOS ESTUDIANTES
router.get("/cursos", (req, res) => {
    cursoEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET ESTUDIANTE POR ID
router.get("/cursos/:id", (req, res) => {
  const { id } = req.params;
  cursoEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO DELETE ESTUDIANTE POR ID
router.delete("/cursos/:id", (req, res) => {
  const { id } = req.params;
  cursoEsquema

    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO UPDATE ESTUDIANTE POR ID
router.put("/cursos/:id", (req, res) => {
  const { id } = req.params;
  const { nombreCurso, paralelo} = req.body;
  //const total=req.body.preci*req.body.quantity;
  cursoEsquema
    .updateOne({ _id: id }, { $set: { nombreCurso, paralelo} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


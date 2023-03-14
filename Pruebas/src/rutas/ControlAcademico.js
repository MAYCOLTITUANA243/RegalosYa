const express = require("express");
const Control = require("../modelos/ControlAcademico");
const controlEsquema = require("../modelos/ControlAcademico");
const router = express.Router();

// METODO POST DE ESTUDIANTE
router.post("/controlAcademico", (req, res) => {
  let control = new controlEsquema ({
    idEstudiante:req.body.idEstudiante,
    idCurso:req.body.idCurso,
    asistencias:req.body.asistencias,
    calificaciones:req.body.calificaciones
  });
  control
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET TODOS ESTUDIANTES
router.get("/controlAcademico", (req, res) => {
    controlEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET ESTUDIANTE POR ID
router.get("/controlAcademico/:id", (req, res) => {
  const { id } = req.params;
  controlEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO DELETE ESTUDIANTE POR ID
router.delete("/controlAcademico/:id", (req, res) => {
  const { id } = req.params;
  controlEsquema

    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO UPDATE ESTUDIANTE POR ID
router.put("/controlAcademico/:id", (req, res) => {
  const { id } = req.params;
  const { idEstudiante,idCurso,asistencias,calificaciones} = req.body;
  //const total=req.body.preci*req.body.quantity;
  Control
    .updateOne({ _id: id }, { $set: { idEstudiante,idCurso,asistencias,calificaciones} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


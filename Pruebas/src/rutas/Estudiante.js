const express = require("express");
const estudiante = require("../modelos/Estudiante");
const estudianteEsquema = require("../modelos/Estudiante");
const router = express.Router();

// METODO POST DE ESTUDIANTE
router.post("/estudiantes", (req, res) => {
  let estudiante = new estudianteEsquema ({
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    fecha:req.body.fecha,
    email:req.body.email,
    cedula:req.body.cedula,
  });
  estudiante
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET TODOS ESTUDIANTES
router.get("/estudiantes", (req, res) => {
    estudianteEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET ESTUDIANTE POR ID
router.get("/estudiantes/:id", (req, res) => {
  const { id } = req.params;
  estudianteEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO DELETE ESTUDIANTE POR ID
router.delete("/estudiantes/:id", (req, res) => {
  const { id } = req.params;
  estudianteEsquema

    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO UPDATE ESTUDIANTE POR ID
router.put("/estudiantes/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, fecha, email, cedula } = req.body;
  //const total=req.body.preci*req.body.quantity;
  Estudiante
    .updateOne({ _id: id }, { $set: { nombre, apellido, fecha, email, cedula} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


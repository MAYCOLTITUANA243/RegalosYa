const express = require("express");
const Usuario = require("../modelos/Usuario");
const usuarioEsquema = require("../modelos/Usuario");
const router = express.Router();

// METODO POST DE ESTUDIANTE
router.post("/usuarios", (req, res) => {
  let usuario = new usuarioEsquema ({
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    tipoUsuario:req.body.tipoUsuario,
    telefono:req.body.telefono,
    email:req.body.email,
    password:req.body.password
  });
  usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET TODOS ESTUDIANTES
router.get("/usuarios", (req, res) => {
    usuarioEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET ESTUDIANTE POR ID
router.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuarioEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO DELETE ESTUDIANTE POR ID
router.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  usuarioEsquema

    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO UPDATE ESTUDIANTE POR ID
router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, tipoUsuario, telefono, email, password } = req.body;
  //const total=req.body.preci*req.body.quantity;
  usuarioEsquema
    .updateOne({ _id: id }, { $set: { nombre, apellido, tipoUsuario, telefono, email, password} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


const express = require("express");
const Adorno = require("../modelos/Adorno");
const adornoEsquema = require("../modelos/Adorno");
const router = express.Router();

// METODO POST DE ESTUDIANTE
router.post("/regalos", (req, res) => {
  let adorno = new adornoEsquema ({
    nombre:req.body.nombre,
    precio:req.body.precio,
    url:req.body.url,
    descripcion:req.body.descripcion
  });
  adorno
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET TODOS ESTUDIANTES
router.get("/regalos", (req, res) => {
    adornoEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO GET ESTUDIANTE POR ID
router.get("/regalos/:id", (req, res) => {
  const { id } = req.params;
  adornoEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO DELETE ESTUDIANTE POR ID
router.delete("/regalos/:id", (req, res) => {
  const { id } = req.params;
  adornoEsquema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODO UPDATE ESTUDIANTE POR ID
router.put("/regalos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio, url, descripcion} = req.body;
  adornoEsquema
    .updateOne({ _id: id }, { $set: { nombre, precio, url, descripcion} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


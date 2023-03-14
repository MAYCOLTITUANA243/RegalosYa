const mongoose = require("mongoose");

const Estudiante = mongoose.Schema({
  nombre: {
    type: String,
    required: false,
  },
  apellido: {
    type: String,
    required: false
  },
  fecha: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required:false
  },
  cedula: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Estudiante', Estudiante,'Estudiante');
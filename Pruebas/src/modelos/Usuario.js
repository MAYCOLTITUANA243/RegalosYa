const mongoose = require("mongoose");

const usuario = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true
  },
  tipoUsuario: {
    type: String,
    required: true
  },
  telefeno: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Usuario', usuario,'Usuario');
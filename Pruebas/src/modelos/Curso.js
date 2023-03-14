const mongoose = require("mongoose");

const curso = mongoose.Schema({
  nombreCurso: {
    type: String,
    required: true,
  },
  paralelo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Curso', curso,'Curso');
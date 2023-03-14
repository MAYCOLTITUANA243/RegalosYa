const mongoose = require('mongoose')

const controlAcademico = mongoose.Schema({

    idEstudiante:{
        type: String,
        required: true
    },

    idCurso:{
        type: String,
        required: true
    },

    asistencias:{
        type:Array,
        required:true
    },
    calificaciones:{
        type:Array,
        required:true
    },
})

module.exports = mongoose.model('ControlAcademico', controlAcademico, 'ControlAcademico')
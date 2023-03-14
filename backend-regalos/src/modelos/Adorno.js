const mongoose = require('mongoose')

const adorno = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },

    precio:{
        type: String,
        required: true
    },

    url:{
        type:String,
        required:true
    },
    
    descripcion:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Adorno', adorno, 'Adorno')
const mongoose = require('mongoose')

const adornoScheme = new mongoose.Schema({
    idAdorno:{
        type: String,
        required: true
    },
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
module.exports = mongoose.model("Adorno", adornoScheme);


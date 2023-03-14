const mongoose = require('mongoose')

const esquemaOperacionesMatematicas = mongoose.Schema({

    numero1:{
        type: 'number',
        required: true
    },

    numero2:{
        type: 'number',
        required: true
    },

    resultado:{
        type:'number',
        required: false
    },

    tipoOperacion:{
        type: 'string',
        required: false
    },
})

module.exports = mongoose.model('OperacionesMatematicas', esquemaOperacionesMatematicas, 'OperacionesMatematicas')
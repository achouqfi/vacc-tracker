const mongoose = require('mongoose')

const sideEffect = new mongoose.Schema({ 
    email: {
        type: String,
    },       
    Cin: {
        type: String,
    },
    SideEffectDesc: {
        type: String,
    },       
    phone: {
        type: String,
    }
})

module.exports = mongoose.model('sideEffect', sideEffect)
const mongoose = require('mongoose')

const sideEffect = new mongoose.Schema({ 
    email: {
        type: String,
        // required: true
    },       
    Cin: {
        type: String,
        // required: true
    },        
   
    SideEffectDesc: {
        type: String,
        // required: false
    },       
    phone: {
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('sideEffect', sideEffect)
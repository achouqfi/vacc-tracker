const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    age: {
        type: String,
    },    
    firstName: {
        type: String,
    },    
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },    
    city: {
        type: String,
    },    
    Cin: {
        type: String,
    },      
    chronicDisease: {
        type: String,
    },          
    phone: {
        type: String,
    },       
    region: {
        type: String,
    },   
    vacc1: {
        type: String,
    },
    vacc2: {
        type: String,
    },
    vacc3: {
        type: String,
    },
})

module.exports = mongoose.model('appointment', appointmentSchema)
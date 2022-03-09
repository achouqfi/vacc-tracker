const manager = require("../models/manager.model");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { comparePassword } = require('../helpers/JwtValidation')
const { RegionalManager } = require('../utils/mail')

const loginManager = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password)
            return res.status(404).json({ message: "Please fill all the fields" })
            const existingAdmin = await manager.findOne({ email })
            if (!existingAdmin) return res.status(404).json({ message: "Manager not found" })
            comparePassword(password, existingAdmin, res)
            console.log("manager");
            res.cookie('role', "manager", { httpOnly: true })
            res.cookie('region', existingAdmin.region , { httpOnly: true })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const index = async (req, res) => {
    try {
        const managers = await manager.find()
        res.status(200).json(managers)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const store = async (req, res) => {
    const { email, firstName, lastName , region } = req.body
    try {
        if (!email || !firstName || !lastName)
            return res.status(400).json({ message: "Please fill all the fields" })

        const existingManager = await manager.findOne({ email })

        if (existingManager)
            return res.status(400).json({ message: "Manager already exists" })

        let password = Math.random().toString(20).substring(2, 10)
        const hashedPassword = await bcrypt.hash(password, 10)
        const newManager = await manager.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hashedPassword,
            region
        })
        
        RegionalManager(email , lastName , firstName , password)
        res.status(200).json({ newManager })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteManager = async (req, res) => {
    const { id } = req.params
    try {
        await manager.findByIdAndDelete(id)
        res.status(200).json({ message: "Manager deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = {
    index,
    loginManager,
    store,
    deleteManager
};
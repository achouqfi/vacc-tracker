const { comparePassword } = require('../helpers/JwtValidation')
const admin = require("../models/admin.model")

const loginAdmin = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password)
            return res.status(404).json({ message: "Please fill all the fields" })
        const existingAdmin = await admin.findOne({ email })
        if (!existingAdmin) return res.status(404).json({ message: "Manager not found" })
        // comparePassword(password, existingAdmin, res)
        if (existingAdmin.password === password && existingAdmin.email === email) {
            return res.status(200).json({ message: "Login Successful", role:'admin'})
        }
        res.status(400).json({message: "wrong creds"})


    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports = {
    loginAdmin
}
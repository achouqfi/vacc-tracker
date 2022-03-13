const UrbanCenter = require('../models/urbanCenter.model')
const index = async (req, res) => {
    const { region } = req.params

    try {
        const urbanCenters = await UrbanCenter.find({region})
        
        res.status(200).json(urbanCenters)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const store = async (req, res) => {
    const { location, region, urbanCenter } = req.body
    try {
        if (!location || !urbanCenter || !region)
            return res.status(400).json({ message: "Please fill all the fields" })

        const newUrbanCenter = await UrbanCenter.create({
            urbanCenter,
            location,
            region
        })

        console.log(newUrbanCenter);

        res.status(200).json({ newUrbanCenter })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
const deleteUrbanCenter = async (req, res) => {
    const { id } = req.params
    try {
        await UrbanCenter.findByIdAndDelete(id)
        res.status(200).json({ message: "Urban Center deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    deleteUrbanCenter,
    store,
    index
}
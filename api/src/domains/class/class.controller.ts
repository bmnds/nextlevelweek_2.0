import express from 'express'

const ClassController = express.Router()

// Create Class
ClassController.post('/classes', (req, res) => {
    const data = req.body
    console.log(data)
    return res.status(500).end()
})

export default ClassController
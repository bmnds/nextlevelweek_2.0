import express from 'express'
import db from '../database/connection'

const ConnectionController = express.Router()

ConnectionController.post('/connections', async (req, res) => {
    const {user_id} = req.body

    const [conn_id] = await db('connections').insert({user_id})

    return res.status(201)
        .header('location', `${req.url}/${conn_id}`)
        .end()
})

ConnectionController.get('/connections', async (req, res) => {
    const [total] = await db('connections').count('* as total')
    return res.json(total)
})

export default ConnectionController
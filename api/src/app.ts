import express from 'express'
import cors from 'cors'

import UserController from './controllers/user.controller'
import ClassController from './controllers/class.controller'
import ConnectionController from './controllers/connection.controller'

const app = express()

app.use(express.json())
app.use(cors())

//TODO how to auto-register all controllers?
app.use(UserController)
app.use(ClassController)
app.use(ConnectionController)

export default app
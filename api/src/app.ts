import express from 'express'

import UserController from './domains/user/user.controller'
import ClassController from './domains/class/class.controller'

const app = express()

app.use(express.json())

//TODO how to auto-register all controllers?
app.use(UserController)
app.use(ClassController)

export default app
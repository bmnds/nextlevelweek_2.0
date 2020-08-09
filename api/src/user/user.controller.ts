import express from 'express'

const UserController = express.Router()

const users = [
    {"id": 1, "name": "Bruno", "mail": "bruno@gmail.com"},
    {"id": 2, "name": "Diego", "mail": "diego@gmail.com"}
]

UserController.get('/users', (req, res) => {
    let name = req.query.name
    if (name != undefined) {
        let searchResults = users.filter(user => {
            return user.name == name
        })
        return res.send(searchResults)
    }

    return res.send(users)
})

UserController.get('/users/:id', (req, res) => {
    let searchResults = users.filter(user => {
        return user.id == +req.params.id
    })
    if (searchResults.length == 0) {
        return res.status(404).end()
    }
    let user = searchResults[0];
    return res.send(user)
})

UserController.post('/users', (req, res) => {
    let ids = users.map(user => user.id)
    let maxId = ids.reduce((max, id) => id > max ? id : max)
    let user = req.body
    user.id = ++maxId
    users.push(user)
    return res.location(req.url+'/'+user.id).status(201).end()
})

export default UserController
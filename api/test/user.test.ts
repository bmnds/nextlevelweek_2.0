import app from '../src/app'
import request from 'supertest'

describe('Create User Test', () => {
    it('should create a user and return its id on location header', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                "name": "Wesley",
                "mail": "wesley@fullcycle.com"
            })
        expect(res.status).toEqual(201)
        expect(res.header['location']).toMatch(/\/users\/\d+/)
    })
})
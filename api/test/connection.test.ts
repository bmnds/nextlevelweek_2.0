import db from '../src/database/connection'
import app from '../src/app'
import request from 'supertest'

beforeAll(async () => {
    // setup database before running tests
    await db.migrate.latest()
})

afterAll(async () => {
    // tear down the database after the tests are complete
    await db.migrate.rollback()
})

describe('Create Connection Test', () => {
    it('should create a connection and return its id on location header', async (done) => {
        const res = await request(app)
            .post('/connections')
            .send({
                user_id: 1
            })
        expect(res.status).toEqual(201)
        expect(res.header['location']).toMatch(/\/connections\/\d+/)
        done()
    })
})

describe('Count Connections Test', () => {
    it('should return the amount of created connections', async (done) => {
        const expectedOutput = { total: 1 }

        request(app).get('/connections')
            .expect(200, expectedOutput, done)
    })
})
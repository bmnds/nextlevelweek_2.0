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

describe('Create Class Test', () => {
    it('should create a class and return its id on location header', async (done) => {
        const res = await request(app)
            .post('/classes')
            .send({
                "name": "Bruno Mendes",
                "bio": "Engenheiro de formação, Programador de profissão, Investidor de paixão e Aventureiro por emoção",
                "avatar": "https://avatars0.githubusercontent.com/u/433506?s=460&u=29334cfd31a7664c7b60a4e74b15a324a50a9ed5&v=4",
                "whatsapp": "929999999",
                "subject": "Educação Financeira",
                "cost": 84.99,
                "schedules": [
                    { "week_day": "SEG", "from": "08:00", "to": "12:00" },
                    { "week_day": "QUA", "from": "08:00", "to": "12:00" },
                    { "week_day": "SEX", "from": "08:00", "to": "12:00" }
                ]
            })
        expect(res.status).toEqual(201)
        expect(res.header['location']).toMatch(/\/classes\/\d+/)
        done()
    })
})

describe('List Classes Test', () => {
    it('should return no processable entity when no filter is passed', async (done) => {
        request(app)
            .get('/classes')
            .expect(422, done)
    })

    it('should return resource not found when there are no classes at `week_day`', async (done) => {
        const searchCriteria = {
            "week_day": "DOM",
            "subject": "Educação Financeira",
            "time": "10:00"
        }

        request(app)
            .get('/classes')
            .query(searchCriteria)
            .expect(404, done)
    })

    it('should return resource not found when there are no classes for the given `subject`', async (done) => {
        const searchCriteria = {
            "week_day": "SEG",
            "subject": "Como bugar a Matrix",
            "time": "10:00"
        }

        request(app)
            .get('/classes')
            .query(searchCriteria)
            .expect(404, done)
    })

    it('should return resource not found when there are no classes at the given period of `time`', async (done) => {
        const searchCriteria = {
            "week_day": "SEG",
            "subject": "Educação Financeira",
            "time": "07:59"
        }

        request(app)
            .get('/classes')
            .query(searchCriteria)
            .expect(404, done)
    })

    it('should return the class that matches the given search criteria', async (done) => {
        const searchCriteria = {
            "week_day": "SEG",
            "subject": "Educação Financeira",
            "time": "10:00"
        }

        const expectedResult = {
            "name": "Bruno Mendes",
            "whatsapp": "929999999",
            "subject": "Educação Financeira",
        }

        const res = await request(app)
            .get('/classes')
            .query(searchCriteria)
            .expect(200)
        const [filteredClass] = res.body

        expect(filteredClass).toMatchObject(expectedResult)
        done()
    })
})
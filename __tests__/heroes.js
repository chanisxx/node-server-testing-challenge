const supertest = require('supertest')
const server = require('../server')
const db = require('../data/config')

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe('Heroes integration tests', () => {

    it('Returns a list of heroes', async () => {
        const res = await supertest(server).get('/api/heroes/')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.length).toBe(6)
        expect(res.body[0].name).toBe("Izuku Midoriya")
    })

    it('Deletes a hero', async () => {
        const res = await supertest(server).delete('/api/heroes/2')
        expect(res.type).toBe('application/json')
        expect(res.body.message).toBe('Hero deleted.')
    })

    it('Creates a hero', async () => {
        const res = await supertest(server)
        .post('/api/heroes')
        .send({ name: "All Might"})

        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.name).toBe('All Might')
        expect(res.body.id).toBeDefined()
    })

})
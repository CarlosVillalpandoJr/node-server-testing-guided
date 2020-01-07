const request = require('supertest')

const server = require('./server.js')  
const db = require('../data/dbConfig.js')

// test suite for the entire server
describe('the server', () => {

    // runs before each test in suite
    beforeEach(async () => {
        await db('hobbits').truncate()
    })

    describe('GET /', () => {

        xit('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing')
        })

        it('should return status 200', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return the correct object', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json');
                    expect(res.body).toEqual({ api: "up" })
                })
        })
    })

    describe('GET /hobbits', () => {
        it('should return a list of hobbits', () => {
            return request(server)
                .get('/hobbits')
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toBe('application/json')
                    expect(res.body.length).toBe(0)
                })
        })
    })
})
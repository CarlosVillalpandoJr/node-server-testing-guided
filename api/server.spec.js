const server = require('./server.js')  

// test suite for the entire server
describe('the server', () => {
    describe('GET /', () => {

        it('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing')
        })

    })
})
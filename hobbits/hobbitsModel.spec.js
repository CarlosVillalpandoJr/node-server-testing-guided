const Hobbits = require('./hobbitsModel.js')
const db = require('../data/dbConfig.js')

describe('The Hobbit Model', () => {

    // runs before each test in suite
    beforeEach(async () => {
        await db('hobbits').truncate()
    })

    describe('the insert function', () => {
        it('should insert a new hobbit', async () => {
            // test setup
            const hobbitData = { name: 'frodo' }
            const hobbit = Hobbits.insert(hobbitData)

            // assertion
            const hobbits = await db('hobbits');
            expect(hobbits.length).toBe(1)
            expect(hobbits[0].name).toBe('frodo')
        })

        it('should resolve to the newly created hobbit', async () => {
            // test setup
            const hobbitData = { name: 'cholo' }
            const hobbit = await Hobbits.insert(hobbitData);

            // assertion
            expect(hobbit).toEqual({ id: 1, name: 'cholo' })
        })
    })

})
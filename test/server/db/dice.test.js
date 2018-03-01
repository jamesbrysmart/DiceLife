const env = require('../test-environment')
const diceDb = require('../../../server/db/dice')


// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('read dice db', () => {
  return diceDb.getDiceOptions(testDb)
    .then(dice => {
      expect(dice.length).toBe(15)
    })
})
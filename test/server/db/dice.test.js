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
      expect(dice[0]['id']).toEqual(2)
    })
})

test('dice name and options included - join table works', () => {
  return diceDb.getDiceOptions(testDb)
    .then(dice => {
      expect(Object.keys(dice[0]).length).toEqual(6)
    })
})
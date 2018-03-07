const request = require('supertest')

const env = require('./test-environment')
const diceDb = require('../../server/db/dice')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('users db', () => {
  return diceDb.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(1)
      expect(users[0].hasOwnProperty('text')).toBeFalsy()
    })
})

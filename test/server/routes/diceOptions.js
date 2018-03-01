const request = require('supertest')

jest.mock('../../../server/db/dice', () => ({
  getDiceOptions: () => Promise.resolve([
    {id: 1, name: 'test name 1'},
    {id: 2, name: 'test name 2'}
  ])
}))

const server = require('../../../server/server')

test('GET /', () => {
  return request(server)
    .get('/api/diceOptions')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
const request = require('supertest')
var JWT = require('jsonwebtoken')
var secret = 'Krang'
process.env.JWT_SECRET = secret

jest.mock('../../../server/db/dice', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, name: 'test name 1'},
    {id: 2, name: 'test name 2'}
  ])
}))

const server = require('../../../server/server')

test('GET /api/users returns an array of objects', () => {
  var token = JWT.sign({id: 1, name: "symesharr"}, secret)
  const headers = {
    Accept: 'application/json',
    Authorization: "Bearer "+token
  }
  return request(server)
    .get('/api/users')
    .expect(200)
    .set(headers)
    .then(res => {
      expedct(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

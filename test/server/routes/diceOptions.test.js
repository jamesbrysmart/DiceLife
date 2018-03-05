const request = require('supertest')
var JWT    = require('jsonwebtoken')
var secret = 'KRANG'
process.env.JWT_SECRET = secret

jest.mock('../../../server/db/dice', () => ({
  getDiceOptions: () => Promise.resolve([
    {id: 1, name: 'test name 1'},
    {id: 2, name: 'test name 2'}
  ]),
  addNewDice: () => Promise.resolve([
    {id: 1, name: 'Tim Ferris Books'},
    {id: 2, name: 'Wes Anderson Movies'}
  ]),
  addNewDiceOptions: () => Promise.resolve([
    {id: 1, name: 'Tribe for Mentors'},
    {id: 2, name: 'The Royal Tennanbaums'}
    ])
}))

const server = require('../../../server/server')

test('GET /', () => {
  var token = JWT.sign({id: 1, name: "harrison"}, secret)
  const headers = {
    Accept: 'application/json',
    Authorization: "Bearer "+token
  }
  return request(server)
    .get('/api/diceOptions')
    .expect(200)
    .set(headers)
    .then(res => {
      expect(res.body.dice.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('POST /', () => {
  var token = JWT.sign({id: 1, name: "harrison"}, secret)
  const headers = {
    Accept: 'application/json',
    Authorization: "Bearer "+token
  }
  return request(server)
  .post('/api/diceOptions')
  .expect(200)
  .set(headers)
  .then(res => {
    expect(res.body.optionId.length).toBe(2)
  })
  .catch(err => {
    expect(err).toBeFalsy()
  })
})

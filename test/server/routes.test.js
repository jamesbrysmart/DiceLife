const request = require('supertest')

jest.mock('../../server/routes/diceNames', () => ({
  getFakeDice: () => Promise.resolve([
    {id: 1, text: 'test text 1'},
    {id: 2, text: 'test text 2'}
  ])
}))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/api/diceNames')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

// test('GET /', () => {
//   return request(server)
//     .get('/api/diceOptions')
//     .expect(200)
//     .then(res => {
//       expect(res.body.length).toBe(2)
//     })
//     .catch(err => {
//       expect(err).toBeFalsy()
//     })
// })

import reducer from '../../../client/reducers/users'

test('users inital state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('RECEIVE_USERS', () => {
  const users = [{}, {}]
  const actual = reducer([], {
    type: 'RECEIVE_USERS',
    users
  })
  expect(actual).toEqual(users)
})

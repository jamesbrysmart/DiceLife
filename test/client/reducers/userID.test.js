import reducer from '../../../client/reducers/userID'

test('userID inital state', () => {
  expect(reducer(undefined, {})).toEqual(null)
})

test('ADD_USER_ID', () => {
  const id = 3
  const actual = reducer([], {
    type: 'ADD_USER_ID',
    id
  })
  expect(actual).toEqual(id)
})

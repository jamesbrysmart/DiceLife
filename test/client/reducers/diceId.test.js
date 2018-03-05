import reducer from '../../../client/reducers/diceId'


test('diceId inital state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('ADD_DICE_ID processes', () => {
  const id = 1
  const actual = reducer([], {
    type: 'ADD_DICE_ID',
    id
  })
  expect(actual).toEqual(id)
})

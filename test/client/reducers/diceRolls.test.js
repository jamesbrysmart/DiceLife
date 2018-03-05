import reducer from '../../../client/reducers/diceRolls'

test('dice rolls initial state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('NEW_DICE_ROLL', () => {
  const arr = [{id: 1}, {id: 2}]
  const actual = reducer([], {
    type: 'NEW_DICE_ROLL',
    arr
  })
  expect(actual).toEqual(arr)
})

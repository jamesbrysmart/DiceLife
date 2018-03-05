import reducer from '../../../client/reducers/diceOutcomes'

test('diceOutcomes inital state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('RECEIVE_DICE_OUTCOME', () => {
  const outcomes = [{id: 1}, {id: 2}]
  const actual = reducer([], {
    type: 'RECEIVE_DICE_OUTCOME',
    outcomes
  })
  expect(actual).toEqual(outcomes)
})


test('ADD_DICE_OUTCOME', () => {
  const outcome = {id: 1}
  const actual = reducer(
    {},
    {
      type: 'ADD_DICE_OUTCOME',
      outcome
    }
  )
  expect(actual).toEqual([outcome])
})

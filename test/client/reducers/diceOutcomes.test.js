import reducer from '../../../client/reducers/diceOutcomes'

test('RECEIVE_DICE_OUTCOME', () => {
  const outcomes = [{id: 1}, {id: 2}]
  const actual = reducer([], {
    type: 'RECEIVE_DICE_OUTCOME',
    outcomes
  })
  expect(actual).toEqual(outcomes)
})

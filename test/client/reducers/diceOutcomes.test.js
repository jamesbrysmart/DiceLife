import reducer from '../../../client/reducers/diceOutcomes'

test('RECEIVE_DICE_OUTCOME', () => {
  const actual = reducer([], {
    type: 'RECEIVE_DICE_OUTCOME',
    outcomes:[{}, {}]
  })
  expect(actual).toEqual([{}, {}])
})
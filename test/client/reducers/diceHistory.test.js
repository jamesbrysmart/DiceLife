import reducer from '../../../client/reducers/diceHistory'

test('diceHistory inital state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

test('RECEIVE_DICE_HISTORY', () => {
  const history = [{id: 1}, {id: 2}]
  const actual = reducer(
    {},
    {
      type: 'RECEIVE_DICE_HISTORY',
      history
   }
  )
  expect(actual).toEqual(history)
})


test('ADD_DICE_HISTORY', () => {
  const newRoll = {id: 1}
  const actual = reducer(
    {},
    {
      type: 'ADD_DICE_HISTORY',
      newRoll
    }
  )
  expect(actual).toEqual([newRoll])
})

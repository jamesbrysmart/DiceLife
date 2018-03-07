import reducer from '../../../client/reducers/diceNames'

test('Check test is picking up', () => {
  expect(true).toBeTruthy()
})

test('diceNames initial state', () => {
  expect(reducer(undefined, {})).toEqual([])
})


test('Test recieve diceNames executes', () => {
  const names = ['Guy', 'Harrison']
  const actual = reducer(
    {},
    {
      type: 'RECEIVE_DICE_NAMES',
      names
   }
  )
  expect(actual).toEqual(names)
})

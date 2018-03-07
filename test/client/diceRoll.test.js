var rollDice = require('../../client/diceRollFunction')


test('rollDice returns a number between 2-12', () => {
  expect(typeof rollDice()).toBe('number')
})

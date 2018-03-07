var rollDice = require('../../client/diceRollFunction').rollDice


test('rollDice returns a number between 2-12', () => {
  expect(typeof rollDice()).toBe('object')
})

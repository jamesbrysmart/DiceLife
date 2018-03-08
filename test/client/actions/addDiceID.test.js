import addDiceID from '../../../client/actions/diceID'

test('adds DiceID action', () => {
    const id = 2
    const actual = {
      type: 'ADD_DICE_ID',
      id
    }
    expect(addDiceID(id)).toEqual(actual)
  })
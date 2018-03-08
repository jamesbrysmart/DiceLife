import diceRolls from '../../../client/actions/diceRolls'

test('adds dice Roll', ()=> {
    const arr = [2, 5, 7]
    const actual = {
        type: 'NEW_DICE_ROLL',
        arr
    }
    expect(diceRolls(arr)).toEqual(actual)
})
import * as actions from '../../../client/actions/diceOutcomes'

test('requests dice outcomes', ()=> {
    const actual = {
        type: 'REQUEST_DICE_OUTCOME',
    }
    expect(actions.requestDiceOutcomes()).toEqual(actual)
})

test('recieves dice names', ()=> {
    const outcomes = [1]
    const actual = {
        type: 'RECEIVE_DICE_OUTCOME',
        outcomes
    }
    expect(actions.receiveDiceOutcomes(outcomes)).toEqual(actual)
})

test('adds dice outcome', ()=> {
    const outcome = 'fly a kite'
    const actual = {
        type: 'ADD_DICE_OUTCOME',
        outcome
    }
    expect(actions.addDiceOutcome(outcome)).toEqual(actual)
})

test('edit dice outcome', ()=> {
    const oldDice = 'fly a kite'
    const newDice = 'fly a plane'
    const actual = {
        type: 'EDIT_DICE_OUTCOME',
        oldDice, 
        newDice
    }
    expect(actions.editDiceOutcome(oldDice, newDice)).toEqual(actual)
})
test('showError', ()=> {
    const errorMessage = [7]
    const actual = {
        type: 'SHOW_ERROR',
        errorMessage
    }
    expect(actions.showError(errorMessage)).toEqual(actual)
})

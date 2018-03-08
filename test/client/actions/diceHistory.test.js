import * as actions from '../../../client/actions/diceHistory'

test('requests dice history', ()=> {
    const actual = {
        type: 'REQUEST_DICE_HISTORY'
    }
    expect(actions.requestDiceHistory()).toEqual(actual)
})

test('recieves dice history', ()=> {
    const history = []
    const actual = {
        type: 'RECEIVE_DICE_HISTORY',
        history
    }
    expect(actions.receiveDiceHistory(history)).toEqual(actual)
})

test('addDiceHistory', ()=> {
    const newRoll = [7]
    const actual = {
        type: 'ADD_DICE_HISTORY',
        newRoll
    }
    expect(actions.addDiceHistory(newRoll)).toEqual(actual)
})

test('showError', ()=> {
    const errorMessage = [7]
    const actual = {
        type: 'SHOW_ERROR',
        errorMessage
    }
    expect(actions.showError(errorMessage)).toEqual(actual)
})


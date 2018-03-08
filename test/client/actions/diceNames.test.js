import * as actions from '../../../client/actions/diceNames'

test('requests dice names', ()=> {
    const actual = {
        type: 'REQUEST_DICE_NAMES',
    }
    expect(actions.requestDiceNames()).toEqual(actual)
})

test('recieves dice names', ()=> {
    const names = [1]
    const actual = {
        type: 'RECEIVE_DICE_NAMES',
        names
    }
    expect(actions.receiveDiceNames(names)).toEqual(actual)
})

test('adds dice names', ()=> {
    const name = ['edi']
    const actual = {
        type: 'ADD_DICE_NAME',
        name
    }
    expect(actions.addDiceName(name)).toEqual(actual)
})

test('removes dice names', ()=> {
    const id = 1
    const actual = {
        type: 'REMOVE_DICE_NAME',
        id
    }
    expect(actions.removeDiceName(id)).toEqual(actual)
})

test('showError', ()=> {
    const errorMessage = [7]
    const actual = {
        type: 'SHOW_ERROR',
        errorMessage
    }
    expect(actions.showError(errorMessage)).toEqual(actual)
})



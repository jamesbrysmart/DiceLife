import request from '../utils/api'

function requestDiceOutcomes() {
  return {
    type: 'REQUEST_DICE_OUTCOME',
  }
}

function receiveDiceOutcomes(outcomes) {
  return {
    type:'RECEIVE_DICE_OUTCOME',
    outcomes
  }
}

function addDiceOutcome(outcome) {
  return {
    type:'ADD_DICE_OUTCOME',
    outcome
  }
}

function editDiceOutcome(oldDice, newDice) {
  return {
    type:'EDIT_DICE_OUTCOME',
    oldDice,
    newDice
  }
}

function showError(errorMessage) {
  return {
    type:'SHOW_ERROR',
    errorMessage
  }
}

export function getDiceOutcomes () {
  return function (dispatch) {
    dispatch(requestDiceOutcomes())
    request('get', 'diceOptions')
    .then(res => {
      dispatch(receiveDiceOutcomes(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}

export function addNewDice (dice) {
  return (dispatch) => {
    request('post', 'diceOptions', dice)
      .then(res => dispatch(addDiceOutcome(res.body)))
      .catch(err => console.log({err}))
  }
}

export function editDice (oldDice, newDice){
  return (dispatch)=> {
    request('put', 'diceOptions', oldDice.id)
      .send(newDice)
      .then(res=>dispatch(editDiceOutcome(res.body)))
      .catch(err=> console.log({err}))
  }
}
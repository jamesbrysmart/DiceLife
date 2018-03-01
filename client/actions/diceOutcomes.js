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
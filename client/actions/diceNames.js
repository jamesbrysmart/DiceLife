import request from '../utils/api'


function requestDiceNames() {
  return {
    type: 'REQUEST_DICE_NAMES'
  }
}

function receiveDiceNames(names) {
  return {
    type: 'RECEIVE_DICE_NAMES',
    names
  }
}

function showError(errorMessage) {
  return {
    type:'SHOW_ERROR',
    errorMessage
  }
}


// Sends a request to server for the names of dice
export function getDiceNames() {
  return function(dispatch) {
    dispatch(requestDiceNames())
    request('get', 'diceNames')
    .then(res => {
      dispatch(receiveDiceNames(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}

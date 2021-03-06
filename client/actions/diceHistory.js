import request from '../utils/api'

function requestDiceHistory() {
    return {
      type: 'REQUEST_DICE_HISTORY',
    }
}
  
function receiveDiceHistory(history) {
return {
    type:'RECEIVE_DICE_HISTORY',
    history
    }
}

function addDiceHistory(newRoll) {
    return {
      type:'ADD_DICE_HISTORY',
      newRoll
    }
}

function showError(errorMessage) {
    return {
      type:'SHOW_ERROR',
      errorMessage
    }
}

export function getDiceHistory () {
    return function (dispatch) {
      dispatch(requestDiceHistory())
      request('get', 'history')
      .then(res => {
        dispatch(receiveDiceHistory(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
    }
}

export function addNewRoll (roll) {
    return (dispatch) => {
      request('post', 'history', roll)
        .then(res => dispatch(addDiceHistory(res.body)))
        .catch(err => console.log({err}))
    }
}

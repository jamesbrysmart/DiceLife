import request from '../utils/api'
import { isError } from 'util';


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

export function addDiceName(name) {
  return {
    type: 'ADD_DICE_NAME',
    name
  }
}

function removeDiceName(id) {
  console.log(id)
  return {
    type: 'REMOVE_DICE_NAME',
    id
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

export function inactiveDice(id) {
  console.log(id)
  return function(dispatch) {
    request('put', 'diceNames/'+ id)
    .then(res => {
      console.log(res)
      dispatch(removeDiceName(id))
    })
      .catch(err => {
        console.log(err)
        dispatch(showError(err.message))
    })
  }
}
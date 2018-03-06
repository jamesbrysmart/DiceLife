
function diceHistory(state={dice: []}, action) {

    switch(action.type) {
      case 'RECEIVE_DICE_HISTORY':
        return action.history
      case 'ADD_DICE_HISTORY':
        return [...state, action.newRoll]
      default:
        return state

    }
}

export default diceHistory

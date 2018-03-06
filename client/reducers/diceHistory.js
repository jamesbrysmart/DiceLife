
function diceHistory(state={dice: []}, action) {
  
  switch(action.type) {
    case 'RECEIVE_DICE_HISTORY':
      console.log(action.history)
      return action.history
    case 'ADD_DICE_HISTORY':
      return [...state, action.roll]
    default:
      return state
  }
}

export default diceHistory
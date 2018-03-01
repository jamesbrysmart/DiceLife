function diceNames(state=[], action) {
  switch(action.type) {
    // Adds dice names to store as diceNames
    case 'RECEIVE_DICE_NAMES':
    return action.names
    default:
    return state
  }
}

export default diceNames

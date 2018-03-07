function diceNames(state=[], action) {
  switch(action.type) {
    // Adds dice names to store as diceNames
    case 'RECEIVE_DICE_NAMES':
      return action.names
    case 'ADD_DICE_NAME':
      return [...state, action.name]  
    case 'REMOVE_DICE_NAME':
      return [...state].filter(names => names.id!= action.id)
    default:
     return state
  }
}

export default diceNames

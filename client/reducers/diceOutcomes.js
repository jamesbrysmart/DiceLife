

function diceOutcomes(state=[], action) {
  switch(action.type) {
    case 'RECEIVE_DICE_OUTCOME':
      return action.outcomes

    default:
      return state  
  }
}

export default diceOutcomes
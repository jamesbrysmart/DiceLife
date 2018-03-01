

function diceOutcomes(state=[], action) {
  console.log({action})
  switch(action.type) {
    case 'RECEIVE_DICE_OUTCOME':
      return [...action.outcomes]
    case 'ADD_DICE_OUTCOME':
      return [...state, action.outcome]
    // case 'EDIT_DICE_OUTCOME':
    //   if action.oldDice
    //   return [...state]
    default:
      return state
  }
}


export default diceOutcomes
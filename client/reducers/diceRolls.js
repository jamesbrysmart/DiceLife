
export default function diceRolls(state=[], action) {  
  switch (action.type) {
    case 'NEW_DICE_ROLL':
    return action.arr 
    default:
      return state
  }
}
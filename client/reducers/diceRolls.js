
export default function diceRolls(state=[], action) {  
  console.log('hello')
  switch (action.type) {
    case 'NEW_DICE_ROLL':
    return action.arr 
    default:
      return state
  }
}
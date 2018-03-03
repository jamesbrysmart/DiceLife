
export default function diceID(state=[], action) {
  switch (action.type) {
    case 'ADD_DICE_ID':
      return action.id
    default:
       return state
  }
}
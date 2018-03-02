
function newDiceRoll (diceOne, diceTwo, sum) {
  return {
    type:'NEW_DICE_ROLL',
    diceOne,
    diceTwo,
    sum
  }
}
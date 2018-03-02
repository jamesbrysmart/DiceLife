var diceOne = null
var diceTwo = null

var sum = null

export default function rollDice (){
  diceOne = (Math.floor(Math.random() * 6) + 1)
  diceTwo = (Math.floor(Math.random() * 6) + 1)
  sum = diceOne + diceTwo

  return arr =[sum, diceOne, diceTwo]
}



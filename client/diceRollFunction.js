
function rollDice (){
  var diceOne = (Math.floor(Math.random() * 6) + 1)
  var diceTwo = (Math.floor(Math.random() * 6) + 1)
  var sum = diceOne + diceTwo
  return [sum, diceOne, diceTwo]
}

module.exports = {rollDice: rollDice}
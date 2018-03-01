var diceOne = null
var diceTwo = null

var sum = null

function rollDice (){
  diceOne = (Math.floor(Math.random() * 6) + 1)
  diceTwo = (Math.floor(Math.random() * 6) + 1)

  sum = diceOne + diceTwo
}

rollDice()
console.log('dice 1: ', diceOne)
console.log('dice 2: ', diceTwo)
console.log('total: ', sum)

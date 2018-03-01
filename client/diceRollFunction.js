var diceOne = null
var diceTwo = null

var sum = null

<<<<<<< 2cf3b5e589c4c6cf0a00ddaebbbba3ab9f017bfa
<<<<<<< f505c0da9806e51caae824acd6d7cf6afc75a936
export default function rollDice (){
=======
export function rollDice (diceOne, diceTwo){
>>>>>>> preparing to rebase
=======
export default function rollDice (){
>>>>>>> added working diceroll function and button'
  diceOne = (Math.floor(Math.random() * 6) + 1)
  diceTwo = (Math.floor(Math.random() * 6) + 1)
  sum = diceOne + diceTwo

  return arr =[sum, diceOne, diceTwo]
}



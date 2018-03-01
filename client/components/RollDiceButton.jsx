import React from 'react'
<<<<<<< f505c0da9806e51caae824acd6d7cf6afc75a936

export default function RollDiceButton (props) {
  return (
    <div className='button'>
      <a onClick ={props.rollTheDice}>Roll The Dice</a>
    </div>
  )
}

=======
import rollDice from '../diceRollFunction'

class RollDiceButton (props) {
  constructor

  rollThedice(){
    var diceOne = (Math.floor(Math.random() * 6) + 1)
    var diceTwo = (Math.floor(Math.random() * 6) + 1)
    var total = diceOne + diceTwo
  }

  return (
    <div>
      <button onClick ={props.rollTheDice}>
    </div>

  )
}
>>>>>>> preparing to rebase

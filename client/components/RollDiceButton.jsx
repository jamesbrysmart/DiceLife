import React from 'react'
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
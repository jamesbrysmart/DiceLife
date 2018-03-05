import React from 'react'
import {Link} from 'react-router-dom'

export default function RollDiceButton (props) {
  return (
    <div className="container">
    <div className='button is-danger'>
      <Link to='/animation' onClick ={props.rollTheDice}>Roll The Dice</Link>
    </div>
    <div className='button is-danger'>
      <Link to={`/edit/${props.diceID}`}>Edit dice options</Link>
    </div>
    <div className='button is-danger'>
      <Link to='/allDice'> Back </Link>
    </div>
    </div>
  )
}

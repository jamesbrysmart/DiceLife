import React from 'react'
import {Link} from 'react-router-dom'

export default function RollDiceButton (props) {
  return (
    <div className="container">
    <div className='button is-danger'>
      <Link to='/resultsparent' onClick ={props.rollTheDice}>Roll The Dice</Link>
    </div>
    <div className='button is-danger'>
      <Link to='/allDice'> Back </Link>
    </div>
    </div>
  )
}

import React from 'react'

export default function RollDiceButton (props) {
  return (
    <div className='button'>
      <a onClick ={props.rollTheDice}>Roll The Dice</a>
    </div>
  )
}


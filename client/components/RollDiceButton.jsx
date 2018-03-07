import React from 'react'
import {Link} from 'react-router-dom'
import {inactiveDice} from '../actions/diceNames'

export default function RollDiceButton (props) {
  return (
    <div className="container">
    <div className="Rolldicebutton">
        <div className='button is-large is-rounded is-danger' id="rolldicebuttonstyling" style={ {fontFamily: 'Gloria Hallelujah'}}>
          <Link to='/animation' onClick ={props.rollTheDice}>Roll The Dice</Link>
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import {Link} from 'react-router-dom'
import {inactiveDice} from '../actions/diceNames'

export default function DeleteButton(props) {
  return (
    <div className="container">
      <div className='button is-danger'>
        <Link to='/alldice' onClick={inactiveDice(props.diceID)}>Delete dice </Link>
      </div>
    </div>
  )
}

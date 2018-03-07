import React from 'react'
import {Link} from 'react-router-dom'
import {inactiveDice} from '../actions/diceNames'
import {connect} from 'react-redux'

 function DeleteButton(props) {
  return (
    <div className="container">
      <div className='button is-danger delete-button'>
        <Link to='/alldice' onClick={() => props.dispatch(inactiveDice(props.diceID))}>Delete dice </Link>
      </div>
    </div>
  )
}


export default connect()(DeleteButton)

import React from 'react'
import {Link} from 'react-router-dom'


function OKButton (props) {
  return (
    <div className= "OKButton">
    <div className= 'button is-danger'>
    <Link to='/AllDice' onClick ={props.toggleHowTo}> OK! </Link>
    </div>
    </div>
  )
}

export default OKButton
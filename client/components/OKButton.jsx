import React from 'react'
import {Link} from 'react-router-dom'


function OKButton (props) {
  return (
    <div className= "OKButton">
    <div className= 'button'>
    <Link to='/AllDice' onClick ={props.handleButton}> OK! </Link>
    </div>
    </div>
  )
}

export default OKButton
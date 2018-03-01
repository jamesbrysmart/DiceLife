import React from 'react'
import {Link} from 'react-router-dom'


function HomeButtons (props) {
  return (
    <div className= "HomeButtons">
    <div className= 'button'>
    <Link to='/Login' onClick ={props.handleButton}> Login </Link>
    </div>
    <div className= 'button'>
    <Link to= '/Register' onClick = {props.handButton}> Register </Link>
    </div>
    </div>
  )
}

export default HomeButtons
import React from 'react'
import {Link} from 'react-router-dom'


function HomeButtons (props) {
  return (
    <div className= "HomeButtons">
      <div className="column is-6 is-offset-3 columns">
        <div className="is-success is-large is-fullwidth is-5 button">
        <Link to='/Login' onClick ={props.handleButton}> Login </Link>
        </div>
        <span className="column is-1"></span>
        <div className="is-danger is-large is-fullwidth is-5 button">
        <Link to= '/Register' onClick = {props.handButton}> Register </Link>
        </div>  
      
    </div>
    


      </div>

  )
}

export default HomeButtons


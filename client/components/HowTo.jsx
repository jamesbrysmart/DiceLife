import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import OKButton from './OKButton'


class HowTo extends React.Component {

 render(){
     return (
       <div>
        
       <div className= "HowTo">
        <p> Rule number 1: You must obey the will of the Dice </p>
       </div>
       <OKButton toggleHowTo={this.props.toggleHowTo}/>
       </div>
     ) 
  }
}

module.exports = HowTo


import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import OKButton from './OKButton'


class HowTo extends React.Component {

 render(){
     return (
       <div className="HowTo">
        <div className="columns">
          <span className="column is-3"></span>
          <div className="column is-6">
            <h2 className="title is-2" id="makewhite">
              How To Play:
            </h2>
            <div className= "box" id="howtoboxcolor"  >
       
              <p> Rule number 1: You must obey the will of the Dice </p>
  
              <OKButton toggleHowTo={this.props.toggleHowTo}/>
            </div>
          </div>
        </div>
       </div>
     ) 
  }
}

module.exports = HowTo


import React from 'react'
import {Link} from 'react-router-dom'
import OKButton from './OKButton'
import Home from './Home'

class HowTo extends React.Component {
    constructor() {
        super()
        this.state = {
            showButton: true
        }
    this.handleButton = this.handleButton.bind(this)
    }

 handleButton() {
     this.state = {
         showButton: false
     }
     return
 }
 render(){
     return (
       <div className= "buttons">
         {this.state.showButton && <HomeButtons handleButton= {this.handleButton}/>} 
       </div>
     ) 
  }
}

module.exports = Home
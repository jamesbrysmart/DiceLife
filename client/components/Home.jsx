import React from 'react'
import {Link} from 'react-router-dom'
import HomeButtons from './HomeButtons'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            showButtons: true
        }
    this.handleButton = this.handleButton.bind(this)
    }

 handleButton() {
     this.state = {
         showButtons: false
     }
     return
 }
 render(){
     return (
       <div className= "buttons">
         {this.state.showButtons && <HomeButtons handleButton= {this.handleButton}/>} 
       </div>
     ) 
  }
}

module.exports = Home
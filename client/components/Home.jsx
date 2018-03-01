import React from 'react'
import {Link} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import {connect} from 'react-redux'
import HowTo from './HowTo'

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
    const {auth} = this.props
     return (
       <div className= "HomeBody">
       {auth.isAuthenticated
        ? [
            <HowTo/>
        ]
        : [
         <HomeButtons handleButton= {this.handleButton}/>
        ]
      }
      </div>
     ) 
  }
}

const mapStateToProps = ({auth}) => {
    return {auth}
  }

  export default connect(mapStateToProps)(Home)

import React from 'react'
import {Link} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import {connect} from 'react-redux'
import HowTo from './HowTo'
import OKButton from './OKButton'
import {HashRouter as Router} from 'react-router-dom'



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showButtons: true,
            showHowTo: true
        }
    this.handleButton = this.handleButton.bind(this)
    this.toggleHowTo = this.toggleHowTo.bind(this)
    }
 toggleHowTo() {
     this.setState({
         showButtons: false, 
         showHowTo: false
     })
 }
 handleButton() {
     this.setState({
         showButtons: false
     })
     return
 }
 render(){
    const {auth} = this.props
     return (
     <Router>
         <div className="homeview">
         <div id="homebuttons">
        <div className="columns">
       
       <span className="column is-3"> </span>
       <p id="blurb">Welcome to dice life! This is an app based off of the book Dice Man where someone decides to spice up their life by letting a dice make some of their decisions.
        </p>
       
         <span className="column is-3"> </span>
    </div>
    </div>

    <div className="img">
    <img src ="./images/dice3.png"/> 
    </div>

    <div className="columns">
    <span className="column is-3"> </span>
    <p className="column is-6 is-fullwidth"id="blurb">Are you brave enough to challenge yourself to this fun game of luck?
        </p>
       
    </div>
  
       {auth.isAuthenticated 
        ? this.state.showHowTo && [
            <HowTo/>,
            <OKButton toggleHowTo = {this.toggleHowTo}/>
        ]
        : <HomeButtons handleButton= {this.handleButton}/>
      }
       
     </div>
     
      </Router>
     ) 
  }
}

const mapStateToProps = ({auth}) => {
    return {auth}
  }

  export default connect(mapStateToProps)(Home)

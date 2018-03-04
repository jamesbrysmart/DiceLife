import React from 'react'
import {Link} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import {connect} from 'react-redux'
import HowTo from './HowTo'
import OKButton from './OKButton'
import {HashRouter as Router} from 'react-router-dom'
import {getUsers} from '../actions/users'

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

componentDidMount() {
    this.props.dispatch(getUsers())
}

 render(){
    const {auth} = this.props
     return (
     <Router>
        
       <div id="homebuttons">
       <p>Welcome to dicelife</p>
       <br/><br/><br/>
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

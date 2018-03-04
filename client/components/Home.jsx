import React from 'react'
import {Link} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import {connect} from 'react-redux'
import HowTo from './HowTo'
import {HashRouter as Router} from 'react-router-dom'
import {getUsers} from '../actions/users'
import Header from './Header.jsx'

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
        
       <div id="home">
       <section className="hero is-dark is-fullheight" id="heroimg"> 
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
            <Header />
            </h1>
           
         <div className="homeview">
         <div id="homebuttons">
        <div className="columns">
       
       <span className="column is-3"> </span>
       
       
         <span className="column is-3"> </span>
    </div>
    </div>

   

    <div className="columns">
    <span className="column is-3"> </span>
  
       
       
    </div>
  
       {auth.isAuthenticated 
        ? this.state.showHowTo && [
            <HowTo toggleHowTo = {this.toggleHowTo}/>,
        ]
        : <HomeButtons handleButton= {this.handleButton}/>
      }
            </div>
        </div>
        </div>
        </section>















     </div>
     
      </Router>
     ) 
  }
}

const mapStateToProps = ({auth}) => {
    return {auth}
  }

  export default connect(mapStateToProps)(Home)

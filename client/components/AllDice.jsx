import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getDiceOutcomes} from '../actions/diceOutcomes'
import {getDiceNames} from '../actions/diceNames'
import Header from './Header'
import {getUsers} from '../actions/users'
import {addUserID} from '../actions/userID'
import { getDiceHistory } from '../actions/diceHistory'

class AllDice extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    
  }
  this.findUserId = this.findUserId.bind(this)

  }

  findUserId() {
    let activeUser = this.props.auth.user.user_name
    let usersArray = this.props.users.users
    let currentUser = usersArray.find(user => user.user_name == activeUser)
    return currentUser.id
  }

  componentWillMount() {
    this.props.dispatch(getDiceOutcomes())
    this.props.dispatch(getDiceNames())
    this.props.dispatch(getUsers())
    this.props.dispatch(getDiceHistory())
  }
  componentDidMount(){
    this.props.dispatch(addUserID(this.findUserId()))
  }
  render() {
    const specificDice = this.props.diceNames
    return (

      <div>
      <Header />
    <div className="alldice">
  
      <h2 className="title is-3" id="makewhite">Select a dice</h2>
      <div className="columns">
      <span className="column is-3"></span>
      {specificDice.map((dice, i) => {
        return <div className="column" key={i}>
          <p id="alldicepadding"><Link to={`/alldice/${dice.id}`}>
          {<img src="/images/dice_placeholder.png" alt="Dice image"/>}<p>{dice.dice_name}</p></Link></p>
         
        </div>
      })}
      <span className="column is-3"></span>
      
      </div>
      <Link to="/create">Create your own dice</Link>
    </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state
  
}

export default connect(mapStateToProps)(AllDice)

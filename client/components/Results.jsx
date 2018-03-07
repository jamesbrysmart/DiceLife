import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from './Header'
import {addNewRoll} from '../actions/diceHistory'

class Results extends React.Component {
constructor(){
  super()
  this.state = {
    outcome: '',
    CurrentActivity: ''
  }
}
   MapSumToPosition(sum){
    if (sum == 2 || sum ==  12) {
      return 5
    }
    else if (sum == 3 || sum == 11) {
    return 4
    }
    else if (sum == 4 || sum == 10) {
    return 3
    }  
    else if (sum == 5 || sum == 9) {
    return 2
    }
    else if (sum == 6 || sum == 8) {
    return 1
    }
    }

  componentDidMount(){
    var diceSum = this.props.dice[2]
    var ActivityID = this.props.diceID
    var ActivityList = this.props.names
    var CurrentActivityMock = ActivityList[ActivityID - 1].dice_name
    var allOutcomes = this.props.outcomes.dice
    var currentOutComes = allOutcomes.filter((outcome) => {
      return outcome.dice_name == CurrentActivityMock
    })

    var OutCome = currentOutComes.filter((outcome) => {
      console.log(currentOutComes)
      console.log(this.MapSumToPosition(diceSum))
      return outcome.position == this.MapSumToPosition(diceSum)
    })
    this.setState({
      outcome: OutCome[0].dice_option,
      CurrentActivity: CurrentActivityMock
    })
    var newRoll = {
      user_id: this.props.userID,
      roll_score: diceSum, 
      dice_name_id: ActivityID,
      dice_option_id: OutCome[0].id
    }
    this.props.dispatch(addNewRoll(newRoll))
  }
  render(){
    return (
    <div className="resultview">
    <div className="columns">
    <span className="column is-3"></span>
    <div className="box column is-6" id="bgimg">
      <div className = 'dice_images'>
        <img src = {`/images/dice${this.props.dice[0]}.png`} /> 
        <img src = {`/images/dice${this.props.dice[1]}.png`} /> 
      </div>
      </div>
      <span className="column is-3"></span>
      </div>
      <div className = 'results'>
       {/* <p> Props to you for putting your life decisions at the whims of the dice! </p> */}
       <div className="columns">
       <span className="column is-3"></span>
<div className="box column is-6">
      <div className="columns">
      <div className="column is-4">
      <p id="makeblack">  The dice has decided on the below outcome:</p>
      <h3  className="title is-3" id="makeblack">{this.props.dice[2]}</h3>
      </div>
      <div className="column is-8">
        <h3  id="makeblack"> Your {this.state.CurrentActivity} </h3>
        <h3 className="title is-3" id="makeblack"> {this.state.outcome} </h3>
        
        <h2  id="makeblack">{this.props.diceOption}</h2>
        </div>
        </div>
       
</div>
<span className="column is-3"></span> 
</div>


<div className="columns">
<span className="column is-3"></span>
<div className="box column is-6" id="bgimg">
       <p > Remember, this only works if you obey the dice. 
        
        Does the above seem too easy? If so, oh well. Next time the dice may not be so forgiving... Still. did you feel the adrenaline rush as the dice rolled? That's life when you live by the dice (if not, maybe you need to be more ambitious with your potential plans).

        Does the above scare you? That's exactly the point. It's hard to push yourself out of your comfort zone. The dice help you do that. 

        Say hello to your new, more exciting life... </p>
</div>
        <span className="column is-3"></span>
      </div>
      </div>
      <div className='button is-danger'>
      <Link to='/allDice'> Back </Link>
    </div>
    </div>
    )
  }
}

function mapStateToProps (state){
  return {
    dice:state.diceRolls,
    names:state.diceNames, 
    diceID: state.diceID, 
    outcomes: state.diceOutcomes,
    userID: state.userID
 }
 }
 
export default connect(mapStateToProps)(Results)

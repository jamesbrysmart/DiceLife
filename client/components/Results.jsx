import React from 'react'
import { connect } from 'react-redux'


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
      return 6
    }
    else if (sum == 3 || sum == 11) {
    return 5
    }
    else if (sum == 4 || sum == 10) {
    return 4
    }  
    else if (sum == 5 || sum == 9) {
    return 3
    }
    else if (sum == 6 || sum == 8) {
    return 2
    }
    else if (sum == 7) {
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
        return outcome.position == this.MapSumToPosition(diceSum)
      })
      console.log('OutComeMock: ', OutCome[0])
      console.log('OutCome Option: ', OutCome[0].dice_option)
      this.setState({
        outcome: OutCome[0].dice_option,
        CurrentActivity: CurrentActivityMock
      })
    }
  render(){
    console.log('state: ', this.state.outcome)
    return (
    <div>
      <div className = 'dice_images'>
        <img src = {`/images/dice${this.props.dice[0]}.png`} /> 
        <img src = {`/images/dice${this.props.dice[1]}.png`} /> 
      </div>
      <div className = 'results'>
       <p> Props to you for putting your life decisions at the whims of the dice! </p>

        The dice has decided on the below outcome:
        <h3> Your {this.state.CurrentActivity} </h3>
        <h3> {this.state.outcome} </h3>
        <h3>{this.props.dice[2]}</h3>
        <h2>{this.props.diceOption}</h2>

       <p> Remember, this only works if you obey the dice. 
        
        Does the above seem too easy? If so, oh well. Next time the dice may not be so forgiving... Still. did you feel the adrenaline rush as the dice rolled? That's life when you live by the dice (if not, maybe you need to be more ambitious with your potential plans).

        Does the above scare you? That's exactly the point. It's hard to push yourself out of your comfort zone. The dice help you do that. 

        Say hello to your new, more exciting life... </p>
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
    outcomes: state.diceOutcomes
  }
 }
 
export default connect(mapStateToProps)(Results)

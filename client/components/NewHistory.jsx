import React from 'react'
import { connect } from 'react-redux'
import { getDiceHistory } from '../actions/diceHistory'
import { getDiceOutcomes } from '../actions/diceOutcomes'
import { getDiceNames } from '../actions/diceNames'
import { getUsers } from '../actions/users'

import Header from './Header'

class NewHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // active: true,
      // userInput: []
    }
  }
  componentWillMount() {
    this.props.dispatch(getDiceOutcomes())
    this.props.dispatch(getDiceNames())
    this.props.dispatch(getUsers())
    this.props.dispatch(getDiceHistory())
  }
  handleUserInput(e) {
    let newUserInput = [...userInput];
    newUserInput.push(e.target.value)
    this.setState({
      userInput: newUserInput
    })
    
  };

  render() {
    console.log(this.props)
    let userId = this.props.auth.user.id
    let allRolls = this.props.diceHistory.dice
    let rollsByUser = allRolls.filter(roll => roll.user_id == userId)
    console.log(userId)
    console.log(allRolls)
    console.log({ rollsByUser })

    let arrayOfRolls = rollsByUser.map(roll => {
      console.log({ roll })

      const foundOutcome = this.props.outcomes.dice.find(outcome => outcome.id == roll.dice_option_id)
      console.log({ foundOutcome })
      roll.dice_name = foundOutcome.dice_name
      roll.outcome = foundOutcome.dice_option
      return roll
    })

    console.log({ arrayOfRolls })


    let historyDiceNameIDs = rollsByUser.map(roll => roll.dice_name_id)
    let historyRollScores = rollsByUser.map(roll => roll.roll_score)
    let historyRollOptionResultIDs = rollsByUser.map(roll => roll.dice_option_id)
    console.log({ historyDiceNameIDs })
    console.log({ historyRollScores })
    console.log({ historyRollOptionResultIDs })


    


    return (
      <div>
        <p>Hello World!</p>
        <div class="timeline">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Start</span>
          </header>
        {arrayOfRolls.map((roll) => {
          return <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">{roll.dice_name}</p>
            <p>{roll.outcome}</p>
            <p>{roll.roll_score}</p>
            <p>{roll.rolled_on}</p>
            {/* {this.state.userInput.map((input, i) => <p>input</p>)}
            <input type="text" onChange={this.handleUserInput.bind(this)} placeholder="Did you commit the dice's suggestion?"/> */}
          </div>
        </div>
          
        })}
            <div class="timeline-header">
              <span class="tag is-medium is-primary">End</span>
            </div>
          </div>


        </div>
        )
      }
    
    }
    
    
const mapStateToProps = (state)=> {
          console.log(state)
  return {
          names: state.diceNames,
        diceID: state.diceID,
        outcomes: state.diceOutcomes,
        userID: state.userID,
        diceHistory: state.diceHistory,
        auth: state.auth
      }
    }
    
export default connect(mapStateToProps)(NewHistory)
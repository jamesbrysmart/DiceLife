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
        <div className="timeline">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">Start</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">January 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker is-warning is-image is-32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png"/>
            </div>
              <div className="timeline-content">
                <p className="heading">February 2016</p>
                <p>Timeline content - Can include any HTML element</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2017</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-danger is-icon">
                <i className="fa fa-flag"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">March 2017</p>
                <p>Timeline content - Can include any HTML element</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-medium is-primary">End</span>
            </header>
          </div>
          <p>Hello World!</p>
          <div className="timeline">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">Start</span>
            </header>
            {arrayOfRolls.map((roll) => {
              return <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="heading">{roll.dice_name}</p>
                  <p>{roll.outcome}</p>
                  <p>{roll.roll_score}</p>
                  <p>{roll.rolled_on}</p>
                  {/* {this.state.userInput.map((input, i) => <p>input</p>)}
            <input type="text" onChange={this.handleUserInput.bind(this)} placeholder="Did you commit the dice's suggestion?"/> */}
                </div>
              </div>

            })}
            <div className="timeline-header">
              <span className="tag is-medium is-primary">End</span>
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
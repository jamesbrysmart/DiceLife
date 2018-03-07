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
        <Header />
        <div className="spacing">
          <div className="timeline is-centered">
            <header className="timeline-header">
              <span className="tag is-large is-danger">Latest dices</span>
            </header>
            {arrayOfRolls.slice(0).reverse().map((roll) => {
              return <div className="timeline-item">
                <div className="timeline-marker is-danger"></div>
                <div className="timeline-content">
                  <p className="title is-5" id="makewhite">{roll.dice_name}</p>
                  <p className="title is-4" id="makewhite">{roll.outcome}</p>
                  <p>You rolled {roll.roll_score}</p>
                  <p>on {new Date(roll.rolled_on).toDateString()}</p>
                </div>
              </div>

            })}
            <div className="timeline-header">
              <span className="tag is-large is-danger">Older dices</span>
            </div>
          </div>
        </div>


      </div>
    )
  }

}


const mapStateToProps = (state) => {
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
import React from 'react'
import { connect } from 'react-redux'
import { getDiceHistory } from '../actions/diceHistory'
import Header from './Header'

class NewHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    }
  }

  render() {
    console.log(this.props)
    let userId = this.props.userID
    let allRolls = this.props.diceHistory.dice
    let rollsByUser = allRolls.filter(roll => roll.user_id == userId)
    console.log(userId)
    console.log(allRolls)
    console.log(rollsByUser)

    let historyDiceNameIDs = rollsByUser.map(roll => roll.dice_name_id)
    let historyRollScores = rollsByUser.map(roll => roll.roll_score)
    let historyRollOptionResultIDs = rollsByUser.map(roll => roll.dice_option_id)
    console.log(historyDiceNameIDs)
    console.log(historyRollScores)
    console.log(historyRollOptionResultIDs)

    

    // let arrayOfRolls = []
    // rollsByUser.map(roll => {
    //   const foundOutcome = this.props.diceOutcomes.find(outcome => outcome.id == roll.dice_option_id ID ROLL.DICE_OPTION_ID UNIQUE???)
    //   foundOutcome.dice_name = outcome.dice_name
    //   foundOutcome.outcome = outcome.dice_option
    //   console.log(foundOutcome)

    //   arrayOfRolls.push(foundOutcome)
    //   console.log(arrayOfRolls)
    // }

        return (
      <div>
        <p>Hello World!</p>
        {/* <Header />
        hello world */}
                {/* <br />

        {this.props.diceHistory.dice.map((dice) => {
          return (
            <p>dice roll scores{dice.roll_score}</p>
          )
        })}

        {this.state.rollsWithInfo.map(rolls => {
          return (
            <p> rollswithdicename{rolls.dice_name}, rollswithoption{rolls.dice_option} </p>
          )
        })}
 */}


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
    diceHistory: state.diceHistory
  }
}

export default connect(mapStateToProps)(NewHistory)
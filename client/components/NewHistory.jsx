import React from 'react'
import { connect } from 'react-redux'
import { getDiceHistory } from '../actions/diceHistory'
import Header from './Header'

class NewHistory extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props)
    // let userId = this.props.userID
    // let allRolls = this.props.diceHistory.dice
    // let rollsByUser = allRolls.filter(roll => roll.user_id == userId)

    // let arrayOfRolls = []
    // rollsByUser.map(roll => {
    //   const foundOutcome = this.props.diceOutcomes.find(outcome => outcome.id == roll.dice_option_id)
    //   foundOutcome.dice_name = outcome.dice_name
    //   foundOutcome.outcome = outcome.dice_option
    //   console.log(foundOutcome)

    //   arrayOfRolls.push(foundOutcome)
    //   console.log(arrayOfRolls)
    // }

        return (
      <div>
        Hello World!
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


function mapStateToProps(state) {
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
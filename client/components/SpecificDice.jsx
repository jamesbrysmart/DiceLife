import React from 'react'
import {connect} from 'react-redux'
import RollDiceButton from './RollDiceButton'
import diceRolls from '../actions/diceRolls'
import diceID from '../actions/diceID'

class SpecificDice extends React.Component {
  constructor(props) {
    super(props)

    this.rollTheDice = this.rollTheDice.bind(this)
    this.diceRoll =this.diceRoll.bind(this)
  }


  diceRoll() {
    return Math.floor(Math.random() * 6) + 1
  }

  rollTheDice(){
    var d1 = this.diceRoll()
    var d2 = this.diceRoll()
    var total = d1 + d2
    var arr = [d2, d1, total]
    this.props.dispatch(diceRolls(arr))
  }


  componentDidMount() {
    this.props.dispatch(diceID(this.props.match.params.id))
  }
  render() {
    // getting the name of the selected dice to filter options
    const diceOutcomes = this.props.diceOutcomes.dice
    const diceId = this.props.match.params.id
    const diceNames = this.props.diceNames[diceId-1]['dice_name']

    // Filter the diceOutcomes by the specific dice name
    const specificDiceOptions = diceOutcomes.filter((dice, i) => {
    if (dice.dice_name == diceNames) {
        return dice
      }
    })

    // If you tried printitng the value directly into the table
    // It broke the page. Passing in a variable was ok
    const option1 = specificDiceOptions[0].dice_option
    const option2 = specificDiceOptions[1].dice_option
    const option3 = specificDiceOptions[2].dice_option
    const option4 = specificDiceOptions[3].dice_option
    const option5 = specificDiceOptions[4].dice_option
    return (
      <div>
        <h2>{diceNames}</h2>
        <table>
          <thead>
            <tr>
              <th>Result</th>
              <th>Liklihood</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>Most Likely</td>
              <td>Roll Again</td>
            </tr>
            <tr>
              <td>6 or 8</td>
              <td>Likely</td>
              <td>{option1}</td>
            </tr>
            <tr>
              <td>5 or 9</td>
              <td>Probable</td>
              <td>{option2}</td>
            </tr>
            <tr>
              <td>4 or 10</td>
              <td>Possible</td>
              <td>{option3}</td>
            </tr>
            <tr>
              <td>3 or 11</td>
              <td>Unlikely</td>
              <td>{option4}</td>
            </tr>
            <tr>
              <td>2 or 12</td>
              <td>Rare...but not impossible</td>
              <td>{option5}</td>
            </tr>
          </tbody>
        </table>
        <RollDiceButton rollTheDice= {this.rollTheDice}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}




export default connect(mapStateToProps)(SpecificDice)

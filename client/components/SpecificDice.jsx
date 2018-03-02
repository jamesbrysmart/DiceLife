import React from 'react'
import {connect} from 'react-redux'
import RollDiceButton from './RollDiceButton'


class SpecificDice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      diceOne: 0,
      diceTwo: 0,
      diceTotal: 0
    }
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

    this.setState({
     diceOne:d1,
     diceTwo: d2,
     diceTotal: total
    })
  }

  componentDidMount() {

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
    return (
      <div>
        <h2>{diceNames}</h2>
        <table>
          <tbody>
            {specificDiceOptions.map((dice, i) => {
              return <tr key={i}><td>{dice.dice_option}</td></tr>
            })}
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

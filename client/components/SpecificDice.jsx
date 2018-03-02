import React from 'react'
import {connect} from 'react-redux'
import RollDiceButton from './RollDiceButton'
import diceRolls from '../actions/diceRolls'

class SpecificDice extends React.Component {
  constructor(props) {
    super(props)

    this.rollTheDice = this.rollTheDice.bind(this)
    this.diceRoll =this.diceRoll.bind(this)
  }

<<<<<<< HEAD

  diceRoll() {
    return Math.floor(Math.random() * 6) + 1
=======
  diceRoll() { 
    return (Math.floor(Math.random() * 6) + 1)
>>>>>>> e690c893c7103957632c3de22acad774cc73bcfd
  }

  rollTheDice(){
    var d1 = this.diceRoll()
    var d2 = this.diceRoll()
    var total = d1 + d2
    var arr = [d2, d1, total]
    this.props.dispatch(diceRolls(arr))
  }


  componentDidMount() {

  }
  render() {
<<<<<<< HEAD
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
=======
    
>>>>>>> e690c893c7103957632c3de22acad774cc73bcfd
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

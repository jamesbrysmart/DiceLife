import React from 'react'
import RollDiceButton from './RollDiceButton'
import diceRolls from '../actions/diceRolls'
import { connect } from 'react-redux'

class ResultsIf7 extends React.Component {
  constructor(props){
    super(props)

    this.diceRoll = this.diceRoll.bind(this)
    this.rollTheDice = this.rollTheDice.bind(this)
    this.runFunctions = this.runFunctions.bind(this)
  }

  runFunctions(){
    this.rollTheDice()
    this.props.resetState()
  }

  diceRoll() {
    return Math.floor(Math.random() * 6) + 1
  }

  rollTheDice() {
    var d1 = this.diceRoll()
    var d2 = this.diceRoll()
    var total = d1 + d2
    var arr = [d2, d1, total]
    this.props.dispatch(diceRolls(arr))
  }

  render(){
    return (
      <div className = 'roll_again'>
        <p> You rolled a 7! Time to roll again! </p>
        <p className='button is-danger' onClick={this.runFunctions}>Roll The Dice</p>
      </div>
    )
  }
}

export default connect()(ResultsIf7)

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
    const diceOptions = this.props.diceOutcomes.dice
    const diceId = this.props.match.params.id
    const specificDice = this.props.diceOutcomes.dice[diceId].dice_name
    return (
      <div>
        <h2>{specificDice}</h2>
        <table>
          <tbody>
            {diceOptions.map((dice, i) => {
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

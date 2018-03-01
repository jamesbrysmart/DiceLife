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
    console.log(this.state)
    return (
      <div>
        <h2>Dice Name</h2>
        <table>
          <thead>
            <tr>
              <th># Rolled</th>
              <th>Chance</th>
              <th>What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>Most Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>6 or 8</td>
              <td>Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>5 or 9</td>
              <td>Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>4 or 10</td>
              <td>Slightly Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>3 or 11</td>
              <td>Possible</td>
              <td></td>
            </tr>
            <tr>
              <td>2 or 12</td>
              <td>Unlinkely</td>
              <td></td>
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

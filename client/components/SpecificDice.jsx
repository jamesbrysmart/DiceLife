import React from 'react'
import {connect} from 'react-redux'

class SpecificDice extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {

  }
  render() {
    const diceOptions = this.props.diceOutcomes.dice
    console.log(diceOptions)
    return (
      <div>
        <h2></h2>
        <table>
          <tbody>
            {diceOptions.map((dice, i) => {
              return <tr key={i}><td>{dice.dice_option}</td></tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(SpecificDice)

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getDiceOutcomes} from '../actions/diceOutcomes'
import {getDiceNames} from '../actions/diceNames'

class AllDice extends React.Component {
  constructor(props){
  super(props)
  }
  componentDidMount() {
    this.props.dispatch(getDiceOutcomes())
    this.props.dispatch(getDiceNames())
  }
  render() {
    const specificDice = this.props.diceNames
    return (
    <div>
      <h2>Select a dice</h2>
      {specificDice.map((dice, i) => {
        return <div key={i}>
          <p><Link to={`/alldice/${dice.id}`}>{<img src="/images/dice_placeholder.png" alt="Dice image"/>}<p>{dice.dice_name}</p></Link></p>
        </div>
      })}
      <Link to="#">Create your own dice</Link>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(AllDice)

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
      <h2 className="title is-3">Select a dice</h2>
      <div className="columns">
      <span className="column is-3"></span>
      {specificDice.map((dice, i) => {
        return <div className="column" key={i}>
          <img src="/images/dice_placeholder.png" alt="Dice image"/>
          <p id="alldicepadding"><Link to={`/alldice/${dice.id}`}>{dice.dice_name}</Link></p>
         
          {/* <div className="column" key="4">
          <img src="/images/dice_placeholder.png" alt="Dice image"></img>
          </div> */}
         
        </div>
      })}
      <span className="column is-3"></span>
      
      </div>
      <Link to="#">Create your own dice</Link>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(AllDice)

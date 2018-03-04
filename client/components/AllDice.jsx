import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getDiceOutcomes} from '../actions/diceOutcomes'
import {getDiceNames} from '../actions/diceNames'
import Header from './Header'

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
      <Header />
    <div className="alldice">
  
      <h2 className="title is-3" id="makewhite">Select a dice</h2>
      <div className="columns">
      <span className="column is-3"></span>
      {specificDice.map((dice, i) => {
        return <div className="column" key={i}>
          <p id="alldicepadding"><Link to={`/alldice/${dice.id}`}>
          {<img src="/images/dice_placeholder.png" alt="Dice image"/>}<p>{dice.dice_name}</p></Link></p>
         
        </div>
      })}
      <span className="column is-3"></span>
      
      </div>
      <Link to="/create">Create your own dice</Link>
    </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(AllDice)

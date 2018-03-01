import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AllDice extends React.Component {
  constructor(props){
  super(props)
  }
  componentDidMount() {
    // This will be an api request
  }
  render() {
    return (
    <div>
      <h2>Select a dice</h2>
      <div>
        <img src="/images/dice_placeholder.png" alt="Dice image"/>
        <p><Link to="#">Friday Night Out</Link></p>
      </div>
      <div>
        <img src="/images/dice_placeholder.png" alt="Dice image"/>
        <p><Link to="#">Weekend</Link></p>
      </div>
      <div>
        <img src="/images/dice_placeholder.png" alt="Dice image"/>
        <p><Link to="#">Food</Link></p>
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

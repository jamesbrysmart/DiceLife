import React from 'react'
import { connect } from 'react-redux'
import RollDiceButton from './RollDiceButton'
import DeleteButton from './DeleteButton'
import {Link} from 'react-router-dom'

class SpecificButtons extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
        <div>
           <RollDiceButton rollTheDice={this.props.rollTheDice} />
           <DeleteButton diceID = {this.props.diceID} />
           <div className='button is-danger'>
             <Link to={`/edit/${this.props.diceID}`}>Edit dice options</Link>
           </div>
           <div className='button is-danger'>
             <Link to='/allDice'> Back </Link>
           </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(SpecificButtons)

//diceID={this.props.match.params.id} rollTheDice={this.rollTheDice}


{/* <div className='button is-danger'>
<Link to={`/edit/${props.diceID}`}>Edit dice options</Link>
</div>
<div className='button is-danger'>
<Link to='/alldice' onClick={inactiveDice(props.diceID)}>Delete dice </Link>
</div>
<div className='button is-danger'>
<Link to='/allDice'> Back </Link> */}
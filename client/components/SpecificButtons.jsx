import React from 'react'
import { connect } from 'react-redux'
import RollDiceButton from './RollDiceButton'
import DeleteButton from './DeleteButton'
import {Link} from 'react-router-dom'

class SpecificButtons extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showDelete: true
        }
        this.toggleDelete = this.toggleDelete.bind(this)
    }
    toggleDelete(){
    var currentActivity = this.props.diceNames.filter((activity)=>{
        return activity.id == this.props.diceID
    })
    if(currentActivity[0].user_id == null){
       this.setState({
           showDelete: false
       })
    }
    }
    componentWillMount(){
        this.toggleDelete()
    }
    render(){
        return (
        <div>
           <RollDiceButton rollTheDice={this.props.rollTheDice} />
          {this.state.showDelete && <DeleteButton diceID = {this.props.diceID} />} 
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

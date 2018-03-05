import React from 'react'
import { connect } from 'react-redux'
import { getDiceHistory } from '../actions/diceHistory'
import Header from './Header'

class History extends React.Component {
    constructor(props) {
        super(props)
        this.findHistory=this.findHistory.bind(this)
    }

    



    findHistory() {
        let userId = this.props.userID
        console.log(this.props.previousRolls)
        let allRolls = this.props.previousRolls.dice
        console.log(allRolls)
        let rollsByUser= allRolls.filter(roll => roll.user_id == userId)
        console.log(rollsbyUser)
        this.props.names 
        
    }
    componentWillMount() {
        
        
    }

    componentDidMount() {
        this.props.dispatch(getDiceHistory())
        // this.findHistory()
        
        
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                hello world
                <br/>
                {this.props.previousRolls && this.props.previousRolls.dice && this.props.previousRolls.dice.map((dice)=>{
                    return (
                        <p>{dice.roll_score}</p>
                    )
                })}
                
            </div>
        )


    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        names: state.diceNames,
        diceID: state.diceID,
        outcomes: state.diceOutcomes,
        userID: state.userID,
        previousRolls: state.diceHistory
    }
}

export default connect(mapStateToProps)(History)
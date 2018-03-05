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
        this.props.dispatch(getDiceHistory())
        
    }

    componentDidMount() {
        this.findHistory()
        
        
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                hello world
                
            </div>
        )


    }
}

function mapStateToProps(state) {
    return {
        names: state.diceNames,
        diceID: state.diceID,
        outcomes: state.diceOutcomes,
        userID: state.userID,
        previousRolls: state.diceHistory
    }
}

export default connect(mapStateToProps)(History)
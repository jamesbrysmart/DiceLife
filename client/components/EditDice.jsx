import React from 'react'
import {connect} from 'react-redux'

class EditDice extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
            
        // }
    }
    render() {
    
        const diceOutcomes = this.props.diceOutcomes.dice
        const diceId = this.props.match.params.id
        const diceNames = this.props.diceNames[diceId-1]['dice_name']

        // Filter the diceOutcomes by the specific dice name
        const specificDiceOptions = diceOutcomes.filter((dice, i) => {
        if (dice.dice_name == diceNames) {
            return dice
        }
        })

        console.log(specificDiceOptions)
        return (
            <div>Edit this dice!</div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(EditDice)
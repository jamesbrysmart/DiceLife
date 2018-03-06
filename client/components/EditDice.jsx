import React from 'react'
import {connect} from 'react-redux'
import { addNewDice } from './../actions/diceOutcomes'

class EditDice extends React.Component {
    constructor(props) {
        super(props)
        const diceOutcomes = this.props.diceOutcomes.dice
        const diceId = this.props.match.params.id
        const foundDice = this.props.diceNames.find(die => die.id == diceId)
        const diceNames = foundDice ? foundDice.dice_name : 'No Dice'
        // const diceNames = this.props.diceNames[diceId-1]['dice_name']
        const specificDiceOptions = diceOutcomes.filter((dice, i) => {
            if (dice.dice_name == diceNames) {
                return dice
            }
        })
        this.state = {
            dice_name: diceNames,
            user_id: this.props.userID,
            dice_option_1: specificDiceOptions[0].dice_option,
            position_1: 1,
            dice_option_2: specificDiceOptions[1].dice_option,
            position_2: 2,
            dice_option_3: specificDiceOptions[2].dice_option,
            position_3: 3,
            dice_option_4: specificDiceOptions[3].dice_option,
            position_4: 4,
            dice_option_5: specificDiceOptions[4].dice_option,
            position_5: 5,
            isEditing: false,
            selectedID: null

        }
        
    }
    onEditClick(e) {
        this.setState({
            isEditing: !this.state.isEditing,
            selectedID: Number(e.target.id) + 1
        })
    }

    handleEdit(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCancelEdit() {
        this.setState({
            isEditing: false,
        })
    }

    onSaveEdit(e) {
        e.preventDefault()
        this.setState({
            isEditing: false,
            
        })
    }

    addDice(){
    
        this.props.dispatch(addNewDice(this.state))
      }

    renderEdit() {

        const diceOutcomes = this.props.diceOutcomes.dice
        const diceId = this.props.match.params.id
        const diceNames = this.props.diceNames[diceId-1]['dice_name']
        const specificDiceOptions = diceOutcomes.filter((dice, i) => {
            if (dice.dice_name == diceNames && dice.id === this.props.match.params.id) {
                return dice
            }
        })
        
        if (this.state.isEditing) {
            return (
                <tr>
                    <td>
                        <form>
                            <input type="text" name={`dice_option_${this.state.selectedID}`} onChange={this.handleEdit.bind(this)}></input>
                            <button value="submit" type="submit" onClick={this.onSaveEdit.bind(this)}>Save</button>
                        </form>
                    </td>
                    <td>
                        <button onClick={this.onCancelEdit.bind(this)}>Cancel</button>
                    </td>
                    <td>{specificDiceOptions.map((option, i) => {
                    return <p>{option.dice_option}<button id={i} onClick={this.onEditClick.bind(this)}>Change</button></p>})}
                    </td>
                </tr>
            )
        }
        return (
            <tbody>
                <tr>
                    <td>{this.state.dice_option_1} <button id="0" onClick={this.onEditClick.bind(this)}>Change</button></td>
                </tr>
                <tr>
                    <td>{this.state.dice_option_2} <button id="2" onClick={this.onEditClick.bind(this)}>Change</button></td>
                </tr>
                <tr>
                    <td>{this.state.dice_option_3} <button id="3" onClick={this.onEditClick.bind(this)}>Change</button></td>
                </tr>
                <tr>
                    <td>{this.state.dice_option_4} <button id="4" onClick={this.onEditClick.bind(this)}>Change</button></td>
                </tr>
                <tr>
                    <td>{this.state.dice_option_5} <button id="5" onClick={this.onEditClick.bind(this)}>Change</button></td>
                </tr>
                <tr>
                <button onClick={this.addDice.bind(this)}>Save changes</button>
                </tr>
            </tbody>       
        )
    }
    render() {
        
        return (
            <div>
                {this.renderEdit()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

EditDice.defaultProps = {
    diceOutcomes: {
        dice: []
    }
}

export default connect(mapStateToProps)(EditDice)
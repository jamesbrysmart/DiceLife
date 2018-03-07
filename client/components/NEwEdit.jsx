import React from 'react'
import { connect } from 'react-redux'
import { addNewDice } from './../actions/diceOutcomes'
import { inactiveDice } from './../actions/diceNames'
import Header from './Header'
import {Link} from 'react-router-dom'

class NEwEdit extends React.Component {
    constructor(props) {
        super(props)
        const diceOutcomes = this.props.diceOutcomes.dice
        const diceId = this.props.match.params.id
        const foundDice = this.props.diceNames.find(die => die.id == diceId)
        const diceNames = foundDice ? foundDice.dice_name : 'No Dice'
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
            active: 1
        }
      this.handleClick = this.handleClick.bind(this)
      this.addDice = this.addDice.bind(this)
    }
   
    handleEdit(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addDice() {
        console.log(this.state)
        this.props.dispatch(addNewDice(this.state))
        
    }   
   
    handleClick(){
        this.addDice()
        this.props.dispatch(inactiveDice(this.props.match.params.id))
    }


render() {
    const diceOutcomes = this.props.diceOutcomes.dice
    const diceId = this.props.match.params.id
    const diceNames = this.props.diceNames[diceId - 1]['dice_name']
    const specificDiceOptions = diceOutcomes.filter((dice, i) => {
        if (dice.dice_name == diceNames && dice.id === this.props.match.params.id) {
            return dice
        }

    })
        return (
            <div>
                <Header />
                <div>
                    <h2 className="title is-4" id="makewhite">{diceNames}</h2>
                    <div className="columns">
                        <span className="column is-3"></span>
                        <span className="column is-6">
                            <table className="table is-fullwidth" id="bgimg">
                                <thead id="makewhite">
                                    <tr id="makewhite">
                                        <th id="makewhite">Result</th>
                                        <th id="makewhite">Likelihood</th>
                                        <th id="makewhite">Option</th>
                                    </tr>
                                </thead>
                                <tbody id="makewhite">
                                    <tr>
                                        <td>7</td>
                                        <td>Most Likely</td>
                                        <td>Roll Again</td>
                                    </tr>
                                    <tr>
                                        <td>6 or 8</td>
                                        <td>Likely</td>
                                        <td><input className='input' type='text' name='dice_option_1' onChange={this.handleEdit.bind(this)} value={this.state.dice_option_1}/></td>
                                    </tr>
                                    <tr>
                                        <td>5 or 9</td>
                                        <td>Probable</td>
                                        <td><input className='input' type='text' name='dice_option_2' onChange={this.handleEdit.bind(this)} value={this.state.dice_option_2}/></td>
                                    </tr>
                                    <tr>
                                        <td>4 or 10</td>
                                        <td>Possible</td>
                                        <td><input className='input' type='text' name='dice_option_3' onChange={this.handleEdit.bind(this)} value={this.state.dice_option_3}/></td>
                                    </tr>
                                    <tr>
                                        <td>3 or 11</td>
                                        <td>Unlikely</td>
                                        <td><input className='input' type='text' name='dice_option_4' onChange={this.handleEdit.bind(this)} value={this.state.dice_option_4}/></td>
                                    </tr>
                                    <tr>
                                        <td>2 or 12</td>
                                        <td>Rare...but not impossible</td>
                                        <td><input className='input' type='text' name='dice_option_5' onChange={this.handleEdit.bind(this)} value={this.state.dice_option_5}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to='/alldice' className="button is-danger" onClick={this.handleClick}>Save changes</Link>

                        </span>
                        <span className="column is-3"></span>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

NEwEdit.defaultProps = {
    diceOutcomes: {
        dice: []
    }
}

export default connect(mapStateToProps)(NEwEdit)
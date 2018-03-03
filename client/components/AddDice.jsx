import React from 'react'
import {connect} from 'react-redux'

import { addNewDice } from './../actions/diceOutcomes'

class AddDice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dice_name: '',
      user_id: 1,
      dice_option_1: '',
      position_1: 1,
      dice_option_2: '',
      position_2: 2,
      dice_option_3: '',
      position_3: 3,
      dice_option_4: '',
      position_4: 4,
      dice_option_5: '',
      position_5: 5
  }
  this.addDice=this.addDice.bind(this)
 }  
  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value)
  }
 
  addDice(){
    this.props.dispatch(addNewDice(this.state))
  }
 
  render () {
    return (
      <div>
          <input type='text' name='dice_name' onChange={(e) => this.handleChange(e)}/>
          <br/>
          <label for='dice_options'>What to do:</label>
          <br/>
          <input type='text' name='dice_option_1' onChange={(e) => this.handleChange(e)} />
          <br/>
          <input type='text' name='dice_option_2' onChange={(e) => this.handleChange(e)} />
          <br/>
          <input type='text' name='dice_option_3' onChange={(e) => this.handleChange(e)} />
          <br/>
          <input type='text' name='dice_option_4' onChange={(e) => this.handleChange(e)} />
          <br/>
          <input type='text' name='dice_option_5' onChange={(e) => this.handleChange(e)} />
          <br/>
          <button onClick={this.addDice}>Add dice</button>
      </div>
    )
  }
 }

export default connect()(AddDice)
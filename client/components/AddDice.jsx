import React from 'react'
import {connect} from 'react-redux'

import { addNewDice } from './../actions/diceOutcomes'

class AddDice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dice = {
        diceName: '',
        user_id: 1,
        dice_option_1: '',
        dice_option_2: '',
        dice_option_3: '',
        dice_option_4: '',
        dice_option_5: '',
        dice_option_6: ''
      }
  }
}  
  handleChange(e) {
    this.setState([e.target.name]: e.target.value}) 
  }


  render () {
    return (
      <div>
        <form onSubmit={this.props.dispatch(addNewDice(this.state.dice))}>
          <input type='text' name='dice_name'/>
          <label for='dice_options'>What to do:</label>
          <input type='text' name='dice_option_1' onChange={(e) => this.handleChange(e)} />
          <input type='text' name='dice_option_2' onChange={(e) => this.handleChange(e)} />
          <input type='text' name='dice_option_3' onChange={(e) => this.handleChange(e)} />
          <input type='text' name='dice_option_4' onChange={(e) => this.handleChange(e)} />
          <input type='text' name='dice_option_5' onChange={(e) => this.handleChange(e)} />
          <input type='text' name='dice_option_6' onChange={(e) => this.handleChange(e)} />
          <input type='submit'/>
        </form>
      </div> 
    )
  }
}

export default connect()(AddDice)
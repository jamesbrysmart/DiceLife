import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {Link} from 'react-router-dom'
import { addNewDice } from './../actions/diceOutcomes'

class AddDice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dice_name: '',
      user_id: this.props.userID,
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
  }

  addDice(){
    this.props.dispatch(addNewDice(this.state))
  }

  componentWillMount(){
  }
 
  render () {
    return (
      <div> 
        <div className="container">
          <div className="columns">
            <span className="column is-3"></span>
              <div className = 'field'>
                <label className="label" id='makewhite'>Name of dice</label>
                <div className="control">
                  <input className="input"type='text' name='dice_name' placeholder='eg Friday Night' onChange={(e) => this.handleChange(e)}/>
                </div>
              </div>
              <div className = 'field'>
                <label className = 'label' id='makewhite' for='dice_options'>What to do:</label>
                <div className="control">
                  <input className="input" type='text' name='dice_option_1' placeholder='eg Go out for dinner' onChange={(e) => this.handleChange(e)} /> 
                </div>
              </div>
              <div className = 'field'>
                <label className = 'label' id='makewhite' for='dice_options'>What to do:</label>
                <div className="control">
                  <input className="input" type='text' name='dice_option_2' placeholder='eg Go to a play'onChange={(e) => this.handleChange(e)} /> 
                </div>
              </div>
              <div className = 'field'>
                <label className = 'label' id='makewhite' for='dice_options'>What to do:</label>
                <div className="control">
                  <input className="input" type='text' name='dice_option_3' placeholder='eg Go to the zoo' onChange={(e) => this.handleChange(e)} /> 
                </div>
              </div>
              <div className = 'field'>
                <label className = 'label' id='makewhite' for='dice_options'>What to do:</label>
                <div className="control">
                  <input className="input" type='text' name='dice_option_4' placeholder='eg Buy tickets to the new show in town' onChange={(e) => this.handleChange(e)} /> 
                </div>
              </div>
              <div className = 'field'>
                <label className = 'label' id='makewhite' for='dice_options'>What to do:</label>
                <div className="control">
                  <input className="input" type='text' name='dice_option_5' placeholder='eg Spin the globe and buy a one way flight'onChange={(e) => this.handleChange(e)} /> 
                </div>
              </div>  
              <Link to="/alldice" className='button-is-danger' onClick={this.addDice}>Add dice</Link>
            <span className="column is-3"></span>
          </div>  
        </div>  
        <Link className="button" to="/alldice">Cancel</Link> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
  
  
}

export default connect(mapStateToProps)(AddDice)
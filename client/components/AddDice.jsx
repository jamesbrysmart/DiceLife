import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { Link } from 'react-router-dom'
import { addNewDice } from './../actions/diceOutcomes'
import { addDiceName } from './../actions/diceNames'

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
      position_5: 5,
      active: true
    }
    this.addDice = this.addDice.bind(this)
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  addDice() {
    this.props.dispatch(addNewDice(this.state))
    this.props.dispatch(addDiceName(this.state.dice_name))
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h2 className="title is-4" id="makewhite">Create A Dice:</h2>
          <br />
          <div className="columns">
            <span className="column is-3"></span>
            <span className="column is-6">
              <div className="columns">
                <label className="label column is-6 is-bold" id='makewhite'>Dice name: </label>
                <input className="input column is-6 is-pulled-right" type='text' name='dice_name' placeholder='eg Friday Night' onChange={(e) => this.handleChange(e)} />
              </div>

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
                    <td><input className="input" type='text' name='dice_option_1' placeholder='eg Go out for dinner' onChange={(e) => this.handleChange(e)} /></td>
                  </tr>
                  <tr>
                    <td>5 or 9</td>
                    <td>Probable</td>
                    <td><input className="input" type='text' name='dice_option_2' placeholder='eg Go to a play' onChange={(e) => this.handleChange(e)} /></td>
                  </tr>
                  <tr>
                    <td>4 or 10</td>
                    <td>Possible</td>
                    <td><input className="input" type='text' name='dice_option_3' placeholder='eg Go to the zoo' onChange={(e) => this.handleChange(e)} /></td>
                  </tr>
                  <tr>
                    <td>3 or 11</td>
                    <td>Unlikely</td>
                    <td><input className="input" type='text' name='dice_option_4' placeholder='eg Buy clothes' onChange={(e) => this.handleChange(e)} /></td>
                  </tr>
                  <tr>
                    <td>2 or 12</td>
                    <td>Rare...but not impossible</td>
                    <td><input className="input" type='text' name='dice_option_5' placeholder='eg Spin the globe and buy a one way flight' onChange={(e) => this.handleChange(e)} /></td>
                  </tr>
                </tbody>
              </table>
              <Link to="/alldice" className='button is-danger' onClick={this.addDice}>Add dice</Link>
              <Link className="button" to="/alldice">Cancel</Link>
            </span>
            <span className="column is-3"></span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state


}

export default connect(mapStateToProps)(AddDice)

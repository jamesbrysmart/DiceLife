import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {user_name, password, confirm_password, first_name, last_name} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUserRequest(this.state))
  }
  render() {
    const {auth} = this.props
    return (

      <section className="hero is-dark is-fullheight" id="heroimg">
       <div className="hero-body">
        <div className="container">
          <form className="Register form" id="howto-overlay" onSubmit={this.submit}>
        <h1 className="title is-2" id="makewhite">Register</h1>
        <hr />
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="column is-6 is-offset-one-quarter label is-large has-text-centered" id="makewhite">Username
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails}/>
        </label>
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered"id="makewhite">First Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="First Name" type="text" name="first_name" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered" id="makewhite">Last Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Last Name" type="text" name="last_name" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered" id="makewhite">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered" id="makewhite">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
        </div>
        <input className="button is-success is-large is-fullwidth" value="Register" type="submit" />
      </form>
      </div>
      </div>
      </section>

    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)

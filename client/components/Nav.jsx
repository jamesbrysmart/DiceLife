import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import ChangingWord from './ChangingWord'


class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBurger: false
    }
    this.toggleBurger = this.toggleBurger.bind(this)
  }
  toggleBurger() {
    this.setState({showBurger: !this.state.showBurger})
  }

  

  render() {
    const {auth, logout} = this.props
    const {showBurger} = this.state
    return (
          <nav className="navbar">
            <div className="container" style={{paddingTop: '7vh'}}>
              <div className="navbar-brand">
                <Link className="navbar-item" to='/allDice'>
                  <img src ="/images/logo-white.svg" alt="Logo" />
                </Link>
                <span onClick={this.toggleBurger} className={`navbar-burger burger ${showBurger ? 'is-active': ''}`} data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className="container has-text-centered">     
                <ChangingWord />
              </div>
              <div id="navbarMenuHeroA" className={`navbar-menu ${showBurger ? "is-active" : ''}`}>
                  {auth.isAuthenticated
                    &&
                      <div className="navbar-end">
                        <div className="navbar-item" className = 'nav1'style={{fontSize:20}} >
                          <a className="navbar-item" onClick={() => logout()}>Logout</a>
                        </div>
                        <div className = 'nav2'>
                          <Link className="navbar-item" to= '/howto'><a style={{fontSize:20}}> How To Play? </a> </Link>
                        </div>
                        <div className="nav2">
                          <Link className="navbar-item" to= '/history'><a> History </a> </Link>
                        </div>
                      </div>
                  }
              </div>
            </div>
          </nav>
        )}
      }

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

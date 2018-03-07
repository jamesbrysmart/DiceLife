import React from 'react'
import setHeaderToMounted from '../actions/header' 
import {connect} from 'react-redux'
import Nav from './Nav'


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section className="hero is-danger" id='headerimg' >
          <div className="hero-head">
            <Nav />
            
          </div>
        </section>
    )
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Header)




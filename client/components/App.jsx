import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Register from './Register'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'
import Home from './Home'

const App = ({auth}) => (
  <Router>
    <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">$how Me The Money</h1>
          </Link>
          <Nav />
        </div>
      </div>

      <div className=''>
        <Route path="/" component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/meeting" component={Meeting} />
        <Route path="/history" component={History} />
      </div>

    </div>
  </Router>
)

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)

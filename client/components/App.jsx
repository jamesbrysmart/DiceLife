import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Register from './Register'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import HowTo from './HowTo'
import SpecificDice from './SpecificDice'
import AllDice from './AllDice'
import Results from './Results'
import Header from './Header'

const App = ({auth}) => (
  <Router>
    <div className="container has-text-centered">

      <div className="hero is-small is-dark">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <Header/>
          </Link>
          <Nav />
        </div>
      </div>

      <div className=''>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/howto" component={HowTo} />
        <Route path="/history" component={History} />
        <Route exact path="/alldice" component={AllDice} />
        <Route exact path="/alldice/:id" component={SpecificDice} />
        <Route path="/results" component={Results}/>
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

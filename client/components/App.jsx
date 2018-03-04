import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Register from './Register'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import HowTo from './HowTo'
import SpecificDice from './SpecificDice'
import AllDice from './AllDice'
import Results from './Results'
import Header from './Header'
import AddDice from './AddDice'
import Animation from './Animation'
import ResultsParent from './ResultsParent'


const App = ({ auth }) => (
  <Router>
    <div className="has-text-centered">

      <section className="hero is-danger is-fullheight indexHero" id="bgimg">
        <div className="hero-head">
          <Link to='/howTo' className="">
            <Header />
          </Link>
          <Nav />

        <div className=''>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/addDice" component={AddDice} />
          <Route path="/register" component={Register} />
          <Route path="/howto" component={HowTo} />
          <Route path="/history" component={History} />
          <Route exact path="/alldice" component={AllDice} />
          <Route exact path="/alldice/:id" component={SpecificDice} />
          <Route path="/results" component={Results} />
          <Route path="/create" component={AddDice} />
          <Route path="/animation" component={Animation} />
          <Route path="/resultsparent" component={ResultsParent} />
        </div>
        </div>
      </section>

    </div>
  </Router>
)

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)

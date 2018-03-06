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
import EditDice from './EditDice'
import NEwEdit from './NEwEdit'


const App = ({ auth }) => (
  <Router>
    <div className="has-text-centered">
          <Link to='/howTo' className="">
            
          </Link>
          
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
          <Route exact path="/animation" component={Animation} />
          <Route path="/resultsparent" component={ResultsParent} />
          <Route path="/edit/:id" component={NEwEdit} />
    </div>
  </Router>
)

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)

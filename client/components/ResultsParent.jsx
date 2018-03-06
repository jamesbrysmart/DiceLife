import React from 'react'
import { connect } from 'react-redux'
import Results from './Results'
import ResultsIf7 from './Resultsif7'
import {HashRouter as Router} from 'react-router-dom'
import Header from './Header'


class ResultsParent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dice: undefined
        }
    }
    componentWillMount(props){
        if(this.props.dice[2] == 7){
            this.setState({
                dice: true
            })
        }
        else {
            this.setState({
                dice: false
            })
        }
    
    }
    render(){
        return (

        <Router>
            <div>
        {!this.state.dice && <Results/>}
        {this.state.dice && <ResultsIf7/>}
          </div>
          </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        dice: state.diceRolls
    }
}

export default connect(mapStateToProps)(ResultsParent)
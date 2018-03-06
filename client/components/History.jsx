import React from 'react'
import { connect } from 'react-redux'
import { getDiceHistory } from '../actions/diceHistory'
import Header from './Header'

class History extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
          userDiceRolls:[],
          rollsWithInfo:[]
        }
        this.findDiceDetails=this.findDiceDetails.bind(this)
        this.filterRollsByUser=this.filterRollsByUser.bind(this)
    }

    filterRollsByUser() {
      let userId = this.props.userID
      console.log(userId)
      let allRolls = this.props.diceHistory.dice
      console.log(allRolls)  
      let rollsByUser= allRolls.filter(roll => roll.user_id == userId)
      this.setState({userDiceRolls:rollsByUser})
    }



    findDiceDetails() {
      let arrayOfRolls = []
      let userRolls = this.state.userDiceRolls
      console.log(userRolls)
      userRolls.map(roll =>{
        const foundOutcome = this.props.diceOutcomes.find(outcome=>outcome.id==roll.dice_option_id)
        foundOutcome.dice_name=outcome.dice_name
        foundOutcome.outcome=outcome.dice_option
        arrayOfRolls.push(foundOutcome)
      })
      this.setState({rollsWithInfo:arrayOfRolls})
    }



    componentWillMount() {
      this.props.dispatch(getDiceHistory())
      
        
    }

    componentDidMount() {
      console.log(this.props)
      this.filterRollsByUser()
        this.findDiceDetails()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                hello world
                <br/>
                { this.props.diceHistory.dice.map((dice)=>{
                    return (
                        <p>dice roll scores{dice.roll_score}</p>
                    )     
                })}
                                
                {this.state.rollsWithInfo.map(rolls => {
                  return (
                    <p> rollswithdicename{rolls.dice_name}, rollswithoption{rolls.dice_option} </p>
                  )
                })}

            </div>
        )


    }
}

function mapStateToProps(state) {
    return {
        names: state.diceNames,
        diceID: state.diceID,
        outcomes: state.diceOutcomes,
        userID: state.userID,
        diceHistory: state.diceHistory
    }
}

export default connect(mapStateToProps)(History)
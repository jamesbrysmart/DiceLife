import React from 'react'
import { connect } from 'react-redux'

class Results extends React.Component {
  render(){
    console.log('from results: ', this.props.diceID)
    //console.log(this.props.diceID)
    return (
    <div>
      <div className = 'dice_images'>
        <img src = {`../public/images/dice${this.props.dice[0]}`} /> 
        <img src = {`../public/images/dice${this.props.dice[1]}`} /> 
      </div>
      <div className = 'results'>
        {/* above not correct, placeholder */}
       <p> Props to you for putting your life decisions at the whims of the dice!

        The dice has decided on the below outcome:
        </p>
        <h1 >{this.props.dice[2]}</h1>
        <h2><p>{this.props.diceOption}</p></h2>

       <p> Remember, this only works if you obey the dice. 
        
        Does the above seem too easy? If so, oh well. Next time the dice may not be so forgiving... Still. did you feel the adrenaline rush as the dice rolled? That's life when you live by the dice (if not, maybe you need to be more ambitious with your potential plans).

        Does the above scare you? That's exactly the point. It's hard to push yourself out of your comfort zone. The dice help you do that. 

        Say hello to your new, more exciting life...
        </p>
      </div>
    </div>
    )
  }
}

function mapStateToProps (state){
  return {
    dice:state.diceRolls,
    names:state.diceNames, 
    diceID: state.diceID
  }
 }
 
export default connect(mapStateToProps)(Results)

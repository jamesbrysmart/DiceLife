import React from 'react'
<<<<<<< f505c0da9806e51caae824acd6d7cf6afc75a936
import { connect } from 'react-redux'
=======
>>>>>>> preparing to rebase

class Results extends React.component {
  
  render(){
    <div>
      <div className = 'dice_images'>
        <img src = {`../public/images/dice${this.props.dice_1}`} /> 
        <img src = {`../public/images/dice${this.props.dice_2}`} /> 
      </div>
      <div className = 'results'>
        {/* above not correct, placeholder */}
<<<<<<< f505c0da9806e51caae824acd6d7cf6afc75a936
        Props to you for putting your life decisions at the whims of the dice!
=======
        Props to you for putting your life decisions into the whims of the dice!
>>>>>>> preparing to rebase

        The dice has decided on the below outcome:
        <h3>{this.props.diceResult}</h3>
        <h2>{this.props.diceOption}</h2>

        Remember, this only works if you obey the dice. 
        
        Does the above seem too easy? If so, oh well. Next time the dice may not be so forgiving... Still. did you feel the adrenaline rush as the dice rolled? That's life when you live by the dice (if not, maybe you need to be more ambitious with your potential plans).

        Does the above scare you? That's exactly the point. It's hard to push yourself out of your comfort zone. The dice help you do that. 

        Say hello to your new, more exciting life...
      </div>
    </div>
  }
}
<<<<<<< f505c0da9806e51caae824acd6d7cf6afc75a936

function mapStateToProps (state){

  return {
    title: state.title,
    attendees:state.attendees
  }
 }
 
 export default connect(mapStateToProps)(Results)
=======
>>>>>>> preparing to rebase

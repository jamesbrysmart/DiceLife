import React from 'react'

class Resultsif7 extends React.component {
  
  render(){
    <div>
      <div className = 'dice_images'>
        <img src = {`../public/images/dice${this.props.dice_1}`} /> 
        <img src = {`../public/images/dice${this.props.dice_2}`} /> 
      </div>
       {/* above not correct, placeholder */}
      <div className = 'roll_again'>
       You rolled a 7! Time to roll again!
        <RollDiceButton />
      </div>
    </div>
  }
}

export default Resultsif7
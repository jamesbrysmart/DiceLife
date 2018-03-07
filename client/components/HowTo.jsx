import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import OKButton from './OKButton'
import Header from './Header'


class HowTo extends React.Component {

  render() {
    return (
      <div>
        {this.props.showHeader && <Header />}
        <div className="HowTo" >
          < br />
          <div className="container">
            
              
                <div className="box" id="howto-overlay"  >
                <h2 className="title is-2" id="makewhite">
                How To Play:
              </h2>
                  <div className="content" id="makewhite">   
                 
                  <p> There are no strict rules to Dice Life, but we highly recommend you follow the below guidelines: </p> 

                  <p> 1. Always obey the dice. Sometimes the dice roll can be an anti-climax, but at others it will push you <i>way</i> out of your comfort zone.</p>

                  <p> 2. For rolls of 6 or 8 (the most likely), pick something fairly easy. We've given some suggestions in the app itself.</p>

                  <p>3. As the dice rolls get less likely, (2 and 12 being the least likely), the options you pick should push you further out of your comfort zone.</p>
                  
                  <p>4. If your heart isn't racing when you roll the dice, your option 5 isn't ambitious enough. Be brave!</p>

                  <p><b> This app will change your life... if you let it. </b></p>
                  

                    <OKButton toggleHowTo={this.props.toggleHowTo} />
                  </div>
              </div>
            </div>
          </div>
        </div>
        ) 
  }
}

module.exports = HowTo


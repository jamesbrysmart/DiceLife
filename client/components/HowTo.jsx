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
          <div className="columns">
            <span className="column is-3"></span>
            <div className="column is-6">
              
                <div className="box" id="howto-overlay"  >
                <h2 className="title is-2" id="makewhite">
                How To Play:
              </h2>
                  <div className="content" id="makewhite">
                    
                  <p> Rule number 1: You must obey the will of the Dice </p> 
                  <p>  ◙ In fermentum leo eu lectus mollis, quis dictum mi aliquet. </p>
                
                  <p>  ◙   Morbi eu nulla lobortis, lobortis est in, fringilla felis. </p>
                  
                  <p>  ◙    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus. </p>
              
                  <p>  ◙    Ut non enim metus.</p>
                    
                  

                    <OKButton toggleHowTo={this.props.toggleHowTo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) 
  }
}

module.exports = HowTo


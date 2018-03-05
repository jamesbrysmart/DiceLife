import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ['Hunt', 'Bungy jump', 'Ski', 'Eat the Hottest Chilli', 'Ice Swim', 'Nap', 'Ibiza'],
      time: 0,
    }
    this.timer = this.timer.bind(this)
    this.printTime = this.printTime.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  componentWillMount() {
    
      this.timer()
  }
  timer() {
    setInterval(this.printTime, 1500, clearInterval(this.timer))
  }
  printTime() {
    document.getElementById('changingWord').innerHTML = this.state.words[this.state.time]
    this.setState({
      time: this.state.time +=1 ,
    })
      if (this.state.time >= 7) {
        this.resetTimer()
      }
  }
  resetTimer() {
    this.setState({
      time: 0
    })
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className="is-bold">
        <section className="hero is-medium is-dark is-bold" id="heroimg">
          <div className="hero-body">
            <div className="container">
              <h1 className="title ">
                Dice Life
              </h1>
              <h2 className="subtitle is-3  has-text-centered">
        <p> Eat,play...<p id="changingWord">Karaoke</p></p>
        </h2>
        <h4 className="title is-4">
           <Nav />
            </h4>
            </div>
          </div>
        </section>


      </div>
    )
  }
}

mapStateMapProps(){
 return state
}

export default connect(mapStateToProps)(Header)


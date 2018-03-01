import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ['Hunt', 'Bungy jump', 'Ski', 'Eat the Hottest Chilli', 'Ice Swim', 'Nap', 'Ibiza'],
      time: 0
    }
    this.timer = this.timer.bind(this)
    this.printTime = this.printTime.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  componentDidMount() {
    this.timer()
  }

  timer() {
    setInterval(this.printTime, 1500)
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
  }

  render() {
    return (
      <div>
        <h1>Dice Life</h1>
        <p>Eat,</p>
        <p>play,</p>
        <p id="changingWord"></p>
      </div>
    )
  }
}

export default Header

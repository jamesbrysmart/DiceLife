import React from 'react'

class ChangingWord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ['bungee', 'skydive', 'ski', 'party', 'swim', 'dance', 'travel'],
      time: 0
    }
    this.timer = this.timer.bind(this)
    this.printTime = this.printTime.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  componentWillMount() {
    this.timer()
  }
  timer() {
    this.interval = setInterval(this.printTime, 1500)
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
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
      <div id='rotatingWord'>
       <h2 className="subtitle is-3">
        <p> Eat, play,</p> <p><span id="changingWord">Karaoke</span></p>
        </h2>
      </div>
    )
  }
}

export default ChangingWord
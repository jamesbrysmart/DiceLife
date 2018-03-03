import React from 'react'
import ResultsParent from './ResultsParent'

class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      showResults: false
    }
    this.playAnimation = this.playAnimation.bind(this)
    this.addTime = this.addTime.bind(this)

  }
  componentDidMount() {
    this.playAnimation()
  }
  toggleResults(){
    this.setState({
      time:5,
      showResults: true
    })
  }
  playAnimation() {
    this.setState({
      intervalHandle: setInterval(this.addTime, 1000)
    })
  }
  addTime() {
    this.setState({
      time: this.state.time +=1 ,
    })
    if (this.state.time >= 3) {
      this.toggleResults()
      clearInterval(this.state.intervalHandle)
      console.log(`Interval cleared`)
      document.getElementById('animation').style.display = "none"
    }
    console.log(this.state.time)
  }
  render() {
    return (
      <div>
        <h1>Animation</h1>
        {this.state.showResults && <ResultsParent/>}
        <img id="animation" src="/images/loading.gif" alt="" />
      </div>
    )
  }
}


export default Animation

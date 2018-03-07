import React from 'react'
import ResultsParent from './ResultsParent'
import Header from './Header'

class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      showResults: false,
    }
    this.playAnimation = this.playAnimation.bind(this)
    this.addTime = this.addTime.bind(this)
    this.resetState = this.resetState.bind(this)
  }
  resetState(){
    this.setState({
      time: 0,
      showResults: false
    })
    document.getElementById('animation1').style.display = "inline"
    document.getElementById('animation2').style.display = "inline"
    this.playAnimation()
  }
  componentDidMount() {
    this.playAnimation()
  }

  showResults(){
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
      this.showResults()
      clearInterval(this.state.intervalHandle)

      document.getElementById('animation1').style.display = "none"
      document.getElementById('animation2').style.display = "none"
    }
  }
  render() {
    return (
      <div className="animations">
        {this.state.showResults && <ResultsParent resetState={this.resetState}/>}
        <img id="animation1" src="/images/dice-basic-random-slow.gif" alt="" />
        <img id="animation2" src="/images/dice-basic-slow.gif" alt="" />
      </div>
    )
  }
}


export default Animation

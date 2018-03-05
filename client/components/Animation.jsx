import React from 'react'
import ResultsParent from './ResultsParent'
import Header from './Header'

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

      document.getElementById('animation1').style.display = "none"
      document.getElementById('animation2').style.display = "none"
    }
  }
  render() {
    return (
      <div>
        {this.state.showResults && <ResultsParent/>}
        <img id="animation1" src="/images/loading.gif" alt="" />
        <img id="animation2" src="/images/loading.gif" alt="" />
      </div>
    )
  }
}


export default Animation

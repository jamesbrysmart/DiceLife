import React from 'react'

class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
    this.playAnimation = this.playAnimation.bind(this)
    this.addTime = this.addTime.bind(this)

  }
  componentDidMount() {
    this.playAnimation()
  }
  playAnimation() {
    setInterval(this.addTime, 1000)
  }
  addTime() {
    this.setState({
      time: this.state.time +=1 ,
    })
    console.log(this.state.time)
  }
  render() {
    return (
      <div>
        <h1>Animation</h1>
        <img src="/images/loading.gif" alt="" />
      </div>
    )
  }
}


export default Animation

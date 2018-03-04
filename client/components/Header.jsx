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
            </div>
          </div>
        </section>


      </div>











    )
  }
}

export default Header


{/* <div class="indexTitles">
<h1 class="title is-1 has-text-centered">
    Dice Life
</h1>
<h2 class="subtitle is-3  has-text-centered">
    Eat, Play,  <strong>... ?</strong>
</h2>
</div> */}

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class DiceAdded extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <h1>Dice added</h1>
        {window.location.href = "/#/alldice"}
      </div>
    )
  }
}



export default DiceAdded

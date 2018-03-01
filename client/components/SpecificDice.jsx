import React from 'react'
import {connect} from {'react-redux'}

class SpecificDice extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h2>Dice Name</h2>
        <table>
          <thead>
            <tr>
              <th># Rolled</th>
              <th>Chance</th>
              <th>What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>Most Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>6 or 8</td>
              <td>Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>5 or 9</td>
              <td>Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>4 or 10</td>
              <td>Slightly Likely</td>
              <td></td>
            </tr>
            <tr>
              <td>3 or 11</td>
              <td>Possible</td>
              <td></td>
            </tr>
            <tr>
              <td>2 or 12</td>
              <td>Unlinkely</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SpecificDice)

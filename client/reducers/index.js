import {combineReducers} from 'redux'

import auth from './auth'
import diceOutcomes from './diceOutcomes'
import diceNames from './diceNames'

export default combineReducers({
  auth,
  diceOutcomes,
  diceNames
})

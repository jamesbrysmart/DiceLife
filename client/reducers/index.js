import {combineReducers} from 'redux'

import auth from './auth'
import diceOutcomes from './diceOutcomes'
import diceNames from './diceNames'
import diceRolls from './diceRolls'

export default combineReducers({
  auth,
  diceOutcomes,
  diceNames,
  diceRolls
})

import {combineReducers} from 'redux'

import auth from './auth'
import diceOutcomes from './diceOutcomes'

export default combineReducers({
  auth,
  diceOutcomes
})

import { combineReducers } from 'redux'
import hasSplashScreenBeenShown from './hasSplashScreenBeenShown'
import totalHoursWorked from './totalHoursWorked'

const rootReducer = combineReducers({
  hasSplashScreenBeenShown,
  totalHoursWorked,
})

export default rootReducer

import { combineReducers } from 'redux'
import hasSplashScreenBeenShown from './hasSplashScreenBeenShown'
import totalHoursWorked from './totalHoursWorked'
import hasCompletedIncomeForm from './hasCompletedIncomeForm'

const rootReducer = combineReducers({
  hasSplashScreenBeenShown,
  totalHoursWorked,
  hasCompletedIncomeForm,
})

export default rootReducer

import { combineReducers } from 'redux'
import hasSplashScreenBeenShown from './hasSplashScreenBeenShown'
import totalHoursWorked from './totalHoursWorked'
import hasCompletedIncomeForm from './hasCompletedIncomeForm'
import grossRegularTimePay from './grossRegularTimePay'

const rootReducer = combineReducers({
  hasSplashScreenBeenShown,
  totalHoursWorked,
  hasCompletedIncomeForm,
  grossRegularTimePay,
})

export default rootReducer

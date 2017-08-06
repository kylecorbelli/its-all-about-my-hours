import { combineReducers } from 'redux'
import hasSplashScreenBeenShown from './hasSplashScreenBeenShown'
import totalHoursWorked from './totalHoursWorked'
import hasCompletedIncomeForm from './hasCompletedIncomeForm'
import grossRegularTimePay from './grossRegularTimePay'
import grossOvertimePay from './grossOvertimePay'

const rootReducer = combineReducers({
  hasSplashScreenBeenShown,
  totalHoursWorked,
  hasCompletedIncomeForm,
  grossRegularTimePay,
  grossOvertimePay,
})

export default rootReducer

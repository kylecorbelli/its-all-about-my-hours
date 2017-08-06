import { combineReducers } from 'redux'
import hasSplashScreenBeenShown from './hasSplashScreenBeenShown'
import hasCompletedIncomeForm from './hasCompletedIncomeForm'
import grossRegularTimePay from './grossRegularTimePay'
import grossOvertimePay from './grossOvertimePay'

const rootReducer = combineReducers({
  hasSplashScreenBeenShown,
  hasCompletedIncomeForm,
  grossRegularTimePay,
  grossOvertimePay,
})

export default rootReducer

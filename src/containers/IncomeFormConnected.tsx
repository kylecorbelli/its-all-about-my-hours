import { connect } from 'react-redux'
import {
  ReduxState,
} from '../redux/types'
import {
  updateHasSplashScreenBeenShown,
  updateTotalHoursWorked,
  updateHasCompletedIncomeForm,
  updateGrossRegularTimePay,
  updateGrossOvertimePay,
} from '../redux/actions'

import IncomeForm from '../components/IncomeForm'

const mapStateToProps = (state: ReduxState) => ({
  hasSplashScreenBeenShown: state.hasSplashScreenBeenShown,
  grossRegularTimePay: state.grossRegularTimePay,
  grossOvertimePay: state.grossOvertimePay,
})

export default connect(
  mapStateToProps,
  {
    updateHasSplashScreenBeenShown,
    updateTotalHoursWorked,
    updateHasCompletedIncomeForm,
    updateGrossRegularTimePay,
    updateGrossOvertimePay,
  },
)(IncomeForm)

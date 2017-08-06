import { connect } from 'react-redux'
import {
  ReduxState,
} from '../redux/types'
import {
  updateHasSplashScreenBeenShown,
  updateHasCompletedIncomeForm,
  updateGrossRegularTimePay,
  updateGrossOvertimePay,
} from '../redux/actions'

import IncomeForm from '../components/IncomeForm'

const mapStateToProps = (state: ReduxState) => {
  const {
    hasCompletedIncomeForm,
    hasSplashScreenBeenShown,
    grossRegularTimePay,
    grossOvertimePay,
  } = state
  return {
    hasCompletedIncomeForm,
    hasSplashScreenBeenShown,
    grossRegularTimePay,
    grossOvertimePay,
  }
}

export default connect(
  mapStateToProps,
  {
    updateHasSplashScreenBeenShown,
    updateHasCompletedIncomeForm,
    updateGrossRegularTimePay,
    updateGrossOvertimePay,
  },
)(IncomeForm)

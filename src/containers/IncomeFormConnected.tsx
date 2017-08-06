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

const mapStateToProps = (state: ReduxState) => ({
  hasSplashScreenBeenShown: state.hasSplashScreenBeenShown,
  grossRegularTimePay: state.grossRegularTimePay,
  grossOvertimePay: state.grossOvertimePay,
})

export default connect(
  mapStateToProps,
  {
    updateHasSplashScreenBeenShown,
    updateHasCompletedIncomeForm,
    updateGrossRegularTimePay,
    updateGrossOvertimePay,
  },
)(IncomeForm)

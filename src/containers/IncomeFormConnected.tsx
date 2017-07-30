import { connect } from 'react-redux'
import {
  ReduxState,
} from '../redux/types'
import {
  updateHasSplashScreenBeenShown,
  updateTotalHoursWorked,
  updateHasCompletedIncomeForm,
} from '../redux/actions'

import IncomeForm from '../components/IncomeForm'

const mapStateToProps = (state: ReduxState) => ({
  hasSplashScreenBeenShown: state.hasSplashScreenBeenShown,
})

export default connect(
  mapStateToProps,
  {
    updateHasSplashScreenBeenShown,
    updateTotalHoursWorked,
    updateHasCompletedIncomeForm,
  },
)(IncomeForm)

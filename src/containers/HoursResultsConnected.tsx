import { connect } from 'react-redux'
import HoursResults from '../components/HoursResults'
import { ReduxState } from '../redux/types'

export const mapStateToProps = (state: ReduxState) => {
  const {
    hasCompletedIncomeForm,
    grossRegularTimePay,
    grossOvertimePay,
  } = state
  return {
    hasCompletedIncomeForm,
    grossRegularTimePay,
    grossOvertimePay,
  }
}

export default connect(
  mapStateToProps,
  {},
)(HoursResults)

import { connect } from 'react-redux'
import HoursResults from '../components/HoursResults'
import { ReduxState } from '../redux/types'

const mapStateToProps = (state: ReduxState) => ({
  hasCompletedIncomeForm: state.hasCompletedIncomeForm,
  grossRegularTimePay: state.grossRegularTimePay,
  grossOvertimePay: state.grossOvertimePay,
})

export default connect(
  mapStateToProps,
  {},
)(HoursResults)

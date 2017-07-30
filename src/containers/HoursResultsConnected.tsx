import { connect } from 'react-redux'
import HoursResults from '../components/HoursResults'
import { ReduxState } from '../redux/types'

const mapStateToProps = (state: ReduxState) => ({
  totalHoursWorked: state.totalHoursWorked,
  hasCompletedIncomeForm: state.hasCompletedIncomeForm,
})

export default connect(
  mapStateToProps,
  {},
)(HoursResults)

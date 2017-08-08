import { mapStateToProps } from './HoursResultsConnected'
import initialState from '../redux/initialState'

describe('HoursResultsConnected', () => {
  describe('mapStateToProps', () => {
    it('maps state to props', () => {
      const expectedProps = {
        hasCompletedIncomeForm: initialState.hasCompletedIncomeForm,
        grossRegularTimePay: initialState.grossRegularTimePay,
        grossOvertimePay: initialState.grossOvertimePay,
      }
      expect(mapStateToProps(initialState)).toEqual(expectedProps)
    })
  })
})

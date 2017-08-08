import { mapStateToProps } from './IncomeFormConnected'
import initialState from '../redux/initialState'

describe('IncomeFormConnected', () => {
  describe('mapStateToProps', () => {
    it('maps state to props', () => {
      const expectedProps = {
        hasCompletedIncomeForm: initialState.hasCompletedIncomeForm,
        hasSplashScreenBeenShown: initialState.hasSplashScreenBeenShown,
        grossRegularTimePay: initialState.grossRegularTimePay,
        grossOvertimePay: initialState.grossOvertimePay,
      }
      expect(mapStateToProps(initialState)).toEqual(expectedProps)
    })
  })
})

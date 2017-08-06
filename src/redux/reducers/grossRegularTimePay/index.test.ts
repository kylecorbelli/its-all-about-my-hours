import grossRegularTimePay from './index'
import { UpdateGrossRegularTimePayAction } from '../../types'
import { updateGrossRegularTimePay } from '../../actions'

describe('grossRegularTimePay', () => {
  describe('UPDATE_GROSS_REGULARTIME_PAY', () => {
    it('updates grossRegularTimePay', () => {
      const initialState: number = 10
      const newGrossRegularTimePay: number = 4321
      const action: UpdateGrossRegularTimePayAction = updateGrossRegularTimePay(newGrossRegularTimePay)
      expect(grossRegularTimePay(initialState, action)).toBe(newGrossRegularTimePay)
    })
  })
})

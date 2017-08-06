import grossOvertimePay from './index'
import { UpdateGrossOvertimePayAction } from '../../types'
import { updateGrossOvertimePay } from '../../actions'

describe('grossOvertimePay', () => {
  describe('UPDATE_GROSS_OVERTIME_PAY', () => {
    it('updates grossOvertimePay', () => {
      const initialState: number = 10
      const newGrossOvertimePay: number = 4321
      const action: UpdateGrossOvertimePayAction = updateGrossOvertimePay(newGrossOvertimePay)
      expect(grossOvertimePay(initialState, action)).toBe(newGrossOvertimePay)
    })
  })
})

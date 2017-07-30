import totalHoursWorked from './index'
import { updateTotalHoursWorked } from '../../actions'

describe('totalHoursWorked', () => {
  describe('UPDATE_TOTAL_HOURS_WORKED', () => {
    it('updates the total hours worked', () => {
      const initialState = 0
      const action = updateTotalHoursWorked(5678.90, 678)
      expect(totalHoursWorked(initialState, action)).toBe(408.72666666666663)
    })
  })
})

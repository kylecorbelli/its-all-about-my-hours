import totalHoursWorked from './index'
import { updateTotalHoursWorked } from '../../actions'
import { UpdateTotalHoursWorkedAction } from '../../types'

describe('totalHoursWorked', () => {
  describe('UPDATE_TOTAL_HOURS_WORKED', () => {
    it('updates the total hours worked', () => {
      const initialState: number = 0
      const action: UpdateTotalHoursWorkedAction = updateTotalHoursWorked(5678.90, 678)
      expect(totalHoursWorked(initialState, action)).toBe(408.72666666666663)
    })
  })
})

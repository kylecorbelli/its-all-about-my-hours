import {
  calculateRegularTimeHoursWorked,
  calculateOvertimeHoursWorked,
  calculateTotalHoursWorked,
  calculateTotalHoursRemaining,
} from './index'

describe('hoursCalculations', () => {
  describe('calculateRegularTimeHoursWorked', () => {
    it('calculates the number of hours worked given gross regular time pay', () => {
      expect(calculateRegularTimeHoursWorked(6789)).toBe(452.6)
    })
  })

  describe('calculateOvertimeHoursWorked', () => {
    it('calculates the number of hours worked given gross overtime pay', () => {
      expect(calculateOvertimeHoursWorked(345.67)).toBe(15.363111111111111)
    })
  })

  describe('calculateTotalHoursWorked', () => {
    it('calculates the total number of hours worked given gross regular time pay and gross overtime pay', () => {
      expect(calculateTotalHoursWorked(9876, 765.43)).toBe(692.4191111111111)
    })
  })

  describe('calculateTotalHoursRemaining', () => {
    it('calculates the total number of hours remaining given the total number of hours worked so far', () => {
      expect(calculateTotalHoursRemaining(1687.54)).toBe(312.46000000000004)
    })

    it('returns 0 when the number of hours worked so far exceeds the target hours', () => {
      expect(calculateTotalHoursRemaining(2345)).toBe(0)
    })
  })
})

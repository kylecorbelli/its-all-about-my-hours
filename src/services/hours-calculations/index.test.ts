import {
  calculateRegularTimeHoursWorked,
  calculateOvertimeHoursWorked,
  calculateTotalHoursWorked,
  calculateTotalHoursRemaining,
  calculateNumberOfWeeksBetween,
  calculateAverageHoursWorkedPerWeek,
  calculateNumberOfWeeksStillNeeded,
  calculateNWeeksLaterDate,
  calculateExpectedCompletionDate,
} from './index'

describe('hoursCalculations', () => {
  describe('calculateRegularTimeHoursWorked', () => {
    it('calculates the number of hours worked given gross regular time pay', () => {
      expect(calculateRegularTimeHoursWorked(6789)).toBeCloseTo(452.6)
    })
  })

  describe('calculateOvertimeHoursWorked', () => {
    it('calculates the number of hours worked given gross overtime pay', () => {
      expect(calculateOvertimeHoursWorked(345.67)).toBeCloseTo(15.363111111111111)
    })
  })

  describe('calculateTotalHoursWorked', () => {
    it('calculates the total number of hours worked given gross regular time pay and gross overtime pay', () => {
      expect(calculateTotalHoursWorked(9876, 765.43)).toBeCloseTo(692.4191111111111)
    })
  })

  describe('calculateTotalHoursRemaining', () => {
    it('calculates the total number of hours remaining given the total number of hours worked so far', () => {
      expect(calculateTotalHoursRemaining(9876, 765.43)).toBeCloseTo(1307.580888888889)
    })

    it('returns 0 when the number of hours worked so far exceeds the target hours', () => {
      expect(calculateTotalHoursRemaining(34567, 789)).toBe(0)
    })
  })

  describe('calculateNumberOfWeeksBetween', () => {
    it('calculates the number of weeks between two dates', () => {
      const startDate: Date = new Date(2017, 7, 3)
      const endDate: Date = new Date(2017, 7, 10)
      const result: number = calculateNumberOfWeeksBetween(startDate, endDate)
      expect(result).toBe(1)
    })
  })

  describe('calculateAverageHoursWorkedPerWeek', () => {
    it('calculates the average hours worked per week', () => {
      const grossRegularTimePay: number = 1065
      const grossOvertimePay: number = 45
      const currentDate: Date = new Date(2017, 3, 24)
      const result: number = calculateAverageHoursWorkedPerWeek(grossRegularTimePay, grossOvertimePay, currentDate)
      expect(result).toBe(36.50)
    })
  })

  describe('calculateNumberOfWeeksStillNeeded', () => {
    const grossRegularTimePay: number = 1065
    const grossOvertimePay: number = 45
    const currentDate: Date = new Date(2017, 3, 24)
    const result: number = calculateNumberOfWeeksStillNeeded(grossRegularTimePay, grossOvertimePay, currentDate)
    expect(result).toBeCloseTo(52.7945205479452) // or whatever the average hours per weeks is
  })

  
  describe('calculateNWeeksLaterDate', () => {
    it('calculates the date some integer number of weeks from a given start date', () => {
      const startDate: Date = new Date(2017, 3, 10)
      const result: Date = calculateNWeeksLaterDate(startDate, 2)
      const resultDateString: string = result.toDateString()
      const expectedDateString: string = new Date(2017, 3, 24).toDateString()
      expect(resultDateString).toBe(expectedDateString)
    })

    it('calculates the date some fractional number of weeks from a given start date', () => {
      const startDate: Date = new Date(2017, 3, 10)
      const result: Date = calculateNWeeksLaterDate(startDate, 2.2857142857142857)
      const resultDateString: string = result.toDateString()
      const expectedDateString: string = new Date(2017, 3, 26).toDateString()
      expect(resultDateString).toBe(expectedDateString)
    })
  })

  describe('calculateExpectedCompletionDate', () => {
    const currentDate: Date = new Date(2017, 3, 24)
    const grossRegularTimePay: number = 1065
    const grossOvertimePay: number = 45
    const result: Date = calculateExpectedCompletionDate(grossRegularTimePay, grossOvertimePay, currentDate)
    const resultDateString: string = result.toDateString()
    const expectedCompletionDate: Date = new Date(2018, 3, 28)
    const expectedCompletionDateDateString: string = expectedCompletionDate.toDateString()
    expect(resultDateString).toBe(expectedCompletionDateDateString)
  })
})

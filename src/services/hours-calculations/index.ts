const TARGET_HOURS = 2000
const HOURLY_REGULAR_TIME_RATE = 15
const OVERTIME_RATE = HOURLY_REGULAR_TIME_RATE * 1.5

export const calculateRegularTimeHoursWorked = (
  grossRegularTimePay: number,
): number => grossRegularTimePay / HOURLY_REGULAR_TIME_RATE

export const calculateOvertimeHoursWorked = (
  grossOvertimePay: number,
): number => grossOvertimePay / OVERTIME_RATE

export const calculateTotalHoursWorked = (
  grossRegularTimePay: number,
  grossOvertimePay: number,
): number => calculateRegularTimeHoursWorked(grossRegularTimePay) +
             calculateOvertimeHoursWorked(grossOvertimePay)

export const calculateTotalHoursRemaining = (
  grossRegularTimePay: number,
  grossOvertimePay: number,
): number => {
  const totalHoursWorked: number = calculateTotalHoursWorked(grossRegularTimePay, grossOvertimePay)
  return Math.max(TARGET_HOURS - totalHoursWorked, 0)
}

const TARGET_HOURS: number = 2000
const HOURLY_REGULAR_TIME_RATE: number = 15
const OVERTIME_RATE: number = HOURLY_REGULAR_TIME_RATE * 1.5
const MILLISECONDS_PER_SECOND: number = 1000
const SECONDS_PER_MINUTE: number = 60
const MINUTES_PER_HOUR: number = 60
const HOURS_PER_DAY: number = 24
const DAYS_PER_WEEK: number = 7
const START_DATE: Date = new Date(2017, 3, 10) // Get the actual date

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

export const calculateNumberOfWeeksBetween = (startDate: Date, endDate: Date): number => {
  const startDateWithoutTime: Date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
  const endDateWithoutTime: Date = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
  const millisecondsBetweenDates: number = endDateWithoutTime.valueOf() - startDateWithoutTime.valueOf()
  const secondsBetweenDates: number = millisecondsBetweenDates / MILLISECONDS_PER_SECOND
  const minutesBetweenDates: number = secondsBetweenDates / SECONDS_PER_MINUTE
  const hoursBetweenDates: number = minutesBetweenDates / MINUTES_PER_HOUR
  const daysDetweenDates: number = hoursBetweenDates / HOURS_PER_DAY
  return daysDetweenDates / DAYS_PER_WEEK
}

export const calculateAverageHoursWorkedPerWeek = (
  grossRegularTimePay: number,
  grossOvertimePay: number,
  currentDate: Date,
): number => {
  const totalHoursWorked: number = calculateTotalHoursWorked(grossRegularTimePay, grossOvertimePay)
  const numberOfWeeksElapsed: number = calculateNumberOfWeeksBetween(START_DATE, currentDate)
  return totalHoursWorked / numberOfWeeksElapsed
}

export const calculateNumberOfWeeksStillNeeded = (
  grossRegularTimePay: number,
  grossOvertimePay: number,
  currentDate: Date,
): number => {
  const totalHoursRemaining: number = calculateTotalHoursRemaining(grossRegularTimePay, grossOvertimePay)
  const averageHoursWorkedPerWeek: number = calculateAverageHoursWorkedPerWeek(grossRegularTimePay, grossOvertimePay, currentDate)
  return totalHoursRemaining / averageHoursWorkedPerWeek
}

export const calculateNWeeksLaterDate = (startDate: Date, numberOfWeeksFromNow: number): Date => {
  const newDate: Date = new Date(startDate.getTime())
  const numberOfDaysLater: number = numberOfWeeksFromNow * DAYS_PER_WEEK
  newDate.setDate(startDate.getDate() + numberOfDaysLater)
  return newDate
}

export const calculateExpectedCompletionDate = (
  grossRegularTimePay: number,
  grossOvertimePay: number,
  currentDate: Date,
): Date => {
  const numberOfWeeksStillNeeded: number = calculateNumberOfWeeksStillNeeded(grossRegularTimePay, grossOvertimePay, currentDate)
  console.log(numberOfWeeksStillNeeded)
  return calculateNWeeksLaterDate(currentDate, numberOfWeeksStillNeeded)
}
export const prettyNumber = (value: number): string => {
  return Math.round(value)
             .toFixed(1)
             .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
             .replace('.0', '')
}

export const stringifyOrBlankIfZero = (value: number): string => value === 0 ? '' : String(value)

export const prettyDate = (date: Date): string => {
  const months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const fullYear: number = date.getFullYear()
  const monthIndex: number = date.getMonth()
  const dayOfMonth: number = date.getDate()
  const month: string = months[monthIndex]
  return `${month} ${dayOfMonth}, ${fullYear}`
}
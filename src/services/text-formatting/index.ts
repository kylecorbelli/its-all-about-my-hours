export const prettyNumber = (value: number): string => {
  return Math.round(value)
             .toFixed(1)
             .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
             .replace('.0', '')
}

export const stringifyOrBlankIfZero = (value: number): string => value === 0 ? '' : String(value)

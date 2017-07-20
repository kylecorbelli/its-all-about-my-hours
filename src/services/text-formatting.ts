export const prettyNumber = (value: number): string => {
  return Math.round(value)
             .toFixed(1)
             .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
             .replace('.0', '')
}

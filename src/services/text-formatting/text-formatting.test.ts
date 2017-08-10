import {
  prettyNumber,
  stringifyOrBlankIfZero,
  prettyDate,
} from './index'

describe('text-formatting service', () => {
  describe('prettyNumber', () => {
    describe('input values less than 1,000', () => {
      it('should format integers', () => {
        expect(prettyNumber(567)).toBe('567')
      })

      it('should round decimals down to the nearest integer', () => {
        expect(prettyNumber(43.499)).toBe('43')
      })

      it('should round decimals up to the nearest integer', () => {
        expect(prettyNumber(43.50001)).toBe('44')
      })
    })

    describe('input values greater than 1,000', () => {
      it('should format integers', () => {
        expect(prettyNumber(1455567)).toBe('1,455,567')
      })

      it('should round decimals down to the nearest integer', () => {
        expect(prettyNumber(5389143.499)).toBe('5,389,143')
      })

      it('should round decimals up to the nearest integer', () => {
        expect(prettyNumber(5389143.50001)).toBe('5,389,144')
      })
    })
  })

  describe('stringifyOrBlankIfZero', () => {
    it('returns a stringified number if the input is not zero', () => {
      expect(stringifyOrBlankIfZero(3.1)).toBe('3.1')
    })

    it('returns a blank string if the input is zero', () => {
      expect(stringifyOrBlankIfZero(0)).toBe('')
    })
  })

  describe('prettyDate', () => {
    it('formats the date real pretty like', () => {
      const date: Date = new Date(2017, 8, 10)
      const expectedPrettyDate: string = 'September 10, 2017'
      const result: string = prettyDate(date)
      expect(result).toBe(expectedPrettyDate)
    })
  })
})

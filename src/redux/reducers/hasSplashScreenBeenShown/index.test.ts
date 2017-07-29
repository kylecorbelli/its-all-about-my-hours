import hasSplashScreenBeenShown from './index'
import { updateHasSplashScreenBeenShown } from '../../actions'

describe('hasSplashScreenBeenShown', () => {
  describe('ReduxActionType.SetSplashScreenHasBeenShown', () => {
    it('should set the value to "false" when provide "false"', () => {
      const initialState: boolean = true
      const newState: boolean = hasSplashScreenBeenShown(initialState, updateHasSplashScreenBeenShown(false))
      expect(newState).toBe(false)
    })

    it('should set the value to "true" when provide "true"', () => {
      const initialState: boolean = false
      const newState: boolean = hasSplashScreenBeenShown(initialState, updateHasSplashScreenBeenShown(true))
      expect(newState).toBe(true)
    })
  })
})

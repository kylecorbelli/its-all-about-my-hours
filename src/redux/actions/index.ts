import {
  UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN,
  UpdateSplashScreenHasBeenShownAction,
} from '../types'

export const updateHasSplashScreenBeenShown = (
  hasSplashScreenBeenShown: boolean
): UpdateSplashScreenHasBeenShownAction => ({
  type: UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN,
  payload: {
    hasSplashScreenBeenShown,
  },
})

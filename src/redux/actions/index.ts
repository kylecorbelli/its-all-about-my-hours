import {
  ReduxActionTypes,
  SetSplashScreenHasBeenShownAction,
} from '../types'

export const setHasSplashScreenBeenShown = (hasSplashScreenBeenShown: boolean): SetSplashScreenHasBeenShownAction => ({
  type: ReduxActionTypes.SET_SPLASH_SCREEN_HAS_BEEN_SHOWN,
  payload: {
    hasSplashScreenBeenShown,
  },
})

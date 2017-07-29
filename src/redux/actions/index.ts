import {
  ReduxActionType,
  SetSplashScreenHasBeenShownAction,
} from '../types'

export const setHasSplashScreenBeenShown = (hasSplashScreenBeenShown: boolean): SetSplashScreenHasBeenShownAction => ({
  type: ReduxActionType.SetSplashScreenHasBeenShown,
  payload: {
    hasSplashScreenBeenShown,
  },
})

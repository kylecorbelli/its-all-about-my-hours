import {
  ReduxAction,
  UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN,
} from '../../types'

const hasSplashScreenBeenShown = (
  state: boolean = false,
  action: ReduxAction,
): boolean => {
  switch (action.type) {
    case UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN:
      return action.payload.hasSplashScreenBeenShown
    default:
      return state
  }
}

export default hasSplashScreenBeenShown

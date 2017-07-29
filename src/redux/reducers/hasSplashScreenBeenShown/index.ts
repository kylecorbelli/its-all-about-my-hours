import {
  ReduxAction,
  UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN,
} from '../../types'

const hasSplashScreenBeenShown = (state: boolean = false, action: ReduxAction): boolean => {
  switch (action.type) {
    case UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN:
      return action.payload.hasSplashScreenBeenShown
    default:
      return state
  }
}

export default hasSplashScreenBeenShown

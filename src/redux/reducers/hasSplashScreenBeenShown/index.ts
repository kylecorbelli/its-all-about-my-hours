import {
  ReduxAction,
  ReduxActionType,
} from '../../types'

const hasSplashScreenBeenShown = (state: boolean = false, action: ReduxAction): boolean => {
  switch (action.type) {
    case ReduxActionType.SetSplashScreenHasBeenShown:
      return action.payload.hasSplashScreenBeenShown
    default:
      return state
  }
}

export default hasSplashScreenBeenShown

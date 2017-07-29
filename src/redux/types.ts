// Probably going to want to break up this file sooner rather than later

export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
}

export type UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN = 'UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN'
export const UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN: UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN
  = 'UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN'

export interface UpdateSplashScreenHasBeenShownAction {
  readonly type: UPDATE_SPLASH_SCREEN_HAS_BEEN_SHOWN
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export type ReduxAction = UpdateSplashScreenHasBeenShownAction

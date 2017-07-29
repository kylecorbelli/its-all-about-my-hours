export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
}

export type UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'
export const UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'

export interface UpdateHasSplashScreenBeenShownAction {
  readonly type: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export type ReduxAction = UpdateHasSplashScreenBeenShownAction

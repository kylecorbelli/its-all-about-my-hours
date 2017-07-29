// Probably going to want to break up this file sooner rather than later

export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
}

export type ReduxActionTypesEnum = 'SET_SPLASH_SCREEN_HAS_BEEN_SHOWN'
  | 'CALCULATE_HOURS_WORKED----CHANGE_THIS_OBVIOUSLY'
  | 'CALCULATE_EXPECTED_FINISH_DATE----CHANGE_THIS_OBVIOUSLY'

export const ReduxActionTypes = {
  SET_SPLASH_SCREEN_HAS_BEEN_SHOWN: 'SET_SPLASH_SCREEN_HAS_BEEN_SHOWN' as ReduxActionTypesEnum
}

export interface SetSplashScreenHasBeenShownAction {
  readonly type: ReduxActionTypesEnum
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export type ReduxAction = SetSplashScreenHasBeenShownAction

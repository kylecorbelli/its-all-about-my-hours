// Probably going to want to break up this file sooner rather than later

export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
}

export type ReduxActionTypesEnum = 'SET_SPLASH_SCREEN_HAS_BEEN_SHOWN'
  | 'CALCULATE_HOURS_WORKED----CHANGE_THIS_OBVIOUSLY'
  | 'CALCULATE_EXPECTED_FINISH_DATE----CHANGE_THIS_OBVIOUSLY'

export namespace ReduxActionTypes  {
  export const SET_SPLASH_SCREEN_HAS_BEEN_SHOWN: ReduxActionTypesEnum = 'SET_SPLASH_SCREEN_HAS_BEEN_SHOWN'
}

export interface BaseReduxAction {
  readonly type: ReduxActionTypesEnum
}

export interface SetSplashScreenHasBeenShownAction extends BaseReduxAction  {
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export type ReduxAction = SetSplashScreenHasBeenShownAction

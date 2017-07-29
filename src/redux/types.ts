// Probably going to want to break up this file sooner rather than later

export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
}

export enum ReduxActionType {
  SetSplashScreenHasBeenShown,
}

export interface SetSplashScreenHasBeenShownAction {
  readonly type: ReduxActionType.SetSplashScreenHasBeenShown
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export type ReduxAction = SetSplashScreenHasBeenShownAction

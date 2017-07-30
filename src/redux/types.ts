export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
  readonly totalHoursWorked: number
}

export type UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'
export const UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'

export type UPDATE_TOTAL_HOURS_WORKED = 'UPDATE_TOTAL_HOURS_WORKED'
export const UPDATE_TOTAL_HOURS_WORKED: UPDATE_TOTAL_HOURS_WORKED = 'UPDATE_TOTAL_HOURS_WORKED'

export interface UpdateHasSplashScreenBeenShownAction {
  readonly type: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export interface UpdateTotalHoursWorkedAction {
  readonly type: UPDATE_TOTAL_HOURS_WORKED
  readonly payload: {
    grossRegularTimePay: number
    grossOvertimePay: number
  }
}

export type ReduxAction = UpdateHasSplashScreenBeenShownAction
  | UpdateTotalHoursWorkedAction

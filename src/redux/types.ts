export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
  readonly totalHoursWorked: number
  readonly hasCompletedIncomeForm: boolean
}

export type UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'
export const UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'

export type UPDATE_TOTAL_HOURS_WORKED = 'UPDATE_TOTAL_HOURS_WORKED'
export const UPDATE_TOTAL_HOURS_WORKED: UPDATE_TOTAL_HOURS_WORKED = 'UPDATE_TOTAL_HOURS_WORKED'

export type UPDATE_HAS_COMPLETED_INCOME_FORM = 'UPDATE_HAS_COMPLETED_INCOME_FORM'
export const UPDATE_HAS_COMPLETED_INCOME_FORM: UPDATE_HAS_COMPLETED_INCOME_FORM = 'UPDATE_HAS_COMPLETED_INCOME_FORM'

export interface UpdateHasSplashScreenBeenShownAction {
  readonly type: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export interface UpdateTotalHoursWorkedAction {
  readonly type: UPDATE_TOTAL_HOURS_WORKED
  readonly payload: {
    readonly grossRegularTimePay: number
    readonly grossOvertimePay: number
  }
}

export interface UpdateHasCompletedIncomeFormAction {
  readonly type: UPDATE_HAS_COMPLETED_INCOME_FORM
  readonly payload: {
    readonly hasCompletedIncomeForm: boolean
  }
}

export type ReduxAction = UpdateHasSplashScreenBeenShownAction
  | UpdateTotalHoursWorkedAction
  | UpdateHasCompletedIncomeFormAction

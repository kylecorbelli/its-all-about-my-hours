export interface ReduxState {
  readonly hasSplashScreenBeenShown: boolean
  readonly hasCompletedIncomeForm: boolean
  readonly grossRegularTimePay: number
  readonly grossOvertimePay: number
}

export type UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'
export const UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  = 'UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN'

export type UPDATE_HAS_COMPLETED_INCOME_FORM = 'UPDATE_HAS_COMPLETED_INCOME_FORM'
export const UPDATE_HAS_COMPLETED_INCOME_FORM: UPDATE_HAS_COMPLETED_INCOME_FORM = 'UPDATE_HAS_COMPLETED_INCOME_FORM'

export type UPDATE_GROSS_REGULARTIME_PAY = 'UPDATE_GROSS_REGULARTIME_PAY'
export const UPDATE_GROSS_REGULARTIME_PAY: UPDATE_GROSS_REGULARTIME_PAY = 'UPDATE_GROSS_REGULARTIME_PAY'

export type UPDATE_GROSS_OVERTIME_PAY = 'UPDATE_GROSS_OVERTIME_PAY'
export const UPDATE_GROSS_OVERTIME_PAY: UPDATE_GROSS_OVERTIME_PAY = 'UPDATE_GROSS_OVERTIME_PAY'

export interface UpdateHasSplashScreenBeenShownAction {
  readonly type: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN
  readonly payload: {
    readonly hasSplashScreenBeenShown: boolean
  }
}

export interface UpdateHasCompletedIncomeFormAction {
  readonly type: UPDATE_HAS_COMPLETED_INCOME_FORM
  readonly payload: {
    readonly hasCompletedIncomeForm: boolean
  }
}

export interface UpdateGrossRegularTimePayAction {
  readonly type: UPDATE_GROSS_REGULARTIME_PAY
  readonly payload: {
    readonly grossRegularTimePay: number
  }
}

export interface UpdateGrossOvertimePayAction {
  readonly type: UPDATE_GROSS_OVERTIME_PAY
  readonly payload: {
    readonly grossOvertimePay: number
  }
}

export type ReduxAction = UpdateHasSplashScreenBeenShownAction
  | UpdateHasCompletedIncomeFormAction
  | UpdateGrossRegularTimePayAction
  | UpdateGrossOvertimePayAction

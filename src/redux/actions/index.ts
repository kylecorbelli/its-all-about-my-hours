import {
  UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN,
  UPDATE_HAS_COMPLETED_INCOME_FORM,
  UPDATE_GROSS_REGULARTIME_PAY,
  UPDATE_GROSS_OVERTIME_PAY,
  UpdateHasSplashScreenBeenShownAction,
  UpdateHasCompletedIncomeFormAction,
  UpdateGrossRegularTimePayAction,
  UpdateGrossOvertimePayAction,
} from '../types'

export const updateHasSplashScreenBeenShown = (
  hasSplashScreenBeenShown: boolean
): UpdateHasSplashScreenBeenShownAction => ({
  type: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN,
  payload: {
    hasSplashScreenBeenShown,
  },
})

export const updateHasCompletedIncomeForm = (
  hasCompletedIncomeForm: boolean,
): UpdateHasCompletedIncomeFormAction => ({
  type: UPDATE_HAS_COMPLETED_INCOME_FORM,
  payload: {
    hasCompletedIncomeForm,
  },
})

export const updateGrossRegularTimePay = (grossRegularTimePay: number): UpdateGrossRegularTimePayAction => ({
  type: UPDATE_GROSS_REGULARTIME_PAY,
  payload: {
    grossRegularTimePay,
  },
})

export const updateGrossOvertimePay = (grossOvertimePay: number): UpdateGrossOvertimePayAction => ({
  type: UPDATE_GROSS_OVERTIME_PAY,
  payload: {
    grossOvertimePay,
  },
})

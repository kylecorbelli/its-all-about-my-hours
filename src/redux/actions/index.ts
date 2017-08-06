import {
  UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN,
  UPDATE_TOTAL_HOURS_WORKED,
  UPDATE_HAS_COMPLETED_INCOME_FORM,
  UPDATE_GROSS_REGULARTIME_PAY,
  UpdateHasSplashScreenBeenShownAction,
  UpdateTotalHoursWorkedAction,
  UpdateHasCompletedIncomeFormAction,
  UpdateGrossRegularTimePayAction,
} from '../types'

export const updateHasSplashScreenBeenShown = (
  hasSplashScreenBeenShown: boolean
): UpdateHasSplashScreenBeenShownAction => ({
  type: UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN,
  payload: {
    hasSplashScreenBeenShown,
  },
})

export const updateTotalHoursWorked = (
  grossRegularTimePay: number,
  grossOvertimePay: number
): UpdateTotalHoursWorkedAction => ({
  type: UPDATE_TOTAL_HOURS_WORKED,
  payload: {
    grossRegularTimePay,
    grossOvertimePay,
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

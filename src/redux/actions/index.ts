import {
  UPDATE_HAS_SPLASH_SCREEN_BEEN_SHOWN,
  UPDATE_TOTAL_HOURS_WORKED,
  UpdateHasSplashScreenBeenShownAction,
  UpdateTotalHoursWorkedAction,
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

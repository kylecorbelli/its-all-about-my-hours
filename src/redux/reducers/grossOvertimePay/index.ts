import {
  ReduxAction,
  UPDATE_GROSS_OVERTIME_PAY,
} from '../../types'

const grossOvertimePay = (state: number = 0, action: ReduxAction): number => {
  switch (action.type) {
    case UPDATE_GROSS_OVERTIME_PAY:
      return action.payload.grossOvertimePay
    default:
      return state
  }
}

export default grossOvertimePay

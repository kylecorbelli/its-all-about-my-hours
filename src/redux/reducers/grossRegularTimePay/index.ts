import {
  ReduxAction,
  UPDATE_GROSS_REGULARTIME_PAY,
} from '../../types'

const grossRegularTimePay = (state: number = 0, action: ReduxAction): number => {
  switch (action.type) {
    case UPDATE_GROSS_REGULARTIME_PAY:
      return action.payload.grossRegularTimePay
    default:
      return state
  }
}

export default grossRegularTimePay

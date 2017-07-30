import {
  ReduxAction,
  UPDATE_HAS_COMPLETED_INCOME_FORM,
} from '../../types'

const hasCompletedIncomeForm = (state: boolean = false, action: ReduxAction): boolean => {
  switch (action.type) {
    case UPDATE_HAS_COMPLETED_INCOME_FORM:
      return action.payload.hasCompletedIncomeForm
    default:
      return state
  }
}

export default hasCompletedIncomeForm

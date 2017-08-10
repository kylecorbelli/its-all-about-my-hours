import * as React from 'react'
import { prettyDate } from '../../services/text-formatting'
import './ExpectedCompletionMessage.css'

interface Props {
  readonly expectedCompletionDate: Date
}

const ExpectedCompletionMesage = ({ expectedCompletionDate }: Props) => (
  <span className="ExpectionCompletionMessage">
    You’re on track to finish by&nbsp;
    <span className="ExpectionCompletionMessage__expected-completion-date">{prettyDate(expectedCompletionDate)}</span>
  </span>
)

export default ExpectedCompletionMesage
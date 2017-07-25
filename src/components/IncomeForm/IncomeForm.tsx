import * as React from 'react'
import SplashScreen from '../SplashScreen'
import './IncomeForm.css'

interface Props {
  readonly history: {
    push: (route: string) => void
  }
}

interface State {
  readonly regularPay: string
  readonly overtimePay: string
}

type DOMInputNode = HTMLInputElement | null

export default class IncomeForm extends React.Component<Props, State> {
  public state = {
    regularPay: '',
    overtimePay: '',
  }

  private regularPayInput: DOMInputNode

  public constructor (props: Props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.handleRegularPayInputChange = this.handleRegularPayInputChange.bind(this)
    this.handleOvertimePayInputChange = this.handleOvertimePayInputChange.bind(this)
  }

  public componentDidMount (): void {
    if (this.regularPayInput) {
      this.regularPayInput.focus()
    }
  }

  public render (): JSX.Element {
    return (
      <div className="IncomeForm">
        <form className="IncomeForm__form" onSubmit={this.onSubmitForm}>
          <p className="IncomeForm__form-headline">Calculate How Many Hours You’ve Accumulated:</p>
          <label>
            <div className="IncomeForm__input-group">
              <div className="IncomeForm__dollar-symbol">&#36;</div>
              <input
                className="IncomeForm__text-input"
                type="number"
                onChange={this.handleRegularPayInputChange}
                ref={element => this.regularPayInput = element}
                placeholder="Gross regular-time pay"
              />
            </div>
          </label>
          <label>
            <div className="IncomeForm__input-group">
              <div className="IncomeForm__dollar-symbol">&#36;</div>
              <input
                className="IncomeForm__text-input"
                type="number"
                onChange={this.handleOvertimePayInputChange}
                placeholder="Gross overtime pay"
              />
            </div>
          </label>
          <button className="IncomeForm__submit-button" type="submit">Calculate</button>
        </form>
        <SplashScreen shouldComponentBeHidden={true} />
      </div>
    )
  }

  private handleRegularPayInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      regularPay: event.currentTarget.value,
    })
  }

  private handleOvertimePayInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      overtimePay: event.currentTarget.value,
    })
  }

  private onSubmitForm (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const {
      history,
    } = this.props
    history.push('/hours-results')
  }
}

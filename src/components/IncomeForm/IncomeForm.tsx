import * as React from 'react'
import * as classnames from 'classnames'
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
  readonly shouldFormBeFadedOut: boolean
}

type DOMInputNode = HTMLInputElement | null

export default class IncomeForm extends React.Component<Props, State> {
  public state = {
    regularPay: '',
    overtimePay: '',
    shouldFormBeFadedOut: false,
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
    const {
      shouldFormBeFadedOut,
    } = this.state
    const incomeFormConditionalClasses = {
      'IncomeForm__form--faded-out': shouldFormBeFadedOut
    }
    return (
      <div className="IncomeForm">
        <form className={classnames('IncomeForm__form', incomeFormConditionalClasses)} onSubmit={this.onSubmitForm}>
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
    this.setState({
      shouldFormBeFadedOut: true,
    })
    setTimeout(
      () => {
        history.push('/hours-results')
      },
      250
    )
  }
}

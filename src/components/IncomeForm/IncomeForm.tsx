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
  readonly isFormFadedOut: boolean
}

type DOMInputNode = HTMLInputElement | null

export default class IncomeForm extends React.Component<Props, State> {
  public state = {
    regularPay: '',
    overtimePay: '',
    isFormFadedOut: true,
  }

  private regularPayInput: DOMInputNode

  public constructor (props: Props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.handleRegularPayInputChange = this.handleRegularPayInputChange.bind(this)
    this.handleOvertimePayInputChange = this.handleOvertimePayInputChange.bind(this)
    this.fadeInForm = this.fadeInForm.bind(this)
  }

  public componentDidMount (): void {
    setTimeout(this.fadeInForm, 0)
    setTimeout(
      () => {
        if (this.regularPayInput && !this.isMobile()) {
          this.regularPayInput.focus()
        }
      },
      500
    )
  }

  public render (): JSX.Element {
    const {
      isFormFadedOut,
    } = this.state
    const incomeFormClasses = classnames(
      'IncomeForm__form',
      {
        'IncomeForm__form--is-faded-in': !isFormFadedOut,
        'IncomeForm__form--is-faded-out': isFormFadedOut,
      },
    )
    return (
      <div className="IncomeForm">
        <form className={incomeFormClasses} onSubmit={this.onSubmitForm}>
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
        <SplashScreen shouldComponentBeHidden={false} />
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
      isFormFadedOut: true,
    })
    setTimeout(
      () => {
        history.push('/hours-results')
      },
      250
    )
  }

  private fadeInForm (): void {
    this.setState({
      isFormFadedOut: false,
    })
  }

  private isMobile (): boolean {
    return !!window.navigator.userAgent.toLowerCase().match(/iphone|android/)
  }
}

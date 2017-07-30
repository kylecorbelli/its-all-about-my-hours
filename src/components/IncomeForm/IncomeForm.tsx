import * as React from 'react'
import * as classnames from 'classnames'
import SplashScreen from '../SplashScreen'
import './IncomeForm.css'

interface Props {
  readonly hasSplashScreenBeenShown: boolean
  readonly updateHasSplashScreenBeenShown: () => void
  readonly updateTotalHoursWorked: (
    grossRegularTimePay: number,
    grossOvertimePay: number
  ) => void
  readonly history: {
    push: (route: string) => void
  }
}

interface State {
  readonly grossRegularTimePay: string
  readonly grossOvertimePay: string
  readonly isFormFadedIn: boolean
}

type DOMInputNode = HTMLInputElement | null

export default class IncomeForm extends React.Component<Props, State> {
  public state = {
    grossRegularTimePay: '',
    grossOvertimePay: '',
    isFormFadedIn: false,
  }

  private grossRegularTimePayInput: DOMInputNode

  public constructor (props: Props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.handleRegularPayInputChange = this.handleRegularPayInputChange.bind(this)
    this.handleOvertimePayInputChange = this.handleOvertimePayInputChange.bind(this)
    this.fadeInForm = this.fadeInForm.bind(this)
    this.fadeOutForm = this.fadeOutForm.bind(this)
  }

  public componentDidMount (): void {
    setTimeout(this.fadeInForm, 0)
    setTimeout(
      () => {
        if (this.grossRegularTimePayInput && !this.isMobile()) {
          this.grossRegularTimePayInput.focus()
        }
      },
      500
    )
  }

  public render (): JSX.Element {
    const {
      hasSplashScreenBeenShown,
      updateHasSplashScreenBeenShown,
    } = this.props
    const {
      isFormFadedIn,
    } = this.state
    const incomeFormClasses = classnames(
      'IncomeForm__form',
      {
        'IncomeForm__form--is-faded-in': isFormFadedIn,
        'IncomeForm__form--is-faded-out': !isFormFadedIn,
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
                ref={element => this.grossRegularTimePayInput = element}
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
        <SplashScreen
          hasSplashScreenBeenShown={hasSplashScreenBeenShown}
          updateHasSplashScreenBeenShown={updateHasSplashScreenBeenShown}
        />
      </div>
    )
  }

  private handleRegularPayInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      grossRegularTimePay: event.currentTarget.value,
    })
  }

  private handleOvertimePayInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      grossOvertimePay: event.currentTarget.value,
    })
  }

  private onSubmitForm (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const {
      history,
      updateTotalHoursWorked,
    } = this.props
    const {
      grossRegularTimePay,
      grossOvertimePay,
    } = this.state
    updateTotalHoursWorked(parseFloat(grossRegularTimePay), parseFloat(grossOvertimePay))
    this.fadeOutForm()
    setTimeout(
      () => {
        history.push('/hours-results')
      },
      250
    )
  }

  private fadeInForm (): void {
    this.setState({
      isFormFadedIn: true,
    })
  }

  private fadeOutForm (): void {
    this.setState({
      isFormFadedIn: false,
    })
  }

  private isMobile (): boolean {
    return !!window.navigator.userAgent.toLowerCase().match(/iphone|android/)
  }
}

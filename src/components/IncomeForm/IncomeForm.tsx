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
  readonly updateHasCompletedIncomeForm: (
    hasCompletedIncomeForm: boolean
  ) => void
  readonly history: {
    readonly push: (route: string) => void
  }
}

interface State {
  readonly grossRegularTimePay: string
  readonly grossRegularTimePayHasError: boolean
  readonly grossOvertimePay: string
  readonly grossOvertimePayHasError: boolean
  readonly isFormValid: boolean
  readonly isFormFadedIn: boolean
  readonly hasFormBeenSubmitted: boolean
}

type DOMInputElement = HTMLInputElement | null

interface CurrentFormValidationStatus {
  readonly grossRegularTimePayHasError: boolean
  readonly grossOvertimePayHasError: boolean
  readonly isFormValid: boolean
}

interface ClassNames {
  readonly incomeFormClasses: string
  readonly grossRegularTimePayInputClasses: string
  readonly grossOvertimePayInputClasses: string
  readonly submitButtonClasses: string
  readonly grossRegularTimePayErrorClasses: string
  readonly grossOvertimePayErrorClasses: string
}

export default class IncomeForm extends React.Component<Props, State> {
  public state = {
    grossRegularTimePay: '',
    grossRegularTimePayHasError: false,
    grossOvertimePay: '',
    grossOvertimePayHasError: false,
    isFormValid: false,
    isFormFadedIn: false,
    hasFormBeenSubmitted: false,
  }

  private grossRegularTimePayInput: DOMInputElement

  public constructor (props: Props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.handleRegularPayInputChange = this.handleRegularPayInputChange.bind(this)
    this.handleOvertimePayInputChange = this.handleOvertimePayInputChange.bind(this)
    this.fadeInForm = this.fadeInForm.bind(this)
    this.fadeOutForm = this.fadeOutForm.bind(this)
    // this.validateForm = this.validateForm.bind(this)
    this.validateGrossRegularTimePay = this.validateGrossRegularTimePay.bind(this)
    this.validateGrossOvertimePay = this.validateGrossOvertimePay.bind(this)
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
      incomeFormClasses,
      grossRegularTimePayInputClasses,
      grossOvertimePayInputClasses,
      submitButtonClasses,
      grossRegularTimePayErrorClasses,
      grossOvertimePayErrorClasses,
    }: ClassNames = this.getClassNames()
    return (
      <div className="IncomeForm">
        <form className={incomeFormClasses} onSubmit={this.onSubmitForm}>
          <p className="IncomeForm__form-headline">Calculate How Many Hours You’ve Accumulated:</p>
          <div className="IncomeForm__input-group">
            <label className="IncomeForm__input-group-input">
              <div className="IncomeForm__dollar-symbol">&#36;</div>
              <input
                className={grossRegularTimePayInputClasses}
                type="number"
                onChange={this.handleRegularPayInputChange}
                ref={element => this.grossRegularTimePayInput = element}
                placeholder="Gross regular-time pay"
              />
            </label>
            <p className={grossRegularTimePayErrorClasses}>Please enter a numeric value</p>
          </div>
          <div className="IncomeForm__input-group">
            <label className="IncomeForm__input-group-input">
              <div className="IncomeForm__dollar-symbol">&#36;</div>
              <input
                className={grossOvertimePayInputClasses}
                type="number"
                onChange={this.handleOvertimePayInputChange}
                placeholder="Gross overtime pay"
              />
            </label>
            <p className={grossOvertimePayErrorClasses}>Please enter a numeric value</p>
          </div>
          <button className={submitButtonClasses} type="submit">Calculate</button>
        </form>
        <SplashScreen
          hasSplashScreenBeenShown={hasSplashScreenBeenShown}
          updateHasSplashScreenBeenShown={updateHasSplashScreenBeenShown}
        />
      </div>
    )
  }

  private getClassNames (): ClassNames {
    const {
      isFormFadedIn,
      isFormValid,
      grossRegularTimePayHasError,
      grossOvertimePayHasError,
      hasFormBeenSubmitted,
    } = this.state
    return {
      incomeFormClasses: classnames(
        'IncomeForm__form',
        {
          'IncomeForm__form--is-faded-in': isFormFadedIn,
          'IncomeForm__form--is-faded-out': !isFormFadedIn,
        },
      ),
      grossRegularTimePayInputClasses: classnames(
        'IncomeForm__text-input',
        {
          'IncomeForm__text-input--has-error': grossRegularTimePayHasError,
        },
      ),
      grossOvertimePayInputClasses: classnames(
        'IncomeForm__text-input',
        {
          'IncomeForm__text-input--has-error': grossOvertimePayHasError,
        },
      ),
      submitButtonClasses: classnames(
        'IncomeForm__submit-button',
        {
          'IncomeForm__submit-button--invalid-form': !isFormValid,
        },
      ),
      grossRegularTimePayErrorClasses: classnames(
        'IncomeForm__error-message',
        {
          'IncomeForm__error-message--visible': grossRegularTimePayHasError && hasFormBeenSubmitted,
          'IncomeForm__error-message--hidden': !grossRegularTimePayHasError,
        },
      ),
      grossOvertimePayErrorClasses: classnames(
        'IncomeForm__error-message',
        {
          'IncomeForm__error-message--visible': grossOvertimePayHasError && hasFormBeenSubmitted,
          'IncomeForm__error-message--hidden': !grossOvertimePayHasError,
        },
      )
    }
  }

  private handleRegularPayInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState(
      { grossRegularTimePay: event.currentTarget.value },
      this.validateGrossRegularTimePay,
    )
  }

  private handleOvertimePayInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState(
      { grossOvertimePay: event.currentTarget.value },
      this.validateGrossOvertimePay,
    )
  }

  private onSubmitForm (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const {
      history,
      updateTotalHoursWorked,
      updateHasCompletedIncomeForm,
    } = this.props
    const {
      grossRegularTimePay,
      grossOvertimePay,
    } = this.state
    const {
      grossRegularTimePayHasError,
      grossOvertimePayHasError,
      isFormValid,
    } = this.getCurrentFormValidationStatus()
    if (!isFormValid) {
      return this.setState({
        grossRegularTimePayHasError,
        grossOvertimePayHasError,
        hasFormBeenSubmitted: true,
      })
    }
    updateTotalHoursWorked(parseFloat(grossRegularTimePay), parseFloat(grossOvertimePay))
    updateHasCompletedIncomeForm(true)
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

  private validateGrossRegularTimePay (): void {
    const {
      grossRegularTimePayHasError,
      isFormValid,
    } = this.getCurrentFormValidationStatus()
    this.setState({
      grossRegularTimePayHasError,
      isFormValid,
    })
  }

  private validateGrossOvertimePay (): void {
    const {
      grossOvertimePayHasError,
      isFormValid,
    } = this.getCurrentFormValidationStatus()
    this.setState({
      grossOvertimePayHasError,
      isFormValid,
    })
  }

  private getCurrentFormValidationStatus (): CurrentFormValidationStatus {
    const {
      grossRegularTimePay,
      grossOvertimePay,
    } = this.state
    const grossRegularTimePayHasError: boolean = !Boolean(grossRegularTimePay)
    const grossOvertimePayHasError: boolean = !Boolean(grossOvertimePay)
    const isFormValid: boolean = !grossRegularTimePayHasError && !grossOvertimePayHasError
    return {
      grossRegularTimePayHasError,
      grossOvertimePayHasError,
      isFormValid,
    }
  }
}

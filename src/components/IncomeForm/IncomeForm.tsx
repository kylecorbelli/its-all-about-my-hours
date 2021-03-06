import * as React from 'react'
import * as classnames from 'classnames'
import SplashScreen from '../SplashScreen'
import './IncomeForm.css'
import { stringifyOrBlankIfZero } from '../../services/text-formatting'

interface Props {
  readonly hasSplashScreenBeenShown: boolean
  readonly updateHasSplashScreenBeenShown: () => void
  readonly hasCompletedIncomeForm: boolean
  readonly updateHasCompletedIncomeForm: (
    hasCompletedIncomeForm: boolean
  ) => void
  readonly history: {
    readonly push: (route: string) => void
  }
  readonly grossRegularTimePay: number
  readonly grossOvertimePay: number
  readonly updateGrossRegularTimePay: (grossRegularTimePay: number) => void,
  readonly updateGrossOvertimePay: (grossOvertimePay: number) => void,
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
  private grossRegularTimePayInput: DOMInputElement

  public constructor (props: Props) {
    super(props)
    const {
      grossRegularTimePay,
      grossOvertimePay,
    } = props
    this.state = {
      grossRegularTimePay: stringifyOrBlankIfZero(grossRegularTimePay),
      grossRegularTimePayHasError: false,
      grossOvertimePay: stringifyOrBlankIfZero(grossOvertimePay),
      grossOvertimePayHasError: false,
      isFormValid: Boolean(grossRegularTimePay) && Boolean(grossOvertimePay),
      isFormFadedIn: false,
      hasFormBeenSubmitted: false,
    }
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
          this.grossRegularTimePayInput.select()
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
      grossRegularTimePay,
      grossOvertimePay
    } = this.state
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
            <label className="IncomeForm__input-group-label">
              <div className="IncomeForm__dollar-symbol">&#36;</div>
              <input
                className={grossRegularTimePayInputClasses}
                type="number"
                onChange={this.handleRegularPayInputChange}
                ref={element => this.grossRegularTimePayInput = element}
                placeholder="Cumulative gross regular-time pay"
                value={grossRegularTimePay}
              />
            </label>
            <p className={grossRegularTimePayErrorClasses}>Please enter a numeric value</p>
          </div>
          <div className="IncomeForm__input-group">
            <label className="IncomeForm__input-group-label">
              <div className="IncomeForm__dollar-symbol">&#36;</div>
              <input
                className={grossOvertimePayInputClasses}
                type="number"
                onChange={this.handleOvertimePayInputChange}
                placeholder="Cumulative gross overtime pay"
                value={grossOvertimePay}
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
          'IncomeForm__text-input--has-error': grossRegularTimePayHasError && hasFormBeenSubmitted,
        },
      ),
      grossOvertimePayInputClasses: classnames(
        'IncomeForm__text-input',
        {
          'IncomeForm__text-input--has-error': grossOvertimePayHasError && hasFormBeenSubmitted,
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
        },
      ),
      grossOvertimePayErrorClasses: classnames(
        'IncomeForm__error-message',
        {
          'IncomeForm__error-message--visible': grossOvertimePayHasError && hasFormBeenSubmitted,
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
      hasCompletedIncomeForm,
      updateHasCompletedIncomeForm,
      updateGrossRegularTimePay,
      updateGrossOvertimePay,
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
    updateGrossRegularTimePay(parseFloat(grossRegularTimePay))
    updateGrossOvertimePay(parseFloat(grossOvertimePay))
    if (!hasCompletedIncomeForm) {
      updateHasCompletedIncomeForm(true)
    }
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

import * as React from 'react'
import * as classnames from 'classnames'
import './SplashScreen.css'

const clock: string = require('../../images/clock-svg.svg');

interface Props {
  readonly shouldComponentBeHidden: boolean
  readonly updateHasSplashScreenBeenShown: (hasSplashScreenBeenShown: boolean) => void
}

interface State {
  readonly shouldComponentBeFadedOut: boolean
  readonly shouldComponentBeHidden: boolean
}

export default class SplashScreen extends React.Component<Props, State> {
  private fadeOutComponentSetTimeoutId: number
  private hideComponentSetTimeoutId: number

  public constructor (props: Props) {
    super(props)
    const {
      shouldComponentBeHidden,
    } = this.props
    this.state = {
      shouldComponentBeFadedOut: false,
      shouldComponentBeHidden,
    }
  }

  public componentDidMount (): void {
    const {
      shouldComponentBeHidden,
      updateHasSplashScreenBeenShown,
    } = this.props
    if (!shouldComponentBeHidden) {
      updateHasSplashScreenBeenShown(true)
    }
    this.fadeOutComponentSetTimeoutId = setTimeout(this.fadeOutComponent.bind(this), 3500)
    this.hideComponentSetTimeoutId = setTimeout(this.hideComponent.bind(this), 3900)
  }

  public componentWillUnmount (): void {
    clearTimeout(this.fadeOutComponentSetTimeoutId)
    clearTimeout(this.hideComponentSetTimeoutId)
  }

  public render (): JSX.Element {
    const {
      shouldComponentBeFadedOut,
      shouldComponentBeHidden,
    } = this.state
    const splashScreenConditionalClasses = {
      'SplashScreen--faded-out': shouldComponentBeFadedOut,
      'SplashScreen--hidden': shouldComponentBeHidden,
    }
    return (
      <div className={classnames('SplashScreen', splashScreenConditionalClasses)}>
        <img src={clock} className="SplashScreen__clock-logo" alt="clock logo" />
        <div className="SplashScreen__headline">
          <h1 className="SplashScreen__headline-first-half">It’s All About</h1>
          <h1 className="SplashScreen__headline-second-half">My Hours</h1>
        </div>
      </div>
    )
  }

  private fadeOutComponent (): void {
    this.setState({
      shouldComponentBeFadedOut: true,
    })
  }

  private hideComponent (): void {
    this.setState({
      shouldComponentBeHidden: true,
    })
  }
}

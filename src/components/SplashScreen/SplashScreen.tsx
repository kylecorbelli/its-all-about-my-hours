import * as React from 'react'
import * as classnames from 'classnames'
import './SplashScreen.css'

const clock: string = require('../../images/clock-svg.svg');

interface Props {
  readonly hasSplashScreenBeenShown: boolean
  readonly updateHasSplashScreenBeenShown: (hasSplashScreenBeenShown: boolean) => void
}

interface State {
  readonly shouldComponentBeFadedOut: boolean
  readonly hasSplashScreenBeenShown: boolean
}

export default class SplashScreen extends React.Component<Props, State> {
  private fadeOutComponentSetTimeoutId: number
  private hideComponentSetTimeoutId: number

  public constructor (props: Props) {
    super(props)
    const {
      hasSplashScreenBeenShown,
    } = this.props
    this.state = {
      shouldComponentBeFadedOut: false,
      hasSplashScreenBeenShown,
    }
  }

  public componentDidMount (): void {
    const {
      hasSplashScreenBeenShown,
      updateHasSplashScreenBeenShown,
    } = this.props
    if (!hasSplashScreenBeenShown) {
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
      hasSplashScreenBeenShown,
    } = this.state
    const splashScreenConditionalClasses = {
      'SplashScreen--faded-out': shouldComponentBeFadedOut,
      'SplashScreen--hidden': hasSplashScreenBeenShown,
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
      hasSplashScreenBeenShown: true,
    })
  }
}

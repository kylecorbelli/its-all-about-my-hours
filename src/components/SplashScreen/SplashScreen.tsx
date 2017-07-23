import * as React from 'react'
import * as classNames from 'classnames'
import './SplashScreen.css'

const clock: string = require('../../images/clock-svg.svg');

interface Props {
  readonly shouldComponentBeHidden: boolean
}

interface State {
  readonly shouldComponentBeFadedOut: boolean
  readonly shouldComponentBeHidden: boolean
}

export default class SplashScreen extends React.Component<Props, State> {
  state = {
    shouldComponentBeFadedOut: false,
    shouldComponentBeHidden: false,
  }

  constructor (props: Props) {
    super(props)
    const {
      shouldComponentBeHidden,
    } = this.props
    this.state = {
      shouldComponentBeFadedOut: false,
      shouldComponentBeHidden,
    }
  }

  componentDidMount (): void {
    setTimeout(this.fadeOut.bind(this), 3500)
    setTimeout(this.hideComponent.bind(this), 3900)
  }

  fadeOut (): void {
    this.setState({
      shouldComponentBeFadedOut: true,
    })
  }

  hideComponent (): void {
    this.setState({
      shouldComponentBeHidden: true,
    })
  }

  render (): JSX.Element {
    const {
      shouldComponentBeFadedOut,
      shouldComponentBeHidden,
    } = this.state
    const splashScreenConditionalClasses = {
      'SplashScreen--faded-out': shouldComponentBeFadedOut,
      'SplashScreen--hidden': shouldComponentBeHidden,
    }
    return (
      <div className={classNames('SplashScreen', splashScreenConditionalClasses)}>
        <img src={clock} className="SplashScreen__clock-logo" alt="clock logo" />
        <div className="SplashScreen__headline">
          <h1 className="SplashScreen__headline-first-half">It’s All About</h1>
          <h1 className="SplashScreen__headline-second-half">My Hours</h1>
        </div>
      </div>
    )
  }
}

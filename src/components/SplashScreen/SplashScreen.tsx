import * as React from 'react'
import './SplashScreen.css'

const clock = require('./clock-svg.svg');

const SplashScreen = (): JSX.Element => (
  <div className="SplashScreen">
    <img src={clock} className="SplashScreen__clock-logo" alt="clock logo" />
    <div className="SplashScreen__headline">
      <h1 className="SplashScreen__headline-first-half">It’s All About</h1>
      <h1 className="SplashScreen__headline-second-half">My Hours</h1>
    </div>
  </div>
)

export default SplashScreen

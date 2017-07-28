import * as React from 'react'
import { Link } from 'react-router-dom'
import './SiteHeader.css'

const clock: string = require('../../images/clock-svg.svg');

export default class SiteHeader extends React.Component<{}, {}> {
  render (): JSX.Element {
    return (
      <div className="SiteHeader">
        <Link to="/" className="SiteHeader__branding">
          <img src={clock} className="SiteHeader__clock-logo" alt="clock logo" />
          <span className="SiteHeader__headline">It's All About My Hours</span>
        </Link>
      </div>
    )
  }
}

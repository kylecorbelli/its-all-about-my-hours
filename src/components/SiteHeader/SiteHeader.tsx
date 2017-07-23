import * as React from 'react'
import './SiteHeader.css'

const clock: string = require('../../images/clock-svg.svg');

export default class SiteHeader extends React.Component<{}, {}> {
  render (): JSX.Element {
    return (
      <div className="SiteHeader">
        <div className="SiteHeader__branding">
          <img src={clock} className="SiteHeader__clock-logo" alt="clock logo" />
          <span className="SiteHeader__headline">It's All About My Hours</span>
        </div>
      </div>
    )
  }
}

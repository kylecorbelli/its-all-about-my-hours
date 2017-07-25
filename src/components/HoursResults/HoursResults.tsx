import * as React from 'react'
import './HoursResults.css'

const cakePopsImagePath: string = require('../../images/cake-pops.jpeg')
const iceCreamSandwichImagePath: string = require('../../images/ice-cream-sandwich.jpg')

const HoursResults = (): JSX.Element => (
  <div className="HoursResults">
    <div className="HoursResults__tile HoursResults__text-tile">
      <div className="HoursResults__card">
        <span className="HoursResults__headline">
          You Have&nbsp;
          <span className="HoursResults__headline-hour-number">600</span>
          &nbsp;Hours!
        </span>
        <span className="HoursResults__subheadline">
          Only&nbsp;
          <span className="HoursResults__headline-hour-number">1,400</span>
          &nbsp;More to Go!
        </span>
      </div>
    </div>
    <div className="HoursResults__tile">
      <img className="HoursResults__image" src={cakePopsImagePath} alt="cake-pops"/>
    </div>
    <div className="HoursResults__tile HoursResults__tile--hidden-on-mobile">
      <img className="HoursResults__image" src={iceCreamSandwichImagePath} alt="ice-cream-sandwich"/>
    </div>
    <div className="HoursResults__tile HoursResults__tile--hidden-on-mobile HoursResults__text-tile">
      <div className="HoursResults__card">
        <span className="HoursResults__headline HoursResults__headline--slow-fade-in">
          Only&nbsp;
          <span className="HoursResults__headline-hour-number">1,400</span>
          &nbsp;More to Go!
        </span>
      </div>
    </div>
  </div>
)

export default HoursResults

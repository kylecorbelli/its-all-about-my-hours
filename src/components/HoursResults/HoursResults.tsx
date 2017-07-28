import * as React from 'react'
import * as classnames from 'classnames'
import './HoursResults.css'

const cakePopsImagePath: string = require('../../images/cake-pops.jpeg')
const iceCreamSandwichImagePath: string = require('../../images/ice-cream-sandwich.jpg')

interface Props {}

interface State {
  readonly isFadeInFromLeftTileFadedIn: boolean
  readonly isFadeInFromRightTileFadedIn: boolean
}

export default class HoursResults extends React.Component<Props, State> {
  public state = {
    isFadeInFromLeftTileFadedIn: false,
    isFadeInFromRightTileFadedIn: false,
  }

  public constructor (props: Props) {
    super(props)
    this.fadeInTileFromLeft = this.fadeInTileFromLeft.bind(this)
    this.fadeInTileFromRight = this.fadeInTileFromRight.bind(this)
  }

  public componentDidMount (): void {
    setTimeout(this.fadeInTileFromLeft, 0)
    setTimeout(this.fadeInTileFromRight, 500)
  }

  public render (): JSX.Element {
    const {
      isFadeInFromLeftTileFadedIn,
      isFadeInFromRightTileFadedIn,
    } = this.state
    const fadeInFromLeftTileClasses = classnames(
      'HoursResults__tile',
      'HoursResults__tile--hidden-on-mobile',
      'HoursResults__tile-fade-from-left',
      {
        'HoursResults__tile-fade-from-left--is-not-faded-in': !isFadeInFromLeftTileFadedIn,
        'HoursResults__tile-fade-from-left--is-faded-in': isFadeInFromLeftTileFadedIn,
      },
    )
    const fadeInFromRightTileClasses = classnames(
      'HoursResults__tile',
      'HoursResults__tile-fade-from-right',
      {
        'HoursResults__tile-fade-from-right--is-not-faded-in': !isFadeInFromRightTileFadedIn,
        'HoursResults__tile-fade-from-right--is-faded-in': isFadeInFromRightTileFadedIn,
      },
    )
    return (
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
        <div className={fadeInFromRightTileClasses}>
          <img className="HoursResults__image" src={cakePopsImagePath} alt="cake-pops"/>
        </div>
        <div className={fadeInFromLeftTileClasses}>
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
  }

  private fadeInTileFromRight (): void {
    this.setState({
      isFadeInFromRightTileFadedIn: true,
    })
  }

  private fadeInTileFromLeft (): void {
    this.setState({
      isFadeInFromLeftTileFadedIn: true,
    })
  }
}

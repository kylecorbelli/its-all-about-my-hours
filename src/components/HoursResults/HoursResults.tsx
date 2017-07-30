import * as React from 'react'
import * as classnames from 'classnames'
import './HoursResults.css'
import ImageCarousel, { AnimationDirection } from '../ImageCarousel'
import { prettyNumber } from '../../services/text-formatting'
import { calculateTotalHoursRemaining } from '../../services/hours-calculations'

const cakePopsImagePath: string = require('../../images/cake-pops.jpeg')
const iceCreamSandwichImagePath: string = require('../../images/ice-cream-sandwich.jpg')
const donutsImagePath: string = require('../../images/donuts.jpeg')
const iceCreamImagePath: string = require('../../images/ice-cream.jpeg')
const cakeImagePath: string = require('../../images/cake.jpeg')
const candyStoreImagePath: string = require('../../images/candy-store.jpeg')
const mAndMsImagePath: string = require('../../images/m-and-ms.jpeg')
const mintIceCreamImagePath: string = require('../../images/mint-ice-cream.jpeg')

interface Props {
  readonly totalHoursWorked: number
  readonly hasCompletedIncomeForm: boolean
  readonly history: {
    readonly push: (route: string) => void
  }
}

interface State {
  readonly isFadeInFromLeftTileFadedIn: boolean
  readonly isFadeInFromRightTileFadedIn: boolean
}

export default class HoursResults extends React.Component<Props, State> {
  public state = {
    isFadeInFromLeftTileFadedIn: false,
    isFadeInFromRightTileFadedIn: false,
  }

  private fadeInTileFromLeftSetTimeoutId: number
  private fadeInTileFromRightSetTimeoutId: number

  public componentWillMount (): void {
    const {
      hasCompletedIncomeForm,
      history,
    } = this.props
    if (!hasCompletedIncomeForm) {
      history.push('/')
    }
  }

  public componentDidMount (): void {
    this.fadeInTileFromLeftSetTimeoutId = setTimeout(this.fadeInTileFromLeft.bind(this), 0)
    this.fadeInTileFromRightSetTimeoutId = setTimeout(this.fadeInTileFromRight.bind(this), 500)
  }

  public componentWillUnmount (): void {
    clearTimeout(this.fadeInTileFromLeftSetTimeoutId)
    clearTimeout(this.fadeInTileFromRightSetTimeoutId)
  }

  public render (): JSX.Element {
    const {
      totalHoursWorked,
    } = this.props
    const {
      isFadeInFromLeftTileFadedIn,
      isFadeInFromRightTileFadedIn,
    } = this.state
    const totalHoursRemaining = calculateTotalHoursRemaining(totalHoursWorked)
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
              <span className="HoursResults__headline-hour-number">{prettyNumber(totalHoursWorked)}</span>
              &nbsp;Hours!
            </span>
            <span className="HoursResults__subheadline">
              Only&nbsp;
              <span className="HoursResults__headline-hour-number">{prettyNumber(totalHoursRemaining)}</span>
              &nbsp;More to Go!
            </span>
          </div>
        </div>
        <div className={fadeInFromRightTileClasses}>
          <ImageCarousel
            animationDelayMilliseconds={0}
            animationDirection={AnimationDirection.Forward}
            image1Path={cakePopsImagePath}
            image2Path={donutsImagePath}
            image3Path={cakeImagePath}
            image4Path={mintIceCreamImagePath}
          />
        </div>
        <div className={fadeInFromLeftTileClasses}>
          <ImageCarousel
            animationDelayMilliseconds={5680}
            animationDirection={AnimationDirection.Reverse}
            image1Path={iceCreamSandwichImagePath}
            image2Path={iceCreamImagePath}
            image3Path={mAndMsImagePath}
            image4Path={candyStoreImagePath}
          />
        </div>
        <div className="HoursResults__tile HoursResults__tile--hidden-on-mobile HoursResults__text-tile">
          <div className="HoursResults__card">
            <span className="HoursResults__headline HoursResults__headline--slow-fade-in">
              Only&nbsp;
              <span className="HoursResults__headline-hour-number">{prettyNumber(totalHoursRemaining)}</span>
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

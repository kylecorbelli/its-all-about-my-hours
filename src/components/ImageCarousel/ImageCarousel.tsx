import * as React from 'react'
import * as classnames from 'classnames'
import './ImageCarousel.css'

export enum AnimationDirection {
  Forward,
  Reverse,
}

interface Props {
  readonly image1Path: string
  readonly image2Path: string
  readonly image3Path: string
  readonly image4Path: string
  readonly animationDelayMilliseconds: number
  readonly animationDirection: AnimationDirection
}

interface State {
  readonly isSlidingBlockCycling: boolean
}

export default class ImageCarousel extends React.Component<Props, State> {
  public state = {
    isSlidingBlockCycling: false,
  }

  public beginCyclingSlidingBlockSetTimeoutId: number

  public componentDidMount (): void {
    const {
      animationDelayMilliseconds,
    } = this.props
    this.beginCyclingSlidingBlockSetTimeoutId = setTimeout(
      this.beginCyclingSlidingBlock.bind(this),
      animationDelayMilliseconds,
    )
  }

  public componentWillUnmount (): void {
    clearTimeout(this.beginCyclingSlidingBlockSetTimeoutId)
  }

  public render (): JSX.Element {
    const {
      animationDirection,
    } = this.props
    const {
      isSlidingBlockCycling,
    } = this.state
    const slidingBlockClasses = classnames(
      'ImageCarousel__sliding-block',
      {
        'ImageCarousel__sliding-block--is-cycling-forward': isSlidingBlockCycling &&
                                                            animationDirection === AnimationDirection.Forward,
        'ImageCarousel__sliding-block--is-cycling-reverse': isSlidingBlockCycling &&
                                                            animationDirection === AnimationDirection.Reverse,
      },
    )
    const {
      image1Path,
      image2Path,
      image3Path,
      image4Path,
    } = this.props
    return (
      <div className="ImageCarousel">
        <div className={slidingBlockClasses}>
          <img src={image1Path} className="ImageCarousel__image"/>
          <img src={image2Path} className="ImageCarousel__image"/>
          <img src={image3Path} className="ImageCarousel__image"/>
          <img src={image4Path} className="ImageCarousel__image"/>
        </div>
      </div>
    )
  }

  public beginCyclingSlidingBlock (): void {
    this.setState({
      isSlidingBlockCycling: true,
    })
  }
}

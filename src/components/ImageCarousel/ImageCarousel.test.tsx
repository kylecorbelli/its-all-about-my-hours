import * as React from 'react'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import ImageCarousel, { AnimationDirection } from './ImageCarousel'

describe('ImageCarousel', () => {
  const element = <ImageCarousel
    image1Path='some/path'
    image2Path='some/path'
    image3Path='some/path'
    image4Path='some/path'
    animationDelayMilliseconds={0}
    animationDirection={AnimationDirection.Forward}
  />
  const wrapper = shallow(element)
  const instance = wrapper.instance() as ImageCarousel

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('beginCyclingSlidingBlock', () => {
    it('begins cycling the sliding block', () => {
      instance.beginCyclingSlidingBlock()
      expect(instance.state.isSlidingBlockCycling).toBe(true)
    })
  })

  describe('componentDidMount', () => {
    it('triggers cycling the sliding block', () => {
      const setTimeoutSpy = window.setTimeout = sinon.spy()
      instance.beginCyclingSlidingBlock.bind = sinon.spy() // Needed to match up the first argument provided to setTimeout
      instance.componentDidMount()
      expect(setTimeoutSpy.calledWith(instance.beginCyclingSlidingBlock.bind(instance), instance.props.animationDelayMilliseconds)).toBe(true)
    })
  })

  describe('componentWillUnmount', () => {
    it('clears the animation delay timeout', () => {
      instance.componentDidMount()
      const clearTimeoutSpy = window.clearTimeout = sinon.spy()
      instance.componentWillUnmount()
      expect(clearTimeoutSpy.calledOnce).toBe(true)
    })
  })
})

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
    it('begins cycling the carousel', () => {
      instance.beginCyclingSlidingBlock()
      expect(instance.state.isSlidingBlockCycling).toBe(true)
    })
  })

  describe('componentDidMount', () => {
    it('sets an animation delay timeout that can later be cleared', () => {
      instance.componentDidMount()
      expect(instance.beginCyclingSlidingBlockSetTimeoutId).toBeGreaterThan(0)
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

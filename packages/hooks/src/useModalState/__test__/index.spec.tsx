/**
 * @jest-environment jsdom
 */

import React from 'react'
import { mount } from 'enzyme'
import TestComponent from './TestComponent'

describe('useModalState', () => {
  it('should active with data', () => {
    const wrapper = mount(<TestComponent />)
    wrapper.find('#button-open').simulate('click')

    expect(wrapper.find('#state-active').text()).toBe('true')
    expect(wrapper.find('#state-data').text()).toBe('4')
  })

  it('should inactive', () => {
    const wrapper = mount(<TestComponent />)
    // open
    wrapper.find('#button-open').simulate('click')
    // close
    wrapper.find('#button-close').simulate('click')

    expect(wrapper.find('#state-active').text()).toBe('false')
  })

  it('should toggle to false', () => {
    const wrapper = mount(<TestComponent />)
    // open
    wrapper.find('#button-open').simulate('click')
    // toggle
    wrapper.find('#button-toggle').simulate('click')

    expect(wrapper.find('#state-active').text()).toBe('false')
  })

  it('should toggle to true', () => {
    const wrapper = mount(<TestComponent />)
    // toggle
    wrapper.find('#button-toggle').simulate('click')

    expect(wrapper.find('#state-active').text()).toBe('true')
  })
})

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import TestComponent from './TestComponent'

describe('useClickOutside', function() {
  it('should callback when click outside', function() {
    const cb = sinon.spy()
    mount(<TestComponent onClickOutside={cb} />)
    // https://ingo-richter.io/post/testing-dom-event-handler-in-reactjs/
    document.dispatchEvent(new Event('mousedown'))

    expect(cb).toHaveProperty('callCount', 1)
  })

  it('should not callback when click inside target element', function() {
    const cb = sinon.spy()
    const dom = mount(<TestComponent onClickOutside={cb} />)
    dom.find('#target').simulate('click')

    expect(cb).toHaveProperty('callCount', 0)
  })
})

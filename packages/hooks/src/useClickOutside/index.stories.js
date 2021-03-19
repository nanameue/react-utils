import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'

import useClickOutSide from './index'

storiesOf('hooks', module).add('detect click outside', () => {
  const ref = useRef(null)
  useClickOutSide(ref, () => alert('outside'))

  return (
    <div
      ref={ref}
      style={{ width: '50px', height: '50px', backgroundColor: 'red' }}
      onClick={() => alert('inside')}
    >
      Click
    </div>
  )
})

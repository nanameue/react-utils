import React from 'react'
import useModalState from '../index'

const TestComponent = () => {
  const modalState = useModalState<number>(0)

  return (
    <div>
      <div id="state-active">{modalState.isActive.toString()}</div>
      <div id="state-data">{modalState.data}</div>
      <button id="button-toggle" onClick={modalState.toggle}>
        toggle
      </button>
      <button id="button-open" onClick={() => modalState.open(4)}>
        open
      </button>
      <button id="button-close" onClick={modalState.close}>
        close
      </button>
    </div>
  )
}

export default TestComponent

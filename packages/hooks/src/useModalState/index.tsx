import { useCallback, useReducer } from 'react'

interface State {
  isActive: boolean
  data: any // FIXME
}

interface Action<T> {
  type: 'active' | 'inactive' | 'toggle'
  payload?: T
}

interface Return<T> extends State {
  open: (data: T) => void
  close: () => void
  toggle: () => void
}

function reducer<T>(
  state: State,
  action: Action<T | null>
): { isActive: boolean; data: T | null | undefined } {
  switch (action.type) {
    case 'active':
      return {
        isActive: true,
        data: action.payload,
      }
    case 'inactive':
      return {
        ...state,
        isActive: false,
      }
    case 'toggle':
      return {
        ...state,
        isActive: !state.isActive,
      }
  }
}

function useModalState<T>(initialData: T): Return<T> {
  const [state, dispatch] = useReducer(reducer, {
    isActive: false,
    data: initialData,
  })

  const open = useCallback((data: T) => {
    dispatch({ type: 'active', payload: data })
  }, [])

  const close = useCallback(() => {
    dispatch({ type: 'inactive' })
  }, [])

  const toggle = useCallback(() => {
    dispatch({ type: 'toggle' })
  }, [])

  return {
    isActive: state.isActive,
    data: state.data,
    open,
    close,
    toggle,
  }
}

export default useModalState

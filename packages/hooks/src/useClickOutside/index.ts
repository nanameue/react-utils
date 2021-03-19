import { useEffect } from 'react'

const useClickOutside = (
  element: { current: HTMLElement },
  onClickOutside: () => void,
  shouldListening: boolean = true
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        element.current &&
        !element.current.contains(event.target as Element)
      ) {
        onClickOutside()
      }
    }

    if (shouldListening) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [element, shouldListening, onClickOutside])
}

export default useClickOutside

import { useEffect } from 'react'

const useDetectClickOutside = (element: { current: HTMLElement }, onDetectOutsideClick: () => void, shouldListening: boolean = true) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (element.current && !element.current.contains(event.target as Element)) {
        onDetectOutsideClick()
      }
    }

    if (shouldListening) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [element, shouldListening])
}

export default useDetectClickOutside

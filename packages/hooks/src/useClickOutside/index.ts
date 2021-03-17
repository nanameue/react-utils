import { useEffect } from 'react'

const useDetectClickOutside = (element: HTMLElement, onDetectOutsideClick: () => void, shouldListening: boolean) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (element && !element.contains(event.target as Element)) {
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

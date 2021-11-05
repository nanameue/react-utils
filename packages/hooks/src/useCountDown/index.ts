import { useEffect, useState, useRef } from 'react'

const useCountDown = ({
  from,
  until = 0,
  interval = 1000,
}: {
  from: number
  until: number
  interval: number
}): { start: () => void; stop: () => void; isDone: boolean; count: number } => {
  const countRef = useRef<number>(from)
  const [count, setCount] = useState<number>(until)
  const [isDone, setIsDone] = useState<boolean>(false)

  useEffect(() => {
    countRef.current = count

    if (isDone) return

    if (count <= until) {
      return setIsDone(true)
    }

    const t = setTimeout(() => {
      if (countRef.current !== null && countRef.current >= 0) {
        setCount(countRef.current - interval / 1000)
      }
    }, interval)

    if (t !== null) {
      return () => {
        clearTimeout(t)
      }
    }
  }, [count, isDone, from])

  return {
    start: () => setCount(from),
    stop: () => setCount(until),
    isDone,
    count,
  }
}

export default useCountDown

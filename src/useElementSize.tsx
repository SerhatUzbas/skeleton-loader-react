import { useState, useEffect, useRef } from 'react'

export const useElementSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const { width, height } = elementRef.current.getBoundingClientRect()
        setSize({ width, height })
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { ref: elementRef, width: size?.width, height: size?.height }
}

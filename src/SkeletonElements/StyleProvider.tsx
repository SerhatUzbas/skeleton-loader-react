import { Easing } from 'framer-motion'
import { createContext, ReactNode } from 'react'

export interface SkeletonProps {
  bg?: string
  color?: string
  animationType?: 'fade'
  duration?: number
  easing?: Easing | Easing[]
  opacityPoints?: number[]
}

const initialTheme: SkeletonProps = {
  bg: '#F5F5F5',
  color: '#E5E9EA',
  animationType: 'fade',
  duration: 0.6,
  easing: 'easeIn',
  opacityPoints: [1, 0.2]
}

export const SkeletonContext = createContext(initialTheme)

export const SkeletonProvider = ({
  children,
  theme = initialTheme
}: {
  children: React.ReactNode
  theme?: SkeletonProps
}) => {
  return <SkeletonContext.Provider value={theme}>{children}</SkeletonContext.Provider>
}

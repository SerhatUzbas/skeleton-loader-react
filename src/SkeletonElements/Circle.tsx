import { Easing, motion } from 'framer-motion'
import { useContext } from 'react'
import { SkeletonContext } from './StyleProvider.js'

interface CircleProps {
  size?: number
  color?: string
  opacityPoints?: number[]
  duration?: number
  animationType?: 'fade' | 'slide'
  easing?: Easing | Easing[]
}

export const Circle = ({ size = 100, duration, color, opacityPoints, animationType, easing }: CircleProps) => {
  const {
    duration: globalDuration,
    color: globalColor,
    easing: globalEasing,
    opacityPoints: globalPoints,
    animationType: globalType
  } = useContext(SkeletonContext)

  const activeAnimationType = animationType || globalType
  const isSlide = activeAnimationType === 'slide'

  return (
    <motion.div
      animate={!isSlide ? { opacity: opacityPoints || globalPoints } : undefined}
      transition={
        !isSlide
          ? {
              duration: duration || globalDuration,
              repeatType: 'reverse',
              ease: easing || globalEasing,
              repeat: Infinity
            }
          : undefined
      }
      style={{
        width: size,
        height: size,
        background: color || globalColor,
        borderRadius: '100%',
        overflow: 'hidden'
      }}
    >
      {isSlide && (
        <motion.div
          animate={{ translateX: '2000%' }}
          transition={{
            duration: duration || globalDuration,
            ease: easing || globalEasing,
            repeat: Infinity
          }}
          style={{
            width: '5%',
            height: '100%',
            background: '#fcfcfc',
            opacity: 0.3
          }}
        />
      )}
    </motion.div>
  )
}

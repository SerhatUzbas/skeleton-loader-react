import { motion, Variants, Easing } from 'framer-motion'
import { useContext } from 'react'
import { SkeletonContext } from './StyleProvider.js'

export interface RowProps {
  variants?: Variants
  radius?: number
  width?: number | string
  height?: number | string
  color?: string
  duration?: number
  animationType?: 'fade' | 'slide'
  easing?: Easing | Easing[]
  opacityPoints?: number[]
}

export const Row = ({
  variants,
  width = '100%',
  height = 50,
  radius = 12,
  color,
  duration,
  animationType,
  easing,
  opacityPoints
}: RowProps) => {
  const {
    color: globalColor,
    duration: globalDuration,
    easing: globalEasing,
    animationType: globalType,
    opacityPoints: globalPoints
  } = useContext(SkeletonContext)

  const activeAnimType = animationType || globalType
  // const isSlide = activeAnimType === 'slide'

  const defaultVariant = {
    hidden: { opacity: opacityPoints?.[0] || globalPoints?.[0] },
    show: {
      opacity: opacityPoints?.[1] || globalPoints?.[1],
      transition: {
        duration: duration || globalDuration,
        repeat: Infinity,
        repeatType: 'reverse' as 'reverse',
        easing: easing || globalEasing
      }
    }
  }

  return (
    <motion.div
      initial={!!variants ? undefined : 'hidden'}
      animate={!!variants ? undefined : 'show'}
      variants={variants || defaultVariant}
      // animate={{ opacity: opacityPoints || globalPoints }}
      // transition={{
      //   duration: duration || globalDuration,
      //   repeatType: 'reverse',
      //   ease: easing || globalEasing,
      //   repeat: Infinity
      // }}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        width,
        height,
        background: color || globalColor,
        borderRadius: radius,
        border: 'none'
      }}
    >
      {/* {isSlide && (
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
      )} */}
    </motion.div>
  )
}

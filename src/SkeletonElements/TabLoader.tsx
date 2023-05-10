import { useContext } from 'react'
import { SkeletonContext } from './StyleProvider.js'
import { Easing, motion, Variants } from 'framer-motion'

interface TabLoaderProps {
  variants?: Variants
  width?: string | number
  height?: string | number
  tabCount?: number
  tabWidth?: number | string
  tabHeight?: number | string
  bg?: string
  color?: string
  opacityPoints?: number[]
  duration?: number
  easing?: Easing | Easing[]
  animationType?: 'fade' | 'slide'
}

export const TabLoader = ({
  variants,
  width = '100%',
  height = '100%',
  tabCount = 3,
  tabWidth,
  tabHeight = '33%',
  bg,
  color,
  opacityPoints,
  duration,
  easing,
  animationType
}: TabLoaderProps) => {
  const {
    animationType: globalType,
    bg: defaultBg,
    color: defaultColor,
    duration: globalDuration,
    easing: globalEasing,
    opacityPoints: globalPoints
  } = useContext(SkeletonContext)

  const actualTabWidth = `${100 / (tabCount * tabCount)}%`
  const activeAnimType = animationType || globalType
  const isSlide = activeAnimType === 'slide'

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
      initial={!!variants || isSlide ? undefined : 'hidden'}
      animate={!!variants || isSlide ? undefined : 'show'}
      variants={isSlide ? undefined : variants || defaultVariant}
      style={{
        width,
        height,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: bg || defaultBg,
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {[...Array(tabCount)].map((_, i) => (
        <motion.div
          style={{
            width: tabWidth || actualTabWidth,
            height: tabHeight,
            borderRadius: 12,
            background: color || defaultColor
          }}
        />
      ))}
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
            background: '#ffffff',
            opacity: 0.2,
            position: 'absolute',
            left: 0,
            top: 0
          }}
        />
      )}
    </motion.div>
  )
}

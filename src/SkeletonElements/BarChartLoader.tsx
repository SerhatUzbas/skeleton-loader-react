import { useElementSize } from '@mantine/hooks'
import { motion, Easing } from 'framer-motion'
import { useContext } from 'react'
import { SkeletonContext } from './StyleProvider.js'

export interface BarChartLoaderProps {
  width?: string | number
  padding?: number
  barCount?: number
  color?: string
  bg?: string
  barGap?: number
  duration?: number
  easing?: Easing | Easing[]
  isEqualBarHeight?: boolean
}
export const BarChartLoader = ({
  padding = 20,
  width = '100%',
  barCount = 5,
  barGap = 20,
  bg,
  color,
  duration = 0.4,
  easing = 'anticipate',
  isEqualBarHeight
}: BarChartLoaderProps) => {
  const { ref, width: totalWidth } = useElementSize()

  const {
    bg: globalBg,
    color: globalColor,
    duration: globalDuration,
    easing: globalEasing
  } = useContext(SkeletonContext)

  const barWidth = (totalWidth - (barCount + 1) * barGap) / barCount

  const equalRandomHeight = `${Math.random() * (100 - 45) + 45}%`

  return (
    <div
      ref={ref}
      style={{
        width,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding,
        background: bg || globalBg
      }}
    >
      <motion.div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: barGap
        }}
      >
        {[...Array(barCount)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              height: isEqualBarHeight ? equalRandomHeight : `${Math.random() * (100 - 45) + 45}%`
            }}
            animate={{
              height: isEqualBarHeight ? equalRandomHeight : `${Math.random() * (100 - 45) + 45}%`
            }}
            transition={{
              duration: duration || globalDuration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: easing || globalEasing
            }}
            style={{
              width: barWidth,
              background: color || globalColor,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12
            }}
          />
        ))}
      </motion.div>
      <motion.div
        animate={{ height: [0, 10] }}
        transition={{
          duration: duration || globalDuration,
          repeatType: 'reverse',
          ease: easing || globalEasing,
          repeat: Infinity
        }}
        style={{ height: 1, width: '100%', background: color || globalColor }}
      />
    </div>
  )
}

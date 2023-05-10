import { useContext } from 'react'
import { useElementSize } from '@mantine/hooks'
import { Circle } from './Circle.js'
import { ImageLoader, ImageLoaderProps } from './ImageLoader.js'
import { Row, RowProps } from './Row.js'
import { motion } from 'framer-motion'
import { SkeletonContext } from './StyleProvider.js'
import { ChartLoader, ChartLoaderProps } from './ChartLoader.js'

interface CompactBarChartProps extends Omit<ChartLoaderProps, 'width'> {
  barChartWidth?: string | number
}
interface CompactRowProps extends Omit<RowProps, 'width'> {
  rowsWidth?: string | number
}

interface CompactImageLoaderProps extends Omit<ImageLoaderProps, 'src'> {
  rowsWidth?: string | number
}

interface CompactLoaderProps {
  // ContainerProps
  bg?: string
  radius?: number
  color?: string
  elementGap?: number

  // ImageLoaderProps

  imageLoaderOrder?: number
  imageSrc?: string
  imageLoaderProps?: ImageLoaderProps

  // RowProps
  rowCount?: number
  rowGap?: number
  rowOrder?: number
  rowProps?: CompactRowProps

  // CircleProps
  circleLoaderSize?: number
  circleLoaderOrder?: number

  //BarChartLoaderProps
  barChartLoaderOrder?: number
  barChartProps?: CompactBarChartProps

  // AnimationProps
  duration?: number
  animationType?: 'fade' | 'slide'
  direction?: 'column' | 'row'
  stagRow?: boolean
}

export const CompactLoader = ({
  bg,
  color,
  radius = 12,
  direction = 'column',
  animationType,
  duration,
  elementGap,
  stagRow = false,

  rowOrder,
  rowCount,
  rowGap = 20,
  rowProps = { rowsWidth: '50%' },

  circleLoaderOrder,
  circleLoaderSize,

  imageLoaderOrder,
  imageSrc,
  imageLoaderProps,

  barChartLoaderOrder,
  barChartProps = { barChartWidth: '50%' }
}: CompactLoaderProps) => {
  const { ref, height } = useElementSize()
  const {
    bg: globalBg,
    color: globalColor,
    duration: globalDuration,
    easing: globalEasing,
    animationType: globalType
  } = useContext(SkeletonContext)

  const activeDuration = duration || globalDuration || 1

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: activeDuration / rowCount!
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: activeDuration,
        repeat: Infinity,
        repeatType: 'reverse' as 'reverse'
      }
    }
  }

  return (
    <div
      style={{
        padding: 20,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: direction,
        justifyContent: !!elementGap ? 'flex-start' : 'space-between',
        gap: elementGap,
        backgroundColor: bg || globalBg,
        overflow: 'hidden',
        borderRadius: radius
      }}
    >
      {!!rowOrder && (
        <div
          style={{
            width: rowProps?.rowsWidth,
            height: '100%',
            order: rowOrder
          }}
        >
          <motion.div
            ref={ref}
            initial='hidden'
            animate='show'
            variants={container}
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: rowGap,
              justifyContent: 'space-between'
            }}
            transition={{ repeatType: 'loop' }}
          >
            {[...Array(rowCount)].map((_, idx) => (
              <Row
                variants={stagRow ? item : undefined}
                key={idx}
                height={rowProps?.height || (height - rowGap * (rowCount! - 1) - 40) / rowCount!}
                width='100%'
                color={color}
                animationType={animationType}
              />
            ))}
          </motion.div>
        </div>
      )}
      {!!imageLoaderOrder && (
        <div style={{ order: imageLoaderOrder }}>
          <ImageLoader src={imageSrc} withImage bg={color} animationType={animationType} {...imageLoaderProps} />
        </div>
      )}
      {!!circleLoaderOrder && (
        <div style={{ order: circleLoaderOrder }}>
          <Circle size={circleLoaderSize} color={color} animationType={animationType} />
        </div>
      )}
      {!!barChartLoaderOrder && (
        <div
          style={{
            width: barChartProps?.barChartWidth,
            order: barChartLoaderOrder
          }}
        >
          <ChartLoader padding={0} color={color} bg={bg} duration={duration} {...barChartProps} />
        </div>
      )}
      {/* {!!graphLoaderOrder && (
        <div style={{ order: graphLoaderOrder }}>
          <GraphLoader bg={bg} chartColor={color} />
        </div>
      )} */}
    </div>
  )
}

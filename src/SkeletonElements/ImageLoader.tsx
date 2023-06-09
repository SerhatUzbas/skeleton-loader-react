import { motion, Easing } from 'framer-motion'
import { useContext } from 'react'
import { SkeletonContext } from './StyleProvider.js'

export interface ImageLoaderProps {
  withImage?: boolean
  src?: string
  imageWidth?: string | number
  imageHeight?: string | number
  radius?: number | string
  width?: string | number
  height?: string | number
  duration?: number
  bg?: string
  animationType?: 'fade' | 'slide'
  easing?: Easing | Easing[]
  opacityPoints?: number[]
}

export const ImageLoader = ({
  withImage = true,
  src,
  imageHeight = '40%',
  imageWidth = '40%',
  radius = 12,
  width,
  height,
  duration,
  bg,
  animationType,
  easing,
  opacityPoints
}: ImageLoaderProps) => {
  const {
    color: globalColor,
    duration: globalDuration,
    easing: globalEasing,
    animationType: globalType,
    opacityPoints: globalPoints
  } = useContext(SkeletonContext)

  // const activeAnimType = animationType || globalType
  // const isSlide = activeAnimType === 'slide'

  return (
    <motion.div
      animate={{ opacity: opacityPoints || globalPoints }}
      transition={{
        duration: duration || globalDuration,
        repeatType: 'reverse',
        easing: easing || globalEasing,
        repeat: Infinity
      }}
      style={{
        position: 'relative',
        width,
        height,
        background: bg || globalColor,
        borderRadius: radius,
        display: 'flex',
        justifyContent: 'flex-start',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        {withImage && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={src} style={{ width: imageWidth, height: imageHeight }} />
          </div>
        )}
      </div>
      {/* {isSlide && (
        <motion.div
          animate={{ translateX: '1900%' }}
          transition={{
            duration: duration || globalDuration,
            ease: easing || globalEasing,
            repeat: Infinity
          }}
          style={{
            width: '5%',
            height: '100%',
            background: '#ffffff',
            opacity: 0.2
          }}
        />
      )} */}
    </motion.div>
  )
}

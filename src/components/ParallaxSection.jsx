import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up',
  offset = ["start end", "end start"]
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  
  const yRange = direction === 'up' ? [100, -100] : [-100, 100]
  const y = useTransform(scrollYProgress, [0, 1], yRange.map(v => v * speed))
  const smoothY = useSpring(y, springConfig)

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '',
  containerClassName = '',
  speed = 0.3,
  overlay = true
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, scale }}
        className={`w-full h-full object-cover ${className}`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      )}
    </div>
  )
}

export function ParallaxText({ 
  children, 
  className = '',
  speed = 0.1,
  direction = 'left'
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const xRange = direction === 'left' ? [50, -50] : [-50, 50]
  const x = useTransform(scrollYProgress, [0, 1], xRange.map(v => v * speed))

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x }} className={className}>
        {children}
      </motion.div>
    </div>
  )
}

export function ParallaxScale({ 
  children, 
  className = '',
  scaleRange = [0.8, 1]
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

export default ParallaxSection

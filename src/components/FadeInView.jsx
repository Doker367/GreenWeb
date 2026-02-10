import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * FadeInView — Wrapper que aplica un efecto fade-in + blur estilo Apple
 * cuando el elemento entra en el viewport.
 *
 * @param {React.ReactNode} children
 * @param {string} className
 * @param {number} delay - delay en segundos antes del fade (default 0)
 * @param {'up'|'down'|'left'|'right'|'none'} direction - dirección del fade (default 'up')
 * @param {number} distance - distancia en px del desplazamiento (default 30)
 * @param {number} duration - duración en segundos (default 0.8)
 * @param {boolean} once - animar solo una vez (default true)
 * @param {string} as - tag HTML del wrapper (default 'div')
 */
function FadeInView({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  once = true,
  as = 'div',
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: '-60px',
  })

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directionMap[direction] || directionMap.up

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
        filter: 'blur(8px)',
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
      } : {
        opacity: 0,
        y: offset.y,
        x: offset.x,
        filter: 'blur(8px)',
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export default FadeInView

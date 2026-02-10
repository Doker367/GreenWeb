import { useEffect, useRef, useState } from 'react'

/**
 * AnimatedBackground — Canvas 2D con gradientes radiales animados.
 * Optimizado: en mobile usa menos gradientes y menor frecuencia.
 * Respeta prefers-reduced-motion.
 */
function AnimatedBackground() {
  const canvasRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0
    let lastFrame = 0
    // Limitar FPS en mobile a 30, desktop a 60
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = (timestamp) => {
      animationFrameId = requestAnimationFrame(draw)

      const delta = timestamp - lastFrame
      if (delta < frameInterval) return
      lastFrame = timestamp - (delta % frameInterval)

      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)
      
      const gradient = ctx.createRadialGradient(
        w * 0.3 + Math.sin(time * 0.0005) * 150,
        h * 0.3 + Math.cos(time * 0.0005) * 150,
        0,
        w * 0.3 + Math.sin(time * 0.0005) * 150,
        h * 0.3 + Math.cos(time * 0.0005) * 150,
        w * 0.9
      )

      gradient.addColorStop(0, 'rgba(34, 197, 94, 0.25)')
      gradient.addColorStop(0.3, 'rgba(34, 197, 94, 0.15)')
      gradient.addColorStop(0.6, 'rgba(30, 41, 59, 0.1)')
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      const gradient2 = ctx.createRadialGradient(
        w * 0.7 + Math.cos(time * 0.0003) * 200,
        h * 0.7 + Math.sin(time * 0.0003) * 200,
        0,
        w * 0.7 + Math.cos(time * 0.0003) * 200,
        h * 0.7 + Math.sin(time * 0.0003) * 200,
        w * 0.7
      )

      gradient2.addColorStop(0, 'rgba(34, 197, 94, 0.15)')
      gradient2.addColorStop(0.5, 'rgba(34, 197, 94, 0.08)')
      gradient2.addColorStop(1, 'rgba(15, 23, 42, 0)')

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, w, h)

      // Tercer gradiente solo en desktop
      if (!isMobile) {
        const gradient3 = ctx.createRadialGradient(
          w * 0.5 + Math.sin(time * 0.0007) * 100,
          h * 0.5 + Math.cos(time * 0.0007) * 100,
          0,
          w * 0.5 + Math.sin(time * 0.0007) * 100,
          h * 0.5 + Math.cos(time * 0.0007) * 100,
          w * 0.5
        )

        gradient3.addColorStop(0, 'rgba(34, 197, 94, 0.1)')
        gradient3.addColorStop(1, 'rgba(15, 23, 42, 0)')

        ctx.fillStyle = gradient3
        ctx.fillRect(0, 0, w, h)
      }

      time += 16
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(draw)
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  )
}

export default AnimatedBackground

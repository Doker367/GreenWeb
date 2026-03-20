import { Suspense, lazy, useState, useEffect, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'

// Optimized Hero Scene
const OptimizedHeroScene = lazy(() => import('./OptimizedHeroScene'))

function HeroScene() {
  const [shouldRender, setShouldRender] = useState(false)
  const [hasWebGLError, setHasWebGLError] = useState(false)

  useEffect(() => {
    // Only render on desktop or high-performance devices for best UX
    const isMobile = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    setShouldRender(!isMobile && !prefersReducedMotion)

    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setShouldRender(!mobile && !prefersReducedMotion)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!shouldRender || hasWebGLError) return null

  return (
    <div
      className="absolute inset-0 z-0"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        dpr={[1, 2]} // Standard DPR range for optimization
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{
          antialias: true, // Re-enable for the new smoother scene
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (event) => {
            event.preventDefault()
            setHasWebGLError(true)
          }, false)
        }}
      >
        <Suspense fallback={null}>
          <OptimizedHeroScene />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default memo(HeroScene)

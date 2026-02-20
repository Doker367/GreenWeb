import { Suspense, lazy, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'

const FloatingParticles = lazy(() => import('./FloatingParticles'))
const GlowingSphere = lazy(() => import('./GlowingSphere'))
const ConnectionLines = lazy(() => import('./ConnectionLines'))

/**
 * HeroScene — Escena 3D principal para el hero section.
 * Combina partículas flotantes, esfera glowing y líneas de conexión.
 * 
 * Optimizaciones:
 * - Lazy loading de sub-componentes 3D
 * - Detección de prefers-reduced-motion para accesibilidad
 * - DPR limitado para no saturar GPUs integradas
 * - frameloop="demand" implícito (siempre se anima pero con bajo overhead)
 * - Fallback nulo para que la UI no se bloquee durante la carga
 */
function HeroScene() {
  const [shouldRender, setShouldRender] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldRender(!mq.matches)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()

    const handler = (e) => setShouldRender(!e.matches)
    mq.addEventListener('change', handler)
    window.addEventListener('resize', handleResize)

    return () => {
      mq.removeEventListener('change', handler)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!shouldRender || isMobile) return null

  return (
    <div
      className="absolute inset-0 z-0"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <FloatingParticles count={90} radius={7} />
          <GlowingSphere position={[0, 0, 0]} scale={0.9} />
          <ConnectionLines count={8} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroScene

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * GlowingSphere — Esfera con efecto de wireframe y glow animado.
 * Representa el "núcleo" de GreenAlgorithm: tecnología y naturaleza unidas.
 * Rotación lenta e hipnótica, wireframe semitransparente.
 */
function GlowingSphere({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = -t * 0.1
      wireRef.current.rotation.z = Math.cos(t * 0.08) * 0.15
    }
  })

  return (
    <group position={position} scale={scale}>
      {/* Esfera interna con glow */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#22C55E"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Wireframe exterior rotante */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#22C55E"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Halo de luz */}
      <pointLight
        color="#22C55E"
        intensity={0.5}
        distance={8}
        decay={2}
      />
    </group>
  )
}

export default GlowingSphere

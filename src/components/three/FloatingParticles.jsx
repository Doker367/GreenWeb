import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * FloatingParticles — Partículas flotantes verdes que se mueven suavemente.
 * Renderiza un sistema de partículas ligero usando instanced points.
 * @param {number} count - Cantidad de partículas (default 200)
 * @param {number} radius - Radio de distribución (default 10)
 */
function FloatingParticles({ count = 200, radius = 10 }) {
  const meshRef = useRef()

  const { positions, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    const offsets = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Distribución esférica uniforme
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      speeds[i] = 0.2 + Math.random() * 0.5
      offsets[i] = Math.random() * Math.PI * 2
    }
    return { positions, speeds, offsets }
  }, [count, radius])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const time = clock.getElapsedTime()
    const posArray = meshRef.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const speed = speeds[i]
      const offset = offsets[i]

      // Movimiento orbital suave
      posArray[i3] = positions[i3] + Math.sin(time * speed + offset) * 0.5
      posArray[i3 + 1] = positions[i3 + 1] + Math.cos(time * speed * 0.7 + offset) * 0.4
      posArray[i3 + 2] = positions[i3 + 2] + Math.sin(time * speed * 0.5 + offset * 1.5) * 0.3
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.slice()}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#22C55E"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default FloatingParticles

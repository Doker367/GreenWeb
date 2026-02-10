import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * ConnectionLines — Líneas animadas conectando nodos virtuales.
 * Simula una red de datos / nodos de IA interconectados.
 * Efecto sutil que refuerza la temática tecnológica.
 * @param {number} count - Cantidad de líneas (default 15)
 */
function ConnectionLines({ count = 15 }) {
  const groupRef = useRef()

  const lines = useMemo(() => {
    const result = []
    for (let i = 0; i < count; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      )
      // Punto de control para curva Bézier cuadrática
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3
        ))

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      const points = curve.getPoints(20)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      result.push({
        geometry,
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return result
  }, [count])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.children.forEach((line, i) => {
      const { speed, offset } = lines[i]
      // Pulso de opacidad para efecto de "transmisión de datos"
      line.material.opacity = 0.05 + Math.sin(t * speed + offset) * 0.05
    })
  })

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line key={i} geometry={line.geometry}>
          <lineBasicMaterial
            color="#22C55E"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </line>
      ))}
    </group>
  )
}

export default ConnectionLines

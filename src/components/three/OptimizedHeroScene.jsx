import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function OptimizedHeroScene() {
  const groupRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const ring3Ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1
    }
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.2
      ring1Ref.current.rotation.y = t * 0.15
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * -0.25
      ring2Ref.current.rotation.z = t * 0.1
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.1
      ring3Ref.current.rotation.z = t * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Core - High performance with Drei components */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#22C55E"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#16a34a"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Outer Glow / Pulse */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#22C55E"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Orbital Data Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#22C55E" transparent opacity={0.3} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.2} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[3.8, 0.008, 16, 100]} />
        <meshBasicMaterial color="#22C55E" transparent opacity={0.15} />
      </mesh>

      {/* Subtle Background Particles - Far fewer than before */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={150}
            array={new Float32Array(Array.from({ length: 450 }, () => (Math.random() - 0.5) * 15))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.2}
          sizeAttenuation
        />
      </points>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22C55E" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
    </group>
  )
}

export default OptimizedHeroScene

import { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function TechCore({ scrollYProgress }) {
  const groupRef = useRef()
  
  // Creamos una estructura compleja de "cables" y nodos
  const points = useMemo(() => {
    const p = []
    for (let i = 0; i < 40; i++) {
      p.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        speed: Math.random() * 0.01
      })
    }
    return p
  }, [])

  // Mapeo de scroll para la "explosión" de piezas
  const explosion = useTransform(scrollYProgress, [0, 1], [1, 8])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = explosion.get()
    const r = rotation.get()
    
    groupRef.current.children.forEach((child, i) => {
      if (i < points.length) {
        const p = points[i]
        child.position.x = p.pos.x * t
        child.position.y = p.pos.y * t
        child.position.z = p.pos.z * t
        child.rotation.y += 0.01
      }
    })
    groupRef.current.rotation.y = r * 0.2
  })

  return (
    <group ref={groupRef}>
      {/* Nodos tecnológicos flotantes */}
      {points.map((p, i) => (
        <mesh key={i} position={[p.pos.x, p.pos.y, p.pos.z]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial 
            color="#0071E3" 
            emissive="#0071E3" 
            emissiveIntensity={2} 
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}

      {/* Núcleo Central "Apple Style" */}
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#0071E3"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#0041a3"
            metalness={1}
          />
        </Sphere>
      </Float>

      {/* Aura de partículas */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

function ProductShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="h-[400vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Narrativa de Texto */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.15, 0.25], [0.8, 1, 1.2])
            }}
            className="text-center"
          >
            <h2 className="heading-xl text-white">Potencia <br/> <span className="text-gradient-blue">Absoluta.</span></h2>
          </motion.div>
          
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]),
              x: useTransform(scrollYProgress, [0.35, 0.5, 0.65], [100, 0, -100])
            }}
            className="text-center"
          >
            <h2 className="heading-xl text-white">Código <br/> <span className="text-gradient-blue">Optimizado.</span></h2>
          </motion.div>

          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.75, 0.9, 0.98], [0, 1, 0]),
              scale: useTransform(scrollYProgress, [0.75, 0.9, 0.98], [1.5, 1, 0.5])
            }}
            className="text-center"
          >
            <h2 className="heading-xl text-white">Futuro <br/> <span className="text-gradient-blue">Sostenible.</span></h2>
          </motion.div>
        </div>

        {/* 3D Canvas con Efectos de Luz */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
            <color attach="background" args={['#000']} />
            <fog attach="fog" args={['#000', 10, 25]} />
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#0071E3" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#fff" />
            
            <Suspense fallback={null}>
              <TechCore scrollYProgress={scrollYProgress} />
            </Suspense>
          </Canvas>
        </div>

        {/* Overlay de Gradiente estilo Apple */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </div>
    </section>
  )
}

export default ProductShowcase
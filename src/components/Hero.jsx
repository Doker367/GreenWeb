import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, lazy, Suspense, useState } from 'react'
import useDecipherText from '../hooks/useDecipherText'

const HeroScene = lazy(() => import('./three/HeroScene'))

function Hero() {
  const ref = useRef(null)
  const [animStarted] = useState(true)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  // Efecto decipher en dos líneas con timing escalonado
  const { displayText: line1, isComplete: line1Done } = useDecipherText(
    'Desarrollo de Software',
    {
      scrambleDuration: 1200,
      revealStagger: 30,
      scrambleSpeed: 40,
      startDelay: 400,
      trigger: animStarted,
    }
  )

  const { displayText: line2, isComplete: line2Done } = useDecipherText(
    'Sostenible con IA',
    {
      scrambleDuration: 800,
      revealStagger: 40,
      scrambleSpeed: 45,
      startDelay: 1800,
      trigger: animStarted,
    }
  )

  // Fade-in estilo Apple para subtítulo y botones — esperan a que termine el decipher
  const showContent = line1Done

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Escena Three.js — fondo 3D del hero */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cta/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cta/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[600px] h-72 sm:h-96 lg:h-[600px] bg-cta/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="section-container relative z-10 text-center"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-4 h-4 bg-cta/40 rounded-full blur-sm hidden lg:block"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-cta/30 rounded-full blur-sm hidden lg:block"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/2 right-20 w-3 h-3 bg-cta/50 rounded-full blur-sm hidden lg:block"
        />

        {/* Título con efecto decipher */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block text-text decipher-line">
            {line1 || '\u00A0'}
            {!line1Done && (
              <span className="decipher-cursor" aria-hidden="true" />
            )}
          </span>
          <motion.span
            className="block text-gradient mt-1 sm:mt-2 decipher-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: line1Done ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {line2 || '\u00A0'}
            {line1Done && !line2Done && (
              <span className="decipher-cursor decipher-cursor--green" aria-hidden="true" />
            )}
          </motion.span>
        </h1>

        {/* Subtítulo — Apple-style fade-up */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={showContent
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: 30, filter: 'blur(10px)' }
          }
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-text/70 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2"
        >
          Construimos soluciones tecnológicas inteligentes que optimizan recursos,
          reducen el impacto ambiental y potencian tu negocio.
        </motion.p>

        {/* Botones — Apple-style fade-up escalonado */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={showContent
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: 25, filter: 'blur(8px)' }
          }
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="btn-primary text-lg px-8 py-4 glow-effect-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Comenzar proyecto con GreenAlgorithm"
          >
            Comenzar Proyecto
          </motion.a>
          <motion.a
            href="#about"
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Conocer más sobre GreenAlgorithm"
          >
            Conocer Más
          </motion.a>
        </motion.div>

        {/* Flecha scroll — fade-in final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={line2Done ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 sm:mt-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6 text-cta/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

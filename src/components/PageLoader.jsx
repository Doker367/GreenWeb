import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

/**
 * PageLoader — Animación de carga inicial elegante con logo y progreso.
 * Se muestra al cargar la aplicación y desaparece con fade suave.
 * Diseño minimalista tipo Apple/Tesla con verde GreenAlgorithm.
 */
function PageLoader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Esperar un momento antes de desaparecer
          setTimeout(() => {
            setIsVisible(false)
            if (onLoadComplete) onLoadComplete()
          }, 400)
          return 100
        }
        // Progreso más rápido al inicio, luego más lento (easing)
        const increment = prev < 60 ? 8 : prev < 90 ? 4 : 2
        return Math.min(prev + increment, 100)
      })
    }, 80)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#0a0e1a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Partículas de fondo sutiles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/10 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cta/8 rounded-full blur-[100px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>

          {/* Contenido principal */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animado */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Icono: hexágono con leaf/algoritmo */}
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                >
                  {/* Hexágono exterior */}
                  <motion.path
                    d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                    stroke="#22C55E"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />
                  
                  {/* Leaf/Circuit interior */}
                  <motion.path
                    d="M50 30 Q60 40 60 50 Q60 60 50 70 Q40 60 40 50 Q40 40 50 30"
                    fill="#22C55E"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  
                  {/* Líneas de circuito/algoritmo */}
                  <motion.line
                    x1="30"
                    y1="50"
                    x2="40"
                    y2="50"
                    stroke="#22C55E"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  />
                  <motion.line
                    x1="60"
                    y1="50"
                    x2="70"
                    y2="50"
                    stroke="#22C55E"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  />
                  <motion.circle
                    cx="30"
                    cy="50"
                    r="3"
                    fill="#22C55E"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 }}
                  />
                  <motion.circle
                    cx="70"
                    cy="50"
                    r="3"
                    fill="#22C55E"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Nombre de la marca */}
            <motion.h1
              className="text-2xl sm:text-3xl font-heading font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-white">Green</span>
              <span className="text-cta">Algorithm</span>
            </motion.h1>

            <motion.p
              className="text-white/50 text-sm mb-8 font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Desarrollo sostenible con IA
            </motion.p>

            {/* Barra de progreso */}
            <div className="w-48 sm:w-64">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-cta to-[#34D399] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              
              {/* Porcentaje */}
              <motion.div
                className="text-center mt-3 text-white/60 text-xs font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {progress}%
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader

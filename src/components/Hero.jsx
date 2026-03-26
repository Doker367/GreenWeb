import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import Magnetic from './Magnetic'

const HeroScene = lazy(() => import('./three/HeroScene'))

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-30">
            <HeroScene />
          </div>
        </Suspense>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wide mb-6 backdrop-blur-md"
          >
            DESARROLLO FULL-STACK & IA
          </motion.span>
          
          <h1 className="heading-xl mb-6 text-white overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Software.
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white/40"
            >
              Reinventado.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Creamos experiencias digitales premium que fusionan perfección estética con ingeniería potente. Sostenible, escalable e inteligente.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnetic>
              <a href="#portfolio" className="btn-primary w-full sm:w-auto min-w-[160px]">
                Ver Trabajo
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-secondary w-full sm:w-auto min-w-[160px]">
                Contacto
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
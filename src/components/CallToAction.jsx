import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInView from './FadeInView'

function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])

  return (
    <section id="cta" ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cta/20 via-transparent to-cta/20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInView direction="up" duration={0.8}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              Construyamos Inteligencia{' '}
              <span className="text-gradient">Sostenible</span>
            </h2>
          </FadeInView>

          <FadeInView direction="up" delay={0.15} duration={0.8}>
            <p className="text-base sm:text-xl md:text-2xl text-text/70 mb-6 sm:mb-10 leading-relaxed px-2">
              Estamos listos para transformar tu visión en una solución tecnológica
              que no solo funciona, sino que también respeta nuestro planeta.
            </p>
          </FadeInView>

          <FadeInView direction="up" delay={0.3} duration={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                className="btn-primary text-lg px-10 py-4 glow-effect-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ir a la sección de contacto con GreenAlgorithm"
              >
                Comenzar Ahora
              </motion.a>
              <motion.a
                href="#about"
                className="btn-secondary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Conocer más sobre GreenAlgorithm"
              >
                Más Información
              </motion.a>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

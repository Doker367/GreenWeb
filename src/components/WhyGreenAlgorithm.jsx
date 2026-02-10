import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInView from './FadeInView'

const reasons = [
  {
    title: 'Rendimiento Optimizado',
    description: 'Cada aplicación está diseñada para ser rápida y eficiente, reduciendo el consumo de energía y mejorando la experiencia del usuario.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Escalabilidad',
    description: 'Arquitecturas diseñadas para crecer con tu negocio, sin comprometer el rendimiento ni la sostenibilidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: 'Mentalidad Verde',
    description: 'Comprometidos con la sostenibilidad, optimizamos cada aspecto del desarrollo para minimizar el impacto ambiental.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m5.945 4H11a2 2 0 01-2-2v-1a2 2 0 012-2h2.945M15 11V9a2 2 0 00-2-2H9a2 2 0 00-2 2v2m6 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m6 0h-2m2 0h2" />
      </svg>
    ),
  },
]

function WhyGreenAlgorithm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section id="why" ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        <div>
          <FadeInView direction="up" duration={0.7}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-4 relative inline-block w-full">
              ¿Por Qué <span className="text-gradient">GreenAlgorithm</span>?
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cta to-transparent"
              />
            </h2>
          </FadeInView>

          <FadeInView direction="up" delay={0.15} duration={0.7}>
            <p className="text-center text-text/70 text-base sm:text-lg mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-2">
              No solo construimos software, creamos soluciones que marcan la diferencia.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <FadeInView key={index} delay={0.1 + index * 0.1} direction="up">
                <motion.div
                  className="card group h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-cta mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {reason.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-cta transition-colors duration-fast">
                    {reason.title}
                  </h3>
                  <p className="text-text/60 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyGreenAlgorithm

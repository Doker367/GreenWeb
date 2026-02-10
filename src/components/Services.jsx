import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInView from './FadeInView'

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas, rápidas y escalables con las mejores tecnologías del mercado.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Software Personalizado',
    description: 'Soluciones a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'IA y Automatización',
    description: 'Integramos inteligencia artificial para automatizar procesos y potenciar la toma de decisiones.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Diseño UX/UI',
    description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
]

function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        <div>
          <FadeInView direction="up" duration={0.7}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-4 relative inline-block w-full">
              Nuestros <span className="text-gradient">Servicios</span>
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
              Ofrecemos soluciones completas para transformar tu visión en realidad digital.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <FadeInView key={index} delay={0.1 + index * 0.1} direction="up">
                <motion.div
                  className="card group h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-cta group-hover:scale-110 transition-transform duration-fast"
                      whileHover={{ rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-cta transition-colors duration-fast">
                        {service.title}
                      </h3>
                      <p className="text-text/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

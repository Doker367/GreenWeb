import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInView from './FadeInView'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" ref={ref} className="section-padding bg-primary/30 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        <div>
          <FadeInView direction="up" duration={0.7}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-4 relative inline-block w-full">
              Sobre <span className="text-gradient">GreenAlgorithm</span>
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
              Somos un equipo de desarrolladores apasionados por crear software que no solo
              resuelve problemas, sino que también respeta nuestro planeta.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <FadeInView delay={0.1} direction="up">
              <div className="card group h-full">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-12 h-12 mx-auto text-cta"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Innovación</h3>
                <p className="text-text/70">
                  Utilizamos las últimas tecnologías y metodologías para crear soluciones
                  de vanguardia.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2} direction="up">
              <div className="card group h-full">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-12 h-12 mx-auto text-cta"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m5.945 4H11a2 2 0 01-2-2v-1a2 2 0 012-2h2.945M15 11V9a2 2 0 00-2-2H9a2 2 0 00-2 2v2m6 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m6 0h-2m2 0h2"
                      />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Sostenibilidad</h3>
                <p className="text-text/70">
                  Cada línea de código está optimizada para minimizar el consumo de recursos
                  y el impacto ambiental.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.3} direction="up">
              <div className="card group h-full">
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-12 h-12 mx-auto text-cta"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Rendimiento</h3>
                <p className="text-text/70">
                  Aplicaciones rápidas, escalables y eficientes que ofrecen una experiencia
                  excepcional al usuario.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import FadeInView from './FadeInView'

const technologies = [
  {
    name: 'React',
    description: 'Biblioteca JavaScript para interfaces de usuario',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-3.375 1.843-3.988 6.49-1.363 10.388l.002.003L12 22.06l7.394-7.835.002-.002c2.625-3.9 2.012-8.545-1.363-10.388-.323-.185-.696-.278-1.106-.278zm-7.776 3.846c1.27 1.18 2.407 2.7 3.38 4.38l-3.38 3.483c-.973-1.7-2.11-3.22-3.38-4.4-1.27-1.18-2.407-2.68-3.38-4.36 1.27-1.7 2.407-3.2 3.38-4.38 1.27-1.18 2.407-2.7 3.38-4.38 1.27 1.68 2.407 3.18 3.38 4.36z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    description: 'Entorno de ejecución JavaScript del lado del servidor',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.932-1.736c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745,0.95,2.664,2.604,2.664c0.508,0,0.909,0,2.026-0.551l2.471-1.431c0.062-0.034,0.14-0.034,0.203,0l8.794,5.082 c0.081,0.046,0.136,0.141,0.136,0.237v0.012c0,0.096-0.055,0.189-0.136,0.235l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993c0,0.096-0.051,0.189-0.135,0.237l-1.169,0.676c-0.083,0.047-0.19,0.047-0.272,0c-0.084-0.049-0.135-0.143-0.135-0.238 v-1.35v-2.517v-1.349c0-0.096,0.051-0.186,0.135-0.234c0.082-0.047,0.189-0.047,0.272,0l1.169,0.676 c0.084,0.048,0.135,0.141,0.135,0.237V13.993z"/>
      </svg>
    ),
  },
  {
    name: 'Cloud',
    description: 'Infraestructura escalable en la nube',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: 'Inteligencia Artificial',
    description: 'Machine Learning y algoritmos inteligentes',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="tech" ref={ref} className="section-padding bg-primary/30 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        <div>
          <FadeInView direction="up" duration={0.7}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-4 relative inline-block w-full">
              Nuestra <span className="text-gradient">Tecnología</span>
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
              Utilizamos un stack tecnológico moderno y eficiente para construir
              aplicaciones de alto rendimiento.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <FadeInView key={index} delay={0.1 + index * 0.08} direction="up">
                <motion.div
                  className="card text-center group h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="text-cta mb-4 flex justify-center group-hover:scale-110 transition-transform duration-fast"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-cta transition-colors duration-fast">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-text/60">
                    {tech.description}
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

export default TechStack

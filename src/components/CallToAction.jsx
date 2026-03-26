import { motion } from 'framer-motion'
import FadeInView from './FadeInView'

function CallToAction() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="section-container relative z-10 text-center">
        <FadeInView>
          <h2 className="heading-xl text-white mb-8">
            ¿Listo para <span className="text-gradient-blue">empezar?</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12">
            Hablemos sobre cómo podemos ayudarte a construir tu próxima gran idea.
          </p>
          <a href="#contact" className="btn-primary px-10 py-5 text-lg shadow-2xl shadow-primary/25">
            Contáctanos
          </a>
        </FadeInView>
      </div>
    </section>
  )
}

export default CallToAction
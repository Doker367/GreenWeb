import { motion } from 'framer-motion'
import FadeInView from './FadeInView'

function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-black">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <div>
            <FadeInView direction="up" duration={0.8}>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
                Quiénes Somos
              </span>
              <h2 className="heading-lg text-white mb-8">
                Creamos software que <span className="text-gradient-blue">importa.</span>
              </h2>
              <p className="text-xl text-text-muted leading-relaxed">
                GreenAlgorithm es una consultoría premium de software. Combinamos ingeniería de élite con diseño centrado en el humano para crear productos digitales que perduran.
              </p>
            </FadeInView>
          </div>

          {/* Right Column: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeInView delay={0.2} direction="up">
              <div className="glass p-8 rounded-3xl h-full hover-card">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">Rendimiento</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  La velocidad es una característica. Optimizamos cada byte para que tu aplicación se sienta instantánea.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.3} direction="up">
              <div className="glass p-8 rounded-3xl h-full hover-card">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">Calidad</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Cero compromisos con la calidad del código. Escribimos código mantenible, escalable y seguro.
                </p>
              </div>
            </FadeInView>
             
             <FadeInView delay={0.4} direction="up">
              <div className="glass p-8 rounded-3xl h-full hover-card">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">Sostenibilidad</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                   El código eficiente consume menos energía. Construimos para un futuro digital más verde.
                </p>
              </div>
            </FadeInView>

             <FadeInView delay={0.5} direction="up">
              <div className="glass p-8 rounded-3xl h-full hover-card">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">Innovación</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Nos mantenemos a la vanguardia, aprovechando la IA y tecnologías modernas para resolver problemas complejos.
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
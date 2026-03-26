import FadeInView from './FadeInView'

function WhyGreenAlgorithm() {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <FadeInView delay={0}>
            <div className="px-4 py-4">
              <span className="text-4xl font-display font-bold text-white block mb-2">100%</span>
              <span className="text-text-muted text-sm uppercase tracking-wide">Entrega a Tiempo</span>
            </div>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="px-4 py-4">
              <span className="text-4xl font-display font-bold text-white block mb-2">24/7</span>
              <span className="text-text-muted text-sm uppercase tracking-wide">Soporte Disponible</span>
            </div>
          </FadeInView>
          <FadeInView delay={0.4}>
            <div className="px-4 py-4">
              <span className="text-4xl font-display font-bold text-white block mb-2">Escalable</span>
              <span className="text-text-muted text-sm uppercase tracking-wide">Arquitectura Primero</span>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

export default WhyGreenAlgorithm
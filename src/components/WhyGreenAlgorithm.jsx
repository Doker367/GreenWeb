import FadeInView from './FadeInView'

function WhyGreenAlgorithm() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInView delay={0}>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 text-center group">
              <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-white font-medium mb-2">Entrega a Tiempo</div>
              <div className="text-sm text-[#86868B]">Cumplimos cada fecha de entrega acordada en el cronograma del proyecto</div>
            </div>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 text-center group">
              <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-white font-medium mb-2">Soporte Disponible</div>
              <div className="text-sm text-[#86868B]">Monitoreo continuo y respuesta inmediata para problemas criticos en produccion</div>
            </div>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 text-center group">
              <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-3">Escalable</div>
              <div className="text-white font-medium mb-2">Arquitectura Primero</div>
              <div className="text-sm text-[#86868B]">Disenamos para escalar desde el dia uno, sin reescrituras costosas en el futuro</div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

export default WhyGreenAlgorithm
import { motion } from 'framer-motion'
import FadeInView from './FadeInView'

const steps = [
  {
    step: "01",
    title: "Descubrimiento",
    description: "Nos sumergimos en tus requisitos, entendiendo tus objetivos de negocio y limitaciones técnicas."
  },
  {
    step: "02",
    title: "Diseño",
    description: "Creamos diseños intuitivos y centrados en el usuario y arquitecturamos sistemas escalables antes de escribir una sola línea de código."
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Sprints ágiles con código limpio y testeable. Proporcionamos actualizaciones y demos regulares para asegurar la alineación."
  },
  {
    step: "04",
    title: "Lanzamiento",
    description: "Despliegue fluido a producción con documentación completa y soporte post-lanzamiento."
  },
]

function Process() {
  return (
    <section id="process" className="section-padding bg-surface relative border-t border-white/5">
      <div className="section-container relative z-10">
        <div className="mb-20">
          <FadeInView>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
              Cómo Trabajamos
            </span>
            <h2 className="heading-lg text-white max-w-2xl">
              Del concepto a la <span className="text-gradient-blue">realidad.</span>
            </h2>
          </FadeInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <FadeInView key={item.step} delay={index * 0.1}>
              <div className="relative group">
                <span className="text-6xl font-display font-bold text-white/5 absolute -top-10 -left-4 select-none group-hover:text-white/10 transition-colors">
                  {item.step}
                </span>
                <div className="relative pt-4">
                  <h3 className="text-xl font-display font-semibold text-white mb-4 pl-2 border-l-2 border-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
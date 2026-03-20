import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeInView from './FadeInView'

const faqs = [
  {
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer: "Varía según la complejidad. Un sitio web simple puede tomar 2-4 semanas, mientras que una aplicación móvil compleja o una plataforma SaaS podría tomar 3-6 meses. Proporcionamos un cronograma detallado durante la fase de descubrimiento."
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer: "Sí. Ofrecemos varios paquetes de mantenimiento que incluyen actualizaciones de seguridad, correcciones de errores y adiciones de funciones menores para mantener tu software funcionando sin problemas."
  },
  {
    question: "¿Soy dueño del código?",
    answer: "Absolutamente. Una vez que el proyecto está pagado, eres dueño del 100% del código fuente y la propiedad intelectual. Entregamos todo al momento de la entrega."
  },
  {
    question: "¿Qué tecnologías usan?",
    answer: "Somos agnósticos en cuanto a stack pero nos especializamos en herramientas modernas como React, Next.js, Node.js, Python y Flutter. Elegimos la mejor herramienta para tus requisitos específicos."
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section-padding bg-black relative border-t border-white/5">
      <div className="section-container max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <FadeInView>
            <h2 className="heading-md text-white mb-4">Preguntas Frecuentes</h2>
            <p className="text-text-muted">Todo lo que necesitas saber sobre trabajar con nosotros.</p>
          </FadeInView>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div 
                className="bg-surface rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-white/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
import { motion } from 'framer-motion'
import FadeInView from './FadeInView'

const contacts = [
  {
    label: 'Teléfono',
    value: '+52 921 438 0943',
    href: 'tel:+529214380943',
    cta: 'Llamar',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2l2 5-1.5 1.5a13 13 0 006.5 6.5L14 14l5 2v2a2 2 0 01-2 2h-1c-7.18 0-13-5.82-13-13V5z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+52 921 438 0943',
    href: 'https://wa.me/529214380943',
    cta: 'Abrir WhatsApp',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.635 14.522c-.278-.14-1.642-.81-1.896-.902-.255-.093-.441-.14-.628.14-.186.279-.721.902-.884 1.088-.163.186-.325.21-.603.07-.278-.14-1.175-.433-2.24-1.38-.828-.739-1.386-1.652-1.55-1.93-.163-.279-.017-.43.123-.57.127-.126.279-.326.418-.488.14-.163.186-.279.279-.465.093-.186.047-.349-.023-.488-.07-.14-.628-1.517-.86-2.077-.227-.546-.458-.472-.628-.48-.163-.007-.349-.009-.535-.009-.186 0-.488.07-.744.349-.255.279-.977.955-.977 2.327 0 1.373 1 2.7 1.138 2.887.14.186 1.972 3.006 4.775 4.214.667.288 1.187.46 1.593.589.669.213 1.278.183 1.76.111.536-.08 1.642-.67 1.874-1.318.232-.649.232-1.205.163-1.325-.07-.116-.255-.186-.533-.326z" />
      </svg>
    ),
  },
  {
    label: 'Correo',
    value: 'greenalgorithm92@gmail.com',
    href: 'mailto:greenalgorithm92@gmail.com',
    cta: 'Enviar correo',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'greenalgorithm',
    href: 'https://www.facebook.com/greenalgorithm',
    cta: 'Abrir Facebook',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.1C15.2 1 14.1 1 13 1c-2.4 0-4 1.5-4 4.2V7H7v3h2v9h4v-9z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@green_algorithm_',
    href: 'https://www.instagram.com/green_algorithm_',
    cta: 'Abrir Instagram',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 18.5 4.5 4.5 0 0112 7.5zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zm5.25-4a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0117.25 5.5z" />
      </svg>
    ),
  },
]

function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-primary/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-cta/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        <FadeInView direction="up" duration={0.7}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3">
            Contacto y cotizaciones
          </h2>
        </FadeInView>
        <FadeInView direction="up" delay={0.1} duration={0.7}>
          <p className="text-center text-text/70 max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            Elige el canal que prefieras para hablarnos sobre tu proyecto. Respondemos en horario laboral (GMT-6).
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contacts.map((item, idx) => (
            <FadeInView key={item.label} delay={0.05 * idx} direction="up">
              <a
                href={item.href}
                className="card h-full flex items-start gap-4 hover:border-cta/40 transition-colors"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10 text-cta border border-cta/30 shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-text/60 text-xs uppercase tracking-wide">{item.label}</p>
                  <p className="text-white text-base sm:text-lg font-semibold leading-tight mt-0.5">{item.value}</p>
                  <p className="text-cta text-xs sm:text-sm mt-1 font-medium">{item.cta}</p>
                </div>
              </a>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection

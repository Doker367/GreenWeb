import { motion, AnimatePresence } from 'framer-motion'

const contacts = [
  { label: 'Teléfono', value: '+52 921 438 0943', href: 'tel:+529214380943' },
  { label: 'WhatsApp', value: '+52 921 438 0943', href: 'https://wa.me/529214380943' },
  { label: 'Correo', value: 'greenalgorithm92@gmail.com', href: 'mailto:greenalgorithm92@gmail.com' },
  { label: 'Facebook', value: 'greenalgorithm', href: 'https://www.facebook.com/profile.php?id=61587251265634' },
  { label: 'Instagram', value: '@green_algorithm_', href: 'https://www.instagram.com/green_algorithm_/' },
]

function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="relative z-10 max-w-lg w-full bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-text/60">Contacto</p>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">Cotiza o habla con nosotros</h3>
                <p className="text-text/70 mt-2 text-xs sm:text-sm">
                  Elige el canal que prefieras. Respondemos en horario laboral (GMT-6).
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Cerrar modal de contacto"
              >
                X
              </button>
            </div>

            <div className="space-y-3">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cta/30 transition-colors"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className="text-xs sm:text-sm">
                    <p className="text-text/60 uppercase tracking-wide">{item.label}</p>
                    <p className="text-white text-sm sm:text-base font-medium">{item.value}</p>
                  </div>
                  <span className="text-cta text-xs sm:text-sm font-semibold">Abrir</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal

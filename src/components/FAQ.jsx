import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)
  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']

  return (
    <section id="faq" className="py-20 sm:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#0071E3]/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('faq.label')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </FadeInView>
        </div>

        <div className="space-y-4">
          {faqKeys.map((key, index) => (
            <FadeInView key={key} delay={index * 0.08}>
              <div 
                className="rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center gap-4">
                  <h3 className="text-lg font-medium text-white">{t(`faq.items.${key}.question`)}</h3>
                  <div className={`w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45 bg-[#0071E3]/20' : ''}`}>
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
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-[#86868B] leading-relaxed">
                        {t(`faq.items.${key}.answer`)}
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

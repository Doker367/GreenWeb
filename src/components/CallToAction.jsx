import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

function CallToAction() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

  return (
    <section ref={containerRef} className="py-20 sm:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0071E3]/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>

      <motion.div 
        style={{ scale }}
        className="section-container relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center p-6 sm:p-12 lg:p-16 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071E3]/10 rounded-full blur-3xl" />
          
          <FadeInView>
            <h2 className="text-[2.5rem] sm:text-[4rem] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              {t('cta.title.line1')} <br />
              <span className="bg-gradient-to-r from-[#0071E3] via-[#59ACFF] to-[#0071E3] bg-clip-text text-transparent">
                {t('cta.title.line2')}
              </span>
            </h2>
            <p className="text-base sm:text-xl text-[#86868B] max-w-xl mx-auto mb-10">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0071E3] text-white font-medium text-base transition-all duration-300 hover:bg-[#0077ED] hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('cta.primary')}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="mailto:hello@greenalgorithm.dev" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.04] text-white font-medium text-base transition-all duration-300 hover:bg-white/[0.08] border border-white/[0.06]"
              >
                {t('cta.secondary')}
              </a>
            </div>
          </FadeInView>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToAction

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const HeroScene = lazy(() => import('./three/HeroScene'))

function Hero() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] opacity-60" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] opacity-50" />
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-20">
            <HeroScene />
          </div>
        </Suspense>
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="section-container relative z-10 flex flex-col items-center text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block py-2 px-5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[#86868B] text-xs font-medium tracking-[0.1em] uppercase mb-8 backdrop-blur-sm"
          >
            {t('hero.badge')}
          </motion.span>
          
          <h1 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-semibold leading-[0.9] tracking-[-0.03em] mb-8">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-white"
            >
              {t('hero.title.line1')}
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block bg-gradient-to-r from-[#0071E3] via-[#59ACFF] to-[#0071E3] bg-clip-text text-transparent"
            >
              {t('hero.title.line2')}
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#86868B]"
            >
              {t('hero.title.line3')}
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl sm:text-2xl text-[#86868B] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#portfolio" 
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0071E3] text-white font-medium text-base transition-all duration-300 hover:bg-[#0077ED] hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('hero.cta.primary')}
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.06] text-white font-medium text-base transition-all duration-300 hover:bg-white/[0.1] border border-white/[0.08]"
            >
              {t('hero.cta.secondary')}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-[#86868B] tracking-[0.2em] uppercase">{t('hero.scroll')}</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#86868B] via-[#86868B]/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

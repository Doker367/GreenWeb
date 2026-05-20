import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

function Process() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const steps = [
    {
      step: '01',
      title: 'discovery',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197a5.197 5.197 0 00-5.197-5.197L5.197 5.197a5.197 5.197 0 005.197 5.197L21 21zM3 10h10a8.003 8.003 0 015.373 3.138l3.666-3.83a8.003 8.003 0 00-5.376 3.139l-3.666 3.83a8.003 8.003 0 005.376-3.138l3.666-3.83z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'design',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011 1v1a1 1 0 001-1 1H3a1 1 0 001 1v1a1 1 0 001-1 1V5a1 1 0 001-1v1a1 1 0 001-1 1H6.5a1 1 0 01.707 1.707 3.707-2.293 0-.414-.5l-.517-.517A1.5 1.5 0 01-.12 1.5l.517.517A1.5 1.5 0 00.12-1.5l-.517-.517A1.5-1.5 0 00-.414.5l.517.517a1.5 1.5 0 01.12 1.5z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'development',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4 16m4-16zM4 2h6a2 2 0 012 2v2a2 2 0 01-2 2H6z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'launch',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-9 11 9 0 011-9 11h-3m6-3a9 9 0 00-9 9 9v3h3m-6 3a9 9 0 009 9 9v3a9 9 0 00-9-9z" />
        </svg>
      )
    },
  ]

  return (
    <section id="process" ref={containerRef} className="py-20 sm:py-32 bg-black relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('process.badge')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              {t('process.title')}
            </h2>
            <p className="text-lg text-[#86868B] leading-relaxed">
              {t('process.description')}
            </p>
          </FadeInView>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0071E3] via-[#0071E3]/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((item, index) => (
              <FadeInView key={item.step} delay={index * 0.15}>
                <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 pb-12 md:pb-16">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-semibold text-sm z-10">
                      {item.step}
                    </div>
                  </div>

                  <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="md:hidden inline-flex w-8 h-8 rounded-full bg-[#0071E3] items-center justify-center text-white font-semibold text-xs">
                        {item.step}
                      </span>
                      <h3 className="text-2xl font-semibold text-white">
                        {t(`process.steps.${item.title}.title`)}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-white/[0.04] text-xs text-white/60">
                        {t(`process.steps.${item.title}.duration`)}
                      </span>
                    </div>
                    <p className="text-[#86868B] leading-relaxed">
                      {t(`process.steps.${item.title}.description`)}
                    </p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process

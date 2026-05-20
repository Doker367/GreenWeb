import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const serviceIcons = {
  web: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  mobile: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  ai: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  cloud: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  automation: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  security: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

const serviceColors = {
  web: '#3B82F6',
  mobile: '#A855F7',
  ai: '#22C55E',
  cloud: '#F97316',
  automation: '#6366F1',
  security: '#EF4444',
}

function Services() {
  const { t } = useTranslation()
  const [expandedService, setExpandedService] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const services = [
    { key: 'web', number: "01", gradient: "from-blue-500/20 to-cyan-500/20" },
    { key: 'mobile', number: "02", gradient: "from-purple-500/20 to-pink-500/20" },
    { key: 'ai', number: "03", gradient: "from-emerald-500/20 to-teal-500/20" },
    { key: 'cloud', number: "04", gradient: "from-orange-500/20 to-red-500/20" },
    { key: 'automation', number: "05", gradient: "from-indigo-500/20 to-violet-500/20" },
    { key: 'security', number: "06", gradient: "from-rose-500/20 to-pink-500/20" },
  ]

  return (
    <section id="services" ref={containerRef} className="py-20 sm:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="section-container relative z-10">
        <div className="mb-20">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('services.label')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              {t('services.title.prefix')} <span className="text-[#86868B]">{t('services.title.suffix')}</span>
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl">
              {t('services.description')}
            </p>
          </FadeInView>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const isExpanded = expandedService === service.key
            const color = serviceColors[service.key]
            return (
              <FadeInView key={service.key} delay={index * 0.08}>
                <div 
                  className="group rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => setExpandedService(isExpanded ? null : service.key)}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        {serviceIcons[service.key]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{t(`services.items.${service.key}.title`)}</h3>
                            <p className="text-sm" style={{ color }}>{t(`services.items.${service.key}.subtitle`)}</p>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center shrink-0 transition-transform duration-300"
                            style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
                          >
                            <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-[#86868B] leading-relaxed">{t(`services.items.${service.key}.description`)}</p>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-8 pt-2 border-t border-white/[0.04]">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">{t('services.details.includes')}</h4>
                              <ul className="space-y-2">
                                {t(`services.items.${service.key}.includes`, { returnObjects: true }).map((item, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-[#86868B]">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">{t('services.details.deliverables')}</h4>
                              <ul className="space-y-2">
                                {t(`services.items.${service.key}.deliverables`, { returnObjects: true }).map((item, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-[#86868B]">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">{t('services.details.technologies')}</h4>
                              <div className="flex flex-wrap gap-2">
                                {t(`services.items.${service.key}.features`, { returnObjects: true }).map(feature => (
                                  <span 
                                    key={feature}
                                    className="px-3 py-1.5 rounded-full text-xs text-white/60 border"
                                    style={{ backgroundColor: `${color}08`, borderColor: `${color}20` }}
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const serviceIcons = {
  web: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  mobile: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  ai: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  automation: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  security: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

function ServicesPage({ onNavigate }) {
  const { t } = useTranslation()
  const [activeService, setActiveService] = useState('web')
  const keys = ['web', 'mobile', 'ai', 'cloud', 'automation', 'security']

  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 sm:pt-32 pb-12 sm:pb-20"
      >
        <div className="section-container">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('servicesPage.badge')}
            </span>
            <h1 className="text-[3rem] sm:text-[5rem] font-semibold tracking-tight text-white mb-6 leading-[1]">
              {t('servicesPage.title')}
            </h1>
            <p className="text-xl text-[#86868B] max-w-2xl mb-16">
              {t('servicesPage.subtitle')}
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {keys.map((key) => {
              const isActive = activeService === key
              const color = serviceColors[key]
              return (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 border"
                  style={{
                    backgroundColor: isActive ? `${color}15` : 'rgba(255,255,255,0.02)',
                    borderColor: isActive ? `${color}30` : 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div style={{ color: isActive ? color : 'rgba(255,255,255,0.4)' }} className="transition-colors">
                    {serviceIcons[key]}
                  </div>
                  <span className="text-xs font-medium text-center" style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                    {t(`services.items.${key}.title`)}
                  </span>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="rounded-3xl p-8 sm:p-12 border border-white/[0.06] relative overflow-hidden"
                style={{ backgroundColor: `${serviceColors[activeService]}05` }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: serviceColors[activeService] }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${serviceColors[activeService]}20`, color: serviceColors[activeService] }}
                    >
                      {serviceIcons[activeService]}
                    </div>
                    <div>
                      <h2 className="text-3xl font-semibold text-white">{t(`services.items.${activeService}.title`)}</h2>
                      <p className="text-sm" style={{ color: serviceColors[activeService] }}>{t(`services.items.${activeService}.subtitle`)}</p>
                    </div>
                  </div>

                  <p className="text-lg text-[#86868B] leading-relaxed mb-10 max-w-3xl">
                    {t(`services.items.${activeService}.description`)}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('services.details.includes')}</h4>
                      <ul className="space-y-3">
                        {t(`services.items.${activeService}.includes`, { returnObjects: true }).map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#86868B]">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: serviceColors[activeService] }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('services.details.deliverables')}</h4>
                      <ul className="space-y-3">
                        {t(`services.items.${activeService}.deliverables`, { returnObjects: true }).map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#86868B]">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: serviceColors[activeService] }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('services.details.technologies')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {t(`services.items.${activeService}.features`, { returnObjects: true }).map(feature => (
                          <span key={feature} className="px-3 py-1.5 rounded-full text-xs text-white/60 border"
                            style={{ backgroundColor: `${serviceColors[activeService]}08`, borderColor: `${serviceColors[activeService]}20` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <FadeInView delay={0.3}>
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('servicesPage.ctaTitle')}</h3>
              <p className="text-[#86868B] mb-8 max-w-xl mx-auto">{t('servicesPage.ctaSubtitle')}</p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }, 500) }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0071E3] text-white font-medium transition-all duration-300 hover:bg-[#0077ED] hover:scale-[1.02]"
              >
                {t('servicesPage.ctaButton')}
              </a>
            </div>
          </FadeInView>
        </div>
      </motion.div>
    </div>
  )
}

export default ServicesPage

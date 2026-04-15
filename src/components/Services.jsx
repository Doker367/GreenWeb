import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

function Services() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const services = [
    {
      number: "01",
      title: t('services.items.web.title'),
      subtitle: t('services.items.web.subtitle'),
      description: t('services.items.web.description'),
      features: t('services.items.web.features', { returnObjects: true }),
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      number: "02",
      title: t('services.items.mobile.title'),
      subtitle: t('services.items.mobile.subtitle'),
      description: t('services.items.mobile.description'),
      features: t('services.items.mobile.features', { returnObjects: true }),
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      number: "03",
      title: t('services.items.ai.title'),
      subtitle: t('services.items.ai.subtitle'),
      description: t('services.items.ai.description'),
      features: t('services.items.ai.features', { returnObjects: true }),
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      number: "04",
      title: t('services.items.cloud.title'),
      subtitle: t('services.items.cloud.subtitle'),
      description: t('services.items.cloud.description'),
      features: t('services.items.cloud.features', { returnObjects: true }),
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      number: "05",
      title: t('services.items.automation.title'),
      subtitle: t('services.items.automation.subtitle'),
      description: t('services.items.automation.description'),
      features: t('services.items.automation.features', { returnObjects: true }),
      gradient: "from-indigo-500/20 to-violet-500/20"
    },
    {
      number: "06",
      title: t('services.items.security.title'),
      subtitle: t('services.items.security.subtitle'),
      description: t('services.items.security.description'),
      features: t('services.items.security.features', { returnObjects: true }),
      gradient: "from-rose-500/20 to-pink-500/20"
    },
  ]

  return (
    <section id="services" ref={containerRef} className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[80px]" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeInView key={service.title} delay={index * 0.1}>
              <div className="group relative h-full p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[3rem] font-bold text-white/[0.05] group-hover:text-white/[0.1] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-white mb-1">{service.title}</h3>
                    <p className="text-sm text-[#0071E3]">{service.subtitle}</p>
                  </div>

                  <p className="text-[#86868B] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map(feature => (
                      <span 
                        key={feature}
                        className="px-3 py-1.5 rounded-full bg-white/[0.04] text-xs text-white/60 border border-white/[0.06]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

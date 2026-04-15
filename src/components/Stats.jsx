import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const stats = [
  { key: 'projects', value: '150+' },
  { key: 'satisfaction', value: '98%' },
  { key: 'users', value: '5M+' },
  { key: 'support', value: '24/7' },
]

function Stats() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[80px]" />
      </motion.div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <FadeInView>
            <h2 className="text-[2.5rem] sm:text-[4rem] font-semibold tracking-tight text-white mb-6">
              {t('stats.title')}
            </h2>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto">
              {t('stats.subtitle')}
            </p>
          </FadeInView>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
          {stats.map((stat, index) => (
            <FadeInView key={stat.key} delay={index * 0.1}>
              <div className="text-center lg:text-left">
                <div className="text-[3.5rem] sm:text-[4.5rem] font-semibold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-white mb-2">
                  {t(`stats.${stat.key}.label`)}
                </div>
                <div className="text-sm text-[#86868B] leading-relaxed">
                  {t(`stats.${stat.key}.description`)}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.4}>
          <div className="border-t border-white/[0.06] pt-16">
            <p className="text-center text-sm text-[#86868B] mb-8 tracking-wide uppercase">
              {t('stats.trustedBy')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {['TechCorp', 'InnovateLabs', 'CloudScale', 'DataDriven', 'SecureNet', 'FinanceHub', 'HealthTech', 'RetailPro'].map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl font-semibold text-white/20 hover:text-white/40 transition-colors cursor-default"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}

export default Stats

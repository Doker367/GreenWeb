import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'
import { ParallaxImage } from './ParallaxSection'

function About() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const imageX = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('about.values.velocity.title'),
      description: t('about.values.velocity.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('about.values.security.title'),
      description: t('about.values.security.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
  ]

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-24">
          
          <FadeInView direction="up" duration={0.8}>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('about.label')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              {t('about.title.prefix')} <span className="text-[#86868B]">{t('about.title.suffix')}</span>
            </h2>
            <p className="text-lg text-[#86868B] leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-[#86868B] leading-relaxed mb-8">
              {t('about.description2')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/60">
                {t('about.badges.mexico')}
              </div>
              <div className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/60">
                {t('about.badges.remote')}
              </div>
              <div className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/60">
                {t('about.badges.years')}
              </div>
            </div>
          </FadeInView>

          <motion.div style={{ x: imageX }} className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#1C1C1E] to-[#0A0A0A]">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Team collaboration"
                overlay={true}
                speed={0.2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-sm text-white/60 mb-1">{t('about.image.philosophy')}</div>
                <div className="text-lg text-white font-medium">{t('about.image.quote')}</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0071E3]/10 rounded-3xl blur-2xl" />
          </motion.div>
        </div>

        <div className="border-t border-white/[0.06] pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInView key={value.title} delay={index * 0.1}>
                <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[#0071E3]/20 group-hover:text-[#0071E3] transition-all duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-[#86868B] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

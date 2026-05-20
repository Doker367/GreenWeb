import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const values = [
  { icon: 'velocity', color: '#3B82F6' },
  { icon: 'security', color: '#A855F7' },
  { icon: 'sustainability', color: '#22C55E' },
  { icon: 'innovation', color: '#F97316' },
]

const valueIcons = {
  velocity: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  security: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  sustainability: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  innovation: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
}

const teamMembers = ['alejandro', 'maria', 'carlos', 'isabella', 'diego', 'sofia']

const teamImages = {
  alejandro: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  maria: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  carlos: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  isabella: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
  diego: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  sofia: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
}

function AboutPage() {
  const { t } = useTranslation()

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
              {t('aboutPage.badge')}
            </span>
            <h1 className="text-[3rem] sm:text-[5rem] font-semibold tracking-tight text-white mb-6 leading-[1]">
              {t('aboutPage.title')}
            </h1>
            <p className="text-xl text-[#86868B] max-w-3xl mb-8 leading-relaxed">
              {t('aboutPage.description1')}
            </p>
            <p className="text-lg text-[#86868B] max-w-3xl mb-12 leading-relaxed">
              {t('aboutPage.description2')}
            </p>
            <div className="flex flex-wrap gap-4 mb-12 sm:mb-24">
              <div className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/60">{t('about.badges.mexico')}</div>
              <div className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/60">{t('about.badges.remote')}</div>
              <div className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-white/60">{t('about.badges.years')}</div>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-semibold tracking-tight text-white mb-16 text-center">
              {t('about.timeline.title')}
            </h2>
            <div className="relative mb-12 sm:mb-24">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0071E3] via-[#0071E3]/50 to-transparent hidden md:block" />
              <div className="space-y-12">
                {[0, 1, 2, 3].map((i) => {
                  const isLeft = i % 2 === 0
                  return (
                    <FadeInView key={i} delay={i * 0.15}>
                      <div className={`flex flex-col md:flex-row items-center gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                        <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] inline-block">
                            <div className="text-[#0071E3] font-semibold mb-2">{t(`about.timeline.items.${i}.year`)}</div>
                            <h4 className="text-lg font-semibold text-white mb-2">{t(`about.timeline.items.${i}.title`)}</h4>
                            <p className="text-sm text-[#86868B] leading-relaxed">{t(`about.timeline.items.${i}.description`)}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex w-10 h-10 rounded-full bg-[#0071E3] items-center justify-center text-white font-semibold text-sm shrink-0 z-10">
                          {i + 1}
                        </div>
                        <div className="flex-1" />
                      </div>
                    </FadeInView>
                  )
                })}
              </div>
            </div>
          </FadeInView>

          <FadeInView>
            <div className="border-t border-white/[0.06] pt-10 sm:pt-20 mb-12 sm:mb-24">
              <h2 className="text-[2rem] sm:text-[2.5rem] font-semibold tracking-tight text-white mb-16 text-center">
                {t('aboutPage.valuesTitle')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((v, i) => (
                  <FadeInView key={v.icon} delay={i * 0.1}>
                    <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                        style={{ backgroundColor: `${v.color}15`, color: v.color }}
                      >
                        {valueIcons[v.icon]}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{t(`about.values.${v.icon}.title`)}</h3>
                      <p className="text-sm text-[#86868B] leading-relaxed">{t(`about.values.${v.icon}.description`)}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </FadeInView>

          </div>
      </motion.div>
    </div>
  )
}

export default AboutPage

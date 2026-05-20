import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const projectColors = {
  manybox: '#3B82F6',
  sistemacontable: '#22C55E',
  greenpos: '#A855F7',
  posh: '#EF4444',
  mediconnect: '#06B6D4',
}

function WorkPage() {
  const { t } = useTranslation()

  const projects = [
    {
      key: 'manybox',
      color: projectColors.manybox,
      images: ['/images/projects/ManyBoxWeb.png'],
      link: 'https://manyboxenviox.com/'
    },
    {
      key: 'sistemacontable',
      color: projectColors.sistemacontable,
      images: ['/images/projects/sistemacontable.png'],
    },
    {
      key: 'greenpos',
      color: projectColors.greenpos,
      images: ['/images/projects/greenpos2.png', '/images/projects/greenpos.png'],
    },
    {
      key: 'posh',
      color: projectColors.posh,
      images: ['/images/projects/medicalapp.png', '/images/projects/medicalapp2.png'],
    },
    {
      key: 'mediconnect',
      color: projectColors.mediconnect,
      images: ['/images/projects/medicalapp2.png', '/images/projects/medicalapp.png'],
    },
  ]

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
              {t('workPage.badge')}
            </span>
            <h1 className="text-[3rem] sm:text-[5rem] font-semibold tracking-tight text-white mb-6 leading-[1]">
              {t('workPage.title')}
            </h1>
            <p className="text-xl text-[#86868B] max-w-2xl mb-20">
              {t('workPage.subtitle')}
            </p>
          </FadeInView>

          <div className="space-y-16 sm:space-y-32">
            {projects.map((project, index) => {
              const data = {
                title: t(`portfolio.projects.${project.key}.title`),
                category: t(`portfolio.projects.${project.key}.category`),
                description: t(`portfolio.projects.${project.key}.description`),
                technologies: t(`portfolio.projects.${project.key}.tech`, { returnObjects: true }) || [],
                metrics: t(`portfolio.projects.${project.key}.metrics`, { returnObjects: true }) || {},
              }
              const isEven = index % 2 === 0

              return (
                <FadeInView key={project.key}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={`${!isEven ? 'lg:[direction:ltr]' : ''}`}>
                      {project.images ? (
                        <div className={`rounded-3xl overflow-hidden ${project.images.length > 1 ? 'grid grid-cols-2 gap-4' : ''}`}
                          style={{ boxShadow: `0 25px 60px -15px ${project.color}20` }}
                        >
                          {project.images.map((img, i) => (
                            <img key={i} src={img} alt={`${data.title} ${i + 1}`} className="w-full h-auto object-contain rounded-3xl" />
                          ))}
                        </div>
                      ) : (
                        <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-[#1C1C1E] to-[#0A0A0A] flex items-center justify-center"
                          style={{ boxShadow: `0 25px 60px -15px ${project.color}20` }}
                        >
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                              style={{ backgroundColor: `${project.color}20` }}
                            >
                              <svg className="w-10 h-10" style={{ color: project.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-white/40 text-sm">{data.title}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={`${!isEven ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: project.color }}>
                          {data.category}
                        </span>
                        <span className="text-white/20">.</span>
                        <span className="text-xs text-white/40">{t('portfolio.caseStudy')}</span>
                      </div>

                      <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.5rem] font-semibold text-white mb-6 leading-[1.1]">
                        {data.title}
                      </h2>

                      <p className="text-lg text-[#86868B] mb-8 leading-relaxed">
                        {data.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                        {Object.entries(data.metrics).map(([key, value]) => (
                          <div key={key} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                            <div className="text-xl font-semibold text-white mb-1">{value}</div>
                            <div className="text-xs text-white/40">{t(`portfolio.metrics.${key}`) || key}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {Array.isArray(data.technologies) && data.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="px-4 py-2 rounded-full text-sm text-white/60 border"
                            style={{ backgroundColor: `${project.color}08`, borderColor: `${project.color}20` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 font-medium transition-all duration-300"
                          style={{ color: project.color }}
                        >
                          <span>{t('workPage.visitSite')}</span>
                          <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{ borderColor: `${project.color}40` }}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </FadeInView>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkPage

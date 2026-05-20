import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

function Portfolio() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const projects = [
    {
      id: 1,
      titleKey: 'manybox',
      color: '#3B82F6',
      image: '/images/projects/ManyBoxWeb.png',
      link: 'https://manyboxenviox.com/'
    },
    {
      id: 2,
      titleKey: 'sistemacontable',
      color: '#22C55E',
      image: '/images/projects/sistemacontable.png'
    },
    {
      id: 3,
      titleKey: 'greenpos',
      color: '#A855F7',
      images: ['/images/projects/greenpos2.png', '/images/projects/greenpos.png']
    },
    {
      id: 5,
      titleKey: 'mediconnect',
      color: '#06B6D4',
      images: ['/images/projects/medicalapp2.png', '/images/projects/medicalapp.png']
    }
  ]

  const getProjectData = (key) => ({
    title: t(`portfolio.projects.${key}.title`),
    category: t(`portfolio.projects.${key}.category`),
    description: t(`portfolio.projects.${key}.description`),
    technologies: t(`portfolio.projects.${key}.tech`, { returnObjects: true }) || [],
    metrics: t(`portfolio.projects.${key}.metrics`, { returnObjects: true }) || {}
  })

  const renderMockup = (mockup, color) => {
    const baseClasses = "w-full h-full rounded-2xl overflow-hidden"
    
    switch (mockup.type) {
      case 'dashboard':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
            <div className="p-4 h-full flex flex-col gap-3">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl bg-white/5 p-3">
                  <div className="h-2 w-20 bg-white/20 rounded mb-3" />
                  <div className="flex gap-2 h-24 items-end">
                    {[60, 80, 45, 90, 70, 85, 55, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: `${color}40` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="h-2 w-12 bg-white/20 rounded mb-2" />
                  <div className="space-y-2">
                    <div className="h-6 rounded bg-white/10" />
                    <div className="h-6 rounded bg-white/10" />
                    <div className="h-6 rounded bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-12 rounded-lg bg-white/5" />
                ))}
              </div>
            </div>
          </div>
        )
      case 'mobile':
        return (
          <div className="flex justify-center items-center h-full">
            <div className="w-32 h-64 rounded-3xl border-4 border-white/20 bg-black/40 p-2 relative">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-white/10" />
              <div className="h-full rounded-2xl overflow-hidden" style={{ background: `linear-gradient(180deg, ${color}20, ${color}05)` }}>
                <div className="p-3 pt-8">
                  <div className="w-8 h-8 rounded-full mx-auto mb-3" style={{ backgroundColor: `${color}60` }} />
                  <div className="h-2 w-16 bg-white/30 rounded mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="h-8 rounded-lg bg-white/10" />
                    <div className="h-8 rounded-lg bg-white/10" />
                    <div className="h-8 rounded-lg" style={{ backgroundColor: `${color}40` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'analytics':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
            <div className="p-4 h-full flex flex-col gap-3">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="h-2 w-16 bg-white/20 rounded mb-3" />
                  <div className="relative h-20">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path d="M0,35 Q25,30 50,20 T100,10" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
                      <path d="M0,35 Q25,30 50,20 T100,10 V40 H0 Z" fill={color} opacity="0.1" />
                    </svg>
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="h-2 w-12 bg-white/20 rounded mb-3" />
                  <div className="grid grid-cols-3 gap-1 h-16">
                    {[40, 70, 50, 80, 30, 90].map((h, i) => (
                      <div key={i} className="rounded" style={{ height: `${h}%`, backgroundColor: `${color}30` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-16 rounded-xl bg-white/5 p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: `${color}30` }} />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                  <div className="h-2 w-32 bg-white/10 rounded" />
                </div>
                <div className="w-16 h-6 rounded" style={{ backgroundColor: `${color}40` }} />
              </div>
            </div>
          </div>
        )
      case 'ecommerce':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
            <div className="p-4 h-full flex flex-col gap-3">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: `${color}40` }} />
                <div className="h-2 w-24 bg-white/20 rounded" />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="rounded-xl bg-white/5 overflow-hidden">
                    <div className="h-16" style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)` }} />
                    <div className="p-2">
                      <div className="h-2 w-12 bg-white/20 rounded mb-1" />
                      <div className="h-2 w-8 bg-white/10 rounded" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="w-20 h-8 rounded-full" style={{ backgroundColor: `${color}50` }} />
              </div>
            </div>
          </div>
        )
      case 'platform':
        return (
          <div className={baseClasses} style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
            <div className="p-4 h-full flex flex-col gap-3">
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl" style={{ backgroundColor: `${color}40` }} />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                  <div className="h-2 w-32 bg-white/10 rounded" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white/5 p-2 col-span-2">
                  <div className="h-full rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }}>
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `${color}60` }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="space-y-2">
                    <div className="h-4 rounded bg-white/10" />
                    <div className="h-4 rounded bg-white/10" />
                    <div className="h-4 rounded bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-8 rounded-lg" style={{ backgroundColor: `${color}40` }} />
                <div className="w-20 h-8 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  function ProjectCard({ project, index }) {
    const cardRef = useRef(null)
    const data = getProjectData(project.titleKey)
    
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])

    const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })
    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

    const isEven = index % 2 === 0

    const handleViewProject = () => {
      if (project.link) {
        window.open(project.link, '_blank', 'noopener,noreferrer')
        return
      }
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const metricLabels = {
      users: t('portfolio.metrics.users'),
      uptime: t('portfolio.metrics.uptime'),
      reduction: t('portfolio.metrics.reduction'),
      downloads: t('portfolio.metrics.downloads'),
      transactions: t('portfolio.metrics.transactions'),
      rating: t('portfolio.metrics.rating'),
      predictions: t('portfolio.metrics.predictions'),
      latency: t('portfolio.metrics.latency'),
      teams: t('portfolio.metrics.teams'),
      revenue: t('portfolio.metrics.revenue'),
      conversion: t('portfolio.metrics.conversion'),
      countries: t('portfolio.metrics.countries'),
      consultations: t('portfolio.metrics.consultations'),
      doctors: t('portfolio.metrics.doctors'),
      satisfaction: t('portfolio.metrics.satisfaction')
    }

    return (
      <div ref={cardRef} className="min-h-[100vh] flex items-center py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
          
          <motion.div 
            style={{ y: smoothY, scale: smoothScale, opacity: smoothOpacity }}
            className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}
          >
            <div className={`relative rounded-3xl overflow-hidden ${project.image || project.images ? 'aspect-auto' : 'aspect-[16/10] bg-gradient-to-br from-[#1C1C1E] to-[#0A0A0A]'}`} style={project.image || project.images ? { boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)' } : {}}>
              {project.image ? (
                <img src={project.image} alt={data.title} className="w-full h-auto object-contain" />
              ) : project.images ? (
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`${data.title} ${i + 1}`} className="w-full h-auto object-contain" />
                  ))}
                </div>
              ) : (
                renderMockup(project.mockup, project.color)
              )}
            </div>
            <div 
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[80px] opacity-30"
              style={{ backgroundColor: project.color }}
            />
          </motion.div>

          <div className={!isEven ? 'lg:[direction:ltr]' : ''}>
            <FadeInView direction={isEven ? 'left' : 'right'}>
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: project.color }}
                >
                  {data.category}
                </span>
                <span className="text-white/20">.</span>
                <span className="text-xs text-white/40">{t('portfolio.caseStudy')}</span>
              </div>
              
              <h3 className="text-[2.5rem] sm:text-[3rem] font-semibold text-white mb-6 leading-[1.1]">
                {data.title}
              </h3>
              
              <p className="text-lg text-[#86868B] mb-8 leading-relaxed">
                {data.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {Object.entries(data.metrics).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-xl font-semibold text-white mb-1">{value}</div>
                    <div className="text-xs text-white/40">{metricLabels[key] || key}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {Array.isArray(data.technologies) && data.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/[0.04] text-sm text-white/60 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewProject}
                className="group inline-flex items-center gap-3 text-white font-medium"
              >
                <span>{t('portfolio.viewCaseStudy')}</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.button>
            </FadeInView>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="portfolio" ref={containerRef} className="bg-black relative">
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/[0.02] z-50">
        <motion.div 
          style={{ width: progressWidth }}
          className="h-full bg-[#0071E3]"
        />
      </div>

      <div className="section-container relative z-10 pt-32 pb-16">
        <FadeInView>
          <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-[#86868B] max-w-2xl mb-12">
            {t('portfolio.subtitle')}
          </p>
        </FadeInView>
      </div>

      <div className="section-container relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </section>
  )
}

export default Portfolio

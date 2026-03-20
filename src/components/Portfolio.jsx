import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeInView from './FadeInView'

const projects = [
  {
    id: 1,
    title: "EcoLogistics Pro",
    type: "desktop",
    description: "Plataforma SaaS para optimización de rutas y gestión de flotas con impacto ambiental reducido.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    color: "#3B82F6",
    imageColor: "bg-gradient-to-br from-blue-500/20 to-indigo-600/20",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "GreenPay App",
    type: "mobile",
    description: "Billetera digital enfocada en transacciones sostenibles y recompensas por consumo local.",
    technologies: ["React Native", "Firebase"],
    color: "#22C55E",
    imageColor: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "NeuralFlow AI",
    type: "desktop",
    description: "Dashboard inteligente para visualización de modelos de machine learning en tiempo real.",
    technologies: ["React", "Python", "TensorFlow"],
    color: "#A855F7",
    imageColor: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
    imageUrl: "https://images.unsplash.com/photo-1518186239751-c715b8f1bc2a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Posh de Chiapas",
    type: "mobile",
    description: "Experiencia e-commerce premium para el destilado ancestral más icónico del sureste.",
    technologies: ["Next.js", "Shopify API"],
    color: "#EF4444",
    imageColor: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
    imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
  }
]

const BrowserMockup = ({ imageUrl }) => (
  <div className="w-full h-full rounded-t-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col bg-[#1A1A1A]">
    <div className="h-8 bg-[#2A2A2A] flex items-center px-4 gap-2 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
      <div className="flex-1 max-w-[400px] h-5 bg-black/20 rounded-md mx-auto" />
    </div>
    <div className="flex-1 relative overflow-hidden group">
      <img 
        src={imageUrl} 
        alt="Project Mockup" 
        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  </div>
)

const MobileMockup = ({ imageUrl }) => (
  <div className="w-[240px] h-[480px] rounded-[2.5rem] border-[8px] border-[#2A2A2A] shadow-2xl bg-black relative overflow-hidden mx-auto group">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#2A2A2A] rounded-b-2xl z-20" />
    <img 
      src={imageUrl} 
      alt="Project Mockup" 
      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-black/10" />
  </div>
)

const ProjectItem = ({ project, index }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  const handleCaseStudy = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} className="min-h-[80vh] flex items-center py-20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
        
        <motion.div 
          style={{ y, scale }}
          className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
        >
          <div className="relative z-10">
            {project.type === 'desktop' ? (
              <BrowserMockup imageUrl={project.imageUrl} />
            ) : (
              <MobileMockup imageUrl={project.imageUrl} />
            )}
          </div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: project.color }}
          />
        </motion.div>

        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
          <FadeInView direction={index % 2 === 1 ? 'right' : 'left'}>
            <span 
              className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: project.color }}
            >
              0{index + 1} / Proyecto Destacado
            </span>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {project.title}
            </h3>
            <p className="text-text-muted text-lg mb-8 leading-relaxed max-w-xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {project.technologies.map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-white/60">
                  {tech}
                </span>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCaseStudy}
              className="group flex items-center gap-3 text-white font-bold"
            >
              <span>Ver Estudio de Caso</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.button>
          </FadeInView>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="mb-20">
          <FadeInView>
            <h2 className="heading-lg text-white mb-8">
              Donde el código se vuelve <br />
              <span className="text-gradient-blue font-bold">Experiencia Humana.</span>
            </h2>
          </FadeInView>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </section>
  )
}

export default Portfolio

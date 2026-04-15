import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const techLogos = {
  React: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
  'Next.js': "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg",
  TypeScript: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg",
  Tailwind: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg",
  Framer: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg",
  'Node.js': "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg",
  Go: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/go.svg",
  Python: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg",
  Java: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openjdk.svg",
  'C#': "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/csharp.svg",
  Rust: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/rust.svg",
  'C/C++': "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cplusplus.svg",
  Flutter: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/flutter.svg",
  Kotlin: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/kotlin.svg",
  'React Native': "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
  Swift: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/swift.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg",
  MongoDB: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg",
  MySQL: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg",
  Firebase: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg",
  Redis: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/redis.svg",
  Docker: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg",
  Kubernetes: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/kubernetes.svg",
  Linux: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linux.svg",
  Git: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg",
  AWS: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonaws.svg",
  n8n: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/n8n.svg",
  Zapier: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/zapier.svg",
  OpenAI: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg",
  'Python ML': "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pytorch.svg",
  LangChain: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/langchain.svg",
}

const allTechs = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Framer', color: '#0055FF' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'C#', color: '#512BD4' },
  { name: 'Rust', color: '#DEA584' },
  { name: 'C/C++', color: '#A8B9CC' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Kotlin', color: '#7F52FF' },
  { name: 'React Native', color: '#61DAFB' },
  { name: 'Swift', color: '#F05138' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'Git', color: '#F05032' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'n8n', color: '#FF6D5A' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'OpenAI', color: '#412991' },
  { name: 'Python ML', color: '#3776AB' },
  { name: 'LangChain', color: '#1C3C3C' },
]

function TechItem({ tech, isHovered }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm min-w-[140px]">
      <img 
        src={techLogos[tech.name]} 
        alt={tech.name}
        className="w-8 h-8 object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      <div 
        className="w-8 h-8 hidden items-center justify-center rounded-lg text-sm font-bold"
        style={{ backgroundColor: `${tech.color}30`, color: tech.color }}
      >
        {tech.name.charAt(0)}
      </div>
      <span className="text-sm text-white/70 font-medium whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

function TechRow({ techs, direction = 1, speed = 40 }) {
  const duplicatedTechs = [...techs, ...techs, ...techs]
  
  return (
    <motion.div 
      className="flex gap-4"
      animate={{ 
        x: direction === 1 ? ['0%', '-33.333%'] : ['-33.333%', '0%']
      }}
      transition={{ 
        x: { 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear"
        }
      }}
    >
      {duplicatedTechs.map((tech, index) => (
        <TechItem key={`${tech.name}-${index}`} tech={tech} />
      ))}
    </motion.div>
  )
}

function TechStack() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const row1 = allTechs.slice(0, 16)
  const row2 = allTechs.slice(16)

  return (
    <section id="techstack" ref={containerRef} className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[80px]" />
      </motion.div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('techstack.badge')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6">
              {t('techstack.title')}
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              {t('techstack.subtitle')}
            </p>
          </FadeInView>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex flex-col gap-6 overflow-hidden py-4"
            onMouseEnter={() => document.querySelectorAll('.tech-row').forEach(el => el.style.animationPlayState = 'paused')}
            onMouseLeave={() => document.querySelectorAll('.tech-row').forEach(el => el.style.animationPlayState = 'running')}
          >
            <div className="tech-row">
              <TechRow techs={row1} direction={1} speed={50} />
            </div>
            <div className="tech-row">
              <TechRow techs={row2} direction={-1} speed={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
import { motion } from 'framer-motion'
import FadeInView from './FadeInView'

const STATS = [
  { label: 'Proyectos Entregados', value: '50+', suffix: '' },
  { label: 'Líneas de Código', value: '1M', suffix: '+' },
  { label: 'Retención de Clientes', value: '98', suffix: '%' },
  { label: 'Países Impactados', value: '12', suffix: '' },
]

const PILLARS = [
  {
    title: 'Ingeniería de Élite',
    description: 'Arquitecturas robustas diseñadas para escalar masivamente sin comprometer la velocidad.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-blue-500/20 to-transparent'
  },
  {
    title: 'Diseño Sensorial',
    description: 'Interfaces que no solo se ven bien, sino que se sienten naturales y fluidas al tacto y la vista.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'from-primary/20 to-transparent'
  },
  {
    title: 'IA Adaptativa',
    description: 'Integramos modelos de inteligencia artificial que evolucionan con las necesidades de tu negocio.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-purple-500/20 to-transparent'
  }
]

// High-fidelity original SVG icons
const ICONS = {
  react: <path fill="#61DAFB" d="M24 16c0-2.88-1.44-5.28-3.6-6.48 2.16-1.2 3.6-3.6 3.6-6.48 0-4.32-3.36-7.68-7.68-7.68-2.88 0-5.28 1.44-6.48 3.6-1.2-2.16-3.6-3.6-6.48-3.6-4.32 0-7.68 3.36-7.68 7.68 0 2.88 1.44 5.28 3.6 6.48-2.16 1.2-3.6 3.6-3.6 6.48 0 4.32 3.36 7.68 7.68 7.68 2.88 0 5.28-1.44 6.48-3.6 1.2 2.16 3.6 3.6 6.48 3.6 4.32 0 7.68-3.36 7.68-7.68zm-7.68 5.76c-1.2 0-2.4-.24-3.36-.72.96-1.44 1.44-3.12 1.44-4.8s-.48-3.36-1.44-4.8c.96-.48 2.16-.72 3.36-.72 3.36 0 5.76 2.4 5.76 5.76s-2.4 5.76-5.76 5.76zm-6.24-11.52c-1.2 0-2.4.24-3.36.72-.96 1.44-1.44 3.12-1.44 4.8s.48 3.36 1.44 4.8c.96.48 2.16.72 3.36.72 3.36 0 5.76-2.4 5.76-5.76s-2.4-5.76-5.76-5.76zM1.92 4.56c0-3.36 2.4-5.76 5.76-5.76 1.2 0 2.4.24 3.36.72-.96 1.44-1.44 3.12-1.44 4.8s.48 3.36 1.44 4.8c-.96.48-2.16.72-3.36.72-3.36 0-5.76-2.4-5.76-5.76zm5.76 15.12c-3.36 0-5.76-2.4-5.76-5.76 0-1.2.24-2.4.72-3.36 1.44.96 3.12 1.44 4.8 1.44s3.36-.48 4.8-1.44c.48.96.72 2.16.72 3.36 0 3.36-2.4 5.76-5.76 5.76zm11.52 0c-1.2 0-2.4-.24-3.36-.72.96-1.44 1.44-3.12 1.44-4.8s-.48-3.36-1.44-4.8c.96-.48 2.16-.72 3.36-.72 3.36 0 5.76 2.4 5.76 5.76s-2.4 5.76-5.76 5.76z"/>,
  typescript: <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111v2.111c-.473-.074-.975-.111-1.504-.111-1.252 0-1.909.419-1.909 1.57v1.999h3.411v2.121h-3.411V22h-2.398v-4.561H11.12v-2.121h1.189v-2.148c0-2.581 1.626-4.42 4.279-4.42h1.9zm-13.438.111h2.398V22H5.05V9.861zM6.254 6.703a1.53 1.53 0 0 1 1.527 1.527 1.53 1.53 0 0 1-1.527 1.527 1.53 1.53 0 0 1-1.527-1.527 1.53 1.53 0 0 1 1.527-1.527z"/>,
  nextjs: <path fill="#fff" d="M18.663 12.213L11.312 3H9.375v18h2.062V7.461l7.43 9.339c.49-.153.94-.37 1.346-.64zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0z"/>,
  tailwind: <path fill="#06B6D4" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>,
  nodejs: <path fill="#339933" d="M14.9 15.345c.022.014.043.03.064.047a2.502 2.502 0 0 1-3.204 3.75 2.496 2.496 0 0 1-1.07-2.052l-1.07-2.052a4.502 4.502 0 1 0 5.28 0l-1.07 2.052a2.492 2.492 0 0 1-1.07 2.052zM12 2L2 7.74v11.52L12 25l10-5.74V7.74L12 2zm8 15.82l-8 4.6-8-4.6V8.18l8-4.6 8 4.6v9.64z"/>,
  python: <path fill="#3776AB" d="M11.91 0c-3.3 0-3.09 1.43-3.09 1.43l.01 1.48h3.14V3.3c0-.2 0-.36-.01-.48-.02-.38-.2-.73-.48-.96-.28-.24-.65-.36-1.03-.36H6.1c-.38 0-.75.12-1.03.36-.28.24-.46.59-.48.96 0 .1 0 .22.01.48l.01 2.37c0 .24-.1.47-.28.63-.17.17-.4.26-.64.26H1.43S0 7.37 0 10.65c0 3.28 1.43 3.09 1.43 3.09h1.48v-3.14h.41c.2 0 .36 0 .48.01.38.02.73.2.96.48.24.28.36.65.36 1.03v4.35c0 .38-.12.75-.36 1.03-.24.28-.59.46-.96.48-.1 0-.22 0-.48-.01H1.47c-.24 0-.47.1-.63.28-.17.17-.26.4-.26.64l.01 2.24s.21 1.43 3.5 1.43c3.28 0 3.09-1.43 3.09-1.43v-1.48H4.04V20.7c0 .2 0 .36.01.48.02.38.2.73.48.96.28.24.65.36 1.03.36h4.35c.38 0 .75-.12 1.03-.36.28-.24.46-.59.48-.96 0-.1 0-.22-.01-.48v-2.37c0-.24.1-.47.28-.63.17-.17.4-.26.64-.26h2.24s1.43.21 1.43-3.06c0-3.28-1.43-3.09-1.43-3.09h-1.48v3.14h-.41c-.2 0-.36 0-.48-.01-.38-.02-.73-.2-.96-.48-.24-.28-.36-.65-.36-1.03V8.85c0-.38.12-.75.36-1.03.24-.28.59-.46.96-.48.1 0 .22 0 .48.01h2.24c.24 0 .47-.1.63-.28.17-.17.26-.4.26-.64v-2.24s-.21-1.43-3.5-1.43zM8.83 2.05a.73.73 0 0 1 .73.73.73.73 0 0 1-.73.73.73.73 0 0 1-.73-.73.73.73 0 0 1 .73-.73zm6.34 19.9a.73.73 0 0 1 .73.73.73.73 0 0 1-.73.73.73.73 0 0 1-.73-.73.73.73 0 0 1 .73-.73z"/>,
  docker: <path fill="#2496ED" d="M13.983 11.078h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185h-2.119a.185.185 0 0 1-.185-.185v-2.119c0-.101.084-.185.185-.185zM11.201 11.078h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185h-2.119a.185.185 0 0 1-.185-.185v-2.119c0-.101.084-.185.185-.185zM8.42 11.078h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185H8.42a.185.185 0 0 1-.185-.185v-2.119c0-.101.084-.185.185-.185zM8.42 8.297h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185H8.42a.185.185 0 0 1-.185-.185V8.482c0-.101.084-.185.185-.185zM13.983 8.297h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185h-2.119a.185.185 0 0 1-.185-.185V8.482c0-.101.084-.185.185-.185zM16.765 11.078h2.118c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185h-2.118a.185.185 0 0 1-.185-.185v-2.119c0-.101.084-.185.185-.185zM11.201 8.297h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185h-2.119a.185.185 0 0 1-.185-.185V8.482c0-.101.084-.185.185-.185zM5.637 11.078h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185H5.637a.185.185 0 0 1-.185-.185v-2.119c0-.101.084-.185.185-.185zM2.856 11.078h2.119c.102 0 .186.084.186.185v2.119c0 .102-.084.185-.186.185H2.856a.185.185 0 0 1-.185-.185v-2.119c0-.101.084-.185.185-.185zM24 12.308c0-3.165-2.533-5.733-5.658-5.733-.091 0-.179.002-.266.006.012-.06.017-.12.017-.181V4.542c0-.263-.213-.477-.477-.477h-3.34c-.263 0-.477.214-.477.477v1.841c0 .263.214.477.477.477h2.386v.928c0 .02.003.039.005.058-2.339.356-4.137 2.347-4.137 4.759 0 .263.213.477.476.477h1.336c.263 0 .477-.214.477-.477 0-1.424 1.154-2.578 2.578-2.578.11 0 .219.007.327.02.02.301.03.606.03.913 0 5.441-4.411 9.852-9.852 9.852-1.338 0-2.61-.267-3.773-.751-.153-.064-.326-.038-.452.068l-.82.686c-.22.184-.543.15-.722-.075l-.14-.176a.476.476 0 0 1 .054-.627l1.016-.85c.13-.109.176-.286.113-.446C1.42 16.51 0 14.331 0 11.939c0-3.341 2.718-6.059 6.059-6.059 1.114 0 2.155.302 3.045.825.176.104.398.077.545-.065l.332-.321a.475.475 0 0 1 .665 0l.333.321c.147.142.369.169.545.065 1.127-.665 2.443-1.054 3.844-1.054 4.09 0 7.406 3.316 7.406 7.406 0 .445-.039.88-.115 1.302-.047.262.155.498.421.498h1.12c.263 0 .477-.214.477-.477 0-.012-.001-.023-.001-.035C24 12.346 24 12.327 24 12.308z"/>,
  aws: <path fill="#FF9900" d="M12.012 3.14c-1.393.003-2.736.31-3.953.905-.333.161-.303.642.046.758.261.087.521.182.775.282.162.064.343.013.447-.123.82-.1.081.282 2.685.282 2.012 0 4.024 1.134 4.024 3.375 0 1.25-.662 2.375-1.75 3-1.012.581-2.425.819-3.75.819-1.212 0-2.438-.119-3.538-.5-.3-.105-.592-.005-.733.262-.122.23-.24.464-.35.702-.148.318.064.676.401.765 1.343.354 2.825.533 4.22.533 2.15 0 4.312-.456 6-1.812 1.55-1.25 2.225-3.088 2.225-5.063 0-2.125-.75-3.95-2.225-5.325-1.575-1.463-3.725-2.063-6.024-2.063zm-9.043 14.8c-.287.168-.135.597.163.483 1.954-.753 5.432-.984 7.644-.984 2.128 0 4.256.331 6.224.965.305.097.439-.328.156-.49-2.112-1.216-4.661-1.83-7.234-1.83-2.483 0-5.011.597-6.953 1.856zm15.42 1.396c-.347.162-.48.56-.151.815.112.087.271.127.424.127.262 0 .5-.121.644-.326l.163-.23c.311-.439-.02-.917-.468-.917-.225 0-.447.13-.612.531z"/>,
  mongodb: <path fill="#47A248" d="M11.996 0C8.125 0 5 3.35 5 7.484c0 1.83.606 3.516 1.63 4.884L12 24l5.37-11.632c1.024-1.368 1.63-3.054 1.63-4.884C19 3.35 15.875 0 11.996 0zm0 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>,
  postgresql: <path fill="#336791" d="M12.001 0c-4.603 0-8.334 3.731-8.334 8.334 0 3.372 2.003 6.275 4.887 7.568l-1.012 2.531a.501.501 0 0 0 .93.372l1.012-2.531c.49.117.999.177 1.517.177 4.603 0 8.334-3.731 8.334-8.334S16.604 0 12.001 0z"/>,
  redis: <path fill="#DC382D" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>,
  framer: <path fill="#0055FF" d="M0 0h24v12l-12 12V12H0z"/>,
}

const ROW1 = [
  { name: 'React', icon: ICONS.react },
  { name: 'TypeScript', icon: ICONS.typescript },
  { name: 'Next.js', icon: ICONS.nextjs },
  { name: 'Tailwind', icon: ICONS.tailwind },
  { name: 'Node.js', icon: ICONS.nodejs },
  { name: 'Framer', icon: ICONS.framer },
]

const ROW2 = [
  { name: 'Python', icon: ICONS.python },
  { name: 'Docker', icon: ICONS.docker },
  { name: 'AWS', icon: ICONS.aws },
  { name: 'PostgreSQL', icon: ICONS.postgresql },
  { name: 'MongoDB', icon: ICONS.mongodb },
  { name: 'Redis', icon: ICONS.redis },
]

const TechBanner = ({ items, direction = 1, speed = 35 }) => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: direction > 0 ? 0 : "-50%" }}
          animate={{ x: direction > 0 ? "-50%" : 0 }}
          transition={{ 
            duration: speed, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 items-center px-8"
        >
          {[...items, ...items, ...items, ...items].map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              className="flex items-center gap-4 group px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
                {tech.icon}
              </svg>
              <span className="text-xl font-display font-bold text-white/40 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const TechCard = ({ title, icon, items, className = "" }) => (
  <div className={`glass p-8 rounded-[2rem] ${className} hover-card border border-white/5`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="text-primary">{icon}</div>
      <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span 
          key={item} 
          className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-text-muted hover:text-white hover:bg-white/10 transition-colors cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)

function TrustBridge() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {STATS.map((stat, index) => (
            <FadeInView key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <span className="text-gradient-blue">{stat.value}</span>
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-text-muted text-sm uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Core Pillars - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {PILLARS.map((pillar, index) => (
            <FadeInView key={pillar.title} delay={0.2 + (index * 0.1)}>
              <div className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${pillar.color} border border-white/5 hover:border-white/10 transition-all duration-500 group h-full`}>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Integrated Tech Section */}
        <div className="mb-20 text-center">
          <FadeInView>
            <h2 className="heading-lg text-white mb-6">
              Impulsado por <span className="text-gradient-blue font-bold">Tecnología de Élite.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Utilizamos los estándares más altos de la industria para construir soluciones que definen el futuro.
            </p>
          </FadeInView>
        </div>

        {/* Opposite Scrolling Banners */}
        <div className="flex flex-col gap-4 mb-24 relative">
          <TechBanner items={ROW1} direction={1} speed={35} />
          <TechBanner items={ROW2} direction={-1} speed={40} />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>

        {/* Tech Ecosystem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <FadeInView className="md:col-span-4" delay={0.1}>
            <TechCard 
              title="Ecosistema Frontend"  
              className="h-full bg-gradient-to-br from-white/5 to-transparent"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              items={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Vite']} 
            />
          </FadeInView>
          <FadeInView className="md:col-span-2" delay={0.2}>
            <TechCard 
              title="Móvil"  
              className="h-full"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              items={['React Native', 'Flutter', 'iOS', 'Android']} 
            />
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

export default TrustBridge

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

const socialIcons = {
  twitter: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  dribbble: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
    </svg>
  ),
}

function Team() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-2%'])

  const team = [
    {
      name: t('team.members.alejandro.name'),
      role: t('team.members.alejandro.role'),
      bio: t('team.members.alejandro.bio'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      socials: { twitter: "#" }
    },
    {
      name: t('team.members.maria.name'),
      role: t('team.members.maria.role'),
      bio: t('team.members.maria.bio'),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      socials: { github: "#" }
    },
    {
      name: t('team.members.carlos.name'),
      role: t('team.members.carlos.role'),
      bio: t('team.members.carlos.bio'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      socials: { dribbble: "#" }
    },
    {
      name: t('team.members.isabella.name'),
      role: t('team.members.isabella.role'),
      bio: t('team.members.isabella.bio'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      socials: { github: "#" }
    },
    {
      name: t('team.members.diego.name'),
      role: t('team.members.diego.role'),
      bio: t('team.members.diego.bio'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      socials: { github: "#" }
    },
    {
      name: t('team.members.sofia.name'),
      role: t('team.members.sofia.role'),
      bio: t('team.members.sofia.bio'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      socials: { twitter: "#" }
    },
  ]

  return (
    <section id="team" ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('team.label')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6">
              {t('team.title.prefix')} <span className="text-[#86868B]">{t('team.title.suffix')}</span>
            </h2>
            <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
              {t('team.description')}
            </p>
          </FadeInView>
        </div>

        <motion.div style={{ x }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <FadeInView key={member.name} delay={index * 0.1}>
              <div className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-[#0071E3]">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[#86868B] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  {Object.entries(member.socials).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url}
                      className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                    >
                      {socialIcons[platform]}
                    </a>
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team

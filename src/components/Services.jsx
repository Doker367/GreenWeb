import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import FadeInView from './FadeInView'

const services = [
  {
    title: "Desarrollo Web",
    subtitle: "Sitios de alto rendimiento",
    description: "Aplicaciones web personalizadas construidas con React y Next.js. Rápidas, optimizadas para SEO y escalables.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ["E-commerce", "Plataformas SaaS", "Landing Pages", "Dashboards"]
  },
  {
    title: "Apps Móviles",
    subtitle: "iOS & Android",
    description: "Experiencias móviles de calidad nativa usando Flutter y React Native. Una base de código, dos plataformas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ["Multiplataforma", "Sin conexión", "Notificaciones Push", "GPS"]
  },
  {
    title: "Automatizaciones n8n",
    subtitle: "Workflow Efficiency",
    description: "Optimizamos tus procesos de negocio conectando herramientas y automatizando tareas repetitivas con n8n.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["Workflows Complejos", "Integración de APIs", "Webhooks", "Sincronización"]
  },
  {
    title: "Mantenimiento Experto",
    subtitle: "Continuidad y Evolución",
    description: "Nos encargamos de que tu software se mantenga seguro y evolucione con tu negocio.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ["Updates de seguridad", "Corrección de bugs", "Nuevas funcionalidades", "Monitoreo de uptime"]
  },
  {
    title: "Hosting Administrado",
    subtitle: "Infraestructura GreenAlgorithm",
    description: "Nosotros nos encargamos de todo el despliegue y la administración técnica de tus servidores.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: ["Administración total", "Certificados SSL", "Backups automáticos", "CDN de alta velocidad"]
  },
  {
    title: "Ciberseguridad",
    subtitle: "Protección y Cumplimiento",
    description: "Auditorías de seguridad completas e implementación para salvaguardar tus activos digitales.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    features: ["Pruebas de Penetración", "Auditorías de Seguridad", "Encriptación de Datos", "Cumplimiento"]
  },
]

function Services() {
  return (
    <section id="services" className="section-padding bg-black relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <FadeInView>
            <h2 className="heading-lg text-white mb-6">
              Nuestra <span className="text-gradient-blue">Experiencia.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Soluciones especializadas adaptadas a los desafíos específicos de cada industria.
            </p>
          </FadeInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeInView key={service.title} delay={index * 0.1}>
              <div className="glass p-8 rounded-3xl h-full hover-card group cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider border border-white/10 px-3 py-1 rounded-full">
                    {service.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="border-t border-white/5 pt-6">
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
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
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'

function Testimonials() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  const testimonials = [
    {
      id: 1,
      quote: t('testimonials.items.roberto.quote'),
      author: t('testimonials.items.roberto.author'),
      role: t('testimonials.items.roberto.role'),
      company: t('testimonials.items.roberto.company'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      id: 2,
      quote: t('testimonials.items.carolina.quote'),
      author: t('testimonials.items.carolina.author'),
      role: t('testimonials.items.carolina.role'),
      company: t('testimonials.items.carolina.company'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      id: 3,
      quote: t('testimonials.items.james.quote'),
      author: t('testimonials.items.james.author'),
      role: t('testimonials.items.james.role'),
      company: t('testimonials.items.james.company'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      id: 4,
      quote: t('testimonials.items.gabriel.quote'),
      author: t('testimonials.items.gabriel.author'),
      role: t('testimonials.items.gabriel.role'),
      company: t('testimonials.items.gabriel.company'),
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      id: 5,
      quote: t('testimonials.items.patricia.quote'),
      author: t('testimonials.items.patricia.author'),
      role: t('testimonials.items.patricia.role'),
      company: t('testimonials.items.patricia.company'),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={containerRef} className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('testimonials.label')}
            </span>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] font-semibold tracking-tight text-white mb-6">
              {t('testimonials.title.prefix')} <span className="text-[#86868B]">{t('testimonials.title.suffix')}</span>
            </h2>
          </FadeInView>
        </div>

        <motion.div style={{ x }} className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
              <svg className="absolute top-8 left-8 w-12 h-12 text-white/[0.05]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="pt-8"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl sm:text-2xl text-white leading-relaxed mb-8 font-light">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-sm text-[#86868B]">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/[0.06]">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-[#0071E3] w-8' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeInView>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="text-lg font-semibold text-white/20 hover:text-white/40 transition-colors cursor-default"
            >
              {t.company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

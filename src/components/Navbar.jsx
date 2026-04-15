import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.work'), href: '#portfolio' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0071E3] flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">GreenAlgorithm</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => toggleLanguage('es')}
                  className={`text-lg transition-opacity ${i18n.language === 'es' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  aria-label="Español"
                >
                  🇲🇽
                </button>
                <button 
                  onClick={() => toggleLanguage('en')}
                  className={`text-lg transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  aria-label="English"
                >
                  🇺🇸
                </button>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-white/[0.06] text-white text-sm font-medium hover:bg-white/[0.1] transition-all duration-300 border border-white/[0.06]"
              >
                {t('nav.getStarted')}
              </a>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => toggleLanguage('es')}
                  className={`text-base transition-opacity ${i18n.language === 'es' ? 'opacity-100' : 'opacity-40'}`}
                >
                  🇲🇽
                </button>
                <button 
                  onClick={() => toggleLanguage('en')}
                  className={`text-base transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-40'}`}
                >
                  🇺🇸
                </button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center"
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-semibold text-white hover:text-[#0071E3] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-full bg-[#0071E3] text-white font-medium text-lg"
              >
                {t('nav.getStarted')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

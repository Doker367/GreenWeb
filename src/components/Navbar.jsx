import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Navbar({ currentView, onNavigate, onGoHome }) {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isHome = currentView === 'home'

  const navLinks = [
    { name: t('nav.home'), view: 'home' },
    { name: t('nav.services'), view: 'services' },
    { name: t('nav.work'), view: 'work' },
    { name: t('nav.about'), view: 'about' },
    { name: t('nav.blog'), view: 'blog' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = (lang) => i18n.changeLanguage(lang)

  const handleNav = (view) => {
    if (view === 'home') {
      onGoHome()
    } else {
      onNavigate(view)
    }
    setIsMobileMenuOpen(false)
  }

  const handleContact = () => {
    if (!isHome) {
      onGoHome()
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-3 start-24 z-50 transition-all duration-700 w-[calc(100%-6rem)] max-w-[900px] rounded-2xl overflow-hidden ${
          isScrolled || !isHome
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/50' 
            : 'bg-transparent'
        }`}
      >
        {/* Gradient accent line at top */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-800/50 via-purple-600/30 to-purple-800/50"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Subtle radial glow behind logo area */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-full bg-gradient-to-r from-purple-950/20 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-72 h-full bg-gradient-to-l from-purple-950/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            <button onClick={onGoHome} className="flex items-center gap-4 group">
              {/* Logo container with glow */}
              <div className="relative">
                <motion.div 
                  className="absolute -inset-2 rounded-xl bg-gradient-to-br from-green-500/15 to-purple-500/15 blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <img 
                  src="/images/logo.png" 
                  alt="GreenAlgorithm" 
                  className="relative h-12 w-auto sm:h-16 object-contain" 
                />
              </div>
              <span className="hidden sm:inline nav-brand">
                <span className="text-green-500">GREEN</span>{' '}
                <span className="text-purple-500 italic">ALGORITHM</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentView === link.view
                return (
                  <button
                    key={link.view}
                    onClick={() => handleNav(link.view)}
                    className="relative px-4 py-2 text-sm transition-colors duration-300 rounded-full"
                    style={{
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                      backgroundColor: isActive ? 'rgba(0, 113, 227, 0.15)' : 'transparent',
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[#0071E3]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
              <button
                onClick={handleContact}
                className="relative px-4 py-2 text-sm transition-colors duration-300 rounded-full text-white/50 hover:text-white"
              >
                {t('nav.contact')}
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => toggleLanguage('es')} className={`text-lg transition-opacity ${i18n.language === 'es' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`} aria-label="Español">🇲🇽</button>
                <button onClick={() => toggleLanguage('en')} className={`text-lg transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`} aria-label="English">🇺🇸</button>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <div className="flex items-center gap-1">
                <button onClick={() => toggleLanguage('es')} className={`text-base transition-opacity ${i18n.language === 'es' ? 'opacity-100' : 'opacity-40'}`}>🇲🇽</button>
                <button onClick={() => toggleLanguage('en')} className={`text-base transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-40'}`}>🇺🇸</button>
              </div>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, index) => {
                const isActive = currentView === link.view
                return (
                  <motion.button
                    key={link.view}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleNav(link.view)}
                    className="text-2xl font-semibold transition-colors"
                    style={{ color: isActive ? '#0071E3' : '#fff' }}
                  >
                    {link.name}
                  </motion.button>
                )
              })}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleContact}
                className="text-2xl font-semibold text-white hover:text-[#0071E3] transition-colors"
              >
                {t('nav.contact')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

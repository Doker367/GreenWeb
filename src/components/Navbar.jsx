import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'Sobre Nosotros' },
  { href: '#services', label: 'Servicios' },
  { href: '#tech', label: 'Tecnología' },
  { href: '#why', label: 'Por Qué' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
          className={`
            relative flex items-center justify-between px-6 py-3 
            rounded-full transition-all duration-500 ease-out
            ${isMobileOpen ? 'bg-black/90 w-full max-w-sm flex-col items-start gap-4 p-6' : 'glass-dark w-full max-w-5xl'}
            ${isScrolled && !isMobileOpen ? 'shadow-2xl shadow-black/50 backdrop-blur-2xl bg-black/60' : ''}
          `}
        >
          <div className="flex items-center justify-between w-full">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-display font-medium text-white tracking-tight">GreenAlgorithm</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 ml-auto mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="btn-primary text-xs px-5 py-2.5"
              >
                Contacto
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isMobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full md:hidden overflow-hidden flex flex-col gap-2 pt-2"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-primary hover:text-white hover:bg-primary rounded-xl transition-all text-center mt-2 font-medium"
                >
                  Contacto
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar

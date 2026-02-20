import { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'Sobre Nosotros' },
  { href: '#services', label: 'Servicios' },
  { href: '#tech', label: 'Tecnología' },
  { href: '#why', label: 'Por Qué Nosotros' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  // Cerrar menú al hacer resize a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const toggleMobile = useCallback(() => {
    setIsMobileOpen(prev => !prev)
  }, [])

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false)
  }, [])

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  }

  const mobileLinkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'bg-[#0a1120]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)] border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="section-container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="text-xl sm:text-2xl font-heading font-bold cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="GreenAlgorithm - Ir al inicio"
            onClick={closeMobile}
          >
            <span className="text-white">Green</span>
            <span className="text-cta">Algorithm</span>
          </motion.a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-[0.9rem] font-medium text-white/70 hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm px-5 py-2.5 rounded-full glow-effect-hover"
            >
              Contacto
            </a>
          </div>

          {/* Mobile hamburger / close button */}
          <button
            className="md:hidden text-white cursor-pointer p-2 -mr-2 relative z-50"
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobile}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="block h-0.5 w-6 bg-current rounded-full origin-center"
                animate={isMobileOpen
                  ? { rotate: 45, y: 9 }
                  : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-current rounded-full"
                animate={isMobileOpen
                  ? { opacity: 0, x: -20 }
                  : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-current rounded-full origin-center"
                animate={isMobileOpen
                  ? { rotate: -45, y: -9 }
                  : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="md:hidden absolute top-full left-0 right-0 bg-[#0a1120]/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileLinkVariants}
                  className="text-white/70 hover:text-white py-3 px-4 rounded-lg hover:bg-white/[0.06] transition-all duration-200 text-lg font-body"
                  onClick={closeMobile}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={mobileLinkVariants}
                className="btn-primary text-center mt-4 rounded-full glow-effect-hover"
                onClick={closeMobile}
              >
                Contacto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

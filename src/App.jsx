import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import WhyGreenAlgorithm from './components/WhyGreenAlgorithm'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import PageLoader from './components/PageLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.style.colorScheme = 'dark'
    
    // Simulate minimum loading time for smooth animation
    const minLoadTime = 2000
    const startTime = Date.now()

    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minLoadTime - elapsed)
      
      setTimeout(() => {
        setIsLoading(false)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      <PageLoader isLoading={isLoading} onLoadComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-background noise-texture relative">
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Services />
            <TechStack />
            <WhyGreenAlgorithm />
            <CallToAction />
          </main>
          <footer className="bg-primary/50 backdrop-blur-sm py-8 relative z-10">
            <div className="section-container">
              <p className="text-center text-text/60 text-sm">
                © {new Date().getFullYear()} GreenAlgorithm. Todos los derechos reservados.
              </p>
              <p className="text-center text-text/40 text-xs mt-2">
                Tuxtla Gutiérrez, Chiapas, México
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import TrustBridge from './components/TrustBridge'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Services from './components/Services'
import FAQ from './components/FAQ'
import WhyGreenAlgorithm from './components/WhyGreenAlgorithm'
import CallToAction from './components/CallToAction'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <PageLoader isLoading={isLoading} onLoadComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-black relative selection:bg-primary/30 text-text overflow-x-hidden">
          <Navbar />
          <main className="relative z-10 flex flex-col gap-0">
            <Hero />
            <TrustBridge />
            <About />
            <Services />
            <Portfolio />
            <Process />
            <WhyGreenAlgorithm />
            <FAQ />
            <CallToAction />
            <ContactSection />
          </main>
          
          <footer className="bg-surface/50 border-t border-white/5 py-12 relative z-10">
            <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-text-muted">
                  © {new Date().getFullYear()} GreenAlgorithm. Todos los derechos reservados.
                </p>
                <p className="text-xs text-text-muted/60 mt-1">
                  Tuxtla Gutiérrez, Chiapas, México
                </p>
              </div>
              <div className="flex gap-6">
                <a href="https://www.facebook.com/profile.php?id=61587251265634" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors text-sm">Facebook</a>
                <a href="https://www.instagram.com/green_algorithm_/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors text-sm">Instagram</a>
                <a href="https://wa.me/529214380943" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors text-sm">WhatsApp</a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default App

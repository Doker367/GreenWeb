import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import WhyGreenAlgorithm from './components/WhyGreenAlgorithm'
import CallToAction from './components/CallToAction'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  useEffect(() => {
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  return (
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
        </div>
      </footer>
    </div>
  )
}

export default App

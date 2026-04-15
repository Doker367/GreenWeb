import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <PageLoader isLoading={isLoading} onLoadComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-black relative selection:bg-[#0071E3]/30 text-white overflow-x-hidden">
          <Navbar />
          <main className="relative z-10 flex flex-col">
            <Hero />
            <Stats />
            <About />
            <Services />
            <TechStack />
            <Portfolio />
            <Process />
            <Testimonials />
            <CallToAction />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

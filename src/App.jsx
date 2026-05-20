import { useEffect, useState, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyGreenAlgorithm from './components/WhyGreenAlgorithm'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

const WorkPage = lazy(() => import('./components/WorkPage'))
const ServicesPage = lazy(() => import('./components/ServicesPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const BlogPage = lazy(() => import('./components/BlogPage'))

function PageFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#0071E3] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [view, setView] = useState('home')

  const navigateTo = (page) => {
    setView(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const goHome = () => navigateTo('home')

  return (
    <>
      <PageLoader isLoading={isLoading} onLoadComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-black relative selection:bg-[#0071E3]/30 text-white overflow-x-hidden">
          <Navbar currentView={view} onNavigate={navigateTo} onGoHome={goHome} />
          
          {view === 'home' && (
            <>
              <main className="relative z-10 flex flex-col">
                <Hero />
                <Stats />
                <WhyGreenAlgorithm />
                <About />
                <Services />
                <TechStack />
                <Portfolio />
                <Process />
                <Testimonials />
                <FAQ />
                <CallToAction />
                <ContactSection />
              </main>
              <Footer />
            </>
          )}
          {view === 'work' && (
            <Suspense fallback={<PageFallback />}>
              <WorkPage />
            </Suspense>
          )}
          {view === 'services' && (
            <Suspense fallback={<PageFallback />}>
              <ServicesPage onNavigate={navigateTo} />
            </Suspense>
          )}
          {view === 'about' && (
            <Suspense fallback={<PageFallback />}>
              <AboutPage />
            </Suspense>
          )}
          {view === 'blog' && (
            <Suspense fallback={<PageFallback />}>
              <BlogPage />
            </Suspense>
          )}
        </div>
      )}
    </>
  )
}

export default App

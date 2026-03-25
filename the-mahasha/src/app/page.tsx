import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Services from '@/components/Services'
import TrainingPrograms from '@/components/TrainingPrograms'
import SaasProducts from '@/components/SaasProducts'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import YouTubeSection from '@/components/YouTubeSection'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30 z-0" />
      <div className="fixed top-0 right-0 hero-glow hero-glow-purple z-0" />
      <div className="fixed bottom-0 left-0 hero-glow hero-glow-pink z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LogoTicker />
        <Services />
        <TrainingPrograms />
        <SaasProducts />
        <ProjectsShowcase />
        <YouTubeSection />
        <Testimonials />
        <Newsletter />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}

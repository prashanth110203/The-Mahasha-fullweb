import Navbar from '@/components/Navbar'
import SaasProducts from '@/components/SaasProducts'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function SaasPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-30 z-0" />
      <div className="relative z-10">
        <Navbar />
        <section className="pt-32 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollReveal><div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6"><span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">🤖 Our Products</span></div></ScrollReveal>
            <ScrollReveal delay={100}><h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">SaaS / <span className="text-gradient">AI Products</span></h1></ScrollReveal>
            <ScrollReveal delay={200}><p className="text-gray-400 text-lg max-w-2xl mx-auto">Intelligent solutions powered by AI, designed to transform how businesses operate across industries.</p></ScrollReveal>
          </div>
        </section>
        <SaasProducts />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}

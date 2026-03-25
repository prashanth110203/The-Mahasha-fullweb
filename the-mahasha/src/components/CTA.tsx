'use client'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="relative p-12 sm:p-16 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-zinc-900 to-pink-600/20 rounded-3xl" />
            <div className="absolute inset-0 bg-grid opacity-10 rounded-3xl" />
            <div className="absolute inset-[1px] bg-zinc-900/90 rounded-3xl" />
            <div className="absolute inset-0 rounded-3xl border border-purple-500/20" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Ready to <span className="text-gradient">Get Started?</span></h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">Whether you want to master a domain, build a product, or develop your project — we&apos;re here to help you succeed.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/training" className="btn-primary group px-8 py-4 rounded-full text-base font-semibold text-white inline-flex items-center gap-2">
                  Start Learning
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="mailto:contact@themahasha.com" className="btn-secondary px-8 py-4 rounded-full text-base font-semibold text-white inline-flex items-center gap-2 bg-zinc-800/50">
                  ✉️ Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

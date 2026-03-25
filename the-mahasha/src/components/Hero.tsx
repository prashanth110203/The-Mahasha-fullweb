'use client'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <ScrollReveal delay={100}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-default">
            <span className="text-lg">🚀</span>
            <span className="text-sm font-medium text-purple-300">Empowering Professionals Worldwide</span>
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal delay={200}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-2">
            <span className="text-white block" style={{ textShadow: '0 0 80px rgba(168, 85, 247, 0.3)' }}>THE</span>
            <span className="text-gradient block leading-tight" style={{ textShadow: '0 0 80px rgba(168, 85, 247, 0.5)' }}>MAHASHA</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-base sm:text-lg md:text-xl tracking-[0.3em] text-gray-400 font-light mb-8 mt-4">TRAINING & DEVELOPMENT</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premier training in Healthcare, Logistics & Banking domains. AI-powered SaaS products. End-to-end project development.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/training" className="btn-primary group px-8 py-4 rounded-full text-base font-semibold text-white inline-flex items-center gap-2 min-w-[200px] justify-center">
              Explore Training
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/projects" className="btn-secondary px-8 py-4 rounded-full text-base font-semibold text-white inline-flex items-center gap-2 min-w-[200px] justify-center bg-zinc-900/50">
              View Projects
            </Link>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={700}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { end: 500, suffix: '+', label: 'STUDENTS TRAINED' },
              { end: 3, suffix: '', label: 'INDUSTRY DOMAINS' },
              { end: 50, suffix: '+', label: 'PROJECTS DELIVERED' },
              { end: 98, suffix: '%', label: 'SATISFACTION RATE' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group cursor-default">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2000 + index * 200} />
                </div>
                <div className="text-xs tracking-[0.15em] text-gray-500 font-medium group-hover:text-gray-400 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

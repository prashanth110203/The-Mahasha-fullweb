'use client'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: '🎓',
    iconBg: 'from-purple-500/20 to-purple-600/10',
    title: 'Domain Training',
    subtitle: 'Healthcare · Logistics · Banking',
    subtitleColor: 'text-purple-400',
    description: 'Master industry-specific domain knowledge with our expert-led training programs. Deep-dive into real-world processes, regulations, and IT systems.',
    tags: ['Live Projects', 'Industry Experts', 'Certification Ready'],
    href: '/training',
  },
  {
    icon: '🤖',
    iconBg: 'from-cyan-500/20 to-blue-600/10',
    title: 'SaaS / AI Products',
    subtitle: 'Intelligent Solutions',
    subtitleColor: 'text-cyan-400',
    description: 'Cutting-edge AI-powered SaaS products designed to automate workflows, enhance decision-making, and drive digital transformation.',
    tags: ['AI-Powered', 'Cloud Native', 'Enterprise Ready'],
    href: '/saas',
  },
  {
    icon: '💼',
    iconBg: 'from-pink-500/20 to-rose-600/10',
    title: 'Client Projects',
    subtitle: 'End-to-End Development',
    subtitleColor: 'text-pink-400',
    description: 'Full-stack project development from concept to deployment. We build scalable, modern applications tailored to your business needs.',
    tags: ['Full Stack', 'Scalable', 'Production Ready'],
    href: '/projects',
  },
  {
    icon: '📺',
    iconBg: 'from-orange-500/20 to-red-600/10',
    title: 'YouTube Content',
    subtitle: 'Learn & Grow',
    subtitleColor: 'text-orange-400',
    description: 'Free educational content covering domain knowledge, technical tutorials, career guidance, and industry insights.',
    tags: ['Free Content', 'Tutorials', 'Career Tips'],
    href: '/youtube',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">What We Do</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Services</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">Four pillars of excellence driving innovation and professional growth across industries.</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 150}>
              <Link href={service.href}>
                <div className="service-card group relative p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/50 hover:border-purple-500/20 h-full">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-2xl card-icon transition-all duration-300`}>
                        {service.icon}
                      </div>
                      <svg className="w-6 h-6 text-purple-400 card-arrow opacity-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">{service.title}</h3>
                    <p className={`text-sm font-medium ${service.subtitleColor} mb-4`}>{service.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import ScrollReveal from './ScrollReveal'

const products = [
  {
    name: 'HealthSync AI', description: 'AI-powered healthcare management platform for hospitals and clinics. Streamline patient records, automate diagnostics support, and optimize clinical workflows.',
    icon: '🏥', status: 'Live', features: ['Patient Management', 'AI Diagnostics', 'Telemedicine', 'Analytics Dashboard'],
    gradient: 'from-emerald-500/10 to-teal-500/5', borderColor: 'hover:border-emerald-500/30', statusColor: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    name: 'LogiTrack Pro', description: 'Intelligent logistics and supply chain management system with real-time tracking, route optimization, and predictive analytics.',
    icon: '📦', status: 'Beta', features: ['Real-time Tracking', 'Route Optimization', 'Predictive Analytics', 'Fleet Management'],
    gradient: 'from-blue-500/10 to-indigo-500/5', borderColor: 'hover:border-blue-500/30', statusColor: 'bg-blue-500/20 text-blue-400',
  },
  {
    name: 'FinEdge', description: 'Next-generation fintech platform for digital banking, payment processing, and regulatory compliance automation.',
    icon: '💳', status: 'Coming Soon', features: ['Digital Banking', 'Payment Gateway', 'KYC Automation', 'Risk Assessment'],
    gradient: 'from-amber-500/10 to-orange-500/5', borderColor: 'hover:border-amber-500/30', statusColor: 'bg-amber-500/20 text-amber-400',
  },
]

export default function SaasProducts() {
  return (
    <section id="saas" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">Our Products</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">SaaS / <span className="text-gradient">AI Products</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Cutting-edge AI-powered products built to transform industries and solve real-world challenges.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 150}>
              <div className={`service-card group relative p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/50 ${product.borderColor} h-full flex flex-col`}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl">{product.icon}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.statusColor}`}>{product.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">{product.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="btn-secondary w-full py-3 rounded-xl text-sm font-medium text-gray-300 flex items-center justify-center gap-2 group-hover:text-white">
                    Learn More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

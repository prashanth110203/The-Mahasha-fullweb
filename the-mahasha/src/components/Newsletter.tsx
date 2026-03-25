'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setIsSubmitted(true); setEmail(''); setTimeout(() => setIsSubmitted(false), 3000) }
  }

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px]" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
                <span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">Stay Updated</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our <span className="text-gradient">Newsletter</span></h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">Get weekly updates on domain training, industry insights, and exclusive content directly in your inbox.</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all" required />
                <button type="submit" className="btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap">
                  {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
              <p className="text-xs text-gray-600 mt-4">No spam. Unsubscribe anytime. Join 500+ professionals.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

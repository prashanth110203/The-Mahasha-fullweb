'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTrainingOpen, setIsTrainingOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/training', label: 'Training', dropdown: true,
      items: [
        { href: '/training', label: 'Healthcare Domain' },
        { href: '/training', label: 'Logistics Domain' },
        { href: '/training', label: 'Banking Domain' },
      ]
    },
    { href: '/saas', label: 'SaaS / AI' },
    { href: '/projects', label: 'Projects' },
    { href: '/youtube', label: 'YouTube' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-zinc-800/50 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center font-bold text-white text-lg shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
                M
              </div>
            </div>
            <div>
              <div className="font-bold text-lg tracking-wide text-white group-hover:text-purple-300 transition-colors">THE MAHASHA</div>
              <div className="text-[10px] tracking-[0.2em] text-purple-400/70 font-medium">TRAINING & DEVELOPMENT</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsTrainingOpen(true)}
                    onMouseLeave={() => setIsTrainingOpen(false)}
                  >
                    <button className="nav-link px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                      {link.label}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isTrainingOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isTrainingOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 py-2 glass rounded-xl border border-zinc-700/50 shadow-xl mobile-menu-enter">
                        {link.items?.map((item) => (
                          <Link key={item.label} href={item.href} className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-200">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                              {item.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} className="nav-link px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="#contact" className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-zinc-800/50 mobile-menu-enter">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="#contact" className="btn-primary w-full px-6 py-3 rounded-full text-sm font-semibold text-white text-center block" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

'use client'
import Link from 'next/link'

const footerLinks = {
  Training: [
    { label: 'Healthcare Domain', href: '/training' },
    { label: 'Logistics Domain', href: '/training' },
    { label: 'Banking Domain', href: '/training' },
    { label: 'All Programs', href: '/training' },
  ],
  Products: [
    { label: 'HealthSync AI', href: '/saas' },
    { label: 'LogiTrack Pro', href: '/saas' },
    { label: 'FinEdge', href: '/saas' },
    { label: 'All Products', href: '/saas' },
  ],
  Company: [
    { label: 'About Us', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Blog', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Privacy Policy', href: '/' },
    { label: 'Terms of Service', href: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-zinc-900/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center font-bold text-white text-lg shadow-glow-sm">M</div>
              <div>
                <div className="font-bold text-lg tracking-wide text-white">THE MAHASHA</div>
                <div className="text-[10px] tracking-[0.2em] text-purple-400/70 font-medium">TRAINING & DEVELOPMENT</div>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">Empowering professionals with industry-specific domain training, cutting-edge SaaS products, and quality project development.</p>
            <div className="flex gap-3">
              {['YT', 'Li', 'X', 'GH', 'IG'].map((s) => (
                <div key={s} className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-gray-500 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer text-xs font-bold">{s}</div>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wider">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-gray-500 hover:text-purple-400 transition-colors duration-200">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} THE MAHASHA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

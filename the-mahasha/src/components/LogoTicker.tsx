'use client'
import ScrollReveal from './ScrollReveal'

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🔴' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Java', icon: '☕' },
  { name: 'Node.js', icon: '💚' },
  { name: 'Flutter', icon: '🦋' },
  { name: 'Azure', icon: '🔷' },
]

export default function LogoTicker() {
  return (
    <section className="py-12 border-y border-zinc-800/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c0c0e] to-transparent z-10" />
      <ScrollReveal>
        <p className="text-center text-xs tracking-[0.2em] text-gray-500 mb-8 font-medium uppercase">Technologies We Work With</p>
      </ScrollReveal>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="inline-flex items-center gap-2 mx-6 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-purple-500/30 hover:bg-zinc-800/50 transition-all duration-300 cursor-default">
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm text-gray-400 font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

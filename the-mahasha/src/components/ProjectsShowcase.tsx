'use client'
import ScrollReveal from './ScrollReveal'

const projects = [
  { title: 'Hospital Management System', client: 'Healthcare Client', description: 'End-to-end hospital management system with patient portal, appointment scheduling, and billing integration.', tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'], image: '🏥', color: 'from-emerald-500/20 to-teal-600/10' },
  { title: 'Fleet Management Dashboard', client: 'Logistics Startup', description: 'Real-time fleet tracking dashboard with GPS integration, driver management, and route optimization.', tech: ['Next.js', 'Python', 'MongoDB', 'Maps API'], image: '🚛', color: 'from-blue-500/20 to-indigo-600/10' },
  { title: 'Digital Banking Platform', client: 'Fintech Company', description: 'Secure digital banking platform with account management, fund transfers, and KYC verification.', tech: ['React', 'Java Spring', 'MySQL', 'Azure'], image: '🏦', color: 'from-amber-500/20 to-orange-600/10' },
  { title: 'AI Resume Analyzer', client: 'HR Tech Startup', description: 'AI-powered resume screening tool with skill matching, scoring, and automated shortlisting.', tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'], image: '🤖', color: 'from-purple-500/20 to-pink-600/10' },
  { title: 'E-Commerce Platform', client: 'Retail Client', description: 'Full-featured e-commerce platform with inventory management, payment integration, and analytics.', tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Docker'], image: '🛒', color: 'from-pink-500/20 to-rose-600/10' },
  { title: 'Learning Management System', client: 'EdTech Company', description: 'Comprehensive LMS with course creation, progress tracking, assessments, and video streaming.', tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'], image: '📚', color: 'from-cyan-500/20 to-blue-600/10' },
]

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">Portfolio</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Client <span className="text-gradient">Projects</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real-world projects delivered to clients across healthcare, logistics, banking, and more.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="service-card group relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/50 hover:border-purple-500/20 h-full flex flex-col">
                <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 overflow-hidden`}>
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{project.image}</span>
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-purple-400 font-medium mb-2 tracking-wider uppercase">{project.client}</p>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (<span key={t} className="tag text-[10px]">{t}</span>))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-4 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2">
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

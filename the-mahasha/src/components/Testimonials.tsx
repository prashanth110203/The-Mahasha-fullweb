'use client'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  { name: 'Priya Sharma', role: 'Business Analyst at TCS', content: 'The Healthcare domain training was exceptional. I gained practical knowledge that directly helped me land a BA role. The live projects were game-changing.', avatar: 'PS', rating: 5, domain: 'Healthcare' },
  { name: 'Rahul Verma', role: 'Supply Chain Analyst at Amazon', content: 'Logistics domain training here was the best investment I made. The instructors have real industry experience, and the project work prepared me for my current role.', avatar: 'RV', rating: 5, domain: 'Logistics' },
  { name: 'Anita Patel', role: 'Banking Consultant at Infosys', content: 'The Banking domain training covered everything from core banking to digital transformation. The certification helped me stand out in interviews.', avatar: 'AP', rating: 5, domain: 'Banking' },
  { name: 'Vikash Kumar', role: 'Full Stack Developer', content: 'Got my e-commerce project delivered on time with amazing quality. The team is professional, technically strong, and really understands client requirements.', avatar: 'VK', rating: 5, domain: 'Projects' },
  { name: 'Sneha Reddy', role: 'Product Manager at Wipro', content: 'The SaaS product consultation was outstanding. They helped us define our product roadmap and build an MVP in just 6 weeks.', avatar: 'SR', rating: 5, domain: 'SaaS' },
  { name: 'Arjun Singh', role: 'Healthcare IT Specialist', content: 'YouTube channel content is top-notch and helped me understand healthcare IT fundamentals before enrolling in the full course.', avatar: 'AS', rating: 5, domain: 'YouTube' },
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">Testimonials</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">What People <span className="text-gradient">Say</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Hear from our students and clients about their experience with THE MAHASHA.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 100}>
              <div className="service-card group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/50 hover:border-purple-500/20 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                  <div className="ml-auto"><span className="tag text-[10px]">{t.domain}</span></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import ScrollReveal from './ScrollReveal'

const videos = [
  { title: 'Healthcare Domain Training - Complete Guide 2024', thumbnail: '🏥', views: '12K', duration: '45:30', category: 'Domain Training' },
  { title: 'Build a Full-Stack App with Next.js & AI', thumbnail: '💻', views: '8.5K', duration: '1:20:15', category: 'Tutorial' },
  { title: 'How to Crack IT Interviews - Domain Knowledge', thumbnail: '🎯', views: '25K', duration: '32:45', category: 'Career Guide' },
  { title: 'Logistics Domain - Supply Chain Explained', thumbnail: '🚚', views: '6.2K', duration: '38:20', category: 'Domain Training' },
  { title: 'Banking & Fintech - Core Banking Systems', thumbnail: '🏦', views: '9.8K', duration: '52:10', category: 'Domain Training' },
  { title: 'AI in Healthcare - Real-World Applications', thumbnail: '🤖', views: '15K', duration: '28:45', category: 'AI & Tech' },
]

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-6">
              <span className="text-xs tracking-[0.2em] text-red-400 font-medium uppercase">📺 YouTube Channel</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Learn & <span className="text-gradient-pink">Grow</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Free educational content on domain knowledge, technical skills, and career development.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <ScrollReveal key={video.title} delay={index * 100}>
              <div className="service-card group cursor-pointer rounded-2xl bg-zinc-900/60 border border-zinc-800/50 hover:border-purple-500/20 overflow-hidden h-full">
                <div className="relative w-full h-48 bg-gradient-to-br from-red-500/10 to-orange-500/5 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{video.thumbnail}</span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-xs text-white font-medium">{video.duration}</div>
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-purple-500/20 text-xs text-purple-300 font-medium border border-purple-500/20">{video.category}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors leading-snug">{video.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>👁 {video.views} views</span><span>•</span><span>THE MAHASHA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <a href="https://youtube.com/@themahasha" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
              ▶️ Subscribe to Our Channel
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

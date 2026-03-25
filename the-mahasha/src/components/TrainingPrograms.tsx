'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const domains = [
  {
    id: 'healthcare', name: 'Healthcare', icon: '🏥',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/40',
    bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-400',
    description: 'Master healthcare IT systems, HIPAA compliance, HL7/FHIR standards, EHR/EMR systems, and clinical workflows.',
    modules: ['Healthcare Data Standards (HL7, FHIR, ICD-10)', 'HIPAA Compliance & Security', 'EHR/EMR System Design', 'Claims Processing & Revenue Cycle', 'Clinical Decision Support Systems', 'Telehealth & Remote Monitoring'],
    duration: '12 Weeks', projects: '4 Live Projects', certification: 'Industry Recognized',
  },
  {
    id: 'logistics', name: 'Logistics', icon: '🚚',
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    bgColor: 'bg-blue-500/10', textColor: 'text-blue-400',
    description: 'Learn supply chain management, warehouse operations, TMS/WMS systems, and logistics optimization.',
    modules: ['Supply Chain Management Fundamentals', 'Transportation Management Systems (TMS)', 'Warehouse Management Systems (WMS)', 'Route Optimization & Planning', 'Inventory Management & Forecasting', 'Last-Mile Delivery Solutions'],
    duration: '10 Weeks', projects: '3 Live Projects', certification: 'Industry Recognized',
  },
  {
    id: 'banking', name: 'Banking', icon: '🏦',
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
    bgColor: 'bg-amber-500/10', textColor: 'text-amber-400',
    description: 'Understand core banking systems, payment processing, regulatory compliance, and fintech innovations.',
    modules: ['Core Banking Systems Architecture', 'Payment Processing (SWIFT, ACH, SEPA)', 'KYC/AML Compliance', 'Digital Banking & Open Banking APIs', 'Risk Management & Credit Scoring', 'Blockchain & DeFi Fundamentals'],
    duration: '12 Weeks', projects: '4 Live Projects', certification: 'Industry Recognized',
  },
]

export default function TrainingPrograms() {
  const [activeDomain, setActiveDomain] = useState('healthcare')
  const selectedDomain = domains.find(d => d.id === activeDomain)!

  return (
    <section id="training" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="text-xs tracking-[0.2em] text-purple-300 font-medium uppercase">Training Programs</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Domain <span className="text-gradient">Expertise</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Industry-specific training programs designed by domain experts with hands-on live project experience.</p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {domains.map((domain) => (
              <button key={domain.id} onClick={() => setActiveDomain(domain.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeDomain === domain.id ? `${domain.bgColor} ${domain.textColor} border ${domain.borderColor} shadow-lg` : 'text-gray-400 border border-zinc-700/50 hover:text-white hover:border-zinc-600'}`}>
                <span className="text-lg">{domain.icon}</span>{domain.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-6 rounded-2xl bg-zinc-900/60 border ${selectedDomain.borderColor} transition-all duration-300`}>
                <div className="text-4xl mb-4">{selectedDomain.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{selectedDomain.name} Domain</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{selectedDomain.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {[{ label: 'Duration', value: selectedDomain.duration }, { label: 'Projects', value: selectedDomain.projects }, { label: 'Certificate', value: selectedDomain.certification }].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-zinc-800/50">
                      <div className={`text-sm font-bold ${selectedDomain.textColor}`}>{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-primary w-full py-4 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2">
                Enroll Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>
            </div>
            <div className="lg:col-span-3">
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/50">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">📋 Course Modules</h4>
                <div className="space-y-3">
                  {selectedDomain.modules.map((module, index) => (
                    <div key={module} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-purple-500/20 hover:bg-zinc-800/50 transition-all duration-300 group">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${selectedDomain.color} flex items-center justify-center text-white text-xs font-bold`}>{String(index + 1).padStart(2, '0')}</div>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{module}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function TratamientoOrganicoCase() {
  const tc = useTranslations('caseStudyDetail.common')
  const ts = useTranslations('caseStudyDetail.tratamientoOrganicoSx')
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Blueprint Style */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Technical Corner Brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-emerald-500/30"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-emerald-500/30"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-emerald-500/30"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 font-mono text-sm">
            <Link href="/casos-de-exito" className="text-slate-400 hover:text-emerald-400 transition-colors">
              {tc('breadcrumb')}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400">PRJ-001</span>
          </div>

          <div className="text-center mb-12">
            {/* Technical Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                [ {tc('caseStudyLabel')} ]
              </span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight font-mono">
              {ts('title')}
            </h1>
            <p className="text-xl text-slate-400 mb-2">{ts('subtitle')}</p>
            <p className="text-2xl text-emerald-400 font-semibold">
              {ts('headline')}
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {ts.raw('stats').map((stat, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur border border-slate-700 p-6 text-center"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500"
                     style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
                <div className="text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Technical Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </section>

      {/* Project Overview - Technical Specs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {ts.raw('overview').map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="font-mono text-xs text-slate-400 mt-1">[{String(i + 1).padStart(2, '0')}]</div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">{item.label}</h3>
                  <p className="text-slate-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-slate-300"></div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{tc('analysisLabel')}</span>
              <div className="w-12 h-px bg-slate-300"></div>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{tc('challengeTitle')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {ts('challengeDescription')}
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ts.raw('problems').map((problem, i) => (
              <div key={i} className="relative bg-white border border-slate-200 p-6"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500"
                     style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-slate-400">PROB-{String(i + 1).padStart(2, '0')}</span>
                  <span className="px-2 py-1 bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                    {problem.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{problem.description}</p>
                <div className="pt-4 border-t border-slate-100">
                  <span className="font-mono text-sm text-slate-900">{problem.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-slate-300"></div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{tc('implementationLabel')}</span>
              <div className="w-12 h-px bg-slate-300"></div>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{tc('solutionTitle')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {ts('solutionDescription')}
            </p>
          </div>

          {/* Solution Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ts.raw('solutions').map((solution, i) => (
              <div key={i} className="relative bg-slate-50 border-2 border-slate-200 p-6 hover:border-emerald-400 transition-colors duration-300"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-500"
                     style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-emerald-500"
                     style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>

                <div className="font-mono text-4xl font-bold text-emerald-500/20 mb-4">{solution.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{solution.description}</p>

                <div className="space-y-2">
                  {solution.specs.map((spec, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="font-mono text-xs text-slate-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results - Technical Data */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-slate-600"></div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{tc('resultsLabel')}</span>
              <div className="w-12 h-px bg-slate-600"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{tc('successMetrics')}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {tc('beforeAfterComparison')}
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="relative bg-white/5 backdrop-blur border border-slate-700 p-8"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500"
                   style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
              <div className="font-mono text-xs text-red-400 mb-4 uppercase tracking-wider">[ {tc('initialState')} ]</div>

              <div className="space-y-6">
                {ts.raw('beforeMetrics').map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-400 text-sm">{metric.label}</span>
                      <span className="font-mono text-white">{metric.value} {metric.unit}</span>
                    </div>
                    {metric.max > 0 && (
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/60 rounded-full"
                             style={{ width: `${(parseFloat(metric.value) / metric.max) * 100}%` }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="relative bg-white/5 backdrop-blur border border-emerald-500/50 p-8"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
              <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-500"
                   style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
              <div className="font-mono text-xs text-emerald-400 mb-4 uppercase tracking-wider">[ {tc('finalState')} ]</div>

              <div className="space-y-6">
                {ts.raw('afterMetrics').map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-400 text-sm">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white">{metric.value} {metric.unit}</span>
                        {metric.improvement && (
                          <span className="font-mono text-xs text-emerald-400">{metric.improvement}</span>
                        )}
                      </div>
                    </div>
                    {metric.max > 0 && (
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full"
                             style={{ width: `${(parseFloat(metric.value) / metric.max) * 100}%` }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Economic Impact */}
          <div className="relative bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 p-8 text-center"
               style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
            <div className="absolute top-0 right-0 w-5 h-5 bg-emerald-500"
                 style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-emerald-500"
                 style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>

            <div className="font-mono text-xs text-emerald-400 mb-4 uppercase tracking-wider">[ {tc('economicImpact')} ]</div>
            <div className="text-5xl md:text-7xl font-bold text-white mb-2 font-mono">{ts('economicValue')}</div>
            <p className="text-xl text-slate-400">{ts('economicLabel')}</p>
          </div>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-slate-300"></div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{tc('summaryLabel')}</span>
              <div className="w-12 h-px bg-slate-300"></div>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{tc('keyAchievements')}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {ts.raw('achievements').map((achievement, i) => (
              <div key={i} className="relative bg-slate-50 border border-slate-200 p-6 text-center hover:border-emerald-400 transition-colors duration-300"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-slate-200"
                     style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold text-slate-900 font-mono mb-1">{achievement.value}</div>
                <div className="text-slate-600 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid-detail" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid-detail)" />
          </svg>
        </div>

        {/* Technical Corner Brackets */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-emerald-500/50"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-emerald-500/50"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-emerald-500/50"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-emerald-500/50"></div>

        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              {tc('nextStep')}
            </span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {ts('ctaTitle')}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {ts('ctaDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center bg-emerald-500 text-white px-8 py-4 font-semibold hover:bg-emerald-400 transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              {tc('requestConsultation')}
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-8 py-4 font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              {tc('viewMoreCases')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

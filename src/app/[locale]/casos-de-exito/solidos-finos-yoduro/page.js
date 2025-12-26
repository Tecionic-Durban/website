'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function SolidosFinosYoduroCase() {
  const tc = useTranslations('caseStudyDetail.common')
  const ts = useTranslations('caseStudyDetail.solidosFinosYoduro')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {ts('tagline')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {ts('title')}
            </h1>
            <p className="text-2xl text-cyan-100 mb-8">
              {ts('headline')}
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ts.raw('stats').map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">{stat.value}</div>
                <div className="text-cyan-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {ts.raw('overview').map((item, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">{item.label}</h3>
                <p className="text-lg text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{tc('challengeTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ts('challengeDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('problemsTitle')}</h3>
              <div className="space-y-4">
                {ts.raw('problems').map((problem, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('requirementsTitle')}</h3>
              <div className="space-y-4">
                {ts.raw('requirements').map((req, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{req.title}</h4>
                      <p className="text-gray-600">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('solutionTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ts('solutionDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ts.raw('solutionCards').map((card, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{ts('processFlowTitle')}</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {ts.raw('processSteps').map((step, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-8">
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200 w-full md:w-auto">
                    <div className={`w-12 h-12 ${i === 3 ? 'bg-green-100' : 'bg-cyan-100'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      {i === 3 ? (
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-cyan-600 font-bold">{step.step}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {i < 3 && (
                    <svg className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('resultsTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ts.raw('resultStats').map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="text-gray-900 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ts.raw('resultCards').map((card, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value for Chemical Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{ts('chemicalTitle')}</h2>
                <p className="text-cyan-100 mb-6">{ts('chemicalDescription')}</p>
                <div className="space-y-3">
                  {ts.raw('chemicalFeatures').map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {ts.raw('chemicalStats').map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-cyan-300 mb-2">{stat.value}</div>
                    <div className="text-cyan-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ts('ctaTitle')}</h2>
          <p className="text-xl text-cyan-100 mb-8">{ts('ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
              {ts('ctaButton')}
            </Link>
            <Link href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-700 transition-colors">
              {tc('viewMoreCases')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

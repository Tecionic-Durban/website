'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function DeshidratacionConcentradosCase() {
  const tc = useTranslations('caseStudyDetail.common')
  const ts = useTranslations('caseStudyDetail.deshidratacionConcentrados')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {ts('tagline')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {ts('title')}
            </h1>
            <p className="text-2xl text-orange-100 mb-8">
              {ts('headline')}
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ts.raw('stats').map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">{stat.value}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
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

      {/* El Desafío */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{tc('challengeTitle')}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ts('challengeDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('situationTitle')}</h3>
              <div className="space-y-4">
                {ts.raw('situations').map((situation, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{situation.title}</h4>
                      <p className="text-gray-600">{situation.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Box */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('risksTitle')}</h3>
              <div className="space-y-4">
                {ts.raw('risks').map((risk, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: `rgba(239, 68, 68, ${1 - i * 0.2})` }}>
                    <h4 className="font-semibold text-gray-900 mb-1">{risk.title}</h4>
                    <p className="text-sm text-gray-600">{risk.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-red-100 rounded-lg p-4 text-center">
                <div className="text-sm text-red-800 font-semibold mb-1">{ts('riskValueLabel')}</div>
                <div className="text-4xl font-bold text-red-600">{ts('riskValue')}</div>
                <div className="text-sm text-red-700">{ts('riskValueNote')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('solutionTitle')}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ts('solutionDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('resultsTitle')}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">{ts('resultsDescription')}</p>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center">
            <div className="text-lg font-semibold mb-2">{ts('keyInsightLabel')}</div>
            <div className="text-5xl font-bold mb-2">{ts('keyInsightValue')}</div>
            <div className="text-lg">{ts('keyInsightNote')}</div>
          </div>
        </div>
      </section>

      {/* Riesgos Mitigados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('risksMitigatedTitle')}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('conclusionTitle')}</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-l-4 border-orange-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: ts('conclusionText1') }} />
            <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: ts('conclusionText2') }} />

            <div className="grid md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-orange-200">
              {ts.raw('conclusionStats').map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{ts('ctaTitle')}</h2>
          <p className="text-xl text-orange-100 mb-8">{ts('ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-block">
              {ts('ctaButton')}
            </Link>
            <Link href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block">
              {tc('viewMoreCases')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

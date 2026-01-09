'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function LodosPetrolerosCase() {
  const tc = useTranslations('caseStudyDetail.common')
  const ts = useTranslations('caseStudyDetail.lodosPetroleros')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-slate-500/20 text-slate-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {ts('tagline')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {ts('title')}
            </h1>
            <p className="text-2xl text-slate-100 mb-8">
              {ts('headline')}
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ts.raw('stats').map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">{stat.value}</div>
                <div className="text-slate-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{tc('challengeTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ts('challengeDescription')}
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ts.raw('problems').map((problem, i) => (
              <div key={i} className="bg-slate-100 border-l-4 border-slate-900 p-6 rounded-r-lg">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-slate-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">{problem.title}</h3>
                </div>
                <p className="text-gray-700">{problem.value}</p>
                <p className="text-sm text-gray-600 mt-2">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Three Sludge Streams */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{ts('streamsTitle')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {ts.raw('streams').map((stream, i) => (
                <div key={i} className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                  <div className="text-5xl font-bold text-slate-700 mb-2">{stream.humidity}</div>
                  <div className="text-sm font-semibold text-slate-600 mb-3">{stream.humidityLabel}</div>
                  <div className="text-lg font-bold text-gray-900">{stream.name}</div>
                  <div className="mt-3 text-sm text-gray-600">{stream.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('solutionTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {ts('solutionDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Enfoque Innovador */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-slate-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                {ts('approachTitle')}
              </h3>
              <ul className="space-y-4">
                {ts.raw('approachItems').map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-slate-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-gray-700">
                      <span className="font-semibold">{item.title}</span> - {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tecnología Aplicada */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {ts('technologyTitle')}
              </h3>
              <ul className="space-y-4">
                {ts.raw('technologyItems').map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="text-gray-700">
                      <span className="font-semibold">{item.title}</span> - {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Opportunities */}
          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              {ts('opportunitiesTitle')}
            </h3>
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: ts('opportunitiesText') }} />
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('resultsTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">{ts('resultsDescription')}</p>
          </div>

          {/* Results by Sludge Type */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {ts.raw('results').map((result, i) => (
              <div key={i} className={`bg-white rounded-xl shadow-lg p-8 ${i === 0 ? 'border-2 border-amber-400' : ''}`}>
                <div className="text-center mb-6">
                  <div className={`inline-block ${i === 0 ? 'bg-amber-100 text-amber-700' : i === 1 ? 'bg-slate-100 text-slate-700' : 'bg-blue-100 text-blue-700'} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    {result.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{result.name}</h3>
                </div>

                <div className="space-y-6">
                  <div className={`text-center bg-gradient-to-br ${i === 0 ? 'from-amber-50 to-yellow-50' : i === 1 ? 'from-slate-50 to-gray-50' : 'from-blue-50 to-cyan-50'} rounded-lg p-6`}>
                    <div className={`text-6xl font-bold ${i === 0 ? 'text-amber-600' : i === 1 ? 'text-slate-600' : 'text-blue-600'} mb-2`}>{result.reduction}</div>
                    <div className="text-lg font-semibold text-gray-700">{result.reductionLabel}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600 mb-1">{ts('initialHumidityLabel')}</div>
                      <div className="text-3xl font-bold text-red-600">{result.initialHumidity}</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-600 mb-1">{ts('finalHumidityLabel')}</div>
                      <div className="text-3xl font-bold text-green-600">{result.finalHumidity}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">{result.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('impactTitle')}</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">{ts('beforeTitle')}</h4>
                <div className="space-y-3 bg-red-50 p-6 rounded-lg">
                  {ts.raw('beforeMetrics').map((metric, i) => (
                    <div key={i} className={`flex justify-between ${metric.isHighlight ? 'border-t border-red-200 pt-2' : ''}`}>
                      <span className={`text-gray-700 ${metric.isHighlight ? 'font-semibold' : ''}`}>{metric.label}</span>
                      <span className={`${metric.isHighlight ? 'font-bold text-red-600 text-lg' : 'font-semibold text-gray-900'}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">{ts('afterTitle')}</h4>
                <div className="space-y-3 bg-green-50 p-6 rounded-lg">
                  {ts.raw('afterMetrics').map((metric, i) => (
                    <div key={i} className={`flex justify-between ${metric.isHighlight ? 'border-t border-green-200 pt-2' : ''}`}>
                      <span className={`text-gray-700 ${metric.isHighlight ? 'font-semibold' : ''}`}>{metric.label}</span>
                      <span className={`${metric.isHighlight ? 'font-bold text-green-600 text-lg' : 'font-semibold text-gray-900'}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {ts.raw('impactStats').map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
                    <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('benefitsTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ts.raw('benefits').map((benefit, i) => {
              const colors = [
                'from-amber-50 to-yellow-50 border-amber-200',
                'from-slate-50 to-gray-50 border-slate-200',
                'from-green-50 to-emerald-50 border-green-200',
                'from-blue-50 to-cyan-50 border-blue-200',
                'from-purple-50 to-pink-50 border-purple-200',
                'from-orange-50 to-red-50 border-orange-200'
              ]
              const iconColors = ['text-amber-600 bg-amber-100', 'text-slate-600 bg-slate-100', 'text-green-600 bg-green-100', 'text-blue-600 bg-blue-100', 'text-purple-600 bg-purple-100', 'text-orange-600 bg-orange-100']
              return (
                <div key={i} className={`bg-gradient-to-br ${colors[i]} p-6 rounded-xl border`}>
                  <div className="flex items-center mb-4">
                    <div className={`${iconColors[i]} p-3 rounded-lg mr-3`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('conclusionTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-8 border-l-4 border-slate-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: ts('conclusionText1') }} />
            <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: ts('conclusionText2') }} />

            <div className="grid md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
              {ts.raw('conclusionStats').map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-slate-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{ts('ctaTitle')}</h2>
          <p className="text-xl text-slate-100 mb-8">{ts('ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-block">
              {ts('ctaButton')}
            </Link>
            <Link href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors inline-block">
              {tc('viewMoreCases')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

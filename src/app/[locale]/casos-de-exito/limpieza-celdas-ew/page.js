'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function LimpiezaCeldasEWCase() {
  const tc = useTranslations('caseStudyDetail.common')
  const ts = useTranslations('caseStudyDetail.limpiezaCeldasEw')

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
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ts.raw('stats').map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-slate-100">{stat.label}</div>
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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Problem Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('problemTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {ts('problemDescription')}
              </p>

              <div className="space-y-4">
                {ts.raw('problems').map((problem, i) => (
                  <div key={i} className="flex items-start">
                    <div className={`${i === 0 ? 'bg-red-100' : i === 1 ? 'bg-yellow-100' : 'bg-orange-100'} p-2 rounded-lg mr-4`}>
                      <svg className={`w-6 h-6 ${i === 0 ? 'text-red-600' : i === 1 ? 'text-yellow-600' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

            {/* Extreme Conditions */}
            <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{ts('conditionsTitle')}</h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-8 h-8 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">{ts('altitudeValue')}</div>
                      <div className="text-sm text-gray-600">{ts('altitudeLabel')}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{ts('altitudeDescription')}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-8 h-8 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="text-lg font-bold text-slate-800">{ts('risksTitle')}</div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {ts.raw('risks').map((risk, i) => (
                      <li key={i}>• {risk}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-8 h-8 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="text-lg font-bold text-slate-800">{ts('sgssscTitle')}</div>
                  </div>
                  <p className="text-sm text-gray-600">{ts('sgssscDescription')}</p>
                </div>
              </div>
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

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {ts.raw('processSteps').map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-600">{step.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Equipment */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{ts('equipmentTitle')}</h3>
              <div className="space-y-4">
                {ts.raw('equipment').map((item, i) => (
                  <div key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">{ts('equipmentNote')}</p>
            </div>

            {/* Safety & Team */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{ts('safetyTitle')}</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{ts('eppTitle')}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {ts.raw('eppItems').map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{ts('proceduresTitle')}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {ts.raw('proceduresItems').map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{ts('trainingsTitle')}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {ts.raw('trainingsItems').map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Info */}
          <div className="mt-8 bg-slate-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {ts.raw('operationsInfo').map((info, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{info.value}</div>
                  <div className="text-sm text-gray-600">{info.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('resultsTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">{ts('resultsDescription')}</p>
          </div>

          {/* Results Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Safety */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{ts('safetyResultTitle')}</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-emerald-600 mb-2">{ts('safetyResultValue')}</div>
                <div className="text-gray-600">{ts('safetyResultLabel')}</div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {ts.raw('safetyResultItems').map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{ts('qualityResultTitle')}</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-blue-600 mb-2">{ts('qualityResultValue')}</div>
                <div className="text-gray-600">{ts('qualityResultLabel')}</div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {ts.raw('qualityResultItems').map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Operations */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{ts('operationsResultTitle')}</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">{ts('operationsResultValue')}</div>
                <div className="text-gray-600">{ts('operationsResultLabel')}</div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {ts.raw('operationsResultItems').map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Highlight */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-white text-center">
            <p className="text-lg mb-4">
              {ts('keyHighlightText')}
            </p>
            <div className="text-2xl font-bold text-emerald-400">
              {ts('keyHighlightValue')}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{ts('environmentalTitle')}</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ts.raw('environmentalItems').map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{ts('ctaTitle')}</h2>
          <p className="text-xl text-slate-100 mb-8">
            {ts('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-block">
              {ts('ctaButton')}
            </Link>
            <Link href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors inline-block">
              {tc('viewMoreCases')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

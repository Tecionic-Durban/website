'use client'

import { ArrowRight, Enterprise, RainDrop, Chemistry, Security, Time } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function CasosExitoPage() {
  const t = useTranslations('caseStudies')

  // Icons for each case study (order matches JSON array)
  const caseIcons = [Enterprise, RainDrop, Enterprise, Security, Time, Chemistry]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Clean Technical */}
      <section className="relative pt-32 pb-20 border-b border-gray-200">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(gray 1px, transparent 1px), linear-gradient(90deg, gray 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {/* Technical label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-emerald-600" />
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">{t('hero.label')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              {t('hero.titleLine1')}<br />
              <span className="text-gradient">{t('hero.titleLine2')}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar - Technical Readout Style */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {t.raw('stats').map((stat, index) => (
              <div
                key={index}
                className={`px-6 py-8 ${index < 3 ? 'border-r border-gray-200' : ''} ${index < 2 ? 'border-b lg:border-b-0 border-gray-200' : ''}`}
              >
                <div className="font-mono text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="casos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">{t('grid.label')}</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">
                {t('grid.title')}
              </h2>
            </div>

            </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {t.raw('cases').map((study, index) => {
              const IconComponent = caseIcons[index]
              return (
                <Link
                  key={index}
                  href={`/casos-de-exito/${study.slug}`}
                  className="group bg-white p-8 hover:bg-gray-50 transition-colors relative"
                >
                  {/* Technical corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-gray-300 group-hover:border-emerald-600 transition-colors" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-gray-300 group-hover:border-emerald-600 transition-colors" />

                  {/* Industry indicator */}
                  <div className="flex items-center gap-2 mb-6">
                    <IconComponent size={16} className="text-gray-400" />
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{study.industry}</span>
                  </div>

                  {/* Metric - Technical readout */}
                  <div className="mb-4">
                    <span className="font-mono text-4xl font-semibold text-gray-900">{study.headlineMetric}</span>
                    {study.metricUnit && (
                      <span className="font-mono text-lg text-gray-400 ml-1">{study.metricUnit}</span>
                    )}
                    <div className="text-sm text-gray-500 mt-1">{study.headlineLabel}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-medium text-gray-900 mb-4 line-clamp-2 leading-snug">
                    {study.title}
                  </h3>

                  {/* Services - Minimal tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service, serviceIdx) => (
                      <span
                        key={serviceIdx}
                        className="text-xs font-mono text-gray-500 px-2 py-1 border border-gray-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Read link */}
                  <div className="flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                    <span>{t('grid.readCase')}</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case - Technical Document Style */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">{t('featured.label')}</span>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {t('featured.title')}
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('featured.description')}
              </p>

              {/* Technical specs list */}
              <div className="space-y-4 mb-10">
                {t.raw('featured.specs').map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-sm font-mono text-gray-600">{item.label}</span>
                    <div className="text-right">
                      {item.value ? (
                        <span className="font-mono font-semibold text-gray-900">{item.value}</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gray-400">{item.before}</span>
                          <ArrowRight size={12} className="text-emerald-600" />
                          <span className="font-mono font-semibold text-gray-900">{item.after}</span>
                          <span className="font-mono text-xs text-emerald-600">{item.change}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/casos-de-exito/tratamiento-organico-sx"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                {t('featured.button')}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Metrics Panel - Technical Display */}
            <div className="bg-white border border-gray-200 p-8">
              {/* Panel header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{t('featured.resultsLabel')}</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {t.raw('featured.results').map((stat, i) => (
                  <div key={i} className="relative">
                    {/* Corner accent */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-emerald-600/30" />

                    <div className="font-mono text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    {stat.unit && (
                      <div className="font-mono text-xs text-gray-400">{stat.unit}</div>
                    )}
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t('cta.contactButton')}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors"
            >
              {t('cta.servicesButton')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

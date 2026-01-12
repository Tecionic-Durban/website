'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Filter as FilterCarbon, Chemistry, Humidity, Flash, ArrowRight, Security, Industry } from '@carbon/icons-react'
import { CheckCircle, Zap, Droplets, Settings } from 'lucide-react'
import Image from 'next/image'
import { handleContactClick } from '@/utils/navigation'

export default function ZincIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('zincIndustry')

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(100, 116, 139, 0.1) 0%, transparent 70%)'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <span className="text-sm font-semibold text-slate-700">{t('hero.badge')}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-[1.1]">
                {t('hero.title')} <span className="text-slate-600">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-black text-slate-800">{t('hero.stats.peru.value')}</div>
                  <div className="text-sm text-slate-600">{t('hero.stats.peru.label')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-black text-slate-800">{t('hero.stats.cajamarquilla.value')}</div>
                  <div className="text-sm text-slate-600">{t('hero.stats.cajamarquilla.label')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                  <div className="text-2xl font-black text-slate-800">{t('hero.stats.electrolytic.value')}</div>
                  <div className="text-sm text-slate-600">{t('hero.stats.electrolytic.label')}</div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/zinc_processing_plant.jpg"
                alt="Planta de procesamiento de zinc"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="text-sm font-semibold text-slate-700">{t('processFlow.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('processFlow.title')} <span className="text-slate-600">{t('processFlow.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('processFlow.subtitle')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-black text-slate-300 mb-4">{t(`processFlow.steps.${i}.number`)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`processFlow.steps.${i}.step`)}</h3>
                <div className="text-sm text-slate-600 mb-4 font-mono">{t(`processFlow.steps.${i}.process`)}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">{t('processFlow.labels.challenge')}</div>
                    <div className="text-sm text-gray-600">{t(`processFlow.steps.${i}.challenge`)}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">{t('processFlow.labels.solution')}</div>
                    <div className="text-sm text-slate-700 font-medium">{t(`processFlow.steps.${i}.tsf`)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {t('processFlow.summary.title')} <span className="text-slate-400">{t('processFlow.summary.titleSuffix')}</span>
                </h3>
                <p className="text-slate-300">{t('processFlow.summary.description')}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['downtime', 'capex', 'mobile'].map((key) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-black text-white">{t(`processFlow.summary.stats.${key}.value`)}</div>
                    <div className="text-sm text-slate-400">{t(`processFlow.summary.stats.${key}.label`)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="text-sm font-semibold text-slate-700">{t('services.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['leachResidue', 'ewCleaning', 'concentrateDehydration', 'jarositeGoethite', 'waterClarification', 'fineSolids'].map((key) => (
              <div key={key} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    t(`services.cards.${key}.status`) === 'CRÍTICO'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {t(`services.cards.${key}.status`)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`services.cards.${key}.title`)}</h3>
                <p className="text-sm text-gray-600 mb-4">{t(`services.cards.${key}.description`)}</p>
                <div className="space-y-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-slate-500" />
                      {t(`services.cards.${key}.specs.${i}`)}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-500">{t(`services.cards.${key}.statusLabel`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cajamarquilla Reference */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700 mb-6">
                <span className="text-sm font-semibold text-slate-300">{t('cajamarquilla.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">{t('cajamarquilla.title')}</h2>
              <p className="text-xl text-slate-300 mb-8">{t('cajamarquilla.description')}</p>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="text-sm font-semibold text-slate-400 mb-2">{t('cajamarquilla.opportunity.label')}</div>
                <p className="text-slate-200">{t('cajamarquilla.opportunity.text')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">{t('cajamarquilla.challenges.title')}</h3>
                <div className="space-y-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      {t(`cajamarquilla.challenges.items.${i}`)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">{t('cajamarquilla.advantages.title')}</h3>
                <div className="space-y-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {t(`cajamarquilla.advantages.items.${i}`)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="text-sm font-semibold text-slate-700">{t('results.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('results.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('results.subtitle')}
            </p>
          </div>

          {/* Metrics Comparison */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {['purity', 'impurities', 'consumption', 'recovery'].map((key) => (
              <div key={key} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-sm font-semibold text-gray-500 mb-4">{t(`results.metrics.${key}.label`)}</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-400 uppercase mb-1">{t('results.before')}</div>
                    <div className="text-2xl font-bold text-gray-400">{t(`results.metrics.${key}.before`)}</div>
                    <div className="text-xs text-gray-400">{t(`results.metrics.${key}.beforeUnit`)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase mb-1">{t('results.after')}</div>
                    <div className="text-2xl font-bold text-slate-700">{t(`results.metrics.${key}.after`)}</div>
                    <div className="text-xs text-slate-500">{t(`results.metrics.${key}.afterUnit`)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Improvements */}
          <div className="flex flex-wrap justify-center gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-slate-700">{t(`results.improvements.${i}.value`)}</div>
                <div className="text-sm text-gray-500">{t(`results.improvements.${i}.label`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mobile Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <span className="text-sm font-semibold text-slate-700">{t('whyMobile.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('whyMobile.title')}</h2>

              <div className="space-y-6">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{t(`whyMobile.reasons.${i}.title`)}</h3>
                      <p className="text-gray-600">{t(`whyMobile.reasons.${i}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-5xl font-black mb-2">{t('whyMobile.highlight.value')}</div>
                <div className="text-xl text-slate-300">{t('whyMobile.highlight.label')}</div>
                <div className="text-sm text-slate-400 mt-2">{t('whyMobile.highlight.comparison')}</div>
              </div>
              <div className="bg-slate-700 rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">{t('whyMobile.highlight.model.title')}</h4>
                <p className="text-slate-300 text-sm">{t('whyMobile.highlight.model.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={(e) => handleContactClick(e, router, pathname)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                {t('cta.primaryCta')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-400">
              <span>{t('cta.contact.email.label')}: {t('cta.contact.email.value')}</span>
              <span className="hidden sm:block">•</span>
              <span>{t('cta.contact.phone.label')}: {t('cta.contact.phone.value')}</span>
              <span className="hidden sm:block">•</span>
              <span>{t('cta.contact.location.value')}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

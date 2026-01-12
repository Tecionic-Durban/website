'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Filter as FilterCarbon, Chemistry, Humidity, Layers as LayersCarbon, ArrowRight, Security } from '@carbon/icons-react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { handleContactClick } from '@/utils/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PotassiumIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('potassiumIndustry')

  const useCases = [
    {
      icon: Chemistry,
      titleKey: 'applications.useCases.extraction.title',
      descriptionKey: 'applications.useCases.extraction.description',
      resultKey: 'applications.useCases.extraction.result',
      color: 'purple'
    },
    {
      icon: LayersCarbon,
      titleKey: 'applications.useCases.separation.title',
      descriptionKey: 'applications.useCases.separation.description',
      resultKey: 'applications.useCases.separation.result',
      color: 'blue'
    },
    {
      icon: Humidity,
      titleKey: 'applications.useCases.dialysis.title',
      descriptionKey: 'applications.useCases.dialysis.description',
      resultKey: 'applications.useCases.dialysis.result',
      color: 'amber'
    },
    {
      icon: FilterCarbon,
      titleKey: 'applications.useCases.floors.title',
      descriptionKey: 'applications.useCases.floors.description',
      resultKey: 'applications.useCases.floors.result',
      color: 'violet'
    }
  ]

  const colorClasses = {
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'from-purple-500 to-purple-600',
      text: 'text-purple-700',
      result: 'bg-purple-100 text-purple-800'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'from-blue-500 to-blue-600',
      text: 'text-blue-700',
      result: 'bg-blue-100 text-blue-800'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: 'from-amber-500 to-amber-600',
      text: 'text-amber-700',
      result: 'bg-amber-100 text-amber-800'
    },
    violet: {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      icon: 'from-violet-500 to-violet-600',
      text: 'text-violet-700',
      result: 'bg-violet-100 text-violet-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
                {t('hero.title')}
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/filtro_prensa_movil.png"
                alt={t('hero.imageAlt')}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* La Oportunidad */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              {t('opportunity.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('opportunity.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-800 rounded-xl flex items-center justify-center mb-6">
                <Chemistry size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('opportunity.cards.extraction.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('opportunity.cards.extraction.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-800 rounded-xl flex items-center justify-center mb-6">
                <LayersCarbon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('opportunity.cards.separation.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('opportunity.cards.separation.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-800 rounded-xl flex items-center justify-center mb-6">
                <Security size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('opportunity.cards.filtration.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('opportunity.cards.filtration.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones Tecionic */}
      <section id="aplicaciones" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              {t('applications.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('applications.description')}
            </p>
          </div>

          {/* Use Cases Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => {
              const colors = colorClasses[useCase.color]
              return (
                <div key={index} className="relative">
                  {/* Circle outline behind card */}
                  <div className={`absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 ${colors.border}`}></div>

                  <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                      <useCase.icon size={24} className={colors.text} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t(useCase.titleKey)}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {t(useCase.descriptionKey)}
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-sm text-gray-600">{t(useCase.resultKey)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Capabilities callout */}
          <div className="bg-purple-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">{t('applications.capabilities.title')}</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-purple-200">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                    {t(`applications.capabilities.items.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup / Contingencia */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('backup.title')}
              </h2>
              <p className="text-xl text-purple-50 leading-relaxed mb-8">
                {t('backup.description')}
              </p>
              <div className="space-y-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3 text-purple-50">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    {t(`backup.features.${i}`)}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">{t('backup.scenarios.title')}</h3>
              <div className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="font-semibold text-white">{t(`backup.scenarios.items.${i}.title`)}</div>
                    <div className="text-sm text-purple-100">{t(`backup.scenarios.items.${i}.description`)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos - 3 steps */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wider">
              {t('howWeWork.badge')}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('howWeWork.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('howWeWork.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl font-bold text-purple-600 mb-4">{t('howWeWork.steps.diagnosis.number')}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.diagnosis.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('howWeWork.steps.diagnosis.description')}
              </p>
              <div className="text-sm text-gray-500">{t('howWeWork.steps.diagnosis.timeline')}</div>
            </div>

            <div>
              <div className="text-6xl font-bold text-purple-600 mb-4">{t('howWeWork.steps.mobilization.number')}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.mobilization.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('howWeWork.steps.mobilization.description')}
              </p>
              <div className="text-sm text-gray-500">{t('howWeWork.steps.mobilization.timeline')}</div>
            </div>

            <div>
              <div className="text-6xl font-bold text-purple-600 mb-4">{t('howWeWork.steps.operation.number')}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.operation.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('howWeWork.steps.operation.description')}
              </p>
              <div className="text-sm text-gray-500">{t('howWeWork.steps.operation.timeline')}</div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('howWeWork.keyDifference.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('howWeWork.keyDifference.description')}
                </p>
              </div>
              <div className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{t(`howWeWork.keyDifference.benefits.${i}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Modelo Tecionic */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t('model.title')}
            </h2>
            <p className="text-xl text-purple-200 leading-relaxed">
              {t('model.description')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {['capex', 'mobilization', 'continuity', 'maintenance'].map((key) => (
              <div key={key} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">{t(`model.stats.${key}.value`)}</div>
                <div className="text-sm text-purple-300">{t(`model.stats.${key}.label`)}</div>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-6">{t('model.comparison.fixed.label')}</div>
              <div className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 text-purple-200">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    {t(`model.comparison.fixed.items.${i}`)}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8">
              <div className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-6">{t('model.comparison.tecionic.label')}</div>
              <div className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 text-purple-100">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    {t(`model.comparison.tecionic.items.${i}`)}
                  </div>
                ))}
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

            <button
              onClick={(e) => handleContactClick(e, router, pathname)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              {t('cta.button')}
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-400">
                <span>{t('cta.contact')}</span>
                <span className="hidden sm:block">•</span>
                <span>{t('cta.subtitle')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

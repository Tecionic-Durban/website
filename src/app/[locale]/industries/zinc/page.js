'use client'

// src/app/industries/zinc/page.js - Stripe-level UI
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, ArrowRight, Download, Shield, Sparkles, Droplets, Target, Filter } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'
import { useTranslations } from 'next-intl'

export default function ZincIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('zincIndustry')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // Three Ball Loader Component
  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce"></div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-4 text-slate-800 font-medium">{t('loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white">

        {/* Premium Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background with slate gradient + subtle grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(100 116 139) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(100, 116, 139, 0.12) 0%, rgba(148, 163, 184, 0.06) 40%, transparent 70%)'
          }}></div>

          <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
            {/* Industry badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span className="text-sm font-semibold text-slate-900">{t('hero.badge')}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl">
              {['peru', 'cajamarquilla', 'electrolytic'].map((key) => (
                <div key={key}>
                  <div className="text-4xl font-black text-gray-900 mb-1">{t(`hero.stats.${key}.value`)}</div>
                  <div className="text-sm text-gray-600">{t(`hero.stats.${key}.label`)}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('process-flow')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md">
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Process Flow - Modern Visual Design */}
        <section id="process-flow" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30"></div>

          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">{t('processFlow.badge')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                {t('processFlow.title')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {t('processFlow.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('processFlow.subtitle')}
              </p>
            </div>

            {/* Visual Process Flow Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {t.raw('processFlow.steps').map((step, i) => {
                const icons = [Droplets, Shield, Zap]
                const gradients = ['from-blue-500 to-blue-600', 'from-amber-500 to-orange-600', 'from-purple-500 to-purple-600']
                const item = { ...step, icon: icons[i], gradient: gradients[i] }
                return (
                <div key={i} className="group relative">
                  {/* Connector arrow */}
                  {i < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-white font-black text-lg">{item.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{item.step}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{item.process}</p>

                    {/* Challenge */}
                    <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{t('processFlow.labels.challenge')}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.challenge}</p>
                    </div>

                    {/* TSF Solution */}
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">{t('processFlow.labels.solution')}</p>
                          <p className="text-sm font-semibold text-emerald-900 leading-relaxed">{item.tsf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>

            {/* Summary Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-12 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center border-2 border-slate-900">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center border-2 border-slate-900">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center border-2 border-slate-900">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4">
                  <span className="text-emerald-400">{t('processFlow.summary.title')}</span> {t('processFlow.summary.titleSuffix')}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('processFlow.summary.description')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                  {['downtime', 'capex', 'mobile'].map((key) => (
                    <div key={key}>
                      <div className="text-3xl font-black text-emerald-400 mb-1">{t(`processFlow.summary.stats.${key}.value`)}</div>
                      <div className="text-sm text-gray-400">{t(`processFlow.summary.stats.${key}.label`)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TSF Solutions - Premium service cards */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{t('services.badge')}</div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Service grid - Compact with subtle visual distinction */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(() => {
                const serviceConfig = [
                  { key: 'leachResidue', icon: Beaker, color: 'blue', offset: false, cornerPos: 'right' },
                  { key: 'ewCleaning', icon: Zap, color: 'amber', offset: true, cornerPos: 'left' },
                  { key: 'concentrateDehydration', icon: Factory, color: 'purple', offset: false, cornerPos: 'right' },
                  { key: 'jarositeGoethite', icon: Microscope, color: 'cyan', offset: true, cornerPos: 'left' },
                  { key: 'fineSolids', icon: Filter, color: 'indigo', offset: false, cornerPos: 'right' }
                ]
                return serviceConfig.map((config) => (
                  <div key={config.key} className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${config.offset ? 'lg:translate-y-4' : ''}`}>
                    <div className={`absolute ${config.cornerPos === 'right' ? 'top-0 right-0' : 'top-0 left-0'} w-32 h-32 bg-gradient-to-br from-${config.color}-100 to-${config.color}-50 ${config.cornerPos === 'right' ? 'rounded-bl-full' : 'rounded-br-full'} opacity-50`}></div>
                    <div className={`absolute ${config.cornerPos === 'right' ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-24 h-24 bg-${config.color}-500/5 ${config.cornerPos === 'right' ? 'rounded-tr-full' : 'rounded-tl-full'}`}></div>

                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${config.color}-500 to-${config.color}-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-${config.color}-500/20 group-hover:shadow-xl group-hover:shadow-${config.color}-500/30 group-hover:scale-105 transition-all`}>
                        <config.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`services.cards.${config.key}.title`)}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {t(`services.cards.${config.key}.description`)}
                      </p>
                      <div className="space-y-2 text-sm">
                        {t.raw(`services.cards.${config.key}.specs`).map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className={`w-1 h-1 bg-${config.color}-500 rounded-full`}></div>
                            {spec}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="text-xs font-semibold text-gray-500">{t(`services.cards.${config.key}.status`)}</div>
                        <div className={`text-sm font-bold text-${config.color}-600`}>{t(`services.cards.${config.key}.statusLabel`)}</div>
                      </div>
                    </div>
                  </div>
                ))
              })()}
            </div>
          </div>
        </section>

        {/* Cajamarquilla Reference - Premium callout */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl p-12 shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-100 text-sm font-semibold mb-1">{t('cajamarquilla.badge')}</div>
                      <h3 className="text-3xl font-black text-white">{t('cajamarquilla.title')}</h3>
                    </div>
                  </div>

                  <p className="text-slate-100 text-lg mb-8 leading-relaxed">
                    {t('cajamarquilla.description')}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-white font-bold mb-3">{t('cajamarquilla.challenges.title')}</div>
                      <div className="space-y-2 text-sm text-slate-50">
                        {t.raw('cajamarquilla.challenges.items').map((item, i) => (
                          <div key={i}>• {item}</div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-white font-bold mb-3">{t('cajamarquilla.advantages.title')}</div>
                      <div className="space-y-2 text-sm text-slate-50">
                        {t.raw('cajamarquilla.advantages.items').map((item, i) => (
                          <div key={i}>• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="text-xs font-semibold text-slate-200 mb-2">{t('cajamarquilla.opportunity.label')}</div>
                    <p className="text-slate-100 text-sm">
                      {t('cajamarquilla.opportunity.text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{t('results.badge')}</div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                {t('results.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('results.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-12">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">{t('results.before')}</div>
                <div className="space-y-4">
                  {['purity', 'impurities', 'consumption', 'recovery'].map((key) => (
                    <div key={key} className="flex items-center justify-between p-5 rounded-2xl bg-red-50 border border-red-100">
                      <span className="text-sm font-medium text-gray-700">{t(`results.metrics.${key}.label`)}</span>
                      <div className="text-right">
                        <div className="text-3xl font-black text-red-600">{t(`results.metrics.${key}.before`)}</div>
                        <div className="text-xs text-gray-500">{t(`results.metrics.${key}.beforeUnit`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">{t('results.after')}</div>
                <div className="space-y-4">
                  {['purity', 'impurities', 'consumption', 'recovery'].map((key) => (
                    <div key={key} className="flex items-center justify-between p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <span className="text-sm font-medium text-gray-700">{t(`results.metrics.${key}.label`)}</span>
                      <div className="text-right">
                        <div className="text-3xl font-black text-emerald-600">{t(`results.metrics.${key}.after`)}</div>
                        <div className="text-xs text-gray-500">{t(`results.metrics.${key}.afterUnit`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key improvements */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200">
              <div className="grid md:grid-cols-3 gap-8">
                {t.raw('results.improvements').map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-5xl font-black bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent mb-2">{item.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Mobile for Zinc Smelters */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{t('whyMobile.badge')}</div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  {t('whyMobile.title')}
                </h2>
                <div className="space-y-6">
                  {t.raw('whyMobile.reasons').map((reason, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{reason.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-gray-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-gray-900 mb-4">{t('whyMobile.highlight.value')}</div>
                    <div className="text-xl font-bold text-gray-700 mb-2">{t('whyMobile.highlight.label')}</div>
                    <div className="text-sm text-gray-500">{t('whyMobile.highlight.comparison')}</div>

                    <div className="mt-8 p-4 bg-white rounded-2xl shadow-sm">
                      <div className="text-sm font-semibold text-gray-900 mb-2">{t('whyMobile.highlight.model.title')}</div>
                      <div className="text-xs text-gray-600">
                        {t('whyMobile.highlight.model.description')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Premium CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {t('cta.title')}
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                {t('cta.primaryCta')}
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  {t('cta.secondaryCta')}
                </div>
              </button>
            </div>

            {/* Contact grid */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm font-semibold text-gray-400 mb-1">{t('cta.contact.email.label')}</div>
                <div className="text-white font-medium">{t('cta.contact.email.value')}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm font-semibold text-gray-400 mb-1">{t('cta.contact.phone.label')}</div>
                <div className="text-white font-medium">{t('cta.contact.phone.value')}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm font-semibold text-gray-400 mb-1">{t('cta.contact.location.label')}</div>
                <div className="text-white font-medium">{t('cta.contact.location.value')}</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

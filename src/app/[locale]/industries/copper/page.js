'use client'

// src/app/industries/copper/page.js - Stripe-inspired visual design
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Chemistry, Flash, Filter as FilterCarbon, Humidity, Settings as SettingsCarbon, Security } from '@carbon/icons-react'
import { Wrench, ArrowRight, Download, CheckCircle, TrendingUp, Factory } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { handleContactClick } from '@/utils/navigation'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CopperIndustryPage() {
  const t = useTranslations('copperIndustry')
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const stickyScrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !stickyScrollRef.current || !scrollContentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(stickyScrollRef.current, {
        backgroundColor: 'rgb(236, 253, 245)', // emerald-50
        scrollTrigger: {
          trigger: scrollContentRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 2,
        }
      })
    })

    return () => ctx.revert()
  }, [isLoading])


  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-bounce"></div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-6 text-gray-600 font-medium">{t('loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white">

        {/* Hero Section - Split layout with equipment photo */}
        <section className="relative overflow-hidden">
          {/* Background with copper/orange gradient + subtle grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(251, 146, 60, 0.08) 40%, transparent 70%)'
          }}></div>

          <div className="relative max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Content */}
              <div className="max-w-xl">
                <div className="inline-block px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-6">
                  <span className="text-sm font-semibold text-orange-900">{t('hero.badge')}</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                  {t('hero.title')}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t('hero.subtitle')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{t('hero.stats.years.value')}</div>
                    <div className="text-sm text-gray-600">{t('hero.stats.years.label')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{t('hero.stats.capex.value')}</div>
                    <div className="text-sm text-gray-600">{t('hero.stats.capex.label')}</div>
                  </div>
                </div>
              </div>

              {/* Right - Large equipment photo */}
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

        {/* Sticky scroll - simple */}
        <section ref={stickyScrollRef} className="bg-gray-50 py-20 transition-colors">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left - Sticky */}
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('stickyScroll.title')}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {t('stickyScroll.description')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('stickyScroll.subdescription')}
                </p>
              </div>

              {/* Right - Scrolls naturally */}
              <div ref={scrollContentRef} className="space-y-16">

                {/* Traditional model - scrolls up and out */}
                <div>
                  <div className="text-lg font-bold text-gray-600 uppercase tracking-wider mb-8">{t('stickyScroll.traditional.label')}</div>

                  <div className="space-y-12">
                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.traditional.items.capex.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('stickyScroll.traditional.items.capex.label')}</div>
                        <p className="text-gray-600">{t('stickyScroll.traditional.items.capex.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.traditional.items.implementation.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('stickyScroll.traditional.items.implementation.label')}</div>
                        <p className="text-gray-600">{t('stickyScroll.traditional.items.implementation.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.traditional.items.maintenance.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('stickyScroll.traditional.items.maintenance.label')}</div>
                        <p className="text-gray-600">{t('stickyScroll.traditional.items.maintenance.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.traditional.items.sizing.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('stickyScroll.traditional.items.sizing.label')}</div>
                        <p className="text-gray-600">{t('stickyScroll.traditional.items.sizing.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tecionic model - appears as you scroll */}
                <div className="pt-16">
                  <div className="text-lg font-bold text-emerald-900 uppercase tracking-wider mb-8">{t('stickyScroll.tecionic.label')}</div>

                  <div className="space-y-12">
                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.tecionic.items.capex.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">{t('stickyScroll.tecionic.items.capex.label')}</div>
                        <p className="text-gray-700">{t('stickyScroll.tecionic.items.capex.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.tecionic.items.mobilization.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">{t('stickyScroll.tecionic.items.mobilization.label')}</div>
                        <p className="text-gray-700">{t('stickyScroll.tecionic.items.mobilization.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.tecionic.items.maintenance.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">{t('stickyScroll.tecionic.items.maintenance.label')}</div>
                        <p className="text-gray-700">{t('stickyScroll.tecionic.items.maintenance.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.tecionic.items.technology.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">{t('stickyScroll.tecionic.items.technology.label')}</div>
                        <p className="text-gray-700">{t('stickyScroll.tecionic.items.technology.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.tecionic.items.scalability.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">{t('stickyScroll.tecionic.items.scalability.label')}</div>
                        <p className="text-gray-700">{t('stickyScroll.tecionic.items.scalability.description')}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">{t('stickyScroll.tecionic.items.operation.value')}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">{t('stickyScroll.tecionic.items.operation.label')}</div>
                        <p className="text-gray-700">{t('stickyScroll.tecionic.items.operation.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Why TSF - Strategic partner positioning */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-emerald-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                {t('whyTecionic.badge')}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('whyTecionic.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('whyTecionic.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-bold text-emerald-600 mb-4">{t('whyTecionic.steps.diagnosis.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('whyTecionic.steps.diagnosis.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('whyTecionic.steps.diagnosis.description')}
                </p>
                <div className="text-sm text-gray-500">{t('whyTecionic.steps.diagnosis.timeline')}</div>
              </div>

              <div>
                <div className="text-6xl font-bold text-emerald-600 mb-4">{t('whyTecionic.steps.setup.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('whyTecionic.steps.setup.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('whyTecionic.steps.setup.description')}
                </p>
                <div className="text-sm text-gray-500">{t('whyTecionic.steps.setup.timeline')}</div>
              </div>

              <div>
                <div className="text-6xl font-bold text-emerald-600 mb-4">{t('whyTecionic.steps.operation.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('whyTecionic.steps.operation.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('whyTecionic.steps.operation.description')}
                </p>
                <div className="text-sm text-gray-500">{t('whyTecionic.steps.operation.timeline')}</div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t('whyTecionic.keyDifference.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('whyTecionic.keyDifference.description')}
                  </p>
                </div>
                <div className="space-y-3">
                  {t.raw('whyTecionic.keyDifference.benefits').map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Clean visual layout */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-gray-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                {t('services.badge')}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('services.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Service grid - Compact with subtle visual distinction */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

              {/* Service 1 - Blue accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all">
                    <Chemistry className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.cards.organicTreatment.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.cards.organicTreatment.description')}
                  </p>
                  <div className="space-y-2 text-sm">
                    {t.raw('services.cards.organicTreatment.specs').map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">{t('services.cards.organicTreatment.validated')}</div>
                    <div className="text-sm font-bold text-blue-600">{t('services.cards.organicTreatment.client')}</div>
                  </div>
                </div>
              </div>

              {/* Service 2 - Amber accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-amber-100 to-orange-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group-hover:shadow-xl group-hover:shadow-amber-500/30 group-hover:scale-105 transition-all">
                    <Flash className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.cards.ewCleaning.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.cards.ewCleaning.description')}
                  </p>
                  <div className="space-y-2 text-sm">
                    {t.raw('services.cards.ewCleaning.specs').map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">{t('services.cards.ewCleaning.validated')}</div>
                    <div className="text-sm font-bold text-amber-600">{t('services.cards.ewCleaning.client')}</div>
                  </div>
                </div>
              </div>

              {/* Service 3 - Purple accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-violet-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all">
                    <FilterCarbon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.cards.concentrateDehydration.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.cards.concentrateDehydration.description')}
                  </p>
                  <div className="space-y-2 text-sm">
                    {t.raw('services.cards.concentrateDehydration.specs').map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">{t('services.cards.concentrateDehydration.validated')}</div>
                    <div className="text-sm font-bold text-purple-600">{t('services.cards.concentrateDehydration.client')}</div>
                  </div>
                </div>
              </div>

              {/* Service 4 - Teal accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-teal-100 to-emerald-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:shadow-xl group-hover:shadow-teal-500/30 group-hover:scale-105 transition-all">
                    <Humidity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.cards.sxSludge.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.cards.sxSludge.description')}
                  </p>
                  <div className="space-y-2 text-sm">
                    {t.raw('services.cards.sxSludge.specs').map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service 5 - Slate accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-gray-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-500/20 group-hover:shadow-xl group-hover:shadow-slate-500/30 group-hover:scale-105 transition-all">
                    <SettingsCarbon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('services.cards.fineSolids.title')}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('services.cards.fineSolids.description')}
                  </p>
                  <div className="space-y-2 text-sm">
                    {t.raw('services.cards.fineSolids.specs').map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Backup for planned maintenance callout */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Security className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-emerald-100 text-sm font-semibold mb-1">{t('services.backup.badge')}</div>
                    <h3 className="text-3xl font-bold">{t('services.backup.title')}</h3>
                  </div>
                </div>
                <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                  {t('services.backup.description')}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="font-bold mb-3">{t('services.backup.keyBenefits.title')}</div>
                    <div className="space-y-2 text-sm text-emerald-50">
                      {t.raw('services.backup.keyBenefits.items').map((item, index) => (
                        <div key={index}>• {item}</div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="font-bold mb-3">{t('services.backup.rapidMobilization.title')}</div>
                    <div className="space-y-2 text-sm text-emerald-50">
                      {t.raw('services.backup.rapidMobilization.items').map((item, index) => (
                        <div key={index}>• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split section - EW Cell cleaning with photo */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/EW_Photos/20251009_141022.jpg"
                  alt={t('ewSection.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content */}
              <div>
                <div className="text-amber-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                  {t('ewSection.badge')}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('ewSection.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t('ewSection.description')}
                </p>

                <div className="space-y-4 mb-8">
                  {['cells', 'return', 'altitude'].map((key) => (
                    <div key={key} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">{t(`ewSection.benefits.${key}.title`)}</div>
                        <div className="text-gray-600">{t(`ewSection.benefits.${key}.description`)}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA to EW cleaning service page */}
                <button
                  onClick={() => handleContactClick('/services/ew-cleaning', { router, currentPath: pathname })}
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:gap-3 shadow-lg shadow-amber-600/20"
                >
                  {t('ewSection.cta')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Radomiro Tomic Case Study - Visual with data */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-blue-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                {t('caseStudy.badge')}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('caseStudy.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('caseStudy.subtitle')}
              </p>
            </div>

            {/* Before/After comparison */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">{t('caseStudy.before')}</div>
                <div className="space-y-4">
                  {['tif', 'tsf', 'entrainment', 'efficiency'].map((key) => (
                    <div key={key} className="flex items-center justify-between p-5 rounded-xl bg-red-50">
                      <span className="font-medium text-gray-700">{t(`caseStudy.metrics.${key}.label`)}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{t(`caseStudy.metrics.${key}.before`)}</div>
                        <div className="text-xs text-gray-500">{t(`caseStudy.metrics.${key}.beforeUnit`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">{t('caseStudy.after')}</div>
                <div className="space-y-4">
                  {['tif', 'tsf', 'entrainment', 'efficiency'].map((key) => (
                    <div key={key} className="flex items-center justify-between p-5 rounded-xl bg-emerald-50">
                      <span className="font-medium text-gray-700">{t(`caseStudy.metrics.${key}.label`)}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{t(`caseStudy.metrics.${key}.after`)}</div>
                        <div className="text-xs text-gray-500">{t(`caseStudy.metrics.${key}.afterUnit`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Economic impact */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-12 border border-emerald-100">
              <div className="text-center mb-8">
                <div className="text-sm font-semibold text-emerald-900 mb-2 uppercase tracking-wider">{t('caseStudy.economicImpact.title')}</div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {['monthly', 'annual', 'avoided'].map((key) => (
                  <div key={key} className="text-center">
                    <div className="text-5xl font-bold text-emerald-600 mb-2">{t(`caseStudy.economicImpact.${key}.value`)}</div>
                    <div className="text-sm text-gray-600 font-medium">{t(`caseStudy.economicImpact.${key}.label`)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile vs Fixed comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-gray-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                {t('mobileVsFixed.badge')}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('mobileVsFixed.title')}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Traditional */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">{t('mobileVsFixed.traditional.label')}</div>
                <div className="space-y-4">
                  {t.raw('mobileVsFixed.traditional.items').map((item, i) => (
                    <div key={i} className="group relative flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Subtle corner decoration */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-40"></div>

                      <div className="relative w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Security className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="relative">
                        <div className="font-bold text-gray-900 text-lg mb-1">{item.metric}</div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecionic Model */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">{t('mobileVsFixed.tecionic.label')}</div>
                <div className="space-y-4">
                  {t.raw('mobileVsFixed.tecionic.items').map((item, i) => (
                    <div key={i} className="group relative flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Subtle corner decoration */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/30 rounded-bl-full"></div>

                      <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="relative">
                        <div className="font-bold text-emerald-900 text-lg mb-1">{item.metric}</div>
                        <div className="text-sm text-emerald-700">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                {t('cta.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={(e) => handleContactClick(e, router, pathname)}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('cta.primaryCta')}
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2 justify-center">
                    <Download className="w-5 h-5" />
                    {t('cta.secondaryCta')}
                  </div>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{t('cta.contact.title')}</div>
                  <div className="text-white font-medium">{t('cta.contact.phone')}</div>
                  <div className="text-gray-400 text-sm">{t('cta.contact.email')}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{t('cta.coverage.title')}</div>
                  <div className="text-white font-medium">{t('cta.coverage.region')}</div>
                  <div className="text-gray-400 text-sm">{t('cta.coverage.description')}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{t('cta.clients.title')}</div>
                  <div className="text-white font-medium">{t('cta.clients.main')}</div>
                  <div className="text-gray-400 text-sm">{t('cta.clients.others')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}


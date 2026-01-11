'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { RainDrop, Industry, DeliveryTruck, Security, CheckmarkFilled, ArrowRight, Time, UserMultiple, Headset, Tools, Recycle, Growth, Settings } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CrudeOilIndustryPage() {
  const t = useTranslations('crudeOilIndustry')
  const locale = useLocale()
  const stickyScrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !stickyScrollRef.current || !scrollContentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(stickyScrollRef.current, {
        backgroundColor: 'rgb(254, 252, 232)', // amber-50
        scrollTrigger: {
          trigger: scrollContentRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 2,
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Split layout with equipment photo */}
      <section className="relative overflow-hidden">
        {/* Background with gray/dark gradient + subtle grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(55 65 81) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(55, 65, 81, 0.15) 0%, rgba(75, 85, 99, 0.08) 40%, transparent 70%)'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - Content */}
            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                {t('hero.title')}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
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

      {/* KEY BENEFITS - Quick wins row */}
      <section className="bg-gradient-to-br from-amber-50/50 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('benefits.title')}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RainDrop size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('benefits.items.recovery.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.items.recovery.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Industry size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('benefits.items.capacity.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.items.capacity.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DeliveryTruck size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('benefits.items.disposal.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.items.disposal.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Security size={28} className="text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('benefits.items.compliance.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.items.compliance.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY - Dark section, conversational */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left - Story */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {t('opportunity.title')}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t('opportunity.description')}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('opportunity.subdescription')}
              </p>
            </div>

            {/* Right - Stats */}
            <div className="space-y-8">
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="text-5xl font-bold text-amber-400 mb-2">{t('opportunity.stats.waste.value')}</div>
                <div className="text-gray-300">{t('opportunity.stats.waste.label')}</div>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="text-5xl font-bold text-amber-400 mb-2">{t('opportunity.stats.hc.value')}</div>
                <div className="text-gray-300">{t('opportunity.stats.hc.label')}</div>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="text-5xl font-bold text-amber-400 mb-2">{t('opportunity.stats.cost.value')}</div>
                <div className="text-gray-300">{t('opportunity.stats.cost.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SCROLL COMPARISON */}
      <section ref={stickyScrollRef} className="bg-gray-50 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left - Sticky */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('comparison.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('comparison.description')}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                {t('comparison.subdescription')}
              </p>
            </div>

            {/* Right - Scrolls naturally */}
            <div ref={scrollContentRef} className="space-y-16">

              {/* Traditional model */}
              <div>
                <div className="text-lg font-bold text-gray-600 uppercase tracking-wider mb-8">{t('comparison.traditional.label')}</div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-gray-300">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.traditional.items.capex.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('comparison.traditional.items.capex.label')}</div>
                      <p className="text-gray-600">{t('comparison.traditional.items.capex.description')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-gray-300">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.traditional.items.timeline.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('comparison.traditional.items.timeline.label')}</div>
                      <p className="text-gray-600">{t('comparison.traditional.items.timeline.description')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-gray-300">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.traditional.items.risk.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{t('comparison.traditional.items.risk.label')}</div>
                      <p className="text-gray-600">{t('comparison.traditional.items.risk.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tecionic model */}
              <div className="pt-16">
                <div className="text-lg font-bold text-amber-700 uppercase tracking-wider mb-8">{t('comparison.tecionic.label')}</div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-amber-200">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.tecionic.items.capex.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-amber-700 uppercase tracking-wide mb-2">{t('comparison.tecionic.items.capex.label')}</div>
                      <p className="text-gray-700">{t('comparison.tecionic.items.capex.description')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-amber-200">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.tecionic.items.deployment.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-amber-700 uppercase tracking-wide mb-2">{t('comparison.tecionic.items.deployment.label')}</div>
                      <p className="text-gray-700">{t('comparison.tecionic.items.deployment.description')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-amber-200">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.tecionic.items.maintenance.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-amber-700 uppercase tracking-wide mb-2">{t('comparison.tecionic.items.maintenance.label')}</div>
                      <p className="text-gray-700">{t('comparison.tecionic.items.maintenance.description')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 pb-8 border-b border-amber-200">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.tecionic.items.exproof.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-amber-700 uppercase tracking-wide mb-2">{t('comparison.tecionic.items.exproof.label')}</div>
                      <p className="text-gray-700">{t('comparison.tecionic.items.exproof.description')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{t('comparison.tecionic.items.scalability.value')}</div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-amber-700 uppercase tracking-wide mb-2">{t('comparison.tecionic.items.scalability.label')}</div>
                      <p className="text-gray-700">{t('comparison.tecionic.items.scalability.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS - Horizontal Carousel */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-semibold text-emerald-400">Aplicaciones</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                {t('applications.title')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                {t('applications.subtitle')}
              </p>
            </div>
            {/* Scroll hint */}
            <div className="hidden lg:flex items-center gap-2 text-gray-500">
              <span className="text-sm">Desliza para explorar</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 overflow-x-auto pb-8 px-4 lg:px-8 snap-x snap-mandatory scrollbar-hide scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {/* Spacer for centering first card */}
            <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]"></div>

            {/* Card 1: Delayed Coker */}
            <div className="flex-shrink-0 w-[340px] lg:w-[420px] snap-center snap-always">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                {/* Decorative corner accent */}
                <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rotate-45 translate-x-16 -translate-y-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Industry size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{t('applications.areas.coker.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('applications.areas.coker.description')}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                    <span>{t('applications.areas.coker.cta')}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: FCC Wet Gas Scrubber */}
            <div className="flex-shrink-0 w-[340px] lg:w-[420px] snap-center snap-always">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rotate-45 translate-x-16 -translate-y-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <RainDrop size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{t('applications.areas.fcc.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('applications.areas.fcc.description')}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                    <span>{t('applications.areas.fcc.cta')}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Tank Cleaning */}
            <div className="flex-shrink-0 w-[340px] lg:w-[420px] snap-center snap-always">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rotate-45 translate-x-16 -translate-y-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Recycle size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{t('applications.areas.tanks.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('applications.areas.tanks.description')}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                    <span>{t('applications.areas.tanks.cta')}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Effluent Treatment */}
            <div className="flex-shrink-0 w-[340px] lg:w-[420px] snap-center snap-always">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rotate-45 translate-x-16 -translate-y-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Growth size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{t('applications.areas.effluent.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('applications.areas.effluent.description')}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                    <span>{t('applications.areas.effluent.cta')}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: API Separators */}
            <div className="flex-shrink-0 w-[340px] lg:w-[420px] snap-center snap-always">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rotate-45 translate-x-16 -translate-y-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Settings size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{t('applications.areas.api.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('applications.areas.api.description')}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                    <span>{t('applications.areas.api.cta')}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Other Applications */}
            <div className="flex-shrink-0 w-[340px] lg:w-[420px] snap-center snap-always">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rotate-45 translate-x-16 -translate-y-16"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <CheckmarkFilled size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{t('applications.areas.other.title')}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('applications.areas.other.description')}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                    <span>{t('applications.areas.other.cta')}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer for centering last card */}
            <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]"></div>
          </div>
        </div>

        {/* Scroll indicator dots - mobile only */}
        <div className="flex lg:hidden justify-center gap-2 mt-8">
          <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </section>

      {/* CONTINUITY - Operational excellence with branded circles */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - Message */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {t('continuity.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('continuity.description')}
              </p>
            </div>

            {/* Right - Features as vertical stack with connecting line */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-amber-500 via-amber-400 to-amber-300"></div>

              <div className="space-y-8">
                {/* Feature 1: Staff */}
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                    <UserMultiple size={22} className="text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{t('continuity.features.staff.title')}</h3>
                    <p className="text-gray-600">{t('continuity.features.staff.description')}</p>
                  </div>
                </div>

                {/* Feature 2: Monitoring */}
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-400/30">
                    <Time size={22} className="text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{t('continuity.features.monitoring.title')}</h3>
                    <p className="text-gray-600">{t('continuity.features.monitoring.description')}</p>
                  </div>
                </div>

                {/* Feature 3: Maintenance */}
                <div className="relative flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-300/30">
                    <Tools size={22} className="text-gray-700" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{t('continuity.features.maintenance.title')}</h3>
                    <p className="text-gray-600">{t('continuity.features.maintenance.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION - Lab results as big proof cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-amber-600 text-sm font-semibold mb-4 uppercase tracking-wider">
              {t('validation.badge')}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('validation.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('validation.description')}
            </p>
          </div>

          {/* Results as big cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-6xl font-black text-amber-600 mb-2">84%</div>
              <div className="text-lg font-bold text-gray-900 mb-2">{t('validation.results.phenolic.title')}</div>
              <p className="text-gray-600 text-sm">{t('validation.results.phenolic.description')}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-6xl font-black text-amber-600 mb-2">77%</div>
              <div className="text-lg font-bold text-gray-900 mb-2">{t('validation.results.phenol.title')}</div>
              <p className="text-gray-600 text-sm">{t('validation.results.phenol.description')}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-6xl font-black text-amber-600 mb-2">33%</div>
              <div className="text-lg font-bold text-gray-900 mb-2">{t('validation.results.process.title')}</div>
              <p className="text-gray-600 text-sm">{t('validation.results.process.description')}</p>
            </div>
          </div>

          {/* What this means */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('validation.impact.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{t('validation.impact.items.volume')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{t('validation.impact.items.transport')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckmarkFilled size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{t('validation.impact.items.water')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              {t('caseStudy.badge')}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              {t('caseStudy.title')}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem]">
                <Image
                  src="/crude_oil.png"
                  alt={t('caseStudy.imageAlt')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="text-white font-semibold">{t('caseStudy.location')}</div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">84%</div>
                    <div className="text-xs text-gray-600">{t('caseStudy.metrics.reduction')}</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">3</div>
                    <div className="text-xs text-gray-600">{t('caseStudy.metrics.types')}</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">$0</div>
                    <div className="text-xs text-gray-600">{t('caseStudy.metrics.investment')}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {t('caseStudy.description')}
                </p>

                <Link
                  href={`/${locale}/case-studies/lodos-petroleros`}
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  {t('caseStudy.cta')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-amber-100 mb-10">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="inline-flex items-center px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition-colors shadow-xl">
              {t('cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-amber-200 text-sm">
            <span>{t('cta.response')}</span>
            <span>{t('cta.coverage')}</span>
            <span>{t('cta.certification')}</span>
          </div>
        </div>
      </section>

    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { RainDrop, Chemistry, Industry, ArrowRight, Time, UserMultiple, Recycle, Growth, Settings } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LithiumIndustryPage() {
  const locale = useLocale()
  const t = useTranslations('lithiumIndustry')
  const stickyScrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !stickyScrollRef.current || !scrollContentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(stickyScrollRef.current, {
        backgroundColor: 'rgb(236, 254, 255)',
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

      {/* Hero - The Race */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 182 212) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

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

      {/* The Stakes - Why This Matters */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {t('stakes.title')}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t('stakes.description')}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t('stakes.subdescription')}
              </p>
              <p className="text-lg text-white font-semibold">
                {t('stakes.conclusion')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-cyan-500 pl-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{t('stakes.problems.traditional.title')}</div>
                <div className="text-gray-300">
                  {t('stakes.problems.traditional.description')}
                </div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{t('stakes.problems.scale.title')}</div>
                <div className="text-gray-300">
                  {t('stakes.problems.scale.description')}
                </div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{t('stakes.problems.capital.title')}</div>
                <div className="text-gray-300">
                  {t('stakes.problems.capital.description')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tecionic Answer */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              {t('answer.title')}
            </h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              {t('answer.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Value Props - What You Get */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
            {t('valueProps.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Speed */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Time size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('valueProps.speed.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('valueProps.speed.description')}
                </p>
              </div>
            </div>

            {/* Capital */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Growth size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('valueProps.capital.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('valueProps.capital.description')}
                </p>
              </div>
            </div>

            {/* Flexibility */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Settings size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('valueProps.flexibility.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('valueProps.flexibility.description')}
                </p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <UserMultiple size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('valueProps.focus.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('valueProps.focus.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Tecionic Works */}
      <section ref={stickyScrollRef} className="bg-gray-50 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('howWeWork.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('howWeWork.description')}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                {t('howWeWork.subdescription')}
              </p>
            </div>

            <div ref={scrollContentRef} className="space-y-12">

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{t('howWeWork.steps.step1.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.step1.title')}</h3>
                <p className="text-gray-600">
                  {t('howWeWork.steps.step1.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{t('howWeWork.steps.step2.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.step2.title')}</h3>
                <p className="text-gray-600">
                  {t('howWeWork.steps.step2.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{t('howWeWork.steps.step3.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.step3.title')}</h3>
                <p className="text-gray-600">
                  {t('howWeWork.steps.step3.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{t('howWeWork.steps.step4.number')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('howWeWork.steps.step4.title')}</h3>
                <p className="text-gray-600">
                  {t('howWeWork.steps.step4.description')}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Where We Fit in Your Process */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-400">{t('applications.badge')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            {t('applications.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            {t('applications.description')}
          </p>
        </div>

        {/* Horizontal scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 overflow-x-auto pb-8 px-4 lg:px-8 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]"></div>

            {/* Pre-DLE */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <RainDrop size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('applications.items.preDle.title')}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('applications.items.preDle.description')}
                </p>
                <div className="text-cyan-400 font-semibold">→ {t('applications.items.preDle.result')}</div>
              </div>
            </div>

            {/* Precipitation */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Chemistry size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('applications.items.precipitation.title')}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('applications.items.precipitation.description')}
                </p>
                <div className="text-cyan-400 font-semibold">→ {t('applications.items.precipitation.result')}</div>
              </div>
            </div>

            {/* Li2CO3 */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Industry size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('applications.items.carbonate.title')}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('applications.items.carbonate.description')}
                </p>
                <div className="text-cyan-400 font-semibold">→ {t('applications.items.carbonate.result')}</div>
              </div>
            </div>

            {/* Water */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Recycle size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('applications.items.water.title')}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('applications.items.water.description')}
                </p>
                <div className="text-cyan-400 font-semibold">→ {t('applications.items.water.result')}</div>
              </div>
            </div>

            {/* Pilots */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Settings size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('applications.items.pilots.title')}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('applications.items.pilots.description')}
                </p>
                <div className="text-cyan-400 font-semibold">→ {t('applications.items.pilots.result')}</div>
              </div>
            </div>

            <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]"></div>
          </div>
        </div>
      </section>

      {/* The Tecionic Track Record */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                {t('trackRecord.badge')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {t('trackRecord.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {t('trackRecord.description')}
              </p>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                {t('trackRecord.subdescription')}
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                {t('trackRecord.conclusion')}
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">{t('trackRecord.stats.years.value')}</div>
                  <div>
                    <div className="font-bold text-gray-900">{t('trackRecord.stats.years.label')}</div>
                    <div className="text-gray-600 text-sm">{t('trackRecord.stats.years.sublabel')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">{t('trackRecord.stats.copper.value')}</div>
                  <div>
                    <div className="font-bold text-gray-900">{t('trackRecord.stats.copper.label')}</div>
                    <div className="text-gray-600 text-sm">{t('trackRecord.stats.copper.sublabel')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">{t('trackRecord.stats.lithium.value')}</div>
                  <div>
                    <div className="font-bold text-gray-900">{t('trackRecord.stats.lithium.label')}</div>
                    <div className="text-gray-600 text-sm">{t('trackRecord.stats.lithium.sublabel')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">{t('trackRecord.stats.latam.value')}</div>
                  <div>
                    <div className="font-bold text-gray-900">{t('trackRecord.stats.latam.label')}</div>
                    <div className="text-gray-600 text-sm">{t('trackRecord.stats.latam.sublabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}<br />
            <span className="text-cyan-400">{t('cta.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contacto`} className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-colors shadow-xl shadow-cyan-500/20">
              {t('cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <span>{t('cta.footer.response')}</span>
            <span>{t('cta.footer.coverage')}</span>
            <span>{t('cta.footer.commitment')}</span>
          </div>
        </div>
      </section>

    </div>
  )
}

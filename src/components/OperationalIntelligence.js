// src/components/OperationalIntelligence.js
'use client'

import { useRef, useEffect } from 'react'
import { Analytics, ChartLineData, Meter, ArrowRight, Chemistry } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function OperationalIntelligence() {
  const t = useTranslations('operationalIntelligence')
  const sectionRef = useRef(null)

  // Progressive disclosure on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressiveElements = entry.target.querySelectorAll('.progressive-reveal')
          progressiveElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('revealed')
            }, index * 150)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const datapoints = [
    {
      key: 'tif',
      icon: Chemistry,
      gradientBg: 'from-cyan-600 via-cyan-700 to-cyan-800',
      borderColor: 'border-cyan-500/30'
    },
    {
      key: 'tsf',
      icon: ChartLineData,
      gradientBg: 'from-purple-600 via-purple-700 to-purple-800',
      borderColor: 'border-purple-500/30'
    },
    {
      key: 'turbidity',
      icon: Analytics,
      gradientBg: 'from-amber-600 via-amber-700 to-amber-800',
      borderColor: 'border-amber-500/30'
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(139 92 246 / 0.4) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Stripe style */}
        <div className="max-w-3xl mb-16 lg:mb-20 progressive-reveal">
          <span className="inline-flex items-center px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold rounded-full mb-6">
            <Meter className="w-4 h-4 mr-2" />
            {t('badge')}
          </span>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            {t('headline')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              {t('headlineSub')}
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            {t('description')}
          </p>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {t('cta.primary')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Datapoint cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {datapoints.map((datapoint, index) => (
            <div
              key={datapoint.key}
              className={`progressive-reveal group relative rounded-2xl p-8 border transition-all duration-500 bg-gradient-to-br ${datapoint.gradientBg} ${datapoint.borderColor} hover:scale-[1.02]`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6`}>
                <datapoint.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3">
                {t(`datapoints.${datapoint.key}.title`)}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t(`datapoints.${datapoint.key}.description`)}
              </p>

              {/* Benefits list */}
              <ul className="space-y-3">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">
                      {t(`datapoints.${datapoint.key}.benefits.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom value proposition */}
        <div className="mt-16 lg:mt-20 progressive-reveal">
          <div className="bg-gradient-to-r from-purple-500/10 via-slate-900/50 to-cyan-500/10 rounded-2xl p-8 lg:p-12 border border-slate-800">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {t('labSection.title')}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {t('labSection.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-300">{t('labSection.features.0')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-300">{t('labSection.features.1')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-300">{t('labSection.features.2')}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-slate-500 text-sm">{t('labSection.stats.monitoring')}</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">48h</div>
                  <div className="text-slate-500 text-sm">{t('labSection.stats.turnaround')}</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">±2%</div>
                  <div className="text-slate-500 text-sm">{t('labSection.stats.accuracy')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

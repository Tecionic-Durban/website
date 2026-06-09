'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Globe2, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function LatamPresence() {
  const t = useTranslations('latamPresence')

  // Dynamically import the 3D globe to avoid SSR issues
  const LatamGlobe = dynamic(() => import('./LatamGlobe'), {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-slate-900/50 rounded-2xl flex items-center justify-center">
        <div className="text-emerald-400 animate-pulse flex items-center gap-2">
          <Globe2 className="w-6 h-6 animate-spin" />
          <span>{t('loadingMap')}</span>
        </div>
      </div>
    )
  })

  // Industries served
  const industries = [
    { key: 'copper', color: 'bg-orange-500', href: '/industries/copper' },
    { key: 'lithium', color: 'bg-cyan-500', href: '/industries/lithium' },
    { key: 'zinc', color: 'bg-slate-400', href: '/industries/zinc' },
    { key: 'oil', color: 'bg-amber-500', href: '/industries/crude-oil' },
    { key: 'potassium', color: 'bg-purple-500', href: '/industries/potassium' },
  ]

  return (
    <section className="relative z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Desktop: Globe positioned left */}
      <div className="absolute -left-[100px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <LatamGlobe />
      </div>

      {/* Mobile: Globe bleeds from left, content on right (Stripe-style) */}
      <div className="lg:hidden relative min-h-[560px] overflow-hidden">
        {/* Globe — bleeds off left edge as ambient depth element */}
        <div className="absolute -left-[80px] top-1/2 -translate-y-1/2 w-[360px] h-[360px] opacity-50 pointer-events-none">
          <LatamGlobe mobile={true} className="w-full h-full" />
        </div>

        {/* Gradient mask — fades left edge cleanly, then transitions to content zone */}
        <div
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{ background: 'linear-gradient(to right, rgba(2,6,23,0.55) 0%, transparent 12%, transparent 28%, rgba(2,6,23,0.75) 46%, rgba(2,6,23,0.97) 58%)' }}
        />

        {/* Content — anchored to right half */}
        <div className="relative z-10 flex flex-col justify-center min-h-[560px] py-10 pr-5">
          <div className="ml-[43%] space-y-5">
            {/* Headline */}
            <div>
              <h2 className="text-[1.35rem] font-bold text-white mb-2 leading-snug">
                {t('headline')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t('headlineSub')}</span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Mobile equipment callout */}
            <div className="border-l-2 border-emerald-500 pl-3">
              <p className="text-white text-sm font-semibold mb-1">{t('mobileEquipment.title')}</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                {t('mobileEquipment.description')}
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group mt-2 text-xs"
              >
                {t('requestEquipment')}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>
            </div>

            {/* Offices */}
            <div className="border-l-2 border-cyan-500 pl-3">
              <p className="text-white text-sm font-semibold mb-0.5">{t('operationBases')}</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Santiago · Calama · Lima
              </p>
            </div>

            {/* Industries */}
            <div className="border-l-2 border-purple-500 pl-3">
              <p className="text-white text-sm font-semibold mb-2">{t('mainIndustries')}</p>
              <div className="flex flex-wrap gap-1.5">
                {industries.map((industry, index) => (
                  <Link
                    key={index}
                    href={industry.href}
                    className="flex items-center gap-1.5 bg-slate-800/70 backdrop-blur-sm px-2.5 py-1 rounded-md group"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${industry.color}`} />
                    <span className="text-white text-xs group-hover:text-emerald-400 transition-colors">{t(`industries.${industry.key}`)}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-4 lg:px-8 py-40 min-h-[900px]">
        {/* Header */}
        <div className="text-right ml-auto max-w-xl mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            {t('headline')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t('headlineSub')}</span>
          </h2>
          <p className="text-lg text-slate-400">
            {t('description')}
          </p>
        </div>

        {/* Content - positioned on the right */}
        <div className="ml-auto max-w-lg space-y-10">
          {/* Mobile equipment callout */}
          <div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white text-lg font-medium mb-1">{t('mobileEquipment.title')}</p>
              <p className="text-slate-400">
                {t('mobileEquipment.description')}
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group mt-3 ml-4"
            >
              {t('requestEquipment')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>

          {/* Offices - simple inline */}
          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider mb-3">{t('operationBases')}</p>
            <p className="text-white text-lg">
              <span className="font-medium">Santiago</span>
              <span className="text-slate-500">, Chile</span>
              <span className="text-slate-600 mx-3">·</span>
              <span className="font-medium">Calama</span>
              <span className="text-slate-500">, Chile</span>
              <span className="text-slate-600 mx-3">·</span>
              <span className="font-medium">Lima</span>
              <span className="text-slate-500">, Perú</span>
            </p>
          </div>

          {/* Industries - horizontal colored bars */}
          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider mb-4">{t('mainIndustries')}</p>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={industry.href}
                  className="flex items-center gap-3 group"
                >
                  <div className={`w-1 h-6 rounded-full ${industry.color}`} />
                  <span className="text-white group-hover:text-emerald-400 transition-colors">{t(`industries.${industry.key}`)}</span>
                  <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
    <section className="relative z-10 py-20 lg:py-40 lg:min-h-[900px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-visible">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Globe - Stripe-style: extends beyond container, zoomed in */}
      <div className="absolute -left-[100px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <LatamGlobe />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center lg:text-right lg:ml-auto lg:max-w-xl mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            {t('headline')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t('headlineSub')}</span>
          </h2>
          <p className="text-lg text-slate-400">
            {t('description')}
          </p>
        </div>

        {/* Mobile globe */}
        <div className="lg:hidden mb-8 -mx-4">
          <LatamGlobe className="w-full h-[450px]" />
        </div>

        {/* Content - positioned on the right */}
        <div className="lg:ml-auto lg:max-w-lg space-y-10">
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

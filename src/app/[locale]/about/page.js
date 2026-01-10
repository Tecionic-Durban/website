'use client'
// src/app/about/page.js
import Image from 'next/image'
import { Flash, Security, Renew, Connect, Collaborate, Time, CertificateCheck, CheckmarkFilled, Growth, Building, Partnership, Chemistry, Earth, RainDrop, Calendar } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function AboutPage() {
  const t = useTranslations('aboutPage')

  // Icons for values (order matches JSON array)
  const valueIcons = [Flash, Security, Renew, Connect, Collaborate]

  // Icons and colors for timeline milestones (order matches JSON array)
  const milestoneConfig = [
    { icon: Building, color: "from-blue-500 to-blue-600" },
    { icon: Partnership, color: "from-emerald-500 to-emerald-600" },
    { icon: Chemistry, color: "from-orange-500 to-orange-600" },
    { icon: Growth, color: "from-purple-500 to-purple-600" },
    { icon: Flash, color: "from-cyan-500 to-cyan-600" },
    { icon: Earth, color: "from-green-500 to-green-600" },
    { icon: RainDrop, color: "from-amber-500 to-gray-900" }
  ]

  // Stats icons (order matches JSON keys)
  const statsConfig = [
    { key: 'years', icon: Time },
    { key: 'satisfaction', icon: CertificateCheck },
    { key: 'projects', icon: CheckmarkFilled },
    { key: 'efficiency', icon: Growth }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Emerald Gradient */}
        <section className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 py-20 lg:py-28 relative overflow-hidden">
          {/* Subtle floating elements like organic-treatment */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 blur-sm"></div>
            <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 blur-sm"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                  <span className="text-gray-900">{t('hero.titleLine1')}</span>
                  <span className="block text-gradient">{t('hero.titleLine2')}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  {t('hero.description')}
                </p>

                {/* Metrics display - Latam style */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-gray-900">{t('hero.metrics.projects.value')}</div>
                    <div className="text-gray-500 text-sm mt-1">{t('hero.metrics.projects.label')}</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-gray-900">{t('hero.metrics.efficiency.value')}</div>
                    <div className="text-gray-500 text-sm mt-1">{t('hero.metrics.efficiency.label')}</div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-gray-200/80 ring-1 ring-gray-200">
                  <Image
                    src="/filtro_prensa_1200_drone_view.png"
                    alt={t('hero.imageAlt')}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision with Phase 2: Micro-animations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer overflow-hidden">
                {/* Quarter circle motif - top right */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-60"></div>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-40"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('mission.title')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('mission.description')}
                  </p>
                </div>
              </div>
              <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer overflow-hidden">
                {/* Quarter circle motif - top right */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-60"></div>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-40"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('vision.title')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('vision.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics with Phase 1: Real-time updates */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 steel-gradient">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{t('stats.title')}</h2>
              <p className="text-xl text-emerald-100">
                {t('stats.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsConfig.map((stat, index) => (
                <div key={index} className="text-center text-white group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 micro-bounce">{t(`stats.items.${stat.key}.value`)}</div>
                  <div className="text-xl font-semibold mb-1">{t(`stats.items.${stat.key}.label`)}</div>
                  <div className="text-emerald-200 text-sm">{t(`stats.items.${stat.key}.description`)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values with Phase 2: Gradient backgrounds */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('values.title')}</h2>
              <p className="text-xl text-gray-600">
                {t('values.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10">
              {t.raw('values.items').map((value, index) => {
                const IconComponent = valueIcons[index]
                return (
                  <div key={index} className="text-center">
                    {/* Circuit node container */}
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      {/* Connecting lines - circuit traces */}
                      <div className="absolute top-1/2 left-0 w-3 h-[2px] bg-emerald-300 -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-0 w-3 h-[2px] bg-emerald-300 -translate-y-1/2"></div>
                      <div className="absolute left-1/2 top-0 h-3 w-[2px] bg-emerald-300 -translate-x-1/2"></div>
                      <div className="absolute left-1/2 bottom-0 h-3 w-[2px] bg-emerald-300 -translate-x-1/2"></div>
                      {/* Corner traces */}
                      <div className="absolute top-1 left-1 w-2 h-[2px] bg-emerald-200 rotate-45 origin-left"></div>
                      <div className="absolute top-1 right-1 w-2 h-[2px] bg-emerald-200 -rotate-45 origin-right"></div>
                      <div className="absolute bottom-1 left-1 w-2 h-[2px] bg-emerald-200 -rotate-45 origin-left"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-[2px] bg-emerald-200 rotate-45 origin-right"></div>
                      {/* Central node */}
                      <div className="absolute inset-3 bg-white rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-sm text-emerald-600">
                        <IconComponent size={24} />
                      </div>
                      {/* Node dots at line ends */}
                      <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-y-1/2"></div>
                      <div className="absolute left-1/2 top-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2"></div>
                      <div className="absolute left-1/2 bottom-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline with Enhanced Professional Design */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('timeline.title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('timeline.subtitle')}
              </p>
            </div>

            <div className="relative">
              {/* Enhanced timeline line with gradient */}
              <div className="absolute left-12 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600 rounded-full shadow-sm"></div>

              <div className="space-y-8">
                {t.raw('timeline.milestones').map((milestone, index) => {
                  const { icon: IconComponent, color } = milestoneConfig[index] || { icon: Calendar, color: "from-gray-500 to-gray-600" }

                  return (
                    <div key={index} className="relative flex items-start group">
                      {/* Enhanced timeline node with icon */}
                      <div className="relative z-10">
                        <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-300 text-white`}>
                          <IconComponent size={20} />
                        </div>
                      </div>

                      {/* Timeline content card */}
                      <div className="ml-6 md:ml-8 flex-1">
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-emerald-200">
                          {/* Header with year and metric */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div className="flex items-center mb-2 sm:mb-0">
                              <div className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full mr-3`}></div>
                              <span className="text-2xl md:text-3xl font-bold text-gray-800">{milestone.year}</span>
                            </div>
                            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${color} text-white rounded-full text-sm font-semibold shadow-sm`}>
                              {milestone.metric}
                            </div>
                          </div>

                          {/* Title and description */}
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {milestone.description}
                          </p>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Timeline completion indicator */}
              <div className="relative flex items-start mt-8">
                {/* Final timeline node */}
                <div className="relative z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                {/* Completion pill */}
                <div className="ml-6 md:ml-8">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full shadow-lg">
                    <span className="font-semibold">{t('timeline.completion')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-900 relative overflow-hidden">
          {/* Industrial pattern overlay */}
          <div className="absolute inset-0 opacity-5 industrial-pattern"></div>

          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center text-white relative z-10">
            <h2 className="text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('cta.description')}
            </p>

            <div className="flex justify-center">
              <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 precision-click">
                {t('cta.contactButton')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
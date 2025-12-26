'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flash, Enterprise, Launch, Apps, Connect, Filter as FilterCarbon, Renew, Currency, ArrowDownRight, Chemistry, RainDrop, Humidity, DeliveryTruck, Pipelines, Power } from '@carbon/icons-react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import BorraSeparationAnimation from '@/components/BorraSeparationAnimation'
import { useTranslations } from 'next-intl'

// Recovery Section - Atlassian KPI Style with Tabs
function RecoverySection({ t }) {
  const [activeTab, setActiveTab] = useState('copper')

  const industries = {
    copper: {
      name: t('recovery.tabs.copper'),
      icon: 'Cu',
      color: 'orange',
      heroStat: t('recovery.industries.copper.heroStat'),
      heroLabel: t('recovery.industries.copper.heroLabel'),
      description: t('recovery.industries.copper.description'),
      kpis: [
        { value: t('recovery.industries.copper.kpis.organic.value'), label: t('recovery.industries.copper.kpis.organic.label') },
        { value: t('recovery.industries.copper.kpis.aqueous.value'), label: t('recovery.industries.copper.kpis.aqueous.label') }
      ]
    },
    petroleum: {
      name: t('recovery.tabs.petroleum'),
      icon: '⛽',
      color: 'amber',
      heroStat: t('recovery.industries.petroleum.heroStat'),
      heroLabel: t('recovery.industries.petroleum.heroLabel'),
      description: t('recovery.industries.petroleum.description'),
      kpis: [
        { value: t('recovery.industries.petroleum.kpis.hydrocarbons.value'), label: t('recovery.industries.petroleum.kpis.hydrocarbons.label') },
        { value: t('recovery.industries.petroleum.kpis.liquid.value'), label: t('recovery.industries.petroleum.kpis.liquid.label') }
      ]
    }
  }

  const active = industries[activeTab]
  const colorClasses = activeTab === 'copper'
    ? { text: 'text-orange-600', bg: 'bg-orange-500', border: 'border-orange-500', light: 'bg-orange-50' }
    : { text: 'text-amber-700', bg: 'bg-amber-600', border: 'border-amber-600', light: 'bg-amber-50' }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-100/80 via-emerald-50/50 to-gray-100 relative overflow-hidden">
      {/* Enterprise Background Elements - more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[12%] w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-emerald-600/15 rounded-full opacity-60 animate-float-slow blur-md"></div>
        <div className="absolute bottom-20 left-[15%] w-48 h-48 bg-gradient-to-br from-emerald-400/25 to-emerald-500/20 rounded-full opacity-50 animate-float-medium blur-md"></div>
        <div className="absolute top-1/2 right-[25%] w-32 h-32 bg-gradient-to-br from-emerald-300/20 to-emerald-400/15 rounded-full opacity-40 animate-float-slow blur-sm"></div>

        {/* Strategic three ball constellation */}
        <div className="absolute top-16 left-[8%] opacity-40">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-3 h-3 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
        {/* Atlassian-style two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Hero stat with title - dynamic based on tab */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('recovery.title')}
            </h2>
            <div className={`text-7xl lg:text-8xl font-bold mb-4 transition-all ${colorClasses.text}`}>
              {active.heroStat}
            </div>
            <p className="text-xl text-gray-600">
              {active.heroLabel}
            </p>
          </div>

          {/* Right: Tabbed KPIs */}
          <div>
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setActiveTab('copper')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === 'copper'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Cobre
              </button>
              <button
                onClick={() => setActiveTab('petroleum')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === 'petroleum'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Petróleo
              </button>
            </div>

            {/* KPI Cards */}
            <div className="space-y-6">
              {active.kpis.map((kpi, index) => (
                <div key={index} className={`border-l-4 ${colorClasses.border} pl-6 py-2`}>
                  <div className={`text-4xl lg:text-5xl font-bold ${colorClasses.text} mb-1`}>
                    {kpi.value}
                  </div>
                  <div className="text-gray-600">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-500 mt-8 leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Expandable Equipment Benefits Component
function EquipmentBenefits({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    {
      key: 'agile',
      icon: DeliveryTruck,
      image: '/filtro_prensa_1200_drone_view.png'
    },
    {
      key: 'longReach',
      icon: Pipelines,
      image: '/filtros_acoplados.png'
    },
    {
      key: 'noInterference',
      icon: Power,
      image: '/filtro_prensa_1200_drone_view.png'
    }
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left: Expandable list */}
      <div>
        {benefits.map((benefit, index) => {
          const isExpanded = expandedIndex === index
          const Icon = benefit.icon

          return (
            <div key={index}>
              {/* Top border line */}
              <div className="border-t border-gray-200"></div>

              {/* Header - Icon + Title + Plus/Minus */}
              <button
                onClick={() => setExpandedIndex(index)}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isExpanded ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-emerald-50'
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors ${
                      isExpanded ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-600'
                    }`} />
                  </div>
                  <span className={`font-semibold text-lg transition-colors ${
                    isExpanded ? 'text-emerald-600' : 'text-gray-900 group-hover:text-emerald-600'
                  }`}>
                    {t(`equipmentBenefits.items.${benefit.key}.title`)}
                  </span>
                </div>
                <span className={`text-2xl font-light transition-colors ${
                  isExpanded ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-600'
                }`}>
                  {isExpanded ? '−' : '+'}
                </span>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {t(`equipmentBenefits.items.${benefit.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        {/* Bottom border line */}
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Right: Image - changes based on selected item */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/10]">
          <Image
            src={benefits[expandedIndex].image}
            alt={t(`equipmentBenefits.items.${benefits[expandedIndex].key}.title`)}
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}


export default function FiltrationPage() {
  const t = useTranslations('filtrationService')

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO - Matching organic-treatment style */}
      <section className="relative overflow-hidden bg-white">
        {/* Borra Separation Animation - The signature motif */}
        <BorraSeparationAnimation variant="hero" cycleDuration={10} className="opacity-60" />

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.description')}
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <Image
                  src="/filtro_prensa_1200_drone_view.png"
                  alt="Sistema de Filtración Móvil - Vista aérea del filtro prensa 1200"
                  width={800}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY BENEFITS */}
      <section className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 blur-sm"></div>
          <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em]">
              {t('keyBenefits.title')}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {/* 3-ball divider - left edge */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 1: Increase plant efficiency */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Flash className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.efficiency.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.efficiency.description')}
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Recover trapped value */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Currency className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.value.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.value.description')}
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: Recover storage capacity */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Enterprise className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.storage.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.storage.description')}
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Reduce operational costs */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ArrowDownRight className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.costs.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.costs.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 1: OPTIMIZA CONSUMO DE INSUMOS */}
      <section className="border-b border-gray-800 bg-gray-900 relative overflow-hidden">
        {/* Columns of circles at top - transitioning from previous section */}
        <div className="absolute top-0 left-0 right-0 w-full flex justify-around z-0">
          {[...Array(96)].map((_, col) => (
            <div key={col} className="flex flex-col items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
          {/* Side by side: Header left, 4 items right */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Header content */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-6">
                {t('operationalEfficiency.badge')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {t('operationalEfficiency.title')}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('operationalEfficiency.description')}
              </p>
            </div>

            {/* Right: 4 items stacked */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Flash className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t('operationalEfficiency.items.energy.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t('operationalEfficiency.items.energy.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Chemistry className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t('operationalEfficiency.items.extractant.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t('operationalEfficiency.items.extractant.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Humidity className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t('operationalEfficiency.items.acid.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t('operationalEfficiency.items.acid.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RainDrop className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t('operationalEfficiency.items.water.title')}</h3>
                  <p className="text-gray-400 text-sm">
                    {t('operationalEfficiency.items.water.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 2: PROTEGE TU EW */}
      <section className="border-b border-gray-200 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-6">
              {t('productQuality.badge')}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t('productQuality.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('productQuality.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Protection for EW */}
            <div className="bg-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{t('productQuality.cleanElectrolyte.title')}</h3>
                <p className="text-sm text-emerald-300">{t('productQuality.cleanElectrolyte.subtitle')}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">{t('productQuality.cleanElectrolyte.items.purity.title')}</span>
                    <p className="text-gray-400 text-sm">{t('productQuality.cleanElectrolyte.items.purity.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">{t('productQuality.cleanElectrolyte.items.cells.title')}</span>
                    <p className="text-gray-400 text-sm">{t('productQuality.cleanElectrolyte.items.cells.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">{t('productQuality.cleanElectrolyte.items.extractant.title')}</span>
                    <p className="text-gray-400 text-sm">{t('productQuality.cleanElectrolyte.items.extractant.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Protection for Lixiviación */}
            <div className="bg-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{t('productQuality.cleanRaffinate.title')}</h3>
                <p className="text-sm text-emerald-300">{t('productQuality.cleanRaffinate.subtitle')}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">{t('productQuality.cleanRaffinate.items.concentrated.title')}</span>
                    <p className="text-gray-400 text-sm">{t('productQuality.cleanRaffinate.items.concentrated.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">{t('productQuality.cleanRaffinate.items.heaps.title')}</span>
                    <p className="text-gray-400 text-sm">{t('productQuality.cleanRaffinate.items.heaps.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">{t('productQuality.cleanRaffinate.items.kerosene.title')}</span>
                    <p className="text-gray-400 text-sm">{t('productQuality.cleanRaffinate.items.kerosene.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result stats */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">{t('productQuality.stages.e1')}</div>
              <div className="text-sm text-gray-400">{t('productQuality.stages.clean')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">{t('productQuality.stages.e2')}</div>
              <div className="text-sm text-gray-400">{t('productQuality.stages.clean')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">{t('productQuality.stages.s1')}</div>
              <div className="text-sm text-gray-400">{t('productQuality.stages.clean')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">{t('productQuality.stages.s2')}</div>
              <div className="text-sm text-gray-400">{t('productQuality.stages.clean')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 3: TODO VUELVE AL CICLO - Atlassian KPI Style */}
      <RecoverySection t={t} />

      {/* THEME 4: MÍNIMO IMPACTO TÉRMICO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header + Benefits */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('thermalImpact.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('thermalImpact.description')}
              </p>

              {/* Three benefits - clean list */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('thermalImpact.benefits.selective.title')}</span>
                    <span className="text-gray-600">{t('thermalImpact.benefits.selective.description')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('thermalImpact.benefits.minimal.title')}</span>
                    <span className="text-gray-600">{t('thermalImpact.benefits.minimal.description')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('thermalImpact.benefits.immediate.title')}</span>
                    <span className="text-gray-600">{t('thermalImpact.benefits.immediate.description')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual comparison */}
            <div className="space-y-6">
              {/* Conventional method */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{t('thermalImpact.comparison.conventional.label')}</span>
                  <span className="text-red-500 font-bold">{t('thermalImpact.comparison.conventional.cost')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gradient-to-r from-red-400 to-red-500 h-10 rounded-lg"></div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{t('thermalImpact.comparison.conventional.volume')}</div>
                    <div className="text-sm text-gray-500">{t('thermalImpact.comparison.conventional.volumeLabel')}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">{t('thermalImpact.comparison.conventional.description')}</p>
              </div>

              {/* Tecionic method */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-emerald-700 uppercase tracking-wide">{t('thermalImpact.comparison.tecionic.label')}</span>
                  <span className="text-emerald-600 font-bold">{t('thermalImpact.comparison.tecionic.cost')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gradient-to-r from-emerald-400 to-emerald-500 h-10 rounded-lg" style={{width: '25%'}}></div>
                  <div className="flex-1"></div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{t('thermalImpact.comparison.tecionic.volume')}</div>
                    <div className="text-sm text-gray-500">{t('thermalImpact.comparison.tecionic.volumeLabel')}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">{t('thermalImpact.comparison.tecionic.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 5: CADA METRO CÚBICO CUENTA */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6">
              {t('everyMeterCounts.badge')}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('everyMeterCounts.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('everyMeterCounts.description')}
            </p>
          </div>

          {/* Row 1: Disposal - Content left, Image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                {t('everyMeterCounts.disposal.badge')}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('everyMeterCounts.disposal.title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('everyMeterCounts.disposal.description')}
              </p>

              {/* KPIs */}
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-purple-600">{t('everyMeterCounts.disposal.kpis.volume.value')}</div>
                  <div className="text-sm text-gray-600">{t('everyMeterCounts.disposal.kpis.volume.label')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600">{t('everyMeterCounts.disposal.kpis.dryness.value')}</div>
                  <div className="text-sm text-gray-600">{t('everyMeterCounts.disposal.kpis.dryness.label')}</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/filtro_prensa_1200_drone_view.png"
                alt={t('everyMeterCounts.disposal.title')}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2: Volume Recovery - Image left, Content right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/filtros_acoplados.png"
                alt={t('everyMeterCounts.recovery.title')}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
                {t('everyMeterCounts.recovery.badge')}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('everyMeterCounts.recovery.title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('everyMeterCounts.recovery.description')}
              </p>

              {/* KPIs */}
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-600">{t('everyMeterCounts.recovery.kpis.liquid.value')}</div>
                  <div className="text-sm text-gray-600">{t('everyMeterCounts.recovery.kpis.liquid.label')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">{t('everyMeterCounts.recovery.kpis.returns.value')}</div>
                  <div className="text-sm text-gray-600">{t('everyMeterCounts.recovery.kpis.returns.label')}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              {t('equipment.title')}
            </h2>

            {/* Equipment Benefits - Expandable with images */}
            <EquipmentBenefits t={t} />
          </div>

          {/* Modular Configuration - Clean Minimal Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('equipment.modular.title')}</h3>

            <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
              {/* Left - Large Image */}
              <div>
                <Image
                  src="/filtros_acoplados.png"
                  alt={t('equipment.modular.title')}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>

              {/* Right - Text Content */}
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('equipment.modular.description')}
                </p>

                {/* Benefits - Icon Bullets */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Enterprise className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{t('equipment.modular.benefits.scalability.title')}</div>
                      <div className="text-gray-600">{t('equipment.modular.benefits.scalability.description')}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Launch className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{t('equipment.modular.benefits.external.title')}</div>
                      <div className="text-gray-600">{t('equipment.modular.benefits.external.description')}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Apps className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{t('equipment.modular.benefits.space.title')}</div>
                      <div className="text-gray-600">{t('equipment.modular.benefits.space.description')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INDUSTRIES */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('industries.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('industries.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Copper */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/copper_ore.jpg"
                  alt={t('industries.items.copper.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Cu</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.copper.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.copper.description')}</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <a href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Zinc */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/zinc_ore.jpg"
                  alt={t('industries.items.zinc.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Zn</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.zinc.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.zinc.description')}</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <a href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Crude Oil */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-400 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/crude_oil.png"
                  alt={t('industries.items.crudeOil.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RainDrop className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.crudeOil.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.crudeOil.description')}</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <a href="/industries/crude-oil" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY: ENAP */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              {t('caseStudy.badge')}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              {t('caseStudy.title')}
            </h2>
          </div>

          {/* Main content - Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem] transition-all duration-300">
                <Image
                  src="/fotos_spence/Imagen7.jpg"
                  alt={t('caseStudy.client')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <RainDrop className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t('caseStudy.client')}</div>
                      <div className="text-white/70 text-xs">{t('caseStudy.clientSubtitle')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">{t('caseStudy.metrics.volume.value')}</div>
                    <div className="text-sm text-gray-600">{t('caseStudy.metrics.volume.label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">{t('caseStudy.metrics.hc.value')}</div>
                    <div className="text-sm text-gray-600">{t('caseStudy.metrics.hc.label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">{t('caseStudy.metrics.compliance.value')}</div>
                    <div className="text-sm text-gray-600">{t('caseStudy.metrics.compliance.label')}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {t('caseStudy.description')}
                </p>

                {/* CTA */}
                <Link href="/industries/crude-oil" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  {t('caseStudy.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching organic-treatment style */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        {/* Clean interface line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Mining topographic contour lines - right corner */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/mine_motif_right_corner.svg"
            alt=""
            className="absolute right-0 bottom-0 w-full h-full opacity-[0.08] object-cover object-right-bottom"
          />
        </div>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            {t('cta.description')}
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            {t('cta.timeline')}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl">
              {t('cta.primaryCta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/industries/copper" className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors">
              {t('cta.secondaryCta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-emerald-500 pt-8">
            <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wide mb-4">{t('cta.contactTitle')}</div>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div>
                <div className="font-semibold mb-1">{t('cta.locations.santiago.name')}</div>
                <div className="text-emerald-100">{t('cta.locations.santiago.address')}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">{t('cta.locations.calama.name')}</div>
                <div className="text-emerald-100">{t('cta.locations.calama.address')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
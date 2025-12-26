'use client'

// src/app/industries/crude-oil/page.js - Redesigned with better component/layout design
import { useRouter, usePathname } from 'next/navigation'
import { Droplets, Factory, Shield, CheckCircle, TrendingUp, ArrowRight, Recycle, DollarSign, AlertTriangle, Truck, Settings } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function CrudeOilIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('crudeOilIndustry')

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

        <div className="relative max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - Content */}
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded-full mb-6">
                <span className="text-sm font-semibold text-gray-900">{t('hero.badge')}</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                {t('hero.title')}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')} <strong className="text-gray-900">{t('hero.descriptionHighlight')}</strong>
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

      {/* Challenge Section - Featured card + breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">{t('challenge.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('challenge.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('challenge.subtitle')}
            </p>
          </div>

          {/* Problem cards - Clean 3-column grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* Problem 1: Capacity Loss */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-red-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-3">{t('challenge.problems.capacity.value')}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('challenge.problems.capacity.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('challenge.problems.capacity.description')}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">{t('challenge.problems.capacity.costLabel')}</div>
                <div className="text-lg font-bold text-gray-900">{t('challenge.problems.capacity.costValue')}</div>
              </div>
            </div>

            {/* Problem 2: Lost Hydrocarbons */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-orange-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-3">{t('challenge.problems.hydrocarbons.value')}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('challenge.problems.hydrocarbons.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('challenge.problems.hydrocarbons.description')}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">{t('challenge.problems.hydrocarbons.costLabel')}</div>
                <div className="text-lg font-bold text-gray-900">{t('challenge.problems.hydrocarbons.costValue')}</div>
              </div>
            </div>

            {/* Problem 3: Disposal Costs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-yellow-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-3">{t('challenge.problems.disposal.value')}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('challenge.problems.disposal.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('challenge.problems.disposal.description')}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">{t('challenge.problems.disposal.costLabel')}</div>
                <div className="text-lg font-bold text-gray-900">{t('challenge.problems.disposal.costValue')}</div>
              </div>
            </div>

          </div>

          {/* Industry scope context */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-black mb-3">{t('challenge.industryScope.title')}</h3>
                <p className="text-gray-400 text-lg">{t('challenge.industryScope.subtitle')}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-3">{t('challenge.industryScope.stats.waste.value')}</div>
                  <div className="text-gray-300 text-lg font-medium">{t('challenge.industryScope.stats.waste.label')}</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-3">{t('challenge.industryScope.stats.areas.value')}</div>
                  <div className="text-gray-300 text-lg font-medium">{t('challenge.industryScope.stats.areas.label')}</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-3">{t('challenge.industryScope.stats.recovery.value')}</div>
                  <div className="text-gray-300 text-lg font-medium">{t('challenge.industryScope.stats.recovery.label')}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Capabilities - Bento Box Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">{t('capabilities.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('capabilities.subtitle')}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-6">

            {/* Feature 1: Zero CAPEX - Wide Card */}
            <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  {t('capabilities.zeroCAPEX.label')}
                </span>
                <h3 className="text-3xl lg:text-4xl font-black mt-4 mb-4">
                  {t('capabilities.zeroCAPEX.title')}
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  {t('capabilities.zeroCAPEX.description')}
                </p>
                <div className="flex items-end gap-4">
                  <div className="text-6xl font-black text-emerald-400">{t('capabilities.zeroCAPEX.value')}</div>
                  <div className="text-gray-400 pb-2 text-lg">{t('capabilities.zeroCAPEX.valueLabel')}</div>
                </div>
              </div>
            </div>

            {/* Feature 2: Volume Reduction - Narrow Card */}
            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 relative overflow-hidden">
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                {t('capabilities.volumeReduction.label')}
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mt-4 mb-4">
                {t('capabilities.volumeReduction.title')}
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                {t('capabilities.volumeReduction.description')}
              </p>
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-200">
                <div className="text-5xl font-black text-orange-600 mb-2">{t('capabilities.volumeReduction.value')}</div>
                <div className="text-sm text-gray-600 font-medium">{t('capabilities.volumeReduction.valueLabel')}</div>
              </div>
            </div>

            {/* Feature 3: Speed - Narrow Card */}
            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 relative overflow-hidden">
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                {t('capabilities.speed.label')}
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mt-4 mb-4">
                {t('capabilities.speed.title')}
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                {t('capabilities.speed.description')}
              </p>
              <div className="flex items-center gap-6 bg-white rounded-2xl p-6 border-2 border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <div className="text-3xl font-black text-gray-900">{t('capabilities.speed.value')}</div>
                  <div className="text-sm text-gray-600 font-medium">{t('capabilities.speed.valueLabel')}</div>
                </div>
              </div>
            </div>

            {/* Feature 4: Compliance - Wide Card */}
            <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {t('capabilities.compliance.label')}
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mt-4 mb-4">
                {t('capabilities.compliance.title')}
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                {t('capabilities.compliance.description')}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {t.raw('capabilities.compliance.certifications').map((cert, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center">
                    {idx === 0 && <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />}
                    {idx === 1 && <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />}
                    {idx === 2 && <Settings className="w-10 h-10 text-blue-600 mx-auto mb-3" />}
                    <div className="text-sm font-bold text-gray-900">{cert}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Lab Results Validation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">{t('labResults.badge')}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('labResults.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('labResults.subtitle')}
            </p>
          </div>

          {/* Lab results table */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {t('labResults.tableTitle')}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-6 text-gray-900 font-bold">{t('labResults.tableHeaders.type')}</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-bold">{t('labResults.tableHeaders.initialMoisture')}</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-bold">{t('labResults.tableHeaders.finalMoisture')}</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-bold">{t('labResults.tableHeaders.volumeReduction')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.raw('labResults.rows').map((row, idx) => (
                      <tr key={idx} className={idx < 2 ? "border-b border-gray-200" : ""}>
                        <td className="py-5 px-6 font-medium text-gray-900">{row.type}</td>
                        <td className="text-center py-5 px-6 text-gray-700">{row.initial}</td>
                        <td className="text-center py-5 px-6 text-gray-700">{row.final}</td>
                        <td className="text-center py-5 px-6">
                          <span className={`inline-block px-4 py-2 ${idx < 2 ? 'bg-emerald-100 border-emerald-300' : 'bg-blue-100 border-blue-300'} border rounded-xl`}>
                            <span className={`text-3xl font-black ${idx < 2 ? 'text-emerald-700' : 'text-blue-700'}`}>{row.reduction}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* What this means - 3 cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{t('labResults.benefits.validation.title')}</h4>
              <p className="text-gray-600">
                {t('labResults.benefits.validation.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{t('labResults.benefits.applications.title')}</h4>
              <p className="text-gray-600">
                {t('labResults.benefits.applications.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{t('labResults.benefits.certification.title')}</h4>
              <p className="text-gray-600">
                {t('labResults.benefits.certification.description')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5 Application Areas Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              {t('applications.title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('applications.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Area 1: Delayed Coker */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-5">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('applications.areas.coker.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('applications.areas.coker.description')}
              </p>
              <div className="text-sm text-emerald-400 font-semibold">
                {t('applications.areas.coker.cta')}
              </div>
            </div>

            {/* Area 2: FCC Wet Gas Scrubber */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('applications.areas.fcc.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('applications.areas.fcc.description')}
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                {t('applications.areas.fcc.cta')}
              </div>
            </div>

            {/* Area 3: Tank Cleaning */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-5">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('applications.areas.tanks.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('applications.areas.tanks.description')}
              </p>
              <div className="text-sm text-purple-400 font-semibold">
                {t('applications.areas.tanks.cta')}
              </div>
            </div>

            {/* Area 4: Effluent Treatment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('applications.areas.effluent.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('applications.areas.effluent.description')}
              </p>
              <div className="text-sm text-amber-400 font-semibold">
                {t('applications.areas.effluent.cta')}
              </div>
            </div>

            {/* Area 5: API Separators */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-5">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('applications.areas.api.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('applications.areas.api.description')}
              </p>
              <div className="text-sm text-cyan-400 font-semibold">
                {t('applications.areas.api.cta')}
              </div>
            </div>

            {/* Area 6: Other Applications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('applications.areas.other.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('applications.areas.other.description')}
              </p>
              <div className="text-sm text-gray-400 font-semibold">
                {t('applications.areas.other.cta')}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits Section - Clean card design */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t('benefits.sectionLabel')}</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('benefits.subtitle')}
            </p>
          </div>

          {/* Primary benefits - 2 column */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 mb-10">

            {/* Benefit 1: HC Recovery */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-10 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {t('benefits.primary.hcRecovery.title')}
                    </h3>
                    <p className="text-emerald-700 font-semibold">
                      {t('benefits.primary.hcRecovery.tagline')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-8">
                  {t.raw('benefits.primary.hcRecovery.items').map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">{item.highlight}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-black mb-1">{t('benefits.primary.hcRecovery.metric.value')}</div>
                  <div className="text-emerald-100 font-medium">{t('benefits.primary.hcRecovery.metric.label')}</div>
                  <div className="text-sm text-emerald-200 mt-2">
                    {t('benefits.primary.hcRecovery.metric.note')}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2: Cost Reduction */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-white p-10 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {t('benefits.primary.costReduction.title')}
                    </h3>
                    <p className="text-blue-700 font-semibold">
                      {t('benefits.primary.costReduction.tagline')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-8">
                  {t.raw('benefits.primary.costReduction.items').map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">{item.highlight}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-black mb-1">{t('benefits.primary.costReduction.metric.value')}</div>
                  <div className="text-blue-100 font-medium">{t('benefits.primary.costReduction.metric.label')}</div>
                  <div className="text-sm text-blue-200 mt-2">
                    {t('benefits.primary.costReduction.metric.note')}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary benefits - 2 column smaller cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t('benefits.secondary.mobile.title')}</h3>
                  <p className="text-sm text-purple-700 font-medium">{t('benefits.secondary.mobile.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {t('benefits.secondary.mobile.description')}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
                <CheckCircle className="w-4 h-4" />
                <span>{t('benefits.secondary.mobile.cta')}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t('benefits.secondary.exproof.title')}</h3>
                  <p className="text-sm text-gray-700 font-medium">{t('benefits.secondary.exproof.tagline')}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {t('benefits.secondary.exproof.description')}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                <span>{t('benefits.secondary.exproof.cta')}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Comparison Section - Side-by-side layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('comparison.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('comparison.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

            {/* Traditional Model */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Factory className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('comparison.traditional.title')}</h3>
              </div>

              <div className="space-y-5 mb-8">
                {t.raw('comparison.traditional.items').map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">✕</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="text-sm text-red-700 font-semibold mb-1">{t('comparison.traditional.total.label')}</div>
                <div className="text-4xl font-black text-red-700">{t('comparison.traditional.total.value')}</div>
                <div className="text-sm text-red-600 mt-1">{t('comparison.traditional.total.note')}</div>
              </div>
            </div>

            {/* Mobile Technology Model */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-10 border-2 border-emerald-300 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('comparison.mobile.title')}</h3>
              </div>

              <div className="space-y-5 mb-8">
                {t.raw('comparison.mobile.items').map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-700">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                <div className="text-sm font-semibold text-emerald-100 mb-1">{t('comparison.mobile.total.label')}</div>
                <div className="text-5xl font-black">{t('comparison.mobile.total.value')}</div>
                <div className="text-sm text-emerald-100 mt-1">
                  {t('comparison.mobile.total.note')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <button
            onClick={() => handleContactClick(router, pathname)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  )
}

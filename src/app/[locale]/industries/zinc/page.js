'use client'

// src/app/industries/zinc/page.js - Stripe-level UI
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, ArrowRight, Download, Shield, Sparkles, Droplets, Target, Filter } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

export default function ZincIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
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
          <p className="mt-4 text-slate-800 font-medium">Cargando datos de zinc...</p>
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

          <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
            {/* Industry badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span className="text-sm font-semibold text-slate-900">Industria del Zinc</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
              Separación sólido-líquido
              <span className="block bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                para zinc electrolítico
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Fundiciones centralizadas en Latinoamérica procesan más de 1.5M ton/año.
              Cada etapa del proceso electrolítico genera desafíos críticos de filtración.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl">
              <div>
                <div className="text-4xl font-black text-gray-900 mb-1">1.47M</div>
                <div className="text-sm text-gray-600">ton/año Perú</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900 mb-1">344K</div>
                <div className="text-sm text-gray-600">cap. Cajamarquilla</div>
              </div>
              <div>
                <div className="text-4xl font-black text-gray-900 mb-1">90%+</div>
                <div className="text-sm text-gray-600">proceso electrolítico</div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('process-flow')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md">
              Ver proceso
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Process Flow - Modern Visual Design */}
        <section id="process-flow" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">Proceso Electrolítico</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Cada etapa genera desafíos{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  de separación sólido-líquido
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                El proceso de zinc electrolítico involucra múltiples puntos críticos donde TSF interviene
              </p>
            </div>

            {/* Visual Process Flow Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  step: 'Lixiviación',
                  number: '01',
                  process: 'Calcinado + H₂SO₄ → ZnSO₄',
                  challenge: 'Residuo de lixiviación (Pb, Ag, Fe) requiere separación',
                  tsf: 'Filtros prensa TSF deshidratan residuo',
                  icon: Droplets,
                  gradient: 'from-blue-500 to-blue-600',
                  accentColor: 'blue'
                },
                {
                  step: 'Remoción Hierro',
                  number: '02',
                  process: 'Jarosite / Goethite',
                  challenge: 'Precipitados gelatinosos difíciles de filtrar',
                  tsf: 'TSF maneja residuos hierro Goethite',
                  icon: Shield,
                  gradient: 'from-amber-500 to-orange-600',
                  accentColor: 'orange'
                },
                {
                  step: 'Electroobtención',
                  number: '03',
                  process: 'ZnSO₄ → Zn cátodo (99.99%)',
                  challenge: 'Sedimento en celdas afecta pureza',
                  tsf: 'Limpieza neumática TSF sin detención',
                  icon: Zap,
                  gradient: 'from-purple-500 to-purple-600',
                  accentColor: 'purple'
                }
              ].map((item, i) => (
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
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Desafío</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.challenge}</p>
                    </div>

                    {/* TSF Solution */}
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Solución TSF</p>
                          <p className="text-sm font-semibold text-emerald-900 leading-relaxed">{item.tsf}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                  <span className="text-emerald-400">3 de 5 etapas</span> requieren separación sólido-líquido especializada
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Fundiciones que procesan 300K+ ton/año no pueden permitirse detenciones ni ineficiencias.
                  TSF ofrece soluciones móviles sin CAPEX que intervienen exactamente donde se necesita.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-black text-emerald-400 mb-1">0%</div>
                    <div className="text-sm text-gray-400">Detención producción</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-emerald-400 mb-1">$0</div>
                    <div className="text-sm text-gray-400">CAPEX inicial</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-emerald-400 mb-1">100%</div>
                    <div className="text-sm text-gray-400">Móvil y flexible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TSF Solutions - Premium service cards */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Soluciones TSF</div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Servicios móviles para fundiciones zinc
              </h2>
              <p className="text-lg text-gray-600">
                Filtración especializada en cada punto crítico del proceso electrolítico. Sin inversión CAPEX, sin detenciones.
              </p>
            </div>

            {/* Service grid - Compact with subtle visual distinction */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Service 1 - Blue accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all">
                    <Beaker className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Filtración Residuo Lixiviación</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Separación eficiente de residuo leach (Pb, Ag, Fe) con filtros prensa móviles de alta capacidad.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      Hasta 70 ton/día torta
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      Recuperación Pb/Ag
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      Manejo alta abrasión
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">APLICABLE</div>
                    <div className="text-sm font-bold text-blue-600">Tecnología validada</div>
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
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Desborre Celdas EW Zinc</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Limpieza neumática con filtración inline. Máxima pureza de electrolito zinc.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                      Sin pérdida electrolito
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                      Pureza {'>'}99.99%
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                      Sin paradas
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">APLICABLE</div>
                    <div className="text-sm font-bold text-amber-600">Tecnología validada</div>
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
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Deshidratación Concentrados</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Filtros prensa móviles adaptados a concentrados zinc con mayor abrasividad.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Hasta 70 ton/día torta
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Equipos reforzados
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Alta abrasividad Zn
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">APLICABLE</div>
                    <div className="text-sm font-bold text-purple-600">Tecnología adaptable</div>
                  </div>
                </div>
              </div>

              {/* Service 4 - Cyan accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-cyan-100 to-blue-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:shadow-xl group-hover:shadow-cyan-500/30 group-hover:scale-105 transition-all">
                    <Microscope className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Filtración Residuos Jarosite/Goethite</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Manejo especializado de precipitados gelatinosos de hierro, el mayor desafío de filtración en zinc electrolítico.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                      Hasta 50 ton/día residuo Fe
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                      Manejo fases gelatinosas
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                      Optimización filtración
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">CRÍTICO</div>
                    <div className="text-sm font-bold text-cyan-600">Mayor desafío zinc</div>
                  </div>
                </div>
              </div>

              {/* Service 5 - Teal accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-emerald-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:shadow-xl group-hover:shadow-teal-500/30 group-hover:scale-105 transition-all">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clarificación Aguas</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Remoción sólidos de aguas clarificadas para cumplir normativas ambientales.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                      Hasta 120 m³/día
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                      Normativa ambiental
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                      Movilidad total
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">APLICABLE</div>
                    <div className="text-sm font-bold text-teal-600">Multiindustria</div>
                  </div>
                </div>
              </div>

              {/* Service 6 - Indigo accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-indigo-100 to-slate-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-xl group-hover:shadow-indigo-500/30 group-hover:scale-105 transition-all">
                    <Filter className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Remoción Sólidos Finos</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Tratamiento sólidos finos de clarificadores con control abrasividad zinc.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                      Hasta 14 ton/día sólidos
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                      Equipos alta abrasión
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                      Protección clarificadores
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">APLICABLE</div>
                    <div className="text-sm font-bold text-indigo-600">Capacidad probada</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Cajamarquilla Reference - Premium callout */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl p-12 shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-100 text-sm font-semibold mb-1">OPERACIÓN REFERENCIA</div>
                      <h3 className="text-3xl font-black text-white">Cajamarquilla: La Escala del Zinc Electrolítico</h3>
                    </div>
                  </div>

                  <p className="text-slate-100 text-lg mb-8 leading-relaxed">
                    La refinería Cajamarquilla en Perú es la fundición zinc más grande de las Américas (344K ton/año),
                    procesando concentrados de múltiples minas. Esta escala centralizada define por qué TSF móvil es estratégico.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-white font-bold mb-3">Desafíos a Escala</div>
                      <div className="space-y-2 text-sm text-slate-50">
                        <div>• Volúmenes masivos residuo hierro (Jarosite/Goethite)</div>
                        <div>• Múltiples feeds con variabilidad alta</div>
                        <div>• Costos detención escalados</div>
                        <div>• Operación continua crítica</div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-white font-bold mb-3">Ventajas TSF Móvil</div>
                      <div className="space-y-2 text-sm text-slate-50">
                        <div>• Capacidad escalable según campaña</div>
                        <div>• Sin CAPEX $5M+ en filtración fija</div>
                        <div>• Flexibilidad para feed variable</div>
                        <div>• Mantención sin afectar producción</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="text-xs font-semibold text-slate-200 mb-2">OPORTUNIDAD TSF</div>
                    <p className="text-slate-100 text-sm">
                      TSF permite a fundiciones centralizadas optimizar filtración sin inversión CAPEX permanente,
                      adaptándose a variabilidad de feed y volúmenes de campaña característicos del zinc electrolítico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Resultados</div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Mejoras medibles en proceso electrolítico
              </h2>
              <p className="text-lg text-gray-600">
                Comparativa operación estándar vs. optimización con filtración móvil TSF especializada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-12">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">Antes</div>
                <div className="space-y-4">
                  {[
                    { label: 'Pureza Zn', value: '99.90%', unit: 'cátodos' },
                    { label: 'Impurezas', value: '80', unit: 'ppm total' },
                    { label: 'Consumo', value: '3.6', unit: 'kWh/kg Zn' },
                    { label: 'Recuperación', value: '88%', unit: 'variable' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-red-50 border border-red-100">
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      <div className="text-right">
                        <div className="text-3xl font-black text-red-600">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">Después</div>
                <div className="space-y-4">
                  {[
                    { label: 'Pureza Zn', value: '99.99%+', unit: 'cátodos' },
                    { label: 'Impurezas', value: '{'<'} 30', unit: 'ppm total' },
                    { label: 'Consumo', value: '3.1', unit: 'kWh/kg Zn' },
                    { label: 'Recuperación', value: '95%+', unit: 'consistente' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      <div className="text-right">
                        <div className="text-3xl font-black text-emerald-600">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key improvements */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-black bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent mb-2">+0.09%</div>
                  <div className="text-sm text-gray-600 font-medium">pureza adicional</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent mb-2">-60%</div>
                  <div className="text-sm text-gray-600 font-medium">impurezas totales</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent mb-2">-15%</div>
                  <div className="text-sm text-gray-600 font-medium">energía EW</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mobile for Zinc Smelters */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Modelo TSF</div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  ¿Por qué móvil a escala fundición?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Volúmenes centralizados masivos</h3>
                      <p className="text-gray-600 text-sm">
                        Fundiciones 300K+ ton/año procesan residuos hierro en volúmenes que justifican servicios especializados
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Feeds múltiples con variabilidad alta</h3>
                      <p className="text-gray-600 text-sm">
                        Concentrados de múltiples minas requieren flexibilidad que equipos fijos no proveen
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Costos detención exponenciales</h3>
                      <p className="text-gray-600 text-sm">
                        A escala fundición, cada hora detenida cuesta $50K+. Móvil permite mantención sin parar producción
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-gray-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-gray-900 mb-4">$0</div>
                    <div className="text-xl font-bold text-gray-700 mb-2">CAPEX inicial</div>
                    <div className="text-sm text-gray-500">vs $5M-$15M filtración fija escala fundición</div>

                    <div className="mt-8 p-4 bg-white rounded-2xl shadow-sm">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Modelo TSF a Escala</div>
                      <div className="text-xs text-gray-600">
                        Capacidad escalable según campaña, operadores especializados, mantención TSF sin detener fundición
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

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              ¿Operación zinc en Latinoamérica?
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Evaluamos tu fundición zinc electrolítico y diseñamos solución móvil adaptada a tu escala y condiciones específicas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Evaluación técnica fundición
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Casos escala fundición
                </div>
              </button>
            </div>

            {/* Contact grid */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm font-semibold text-gray-400 mb-1">Email</div>
                <div className="text-white font-medium">contacto@tsf.cl</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm font-semibold text-gray-400 mb-1">Teléfono</div>
                <div className="text-white font-medium">+56 9 XXXX XXXX</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-sm font-semibold text-gray-400 mb-1">Ubicación</div>
                <div className="text-white font-medium">Latinoamérica</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

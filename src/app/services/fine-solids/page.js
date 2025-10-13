'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'

export default function FineSolidsServicePage() {
  const router = null // Will be imported when needed
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const caseStudiesRef = useRef(null)

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

    const refs = [heroRef, overviewRef, processRef, benefitsRef, caseStudiesRef]
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const processSteps = [
    {
      step: '1',
      title: 'Análisis Granulométrico',
      description: 'Caracterización completa distribución tamaños y mineralogía sólidos finos',
      additionalInfo: 'Análisis laser diffraction • Microscopia electrónica • Química superficial',
      icon: FlaskConical
    },
    {
      step: '2',
      title: 'Diseño Sistema',
      description: 'Configuración filtros prensa según aplicación: DLE, SX o EW',
      additionalInfo: 'Selección presión óptima • Dimensionamiento • Control automático',
      icon: Target
    },
    {
      step: '3',
      title: 'Filtración de Sólidos',
      description: 'Remoción sólidos ultra-finos mediante filtros prensa',
      additionalInfo: 'Monitoreo turbidez continuo • Optimización AI • Mantenimiento predictivo',
      icon: Settings
    },
    {
      step: '4',
      title: 'Verificación Calidad',
      description: 'Validación especificaciones: DLE <10 NTU, SX <20 mg/L TSS',
      additionalInfo: 'Control calidad multi-parámetro • Certificación procesos • Reporting automático',
      icon: TrendingUp
    }
  ]

  const industrialApplications = [
    {
      element: "Li⁺",
      industry: "Extracción Directa Litio",
      application: "Protección membranas DLE",
      performance: "99.5% Pureza Li₂CO₃",
      specs: "Extensión 300% vida útil membranas | Claridad <10 NTU",
      color: "#06b6d4",
      status: "Operativo"
    },
    {
      element: "K⁺",
      industry: "Salmueras Potasio",
      application: "Clarificación cristalización sales",
      performance: ">99% Pureza KCl",
      specs: "Reducción 80% arcillas suspendidas | Turbidez <5 NTU",
      color: "#8b5cf6",
      status: "Optimizado"
    },
    {
      element: "Cu²⁺",
      industry: "Circuitos SX Cobre",
      application: "Pre-tratamiento PLS anti-crud",
      performance: "95% Reducción sólidos",
      specs: "Prevención crud formation | TSS <20 mg/L",
      color: "#ea580c",
      status: "Continuo"
    },
    {
      element: "Zn²⁺",
      industry: "Purificación EW Zinc",
      application: "Ultra-clarificación soluciones",
      performance: "99.995% Pureza Zn",
      specs: "Calidad catódica premium | Conductividad controlada",
      color: "#64748b",
      status: "Activo"
    },
    {
      element: "Au³⁺",
      industry: "Procesamiento Oro",
      application: "Clarificación PLS carbón-pulpa",
      performance: "98% Recuperación Au",
      specs: "Protección resinas IX | Sólidos <5 μm removidos",
      color: "#f59e0b",
      status: "Especializado"
    },
    {
      element: "REE",
      industry: "Tierras Raras",
      application: "Separación finos lantánidos",
      performance: "97% Pureza concentrados",
      specs: "Selectividad molecular | Protección intercambiadores",
      color: "#10b981",
      status: "Avanzado"
    }
  ]

  const useCases = [
    {
      industry: 'Litio DLE',
      application: 'Protección membranas extracción directa',
      challenge: 'Sólidos ultra-finos <5μm contaminaban membranas selectivas, reduciendo eficiencia extracción Li+ de 65% a 45%',
      solution: 'Sistema filtros prensa + hidrociclones para remoción partículas coloidales',
      result: 'Extensión vida útil membranas 400%, eficiencia Li+ 94%',
      client: 'Operaciones Litio Sudamérica',
      savings: 'ROI 280% primer año'
    },
    {
      industry: 'Cobre SX',
      application: 'Eliminación crud formación',
      challenge: 'Formación crud estable causaba pérdidas extractante $3M/año y paradas operacionales',
      solution: 'Filtros prensa móviles 14 ton/día con control automático turbidez',
      result: 'Reducción incidents crud 85%, ahorro $2.8M/año',
      client: 'Plantas SX Región Antofagasta',
      savings: 'Disponibilidad SX 97.5%'
    },
    {
      industry: 'Zinc EW',
      application: 'Ultra-purificación electrolito',
      challenge: 'Sólidos suspendidos causaban rugosidad catódica, rechazo 15% producción',
      solution: 'Clarificación avanzada filtros prensa + filtración polish',
      result: 'Calidad cátodos 99.995% Zn, reducción rechazo 90%',
      client: 'Refinería Zinc Internacional',
      savings: 'Savings $1.8M/año'
    }
  ]

  const caseStudies = [
    {
      title: "Revolución DLE en Salar de Atacama",
      client: "Operaciones Litio Sudamérica",
      challenge: "Sólidos ultra-finos &lt;5μm contaminaban membranas selectivas, reduciendo eficiencia extracción Li+ de 65% a 45% en 6 meses.",
      solution: "Implementación sistema híbrido: filtros prensa + hidrociclones 10mm para remoción partículas coloidales pre-DLE.",
      results: [
        "Extensión vida útil membranas: 400%",
        "Eficiencia extracción Li+: 94%",
        "Pureza Li₂CO₃: 99.7%",
        "ROI: 280% primer año"
      ],
      metrics: {
        before: { efficiency: "65%", membrane_life: "3 meses", purity: "97.2%" },
        after: { efficiency: "94%", membrane_life: "15 meses", purity: "99.7%" }
      },
      industry: "Litio",
      color: "#06b6d4"
    },
    {
      title: "Eliminación Crud en SX Cobre",
      client: "Plantas SX Región Antofagasta",
      challenge: "Formación crud estable en circuitos SX causaba pérdidas extractante $3M/año y paradas operacionales frecuentes.",
      solution: "Batería filtros prensa móviles 14 ton/día con control automático turbidez para remoción continua sólidos coloidales.",
      results: [
        "Reducción incidents crud: 85%",
        "Ahorro pérdidas orgánico: $2.8M/año",
        "Disponibilidad SX: 97.5%",
        "Tiempo vida extractante: +40%"
      ],
      metrics: {
        before: { crud_incidents: "35/mes", availability: "78%", losses: "$3M/año" },
        after: { crud_incidents: "4/mes", availability: "97.5%", losses: "$0.2M/año" }
      },
      industry: "Cobre",
      color: "#ea580c"
    },
    {
      title: "Ultra-Purificación EW Zinc",
      client: "Refinería Zinc Internacional",
      challenge: "Sólidos suspendidos en electrolito causaban rugosidad catódica, rechazo 15% producción y pérdidas $1.5M/año.",
      solution: "Sistema clarificación avanzada: filtros prensa + filtración polish para soluciones ultra-puras EW.",
      results: [
        "Calidad cátodos: 99.995% Zn",
        "Reducción rechazo: 90%",
        "Eficiencia catódica: 96%",
        "Savings: $1.8M/año"
      ],
      metrics: {
        before: { purity: "99.8%", rejection: "15%", efficiency: "89%" },
        after: { purity: "99.995%", rejection: "1.5%", efficiency: "96%" }
      },
      industry: "Zinc",
      color: "#64748b"
    }
  ]

  const benefits = [
    'Protección membranas DLE y resinas IX',
    'Eliminación crud formation en SX',
    'Ultra-purificación soluciones EW',
    'Extensión 300% vida útil equipos',
    'Cumplimiento especificaciones comerciales',
    'Reducción 80% costos mantenimiento',
    'Monitoreo AI y control automatizado'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enterprise-Grade Fine Solids Hero */}
      <section ref={heroRef} className="relative bg-white overflow-hidden">
        {/* TSF Signature Industrial Fine Solids Theme */}
        <div className="absolute inset-0 overflow-hidden" style={{
          maskImage: `linear-gradient(to left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 65%,
            rgba(0,0,0,0.15) 85%,
            rgba(0,0,0,0.05) 100%
          )`,
          WebkitMaskImage: `linear-gradient(to left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 65%,
            rgba(0,0,0,0.15) 85%,
            rgba(0,0,0,0.05) 100%
          )`
        }}>
          {/* Base gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-gray-50/50"></div>

          {/* SIGNATURE PARTICLE SEPARATION PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(147, 51, 234, 0.4) 49%, rgba(147, 51, 234, 0.4) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(147, 51, 234, 0.3) 49%, rgba(147, 51, 234, 0.3) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(147, 51, 234, 0.2) 49%, rgba(147, 51, 234, 0.2) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>

          {/* CENTRIFUGE SEPARATION PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c3aed' fill-opacity='0.6'%3E%3Ccircle cx='40' cy='40' r='20' stroke='%237c3aed' stroke-width='1' fill='none'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%237c3aed'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>

          {/* PARTICLE SIZE GRADIENT */}
          <div className="absolute inset-0 opacity-[0.12]">
            {/* Large particles (input) */}
            <div className="absolute top-1/6 left-[15%] w-4 h-4 bg-purple-600/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-[12%] w-3 h-3 bg-purple-500/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-[18%] w-5 h-5 bg-purple-700/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Medium particles (process) */}
            <div className="absolute top-2/5 left-1/2 w-2 h-2 bg-purple-500/40 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-3/5 left-1/2 w-2.5 h-2.5 bg-purple-600/35 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>

            {/* Fine particles (output) */}
            <div className="absolute top-1/4 right-[15%] w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-[12%] w-1 h-1 bg-purple-500/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-[18%] w-1.5 h-1.5 bg-purple-600/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </div>

          {/* TSF BRAND MOLECULAR SIGNATURE */}
          <div className="absolute bottom-1/6 right-1/6 opacity-[0.12]">
            <div className="relative w-24 h-24">
              {/* Central brand hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>

              {/* Orbital brand elements */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Large Centrifuge Icon - Premium Treatment */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <Waves className="w-full h-full text-purple-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>


        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-8xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-purple-600 font-medium">Separación de Sólidos Finos</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Disponible 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Hero Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-8 pt-12 pb-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Premium Content */}
            <div className="lg:col-span-7">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight text-slate-900 leading-[0.9] mb-4">
                  Separación de Sólidos
                  <span className="block text-purple-600">
                    de Líquidos
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  Filtración Alto Caudal • Desde 6μm • Aplicación Universal
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Protección avanzada de membranas DLE y filtración de líquidos de alto caudal
                <span className="font-bold text-slate-900"> desde 6 micrones (μm) en adelante</span>.
                <span className="text-purple-600 font-medium"> Filtros prensa 260 m³/día</span>
                con control automático de turbidez para cualquier aplicación de separación sólido-líquido.
              </p>

              {/* Enterprise CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 overflow-hidden hover:shadow-xl hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Evaluación Técnica</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 bg-white/50 hover:bg-white/80 backdrop-blur-sm">
                  <span>Descargar Casos DLE</span>
                  <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600/15 to-purple-700/8 rounded-full opacity-40 animate-float-slow blur-sm"></div>
                <div className="absolute bottom-8 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-600/12 rounded-full opacity-35 animate-float-medium blur-sm"></div>
                <div className="absolute top-1/3 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/18 to-purple-500/10 rounded-full opacity-30 animate-float-slow blur-md"></div>

                <div className="absolute bottom-1/4 right-8 opacity-25">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full enterprise-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>

              {/* Hero Image Container */}
              <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for filter press equipment image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-100 via-purple-50 to-white flex items-center justify-center border border-purple-200/50">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center">
                      <Waves className="w-12 h-12 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-800 mb-2">Sistema Filtros Prensa Móviles</h3>
                    <p className="text-sm text-purple-600">Separación ultra-selectiva partículas finas</p>
                  </div>
                </div>

                {/* Technical overlay indicators */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-gray-700">Sistema Activo</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs text-gray-700">
                    <div className="font-bold">&lt;20μm</div>
                    <div className="text-gray-500">Corte Partículas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Aplicaciones por Industria
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Soluciones específicas de separación sólidos finos para cada proceso hidrometalúrgico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {industrialApplications.map((app, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.element}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{app.industry}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">{app.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-500">Aplicación</span>
                    <p className="text-slate-900 font-medium">{app.application}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-500">Performance</span>
                    <p className="text-lg font-bold" style={{ color: app.color }}>{app.performance}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-500">Especificaciones Técnicas</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{app.specs}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 group-hover:bg-slate-900 group-hover:text-white">
                    Ver Especificaciones
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits / KPIs Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Beneficios Clave
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ventajas técnicas y operacionales de nuestros sistemas de filtración de sólidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reducción Turbidez */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-purple-100 transform hover:scale-105 group relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Droplets className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Reducción Turbidez</h3>

                <div className="mb-4">
                  <div className="text-3xl font-black text-purple-600 mb-2">&lt;10 NTU</div>
                  <p className="text-gray-600 text-sm">
                    Control automático de turbidez para protección de membranas DLE y equipos hidrometalúrgicos
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <div className="flex items-center text-sm text-purple-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Monitoreo continuo
                  </div>
                </div>
              </div>
            </div>

            {/* Equipos Móviles */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-purple-100 transform hover:scale-105 group relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Truck className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Equipos Móviles</h3>

                <div className="mb-4">
                  <div className="text-3xl font-black text-purple-600 mb-2">24-48h</div>
                  <p className="text-gray-600 text-sm">
                    Instalación rápida sin modificar infraestructura. Sistema plug-and-play completamente portátil
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <div className="flex items-center text-sm text-purple-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Sin instalación permanente
                  </div>
                </div>
              </div>
            </div>

            {/* Reducción PPM */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-purple-100 transform hover:scale-105 group relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Activity className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Reducción PPM</h3>

                <div className="mb-4">
                  <div className="text-3xl font-black text-purple-600 mb-2">&lt;20 mg/L</div>
                  <p className="text-gray-600 text-sm">
                    Remoción efectiva de sólidos suspendidos totales (TSS) para procesos SX/EW
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <div className="flex items-center text-sm text-purple-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Calidad garantizada
                  </div>
                </div>
              </div>
            </div>

            {/* Capacidad por Equipo */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-purple-100 transform hover:scale-105 group relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <BarChart3 className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Capacidad Alto Caudal</h3>

                <div className="mb-4">
                  <div className="text-3xl font-black text-purple-600 mb-2">260 m³/día</div>
                  <p className="text-gray-600 text-sm">
                    Filtros prensa de alta capacidad por equipo. Configuración modular escalable
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100">
                  <div className="flex items-center text-sm text-purple-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Escalabilidad ilimitada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Proceso de Separación
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Metodología sistematizada para remoción ultra-eficiente de sólidos finos en aplicaciones críticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-96 flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{step.description}</p>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-slate-500">{step.additionalInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Resultados comprobados en proyectos de separación sólidos finos en Latinoamérica
            </p>
          </div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Case Study Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: study.color }}
                      >
                        {study.industry.charAt(0)}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-500">{study.industry}</span>
                        <h3 className="text-2xl font-black text-slate-900">{study.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 font-medium">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Desafío
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Solución TSF
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-1">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Resultados
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Before/After Metrics */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <span className="text-xs text-slate-500 block">Antes</span>
                          <div className="text-lg font-bold text-red-600">{Object.values(study.metrics.before)[0]}</div>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 block">Después</span>
                          <div className="text-lg font-bold text-green-600">{Object.values(study.metrics.after)[0]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">
                Beneficios Clave
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Ventajas competitivas de nuestros sistemas de separación sólidos finos
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contacto Especializado</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Aplicación</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
                    <option>DLE - Extracción Directa Litio</option>
                    <option>SX - Extracción por Solventes</option>
                    <option>EW - Electroobtención</option>
                    <option>Cristalización Sales</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Capacidad Requerida</label>
                  <input
                    type="text"
                    placeholder="ej: 50 m³/h"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400"
                  />
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                  Solicitar Evaluación Técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
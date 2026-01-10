'use client'

// src/app/industries/lithium/page.js
import { useEffect, useRef } from 'react'
import { Chemistry, Enterprise, CheckmarkFilled, BatteryFull, RainDrop, Filter } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LithiumIndustryPage() {
  const tableRef = useRef(null)

  useEffect(() => {
    if (!tableRef.current) return

    const ctx = gsap.context(() => {
      // Blueprint animation for the comparison table
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#comparison-table',
          start: 'top 70%',
          once: true,
        }
      })

      // Step 1: Fade in the table container
      tl.fromTo('#comparison-table',
        {
          opacity: 0,
          scale: 0.98
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        }
      )
      // Step 2: Draw horizontal borders (top and bottom)
      .fromTo('.table-border-top, .table-border-bottom',
        {
          scaleX: 0,
          transformOrigin: 'left center'
        },
        {
          scaleX: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.inOut'
        },
        '-=0.2'
      )
      // Step 3: Draw vertical borders (left and right)
      .fromTo('.table-border-left, .table-border-right',
        {
          scaleY: 0,
          transformOrigin: 'top center'
        },
        {
          scaleY: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.inOut'
        },
        '-=0.5'
      )
      // Step 4: Fade in the content row by row
      .fromTo('.table-content',
        {
          opacity: 0,
          y: 8
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out'
        },
        '-=0.3'
      )
    }, tableRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: "Clarificación Salmueras Pre-DLE",
      description: "Centrífugas decanter móviles eliminan arcillas y sólidos suspendidos antes de membranas DLE. Protección crítica de inversión $500K-$2M+ en adsorbentes. 300% extensión vida útil validada.",
      icon: RainDrop,
      benefits: ["Protege membranas DLE costosas", "300% extensión vida útil", "Turbidez <10 NTU garantizada"],
      rating: 4.9,
      completionTime: "2-4 semanas movilización"
    },
    {
      title: "Filtración Precipitados Mg/Ca/B",
      description: "Filtros prensa móviles (hasta 130 ton/día) procesan precipitados gelatinosos de Mg, Ca, boro. Esencial para salmueras LatAm con Mg/Li 58:1. Sin CAPEX en infraestructura fija.",
      icon: Enterprise,
      benefits: ["130 ton/día capacidad", "Sin inversión CAPEX", "Manejo precipitados gelatinosos"],
      rating: 4.8,
      completionTime: "Operación continua 24/7"
    },
    {
      title: "Purificación Li₂CO₃ Grado Batería",
      description: "Lavado y filtración de tortas Li₂CO₃ para alcanzar >99.95% pureza grado batería. Control <100 ppm impurezas metálicas. Reducción 60-70% humedad para transporte eficiente.",
      icon: BatteryFull,
      benefits: ["99.95%+ pureza comprobada", "<100 ppm impurezas metálicas", "60-70% reducción humedad"],
      rating: 4.9,
      completionTime: "Integrado proceso"
    },
    {
      title: "Clarificación Agua Proceso",
      description: "Recuperación y clarificación de aguas de proceso (hasta 120 m³/día). Cierre de circuitos para cumplimiento ambiental. Reduce consumo agua fresca hasta 40% en operaciones DLE.",
      icon: Chemistry,
      benefits: ["120 m³/día clarificación", "Cierre circuitos agua", "40% reducción agua fresca"],
      rating: 4.7,
      completionTime: "Escalable según demanda"
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Tecionic as THE Solution */}
        <section className="relative overflow-hidden">
          {/* Background with cyan gradient + subtle grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50"></div>
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 182 212) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, transparent 70%)'
          }}></div>

          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
            <div className="max-w-4xl">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100">
                  <BatteryFull size={16} className="text-cyan-600" />
                  <span className="text-sm font-semibold text-cyan-700">Industria del Litio</span>
                </div>

                {/* Headline - Tecionic as THE infrastructure */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900">
                  Infraestructura móvil de filtración para proyectos DLE
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                  América Latina concentra el 60% de las reservas globales de litio. A medida que DLE reemplaza la evaporación tradicional,
                  <span className="font-bold text-gray-900"> Tecionic protege inversiones de $500K-$2M+</span> en membranas y adsorbentes mediante separación de sólidos suspendidos.
                </p>

                {/* Key Differentiators - Tecionic Stats */}
                <div className="grid grid-cols-3 gap-8 pt-6 max-w-2xl">
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-1">300%</div>
                    <div className="text-sm text-gray-600">Extensión vida membranas DLE</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-1">$0</div>
                    <div className="text-sm text-gray-600">CAPEX inicial</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-1">2-4</div>
                    <div className="text-sm text-gray-600">Semanas movilización</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                    Ver soluciones DLE
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300">
                    Casos validados
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Opportunity - Industry Challenge + Tecionic Solution */}
        <section ref={tableRef} className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left Column - Content (40%) */}
              <div className="lg:col-span-2">
                <div className="sticky top-8">
                  <div className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wider">El Desafío</div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    DLE requiere protección de membranas—sin inmovilizar capital
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Los proyectos DLE reducen el tiempo de producción a meses versus años de evaporación. Sin embargo, membranas y adsorbentes
                    ($500K-$2M+ por sistema) son vulnerables al fouling por sólidos suspendidos.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Las operaciones deben elegir entre infraestructura fija ($2M-$5M CAPEX, 12-18 meses) o soluciones móviles que preservan capital para expansión.
                  </p>

                  {/* Key Stats */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm font-semibold text-gray-900">$0 CAPEX inicial</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm font-semibold text-gray-900">2-4 semanas movilización</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm font-semibold text-gray-900">300% extensión vida membranas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Comparison Table (60%) */}
              <div className="lg:col-span-3">
                <div id="comparison-table" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
                  {/* Animated border elements for blueprint effect */}
                  <div className="table-border-top absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 z-10" />
                  <div className="table-border-right absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-emerald-500 z-10" />
                  <div className="table-border-bottom absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 z-10" />
                  <div className="table-border-left absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 z-10" />
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-6 px-10 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 table-content">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Criterio
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Infraestructura Fija
                </div>
                <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                  Tecionic
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-gray-100">
                {/* CAPEX */}
                <div className="grid grid-cols-3 gap-6 px-10 py-5 hover:bg-gray-50/50 transition-colors table-content">
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Inversión inicial</div>
                    <div className="text-sm text-gray-500">CAPEX requerido</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">$2M - $5M+</div>
                      <div className="text-sm text-gray-600">Capital inmovilizado</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-900">$0 CAPEX</div>
                      <div className="text-sm text-emerald-700">Opex mensual predecible</div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-3 gap-6 px-10 py-5 hover:bg-gray-50/50 transition-colors table-content">
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Tiempo implementación</div>
                    <div className="text-sm text-gray-500">Hasta operación</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">12-18 meses</div>
                      <div className="text-sm text-gray-600">Ingeniería, permisos, obra civil</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-900">2-4 semanas</div>
                      <div className="text-sm text-emerald-700">Movilización inmediata</div>
                    </div>
                  </div>
                </div>

                {/* Flexibility */}
                <div className="grid grid-cols-3 gap-6 px-10 py-5 hover:bg-gray-50/50 transition-colors table-content">
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Escalabilidad</div>
                    <div className="text-sm text-gray-500">Ajuste de capacidad</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Capacidad fija</div>
                      <div className="text-sm text-gray-600">Nueva inversión para expansión</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-900">Escalable dinámicamente</div>
                      <div className="text-sm text-emerald-700">Ajuste opex según producción</div>
                    </div>
                  </div>
                </div>

                {/* Risk */}
                <div className="grid grid-cols-3 gap-6 px-10 py-5 hover:bg-gray-50/50 transition-colors table-content">
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Riesgo tecnológico</div>
                    <div className="text-sm text-gray-500">Obsolescencia DLE</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Alto</div>
                      <div className="text-sm text-gray-600">Inversión inmovilizada permanente</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-900">Mínimo</div>
                      <div className="text-sm text-emerald-700">Flota actualizada continuamente</div>
                    </div>
                  </div>
                </div>

                {/* Validation */}
                <div className="grid grid-cols-3 gap-6 px-10 py-5 bg-gradient-to-r from-emerald-50/30 to-cyan-50/30 table-content">
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Desempeño validado</div>
                    <div className="text-sm text-gray-500">Protección membranas DLE</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500 font-bold">?</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Variable</div>
                      <div className="text-sm text-gray-600">Depende del proveedor</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-900">300% extensión vida útil</div>
                      <div className="text-sm text-emerald-700">Validado Salar de Atacama</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Where Tecionic Fits - 3 Critical Touchpoints */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Aplicaciones Tecionic
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tres etapas críticas donde Tecionic protege activos DLE
              </h2>
              <p className="text-xl text-gray-600">
                Cada fase del proceso DLE genera sólidos suspendidos que degradan equipos de alta inversión. Tecionic provee separación sólido-líquido sin requerir CAPEX en infraestructura permanente.
              </p>
            </div>

            {/* Three-Column Cards - Tecionic Benefit Focused */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Touchpoint 1 */}
              <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center shadow-lg font-black text-xl">
                  1
                </div>

                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <RainDrop size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Protección Membranas DLE</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Membranas y adsorbentes DLE cuestan $500K-$2M+. Sólidos suspendidos (arcillas, partículas) causan fouling que reduce vida útil 70%.
                </p>

                <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-600">
                  <p className="text-sm font-semibold text-emerald-900">
                    Centrífugas Tecionic eliminan partículas 1-5 micrones. <span className="text-emerald-600">300% extensión vida útil</span> validado en Atacama.
                  </p>
                </div>
              </div>

              {/* Touchpoint 2 */}
              <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center shadow-lg font-black text-xl">
                  2
                </div>

                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Filter size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Remoción Impurezas (Mg, Ca, B)</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Salmueras LatAm tienen Mg/Li hasta 58:1. Precipitar y filtrar Mg, Ca, boro es crítico para pureza grado batería.
                </p>

                <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-600">
                  <p className="text-sm font-semibold text-emerald-900">
                    Filtros prensa Tecionic procesan <span className="text-emerald-600">hasta 130 ton/día</span> de precipitados gelatinosos. Movilización en semanas, no meses.
                  </p>
                </div>
              </div>

              {/* Touchpoint 3 */}
              <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center shadow-lg font-black text-xl">
                  3
                </div>

                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <BatteryFull size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Li₂CO₃ Grado Batería</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Especificación grado batería exige &gt;99.95% pureza, &lt;100 ppm impurezas metálicas. Lavado de torta es esencial.
                </p>

                <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-600">
                  <p className="text-sm font-semibold text-emerald-900">
                    Tecionic filtración + lavado en ciclos controlados. <span className="text-emerald-600">99.95%+ pureza comprobada</span>. 60-70% reducción humedad para transporte.
                  </p>
                </div>
              </div>
            </div>

            {/* Dark Summary Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 p-12 shadow-2xl">
              {/* Decorative blur elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative text-center max-w-3xl mx-auto">
                {/* Icon stack */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center border-2 border-cyan-900">
                      <RainDrop size={20} className="text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center border-2 border-cyan-900">
                      <Chemistry size={20} className="text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center border-2 border-cyan-900">
                      <BatteryFull size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4">
                  <span className="text-cyan-400">Tres etapas críticas</span> requieren separación sólido-líquido especializada
                </h3>

                <p className="text-lg text-cyan-100/80 mb-8 leading-relaxed">
                  Salar de Atacama produjo 201,000 MT de Li₂CO₃ en 2024. Normativa chilena exige DLE para nuevos proyectos.
                  Tecionic permite expansión de capacidad sin inmovilizar capital en infraestructura fija de filtración.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">$0</div>
                    <div className="text-sm text-gray-400">CAPEX filtración fija</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">0%</div>
                    <div className="text-sm text-gray-400">Downtime producción</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">99.95%</div>
                    <div className="text-sm text-gray-400">Pureza grado batería</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Tecionic - Modern Bento Box */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Por qué Tecionic
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Infraestructura de filtración móvil para proyectos DLE
              </h2>
              <p className="text-xl text-gray-600">
                Tecionic elimina la necesidad de CAPEX en infraestructura fija de filtración, permitiendo que operaciones DLE
                destinen capital a expansión de capacidad extractiva—con desempeño validado en operaciones de clase mundial.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid lg:grid-cols-4 gap-4">
              {/* Large stat card - spans 2 columns */}
              <div className="lg:col-span-2 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="text-7xl font-black mb-3">300%</div>
                  <div className="text-xl font-semibold mb-3 text-cyan-50">Extensión vida membranas DLE</div>
                  <p className="text-cyan-100 text-sm leading-relaxed">
                    Validado en Salar de Atacama. Protección comprobada de equipos $500K-$2M+.
                  </p>
                </div>
              </div>

              {/* Medium stat card */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-black text-gray-900 mb-2">$0</div>
                <div className="text-base font-semibold text-gray-700 mb-2">CAPEX inicial</div>
                <p className="text-sm text-gray-500">
                  vs $2M-$5M+ inversión tradicional.
                </p>
              </div>

              {/* Medium stat card */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-black text-gray-900 mb-2">2-4</div>
                <div className="text-base font-semibold text-gray-700 mb-2">Semanas movilización</div>
                <p className="text-sm text-gray-500">
                  vs 12-18 meses infraestructura fija.
                </p>
              </div>

              {/* Feature card - spans 2 columns */}
              <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckmarkFilled size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Flota especializada DLE</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Centrífugas decanter y filtros prensa certificados ex.proof. Diseñados para salmueras corrosivas y precipitados gelatinosos de Mg/Ca/B.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature card */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <CheckmarkFilled size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Escalabilidad total</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Desde proyectos piloto hasta 50,000 MT/año Li₂CO₃. Opex mensual predecible.
                </p>
              </div>

              {/* Feature card */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <CheckmarkFilled size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Servicio integral</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ingeniero residente, mantención predictiva, SLA garantizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Lithium */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Capacidades Tecionic
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
                Equipos móviles certificados para cada etapa DLE
              </h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Centrífugas decanter, filtros prensa, y sistemas clarificación—todos certificados ex.proof, desplegables en 2-4 semanas, sin CAPEX.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:scale-105 group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                    <div className="w-full h-full steel-gradient"></div>
                  </div>
                  
                  {/* Floating balls on hover - matching home page layout */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float-up-1"></div>
                    <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-float-up-2"></div>
                    <div className="absolute top-6 right-12 w-1 h-1 bg-cyan-600 rounded-full animate-float-up-3"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-200 transition-colors duration-300">
                      <service.icon size={24} className="text-cyan-600 group-hover:text-cyan-700" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tiempo estimado: {service.completionTime}</div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckmarkFilled size={16} className="text-cyan-500 mr-2 micro-bounce" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Tecionic Focus */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center text-white relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <CheckmarkFilled size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">Validado en Salar de Atacama</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Protección de inversión DLE—<br />
              <span className="text-cyan-400">sin inmovilizar capital en infraestructura fija</span>
            </h2>

            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Tecionic despliega centrífugas decanter y filtros prensa certificados ex.proof en 2-4 semanas. Modelo opex elimina CAPEX inicial.
              Desempeño comprobado: 300% extensión vida útil en membranas DLE ($500K-$2M+).
            </p>

            <p className="text-lg text-cyan-200/80 mb-10 max-w-2xl mx-auto">
              Desde proyectos piloto hasta 50,000 MT/año Li₂CO₃—capacidad escalable sin inversiones adicionales. Opex mensual predecible.
            </p>

            {/* Key benefits reminder */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-black text-cyan-400 mb-2">$0</div>
                <div className="text-sm text-gray-400">CAPEX inicial</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-black text-cyan-400 mb-2">2-4</div>
                <div className="text-sm text-gray-400">Semanas movilización</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-black text-cyan-400 mb-2">300%</div>
                <div className="text-sm text-gray-400">Extensión vida membranas</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/50">
                Consulta sin compromiso
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Ver casos validados
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
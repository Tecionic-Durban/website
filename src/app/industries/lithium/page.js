'use client'

// src/app/industries/lithium/page.js
import { useState, useEffect } from 'react'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, BarChart3, Clock, Activity, Star, ArrowUp, ArrowDown, Battery } from 'lucide-react'

export default function LithiumIndustryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [liveMetrics, setLiveMetrics] = useState({
    lithiumPrice: 24.50,
    productionRate: 87.3,
    concentration: 5.2,
    purityLevel: 99.6,
    batteryGrade: 97.8,
    recoveryRate: 93.1
  })

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 2000)

    // Update live metrics every 4 seconds
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        lithiumPrice: Math.max(20, prev.lithiumPrice + (Math.random() - 0.5) * 1.2),
        productionRate: Math.max(70, prev.productionRate + (Math.random() - 0.5) * 2),
        concentration: Math.min(6.5, Math.max(3, prev.concentration + (Math.random() - 0.5) * 0.2)),
        purityLevel: Math.min(99.9, Math.max(99.3, prev.purityLevel + (Math.random() - 0.5) * 0.1)),
        batteryGrade: Math.min(100, Math.max(95, prev.batteryGrade + (Math.random() - 0.5) * 0.3)),
        recoveryRate: Math.min(98, Math.max(88, prev.recoveryRate + (Math.random() - 0.5) * 0.4))
      }))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Scroll detection for continuous animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Start animation much earlier - right after hero content starts scrolling
      const triggerPoint = 200
      const animationDistance = 400 // Longer animation distance
      const progress = Math.max(0, Math.min((scrollY - triggerPoint) / animationDistance, 1))
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: "Direct Lithium Extraction (DLE)",
      description: "Tecnologías DLE para extracción directa de litio evitando evaporación tradicional. Sistemas de intercambio iónico y membranas selectivas.",
      icon: Beaker,
      benefits: ["Sin evaporación ponds", "Menor impacto ambiental", "Extracción selectiva Li"],
      rating: 4.9,
      completionTime: "Tecnología emergente"
    },
    {
      title: "Tratamiento Salmueras Li",
      description: "Pretratamiento crítico de salmueras de litio: remoción de iones interferentes que afectan selectividad en DLE. Ultrafiltración elimina sólidos suspendidos que causan fouling de membranas adsorbentes y reducen capacidad de intercambio iónico.",
      icon: Factory,
      benefits: ["Pretratamiento UF", "Sólidos suspendidos", "Protección medios DLE"],
      rating: 4.8,
      completionTime: "Integrado DLE"
    },
    {
      title: "Filtración Sólidos Finos Li",
      description: "Manejo de sólidos finos submicránicos en salmueras concentradas que contienen arcillas expandibles. Nanofiltración selectiva para separar litio de iones interferentes mientras retiene partículas coloidales que degradan membranas DLE.",
      icon: Zap,
      benefits: ["Nanofiltración NF", "Separaciones selectivas", "Sólidos finos Li"],
      rating: 4.7,
      completionTime: "Procesos continuos"
    },
    {
      title: "Cumplimiento Ambiental Borras Li",
      description: "Tratamiento de borras de litio con recuperación multi-mineral para economía circular. Concentración mediante evaporación y cristalización fraccionada elimina contaminantes mientras permite cumplimiento estricto de normativas de descargas líquidas en minería.",
      icon: Microscope,
      benefits: ["Multi-mineral recovery", "Economía circular", "Cumplimiento descargas"],
      rating: 4.9,
      completionTime: "Implementación continua"
    }
  ]

  const caseStudies = [
    {
      client: "SQM Cliente Actual TSF",
      challenge: "Tratamiento complejo de salmueras litio con alta relación Mg/Li y requerimientos ambientales estrictos en descargas borras",
      solution: "Aplicación de tecnologías DLE con pretratamiento UF y sistemas cumplimiento ambiental para manejo sólidos finos",
      results: ["DLE sin evaporación", "Cumplimiento ambiental", "Reducción impacto hídrico"],
      timeline: "Cliente actual",
      savings: "Servicios especializados TSF",
      before: { waterImpact: 100, envCompliance: 70, extraction: 85 },
      after: { waterImpact: 30, envCompliance: 100, extraction: 95 }
    },
    {
      client: "Salar Atacama (Referencia DLE)",
      challenge: "Desarrollo tecnologías DLE para litio compatible con brines de alta relación Mg/Li hasta 3258:1 y producción grado batería >99.95%",
      solution: "Sistemas electroquímicos decoupled membrane-free con electrodos Fe-fosfato y conexión Ag/Ag-halide redox",
      results: ["Compatible Mg/Li 3258:1", "Grado batería >99.95%", "Li2CO3 battery-grade"],
      timeline: "Desarrollo continuo",
      savings: "Modelo referencia DLE",
      before: { mgLiRatio: 3258, batteryGrade: 95, technology: 1 },
      after: { mgLiRatio: 10, batteryGrade: 99.95, technology: 5 }
    }
  ]

  const specifications = [
    {
      parameter: "Concentración Li Final",
      standard: "3,000-4,000 ppm",
      withTecionicDurban: "5,000-6,500 ppm",
      improvement: "+45%"
    },
    {
      parameter: "Pureza Li2CO3",
      standard: "99.0-99.3%",
      withTecionicDurban: "99.5-99.8%",
      improvement: "+0.4%"
    },
    {
      parameter: "Recuperación Li Total",
      standard: "85-90%",
      withTecionicDurban: "92-96%", 
      improvement: "+6%"
    },
    {
      parameter: "Impurezas Metálicas",
      standard: "< 500 ppm total",
      withTecionicDurban: "< 100 ppm total",
      improvement: "-80%"
    }
  ]

  // Three Ball Loader Component
  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce"></div>
    </div>
  )

  // TEMPORARILY DISABLED: Decorative elements per stakeholder request
  // const FloatingElements = () => (
  //   <>
  //     {/* Decorative floating elements */}
  //   </>
  // )

  const BeforeAfterComparison = ({ before, after, labels }) => (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {Object.keys(before).map((key, idx) => (
        <div key={key} className="text-center">
          <div className="text-xs text-gray-500 mb-1">{labels[key]}</div>
          <div className="flex items-center justify-center space-x-2">
            <div className="text-sm text-red-600 font-semibold">{before[key]}</div>
            <ArrowUp className="w-3 h-3 text-emerald-500" />
            <div className="text-sm text-emerald-600 font-bold">{after[key]}</div>
          </div>
        </div>
      ))}
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-4 text-cyan-800 font-medium">Cargando datos de litio...</p>
        </div>
      </div>
    )
  }


  return (
    <>
      {/* TEMPORARILY DISABLED: Decorative elements per stakeholder request */}
      {/* <FloatingElements /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full metal-texture"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mr-4 industrial-shimmer">
                    <span className="text-white text-2xl font-bold">Li</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2">Industria del Litio</h1>
                    <p className="text-cyan-200 text-lg">Extracción, Concentración y Purificación</p>
                  </div>
                </div>
                
                <div className="w-24 h-1 bg-cyan-400 mb-6"></div>
                
                <p className="text-xl text-cyan-100 leading-relaxed mb-8">
                  Tratamiento especializado de salmueras y sólidos en plantas de litio. 
                  Manejo de sólidos finos y cumplimiento ambiental en descargas de borras 
                  mediante sistemas DLE y tecnologías de filtración avanzada.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 precision-click">
                    Ver Casos de Éxito
                  </button>
                  <button className="border-2 border-cyan-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 hover:text-cyan-900 transition-all duration-300 transform hover:scale-105 precision-click">
                    Consulta Técnica
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-cyan-800/30 rounded-2xl flex items-center justify-center border border-cyan-500/20 carbon-fiber">
                  <div className="text-6xl">🔋</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Live Metrics Dashboard with Smooth Header Transformation */}
            <div 
              className="mt-16 transition-all duration-700 ease-in-out"
              style={{
                position: scrollProgress > 0.8 ? 'fixed' : 'relative',
                top: scrollProgress > 0.8 ? '50px' : 'auto',
                left: '0',
                right: '0',
                zIndex: scrollProgress > 0.8 ? 40 : 'auto',
                height: `${Math.max(48, 120 - scrollProgress * 72)}px`,
                transform: `translateY(${scrollProgress * -20}px)`,
                background: scrollProgress > 0.8 ? 'rgba(8, 145, 178, 0.95)' : 'transparent',
                backdropFilter: scrollProgress > 0.8 ? 'blur(8px)' : 'none',
                willChange: 'transform, height, background'
              }}
            >
              <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
                <div 
                  className={`transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'flex items-center space-x-4' : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'
                  }`}
                  style={{
                    width: scrollProgress > 0.5 ? 'auto' : '100%',
                    justifySelf: scrollProgress > 0.5 ? 'flex-start' : 'center',
                    willChange: 'width, display'
                  }}
                >
                  {/* Icon appears when compressed */}
                  {scrollProgress > 0.5 && (
                    <div className="w-7 h-7 bg-cyan-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Li</span>
                    </div>
                  )}

                  {/* Main Metrics */}
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <BarChart3 className="w-4 h-4 text-cyan-300 mr-1" />}
                      {scrollProgress > 0.5 && <BarChart3 className="w-3 h-3 text-cyan-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>${liveMetrics.lithiumPrice.toFixed(1)}k</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-cyan-200 text-xs transition-opacity duration-700">Precio Li</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-cyan-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Activity className="w-4 h-4 text-cyan-300 mr-1" />}
                      {scrollProgress > 0.5 && <Activity className="w-3 h-3 text-cyan-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.productionRate.toFixed(1)}{scrollProgress > 0.5 ? 't' : ''}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-cyan-200 text-xs transition-opacity duration-700">Producción</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-cyan-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Star className="w-4 h-4 text-cyan-300 mr-1" />}
                      {scrollProgress > 0.5 && <Star className="w-3 h-3 text-cyan-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.purityLevel.toFixed(1)}%</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-cyan-200 text-xs transition-opacity duration-700">Pureza</p>}
                  </div>
                  
                  {/* Additional metrics only shown when not compressed */}
                  {scrollProgress <= 0.5 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Beaker className="w-4 h-4 text-cyan-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.concentration.toFixed(1)}k</span>
                        </div>
                        <p className="text-cyan-200 text-xs">Concentración</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Battery className="w-4 h-4 text-cyan-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.batteryGrade.toFixed(1)}</span>
                        </div>
                        <p className="text-cyan-200 text-xs">Grado Batería</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-cyan-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.recoveryRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-cyan-200 text-xs">Recuperación</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Services for Lithium */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
                Servicios Especializados para Litio
              </h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicios especializados para plantas litio con tecnologías DLE, tratamiento 
                salmueras y cumplimiento ambiental mediante equipos de filtración avanzada.
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
                      <service.icon className="w-6 h-6 text-cyan-600 group-hover:text-cyan-700" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tiempo estimado: {service.completionTime}</div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 micro-bounce" />
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

        {/* Performance Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Especificaciones de Rendimiento
              </h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Comparativa de resultados estándar vs. optimización con Tec-Ionic Durban
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-cyan-600 text-white steel-gradient">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Parámetro</th>
                    <th className="px-6 py-4 text-center font-semibold">Estándar Industria</th>
                    <th className="px-6 py-4 text-center font-semibold">Con Tec-Ionic Durban</th>
                    <th className="px-6 py-4 text-center font-semibold">Mejora</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-medium text-gray-900">{spec.parameter}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{spec.standard}</td>
                      <td className="px-6 py-4 text-center font-semibold text-cyan-600">{spec.withTecionicDurban}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold micro-bounce">
                          {spec.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Case Studies with Before/After */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Casos de Éxito en Litio
              </h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Resultados reales en operaciones de litio de gran escala
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                  <div className="bg-cyan-600 text-white p-6 steel-gradient">
                    <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                    <p className="text-cyan-200">Proyecto de optimización litio</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Desafío:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solución:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Resultados:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <TrendingUp className="w-4 h-4 text-emerald-500 mr-2 micro-bounce" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Before/After Comparison */}
                    {index === 0 && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-3 text-center">Antes vs Después</h5>
                        <BeforeAfterComparison 
                          before={study.before}
                          after={study.after}
                          labels={{
                            concentration: "Concentración ppm",
                            mgLiRatio: "Ratio Mg/Li",
                            purity: "Pureza Li2CO3 %"
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600">{study.timeline}</div>
                        <div className="text-xs text-gray-500">Implementación</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-600">{study.savings}</div>
                        <div className="text-xs text-gray-500">Ahorro anual</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full industrial-shimmer"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Optimizar tu Operación de Litio?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Nuestros especialistas pueden evaluar tu proceso actual y diseñar
              una solución personalizada para maximizar tu recuperación de litio grado batería.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 precision-click">
                Evaluación Especializada
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105 precision-click">
                Descargar Caso de Éxito
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
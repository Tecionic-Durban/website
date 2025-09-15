'use client'

// src/app/industries/zinc/page.js
import { useState, useEffect } from 'react'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, BarChart3, Clock, Activity, Star, ArrowUp, ArrowDown } from 'lucide-react'

export default function ZincIndustryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [liveMetrics, setLiveMetrics] = useState({
    zincPrice: 2.67,
    productionRate: 98.4,
    purityLevel: 99.97,
    energyEfficiency: 91.2,
    impurityControl: 25.8,
    recoveryRate: 94.1
  })

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 2000)

    // Update live metrics every 4 seconds
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        zincPrice: Math.max(2.2, prev.zincPrice + (Math.random() - 0.5) * 0.04),
        productionRate: Math.max(85, prev.productionRate + (Math.random() - 0.5) * 1.5),
        purityLevel: Math.min(99.99, Math.max(99.90, prev.purityLevel + (Math.random() - 0.5) * 0.02)),
        energyEfficiency: Math.min(95, Math.max(85, prev.energyEfficiency + (Math.random() - 0.5) * 0.8)),
        impurityControl: Math.max(15, prev.impurityControl + (Math.random() - 0.5) * 2),
        recoveryRate: Math.min(98, Math.max(90, prev.recoveryRate + (Math.random() - 0.5) * 0.4))
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
      title: "Filtros Móviles Circuitos SX-Zn",
      description: "Aplicación de filtros móviles en circuitos SX de zinc con capacidades similares a cobre pero adaptados a densidades específicas de Zn.",
      icon: Beaker,
      benefits: ["Adaptado densidades Zn", "Capacidades similares Cu", "Tecnología móvil"],
      rating: 4.8,
      completionTime: "Fase prospección"
    },
    {
      title: "Control Abrasividad",
      description: "Manejo especializado de mayor abrasividad en procesos zinc y control optimizado del orgánico para prevenir degradación.",
      icon: Factory,
      benefits: ["Mayor abrasividad", "Control orgánico", "Prevención degradación"],
      rating: 4.9,
      completionTime: "Desarrollo continuo"
    },
    {
      title: "Remoción Orgánico Entrainment",
      description: "Sistemas avanzados para remoción de orgánico entrainment crítico en electroobtención de zinc debido a sensibilidad extrema.",
      icon: Zap,
      benefits: ["Remoción entrainment", "Protección EW zinc", "Prevención sticky zinc"],
      rating: 4.7,
      completionTime: "Crítico EW"
    },
    {
      title: "Tratamiento Sólidos Gelatinosos",
      description: "Manejo especializado de fases gelatinosas por ácido polisílícico que pueden reducir eficiencia de lixiviación y causar problemas de filtración.",
      icon: Microscope,
      benefits: ["Control silica coloidal", "Prevención gelificación", "Optimización filtración"],
      rating: 4.9,
      completionTime: "Prospección activa"
    }
  ]

  const caseStudies = [
    {
      client: "Skorpion Zinc (Proyecto Referencia)",
      challenge: "Primer aplicación comercial SX-EW zinc con condiciones upset por impurezas upstream y acumulación elementos tierras raras",
      solution: "Desarrollo de tecnología filtros móviles adaptados a SX-Zn con manejo especializado de fase orgánica y control abrasividad",
      results: ["Tecnología SX-EW zinc comercial", "Control upset conditions", "Manejo REE acumulación"],
      timeline: "Proyecto referencia mundial",
      savings: "Modelo comercial establecido",
      before: { purity: 99.90, impurities: 80, energy: 3.6 },
      after: { purity: 99.99, impurities: 25, energy: 3.1 }
    },
    {
      client: "Aplicación TSF (En Desarrollo)",
      challenge: "Adaptación tecnología móvil TSF para circuitos zinc con mayor abrasividad y sensibilidad orgánica extrema",
      solution: "Desarrollo filtros móviles específicos zinc con sistemas control orgánico y manejo sólidos gelatinosos",
      results: ["En fase prospección", "Adaptación equipos móviles", "Control abrasividad Zn"],
      timeline: "Fase desarrollo",
      savings: "Potencial mercado zinc",
      before: { abrasivity: 100, organicSensitivity: 100, gelation: 100 },
      after: { abrasivity: 60, organicSensitivity: 30, gelation: 40 }
    }
  ]

  const specifications = [
    {
      parameter: "Recuperación de Zinc",
      standard: "88-92%",
      withTecionicDurban: "95-98%",
      improvement: "+6%"
    },
    {
      parameter: "Pureza Cátodo Zn",
      standard: "99.95-99.97%",
      withTecionicDurban: "99.99%+",
      improvement: "+0.02%"
    },
    {
      parameter: "Consumo Energético EW",
      standard: "3.2-3.6 kWh/kg Zn",
      withTecionicDurban: "2.8-3.1 kWh/kg Zn", 
      improvement: "-15%"
    },
    {
      parameter: "Impurezas Electrolito",
      standard: "50-80 ppm total",
      withTecionicDurban: "< 30 ppm total",
      improvement: "-60%"
    }
  ]

  // Three Ball Loader Component
  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce"></div>
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
      {/* TEMPORARILY DISABLED: Decorative elements per stakeholder request */}
      {/* <FloatingElements /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full metal-texture"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-slate-500 rounded-xl flex items-center justify-center mr-4 industrial-shimmer">
                    <span className="text-white text-2xl font-bold">Zn</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2">Industria del Zinc</h1>
                    <p className="text-slate-200 text-lg">Lixiviación, Purificación y Electroobtención</p>
                  </div>
                </div>
                
                <div className="w-24 h-1 bg-slate-400 mb-6"></div>
                
                <p className="text-xl text-slate-100 leading-relaxed mb-8">
                  Aplicación de filtros móviles en circuitos SX-Zn con capacidades adaptadas a 
                  densidades de zinc. Manejo especializado de mayor abrasividad y control de 
                  orgánico en fase de prospección para plantas zinc.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 precision-click">
                    Ver Casos de Éxito
                  </button>
                  <button className="border-2 border-slate-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 precision-click">
                    Consulta Técnica
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-slate-800/30 rounded-2xl flex items-center justify-center border border-slate-500/20 carbon-fiber">
                  <div className="text-6xl">⚡</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-500/20 rounded-full blur-xl"></div>
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
                background: scrollProgress > 0.8 ? 'rgba(71, 85, 105, 0.95)' : 'transparent',
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
                    <div className="w-7 h-7 bg-slate-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Zn</span>
                    </div>
                  )}

                  {/* Main Metrics */}
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <BarChart3 className="w-4 h-4 text-slate-300 mr-1" />}
                      {scrollProgress > 0.5 && <BarChart3 className="w-3 h-3 text-slate-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>${liveMetrics.zincPrice.toFixed(2)}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-slate-200 text-xs transition-opacity duration-700">Precio Zn</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-slate-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Activity className="w-4 h-4 text-slate-300 mr-1" />}
                      {scrollProgress > 0.5 && <Activity className="w-3 h-3 text-slate-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.productionRate.toFixed(1)}{scrollProgress > 0.5 ? 't' : ''}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-slate-200 text-xs transition-opacity duration-700">Producción</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-slate-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Clock className="w-4 h-4 text-slate-300 mr-1" />}
                      {scrollProgress > 0.5 && <Clock className="w-3 h-3 text-slate-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.energyEfficiency.toFixed(1)}%</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-slate-200 text-xs transition-opacity duration-700">Eficiencia</p>}
                  </div>
                  
                  {/* Additional metrics only shown when not compressed */}
                  {scrollProgress <= 0.5 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-slate-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.purityLevel.toFixed(2)}</span>
                        </div>
                        <p className="text-slate-200 text-xs">Pureza</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Microscope className="w-4 h-4 text-slate-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.impurityControl.toFixed(1)}</span>
                        </div>
                        <p className="text-slate-200 text-xs">Impurezas</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-slate-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.recoveryRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-slate-200 text-xs">Recuperación</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Services for Zinc */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
                Servicios Especializados para Zinc
              </h2>
              <div className="w-20 h-1 bg-slate-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Desarrollo de filtros móviles especializados para circuitos SX-Zn. Manejo de 
                abrasividad superior y control crítico de orgánico para protección electroobtención zinc.
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
                    <div className="absolute top-4 right-4 w-2 h-2 bg-slate-400 rounded-full animate-float-up-1"></div>
                    <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-slate-500 rounded-full animate-float-up-2"></div>
                    <div className="absolute top-6 right-12 w-1 h-1 bg-slate-600 rounded-full animate-float-up-3"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-slate-600 group-hover:text-slate-700" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tiempo estimado: {service.completionTime}</div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-slate-500 mr-2 micro-bounce" />
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
              <div className="w-20 h-1 bg-slate-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Comparativa de resultados estándar vs. optimización con Tec-Ionic Durban
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-slate-600 text-white steel-gradient">
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
                      <td className="px-6 py-4 text-center font-semibold text-slate-600">{spec.withTecionicDurban}</td>
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
                Casos de Éxito en Zinc
              </h2>
              <div className="w-20 h-1 bg-slate-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Resultados reales en operaciones de zinc de gran escala
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                  <div className="bg-slate-600 text-white p-6 steel-gradient">
                    <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                    <p className="text-slate-200">Proyecto de optimización zinc</p>
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
                            purity: "Pureza %",
                            impurities: "Impurezas ppm",
                            energy: "Energía kWh/kg"
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-600">{study.timeline}</div>
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
        <section className="py-20 bg-slate-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full industrial-shimmer"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Optimizar su Operación de Zinc?
            </h2>
            <p className="text-xl text-slate-100 mb-8">
              Nuestros especialistas pueden evaluar su proceso actual y diseñar 
              una solución personalizada para maximizar su recuperación de zinc de alta pureza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 precision-click">
                Evaluación Especializada
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-all duration-300 transform hover:scale-105 precision-click">
                Descargar Caso de Éxito
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
'use client'

// src/app/industries/crude-oil/page.js
import { useState, useEffect } from 'react'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, BarChart3, Clock, Activity, Star, ArrowUp, ArrowDown, Droplets } from 'lucide-react'

export default function CrudeOilIndustryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [liveMetrics, setLiveMetrics] = useState({
    oilPrice: 78.45,
    processingRate: 45.2,
    saltContent: 2.8,
    waterContent: 1.2,
    separationEfficiency: 98.4,
    apiGravity: 32.1
  })

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 2000)

    // Update live metrics every 4 seconds
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        oilPrice: Math.max(65, prev.oilPrice + (Math.random() - 0.5) * 2),
        processingRate: Math.max(35, prev.processingRate + (Math.random() - 0.5) * 1.5),
        saltContent: Math.max(0.5, prev.saltContent + (Math.random() - 0.5) * 0.3),
        waterContent: Math.max(0.2, prev.waterContent + (Math.random() - 0.5) * 0.2),
        separationEfficiency: Math.min(99.8, Math.max(95, prev.separationEfficiency + (Math.random() - 0.5) * 0.5)),
        apiGravity: Math.min(45, Math.max(25, prev.apiGravity + (Math.random() - 0.5) * 0.8))
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
      title: "Deshidratación Borras Oleosas",
      description: "Filtros prensa móviles especializados para deshidratación de borras oleosas con recuperación de hidrocarburos y manejo residuos peligrosos.",
      icon: Beaker,
      benefits: ["Filtros prensa móviles", "Recuperación HC", "Manejo residuos peligrosos"],
      rating: 4.8,
      completionTime: "Implementación rápida"
    },
    {
      title: "Refinerías y Estanques",
      description: "Servicios especializados en refinerías y estanques de almacenamiento con equipos certificados para ambientes explosivos.",
      icon: Factory,
      benefits: ["Equipos ex.proof", "Estanques almacenamiento", "Servicios refinerías"],
      rating: 4.7,
      completionTime: "Según operación"
    },
    {
      title: "Lodos con Hidrocarburos",
      description: "Manejo especializado de lodos con hidrocarburos mediante tecnologías de three-phase separation y oil sludge recycling.",
      icon: Zap,
      benefits: ["Separación trifásica", "90% recuperación aceite", "Reciclaje oil sludge"],
      rating: 4.9,
      completionTime: "Procesos continuos"
    },
    {
      title: "Residuos Peligrosos",
      description: "Tratamiento de residuos peligrosos petroleros con cumplimiento ambiental y sistemas de reducción, recuperación y disposición segura.",
      icon: Microscope,
      benefits: ["Cumplimiento ambiental", "Reducción volumen", "Disposición segura"],
      rating: 4.8,
      completionTime: "Tratamiento especializado"
    }
  ]

  const caseStudies = [
    {
      client: "Refinería Nacional Chile",
      challenge: "Acumulación masiva de borras oleosas en estanques de almacenamiento con 67% aceite, 25% sólidos, 8% agua y necesidad recuperación HC",
      solution: "Implementación filtros prensa móviles TSF para deshidratación borras con recuperación hidrocarburos y manejo residuos peligrosos",
      results: ["90% recuperación aceite", "Reducción volumen 70%", "Cumplimiento ambiental"],
      timeline: "Servicios continuos",
      savings: "Recuperación valor HC",
      before: { oilRecovery: 60, volumeReduction: 30, compliance: 70 },
      after: { oilRecovery: 90, volumeReduction: 70, compliance: 100 }
    },
    {
      client: "Terminal Almacenamiento Petróleo",
      challenge: "Lodos complejos con hidrocarburos y residuos peligrosos en estanques requiriendo equipos ex.proof y manejo especializado",
      solution: "Aplicación equipos móviles certificados ex.proof con tecnología Tricanter para separación trifásica y reciclaje oil sludge",
      results: ["Equipos ex.proof certificados", "Separación trifásica", "Reciclaje completo sludge"],
      timeline: "Operaciones especializadas",
      savings: "Servicios TSF ambientes explosivos",
      before: { safety: 80, separation: 75, recycling: 40 },
      after: { safety: 100, separation: 95, recycling: 90 }
    }
  ]

  const specifications = [
    {
      parameter: "Contenido de Sal",
      standard: "5-15 PTB",
      withTecionicDurban: "< 3 PTB",
      improvement: "-70%"
    },
    {
      parameter: "Contenido de Agua (BSW)",
      standard: "1.0-2.5%",
      withTecionicDurban: "< 0.5%",
      improvement: "-75%"
    },
    {
      parameter: "Separación W/O",
      standard: "95-97%",
      withTecionicDurban: "99-99.5%", 
      improvement: "+3%"
    },
    {
      parameter: "Oil in Water Efluente",
      standard: "200-500 ppm",
      withTecionicDurban: "< 50 ppm",
      improvement: "-85%"
    }
  ]

  // Three Ball Loader Component
  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
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
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-4 text-gray-300 font-medium">Cargando datos de petróleo...</p>
        </div>
      </div>
    )
  }


  return (
    <>
      {/* TEMPORARILY DISABLED: Decorative elements per stakeholder request */}
      {/* <FloatingElements /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full metal-texture"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mr-4 industrial-shimmer">
                    <span className="text-white text-lg font-bold">OIL</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2">Industria del Petróleo</h1>
                    <p className="text-gray-300 text-lg">Refinación, Separación y Tratamiento</p>
                  </div>
                </div>
                
                <div className="w-24 h-1 bg-gray-500 mb-6"></div>
                
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  Deshidratación especializada de borras oleosas mediante filtros prensa en 
                  refinerías y estanques de almacenamiento. Manejo de lodos con hidrocarburos 
                  y residuos peligrosos mediante equipos móviles certificados ex.proof.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 precision-click">
                    Ver Casos de Éxito
                  </button>
                  <button className="border-2 border-gray-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 precision-click">
                    Consulta Técnica
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-gray-800/50 rounded-2xl flex items-center justify-center border border-gray-600/20 carbon-fiber">
                  <div className="text-6xl">🛢️</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-600/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-500/20 rounded-full blur-xl"></div>
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
                background: scrollProgress > 0.8 ? 'rgba(55, 65, 81, 0.95)' : 'transparent',
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
                    <div className="w-7 h-7 bg-gray-700 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold" style={{ fontSize: '9px' }}>OIL</span>
                    </div>
                  )}

                  {/* Main Metrics */}
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <BarChart3 className="w-4 h-4 text-gray-300 mr-1" />}
                      {scrollProgress > 0.5 && <BarChart3 className="w-3 h-3 text-gray-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>${liveMetrics.oilPrice.toFixed(2)}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-gray-300 text-xs transition-opacity duration-700">Precio WTI</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-gray-300/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Activity className="w-4 h-4 text-gray-300 mr-1" />}
                      {scrollProgress > 0.5 && <Activity className="w-3 h-3 text-gray-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.processingRate.toFixed(1)}{scrollProgress > 0.5 ? 'M' : ''}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-gray-300 text-xs transition-opacity duration-700">Procesamiento</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-gray-300/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Factory className="w-4 h-4 text-gray-300 mr-1" />}
                      {scrollProgress > 0.5 && <Factory className="w-3 h-3 text-gray-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.separationEfficiency.toFixed(1)}%</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-gray-300 text-xs transition-opacity duration-700">Separación</p>}
                  </div>
                  
                  {/* Additional metrics only shown when not compressed */}
                  {scrollProgress <= 0.5 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Beaker className="w-4 h-4 text-gray-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.saltContent.toFixed(1)}</span>
                        </div>
                        <p className="text-gray-300 text-xs">Sal</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Droplets className="w-4 h-4 text-gray-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.waterContent.toFixed(1)}%</span>
                        </div>
                        <p className="text-gray-300 text-xs">Agua</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-gray-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.apiGravity.toFixed(1)}°</span>
                        </div>
                        <p className="text-gray-300 text-xs">API Gravity</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Crude Oil */}
        <section className="py-20 relative bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
                Servicios Especializados para Petróleo
              </h2>
              <div className="w-20 h-1 bg-gray-800 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicios especializados para la industria petrolera con equipos móviles certificados 
                para ambientes explosivos y manejo seguro de residuos peligrosos.
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
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full animate-float-up-1"></div>
                    <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float-up-2"></div>
                    <div className="absolute top-6 right-12 w-1 h-1 bg-gray-600 rounded-full animate-float-up-3"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-gray-800 group-hover:text-gray-700" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tiempo estimado: {service.completionTime}</div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-gray-600 mr-2 micro-bounce" />
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
              <div className="w-20 h-1 bg-gray-800 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Comparativa de resultados estándar vs. optimización con Tec-Ionic Durban
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-800 text-white steel-gradient">
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
                      <td className="px-6 py-4 text-center font-semibold text-gray-800">{spec.withTecionicDurban}</td>
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
                Casos de Éxito en Petróleo
              </h2>
              <div className="w-20 h-1 bg-gray-800 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Resultados reales en operaciones petroleras de gran escala
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                  <div className="bg-gray-800 text-white p-6 steel-gradient">
                    <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                    <p className="text-gray-300">Proyecto de optimización petróleo</p>
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
                            salt: "Sal (PTB)",
                            corrosion: "Corrosión (rate)",
                            throughput: "Throughput (bbl/d)"
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800">{study.timeline}</div>
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
        <section className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full industrial-shimmer"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Optimizar tu Operación Petrolera?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nuestros especialistas pueden evaluar tu proceso actual y diseñar
              una solución personalizada para maximizar tu eficiencia de refinación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 precision-click">
                Evaluación Especializada
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 precision-click">
                Descargar Caso de Éxito
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
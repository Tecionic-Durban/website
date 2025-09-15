'use client'

// src/app/industries/potassium/page.js
import { useState, useEffect } from 'react'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, BarChart3, Clock, Activity, Star, ArrowUp, ArrowDown } from 'lucide-react'

export default function PotassiumIndustryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [liveMetrics, setLiveMetrics] = useState({
    potassiumPrice: 0.42,
    productionRate: 156.8,
    concentration: 11.2,
    selectivity: 83.7,
    crystalQuality: 96.4,
    recoveryRate: 88.9
  })

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 2000)

    // Update live metrics every 4 seconds
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        potassiumPrice: Math.max(0.35, prev.potassiumPrice + (Math.random() - 0.5) * 0.02),
        productionRate: Math.max(120, prev.productionRate + (Math.random() - 0.5) * 3),
        concentration: Math.min(15, Math.max(8, prev.concentration + (Math.random() - 0.5) * 0.3)),
        selectivity: Math.min(95, Math.max(75, prev.selectivity + (Math.random() - 0.5) * 1)),
        crystalQuality: Math.min(100, Math.max(92, prev.crystalQuality + (Math.random() - 0.5) * 0.4)),
        recoveryRate: Math.min(95, Math.max(82, prev.recoveryRate + (Math.random() - 0.5) * 0.5))
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
      title: "Tratamiento de Salmueras",
      description: "Procesamiento de salmueras de potasio mediante tecnologías de solution mining y evaporación-cristalización para recuperación selectiva.",
      icon: Beaker,
      benefits: ["Solution mining", "Evaporación controlada", "Recuperación KCl"],
      rating: 4.8,
      completionTime: "Tratamiento continuo"
    },
    {
      title: "Manejo Sólidos Finos",
      description: "Tratamiento especializado de sólidos finos provenientes de procesos de brine mediante sistemas de filtración móvil de alta eficiencia.",
      icon: Factory,
      benefits: ["Filtración sólidos finos", "Sistemas móviles", "Alta eficiencia"],
      rating: 4.9,
      completionTime: "Según demanda"
    },
    {
      title: "Cumplimiento Ambiental Descargas",
      description: "Sistemas de tratamiento para cumplimiento ambiental en descargas de borras de potasio con reducción de sólidos suspendidos.",
      icon: Zap,
      benefits: ["Cumplimiento NPDES", "Reducción TSS", "Tratamiento borras"],
      rating: 4.7,
      completionTime: "Implementación rápida"
    },
    {
      title: "Membrane-Promoted Crystallization",
      description: "Tecnologías avanzadas de cristalización promovida por membranas para producción sostenible de KCl con recuperación de agua.",
      icon: Microscope,
      benefits: ["Cristalización MPC", "Recuperación agua", "Calor bajo grado"],
      rating: 4.9,
      completionTime: "Tecnología emergente"
    }
  ]

  const caseStudies = [
    {
      client: "SQM Cliente Actual TSF",
      challenge: "Manejo complejo de sólidos finos en salmueras de potasio y cumplimiento ambiental en descargas de borras con altos TSS",
      solution: "Implementación de filtros móviles para tratamiento de sólidos finos y sistemas de cumplimiento ambiental en descargas",
      results: ["Cumplimiento NPDES", "Reducción TSS descargas", "Tratamiento eficiente borras"],
      timeline: "Cliente actual",
      savings: "Servicios continuos TSF",
      before: { tss: 150, compliance: 60, fines: 85 },
      after: { tss: 45, compliance: 100, fines: 15 }
    },
    {
      client: "Salar de Atacama (Referencia Mundial)",
      challenge: "Operación mayor del mundo de brine potasio con 1/3 de suministro mundial y extracción multi-mineral",
      solution: "Tecnologías de solution mining, evaporación solar y cristalización para recuperación KCl con co-productos",
      results: ["1/3 suministro mundial", "Extracción multi-mineral", "Operación sustentable"],
      timeline: "Operación continua",
      savings: "Modelo referencia industria",
      before: { production: 100, sustainability: 70, minerals: 1 },
      after: { production: 300, sustainability: 95, minerals: 4 }
    }
  ]

  const specifications = [
    {
      parameter: "Concentración K2O",
      standard: "8-10%",
      withTecionicDurban: "12-15%",
      improvement: "+40%"
    },
    {
      parameter: "Pureza KCl Final",
      standard: "90-93%",
      withTecionicDurban: "95-98%",
      improvement: "+5%"
    },
    {
      parameter: "Selectividad K/Na",
      standard: "65-75%",
      withTecionicDurban: "80-90%", 
      improvement: "+18%"
    },
    {
      parameter: "Recuperación Total K",
      standard: "75-82%",
      withTecionicDurban: "85-92%",
      improvement: "+10%"
    }
  ]

  // Three Ball Loader Component
  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
    </div>
  )

  const FloatingElements = () => (
    <>
      <div className="fixed top-20 left-10 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"></div>
      <div className="fixed top-40 right-20 w-3 h-3 bg-purple-300/30 rounded-full animate-pulse [animation-delay:1s]"></div>
      <div className="fixed bottom-40 left-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse [animation-delay:2s]"></div>
      <div className="fixed bottom-60 right-1/3 w-2 h-2 bg-purple-400/25 rounded-full animate-pulse [animation-delay:0.5s]"></div>
    </>
  )

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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-4 text-purple-800 font-medium">Cargando datos de potasio...</p>
        </div>
      </div>
    )
  }


  return (
    <>
      <FloatingElements />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full metal-texture"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mr-4 industrial-shimmer">
                    <span className="text-white text-2xl font-bold">K</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2">Industria del Potasio</h1>
                    <p className="text-purple-200 text-lg">Extracción, Purificación y Cristalización</p>
                  </div>
                </div>
                
                <div className="w-24 h-1 bg-purple-400 mb-6"></div>
                
                <p className="text-xl text-purple-100 leading-relaxed mb-8">
                  Tratamiento especializado de salmueras y sólidos en plantas de potasio. 
                  Manejo de sólidos finos y cumplimiento ambiental en descargas de borras 
                  mediante equipos móviles de filtración y separación sólido-líquido.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 precision-click">
                    Ver Casos de Éxito
                  </button>
                  <button className="border-2 border-purple-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 transform hover:scale-105 precision-click">
                    Consulta Técnica
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-purple-800/30 rounded-2xl flex items-center justify-center border border-purple-500/20 carbon-fiber">
                  <div className="text-6xl">🧪</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
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
                background: scrollProgress > 0.8 ? 'rgba(147, 51, 234, 0.95)' : 'transparent',
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
                    <div className="w-7 h-7 bg-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">K</span>
                    </div>
                  )}

                  {/* Main Metrics */}
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <BarChart3 className="w-4 h-4 text-purple-300 mr-1" />}
                      {scrollProgress > 0.5 && <BarChart3 className="w-3 h-3 text-purple-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>${liveMetrics.potassiumPrice.toFixed(2)}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-purple-200 text-xs transition-opacity duration-700">Precio K</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-purple-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Activity className="w-4 h-4 text-purple-300 mr-1" />}
                      {scrollProgress > 0.5 && <Activity className="w-3 h-3 text-purple-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.productionRate.toFixed(1)}{scrollProgress > 0.5 ? 't' : ''}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-purple-200 text-xs transition-opacity duration-700">Producción</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-purple-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Clock className="w-4 h-4 text-purple-300 mr-1" />}
                      {scrollProgress > 0.5 && <Clock className="w-3 h-3 text-purple-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.selectivity.toFixed(1)}%</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-purple-200 text-xs transition-opacity duration-700">Selectividad</p>}
                  </div>
                  
                  {/* Additional metrics only shown when not compressed */}
                  {scrollProgress <= 0.5 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Beaker className="w-4 h-4 text-purple-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.concentration.toFixed(1)}%</span>
                        </div>
                        <p className="text-purple-200 text-xs">Concentración</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-purple-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.crystalQuality.toFixed(1)}</span>
                        </div>
                        <p className="text-purple-200 text-xs">Calidad</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-purple-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.recoveryRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-purple-200 text-xs">Recuperación</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Potassium */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
                Servicios Especializados para Potasio
              </h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicios especializados para plantas de potasio con enfoque en tratamiento de 
                salmueras, manejo de sólidos finos y cumplimiento ambiental mediante equipos móviles.
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
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-float-up-1"></div>
                    <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float-up-2"></div>
                    <div className="absolute top-6 right-12 w-1 h-1 bg-purple-600 rounded-full animate-float-up-3"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tiempo estimado: {service.completionTime}</div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-2 micro-bounce" />
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
              <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Comparativa de resultados estándar vs. optimización con Tec-Ionic Durban
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-purple-600 text-white steel-gradient">
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
                      <td className="px-6 py-4 text-center font-semibold text-purple-600">{spec.withTecionicDurban}</td>
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
                Casos de Éxito en Potasio
              </h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Resultados reales en operaciones de potasio de gran escala
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                  <div className="bg-purple-600 text-white p-6 steel-gradient">
                    <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                    <p className="text-purple-200">Proyecto de optimización potasio</p>
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
                            purity: "Pureza KCl %",
                            selectivity: "Selectividad %",
                            crystallization: "Tiempo cristal (hrs)"
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{study.timeline}</div>
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
        <section className="py-20 bg-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full industrial-shimmer"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Optimizar su Operación de Potasio?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Nuestros especialistas pueden evaluar su proceso actual y diseñar 
              una solución personalizada para maximizar su recuperación de potasio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 precision-click">
                Evaluación Especializada
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 precision-click">
                Descargar Caso de Éxito
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
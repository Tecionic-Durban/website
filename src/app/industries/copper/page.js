'use client'

// src/app/industries/copper/page.js
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, BarChart3, Clock, Activity, Star, ArrowUp } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

export default function CopperIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMiniBanner, setIsMiniBanner] = useState(false)
  const [liveMetrics, setLiveMetrics] = useState({
    copperPrice: 4.15,
    productionRate: 124.7,
    efficiency: 87.3,
    qualityIndex: 94.6,
    energyConsumption: 1.85,
    recoveryRate: 89.2
  })

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 2000)

    // Update live metrics every 4 seconds
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        copperPrice: Math.max(3.5, prev.copperPrice + (Math.random() - 0.5) * 0.05),
        productionRate: Math.max(100, prev.productionRate + (Math.random() - 0.5) * 2),
        efficiency: Math.min(100, Math.max(80, prev.efficiency + (Math.random() - 0.5) * 1)),
        qualityIndex: Math.min(100, Math.max(90, prev.qualityIndex + (Math.random() - 0.5) * 0.5)),
        energyConsumption: Math.max(1.5, prev.energyConsumption + (Math.random() - 0.5) * 0.05),
        recoveryRate: Math.min(95, Math.max(85, prev.recoveryRate + (Math.random() - 0.5) * 0.3))
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
      title: "Tratamiento de Orgánico SX",
      description: "Tratamiento de entrainment acuoso que degrada extractante y reduce selectividad cobre-hierro. Coalescencia controlada separa fase acuosa arrastrada, eliminando contaminantes que causan emulsiones estables y pérdida de eficiencia operacional.",
      icon: Factory,
      benefits: ["Reducción pérdidas orgánico", "Eliminación crud/borras", "Optimización eficiencia SX"],
      rating: 4.9,
      completionTime: "3-5 meses"
    },
    {
      title: "Filtración de Borras",
      description: "Filtros prensa móviles para borras con crud formation de partículas finas. Placas intercambiables manejan variabilidad mineralógica mientras sistema automático optimiza ciclos filtración-lavado-compresión según características específicas de cada borra.",
      icon: Beaker,
      benefits: ["Hasta 70 ton/día", "Equipos móviles", "90% recuperación orgánico"],
      rating: 4.8,
      completionTime: "Montaje rápido"
    },
    {
      title: "Deshidratación Concentrados",
      description: "Deshidratación concentrados de cobre con control estricto de impurezas que penalizan en fundición. Lavado contracorriente remueve contaminantes solubles mientras compresión de membrana logra &lt;8% humedad para cumplir especificaciones comerciales.",
      icon: Microscope,
      benefits: ["Filtros alta capacidad", "Optimización transporte", "Máxima recuperación"],
      rating: 4.7,
      completionTime: "2-4 semanas"
    },
    {
      title: "Limpieza Celdas EW",
      description: "Limpieza especializada de celdas electroobtención para mantener eficiencias operacionales y calidad de cátodos.",
      icon: Zap,
      benefits: ["Mantención cátodos", "Eficiencia EW", "Reducción contaminación"],
      rating: 4.9,
      completionTime: "Programado"
    }
  ]

  const caseStudies = [
    {
      client: "Radomiro Tomic (Codelco)",
      challenge: "Acumulación de borras en settlers causando crud runs y alta pérdida de orgánico por entrainment",
      solution: "Implementación de filtros prensa móviles y tratamiento especializado de borras con recuperación de orgánico",
      results: ["90% recuperación orgánico", "Eliminación crud runs", "Reducción 60% pérdidas solvente"],
      timeline: "Primer gran contrato",
      savings: "Ahorro significativo solvente",
      before: { recovery: 82, cost: 2.2, downtime: 15 },
      after: { recovery: 92, cost: 1.8, downtime: 5 }
    },
    {
      client: "BHP Operaciones Chile",
      challenge: "Problemas de aqueous entrainment en circuito SX y contaminación de electrolito EW",
      solution: "Sistema móvil de tratamiento orgánico y limpieza especializada celdas EW",
      results: ["Reducción entrainment", "Mejor calidad electrolito", "Optimización producción cátodos"],
      timeline: "4 meses",
      savings: "Cliente actual TSF",
      before: { purity: 85, organicLife: 14, efficiency: 84 },
      after: { purity: 94, organicLife: 20, efficiency: 91 }
    }
  ]

  const specifications = [
    {
      parameter: "Recuperación de Cobre",
      standard: "75-80%",
      withTecionicDurban: "85-92%",
      improvement: "+12%"
    },
    {
      parameter: "Consumo Energético EW",
      standard: "2.2-2.5 kWh/kg Cu",
      withTecionicDurban: "1.8-2.0 kWh/kg Cu", 
      improvement: "-18%"
    },
    {
      parameter: "Pureza Electrolito",
      standard: "88-92%",
      withTecionicDurban: "95-98%",
      improvement: "+6%"
    },
    {
      parameter: "Vida Útil Orgánico",
      standard: "12-15 meses",
      withTecionicDurban: "18-24 meses",
      improvement: "+50%"
    }
  ]

  // Three Ball Loader Component
  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-4 text-orange-800 font-medium">Cargando datos de cobre...</p>
        </div>
      </div>
    )
  }


  return (
    <>
      {/* TEMPORARILY DISABLED: Decorative elements per stakeholder request */}
      {/* <FloatingElements /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full metal-texture"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mr-4 industrial-shimmer">
                    <span className="text-white text-2xl font-bold">Cu</span>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2">Industria del Cobre</h1>
                    <p className="text-orange-200 text-lg">Lixiviación, SX/EW y Tratamiento Especializado</p>
                  </div>
                </div>
                
                <div className="w-24 h-1 bg-orange-400 mb-6"></div>
                
                <p className="text-xl text-orange-100 leading-relaxed mb-8">
                  Servicios especializados de filtración móvil y tratamiento de orgánico en plantas SX/EW. 
                  Equipos móviles hasta 70 ton/día que reducen pérdidas de orgánico y optimizan 
                  la eficiencia operacional sin instalaciones definitivas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 precision-click">
                    Ver Casos de Éxito
                  </button>
                  <button 
                    onClick={(e) => handleContactClick(e, router, pathname)}
                    className="border-2 border-orange-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-300 hover:text-orange-900 transition-all duration-300 transform hover:scale-105 precision-click"
                  >
                    Consulta Técnica
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-orange-800/30 rounded-2xl flex items-center justify-center border border-orange-500/20 carbon-fiber">
                  <div className="text-6xl">⚗️</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
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
                background: scrollProgress > 0.8 ? 'rgba(234, 88, 12, 0.95)' : 'transparent',
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
                    <div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Cu</span>
                    </div>
                  )}

                  {/* Main Metrics */}
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center transition-all duration-700 ease-in-out ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <BarChart3 className="w-4 h-4 text-orange-300 mr-1 transition-all duration-700" />}
                      {scrollProgress > 0.5 && <BarChart3 className="w-3 h-3 text-orange-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>${liveMetrics.copperPrice.toFixed(2)}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-orange-200 text-xs transition-opacity duration-700">Precio Cu</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-orange-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center transition-all duration-700 ease-in-out ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Activity className="w-4 h-4 text-orange-300 mr-1 transition-all duration-700" />}
                      {scrollProgress > 0.5 && <Activity className="w-3 h-3 text-orange-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.productionRate.toFixed(1)}{scrollProgress > 0.5 ? 't' : ''}</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-orange-200 text-xs transition-opacity duration-700">Producción</p>}
                  </div>

                  {scrollProgress > 0.5 && <span className="text-orange-200/70 text-sm transition-opacity duration-700">•</span>}
                  
                  <div className={`bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
                    scrollProgress > 0.5 ? 'rounded px-3 py-1 flex items-center space-x-2' : 'rounded-lg p-3 text-center'
                  }`} style={{ willChange: 'padding, border-radius' }}>
                    <div className={`flex items-center transition-all duration-700 ease-in-out ${scrollProgress > 0.5 ? 'space-x-1' : 'justify-center mb-1'}`}>
                      {scrollProgress <= 0.5 && <Clock className="w-4 h-4 text-orange-300 mr-1 transition-all duration-700" />}
                      {scrollProgress > 0.5 && <Clock className="w-3 h-3 text-orange-300 transition-all duration-700" />}
                      <span className={`font-bold text-white transition-all duration-700 ease-in-out ${
                        scrollProgress > 0.5 ? 'text-sm' : 'text-lg'
                      }`} style={{ willChange: 'font-size' }}>{liveMetrics.efficiency.toFixed(1)}%</span>
                    </div>
                    {scrollProgress <= 0.5 && <p className="text-orange-200 text-xs transition-opacity duration-700">Eficiencia</p>}
                  </div>
                  
                  {/* Additional metrics only shown when not compressed */}
                  {scrollProgress <= 0.5 && (
                    <>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-orange-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.qualityIndex.toFixed(1)}</span>
                        </div>
                        <p className="text-orange-200 text-xs">Calidad</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-4 h-4 text-orange-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.energyConsumption.toFixed(2)}</span>
                        </div>
                        <p className="text-orange-200 text-xs">Energía</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-orange-300 mr-1" />
                          <span className="text-lg font-bold text-white">{liveMetrics.recoveryRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-orange-200 text-xs">Recuperación</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Services for Copper */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
                Servicios Especializados para Cobre
              </h2>
              <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicios móviles especializados para plantas SX/EW de cobre. Filtración de borras, 
                tratamiento de orgánico y limpieza de celdas con equipos de alta capacidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:scale-105 group relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                    <div className="w-full h-full steel-gradient rounded-xl"></div>
                  </div>
                  
                  {/* Floating balls on hover - matching home page layout */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-float-up-1"></div>
                    <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-orange-500 rounded-full animate-float-up-2"></div>
                    <div className="absolute top-6 right-12 w-1 h-1 bg-orange-600 rounded-full animate-float-up-3"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Tiempo estimado: {service.completionTime}</div>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 micro-bounce" />
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
              <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Comparativa de resultados estándar vs. optimización con Tec-Ionic Durban
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-orange-600 text-white steel-gradient">
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
                      <td className="px-6 py-4 text-center font-semibold text-orange-600">{spec.withTecionicDurban}</td>
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
                Casos de Éxito en Cobre
              </h2>
              <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                Resultados reales en operaciones de cobre de gran escala
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                  <div className="bg-orange-600 text-white p-6 steel-gradient">
                    <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                    <p className="text-orange-200">Proyecto de optimización SX/EW</p>
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
                            recovery: "Recuperación %",
                            cost: "Costo kWh/kg",
                            downtime: "Paradas/mes"
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">{study.timeline}</div>
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
        <section className="py-20 bg-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full industrial-shimmer"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Optimizar tu Operación de Cobre?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Nuestros especialistas pueden evaluar tu proceso actual y diseñar
              una solución personalizada para maximizar tu recuperación de cobre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 precision-click">
                Evaluación Especializada
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 precision-click">
                Descargar Caso de Éxito
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
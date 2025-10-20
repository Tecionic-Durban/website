'use client'

// src/app/industries/crude-oil/page.js
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Zap, Factory, Microscope, CheckCircle, TrendingUp, ArrowUp, Droplets } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

export default function CrudeOilIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000)
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section - Clean Design */}
        <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-[8%] w-40 h-40 bg-gradient-to-br from-gray-700/15 to-gray-800/10 rounded-full opacity-20 animate-float-slow blur-sm"></div>
            <div className="absolute top-32 right-[12%] w-32 h-32 bg-gradient-to-br from-gray-600/20 to-gray-700/15 rounded-full opacity-25 animate-float-medium blur-sm"></div>
            <div className="absolute bottom-40 left-[3%] w-36 h-36 bg-gradient-to-br from-gray-500/15 to-gray-600/10 rounded-full opacity-18 animate-float-slow blur-sm"></div>
          </div>

          <div className="relative max-w-8xl mx-auto px-8 py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Content - 6 columns */}
              <div className="lg:col-span-6 max-w-4xl">
                <div className="space-y-6">
                  {/* Headline */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center">
                        <Droplets className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]">
                          <span className="block">Industria</span>
                          <span className="block text-gray-400">Petróleo Crudo</span>
                        </h1>
                      </div>
                    </div>

                    <p className="text-lg lg:text-xl text-gray-100/90 leading-relaxed font-medium max-w-3xl">
                      <span className="text-white font-semibold">Deshidratación especializada</span> de lodos petroleros mediante filtros prensa móviles en refinerías.
                      Manejo de residuos peligrosos con equipos certificados ex.proof.
                    </p>

                    {/* Key Achievement */}
                    <div className="inline-flex items-center px-4 py-2 bg-gray-700/10 rounded-lg border border-gray-600/20">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 font-semibold text-sm">84% REDUCCIÓN VOLUMEN LODOS • SIN CAPEX CLIENTE</span>
                    </div>
                  </div>
                </div>

                {/* Trust + CTAs */}
                <div className="mt-8 space-y-4">
                  {/* Client Trust */}
                  <div className="bg-white/5 rounded-lg p-3 border border-gray-600/10 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs font-semibold text-gray-300">ENAP Refinería • Lodos Petroleros</div>
                        <div className="text-xs text-gray-400/70">Validación técnica comprobada</div>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                      Ver Casos de Éxito
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual - 6 columns */}
              <div className="lg:col-span-6">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-gray-700/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Beaker className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Equipos Móviles TSF</h3>
                    <p className="text-gray-400/80 text-sm">Deshidratación Lodos Petroleros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Services for Crude Oil */}
        <section className="py-20 relative">
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
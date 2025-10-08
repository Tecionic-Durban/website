// src/components/About.js
'use client'
import { useEffect, useRef, useState } from 'react'
import { Droplets, RefreshCw, Zap, Shield, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'

export default function About() {
  const aboutRef = useRef(null)
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track active card on scroll
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const cards = carousel.querySelectorAll('.value-card')
      const carouselRect = carousel.getBoundingClientRect()
      const centerY = carouselRect.top + carouselRect.height / 2

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.top + cardRect.height / 2
        const distance = Math.abs(centerY - cardCenter)

        if (distance < cardRect.height / 2) {
          setActiveIndex(index)
        }
      })
    }

    carousel.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={aboutRef} className="py-24 bg-gradient-to-br from-emerald-50/30 via-white to-gray-50 relative overflow-hidden">
      {/* Enterprise Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sophisticated floating elements */}
        <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

        {/* Strategic three ball brand element */}
        <div className="absolute top-20 right-[12%] opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative">
        {/* Split Layout: Left (Sticky Header) + Right (Scrolling Carousel) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
          {/* Left Side - Sticky Header */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 lg:self-start progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
              Líderes en Innovación Industrial
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Especialistas en Separación
              <span className="block text-emerald-600 gradient-text-animated">Sólido-Líquido Móvil</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Especialistas en separación sólido-líquido en aplicaciones SX/EW con <span className="font-semibold text-emerald-600">equipos móviles de alta capacidad</span>.
              Atendemos a BHP, Codelco, Antofagasta Minerals, entre otras importantes empresas mineras,
              proporcionando soluciones que optimizan operaciones sin interrumpir procesos existentes.
            </p>

            {/* Active Card Indicator */}
            <div className="hidden lg:block">
              <div className="text-sm font-semibold text-emerald-600 mb-3">
                Característica {activeIndex + 1} de 6
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-emerald-600 w-8' : 'bg-emerald-200 w-6'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Vertical Scrolling Carousel */}
          <div className="lg:w-3/5">
            <div
              ref={carouselRef}
              className="hidden lg:block h-[650px] overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-50 pr-4"
            >
              {/* Add padding at top and bottom for centering effect */}
              <div className="h-[225px]"></div>
              {[
                {
                  icon: Droplets,
                  title: "Modelo OPEX Avanzado",
                  description: "Cero inversión inicial. Modelo de servicios con facturación mensual que optimiza el flujo de caja operacional del cliente.",
                  metric: "0% CAPEX",
                  color: "emerald"
                },
                {
                  icon: RefreshCw,
                  title: "Rendimiento Verificable",
                  description: "Reportería diaria de KPIs operacionales específicos según el tipo de servicio prestado. Parámetros verificables que demuestran mejoras en eficiencia y productividad.",
                  metric: "24/7 Tracking",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Experiencia Multisectorial",
                  description: "Portfolio comprobado en cobre, litio, potasio y refinación de petróleo con casos de éxito documentados.",
                  metric: "5 Sectores",
                  color: "purple"
                },
                {
                  number: "01",
                  title: "Instalación Plug & Play",
                  description: "Equipos móviles preconfigurados que se integran directamente con sistemas existentes. Sin modificaciones de infraestructura, sin permisos adicionales. Operativo en 24-48 horas.",
                  timeline: "24-48h",
                  isDark: true
                },
                {
                  number: "02",
                  title: "Contratos Flexibles",
                  description: "Desde respuesta de emergencia hasta proyectos estratégicos de 5 años. Escalamiento automático según demanda operacional con términos adaptables a ciclos de mercado.",
                  timeline: "48h-5 años",
                  isDark: true
                },
                {
                  number: "03",
                  title: "Operación Multi-Línea",
                  description: "Capacidad de atender múltiples líneas de trabajo en paralelo con equipos independientes. Maximiza productividad sin interferir con operaciones simultáneas.",
                  timeline: "Paralelo",
                  isDark: true
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`value-card snap-center mb-6 transition-all duration-500 ${
                    index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                  }`}
                >
                  {item.isDark ? (
                    // Dark emerald cards (Process Excellence)
                    <div className={`group bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl p-8 text-white relative overflow-hidden border ${
                      index === activeIndex
                        ? 'border-emerald-400 shadow-2xl shadow-emerald-200'
                        : 'border-emerald-700 shadow-lg'
                    } transition-all duration-500`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>

                      <div className="relative z-10">
                        <div className="flex items-start space-x-6 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center font-bold text-lg backdrop-blur-sm border border-white/30 flex-shrink-0">
                            {item.number}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-xl text-emerald-100">{item.title}</h4>
                              <span className="text-xs font-semibold px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full border border-emerald-400/30">
                                {item.timeline}
                              </span>
                            </div>
                            <p className="text-emerald-100/90 leading-relaxed text-base">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Light cards (Value Propositions)
                    <div className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border ${
                      index === activeIndex
                        ? 'border-emerald-400 shadow-2xl shadow-emerald-100'
                        : 'border-emerald-100/50 shadow-lg'
                    } overflow-hidden transition-all duration-500`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                              <span className={`text-xs font-semibold px-2 py-1 bg-${item.color}-100 text-${item.color}-700 rounded-full`}>
                                {item.metric}
                              </span>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="h-[225px]"></div>
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-50">
              {[
                {
                  icon: Droplets,
                  title: "Modelo OPEX Avanzado",
                  description: "Cero inversión inicial. Modelo de servicios con facturación mensual que optimiza el flujo de caja operacional del cliente.",
                  metric: "0% CAPEX",
                  color: "emerald"
                },
                {
                  icon: RefreshCw,
                  title: "Rendimiento Verificable",
                  description: "Reportería diaria de KPIs operacionales específicos según el tipo de servicio prestado. Parámetros verificables que demuestran mejoras en eficiencia y productividad.",
                  metric: "24/7 Tracking",
                  color: "blue"
                },
                {
                  icon: Zap,
                  title: "Experiencia Multisectorial",
                  description: "Portfolio comprobado en cobre, litio, potasio y refinación de petróleo con casos de éxito documentados.",
                  metric: "5 Sectores",
                  color: "purple"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[85vw] max-w-md"
                >
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                            <span className={`text-xs font-semibold px-2 py-1 bg-${item.color}-100 text-${item.color}-700 rounded-full`}>
                              {item.metric}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Performance & Certifications */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Metrics */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-emerald-600 mr-2" />
                Indicadores de Rendimiento
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "23+", label: "Años Experiencia", color: "text-emerald-600" },
                  { value: "96.8%", label: "Recuperación Cu", color: "text-blue-600" },
                  { value: "70", label: "Ton/día Capacidad", color: "text-purple-600" },
                  { value: "1,500+", label: "Días sin Accidentes", color: "text-green-600" }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="border-l border-gray-200 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                Certificaciones
              </h3>
              <div className="space-y-3">
                {[
                  "SICEP Vigente", "Equipos Ex.Proof"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-emerald-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
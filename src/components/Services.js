// src/components/Services.js
'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Beaker, Waves, Factory, Zap, Microscope, RefreshCw, Droplets, CheckCircle, ArrowRight } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

export default function Services() {
  const router = useRouter()
  const servicesRef = useRef(null)
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track active card on scroll
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const cards = carousel.querySelectorAll('.service-card')
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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const services = [
    {
      title: "Filtración y Deshidratación de Borras y Sólidos",
      description: "Filtración móvil de borras y sólidos en refinerías y plantas SX. Capacidad hasta 130 ton/día de torta seca mediante filtros prensa (recomendado) o centrífugas según requerimiento del cliente.",
      icon: Beaker,
      features: [],
      slug: "/services/filtration"
    },
    {
      title: "Tratamiento y Recuperación de Orgánico SX",
      description: "Tratamiento especializado para recuperación de orgánico en procesos de extracción por solventes. Reduce pérdidas y optimiza la eficiencia de planta.",
      icon: RefreshCw,
      features: [],
      slug: "/services/organic-treatment"
    },
    {
      title: "Deshidratación de Concentrados",
      description: "Deshidratación de concentrados de cobre en terminales portuarios mediante filtros prensa móviles. Reducción de peso 60-70% para optimización de costos de flete marítimo y preparación de carga para exportación.",
      icon: Droplets,
      features: [],
      slug: "/services/concentrate-dehydration"
    },
    {
      title: "Tratamiento de Sólidos Finos",
      description: "Procesamiento de sólidos finos provenientes de clarificadores. Capacidad hasta 14 ton/día con centrífugas especializadas.",
      icon: Microscope,
      features: [],
      slug: "/services/fine-solids"
    },
    {
      title: "Limpieza de Celdas EW",
      description: "Limpieza especializada de celdas de electroobtención para minimizar contaminación catódica y asegurar cátodos de cobre de mayor grado. Servicios programados para mantener estándares de calidad de producto.",
      icon: Zap,
      features: [],
      slug: "/services/ew-cleaning"
    },
    {
      title: "Remoción de Sólidos de Aguas Clarificadas",
      description: "Optimización de la recirculación de agua de proceso mediante remoción eficiente de sólidos. Hasta 120 m³/día de agua clarificada.",
      icon: Waves,
      features: [],
      slug: "/services/water-clarification"
    }
  ]

  return (
    <section ref={servicesRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[10%] w-32 h-32 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

        {/* Strategic three ball accent */}
        <div className="absolute top-24 right-[8%] opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative">
        {/* Split Layout: Left (Sticky Header) + Right (Scrolling Carousel) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
          {/* Left Side - Sticky Header */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 lg:self-start progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
              Servicios Especializados en Minería
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Especialistas en Separación
              <span className="block text-emerald-600 gradient-text-animated">Sólido-Líquido</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Servicios de filtración, deshidratación de sólidos y separación sólido-líquido
              con equipos móviles escalables. <span className="font-semibold text-emerald-600">Más de dos décadas de experiencia</span> en faenas
              mineras respaldando nuestras soluciones.
            </p>

            {/* Active Service Indicator */}
            <div className="hidden lg:block">
              <div className="text-sm font-semibold text-emerald-600 mb-3">
                Servicio {activeIndex + 1} de {services.length}
              </div>
              <div className="flex gap-2">
                {services.map((_, index) => (
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
              className="hidden lg:block h-[600px] overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-50 pr-4"
            >
              {/* Add padding at top and bottom for centering effect */}
              <div className="h-[200px]"></div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card snap-center mb-6 transition-all duration-500 ${
                    index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border ${
                    index === activeIndex
                      ? 'border-emerald-400 shadow-2xl shadow-emerald-100'
                      : 'border-emerald-100/50 shadow-lg'
                  } overflow-hidden transition-all duration-500`}>
                    {/* Sophisticated background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Strategic three ball accent */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse"></div>
                        <div className="w-1 h-1 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-emerald-700 enterprise-pulse" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300">{service.title}</h3>

                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                      {/* Enterprise CTA */}
                      <button
                        onClick={() => router.push(service.slug)}
                        className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300 cursor-pointer"
                      >
                        <span className="text-sm">Más información</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-[200px]"></div>
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-50">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[85vw] max-w-md"
                >
                  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg overflow-hidden h-full">
                    {/* Sophisticated background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-emerald-700" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                      <button
                        onClick={() => router.push(service.slug)}
                        className="flex items-center text-emerald-600 font-semibold"
                      >
                        <span className="text-sm">Más información</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise CTA Section */}
        <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 rounded-3xl p-12 md:p-16 text-white text-center overflow-hidden progressive-reveal">
          {/* Sophisticated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-8 right-12 w-20 h-20 bg-emerald-600/20 rounded-full animate-float-slow blur-sm"></div>
            <div className="absolute bottom-8 left-12 w-16 h-16 bg-emerald-500/25 rounded-full animate-float-medium blur-sm"></div>

            {/* Strategic three ball constellation */}
            <div className="absolute top-6 left-6 opacity-30">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-black mb-6 gradient-text-animated">
              Soluciones Móviles que Aportan Valor y Sostenibilidad
            </h3>
            <p className="text-xl text-emerald-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Diagnóstico inicial, montaje rápido mediante plataformas móviles y operación
              continua con entrega de KPIs diarios. <span className="font-semibold text-emerald-300">Flexibilidad operativa sin instalaciones definitivas.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={(e) => handleContactClick(e, router, '/services')}
                className="group relative bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Solicitar Consulta</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button
                onClick={() => router.push('/casos-de-estudio')}
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Ver Casos de Éxito</span>
                <CheckCircle className="relative z-10 w-5 h-5 ml-3 enterprise-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
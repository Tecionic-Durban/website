'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Chemistry, Connect, Filter, CheckmarkFilled, Humidity, DeliveryTruck, ArrowDown, Dashboard, Delivery, Mountain, Certificate, CertificateCheck, Security, Flash, FlashFilled, ChevronLeft, ChevronRight, Loop, Construction, Renew, Time, IncreaseLevel, Exit, ContainerImagePull, RainDrop } from '@carbon/icons-react'
import { CheckCircle, ArrowRight, Truck, Shield, Settings, Clock, Zap, Award, Target, Users, Globe, Play, Waves, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star, TrendingUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleFiltrationAnimation from '@/components/ParticleFiltrationAnimation'

gsap.registerPlugin(ScrollTrigger)

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Expandable Equipment Benefits Component
function EquipmentBenefits() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    {
      title: 'Clasificación Ex-Proof',
      description: 'Equipos con clasificación ex.proof para operar en ambientes explosivos. Bombas, tableros y sistemas de succión diseñados para trabajar de forma segura en estanques de petróleo y derivados.',
      icon: CertificateCheck,
      image: '/filtro_prensa_1200_drone_view.png'
    },
    {
      title: 'Huella reducida y 100% móviles',
      description: 'Equipos compactos que se posicionan junto a piscinas, settlers o estanques sin requerir obras civiles. Instalación en menos de 48 horas y reubicación rápida entre puntos de extracción. Sin modificar tu infraestructura existente.',
      icon: Delivery,
      image: '/filtro_prensa_movil.png'
    },
    {
      title: 'Flexibilidad de bombeo',
      description: 'Bombas sumergibles, de diafragma o peristálticas según la aplicación. Seleccionamos el sistema de succión óptimo para cada tipo de sólido y condición de estanque.',
      icon: Filter,
      image: '/filtro_prensa_1200_drone_view.png'
    }
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left: Expandable list */}
      <div>
        {benefits.map((benefit, index) => {
          const isExpanded = expandedIndex === index
          const Icon = benefit.icon

          return (
            <div key={index}>
              {/* Top border line */}
              <div className="border-t border-gray-200"></div>

              {/* Header - Icon + Title + Plus/Minus */}
              <button
                onClick={() => setExpandedIndex(index)}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isExpanded ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-emerald-50'
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors ${
                      isExpanded ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-600'
                    }`} />
                  </div>
                  <span className={`font-semibold text-lg transition-colors ${
                    isExpanded ? 'text-emerald-600' : 'text-gray-900 group-hover:text-emerald-600'
                  }`}>
                    {benefit.title}
                  </span>
                </div>
                <span className={`text-2xl font-light transition-colors ${
                  isExpanded ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-600'
                }`}>
                  {isExpanded ? '−' : '+'}
                </span>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        {/* Bottom border line */}
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Right: Image - changes based on selected item */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/10]">
          <Image
            src={benefits[expandedIndex].image}
            alt={benefits[expandedIndex].title}
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default function FineSolidsServicePage() {
  const heroRef = useRef(null)
  const heroImageRef = useRef(null)
  const overviewRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const statsRef = useRef(null)

  // Carousel state for service models
  const [activeServiceModel, setActiveServiceModel] = useState('emergencia')
  const [carouselKey, setCarouselKey] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  const carouselCardRef = useRef(null)
  const timerRef = useRef(null)
  const CAROUSEL_DURATION = 6000 // 6 seconds

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

  // Hero image entrance animation
  useIsomorphicLayoutEffect(() => {
    if (!heroImageRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          delay: 0.2
        }
      )
    }, heroImageRef)

    return () => ctx.revert()
  }, [])

  // Stats animation on scroll
  useIsomorphicLayoutEffect(() => {
    if (!statsRef.current) return

    const ctx = gsap.context(() => {
      const fadeElements = statsRef.current.querySelectorAll('.stat-fade')
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true
            }
          }
        )
      })

      const countElement = statsRef.current.querySelector('.stat-count')
      if (countElement) {
        const target = parseInt(countElement.dataset.target, 10)

        ScrollTrigger.create({
          trigger: countElement,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const counter = { val: 0 }
            gsap.to(counter, {
              val: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                countElement.textContent = Math.round(counter.val) + 'h'
              }
            })
          }
        })
      }
    }, statsRef)

    return () => ctx.revert()
  }, [])

  // Helper to change carousel and trigger animation + reset timer
  const changeCarouselModel = (newModel) => {
    setActiveServiceModel(newModel)
    setCarouselKey(k => k + 1)
    setTimerKey(k => k + 1)

    // Clear and restart the auto-cycle timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setActiveServiceModel(prev => {
        const models = ['emergencia', 'preventivo', 'continuo']
        const currentIndex = models.indexOf(prev)
        return models[(currentIndex + 1) % models.length]
      })
      setCarouselKey(k => k + 1)
      setTimerKey(k => k + 1)
    }, CAROUSEL_DURATION)
  }

  // GSAP animation for carousel card transitions
  useIsomorphicLayoutEffect(() => {
    if (carouselKey === 0) return

    const ctx = gsap.context(() => {
      const card = carouselCardRef.current
      if (!card) return

      gsap.fromTo(card,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out'
        }
      )
    }, carouselCardRef)

    return () => ctx.revert()
  }, [carouselKey, activeServiceModel])

  // Auto-cycle carousel
  useEffect(() => {
    const models = ['emergencia', 'preventivo', 'continuo']
    timerRef.current = setInterval(() => {
      setActiveServiceModel(prev => {
        const currentIndex = models.indexOf(prev)
        return models[(currentIndex + 1) % models.length]
      })
      setCarouselKey(k => k + 1)
      setTimerKey(k => k + 1)
    }, CAROUSEL_DURATION)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const processSteps = [
    {
      step: '1',
      title: 'Análisis Granulométrico',
      description: 'Caracterización completa distribución tamaños y mineralogía sólidos finos',
      additionalInfo: 'Análisis laser diffraction • Microscopia electrónica • Química superficial',
      icon: Chemistry
    },
    {
      step: '2',
      title: 'Conexión',
      description: 'Integración móvil con sistemas existentes de planta',
      additionalInfo: 'No utiliza equipamiento de planta cliente • Sistema 100% autónomo',
      icon: Connect
    },
    {
      step: '3',
      title: 'Filtración de Sólidos',
      description: 'Remoción sólidos ultra-finos mediante filtros prensa',
      additionalInfo: 'Monitoreo turbidez continuo • Optimización AI • Mantenimiento predictivo',
      icon: Filter
    },
    {
      step: '4',
      title: 'Verificación Calidad',
      description: 'Validación especificaciones: DLE <10 NTU, SX <20 mg/L TSS',
      additionalInfo: 'Control calidad multi-parámetro • Certificación procesos • Reporting automático',
      icon: CheckmarkFilled
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
      element: "HC",
      industry: "Petróleo",
      application: "Deshidratación borras oleosas",
      performance: "90% Recuperación aceite",
      specs: "70% reducción volumen | Recuperación hidrocarburos",
      color: "#dc2626",
      status: "Activo"
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
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Clean Stripe-style narrative */}
      <section ref={heroRef} className="relative overflow-hidden bg-white">
        {/* Particle Filtration Animation Background */}
        <ParticleFiltrationAnimation variant="hero" className="opacity-30" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Protege tu planta <span className="text-gradient">eliminando sólidos finos</span> de tus líquidos de proceso
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Extrae sólidos acumulados de tus sistemas sin parar producción ni perder solución. Equipos móviles que se conectan directamente a piscinas, settlers y estanques mientras tu planta sigue operando.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                Solicitar Evaluación
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-6">
              <div ref={heroImageRef} style={{ opacity: 0 }} className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <Image
                  src="/filtro_prensa_1200_drone_view.png"
                  alt="Sistema de filtros prensa móviles para separación de sólidos finos"
                  width={800}
                  height={500}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY BENEFITS */}
      <section className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 blur-sm"></div>
          <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em]">
              Resultados que impactan tu operación
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {/* 3-ball divider - left edge */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 1: Plant in spec */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Dashboard className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planta operando en especificación</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sin acumulación de sólidos que reduzca capacidad o mueva tus sistemas fuera de parámetros óptimos.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Extended component lifetime */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <IncreaseLevel className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mayor vida útil de componentes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bombas, válvulas y equipos de planta duran más cuando operan sin abrasión por sólidos.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: No invasive maintenance */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Exit className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sin mantención invasiva</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Olvídate de excavadoras, vaciados y riesgos de daño a revestimientos o membranas.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Avoid unnecessary membrane expenses */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ContainerImagePull className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evita cambios de membranas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sin reemplazos innecesarios de membranas dañadas por limpieza agresiva con excavadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IN-CIRCUIT OPERATION - Dark Section */}
      <section className="border-b border-gray-800 bg-gray-900 relative overflow-hidden">
        {/* Columns of circles at top - transitioning from previous section */}
        <div className="absolute top-0 left-0 right-0 w-full flex justify-around z-0">
          {[...Array(96)].map((_, col) => (
            <div key={col} className="flex flex-col items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image on left */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/filtro_prensa_1200_drone_view.png"
                  alt="Sistema de extracción de sólidos finos en circuito cerrado"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content on right */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Operación sin detener tu planta
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nuestros equipos succionan desde el fondo de piscinas, settlers o estanques mientras tu circuito sigue produciendo. Los sólidos finos se filtran y la solución limpia retorna directamente al sistema.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Loop className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Circuito cerrado</h3>
                    <p className="text-gray-400 text-sm">Succión desde el fondo, filtración, retorno de solución limpia. Cero pérdida de líquido valioso.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Construction className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Sin excavadoras ni vaciados</h3>
                    <p className="text-gray-400 text-sm">Olvídate de vaciar piscinas, usar palas o arriesgar daños a membranas y revestimientos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Renew className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Producción continua</h3>
                    <p className="text-gray-400 text-sm">Piscinas y settlers siguen operando mientras extraemos los sólidos acumulados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simplicidad Operacional - stats */}
          <div className="mt-24 pt-16 border-t border-gray-700">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Simplicidad Operacional
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Implementación rápida sin complejidad. Equipos móviles que no interrumpen producción.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* 24/7 Tecionic specialists */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">24/7</div>
                <div className="text-lg font-semibold text-white mb-2">Especialistas Tecionic</div>
                <p className="text-gray-400 leading-relaxed">
                  Personal dedicado opera y mantiene los equipos en tu faena
                </p>
              </div>

              {/* Fast deployment */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">48h</div>
                <div className="text-lg font-semibold text-white mb-2">Despliegue rápido</div>
                <p className="text-gray-400 leading-relaxed">
                  Flota regional lista para movilizar sin esperar fabricación
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">$0</div>
                <div className="text-lg font-semibold text-white mb-2">Inversión en capital</div>
                <p className="text-gray-400 leading-relaxed">
                  Arriendo mensual todo incluido. Opex, no Capex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EQUIPMENT & DEHYDRATION BENEFITS */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Water/Disposal Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] mb-24">
            {/* Left half - darker emerald */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-emerald-700"></div>
            {/* Right half - lighter emerald */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-200"></div>

            {/* Subtle grid texture overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            {/* Diagonal line accent */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 transform -skew-x-12 origin-top"></div>

            {/* Content */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16 items-center min-h-[500px]">
              {/* Left: The argument */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Deja de pagar por disponer agua
                </h2>
                <p className="text-lg text-emerald-100 leading-relaxed">
                  El lodo húmedo es 70-80% agua. Cuando lo envías a disposición, estás pagando camiones, transporte y tarifas de relleno para botar agua. Los filtros prensa eliminan esa agua antes de disponer. Reduces el volumen a una fracción y pagas solo por el sólido real.
                </p>
              </div>

              {/* Right: Image with overlapping stat card */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/filtro_prensa_1200_drone_view.png"
                    alt="Torta seca de filtro prensa lista para disposición"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Overlapping stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-emerald-600">70%</span>
                    <span className="text-lg text-gray-500">menos</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    volumen a disponer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Benefits title and expandable list */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            Equipos diseñados para el desafío
          </h2>

          {/* Equipment Benefits - Expandable with images */}
          <EquipmentBenefits />
        </div>
      </section>

      {/* SECTION 7: INDUSTRY BREADTH - Horizontal Scrolling Carousel */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Probado en múltiples industrias
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tecnología móvil adaptada a las necesidades específicas de cada sector
            </p>
          </div>

          {/* Horizontal scrolling carousel */}
          <div className="relative -mx-8">
            <div className="overflow-x-auto scrollbar-hide px-8 pb-4">
              <div className="flex gap-6" style={{ width: 'max-content' }}>
                {/* Copper */}
                <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all w-[320px] flex-shrink-0">
                  <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                    <Image
                      src="/copper_mine.jpg"
                      alt="Mina de cobre"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">Cu</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Cobre</h3>
                    </div>
                    <p className="text-sm text-gray-600">Limpieza settlers SX, piscinas PLS/ILS</p>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                      <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Gold */}
                <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-yellow-400 hover:shadow-lg transition-all w-[320px] flex-shrink-0">
                  <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                    <Image
                      src="/gold_sediment_pool.jpg"
                      alt="Piscina de sedimentos oro"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">Au</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Oro</h3>
                    </div>
                    <p className="text-sm text-gray-600">Piscinas de sedimentación y clarificación</p>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 mt-3">
                        Consultar
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lithium */}
                <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-cyan-300 hover:shadow-lg transition-all w-[320px] flex-shrink-0">
                  <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                    <Image
                      src="/lithium_mine.jpg"
                      alt="Mina de litio"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">Li</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Litio</h3>
                    </div>
                    <p className="text-sm text-gray-600">Protección membranas DLE, salmueras</p>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                      <Link href="/industries/lithium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Potassium */}
                <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all w-[320px] flex-shrink-0">
                  <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                    <Image
                      src="/potassium_plant.jpg"
                      alt="Planta de potasio"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">K</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Potasio</h3>
                    </div>
                    <p className="text-sm text-gray-600">Sales minerales y piscinas de evaporación</p>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                      <Link href="/industries/potassium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Zinc */}
                <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all w-[320px] flex-shrink-0">
                  <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                    <Image
                      src="/zinc_processing_plant.jpg"
                      alt="Planta de procesamiento de zinc"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">Zn</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Zinc</h3>
                    </div>
                    <p className="text-sm text-gray-600">Purificación electrolitos y settlers</p>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                      <Link href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Crude Oil */}
                <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all w-[320px] flex-shrink-0">
                  <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                    <Image
                      src="/oil_refinery.jpg"
                      alt="Refinería de petróleo"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <RainDrop className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Petróleo</h3>
                    </div>
                    <p className="text-sm text-gray-600">Estanques con equipos ATEX certificados</p>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                      <Link href="/industries/crude-oil" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator - subtle gradient fade on right */}
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SECTION 8: CASE STUDY */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              CASO DE ÉXITO
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              Planta de Yoduro mantiene continuidad operacional sin detenciones
            </h2>
          </div>

          {/* Main content - Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem] transition-all duration-300 group-hover:lg:col-span-2">
                <Image
                  src="/potassium_industry.jpg"
                  alt="Planta de Yoduro N. Victoria"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <span className="font-bold text-sm">I₂</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Planta SX Yoduro</div>
                      <div className="text-white/70 text-xs">N. Victoria y TEA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">0</div>
                    <div className="text-sm text-gray-600">Detenciones/año</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoreo turbidez</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">+15%</div>
                    <div className="text-sm text-gray-600">Capacidad filtrado</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Remoción continua de sólidos desde etapas de extracción E1 hasta coalescedores. El yoduro llega limpio a filtración final, aumentando capacidad de proceso y eliminando paradas por acumulación.
                </p>

                {/* CTA */}
                <Link href="/casos-de-exito/filtracion-yoduro" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Ver caso completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SERVICE MODELS - Auto-cycling Carousel */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Servicio según tu necesidad
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Desde respuesta de emergencia hasta mantención preventiva continua
              </p>
            </div>

            {/* Navigation arrows and dots */}
            <div className="hidden md:flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const models = ['emergencia', 'preventivo', 'continuo']
                    const currentIndex = models.indexOf(activeServiceModel)
                    const newModel = models[(currentIndex - 1 + models.length) % models.length]
                    changeCarouselModel(newModel)
                  }}
                  className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={() => {
                    const models = ['emergencia', 'preventivo', 'continuo']
                    const currentIndex = models.indexOf(activeServiceModel)
                    const newModel = models[(currentIndex + 1) % models.length]
                    changeCarouselModel(newModel)
                  }}
                  className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 w-full">
                {['emergencia', 'preventivo', 'continuo'].map((model) => (
                  <button
                    key={model}
                    onClick={() => changeCarouselModel(model)}
                    className={`h-2 rounded-full transition-all cursor-pointer relative overflow-hidden ${
                      activeServiceModel === model
                        ? 'bg-gray-300 w-8'
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Ir a ${model}`}
                  >
                    {activeServiceModel === model && (
                      <span
                        key={timerKey}
                        className="absolute inset-0 bg-emerald-600 rounded-full origin-left"
                        style={{
                          animation: `fillProgress ${CAROUSEL_DURATION}ms linear forwards`
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div ref={carouselCardRef} className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 min-h-[400px]">

                {/* Emergencia - Limpieza Profunda Spot */}
                {activeServiceModel === 'emergencia' && (
                <div className="carousel-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Limpieza Profunda Spot</h3>
                    <p className="text-gray-500">Extracción intensiva de sólidos acumulados</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Movilización de equipos en 48-72 horas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Succión desde fondo de piscinas y settlers</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Deshidratación con filtros prensa incluida</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sin detener tu circuito de producción</span>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-red-800 uppercase tracking-wide mb-2">Duración típica</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-red-600">2-6</span>
                        <span className="text-lg text-gray-600">semanas</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ideal cuando necesitas recuperar capacidad de tus piscinas o settlers antes de una parada programada.
                      </p>
                    </div>
                  </div>
                </div>
                )}

                {/* Preventivo - Mantención Programada */}
                {activeServiceModel === 'preventivo' && (
                <div className="carousel-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Mantención Programada</h3>
                    <p className="text-gray-500">Campañas trimestrales o semestrales</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Calendario acordado según tu operación</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Extracción preventiva antes de acumulación crítica</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Monitoreo de niveles de sólidos incluido</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Precio por campaña con garantía de resultados</span>
                      </div>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-emerald-800 uppercase tracking-wide mb-2">Resultado</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-emerald-600">0</span>
                        <span className="text-lg text-gray-600">emergencias/año</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Mantén tus equipos en especificación sin sorpresas. Planifica tus costos con certeza.
                      </p>
                    </div>
                  </div>
                </div>
                )}

                {/* Continuo - Cómo Funciona */}
                {activeServiceModel === 'continuo' && (
                <div className="carousel-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Cómo Funciona</h3>
                    <p className="text-gray-500">Tres pasos para empezar</p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">Evaluación</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Análisis de tu circuito</li>
                        <li>• Caracterización de sólidos</li>
                        <li>• Dimensionamiento</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-3">2</div>
                      <h4 className="font-bold text-gray-900 mb-2">Instalación</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Equipos asignados 24/7</li>
                        <li>• Operadores Tecionic</li>
                        <li>• Sin CAPEX</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-3">3</div>
                      <h4 className="font-bold text-gray-900 mb-2">Operación</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Extracción permanente</li>
                        <li>• Arriendo mensual</li>
                        <li>• Escalamiento flexible</li>
                      </ul>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        {/* Clean interface line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Mining topographic contour lines - right corner */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/mine_motif_right_corner.svg"
            alt=""
            className="absolute right-0 bottom-0 w-full h-full opacity-[0.08] object-cover object-right-bottom"
          />
        </div>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Evalúa la solución para tu planta
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            Cuéntanos sobre tu aplicación: tipo de sólidos, volumen estimado, y condiciones de acceso. Evaluamos factibilidad técnica sin costo.
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            En 48 horas recibes propuesta técnica con capacidad requerida, configuración de equipos, y modelo de servicio recomendado.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl cursor-pointer">
              Solicitar Evaluación Técnica
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors cursor-pointer">
              Descargar Caso Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="border-t border-emerald-500 pt-8">
            <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wide mb-4">Contacto directo</div>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div>
                <div className="font-semibold mb-1">Santiago:</div>
                <div className="text-emerald-100">Luis Thayer Ojeda 95, of. 312</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Calama:</div>
                <div className="text-emerald-100">Miraflores 1260 B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
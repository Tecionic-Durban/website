'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Chemistry, Connect, Filter, CheckmarkFilled, Humidity, DeliveryTruck, ArrowDown, Dashboard, Delivery, Mountain, Certificate, CertificateCheck, Security, Flash, FlashFilled, ChevronLeft, ChevronRight, Loop, Construction, Renew, Time, IncreaseLevel, Exit, ContainerImagePull, RainDrop, ArrowRight, Group } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleFiltrationAnimation from '@/components/ParticleFiltrationAnimation'

gsap.registerPlugin(ScrollTrigger)

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Expandable Equipment Benefits Component
function EquipmentBenefits({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    {
      key: 'exProof',
      icon: CertificateCheck,
      image: '/filtro_prensa_1200_drone_view.png'
    },
    {
      key: 'mobile',
      icon: Delivery,
      image: '/filtro_prensa_movil.png'
    },
    {
      key: 'flexibility',
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
                    {t(`equipmentBenefits.items.${benefit.key}.title`)}
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
                    {t(`equipmentBenefits.items.${benefit.key}.description`)}
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
            alt={t(`equipmentBenefits.items.${benefits[expandedIndex].key}.title`)}
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
  const t = useTranslations('fineSolidsService')
  const heroRef = useRef(null)
  const heroImageRef = useRef(null)
  const overviewRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const statsRef = useRef(null)

  // Mobile detection - disable animations on mobile
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Carousel state for service models
  const [activeServiceModel, setActiveServiceModel] = useState('emergencia')
  const [carouselKey, setCarouselKey] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  const carouselCardRef = useRef(null)
  const mobileServiceCarouselRef = useRef(null)
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

  // Sync mobile carousel scroll with activeServiceModel (when state changes, scroll to card)
  useEffect(() => {
    if (!mobileServiceCarouselRef.current) return
    const models = ['emergencia', 'preventivo', 'continuo']
    const index = models.indexOf(activeServiceModel)
    const scrollContainer = mobileServiceCarouselRef.current
    const cardWidth = scrollContainer.firstElementChild?.offsetWidth || 0
    const gap = 16
    const scrollPosition = index * (cardWidth + gap)
    scrollContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' })
  }, [activeServiceModel])

  // Detect mobile carousel scroll and update activeServiceModel
  useEffect(() => {
    const container = mobileServiceCarouselRef.current
    if (!container) return

    const handleScroll = () => {
      const models = ['emergencia', 'preventivo', 'continuo']
      const cardWidth = container.firstElementChild?.offsetWidth || 0
      const gap = 16
      const scrollPosition = container.scrollLeft
      const newIndex = Math.round(scrollPosition / (cardWidth + gap))
      const newModel = models[newIndex]
      if (newModel && newModel !== activeServiceModel) {
        setActiveServiceModel(newModel)
        setTimerKey(k => k + 1) // Reset progress animation
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [activeServiceModel])

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
        {/* Particle Filtration Animation Background - hidden on mobile */}
        <div className="hidden lg:block">
          <ParticleFiltrationAnimation variant="hero" className="opacity-30" />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.description')}
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                {t('hero.cta')}
                <ArrowRight size={16} className="ml-2" />
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

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em]">
              {t('keyBenefits.title')}
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
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.plantInSpec.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.plantInSpec.description')}
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
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.componentLife.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.componentLife.description')}
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
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.noInvasive.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.noInvasive.description')}
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
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.avoidMembranes.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.avoidMembranes.description')}
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

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">
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
                {t('inCircuitOperation.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t('inCircuitOperation.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Loop className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t('inCircuitOperation.features.closedLoop.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('inCircuitOperation.features.closedLoop.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Construction className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t('inCircuitOperation.features.noExcavators.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('inCircuitOperation.features.noExcavators.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Renew className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t('inCircuitOperation.features.continuousProduction.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('inCircuitOperation.features.continuousProduction.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simplicidad Operacional - stats */}
          <div className="mt-24 pt-16 border-t border-gray-700">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {t('operationalSimplicity.title')}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('operationalSimplicity.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* 24/7 Tecionic specialists */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">{t('operationalSimplicity.stats.specialists.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.specialists.title')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.specialists.description')}
                </p>
              </div>

              {/* Fast deployment */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">{t('operationalSimplicity.stats.deployment.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.deployment.title')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.deployment.description')}
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">{t('operationalSimplicity.stats.capex.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.capex.title')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.capex.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EQUIPMENT & DEHYDRATION BENEFITS */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          {/* Water/Disposal Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:min-h-[500px] mb-24">
            {/* Desktop: Left half - darker emerald */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-emerald-700 hidden lg:block"></div>

            {/* Desktop: Right half - Full bleed image */}
            <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
              <Image
                src="/filtro_prensa_1200_drone_view.png"
                alt="Torta seca de filtro prensa lista para disposición"
                fill
                className="object-cover"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/30 via-transparent to-transparent"></div>
            </div>

            {/* Desktop: Subtle grid texture overlay on left */}
            <div className="absolute inset-y-0 left-0 w-1/2 opacity-[0.03] hidden lg:block" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            {/* Mobile: Image on top */}
            <div className="relative h-56 lg:hidden">
              <Image
                src="/filtro_prensa_1200_drone_view.png"
                alt="Torta seca de filtro prensa lista para disposición"
                fill
                className="object-cover"
              />
              {/* Subtle gradient at bottom for smooth transition */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-emerald-700 to-transparent"></div>
            </div>

            {/* Mobile: Content background */}
            <div className="bg-emerald-700 lg:hidden">
              {/* Grid texture */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
              <div className="relative z-10 p-8">
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {t('dehydrationBenefits.title')}
                </h2>
                <p className="text-base text-emerald-100 leading-relaxed mb-6">
                  {t('dehydrationBenefits.description')}
                </p>
                {/* KPI */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 inline-block">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{t('dehydrationBenefits.statValue')}</span>
                    <span className="text-lg text-emerald-200 font-medium">{t('dehydrationBenefits.statLabel')}</span>
                  </div>
                  <p className="text-emerald-200 text-sm mt-1">
                    {t('dehydrationBenefits.statDescription')}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Content */}
            <div className="relative z-10 hidden lg:grid lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Left: The argument */}
              <div className="flex flex-col justify-center p-16">
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  {t('dehydrationBenefits.title')}
                </h2>
                <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                  {t('dehydrationBenefits.description')}
                </p>

                {/* KPI integrated into content flow */}
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">{t('dehydrationBenefits.statValue')}</span>
                      <span className="text-xl text-emerald-200 font-medium">{t('dehydrationBenefits.statLabel')}</span>
                    </div>
                    <p className="text-emerald-200 text-sm mt-1">
                      {t('dehydrationBenefits.statDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WATER CLARIFICATION */}
      <section className="border-b border-gray-200 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-24 right-[10%] w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-full opacity-40 blur-sm"></div>
          <div className="absolute bottom-32 left-[8%] w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-cyan-500/10 rounded-full opacity-30 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Header */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
                <RainDrop size={16} />
                {t('waterClarification.badge')}
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('waterClarification.title')}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                {t('waterClarification.description')}
              </p>
            </div>

            {/* Right: Benefits - always after header on mobile */}
            <div className="order-last lg:order-none space-y-6 lg:mt-24">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Renew className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('waterClarification.benefits.recirculate.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('waterClarification.benefits.recirculate.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Group size={20} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('waterClarification.benefits.dryCake.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('waterClarification.benefits.dryCake.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Flash className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('waterClarification.benefits.noWaiting.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('waterClarification.benefits.noWaiting.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications - Horizontal Scroll */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{t('waterClarification.applicationsLabel')}</div>
              <div className="text-sm text-gray-400 flex items-center gap-1">
                <span>→</span>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              {/* Tailings Reprocessing */}
              <div className="flex-shrink-0 w-[80vw] md:w-[320px] snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src="/copper_mine.jpg"
                    alt={t('waterClarification.applications.tailings.title')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('waterClarification.applications.tailings.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('waterClarification.applications.tailings.description')}</p>
                </div>
              </div>

              {/* Industrial Waters */}
              <div className="flex-shrink-0 w-[80vw] md:w-[320px] snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src="/filtro_prensa_movil.png"
                    alt={t('waterClarification.applications.industrial.title')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('waterClarification.applications.industrial.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('waterClarification.applications.industrial.description')}</p>
                </div>
              </div>

              {/* Process Sludge */}
              <div className="flex-shrink-0 w-[80vw] md:w-[320px] snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src="/filtro_prensa_1200_drone_view.png"
                    alt={t('waterClarification.applications.sludge.title')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('waterClarification.applications.sludge.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('waterClarification.applications.sludge.description')}</p>
                </div>
              </div>

              {/* Water Reuse */}
              <div className="flex-shrink-0 w-[80vw] md:w-[320px] snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src="/lithium_mine.jpg"
                    alt={t('waterClarification.applications.reuse.title')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('waterClarification.applications.reuse.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('waterClarification.applications.reuse.description')}</p>
                </div>
              </div>

              {/* Heavy Metals */}
              <div className="flex-shrink-0 w-[80vw] md:w-[320px] snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src="/zinc_factory.jpg"
                    alt={t('waterClarification.applications.metals.title')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('waterClarification.applications.metals.title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('waterClarification.applications.metals.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT BENEFITS */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            {t('equipmentBenefits.title')}
          </h2>

          <EquipmentBenefits t={t} />
        </div>
      </section>

      {/* SECTION 8: INDUSTRY BREADTH - Horizontal Scrolling Carousel */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('industries.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('industries.description')}
            </p>
          </div>

          {/* Mobile: Horizontal carousel with peeking | Desktop: Horizontal carousel */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {/* Copper */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-[320px] snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/copper_mine.jpg"
                  alt={t('industries.items.copper.name')}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Cu</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.copper.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.copper.description')}</p>
                <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3 md:hidden">
                  {t('industries.viewDetails')}
                  <ArrowRight size={16} />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Gold */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-yellow-400 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-[320px] snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/gold_sediment_pool.jpg"
                  alt={t('industries.items.gold.name')}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Au</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.gold.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.gold.description')}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 mt-3 md:hidden">
                  {t('industries.consult')}
                  <ArrowRight size={16} />
                </span>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 mt-3">
                    {t('industries.consult')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* Lithium */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-cyan-300 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-[320px] snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/lithium_mine.jpg"
                  alt={t('industries.items.lithium.name')}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Li</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.lithium.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.lithium.description')}</p>
                <Link href="/industries/lithium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3 md:hidden">
                  {t('industries.viewDetails')}
                  <ArrowRight size={16} />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/lithium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Potassium */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-[320px] snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/potassium_plant.jpg"
                  alt={t('industries.items.potassium.name')}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">K</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.potassium.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.potassium.description')}</p>
                <Link href="/industries/potassium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3 md:hidden">
                  {t('industries.viewDetails')}
                  <ArrowRight size={16} />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/potassium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Zinc */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-[320px] snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/zinc_factory.jpg"
                  alt={t('industries.items.zinc.name')}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Zn</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.zinc.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.zinc.description')}</p>
                <Link href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3 md:hidden">
                  {t('industries.viewDetails')}
                  <ArrowRight size={16} />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Crude Oil */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-[320px] snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/oil_refinery.jpg"
                  alt={t('industries.items.oil.name')}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RainDrop className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.items.oil.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.items.oil.description')}</p>
                <Link href="/industries/crude-oil" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3 md:hidden">
                  {t('industries.viewDetails')}
                  <ArrowRight size={16} />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/crude-oil" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CASE STUDY */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              {t('caseStudy.badge')}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              {t('caseStudy.title')}
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
                      <div className="font-semibold text-sm">{t('caseStudy.client')}</div>
                      <div className="text-white/70 text-xs">{t('caseStudy.location')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                  <div>
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.stoppages.value')}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('caseStudy.metrics.stoppages.label')}</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.monitoring.value')}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('caseStudy.metrics.monitoring.label')}</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.capacity.value')}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('caseStudy.metrics.capacity.label')}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {t('caseStudy.description')}
                </p>

                {/* CTA */}
                <Link href="/casos-de-exito/filtracion-yoduro" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  {t('caseStudy.cta')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: SERVICE MODELS - Auto-cycling Carousel */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('serviceModels.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('serviceModels.description')}
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

          {/* Mobile: Swipeable cards carousel */}
          <div className="md:hidden">
            <div
              ref={mobileServiceCarouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Emergencia Card */}
              <div className="flex-shrink-0 w-[85vw] snap-start bg-white rounded-2xl border border-gray-200 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{t('serviceModels.emergencia.title')}</h3>
                  <p className="text-gray-500 text-sm">{t('serviceModels.emergencia.subtitle')}</p>
                </div>
                <div className="space-y-3 mb-4">
                  {t.raw('serviceModels.emergencia.features').slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-red-800 uppercase tracking-wide mb-1">{t('serviceModels.emergencia.durationLabel')}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-red-600">{t('serviceModels.emergencia.durationValue')}</span>
                    <span className="text-sm text-gray-600">{t('serviceModels.emergencia.durationUnit')}</span>
                  </div>
                </div>
              </div>

              {/* Preventivo Card */}
              <div className="flex-shrink-0 w-[85vw] snap-start bg-white rounded-2xl border border-gray-200 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{t('serviceModels.preventivo.title')}</h3>
                  <p className="text-gray-500 text-sm">{t('serviceModels.preventivo.subtitle')}</p>
                </div>
                <div className="space-y-3 mb-4">
                  {t.raw('serviceModels.preventivo.features').slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-1">{t('serviceModels.preventivo.resultLabel')}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-emerald-600">{t('serviceModels.preventivo.resultValue')}</span>
                    <span className="text-sm text-gray-600">{t('serviceModels.preventivo.resultUnit')}</span>
                  </div>
                </div>
              </div>

              {/* Continuo Card */}
              <div className="flex-shrink-0 w-[85vw] snap-start bg-white rounded-2xl border border-gray-200 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{t('serviceModels.continuo.title')}</h3>
                  <p className="text-gray-500 text-sm">{t('serviceModels.continuo.subtitle')}</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">{t('serviceModels.continuo.steps.evaluation.number')}</div>
                      <h4 className="font-semibold text-gray-900 text-sm">{t('serviceModels.continuo.steps.evaluation.title')}</h4>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">{t('serviceModels.continuo.steps.installation.number')}</div>
                      <h4 className="font-semibold text-gray-900 text-sm">{t('serviceModels.continuo.steps.installation.title')}</h4>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">{t('serviceModels.continuo.steps.operation.number')}</div>
                      <h4 className="font-semibold text-gray-900 text-sm">{t('serviceModels.continuo.steps.operation.title')}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {['emergencia', 'preventivo', 'continuo'].map((model) => (
                <button
                  key={model}
                  onClick={() => {
                    setActiveServiceModel(model)
                    setCarouselKey(k => k + 1)
                    setTimerKey(k => k + 1)
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer relative overflow-hidden ${
                    activeServiceModel === model
                      ? 'bg-gray-300 w-6'
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

          {/* Desktop: Carousel container */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden">
              <div ref={carouselCardRef} className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 min-h-[400px]">

                {/* Emergencia - Limpieza Profunda Spot */}
                {activeServiceModel === 'emergencia' && (
                <div className="carousel-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{t('serviceModels.emergencia.title')}</h3>
                    <p className="text-gray-500">{t('serviceModels.emergencia.subtitle')}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {t.raw('serviceModels.emergencia.features').map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-red-800 uppercase tracking-wide mb-2">{t('serviceModels.emergencia.durationLabel')}</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-red-600">{t('serviceModels.emergencia.durationValue')}</span>
                        <span className="text-lg text-gray-600">{t('serviceModels.emergencia.durationUnit')}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {t('serviceModels.emergencia.durationDescription')}
                      </p>
                    </div>
                  </div>
                </div>
                )}

                {/* Preventivo - Mantención Programada */}
                {activeServiceModel === 'preventivo' && (
                <div className="carousel-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{t('serviceModels.preventivo.title')}</h3>
                    <p className="text-gray-500">{t('serviceModels.preventivo.subtitle')}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {t.raw('serviceModels.preventivo.features').map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-emerald-800 uppercase tracking-wide mb-2">{t('serviceModels.preventivo.resultLabel')}</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-emerald-600">{t('serviceModels.preventivo.resultValue')}</span>
                        <span className="text-lg text-gray-600">{t('serviceModels.preventivo.resultUnit')}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {t('serviceModels.preventivo.resultDescription')}
                      </p>
                    </div>
                  </div>
                </div>
                )}

                {/* Continuo - Cómo Funciona */}
                {activeServiceModel === 'continuo' && (
                <div className="carousel-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{t('serviceModels.continuo.title')}</h3>
                    <p className="text-gray-500">{t('serviceModels.continuo.subtitle')}</p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">{t('serviceModels.continuo.steps.evaluation.number')}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{t('serviceModels.continuo.steps.evaluation.title')}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {t.raw('serviceModels.continuo.steps.evaluation.items').map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-3">{t('serviceModels.continuo.steps.installation.number')}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{t('serviceModels.continuo.steps.installation.title')}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {t.raw('serviceModels.continuo.steps.installation.items').map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-3">{t('serviceModels.continuo.steps.operation.number')}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{t('serviceModels.continuo.steps.operation.title')}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {t.raw('serviceModels.continuo.steps.operation.items').map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
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
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            {t('cta.description')}
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            {t('cta.timeline')}
          </p>

          <div className="flex items-center justify-center">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl">
              {t('cta.primaryCta')}
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
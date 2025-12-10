'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Delivery, Mountain, Certificate, IbmDatastage, CheckmarkFilled, Security, Flash, ChartLine, Humidity, Chemistry, Phone, ArrowRight, ChevronLeft, ChevronRight, Analytics, Dashboard } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import CurrentFlowAnimation from '@/components/CurrentFlowAnimation'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Expandable Equipment Benefits Component
function EquipmentBenefits() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    {
      title: 'Operación en altura extrema',
      description: 'Bombas, filtros prensa y tableros de control certificados para operar sobre 4.000 msnm. Sistemas auxiliares diseñados para condiciones de alta montaña, con mantenimiento preventivo actualizado.',
      icon: Mountain,
      image: '/EW Photos/20251009_141022.jpg'
    },
    {
      title: '100% Móviles',
      description: 'Equipos que se instalan directamente sobre el grating de la nave, al costado de las celdas. Sin obras civiles, sin construcción permanente. Reubicación rápida entre sectores de la nave.',
      icon: Delivery,
      image: '/EW Photos/20251009_141008.jpg'
    },
    {
      title: 'Mangueras antiestáticas',
      description: 'Líneas de succión de 2-3 pulgadas con certificación antiestática para trabajo seguro en ambiente de celdas energizadas. Sin riesgo de chispas ni contacto eléctrico.',
      icon: Security,
      image: '/EW Photos/20251009_141022.jpg'
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

export default function EWCleaningServicePage() {
  const heroRef = useRef(null)
  const heroImageRef = useRef(null)
  const overviewRef = useRef(null)
  const specsRef = useRef(null)
  const processRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const statsRef = useRef(null)

  // Carousel state for "Piloto sin riesgos" section
  const [activeCard, setActiveCard] = useState('validacion')
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

    const refs = [heroRef, overviewRef, specsRef, processRef, caseStudiesRef]
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Helper to change carousel and trigger animation + reset timer
  const changeCarouselCard = (newCard) => {
    setActiveCard(newCard)
    setCarouselKey(k => k + 1)
    setTimerKey(k => k + 1)

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setActiveCard(prev => {
        const cards = ['validacion', 'trazabilidad', 'escalabilidad']
        const currentIndex = cards.indexOf(prev)
        return cards[(currentIndex + 1) % cards.length]
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
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      )
    }, carouselCardRef)

    return () => ctx.revert()
  }, [carouselKey, activeCard])

  // Auto-cycle carousel
  useEffect(() => {
    const cards = ['validacion', 'trazabilidad', 'escalabilidad']
    timerRef.current = setInterval(() => {
      setActiveCard(prev => {
        const currentIndex = cards.indexOf(prev)
        return cards[(currentIndex + 1) % cards.length]
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

  // Simplicidad Operacional stats animation on scroll
  useIsomorphicLayoutEffect(() => {
    if (!statsRef.current) return

    const ctx = gsap.context(() => {
      // Fade-in animations for 24/7 and $0
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

      // Count animation for 48h
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

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Stripe-style narrative */}
      <section ref={heroRef} className="relative overflow-hidden bg-white">
        {/* Current Flow Animation Background - subtle, below text */}
        <CurrentFlowAnimation variant="hero" className="opacity-30" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Mejora la calidad de tus cátodos <span className="text-gradient">sin detener producción</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Limpieza de celdas EW con equipos móviles que operan celda por celda mientras tu nave sigue produciendo. Sistema de succión neumática y filtración in-situ que retorna el electrolito al circuito con menos de 3 ppm de sólidos.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                Solicitar Evaluación
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-6">
              <div ref={heroImageRef} className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <Image
                  src="/EW Photos/20251009_141008.jpg"
                  alt="Sistema de limpieza de celdas EW Tecionic en operación"
                  width={800}
                  height={400}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY BENEFITS - Stripe-style benefit cards */}
      <section ref={overviewRef} className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
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

            {/* Benefit 1: Zero electrolyte loss */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Humidity className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cero pérdida de electrolito</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sistema cerrado que retorna 100% del electrolito filtrado con menos de 3 ppm de sólidos.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Energy reduction */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Flash className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Menor consumo energético</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Eliminación de depósitos que causan cortocircuitos reduce el gasto eléctrico por tonelada.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: LME quality */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Certificate className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calidad catódica asegurada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Eliminación total de borras que causan contaminación catódica.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Extended anode life */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Analytics className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mayor vida útil de ánodos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menos acumulación de borra reduce desgaste y extiende ciclos de reemplazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK - Operational Continuity + Simplicity - BENTO GRID */}
      <section ref={specsRef} className="border-b border-gray-800 bg-gray-900 relative overflow-hidden">
        {/* Columns of circles at top - transitioning from previous section */}
        <div className="absolute top-0 left-0 right-0 w-full flex justify-around z-0">
          {[...Array(96)].map((_, col) => (
            <div key={col} className="flex flex-col items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Limpieza sin interrumpir tu operación
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Nuestro sistema móvil opera celda por celda mientras el resto de tu nave sigue produciendo.
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

            {/* ROW 1 */}
            {/* Hero Card: 100-200L - spans 8 cols */}
            <div className="lg:col-span-8 bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-transparent border border-emerald-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-emerald-400 font-semibold text-sm uppercase tracking-wide mb-3">Conveniencia Tecionic</div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  Solo 100-200L fuera de la celda
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-6">
                  Aunque succionamos a 6 m³/hora, el sistema de retorno continuo mantiene solo 100-200 litros fuera en cualquier momento.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">6 m³/h</div>
                    <div className="text-gray-400 text-xs">Succión</div>
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-emerald-400">100-200L</div>
                    <div className="text-emerald-300/70 text-xs">Fuera de celda</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">{"<"}3 ppm</div>
                    <div className="text-gray-400 text-xs">Retorno</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero Loss Card - spans 4 cols */}
            <div className="lg:col-span-4 bg-gray-800/50 border border-gray-700 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Humidity className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cero pérdida de electrolito</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Todo el electrolito succionado retorna filtrado al circuito. Sin variación de nivel.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-5xl font-black text-white">0%</div>
                <div className="text-gray-500 text-sm">Pérdida</div>
              </div>
            </div>

            {/* ROW 2 */}
            {/* Image Card 1: Suction - spans 4 cols */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-700 overflow-hidden bg-gray-800/50 group">
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <Image
                  src="/EW Photos/20251009_141022.jpg"
                  alt="Bomba peristáltica para succión de borra en celdas EW"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Bomba peristáltica</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mayor eficiencia succionando plomo pesado. Sin reflujo de borra al apagar.
                </p>
              </div>
            </div>

            {/* Middle Card: Cells per shift - spans 4 cols */}
            <div className="lg:col-span-4 bg-emerald-600 rounded-3xl p-8 flex flex-col justify-center text-center">
              <div className="text-5xl lg:text-6xl font-black text-white mb-2">2-3</div>
              <div className="text-emerald-100 text-lg font-medium">Celdas por turno</div>
              <div className="text-emerald-200/70 text-sm mt-1">12 horas de operación continua</div>
            </div>

            {/* Image Card 2: Filtration - spans 4 cols */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-700 overflow-hidden bg-gray-800/50 group">
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <Image
                  src="/EW Photos/20251009_141008.jpg"
                  alt="Filtros prensa móviles para electrolito"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Filtración móvil</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Retorno inmediato al circuito. Borra deshidratada.
                </p>
              </div>
            </div>

          </div>

          {/* Simplicidad Operacional - below bento grid */}
          <div ref={statsRef} className="mt-20 pt-16 border-t border-gray-700">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Simplicidad Operacional
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Implementación rápida sin complejidad. Equipos móviles que llegan operativos a tu faena.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* 24/7 Tecionic specialists */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">24/7</div>
                <div className="text-lg font-semibold text-white mb-2">Especialistas Tecionic</div>
                <p className="text-gray-400 leading-relaxed">
                  Personal certificado opera y mantiene los equipos en tu faena
                </p>
              </div>

              {/* Fast deployment */}
              <div className="text-center lg:text-left">
                <div className="stat-count text-6xl lg:text-7xl font-bold text-emerald-400 mb-3" data-target="48">48h</div>
                <div className="text-lg font-semibold text-white mb-2">Despliegue rápido</div>
                <p className="text-gray-400 leading-relaxed">
                  Flota regional lista para movilizar sin esperar fabricación
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">$0</div>
                <div className="text-lg font-semibold text-white mb-2">Inversión en capital</div>
                <p className="text-gray-400 leading-relaxed">
                  Servicio mensual todo incluido. Opex, no Capex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SAFETY - Light section */}
      <section ref={processRef} className="py-24 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              Seguridad sin compromisos
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Eliminamos los riesgos inherentes a la limpieza tradicional de celdas EW.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: No confined space */}
            <div className="relative">
              {/* Circle outline behind card - top left corner */}
              <div className="absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 border-emerald-400"></div>
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <IbmDatastage className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sin espacios confinados</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestro sistema opera desde fuera de la celda. Los operadores nunca necesitan ingresar a espacios confinados.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Sin exposición a óxido de plomo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Sin permisos especiales</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: No acid exposure */}
            <div className="relative">
              {/* Circle outline behind card - top left corner */}
              <div className="absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 border-blue-400"></div>
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Chemistry className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sin exposición a ácidos</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sistema cerrado de succión y filtración elimina el contacto directo con soluciones corrosivas.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>Cero quemaduras químicas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>Cumple DS-43 MINSAL</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Certifications */}
            <div className="relative">
              {/* Circle outline behind card - top left corner */}
              <div className="absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 border-purple-400"></div>
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Certificate className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Protocolos certificados</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Operamos bajo los más altos estándares de seguridad exigidos por la industria minera.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>Protocolo SG-SSSC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>&quot;Reglas que Salvan Vidas&quot;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Track record callout */}
          <div className="mt-12 bg-emerald-600 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckmarkFilled className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Cero incidentes de seguridad
              </h4>
              <p className="text-emerald-100 leading-relaxed">
                En nuestra operación completa de desborre a más de 4.000 msnm, mantuvimos una tasa de incidentes igual a cero durante toda la ejecución del contrato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EQUIPMENT - EW-specific features */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Rendimiento garantizado en cualquier faena
            </h2>

            {/* Equipment Benefits - Expandable with images */}
            <EquipmentBenefits />
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Industrias que servimos
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Servicio de desborre especializado para naves de electroobtención
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* Copper */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/copper_mine.jpg"
                  alt="Mina de cobre"
                  fill
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
                <p className="text-sm text-gray-600">Desborre de celdas EW, filtración de borras plomadas</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Zinc */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/zinc_processing_plant.jpg"
                  alt="Planta de procesamiento de zinc"
                  fill
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
                <p className="text-sm text-gray-600">Limpieza de celdas EW de zinc, retiro de lodos</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CASE STUDY - Caserones highlight */}
      <section ref={caseStudiesRef} className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              CASO DE ÉXITO
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              Caserones mantuvo calidad LME con desborre a 4.000+ msnm
            </h2>
          </div>

          {/* Main content - Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem] transition-all duration-300">
                <Image
                  src="/fotos spence/Imagen4.jpg"
                  alt="Nave de electroobtención Caserones"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <span className="font-bold text-sm">Cu</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">SCM Lumina Copper</div>
                      <div className="text-white/70 text-xs">4.200 msnm</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">100%</div>
                    <div className="text-sm text-gray-600">Remoción depósitos</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">0</div>
                    <div className="text-sm text-gray-600">Incidentes seguridad</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">LME</div>
                    <div className="text-sm text-gray-600">Calidad mantenida</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Acumulación de borras plomadas causaba contaminación catódica a más de 4.000 msnm. Implementamos servicio integral 7x7 con equipos móviles adaptados a altura y contenedores-bodega autónomos, logrando un rendimiento de 1 celda por día sin interrumpir producción.
                </p>

                {/* CTA */}
                <Link href="/casos-de-exito/caserones-desborre" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Ver caso completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PILOTO SIN RIESGOS - Auto-cycling Carousel */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Piloto sin riesgo, escala según resultados
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Validamos la factibilidad del sistema en tu nave antes de compromisos mayores. Variables despejadas mediante pilotaje en terreno.
              </p>
            </div>

            {/* Navigation arrows and dots */}
            <div className="hidden md:flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const cards = ['validacion', 'trazabilidad', 'escalabilidad']
                    const currentIndex = cards.indexOf(activeCard)
                    const newCard = cards[(currentIndex - 1 + cards.length) % cards.length]
                    changeCarouselCard(newCard)
                  }}
                  className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={() => {
                    const cards = ['validacion', 'trazabilidad', 'escalabilidad']
                    const currentIndex = cards.indexOf(activeCard)
                    const newCard = cards[(currentIndex + 1) % cards.length]
                    changeCarouselCard(newCard)
                  }}
                  className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 w-full">
                {['validacion', 'trazabilidad', 'escalabilidad'].map((card) => (
                  <button
                    key={card}
                    onClick={() => changeCarouselCard(card)}
                    className={`h-2 rounded-full transition-all cursor-pointer relative overflow-hidden ${
                      activeCard === card
                        ? 'bg-gray-300 w-8'
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Go to ${card}`}
                  >
                    {activeCard === card && (
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

                {/* Card 1: Validación */}
                {activeCard === 'validacion' && (
                <div className="carousel-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <CheckmarkFilled className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Validación en Terreno</h3>
                      <p className="text-gray-500">Probamos el sistema en tus celdas antes de compromisos</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Verificamos capacidad de succión desde fondo de celdas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Confirmamos filtración y deshidratación efectiva</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Medimos calidad del retorno (&lt;2-3 ppm sólidos)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">95% eficiencia vs operación manual comprobada</span>
                      </div>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                      <h4 className="font-bold text-gray-900 mb-2">Sin compromiso</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        El piloto despeja todas las variables técnicas específicas de tu nave. Solo escalamos cuando los resultados te convencen.
                      </p>
                      <div className="text-2xl font-bold text-emerald-600">Prueba → Valida → Escala</div>
                    </div>
                  </div>
                </div>
                )}

                {/* Card 2: Trazabilidad */}
                {activeCard === 'trazabilidad' && (
                <div className="carousel-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Analytics className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Control Visual y Trazabilidad</h3>
                      <p className="text-gray-500">Documentación completa de cada celda intervenida</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Visor en línea de succión - operadores &quot;ven&quot; la eficiencia en tiempo real</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fichas técnicas con fotografías georreferenciadas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Estado inicial, proceso y final documentado</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Registro completo de cada celda para auditorías</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-2">Transparencia total</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Cada intervención queda documentada con fecha, hora, responsables, estado inicial/final y fotografías de respaldo.
                      </p>
                      <div className="flex items-center gap-2">
                        <Dashboard className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-semibold">Informes validados por mandante</span>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {/* Card 3: Escalabilidad */}
                {activeCard === 'escalabilidad' && (
                <div className="carousel-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <ChartLine className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Escalabilidad Probada</h3>
                      <p className="text-gray-500">Inicia pequeño, valida resultados, escala con confianza</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">Piloto</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Prueba en celdas seleccionadas</li>
                        <li>• Validación de variables</li>
                        <li>• Sin compromiso</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-3">2</div>
                      <h4 className="font-bold text-gray-900 mb-2">Contrato de Servicio</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Programa de limpieza continua</li>
                        <li>• Equipos y operadores dedicados</li>
                        <li>• Sin CAPEX</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-3">3</div>
                      <h4 className="font-bold text-gray-900 mb-2">Capacidad Dedicada</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Flota exclusiva para tu nave</li>
                        <li>• Contrato largo plazo</li>
                        <li>• Asociación estratégica</li>
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

      {/* SECTION 8: FINAL CTA */}
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
            Mejora la calidad de tus cátodos
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            Validamos la factibilidad del sistema mediante pilotaje en terreno. Sin compromiso, con resultados medibles en calidad catódica.
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            Servicio llave en mano: equipos, operadores certificados, y gestión de residuos incluida. Sin CAPEX, sin riesgo operacional.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl cursor-pointer">
              Solicitar Piloto
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors cursor-pointer">
              <Phone className="mr-2 w-5 h-5" />
              Hablar con Ventas
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

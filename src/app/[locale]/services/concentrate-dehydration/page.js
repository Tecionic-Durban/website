'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Humidity, CheckmarkFilled, Delivery, Mountain, DeliveryTruck, Certificate, CertificateCheck, Security, ChartLine, Enterprise, ArrowRight as ArrowRightCarbon, ChevronLeft, ChevronRight, Phone, Currency, AppConnectivity, Minimize, License, WorkflowAutomation } from '@carbon/icons-react'
import { CheckCircle, DollarSign, TrendingUp, Clock, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CompressionAnimation from '@/components/CompressionAnimation'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Expandable Equipment Benefits Component
function EquipmentBenefits({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    { key: 'mobile', icon: Delivery, image: '/filtro_prensa_1200_drone_view.png' },
    { key: 'complete', icon: AppConnectivity, image: '/filtro_prensa_movil.png' },
    { key: 'noPermits', icon: License, image: '/filtros_acoplados.png' }
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

export default function ConcentrateDehydrationServicePage() {
  const t = useTranslations('concentrateDehydrationService')
  const heroRef = useRef(null)
  const heroImageRef = useRef(null)
  const overviewRef = useRef(null)
  const specsRef = useRef(null)
  const processRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const statsRef = useRef(null)

  // Refs for scrollytelling
  const scrollyContainerRef = useRef(null)
  const scrollyLeftRef = useRef(null)
  const statRefs = useRef([])
  const [activeTheme, setActiveTheme] = useState(0)

  // Theme content for left column
  const themeContent = [
    { key: 'costs' },
    { key: 'compliance' }
  ]




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

  // Hero image entrance animation
  useIsomorphicLayoutEffect(() => {
    if (!heroImageRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
      )
    }, heroImageRef)

    return () => ctx.revert()
  }, [])

  // Simplicidad Operacional stats animation on scroll
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

  // GSAP ScrollTrigger for scrollytelling - pin left, update theme on scroll
  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      // Pin left column while scrolling through all stats
      if (scrollyContainerRef.current && scrollyLeftRef.current) {
        ScrollTrigger.create({
          trigger: scrollyContainerRef.current,
          start: 'top top+=88',
          end: 'bottom bottom-=300',
          pin: scrollyLeftRef.current,
          pinSpacing: false
        })
      }

      // Create triggers for each theme section (stats 0-3, 4-7, 8-11)
      statRefs.current.forEach((ref, index) => {
        if (!ref) return
        const themeIndex = Math.floor(index / 4)

        ScrollTrigger.create({
          trigger: ref,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveTheme(themeIndex),
          onEnterBack: () => setActiveTheme(themeIndex)
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative overflow-hidden bg-white">
        {/* Compression Animation Background - The signature motif */}
        <CompressionAnimation variant="hero" cycleDuration={10} className="opacity-60" />

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.description')}
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-6">
              <div ref={heroImageRef} className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <Image
                  src="/filtro_prensa_1200_drone_view.png"
                  alt="Sistema de deshidratación de alta presión Tecionic"
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

      {/* SECTION 2: KEY BENEFITS */}
      <section ref={overviewRef} className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 blur-sm"></div>
          <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em]">
              Valor en cada gota que eliminamos
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {/* 3-ball divider - left edge */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 1: Transport cost reduction */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <DeliveryTruck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce costos de transporte</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menos agua = menos peso. Ahorra hasta 30% en costos logísticos.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Meet commercial specs */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CertificateCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cumple especificaciones</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alcanza la humedad requerida por fundiciones. Evita penalizaciones comerciales.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: Production increase */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Currency className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Incrementa tu producción</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sube producción sin ampliar la planta. No dejes que el dimensionamiento de equipos te limite.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Storage flexibility */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Enterprise className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Almacenamiento simplificado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Concentrado seco se apila y almacena sin canchas de relaves ni piscinas de contención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK - Three themes */}
      <section ref={specsRef} className="border-b border-gray-800 bg-gray-900 relative">
        {/* Columns of circles at top */}
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

        <div className="max-w-[1400px] mx-auto px-8 py-24 lg:py-32 relative z-10">

          {/* SCROLLYTELLING: One sticky left, all stats scroll on right */}
          <div ref={scrollyContainerRef} className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Sticky with dynamic content */}
            <div ref={scrollyLeftRef} className="lg:pr-8 pt-8">
              {/* Theme indicator pills */}
              <div className="flex gap-2 mb-6">
                {themeContent.map((theme, idx) => (
                  <button
                    key={idx}
                    className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                      activeTheme === idx
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-800 text-gray-500'
                    }`}
                  >
                    {t(`themeContent.${theme.key}.label`)}
                  </button>
                ))}
              </div>

              {/* Dynamic title and description */}
              <div className="relative">
                {themeContent.map((theme, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-500 ${
                      activeTheme === idx
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <h2 className="text-4xl font-bold text-white mb-6">
                      {t(`themeContent.${theme.key}.title`)}
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {t(`themeContent.${theme.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - All 12 stats scroll */}
            <div className="space-y-0">
              {/* Costos stats (0-3) */}
              <div ref={el => statRefs.current[0] = el} className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Reducción de humedad hasta 95%</h3>
                <p className="text-gray-400">Filtros de alta presión eliminan el agua que no agrega valor. Cada punto porcentual menos es peso que no transportas ni pagas.</p>
              </div>

              <div ref={el => statRefs.current[1] = el} className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Embarque sin demoras ni sobreestadía</h3>
                <p className="text-gray-400">Concentrado sobre TML (9.1%) no puede cargarse legalmente. Con humedad garantizada bajo TML, el buque carga de inmediato. Sin esperas que cuestan $15-25K USD/día.</p>
              </div>

              <div ref={el => statRefs.current[2] = el} className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Producción protegida durante mantenciones</h3>
                <p className="text-gray-400">Cuando tu filtro principal está en mantención, nuestro equipo móvil mantiene la producción. Evita pérdidas millonarias con un servicio que típicamente se paga en menos de un día de operación.</p>
              </div>

              <div ref={el => statRefs.current[3] = el} className="py-6 pb-12 mb-12 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-2">Capacidad extra sin inversión de capital</h3>
                <p className="text-gray-400">Un segundo filtro fijo requiere millones en CAPEX, construcción y permisos. Nuestro servicio móvil llega operativo, sin obras civiles. OPEX flexible en vez de inversión permanente.</p>
              </div>

              {/* Cumplimiento stats (4-7) */}
              <div ref={el => statRefs.current[4] = el} className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Certificación de humedad por lote</h3>
                <p className="text-gray-400">Cada batch procesado viene con registro de humedad final. Documentación que respalda cumplimiento ante clientes, autoridades portuarias y auditores.</p>
              </div>

              <div ref={el => statRefs.current[5] = el} className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Especificaciones de fundición cumplidas</h3>
                <p className="text-gray-400">Fundiciones exigen humedad bajo 9% para evitar problemas en hornos. Incumplir significa penalizaciones o rechazo de lote. Cada batch filtrado cumple especificaciones, sin excepciones.</p>
              </div>

              <div ref={el => statRefs.current[6] = el} className="py-6">
                <h3 className="text-xl font-semibold text-white mb-2">Proceso estable durante mantenciones</h3>
                <p className="text-gray-400">Sin filtración, la pulpa se acumula en espesadores. Densidades fuera de rango, riesgo de rebases, condiciones que complican el reinicio. Un filtro de respaldo mantiene el flujo estable.</p>
              </div>

              <div ref={el => statRefs.current[7] = el} className="py-6 pb-32">
                <h3 className="text-xl font-semibold text-white mb-2">Compromisos de entrega protegidos</h3>
                <p className="text-gray-400">Reprogramar entregas afecta contratos y relaciones comerciales. Filtración de respaldo durante mantenciones asegura que se cumplen compromisos y se demuestra gestión de riesgo ante stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3b: CAPABILITIES - What you can now do */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              Capacidad de filtración para cualquier escenario
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Una plataforma flexible que se adapta a tu operación, no al revés.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Capability 1: Production continuity */}
            <div className="relative">
              {/* Circle outline behind card */}
              <div className="absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 border-emerald-400"></div>
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <WorkflowAutomation className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deshidrata sin detener producción</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Filtro de respaldo opera mientras el principal está en mantención. Tu línea de concentrado sigue activa.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>75% capacidad mantenida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Sin paradas de producción</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Capability 2: Scale on demand */}
            <div className="relative">
              {/* Circle outline behind card */}
              <div className="absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 border-blue-400"></div>
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <ChartLine className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Escala cuando demanda sube</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Agrega unidades en paralelo para picos de producción. Sin aprobaciones de capital, sin construcción.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>1x → 2x → 3x capacidad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>Cero CAPEX adicional</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Capability 3: Fast deployment */}
            <div className="relative">
              {/* Circle outline behind card */}
              <div className="absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 border-purple-400"></div>
              <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Despliega en 48 horas, no en meses</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Flota regional lista para movilizar. Sin esperar fabricación, sin proyecto de ingeniería, sin permisos de construcción.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>OPEX inmediato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>Sin permisos de construcción</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3c: RELIEF - What you no longer manage */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div ref={statsRef} className="pt-0">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Lo que ya no tienes que gestionar
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Servicio llave en mano. Nosotros operamos, tú produces.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-10">
              {/* 24/7 Tecionic specialists */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">24/7</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Operación</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personal certificado opera y mantiene los equipos en tu faena
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">$0</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">CAPEX</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Servicio mensual todo incluido. Opex, no Capex.
                </p>
              </div>

              {/* Compliance included */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">100%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Cumplimiento</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Humedad objetivo garantizada. Documentación por lote incluida.
                </p>
              </div>

              {/* Logistics included */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">0</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Logística</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transporte, instalación y retiro. Llega listo, se va limpio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EQUIPMENT */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Filtración de alta presión, lista para operar
            </h2>

            {/* Equipment Benefits - Expandable with images */}
            <EquipmentBenefits t={t} />
          </div>

          {/* Filter Press Equipment Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Flota de Filtros Prensa
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Low capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-sm font-medium text-emerald-600 mb-2 relative">Capacidad Baja</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">70 ton/día</div>
                <div className="text-gray-500 text-sm mb-4">Capacidad nominal</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Pilotos y pruebas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Operaciones de bajo volumen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Backup de emergencia</span>
                  </li>
                </ul>
                <Link href="/contacto?equipo=filtro-70ton" className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Medium capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-sm font-medium text-emerald-600 mb-2 relative">Capacidad Media</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">130 ton/día</div>
                <div className="text-gray-500 text-sm mb-4">Capacidad nominal</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Operaciones estándar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Tratamiento continuo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Balance costo-capacidad</span>
                  </li>
                </ul>
                <Link href="/contacto?equipo=filtro-130ton" className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* High capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-sm font-medium text-emerald-600 mb-2 relative">Capacidad Alta</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">400 ton/día</div>
                <div className="text-gray-500 text-sm mb-4">Capacidad nominal</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Alta producción</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Operaciones a gran escala</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Flujo continuo 24/7</span>
                  </li>
                </ul>
                <Link href="/contacto?equipo=filtro-400ton" className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY BREADTH */}
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

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
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
                <p className="text-sm text-gray-600">Deshidratación de concentrados, humedad ≤9%</p>
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
                <p className="text-sm text-gray-600">Control preciso para fundición</p>
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

      {/* SECTION 6: CASE STUDY - Cerro Negro */}
      <section ref={caseStudiesRef} className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              CASO DE ÉXITO
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              Cerro Negro protegió 2.43 MUSD en 30 días de mantención
            </h2>
          </div>

          {/* Main content - Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Visual */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem]">
                <Image
                  src="/copper_concentrate_plant.jpg"
                  alt="Planta concentradora Cerro Negro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r"></div>
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-emerald-200 text-sm font-medium mb-2">COMPAÑÍA MINERA CERRO NEGRO</div>
                    <div className="text-2xl font-bold">Planta Concentradora de Cobre</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-black">2.43M</div>
                      <div className="text-emerald-200 text-sm">USD protegidos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black">1,350</div>
                      <div className="text-emerald-200 text-sm">ton preservadas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">50:1</div>
                    <div className="text-sm text-gray-600">Beneficio/Costo</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">&lt;1 día</div>
                    <div className="text-sm text-gray-600">Payback</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">75%</div>
                    <div className="text-sm text-gray-600">Capacidad mantenida</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Cerro Negro debía realizar mantención mayor de 30 días a su único filtro prensa. Sin filtro de respaldo, la alternativa era perder 3.24 MUSD. Con nuestro filtro móvil F-1200-3 operando 24/7, preservaron el 75% de su producción con un costo total de solo ~49 kUSD.
                </p>

                {/* CTA */}
                <Link href="/casos-de-exito" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Ver caso completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Engagement Journey */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empieza pequeño, escala según resultados
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              No pedimos compromisos a largo plazo. Prueba primero, decide después.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Step 1: Piloto */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Piloto</h3>
                <p className="text-gray-600 mb-6">Prueba el servicio en tu faena. Valida resultados con tu equipo antes de comprometerte.</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>Sin inversión inicial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>Resultados medibles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>Sin compromiso de continuidad</span>
                  </li>
                </ul>
              </div>
              {/* Arrow connector */}
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRightCarbon className="w-6 h-6 text-gray-300" />
              </div>
            </div>

            {/* Step 2: Contrato de Servicio */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contrato de Servicio</h3>
                <p className="text-gray-600 mb-6">Programa mensual con equipos y operadores dedicados. Pago por servicio, no por activo.</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Operación 24/7 incluida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>KPIs garantizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>Flexibilidad para ajustar capacidad</span>
                  </li>
                </ul>
              </div>
              {/* Arrow connector */}
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRightCarbon className="w-6 h-6 text-gray-300" />
              </div>
            </div>

            {/* Step 3: Capacidad Dedicada */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Capacidad Dedicada</h3>
                <p className="text-gray-600 mb-6">Flota exclusiva para tu operación. Contrato largo plazo con condiciones preferenciales.</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>Equipos reservados para ti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>Prioridad de despliegue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>Tarifas preferenciales</span>
                  </li>
                </ul>
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
            Recupera más valor de tu operación
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            Deshidratación de alta presión para concentrados y lodos industriales. Cumple especificaciones, reduce costos, protege tu producción.
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            Servicio llave en mano: equipos, operadores certificados 24/7, y soporte técnico incluido. Sin CAPEX, sin riesgo operacional.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl cursor-pointer">
              Solicitar Evaluación
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors cursor-pointer">
              <Phone className="mr-2 w-5 h-5" />
              Hablar con Ventas
            </button>
          </div>

          <div className="border-t border-emerald-500 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-emerald-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center gap-2">
                <Enterprise className="w-5 h-5" />
                <span>Santiago • Calama • Antofagasta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

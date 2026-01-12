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

  // Refs for journey carousel
  const journeyCarouselRef = useRef(null)
  const [activeJourneyStep, setActiveJourneyStep] = useState(0)

  // Theme content for left column
  const themeContent = [
    { key: 'costs' },
    { key: 'compliance' }
  ]

  // Journey steps data
  const journeySteps = [
    { id: 'piloto', color: 'blue', number: 1, title: t('journey.steps.pilot.title'), description: t('journey.steps.pilot.description'), benefits: t.raw('journey.steps.pilot.benefits') },
    { id: 'contrato', color: 'emerald', number: 2, title: t('journey.steps.contract.title'), description: t('journey.steps.contract.description'), benefits: t.raw('journey.steps.contract.benefits') },
    { id: 'dedicado', color: 'purple', number: 3, title: t('journey.steps.dedicated.title'), description: t('journey.steps.dedicated.description'), benefits: t.raw('journey.steps.dedicated.benefits') }
  ]

  // Sync journey carousel scroll with active step
  useEffect(() => {
    if (!journeyCarouselRef.current) return
    const scrollContainer = journeyCarouselRef.current
    const cardWidth = scrollContainer.firstElementChild?.offsetWidth || 0
    const gap = 16
    const scrollPosition = activeJourneyStep * (cardWidth + gap)
    scrollContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' })
  }, [activeJourneyStep])

  // Update active step on scroll
  useEffect(() => {
    const scrollContainer = journeyCarouselRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const cardWidth = scrollContainer.firstElementChild?.offsetWidth || 0
      const gap = 16
      const scrollLeft = scrollContainer.scrollLeft
      const newIndex = Math.round(scrollLeft / (cardWidth + gap))
      if (newIndex !== activeJourneyStep && newIndex >= 0 && newIndex < journeySteps.length) {
        setActiveJourneyStep(newIndex)
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [activeJourneyStep, journeySteps.length])




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

    // Desktop: Pin left column + update theme
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

      // Create triggers for each theme section (stats 0-3, 4-7)
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

    // Mobile: Just update theme on scroll (no pinning)
    mm.add('(max-width: 1023px)', () => {
      statRefs.current.forEach((ref, index) => {
        if (!ref) return
        const themeIndex = Math.floor(index / 4)

        ScrollTrigger.create({
          trigger: ref,
          start: 'top 40%',
          end: 'bottom 40%',
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
        {/* Compression Animation Background - The signature motif (hidden on mobile) */}
        <div className="hidden lg:block">
          <CompressionAnimation variant="hero" cycleDuration={10} className="opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10">
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

            {/* Benefit 1: Transport cost reduction */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <DeliveryTruck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.transport.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.transport.description')}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.specs.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.specs.description')}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.production.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.production.description')}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.storage.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.storage.description')}
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

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-24 lg:py-32 relative z-10">

          {/* Mobile: Sticky pills at top */}
          <div className="lg:hidden sticky top-16 z-20 -mx-4 px-4 py-3 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 mb-6">
            <div className="flex gap-2">
              {themeContent.map((theme, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    activeTheme === idx
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-800 text-gray-500'
                  }`}
                >
                  {t(`themeContent.${theme.key}.label`)}
                </button>
              ))}
            </div>
          </div>

          {/* SCROLLYTELLING: One sticky left, all stats scroll on right */}
          <div ref={scrollyContainerRef} className="lg:grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Sticky with dynamic content (desktop only) */}
            <div ref={scrollyLeftRef} className="hidden lg:block lg:pr-8 pt-8">
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
              {t.raw('costStats.items').map((item, index) => (
                <div
                  key={index}
                  ref={el => statRefs.current[index] = el}
                  className={`py-6 ${index === 3 ? 'pb-12 mb-12 border-b border-gray-700' : ''}`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}

              {/* Cumplimiento stats (4-7) */}
              {t.raw('complianceStats.items').map((item, index) => (
                <div
                  key={index + 4}
                  ref={el => statRefs.current[index + 4] = el}
                  className={`py-6 ${index === 3 ? 'pb-32' : ''}`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3b: CAPABILITIES - What you can now do */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              {t('capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('capabilities.description')}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('capabilities.items.continuity.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('capabilities.items.continuity.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.raw('capabilities.items.continuity.features').map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('capabilities.items.scale.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('capabilities.items.scale.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.raw('capabilities.items.scale.features').map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('capabilities.items.deployment.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('capabilities.items.deployment.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.raw('capabilities.items.deployment.features').map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3c: RELIEF - What you no longer manage */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div ref={statsRef} className="pt-0">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {t('relief.title')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('relief.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-10">
              {/* 24/7 Tecionic specialists */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">{t('relief.stats.operation.value')}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('relief.stats.operation.title')}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('relief.stats.operation.description')}
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">{t('relief.stats.capex.value')}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('relief.stats.capex.title')}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('relief.stats.capex.description')}
                </p>
              </div>

              {/* Compliance included */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">{t('relief.stats.compliance.value')}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('relief.stats.compliance.title')}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('relief.stats.compliance.description')}
                </p>
              </div>

              {/* Logistics included */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold text-emerald-600 mb-3">{t('relief.stats.logistics.value')}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{t('relief.stats.logistics.title')}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('relief.stats.logistics.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EQUIPMENT */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              {t('equipment.title')}
            </h2>

            {/* Equipment Benefits - Expandable with images */}
            <EquipmentBenefits t={t} />
          </div>

          {/* Filter Press Equipment Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t('equipment.filterPressFleet')}
            </h3>

            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
              {/* Low capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden flex-shrink-0 w-[80vw] md:w-auto snap-start">
                {/* Hover gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-sm font-medium text-emerald-600 mb-2 relative">{t('equipment.lowCapacity.label')}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{t('equipment.lowCapacity.capacity')}</div>
                <div className="text-gray-500 text-sm mb-4">{t('equipment.lowCapacity.capacityLabel')}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.lowCapacity.features.pilots')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.lowCapacity.features.lowVolume')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.lowCapacity.features.preventive')}</span>
                  </li>
                </ul>
                <Link href="/contacto?equipo=filtro-70ton" className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  {t('equipment.lowCapacity.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Medium capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden flex-shrink-0 w-[80vw] md:w-auto snap-start">
                {/* Hover gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-sm font-medium text-emerald-600 mb-2 relative">{t('equipment.mediumCapacity.label')}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{t('equipment.mediumCapacity.capacity')}</div>
                <div className="text-gray-500 text-sm mb-4">{t('equipment.mediumCapacity.capacityLabel')}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.mediumCapacity.features.standard')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.mediumCapacity.features.continuous')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.mediumCapacity.features.balance')}</span>
                  </li>
                </ul>
                <Link href="/contacto?equipo=filtro-130ton" className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  {t('equipment.mediumCapacity.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* High capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden flex-shrink-0 w-[80vw] md:w-auto snap-start">
                {/* Hover gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-emerald-400/30 via-emerald-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-sm font-medium text-emerald-600 mb-2 relative">{t('equipment.highCapacity.label')}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{t('equipment.highCapacity.capacity')}</div>
                <div className="text-gray-500 text-sm mb-4">{t('equipment.highCapacity.capacityLabel')}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.highCapacity.features.highProduction')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.highCapacity.features.largeScale')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('equipment.highCapacity.features.continuous247')}</span>
                  </li>
                </ul>
                <Link href="/contacto?equipo=filtro-400ton" className="mt-auto inline-flex items-center gap-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors">
                  {t('equipment.highCapacity.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY BREADTH */}
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

          {/* Mobile: Horizontal carousel with peeking | Desktop: Grid */}
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {/* Copper */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-auto snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/copper_mine.jpg"
                  alt={t('industries.items.copper.name')}
                  fill
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
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Zinc */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all flex-shrink-0 w-[80vw] md:w-auto snap-start">
              <div className="h-48 md:h-64 md:group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/zinc_factory.jpg"
                  alt={t('industries.items.zinc.name')}
                  fill
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
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="hidden md:block h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CASE STUDY - Planta Concentradora */}
      <section ref={caseStudiesRef} className="border-b border-gray-200 bg-gray-50">
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
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem] transition-all duration-300">
                <Image
                  src="/copper_concentrate_plant.jpg"
                  alt={t('caseStudy.plantName')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">Cu</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t('caseStudy.plantName')}</div>
                      <div className="text-white/70 text-xs">{t('caseStudy.industryBadge')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                  <div>
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.ratio.value')}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('caseStudy.metrics.ratio.label')}</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.payback.value')}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('caseStudy.metrics.payback.label')}</div>
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
                <Link href="/casos-de-exito" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  {t('caseStudy.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Engagement Journey */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('journey.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('journey.description')}
            </p>
          </div>

          {/* Mobile: Carousel with dots */}
          <div className="lg:hidden">
            <div
              ref={journeyCarouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {journeySteps.map((step, index) => (
                <div key={step.id} className="flex-shrink-0 w-[85vw] snap-start">
                  <div className="bg-gray-50 rounded-2xl p-6 h-full">
                    <div className={`w-12 h-12 bg-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6`}
                      style={{ backgroundColor: step.color === 'blue' ? '#2563eb' : step.color === 'emerald' ? '#059669' : '#9333ea' }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {step.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckmarkFilled
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: step.color === 'blue' ? '#3b82f6' : step.color === 'emerald' ? '#10b981' : '#a855f7' }}
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-2">
              {journeySteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveJourneyStep(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeJourneyStep === index
                      ? 'bg-emerald-600 w-6'
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {/* Step 1: Piloto */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('journey.steps.pilot.title')}</h3>
                <p className="text-gray-600 mb-6">{t('journey.steps.pilot.description')}</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  {t.raw('journey.steps.pilot.benefits').map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Arrow connector */}
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRightCarbon className="w-6 h-6 text-gray-300" />
              </div>
            </div>

            {/* Step 2: Contrato de Servicio */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('journey.steps.contract.title')}</h3>
                <p className="text-gray-600 mb-6">{t('journey.steps.contract.description')}</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  {t.raw('journey.steps.contract.benefits').map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Arrow connector */}
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <ArrowRightCarbon className="w-6 h-6 text-gray-300" />
              </div>
            </div>

            {/* Step 3: Capacidad Dedicada */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('journey.steps.dedicated.title')}</h3>
                <p className="text-gray-600 mb-6">{t('journey.steps.dedicated.description')}</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  {t.raw('journey.steps.dedicated.benefits').map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
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
            <Link href="/contacto" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl">
              {t('cta.primaryCta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

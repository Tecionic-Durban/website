'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { Chemistry, Renew, Filter, CheckmarkFilled, Collaborate, Security, Time, FlashFilled, WarningAltFilled, Delivery, License } from '@carbon/icons-react'
import { ArrowRight, DollarSign, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import BypassAnimation from '@/components/BypassAnimation'
import InterfaceLine, { InterfaceLineAnimated, PhaseSeparationBackground } from '@/components/InterfaceLine'
import { useTranslations } from 'next-intl'

// Use useLayoutEffect on client, useEffect on server (for SSR safety)
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Expandable Process Steps Component
function ProcessSteps({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const steps = [
    { key: 'continuousOperation', icon: Renew },
    { key: 'highEfficiency', icon: Filter },
    { key: 'solidLiquid', icon: Chemistry },
    { key: 'purified', icon: CheckmarkFilled }
  ]

  return (
    <div>
      {steps.map((step, index) => {
        const isExpanded = expandedIndex === index
        const Icon = step.icon

        return (
          <div key={index}>
            {/* Top border line */}
            <div className="border-t border-gray-700"></div>

            {/* Header - Icon + Title + Plus/Minus */}
            <button
              onClick={() => setExpandedIndex(index)}
              className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                  {t(`processSteps.items.${step.key}.title`)}
                </span>
              </div>
              <span className="text-gray-400 text-2xl font-light group-hover:text-emerald-400 transition-colors">
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
                <p className="text-gray-300 leading-relaxed">
                  {t(`processSteps.items.${step.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        )
      })}
      {/* Bottom border line */}
      <div className="border-t border-gray-700"></div>
    </div>
  )
}

// Expandable Equipment Benefits Component
function EquipmentBenefits({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    { key: 'corrosive', icon: WarningAltFilled, image: '/corrosive_equipment.png' },
    { key: 'mobile', icon: Delivery, image: '/mobile_equipment_spence.jpeg' },
    { key: 'noPermits', icon: License, image: '/Fotos_Marccobre/no_permit_modification.jpg' }
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

// Two Methods Component - Bypass vs Batch
function TreatmentMethods({ t }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Method 1: Bypass */}
      <div className="rounded-2xl border border-gray-700 bg-gray-800/50">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/20">
              <Renew className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{t('treatmentMethods.bypass.title')}</h3>
              <p className="text-sm text-gray-400">{t('treatmentMethods.bypass.subtitle')}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t('treatmentMethods.bypass.description')}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.bypass.benefits.noStops')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.bypass.benefits.tif')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.bypass.benefits.prevention')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.bypass.benefits.ideal')}</span>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-4">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">{t('treatmentMethods.bypass.whenToUse')}</div>
            <p className="text-sm text-gray-400">{t('treatmentMethods.bypass.whenToUseDesc')}</p>
          </div>
        </div>
      </div>

      {/* Method 2: Batch */}
      <div className="rounded-2xl border border-gray-700 bg-gray-800/50">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/20">
              <Filter className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{t('treatmentMethods.batch.title')}</h3>
              <p className="text-sm text-gray-400">{t('treatmentMethods.batch.subtitle')}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t('treatmentMethods.batch.description')}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.batch.benefits.recovery')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.batch.benefits.intensive')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.batch.benefits.avoidLoss')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckmarkFilled className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{t('treatmentMethods.batch.benefits.emergency')}</span>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-4">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">{t('treatmentMethods.batch.whenToUse')}</div>
            <p className="text-sm text-gray-400">{t('treatmentMethods.batch.whenToUseDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OrganicTreatmentServicePage() {
  const t = useTranslations('organicTreatmentService')
  const [activeBusinessModel, setActiveBusinessModel] = useState('preventivo')
  const [carouselKey, setCarouselKey] = useState(0)
  const [timerKey, setTimerKey] = useState(0) // Reset progress animation
  const heroImageRef = useRef(null)
  const heroVideoRef = useRef(null)
  const statsRef = useRef(null)
  const carouselCardRef = useRef(null)
  const timerRef = useRef(null)
  const CAROUSEL_DURATION = 6000 // 6 seconds

  // Register GSAP plugins on mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    // Refresh ScrollTrigger after a small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  // Hero image entrance animation
  useIsomorphicLayoutEffect(() => {
    if (!heroImageRef.current) return

    // Ensure plugin is registered
    gsap.registerPlugin(ScrollTrigger)

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
  // Play/pause video based on visibility
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  // Simplicidad Operacional stats animation on scroll
  useIsomorphicLayoutEffect(() => {
    if (!statsRef.current) return

    // Ensure plugin is registered
    gsap.registerPlugin(ScrollTrigger)

    // Create GSAP context for proper cleanup
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
            // Count up from 0 to target
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

    // Proper cleanup - only kills animations within this context
    return () => ctx.revert()
  }, [])

  // Helper to change carousel and trigger animation + reset timer
  const changeCarouselModel = (newModel) => {
    setActiveBusinessModel(newModel)
    setCarouselKey(k => k + 1)
    setTimerKey(k => k + 1) // Reset progress animation

    // Clear and restart the auto-cycle timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setActiveBusinessModel(prev => {
        const models = ['preventivo', 'crisis', 'piloto']
        const currentIndex = models.indexOf(prev)
        return models[(currentIndex + 1) % models.length]
      })
      setCarouselKey(k => k + 1)
      setTimerKey(k => k + 1)
    }, CAROUSEL_DURATION)
  }

  // GSAP animation for carousel card transitions
  // Using useIsomorphicLayoutEffect to run BEFORE browser paint
  useIsomorphicLayoutEffect(() => {
    // Skip initial render
    if (carouselKey === 0) return

    // Create GSAP context for proper cleanup
    const ctx = gsap.context(() => {
      // Target the whole card container
      const card = carouselCardRef.current
      if (!card) return

      // Animate the whole card sliding in from right to left
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

    // Cleanup on unmount or when dependencies change
    return () => ctx.revert()
  }, [carouselKey, activeBusinessModel])

  // Auto-cycle carousel (always runs, uses ref for proper reset)
  useEffect(() => {
    const models = ['preventivo', 'crisis', 'piloto']
    timerRef.current = setInterval(() => {
      setActiveBusinessModel(prev => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* Interface Line Background - The signature motif (hidden on mobile) */}
        <div className="hidden lg:block">
          <InterfaceLineAnimated variant="hero" cycleDuration={10} className="opacity-60" />
        </div>

        {/* Subtle phase separation background (hidden on mobile) */}
        <div className="hidden lg:block">
          <PhaseSeparationBackground variant="light" interfacePosition={55} showInterface={false} />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
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

            <div className="lg:col-span-6" ref={heroImageRef} style={{ opacity: 0 }}>
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <video
                  ref={heroVideoRef}
                  src="/organic_vid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
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

            {/* Benefit 1: Longer organic lifespan */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Time className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.lifespan.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.lifespan.description')}
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Better TSF */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FlashFilled className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.separation.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.separation.description')}
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: Reduced arrastre */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.entrainment.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.entrainment.description')}
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Less borra formation */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Chemistry className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex lg:hidden flex-col items-center gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t('keyBenefits.items.crud.title')}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.crud.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TWO TREATMENT METHODS */}
      <section className="border-b border-gray-800 bg-gray-900 relative overflow-hidden">
        {/* Columns of circles at top - transitioning from previous section (gray-50) */}
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
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              {t('treatmentMethods.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('treatmentMethods.description')}
            </p>
          </div>

          <TreatmentMethods t={t} />

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

            <div ref={statsRef} className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* 24/7 Tecionic specialists */}
              <div className="text-center lg:text-left">
                <div className="stat-number stat-fade text-6xl lg:text-7xl font-bold text-emerald-400 mb-3" style={{ opacity: 0 }}>{t('operationalSimplicity.stats.specialists.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.specialists.title')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.specialists.description')}
                </p>
              </div>

              {/* Fast deployment */}
              <div className="text-center lg:text-left">
                <div className="stat-number stat-count text-6xl lg:text-7xl font-bold text-emerald-400 mb-3" data-target="48">0h</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.deployment.title')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.deployment.description')}
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="text-center lg:text-left">
                <div className="stat-number stat-fade text-6xl lg:text-7xl font-bold text-emerald-400 mb-3" style={{ opacity: 0 }}>{t('operationalSimplicity.stats.capex.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.capex.title')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.capex.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.7: EQUIPMENT */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
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

            <div className="grid md:grid-cols-3 gap-6">
              {/* Low capacity */}
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden">
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
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden">
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
              <div className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 transition-colors flex flex-col overflow-hidden">
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

          {/* Parallel operation note */}
          <div className="bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Renew className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                {t('equipment.parallelScaling.title')}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {t('equipment.parallelScaling.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TREATMENT SOLUTIONS */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('technologies.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('technologies.description')}
            </p>
          </div>

          {/* Treatment cards - 3 column grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Arcilla Activada */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Chemistry className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">TIF bajo / Delta TIF alto</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arcilla Activada</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Restaura tensión interfacial eliminando compuestos tensioactivos formados por degradación oxidativa
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">TIF &lt;21 a &gt;23 dinas/cm en 24-48h</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Dosificación 5-10 kg/m³ según severidad</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Adsorción selectiva sin afectar extractante</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="font-semibold text-gray-700">Mecanismo:</span> Montmorillonita activada adsorbe compuestos tensioactivos, restaurando propiedades físico-químicas sin afectar extractante ni diluyente.
                </div>
              </div>
              <div className="bg-emerald-50 border-t border-emerald-100 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-600">+16%</div>
                    <div className="text-xs text-emerald-600/70">TIF: 20.4 → 23.7</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-emerald-600">-50%</div>
                    <div className="text-xs text-emerald-600/70">Delta TIF: &gt;6 → ~3</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Recuperación de Crud */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Renew className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">Alto arrastre / Emulsiones</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recuperación de Crud</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Centrífuga trifásica Tricanter® separa orgánico, acuoso y sólidos de emulsiones estabilizadas
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">95% orgánico recuperado (crud &gt;50% org)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Hasta 15 m³/hora de capacidad</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Payback típico 4 meses solo en orgánico</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="font-semibold text-gray-700">Separación 3 fases:</span> Orgánico limpio → retorna al circuito | Acuoso → refinería o descarte | Sólidos → disposición final.
                </div>
              </div>
              <div className="bg-blue-50 border-t border-blue-100 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">-52%</div>
                    <div className="text-xs text-blue-600/70">Arrastre: 6 → 2.9 m³/día</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">$260K</div>
                    <div className="text-xs text-blue-600/70">Ahorro mensual USD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Diálisis Continua */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Filter className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">TSF alto / Viscosidad</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diálisis Continua</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Filtro prensa en bypass 24/7 remueve sólidos finos que estabilizan emulsiones y cruds
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">1200-1500L trata 5-10% flujo en bypass</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">De 3-4 paradas/año a cero</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Mantiene TIF/TSF en spec sin emergencias</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="font-semibold text-gray-700">Modo preventivo:</span> Remoción continua de sólidos finos &lt;10 micrones que estabilizan emulsiones, evitando degradación acumulativa.
                </div>
              </div>
              <div className="bg-orange-50 border-t border-orange-100 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">-65%</div>
                    <div className="text-xs text-orange-600/70">TSF: 444s → 153s</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">0</div>
                    <div className="text-xs text-orange-600/70">Paradas/año</div>
                  </div>
                </div>
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

          <div className="grid md:grid-cols-3 gap-6">
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
                <p className="text-sm text-gray-600">Tratamiento orgánico, filtración borras, limpieza EW</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Potassium */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/potassium_plant.jpg"
                  alt="Planta de potasio"
                  fill
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
                <p className="text-sm text-gray-600">Sales minerales y cumplimiento ambiental</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/potassium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Lithium */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/lithium_mine.jpg?v=2"
                  alt="Mina de litio"
                  fill
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
                <p className="text-sm text-gray-600">Tratamiento salmueras y sólidos finos</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/lithium" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CASE STUDY */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              CASO DE ÉXITO
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              Planta SX recuperó estabilidad operacional y ahorró $3.1M anuales
            </h2>
          </div>

          {/* Main content - Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem] transition-all duration-300 group-hover:lg:col-span-2">
                <Image
                  src="/fotos_spence/Imagen10.jpg"
                  alt="Planta SX Cobre"
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
                      <div className="font-semibold text-sm">Planta SX Cobre</div>
                      <div className="text-white/70 text-xs">50,000 t Cu/año</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">-52%</div>
                    <div className="text-sm text-gray-600">Arrastre orgánico</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">-66%</div>
                    <div className="text-sm text-gray-600">Tiempo separación</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">$260K</div>
                    <div className="text-sm text-gray-600">Ahorro mensual</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Una planta SX con problemas críticos de orgánico degradado logró recuperar parámetros óptimos en 18 meses con tratamiento integrado de arcilla, centrífuga y filtro prensa.
                </p>

                {/* CTA */}
                <Link href="/casos-de-exito/tratamiento-organico-sx" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Ver caso completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BUSINESS MODELS - Auto-cycling Carousel */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Piloto sin riesgo, escala según resultados
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Prueba con equipos de flota compartida. Valida ROI. Escala a capacidad dedicada cuando tengas confianza.
              </p>
            </div>

            {/* Navigation arrows and dots - aligned with header */}
            <div className="hidden md:flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const models = ['preventivo', 'crisis', 'piloto']
                    const currentIndex = models.indexOf(activeBusinessModel)
                    const newModel = models[(currentIndex - 1 + models.length) % models.length]
                    changeCarouselModel(newModel)
                  }}
                  className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={() => {
                    const models = ['preventivo', 'crisis', 'piloto']
                    const currentIndex = models.indexOf(activeBusinessModel)
                    const newModel = models[(currentIndex + 1) % models.length]
                    changeCarouselModel(newModel)
                  }}
                  className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Dots indicator - centered with arrows */}
              <div className="flex justify-center gap-2 w-full">
                {['preventivo', 'crisis', 'piloto'].map((model) => (
                  <button
                    key={model}
                    onClick={() => changeCarouselModel(model)}
                    className={`h-2 rounded-full transition-all cursor-pointer relative overflow-hidden ${
                      activeBusinessModel === model
                        ? 'bg-gray-300 w-8'
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Go to ${model}`}
                  >
                    {activeBusinessModel === model && (
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

            {/* Cards container */}
            <div className="overflow-hidden">
              <div ref={carouselCardRef} className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 min-h-[400px]">
                {/* Preventivo */}
                {activeBusinessModel === 'preventivo' && (
                <div className="carousel-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Security className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Mantención Preventiva</h3>
                      <p className="text-gray-500">Diálisis 24/7 mantiene calidad sin emergencias</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Filtro prensa móvil en by-pass continuo 24/7</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Monitoreo semanal TIF/TSF/entrainment</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Arcilla programada por calendario</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Operación, mantención y consumibles incluidos</span>
                      </div>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-emerald-800 uppercase tracking-wide mb-2">Resultado</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-emerald-600">0</span>
                        <span className="text-lg text-gray-600">paradas/año</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ideal para plantas que buscan estabilidad operacional. ROI inmediato en evitar pérdidas por paradas.
                      </p>
                    </div>
                  </div>
                </div>
                )}

                {/* Crisis */}
                {activeBusinessModel === 'crisis' && (
                <div className="carousel-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <FlashFilled className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Respuesta de Emergencia</h3>
                      <p className="text-gray-500">Restaura parámetros críticos en 2-4 semanas</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Movilización de flota en 48-72 horas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Tratamiento intensivo con arcilla activada</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Diálisis acelerada hasta recuperación</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Monitoreo diario de parámetros críticos</span>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-red-800 uppercase tracking-wide mb-2">Restauración típica</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl font-bold text-red-600">2-4</span>
                        <span className="text-lg text-gray-600">semanas</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Para plantas con TIF &lt;18 dinas/cm o TSF &gt;300s. Luego puede continuar con modalidad preventiva.
                      </p>
                    </div>
                  </div>
                </div>
                )}

                {/* Piloto */}
                {activeBusinessModel === 'piloto' && (
                <div className="carousel-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Escalabilidad Probada</h3>
                      <p className="text-gray-500">Inicia pequeño, valida ROI, escala con confianza</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">Piloto</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 1 unidad de flota compartida</li>
                        <li>• Prueba 2-3 meses</li>
                        <li>• Valida ROI</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-3">2</div>
                      <h4 className="font-bold text-gray-900 mb-2">Operación Estándar</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Equipos regionales asignados</li>
                        <li>• Arriendo mensual flexible</li>
                        <li>• Sin CAPEX</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-3">3</div>
                      <h4 className="font-bold text-gray-900 mb-2">Capacidad Dedicada</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Equipos de alta capacidad</li>
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
        {/* Clean interface line at top - represents the achieved result */}
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
            Envíanos muestras de tu orgánico (2L suficiente) para análisis completo: TIF, TSF, viscosidad, densidad, contenido acuoso, y evaluación de tratabilidad
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            En 5 días hábiles recibes diagnóstico técnico completo, recomendación de tratamiento, estimación de resultados, y propuesta económica sin CAPEX
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

'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Delivery, Mountain, Certificate, IbmDatastage, CheckmarkFilled, Security, Flash, ChartLine, Humidity, Chemistry, Phone, ArrowRight, ChevronLeft, ChevronRight, Analytics, Dashboard } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import CurrentFlowAnimation from '@/components/CurrentFlowAnimation'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Expandable Equipment Benefits Component
function EquipmentBenefits({ t }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    {
      key: 'highAltitude',
      icon: Mountain,
      image: '/EW_Photos/20251009_141022.jpg'
    },
    {
      key: 'mobile',
      icon: Delivery,
      image: '/EW_Photos/20251009_141008.jpg'
    },
    {
      key: 'antistatic',
      icon: Security,
      image: '/EW_Photos/20251009_141022.jpg'
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

export default function EWCleaningServicePage() {
  const t = useTranslations('ewCleaningService')
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
                {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.subtitle')}
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
                  src="/EW_Photos/20251009_141008.jpg"
                  alt={t('hero.imageAlt')}
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

            {/* Benefit 1: Zero electrolyte loss */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Humidity className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.zeroLoss.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.zeroLoss.description')}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.energySavings.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.energySavings.description')}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.cathodeQuality.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.cathodeQuality.description')}
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('keyBenefits.items.anodeLife.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('keyBenefits.items.anodeLife.description')}
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
              {t('operationalContinuity.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('operationalContinuity.subtitle')}
            </p>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

            {/* ROW 1 */}
            {/* Hero Card: 100-200L - spans 8 cols */}
            <div className="lg:col-span-8 bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-transparent border border-emerald-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-emerald-400 font-semibold text-sm uppercase tracking-wide mb-3">{t('operationalContinuity.heroCard.label')}</div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  {t('operationalContinuity.heroCard.title')}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-6">
                  {t('operationalContinuity.heroCard.description')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">{t('operationalContinuity.heroCard.stats.suction.value')}</div>
                    <div className="text-gray-400 text-xs">{t('operationalContinuity.heroCard.stats.suction.label')}</div>
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-emerald-400">{t('operationalContinuity.heroCard.stats.outOfCell.value')}</div>
                    <div className="text-emerald-300/70 text-xs">{t('operationalContinuity.heroCard.stats.outOfCell.label')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">{t('operationalContinuity.heroCard.stats.return.value')}</div>
                    <div className="text-gray-400 text-xs">{t('operationalContinuity.heroCard.stats.return.label')}</div>
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
                <h3 className="text-xl font-bold text-white mb-2">{t('operationalContinuity.zeroLossCard.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('operationalContinuity.zeroLossCard.description')}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-5xl font-black text-white">{t('operationalContinuity.zeroLossCard.stat.value')}</div>
                <div className="text-gray-500 text-sm">{t('operationalContinuity.zeroLossCard.stat.label')}</div>
              </div>
            </div>

            {/* ROW 2 */}
            {/* Image Card 1: Suction - spans 4 cols */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-700 overflow-hidden bg-gray-800/50 group">
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <Image
                  src="/EW_Photos/20251009_141022.jpg"
                  alt={t('operationalContinuity.pumpCard.imageAlt')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{t('operationalContinuity.pumpCard.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('operationalContinuity.pumpCard.description')}
                </p>
              </div>
            </div>

            {/* Middle Card: Cells per shift - spans 4 cols */}
            <div className="lg:col-span-4 bg-emerald-600 rounded-3xl p-8 flex flex-col justify-center text-center">
              <div className="text-5xl lg:text-6xl font-black text-white mb-2">{t('operationalContinuity.cellsCard.value')}</div>
              <div className="text-emerald-100 text-lg font-medium">{t('operationalContinuity.cellsCard.label')}</div>
              <div className="text-emerald-200/70 text-sm mt-1">{t('operationalContinuity.cellsCard.sublabel')}</div>
            </div>

            {/* Image Card 2: Filtration - spans 4 cols */}
            <div className="lg:col-span-4 rounded-3xl border border-gray-700 overflow-hidden bg-gray-800/50 group">
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <Image
                  src="/EW_Photos/20251009_141008.jpg"
                  alt={t('operationalContinuity.filtrationCard.imageAlt')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{t('operationalContinuity.filtrationCard.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('operationalContinuity.filtrationCard.description')}
                </p>
              </div>
            </div>

          </div>

          {/* Simplicidad Operacional - below bento grid */}
          <div ref={statsRef} className="mt-20 pt-16 border-t border-gray-700">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {t('operationalSimplicity.title')}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('operationalSimplicity.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* 24/7 Tecionic specialists */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">{t('operationalSimplicity.stats.specialists.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.specialists.label')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.specialists.description')}
                </p>
              </div>

              {/* Fast deployment */}
              <div className="text-center lg:text-left">
                <div className="stat-count text-6xl lg:text-7xl font-bold text-emerald-400 mb-3" data-target="48">{t('operationalSimplicity.stats.deployment.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.deployment.label')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.deployment.description')}
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="stat-fade text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">{t('operationalSimplicity.stats.capex.value')}</div>
                <div className="text-lg font-semibold text-white mb-2">{t('operationalSimplicity.stats.capex.label')}</div>
                <p className="text-gray-400 leading-relaxed">
                  {t('operationalSimplicity.stats.capex.description')}
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
              {t('safety.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('safety.subtitle')}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('safety.cards.confinedSpaces.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('safety.cards.confinedSpaces.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('safety.cards.confinedSpaces.bullets.leadOxide')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-emerald-500" />
                    <span>{t('safety.cards.confinedSpaces.bullets.permits')}</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('safety.cards.acidExposure.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('safety.cards.acidExposure.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>{t('safety.cards.acidExposure.bullets.burns')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-blue-500" />
                    <span>{t('safety.cards.acidExposure.bullets.compliance')}</span>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('safety.cards.certifications.title')}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('safety.cards.certifications.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>{t('safety.cards.certifications.bullets.protocol')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckmarkFilled className="w-4 h-4 text-purple-500" />
                    <span>{t('safety.cards.certifications.bullets.rules')}</span>
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
                {t('safety.trackRecord.title')}
              </h4>
              <p className="text-emerald-100 leading-relaxed">
                {t('safety.trackRecord.description')}
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
              {t('equipmentBenefits.title')}
            </h2>

            {/* Equipment Benefits - Expandable with images */}
            <EquipmentBenefits t={t} />
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('industries.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('industries.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* Copper */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/copper_mine.jpg"
                  alt={t('industries.copper.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Cu</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.copper.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.copper.description')}</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <Link href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    {t('industries.viewDetails')}
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
                  alt={t('industries.zinc.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Zn</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{t('industries.zinc.name')}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('industries.zinc.description')}</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
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

      {/* SECTION 5: CASE STUDY - Caserones highlight */}
      <section ref={caseStudiesRef} className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
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
                  src="/fotos_spence/Imagen4.jpg"
                  alt={t('caseStudy.imageAlt')}
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
                      <div className="font-semibold text-sm">{t('caseStudy.client')}</div>
                      <div className="text-white/70 text-xs">{t('caseStudy.altitude')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.removal.value')}</div>
                    <div className="text-sm text-gray-600">{t('caseStudy.metrics.removal.label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.incidents.value')}</div>
                    <div className="text-sm text-gray-600">{t('caseStudy.metrics.incidents.label')}</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-600">{t('caseStudy.metrics.quality.value')}</div>
                    <div className="text-sm text-gray-600">{t('caseStudy.metrics.quality.label')}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {t('caseStudy.description')}
                </p>

                {/* CTA */}
                <Link href="/casos-de-exito/caserones-desborre" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  {t('caseStudy.cta')}
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
                {t('pilotProgram.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('pilotProgram.subtitle')}
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
                      <h3 className="text-2xl font-bold text-gray-900">{t('pilotProgram.cards.validation.title')}</h3>
                      <p className="text-gray-500">{t('pilotProgram.cards.validation.subtitle')}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {t.raw('pilotProgram.cards.validation.features').map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                      <h4 className="font-bold text-gray-900 mb-2">{t('pilotProgram.cards.validation.highlight.title')}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {t('pilotProgram.cards.validation.highlight.description')}
                      </p>
                      <div className="text-2xl font-bold text-emerald-600">{t('pilotProgram.cards.validation.highlight.tagline')}</div>
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
                      <h3 className="text-2xl font-bold text-gray-900">{t('pilotProgram.cards.traceability.title')}</h3>
                      <p className="text-gray-500">{t('pilotProgram.cards.traceability.subtitle')}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {t.raw('pilotProgram.cards.traceability.features').map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <h4 className="font-bold text-gray-900 mb-2">{t('pilotProgram.cards.traceability.highlight.title')}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {t('pilotProgram.cards.traceability.highlight.description')}
                      </p>
                      <div className="flex items-center gap-2">
                        <Dashboard className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-semibold">{t('pilotProgram.cards.traceability.highlight.tagline')}</span>
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
                      <h3 className="text-2xl font-bold text-gray-900">{t('pilotProgram.cards.scalability.title')}</h3>
                      <p className="text-gray-500">{t('pilotProgram.cards.scalability.subtitle')}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">{t('pilotProgram.cards.scalability.steps.pilot.title')}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {t.raw('pilotProgram.cards.scalability.steps.pilot.items').map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-3">2</div>
                      <h4 className="font-bold text-gray-900 mb-2">{t('pilotProgram.cards.scalability.steps.contract.title')}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {t.raw('pilotProgram.cards.scalability.steps.contract.items').map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-3">3</div>
                      <h4 className="font-bold text-gray-900 mb-2">{t('pilotProgram.cards.scalability.steps.dedicated.title')}</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {t.raw('pilotProgram.cards.scalability.steps.dedicated.items').map((item, index) => (
                          <li key={index}>• {item}</li>
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            {t('cta.subtitle')}
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            {t('cta.description')}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl cursor-pointer">
              {t('cta.requestPilot')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors cursor-pointer">
              <Phone className="mr-2 w-5 h-5" />
              {t('cta.talkToSales')}
            </button>
          </div>

          <div className="border-t border-emerald-500 pt-8">
            <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wide mb-4">{t('cta.contact.title')}</div>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div>
                <div className="font-semibold mb-1">{t('cta.contact.santiago.label')}</div>
                <div className="text-emerald-100">{t('cta.contact.santiago.address')}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">{t('cta.contact.calama.label')}</div>
                <div className="text-emerald-100">{t('cta.contact.calama.address')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

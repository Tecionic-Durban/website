'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import {
  Chemistry,
  ChartLineData,
  CheckmarkFilled,
  ArrowRight,
  Flash,
  Meter,
  Activity,
  Analytics,
  WarningAlt,
  Renew,
  Time,
  Currency,
  ChemistryReference
} from '@carbon/icons-react'
import {
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Shield,
  Clock,
  Zap,
  Target,
  Beaker,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Gauge,
  FlaskConical,
  Droplets,
  Factory
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

// Animated counter component
function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / (duration * 1000), 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(numericValue * easeOut))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(numericValue)
          }
          animate()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function TifMeasurementPage() {
  const t = useTranslations('tifMeasurementService')
  const heroRef = useRef(null)
  const heroImageRef = useRef(null)

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

    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Stripe-style bold positioning */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900">
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(168 85 247 / 0.4) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <span className="inline-flex items-center px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold rounded-full mb-6">
                <Chemistry className="w-4 h-4 mr-2" />
                {t('hero.badge')}
              </span>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                {t('hero.title')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
                  {t('hero.titleHighlight')}
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>

              {/* Key value props - Stripe style */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckmarkFilled className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{t('hero.benefits.predictDegradation')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckmarkFilled className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{t('hero.benefits.reduceEntrainment')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckmarkFilled className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{t('hero.benefits.extendExtractant')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckmarkFilled className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{t('hero.benefits.dataDecisions')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors cursor-pointer"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services/organic-treatment"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors cursor-pointer border border-white/20"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </div>

            {/* Right Column - Visual/Metric */}
            <div className="lg:col-span-5">
              <div ref={heroImageRef} style={{ opacity: 0 }} className="relative">
                {/* TIF Gauge visualization */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">{t('hero.gaugeLabel')}</div>
                    <div className="text-6xl font-bold text-white mb-1">23.7</div>
                    <div className="text-slate-400">{t('hero.gaugeUnit')}</div>
                  </div>

                  {/* Visual gauge bar */}
                  <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500 w-full opacity-30" />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-6 bg-white rounded-full shadow-lg border-2 border-purple-400"
                      style={{ left: 'calc(79% - 6px)' }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{t('hero.gaugeLow')}</span>
                    <span className="text-emerald-400 font-semibold">{t('hero.gaugeOptimal')}</span>
                    <span>{t('hero.gaugeHigh')}</span>
                  </div>

                  {/* Status indicator */}
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm text-slate-300">{t('hero.statusHealthy')}</span>
                      </div>
                      <span className="text-sm text-purple-400">{t('hero.statusAction')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS - Social proof */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value="18" suffix="+" />
              </div>
              <div className="text-sm text-gray-500">{t('metrics.yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value="52" suffix="%" />
              </div>
              <div className="text-sm text-gray-500">{t('metrics.entrainmentReduction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">±2%</div>
              <div className="text-sm text-gray-500">{t('metrics.accuracy')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">$150K+</div>
              <div className="text-sm text-gray-500">{t('metrics.annualSavings')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM - Why TIF matters */}
      <section className="bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Problem statement */}
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-6">
                <Chemistry className="w-4 h-4 mr-2" />
                {t('problem.badge')}
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t('problem.title')}
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('problem.description')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <TrendingUp className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('problem.symptoms.emulsions.title')}</h4>
                    <p className="text-sm text-gray-600">{t('problem.symptoms.emulsions.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <DollarSign className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('problem.symptoms.losses.title')}</h4>
                    <p className="text-sm text-gray-600">{t('problem.symptoms.losses.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t('problem.symptoms.stops.title')}</h4>
                    <p className="text-sm text-gray-600">{t('problem.symptoms.stops.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual showing degradation */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t('problem.chartTitle')}</h3>

                {/* Simplified visual showing TIF degradation */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t('problem.chart.fresh')}</span>
                      <span className="font-semibold text-emerald-600">30-32 dinas/cm</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t('problem.chart.optimal')}</span>
                      <span className="font-semibold text-purple-600">&gt;23 dinas/cm</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '76%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t('problem.chart.warning')}</span>
                      <span className="font-semibold text-amber-600">21-23 dinas/cm</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '70%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t('problem.chart.critical')}</span>
                      <span className="font-semibold text-red-600">&lt;21 dinas/cm</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="flex items-start gap-3">
                    <WarningAlt className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-800">{t('problem.chart.warningTitle')}</p>
                      <p className="text-sm text-amber-700 mt-1">{t('problem.chart.warningText')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION - What TIF monitoring provides */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-6">
              <Chemistry className="w-4 h-4 mr-2" />
              {t('solution.badge')}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('solution.title')}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('solution.description')}
            </p>
          </div>

          {/* Solution cards - Key benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('solution.benefits.earlyDetection.title')}</h3>
              <p className="text-gray-600 mb-4">{t('solution.benefits.earlyDetection.description')}</p>
              <div className="text-3xl font-bold text-purple-600">{t('solution.benefits.earlyDetection.metric')}</div>
              <div className="text-sm text-gray-500">{t('solution.benefits.earlyDetection.metricLabel')}</div>
            </div>

            <div className="group p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('solution.benefits.reducedLosses.title')}</h3>
              <p className="text-gray-600 mb-4">{t('solution.benefits.reducedLosses.description')}</p>
              <div className="text-3xl font-bold text-emerald-600">{t('solution.benefits.reducedLosses.metric')}</div>
              <div className="text-sm text-gray-500">{t('solution.benefits.reducedLosses.metricLabel')}</div>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Renew className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('solution.benefits.extendedLife.title')}</h3>
              <p className="text-gray-600 mb-4">{t('solution.benefits.extendedLife.description')}</p>
              <div className="text-3xl font-bold text-purple-600">{t('solution.benefits.extendedLife.metric')}</div>
              <div className="text-sm text-gray-500">{t('solution.benefits.extendedLife.metricLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Process explanation */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center px-3 py-1 bg-white/10 text-purple-400 text-sm font-semibold rounded-full mb-6 border border-purple-500/30">
              <Meter className="w-4 h-4 mr-2" />
              {t('howItWorks.badge')}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {t('howItWorks.title')}
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              {t('howItWorks.description')}
            </p>
          </div>

          {/* Process steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 pt-12 border border-slate-700 h-full">
                <h3 className="text-lg font-bold text-white mb-3">{t('howItWorks.steps.sampling.title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t('howItWorks.steps.sampling.description')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 pt-12 border border-slate-700 h-full">
                <h3 className="text-lg font-bold text-white mb-3">{t('howItWorks.steps.measurement.title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t('howItWorks.steps.measurement.description')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 pt-12 border border-slate-700 h-full">
                <h3 className="text-lg font-bold text-white mb-3">{t('howItWorks.steps.analysis.title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t('howItWorks.steps.analysis.description')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <div className="bg-slate-800 rounded-2xl p-8 pt-12 border border-slate-700 h-full">
                <h3 className="text-lg font-bold text-white mb-3">{t('howItWorks.steps.action.title')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t('howItWorks.steps.action.description')}</p>
              </div>
            </div>
          </div>

          {/* Technical specs */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">{t('howItWorks.specs.turnaround.value')}</div>
              <div className="text-white font-semibold mb-1">{t('howItWorks.specs.turnaround.label')}</div>
              <div className="text-slate-400 text-sm">{t('howItWorks.specs.turnaround.detail')}</div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">{t('howItWorks.specs.precision.value')}</div>
              <div className="text-white font-semibold mb-1">{t('howItWorks.specs.precision.label')}</div>
              <div className="text-slate-400 text-sm">{t('howItWorks.specs.precision.detail')}</div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">{t('howItWorks.specs.coverage.value')}</div>
              <div className="text-white font-semibold mb-1">{t('howItWorks.specs.coverage.label')}</div>
              <div className="text-slate-400 text-sm">{t('howItWorks.specs.coverage.detail')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('industries.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('industries.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Copper SX */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/copper_mine.jpg"
                  alt={t('industries.copper.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">Cu</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('industries.copper.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('industries.copper.description')}</p>
                <div className="text-sm text-orange-600 font-semibold">{t('industries.copper.benefit')}</div>
              </div>
            </div>

            {/* Zinc */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/zinc_processing_plant.jpg"
                  alt={t('industries.zinc.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">Zn</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('industries.zinc.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('industries.zinc.description')}</p>
                <div className="text-sm text-slate-600 font-semibold">{t('industries.zinc.benefit')}</div>
              </div>
            </div>

            {/* Lithium */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/lithium_mine.jpg"
                  alt={t('industries.lithium.title')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">Li</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('industries.lithium.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('industries.lithium.description')}</p>
                <div className="text-sm text-purple-600 font-semibold">{t('industries.lithium.benefit')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION - Connected services */}
      <section className="bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6">
                <Renew className="w-4 h-4 mr-2" />
                {t('integration.badge')}
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t('integration.title')}
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('integration.description')}
              </p>

              <div className="space-y-4">
                <Link
                  href="/services/organic-treatment"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Chemistry className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{t('integration.services.organicTreatment.title')}</h4>
                    <p className="text-sm text-gray-500">{t('integration.services.organicTreatment.description')}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  href="/services/tsf-monitoring"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChartLineData className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{t('integration.services.tsfMonitoring.title')}</h4>
                    <p className="text-sm text-gray-500">{t('integration.services.tsfMonitoring.description')}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link
                  href="/services/filtration"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">{t('integration.services.filtration.title')}</h4>
                    <p className="text-sm text-gray-500">{t('integration.services.filtration.description')}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>

            {/* Visual showing integration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('integration.diagram.title')}</h3>
                  <p className="text-sm text-gray-500">{t('integration.diagram.subtitle')}</p>
                </div>

                {/* Simple flow diagram */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Meter className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-purple-500 rounded" />
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ChartLineData className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-emerald-500 rounded" />
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Chemistry className="w-10 h-10 text-emerald-600" />
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                      <CheckmarkFilled className="w-4 h-4" />
                      {t('integration.diagram.result')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 relative overflow-hidden">
        {/* Clean interface line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Background pattern */}
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
          <p className="text-xl text-purple-100 mb-4">
            {t('cta.description')}
          </p>
          <p className="text-lg text-purple-100 mb-10">
            {t('cta.timeline')}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors shadow-xl cursor-pointer"
            >
              {t('cta.primaryCta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services/organic-treatment"
              className="inline-flex items-center px-8 py-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-400 transition-colors cursor-pointer"
            >
              {t('cta.secondaryCta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="border-t border-purple-500 pt-8">
            <div className="text-sm font-semibold text-purple-100 uppercase tracking-wide mb-4">{t('cta.contactTitle')}</div>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div>
                <div className="font-semibold mb-1">{t('cta.locations.santiago.name')}</div>
                <div className="text-purple-100">{t('cta.locations.santiago.address')}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">{t('cta.locations.calama.name')}</div>
                <div className="text-purple-100">{t('cta.locations.calama.address')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// src/components/EfficiencyComparison.js
'use client'
import { useState, useEffect, useRef } from 'react'
import { Dashboard, Growth, Time, ArrowDown, Currency } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'

export default function EfficiencyComparison() {
  const t = useTranslations('efficiencyComparison')
  const [sliderPosition, setSliderPosition] = useState(0)
  const [animatedMetrics, setAnimatedMetrics] = useState({})
  const comparisonRef = useRef(null)

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

    if (comparisonRef.current) {
      observer.observe(comparisonRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const caseStudy = {
    name: t('caseStudy.name'),
    location: t('caseStudy.location'),
    industry: t('caseStudy.name'),
    color: 'orange',
    before: {
      efficiency: 85,
      production: 85000,
      downtime: 14,
      dragLosses: 6,
      savings: 0
    },
    after: {
      efficiency: 95,
      production: 93500,
      downtime: 0,
      dragLosses: 2,
      savings: 250000
    },
    improvements: {
      efficiency: '+11.8%',
      production: '+10.0%',
      downtime: '-100%',
      dragLosses: '-66.7%',
      savings: '+$250k'
    }
  }

  const currentCase = caseStudy
  
  // Calculate interpolated values based on slider position
  const getInterpolatedValue = (beforeVal, afterVal) => {
    const ratio = sliderPosition / 100
    return Math.round(beforeVal + (afterVal - beforeVal) * ratio)
  }

  // Animate metrics when they change
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics({
        efficiency: getInterpolatedValue(currentCase.before.efficiency, currentCase.after.efficiency),
        production: getInterpolatedValue(currentCase.before.production, currentCase.after.production),
        downtime: getInterpolatedValue(currentCase.before.downtime, currentCase.after.downtime),
        dragLosses: (currentCase.before.dragLosses + (currentCase.after.dragLosses - currentCase.before.dragLosses) * (sliderPosition / 100)).toFixed(1),
        savings: getInterpolatedValue(currentCase.before.savings, currentCase.after.savings)
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [sliderPosition])

  const getColorClass = (color, type = 'bg') => {
    const colors = {
      orange: type === 'bg' ? 'bg-orange-600' : type === 'text' ? 'text-orange-600' : 'border-orange-600',
      slate: type === 'bg' ? 'bg-slate-600' : type === 'text' ? 'text-slate-600' : 'border-slate-600',
      cyan: type === 'bg' ? 'bg-cyan-600' : type === 'text' ? 'text-cyan-600' : 'border-cyan-600'
    }
    return colors[color] || colors.orange
  }

  return (
    <section ref={comparisonRef} className="py-8 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Enterprise Background Elements - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-20 left-[10%] w-24 h-24 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 right-[15%] w-20 h-20 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="mb-4 lg:mb-12 progressive-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-4 leading-tight">
            {t('headline')}
            <span className="block text-emerald-600">{t('headlineSub')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            {t('description')} <span className="font-semibold text-emerald-600">{t('interactiveSlider')}</span> {t('toSeeTransformation')}
          </p>
        </div>

        {/* Mobile: No card wrapper / Desktop: Card wrapper */}
        <div className="lg:bg-white/90 lg:backdrop-blur-sm lg:rounded-2xl lg:border lg:border-emerald-100/50 lg:shadow-lg overflow-hidden progressive-reveal">
          {/* Case Study Header */}
          <div className={`relative ${getColorClass(currentCase.color)} p-4 lg:p-6 text-white overflow-hidden rounded-xl lg:rounded-none mb-4 lg:mb-0`}>
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold">{currentCase.name}</h3>
              <p className="text-white/80 text-sm">{currentCase.location}</p>
            </div>
          </div>

          <div className="lg:p-6">
            {/* Slider Interface */}
            <div className="mb-4 lg:mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 font-semibold text-sm">{t('before')}</span>
                <span className="text-emerald-600 font-semibold text-sm">{t('after')}</span>
              </div>
              <div className="relative bg-gray-100 rounded-xl p-4 lg:p-6">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(parseInt(e.target.value))}
                  className="w-full h-3 bg-transparent rounded-full appearance-none cursor-pointer slider-modern"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${sliderPosition}%, #d1d5db ${sliderPosition}%, #d1d5db 100%)`,
                  }}
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Mobile: Horizontal scroll KPIs */}
            <div className="lg:hidden overflow-x-auto pb-2 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
              <div className="flex gap-3 px-4 lg:px-0" style={{ width: 'max-content' }}>
                <div className="bg-white rounded-xl p-4 text-center min-w-[140px] border border-gray-200 shadow-sm snap-center">
                  <Dashboard className={`w-5 h-5 mx-auto mb-2 ${getColorClass(currentCase.color, 'text')}`} />
                  <div className="text-2xl font-bold text-gray-900">
                    {animatedMetrics.efficiency || currentCase.before.efficiency}%
                  </div>
                  <div className="text-gray-600 text-xs font-medium">{t('metrics.efficiency')}</div>
                  <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {sliderPosition > 80 ? currentCase.improvements.efficiency : '—'}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 text-center min-w-[140px] border border-gray-200 shadow-sm snap-center">
                  <Growth className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {((animatedMetrics.production || currentCase.before.production) / 1000).toFixed(0)}k
                  </div>
                  <div className="text-gray-600 text-xs font-medium">{t('metrics.production')}</div>
                  <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {sliderPosition > 80 ? currentCase.improvements.production : '—'}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 text-center min-w-[140px] border border-gray-200 shadow-sm snap-center">
                  <Time className="w-5 h-5 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {animatedMetrics.downtime !== undefined ? animatedMetrics.downtime : currentCase.before.downtime}d
                  </div>
                  <div className="text-gray-600 text-xs font-medium">{t('metrics.downtime')}</div>
                  <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {sliderPosition > 80 ? currentCase.improvements.downtime : '—'}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 text-center min-w-[140px] border border-gray-200 shadow-sm snap-center">
                  <ArrowDown className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    {animatedMetrics.dragLosses || currentCase.before.dragLosses}m³
                  </div>
                  <div className="text-gray-600 text-xs font-medium">{t('metrics.dragLosses')}</div>
                  <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {sliderPosition > 80 ? currentCase.improvements.dragLosses : '—'}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 text-center min-w-[140px] border border-gray-200 shadow-sm snap-center">
                  <Currency className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    ${((animatedMetrics.savings || currentCase.before.savings) / 1000).toFixed(0)}k
                  </div>
                  <div className="text-gray-600 text-xs font-medium">{t('metrics.monthlySavings')}</div>
                  <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {sliderPosition > 80 ? currentCase.improvements.savings : '—'}
                  </div>
                </div>
                <div className="min-w-4"></div>
              </div>
            </div>

            {/* Desktop: Grid KPIs */}
            <div className="hidden lg:grid grid-cols-5 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 hover:shadow-md transition-all">
                <Dashboard className={`w-6 h-6 mx-auto mb-2 ${getColorClass(currentCase.color, 'text')}`} />
                <div className="text-xl font-bold text-gray-800">{animatedMetrics.efficiency || currentCase.before.efficiency}%</div>
                <div className="text-gray-600 text-sm font-medium">{t('metrics.efficiency')}</div>
                <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.efficiency : '---'}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 hover:shadow-md transition-all">
                <Growth className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{(animatedMetrics.production || currentCase.before.production).toLocaleString()}</div>
                <div className="text-gray-600 text-sm font-medium">{t('metrics.production')}</div>
                <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.production : '---'}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 hover:shadow-md transition-all">
                <Time className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-800">{animatedMetrics.downtime !== undefined ? animatedMetrics.downtime : currentCase.before.downtime} {t('metrics.downtimeDays')}</div>
                <div className="text-gray-600 text-sm font-medium">{t('metrics.downtime')}</div>
                <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.downtime : '---'}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 hover:shadow-md transition-all">
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{animatedMetrics.dragLosses || currentCase.before.dragLosses} m³</div>
                <div className="text-gray-600 text-sm font-medium">{t('metrics.dragLosses')}</div>
                <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.dragLosses : '---'}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100 hover:shadow-md transition-all">
                <Currency className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">${(animatedMetrics.savings || currentCase.before.savings).toLocaleString()}</div>
                <div className="text-gray-600 text-sm font-medium">{t('metrics.monthlySavings')}</div>
                <div className={`text-xs font-semibold mt-1 ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.savings : '---'}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
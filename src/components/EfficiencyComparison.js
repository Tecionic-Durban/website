// src/components/EfficiencyComparison.js
'use client'
import { useState, useEffect, useRef } from 'react'
import { TrendingUp, DollarSign, Zap, Gauge, Target } from 'lucide-react'

export default function EfficiencyComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
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
    name: 'Proyecto Cobre',
    industry: 'Cobre',
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
    <section ref={comparisonRef} className="py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Enterprise Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sophisticated floating elements */}
        <div className="absolute top-20 left-[10%] w-24 h-24 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 right-[15%] w-20 h-20 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

        {/* Strategic three ball accent */}
        <div className="absolute top-16 right-[8%] opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Compact Enterprise Header */}
        <div className="text-center mb-12 progressive-reveal">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-4 sophisticated-hover">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 enterprise-pulse"></div>
            Casos de Éxito Interactivos
          </div>

          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight enterprise-slide-up">
            Resultados Comprobados:
            <span className="block text-emerald-600 gradient-text-animated">Antes vs Después</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed progressive-reveal">
            Descubre el impacto real de nuestras optimizaciones.
            <span className="font-semibold text-emerald-600">Usa el deslizador interactivo</span> para ver la transformación.
          </p>
        </div>

        {/* Compact Comparison Interface */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl layered-shadow-hover border border-emerald-100/50 overflow-hidden progressive-reveal">
          {/* Compact Header */}
          <div className={`relative ${getColorClass(currentCase.color)} p-6 text-white overflow-hidden`}>
            {/* Strategic three ball constellation */}
            <div className="absolute top-3 left-3 opacity-30">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full enterprise-pulse"></div>
                <div className="w-1.5 h-1.5 bg-white/80 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full enterprise-pulse"></div>
                  </div>
                  <h3 className="text-lg font-black">{currentCase.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-75 font-semibold">ACTIVO</div>
                  <div className="text-xs font-mono font-bold">TSF-{currentCase.industry.toUpperCase()}</div>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Deslice para ver la transformación de indicadores
              </p>
            </div>
          </div>

          <div className="p-6">

          {/* Compact Slider Interface */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full enterprise-pulse"></div>
                </div>
                <span className="text-red-500 font-bold text-sm tracking-wide">ANTES</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-600 font-bold text-sm tracking-wide">DESPUÉS</span>
                <div className="w-4 h-4 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse"></div>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-100 rounded-xl p-4 border border-emerald-100/50">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider sophisticated-hover"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${sliderPosition}%, #10b981 ${sliderPosition}%, #10b981 100%)`
                }}
                suppressHydrationWarning
              />
              <div className="flex justify-between text-xs text-gray-600 font-semibold mt-2">
                <span className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                  <span>Estado Inicial</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>Optimización TSF</span>
                  <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                </span>
              </div>
            </div>
          </div>

          {/* Compact Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <Gauge className={`w-6 h-6 mx-auto mb-2 ${getColorClass(currentCase.color, 'text')}`} />
                <div className="text-xl font-bold mb-1 transition-all duration-500 text-gray-800">
                  {animatedMetrics.efficiency || currentCase.before.efficiency}%
                </div>
                <div className="text-gray-600 text-xs mb-1">Eficiencia</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.efficiency : '---'}
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 transition-all duration-500 ${getColorClass(currentCase.color)}/10`}
                style={{ width: '100%', height: `${(animatedMetrics.efficiency || currentCase.before.efficiency)}%` }}
              ></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold mb-1 transition-all duration-500 text-gray-800">
                  {(animatedMetrics.production || currentCase.before.production).toLocaleString()}
                </div>
                <div className="text-gray-600 text-xs mb-1">Producción (t/año)</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.production : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <div className="text-xl font-bold mb-1 transition-all duration-500 text-gray-800">
                  {animatedMetrics.downtime !== undefined ? animatedMetrics.downtime : currentCase.before.downtime} días
                </div>
                <div className="text-gray-600 text-xs mb-1">Tiempo Parada/año</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.downtime : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold mb-1 transition-all duration-500 text-gray-800">
                  {animatedMetrics.dragLosses || currentCase.before.dragLosses} m³
                </div>
                <div className="text-gray-600 text-xs mb-1">Pérdidas Arrastre/día</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.dragLosses : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold mb-1 transition-all duration-500 text-gray-800">
                  ${(animatedMetrics.savings || currentCase.before.savings).toLocaleString()}
                </div>
                <div className="text-gray-600 text-xs mb-1">Ahorro Mensual</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.savings : '---'}
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* Compact CTA Section */}
        <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl p-8 text-white text-center overflow-hidden progressive-reveal mt-12">
          {/* Strategic three ball constellation */}
          <div className="absolute top-4 left-4 opacity-30">
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full enterprise-pulse"></div>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-black mb-4">
              ¿Listo para Transformar Tu Operación?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Nuestros especialistas pueden evaluar tu proceso actual y diseñar una solución personalizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="group relative bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect"
                suppressHydrationWarning
              >
                <span className="relative z-10">Solicitar Análisis Especializado</span>
              </button>

              <button
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                suppressHydrationWarning
              >
                <span className="relative z-10">Ver Más Casos de Éxito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
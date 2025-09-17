// src/components/EfficiencyComparison.js
'use client'
import { useState, useEffect, useRef } from 'react'
import { TrendingUp, Award, DollarSign, Zap, Gauge, Target } from 'lucide-react'

export default function EfficiencyComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [animatedMetrics, setAnimatedMetrics] = useState({})
  const [activeCase, setActiveCase] = useState('copper')
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

  const caseStudies = {
    copper: {
      name: 'Proyecto Cobre - Minera Escondida',
      industry: 'Cobre',
      color: 'orange',
      before: {
        efficiency: 78,
        production: 85000,
        downtime: 18,
        cost: 2.45,
        recovery: 89.2,
        energy: 125
      },
      after: {
        efficiency: 94,
        production: 112000,
        downtime: 4,
        cost: 1.89,
        recovery: 96.8,
        energy: 98
      },
      improvements: {
        efficiency: '+20.5%',
        production: '+31.8%',
        downtime: '-77.8%',
        cost: '-22.9%',
        recovery: '+8.5%',
        energy: '-21.6%'
      }
    },
    zinc: {
      name: 'Optimización Zinc - Complejo Minero Sur',
      industry: 'Zinc',
      color: 'slate',
      before: {
        efficiency: 82,
        production: 45000,
        downtime: 22,
        cost: 1.85,
        recovery: 91.5,
        energy: 142
      },
      after: {
        efficiency: 96,
        production: 58000,
        downtime: 6,
        cost: 1.42,
        recovery: 97.2,
        energy: 109
      },
      improvements: {
        efficiency: '+17.1%',
        production: '+28.9%',
        downtime: '-72.7%',
        cost: '-23.2%',
        recovery: '+6.2%',
        energy: '-23.2%'
      }
    },
    lithium: {
      name: 'Planta Litio - Salar de Atacama',
      industry: 'Litio',
      color: 'cyan',
      before: {
        efficiency: 68,
        production: 12000,
        downtime: 28,
        cost: 4.20,
        recovery: 76.8,
        energy: 189
      },
      after: {
        efficiency: 89,
        production: 18500,
        downtime: 8,
        cost: 3.15,
        recovery: 92.4,
        energy: 145
      },
      improvements: {
        efficiency: '+30.9%',
        production: '+54.2%',
        downtime: '-71.4%',
        cost: '-25.0%',
        recovery: '+20.3%',
        energy: '-23.3%'
      }
    }
  }

  const currentCase = caseStudies[activeCase]
  
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
        cost: (currentCase.before.cost + (currentCase.after.cost - currentCase.before.cost) * (sliderPosition / 100)).toFixed(2),
        recovery: (currentCase.before.recovery + (currentCase.after.recovery - currentCase.before.recovery) * (sliderPosition / 100)).toFixed(1),
        energy: getInterpolatedValue(currentCase.before.energy, currentCase.after.energy)
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [sliderPosition, activeCase])

  const getColorClass = (color, type = 'bg') => {
    const colors = {
      orange: type === 'bg' ? 'bg-orange-600' : type === 'text' ? 'text-orange-600' : 'border-orange-600',
      slate: type === 'bg' ? 'bg-slate-600' : type === 'text' ? 'text-slate-600' : 'border-slate-600',
      cyan: type === 'bg' ? 'bg-cyan-600' : type === 'text' ? 'text-cyan-600' : 'border-cyan-600'
    }
    return colors[color] || colors.orange
  }

  return (
    <section ref={comparisonRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Enterprise Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sophisticated floating elements */}
        <div className="absolute top-32 left-[10%] w-32 h-32 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

        {/* Strategic three ball accent */}
        <div className="absolute top-24 right-[8%] opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative">
        {/* Enterprise Header */}
        <div className="text-center mb-20 progressive-reveal">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
            Casos de Éxito Interactivos
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
            Resultados Comprobados:
            <span className="block text-emerald-600 gradient-text-animated">Antes vs Después</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
            Descubra el impacto real de nuestras optimizaciones en plantas operativas.
            <span className="font-semibold text-emerald-600">Use el deslizador interactivo</span> para ver la transformación paso a paso
            de indicadores clave de rendimiento.
          </p>
        </div>

        {/* Enterprise Case Study Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {Object.entries(caseStudies).map(([key, study], index) => (
            <div
              key={key}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border layered-shadow-hover sophisticated-hover magnetic-hover progressive-reveal cursor-pointer overflow-hidden transition-all duration-500 ${
                activeCase === key
                  ? `border-${study.color}-400/50 scale-105 z-10`
                  : 'border-emerald-100/50 hover:scale-102'
              }`}
              onClick={() => setActiveCase(key)}
            >
              {/* Sophisticated background animation */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${study.color}-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Strategic three ball accent */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse"></div>
                  <div className="w-1 h-1 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeCase === key
                      ? `${getColorClass(study.color)} enterprise-pulse`
                      : 'bg-gray-300'
                  }`}></div>
                  <h3 className={`font-black text-xl transition-colors duration-300 ${
                    activeCase === key ? getColorClass(study.color, 'text') : 'text-gray-700'
                  }`}>{study.industry}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{study.name}</p>

                {/* Enhanced metrics preview */}
                <div className="grid grid-cols-2 gap-3">
                  <div className={`text-center p-4 rounded-xl transition-all duration-300 ${
                    activeCase === key
                      ? `bg-${study.color}-50 border border-${study.color}-200`
                      : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className={`text-lg font-black mb-1 ${
                      activeCase === key ? getColorClass(study.color, 'text') : 'text-gray-800'
                    }`}>{study.improvements.efficiency}</div>
                    <div className="text-gray-600 text-xs font-medium">Eficiencia</div>
                  </div>
                  <div className={`text-center p-4 rounded-xl transition-all duration-300 ${
                    activeCase === key
                      ? `bg-${study.color}-50 border border-${study.color}-200`
                      : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className={`text-lg font-black mb-1 ${
                      activeCase === key ? getColorClass(study.color, 'text') : 'text-gray-800'
                    }`}>{study.improvements.production}</div>
                    <div className="text-gray-600 text-xs font-medium">Producción</div>
                  </div>
                </div>

                {/* Active indicator */}
                {activeCase === key && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${getColorClass(study.color)} rounded-b-2xl`}></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Comparison Interface */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl layered-shadow-hover border border-emerald-100/50 overflow-hidden progressive-reveal">
          {/* Enterprise Header */}
          <div className={`relative ${getColorClass(currentCase.color)} p-8 text-white overflow-hidden`}>
            {/* Sophisticated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 right-8 w-20 h-20 bg-white/10 rounded-full animate-float-slow blur-sm"></div>
              <div className="absolute bottom-4 left-8 w-16 h-16 bg-white/15 rounded-full animate-float-medium blur-sm"></div>

              {/* Strategic three ball constellation */}
              <div className="absolute top-4 left-4 opacity-30">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full enterprise-pulse"></div>
                  <div className="w-2 h-2 bg-white/80 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full enterprise-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-black gradient-text-animated">{currentCase.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-75 font-semibold tracking-wide">ANÁLISIS ACTIVO</div>
                  <div className="text-sm font-mono font-bold">TSF-{currentCase.industry.toUpperCase()}</div>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Deslice para ver la transformación paso a paso de los indicadores operacionales críticos
              </p>
            </div>
          </div>

          <div className="p-10">

          {/* Enterprise Slider Interface */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full enterprise-pulse"></div>
                </div>
                <span className="text-red-500 font-bold text-lg tracking-wide">ANTES</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-600 font-bold text-lg tracking-wide">DESPUÉS</span>
                <div className="w-6 h-6 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full enterprise-pulse"></div>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-100 rounded-2xl p-6 border border-emerald-100/50">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-300 rounded-xl appearance-none cursor-pointer slider sophisticated-hover"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${sliderPosition}%, #10b981 ${sliderPosition}%, #10b981 100%)`
                }}
                suppressHydrationWarning
              />
              <div className="flex justify-between text-sm text-gray-600 font-semibold mt-4">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Estado Inicial</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>Optimización TSF</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </span>
              </div>
            </div>
          </div>

          {/* Enterprise Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
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
                <div className="text-gray-600 text-xs mb-1">Prod. (t/año)</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.production : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <div className="text-xl font-bold mb-1 transition-all duration-500 text-gray-800">
                  {animatedMetrics.downtime || currentCase.before.downtime}h
                </div>
                <div className="text-gray-600 text-xs mb-1">Tiempo Parada/mes</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.downtime : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-xl font-bold mb-1 transition-all duration-500 text-gray-800">
                  ${animatedMetrics.cost || currentCase.before.cost}
                </div>
                <div className="text-gray-600 text-xs mb-1">Costo por Tonelada</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.cost : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xl font-bold mb-1 transition-all duration-500 text-gray-800">
                  {animatedMetrics.recovery || currentCase.before.recovery}%
                </div>
                <div className="text-gray-600 text-xs mb-1">Recuperación Metal</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.recovery : '---'}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-center relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative z-10">
                <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-xl font-bold mb-1 transition-all duration-500 text-gray-800">
                  {animatedMetrics.energy || currentCase.before.energy}
                </div>
                <div className="text-gray-600 text-xs mb-1">kWh por Tonelada</div>
                <div className={`text-xs font-semibold ${sliderPosition > 80 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  {sliderPosition > 80 ? currentCase.improvements.energy : '---'}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          {sliderPosition > 80 && (
            <div className={`${getColorClass(currentCase.color)}/10 border-2 ${getColorClass(currentCase.color, 'border')}/20 rounded-xl p-6 text-center relative overflow-hidden`}>
              {/* Success pattern */}
              <div className="absolute top-2 right-2 w-4 h-4 border-2 border-emerald-500 rounded transform rotate-45"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border border-emerald-500 rounded-full"></div>
              
              <h4 className={`text-xl font-bold ${getColorClass(currentCase.color, 'text')} mb-3`}>
                🎯 Optimización Completada - Resultados Sobresalientes
              </h4>
              <p className="text-gray-700 text-lg">
                Mejora promedio del <span className="font-bold text-emerald-600">25-30%</span> en todos los indicadores clave. 
                <br />ROI típico: <span className="font-bold text-emerald-600">18 meses</span> de recuperación de inversión.
              </p>
            </div>
          )}
          </div>
        </div>

        {/* Enterprise CTA Section */}
        <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl p-12 md:p-16 text-white text-center overflow-hidden progressive-reveal mt-20">
          {/* Sophisticated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-8 right-12 w-20 h-20 bg-emerald-500/20 rounded-full animate-float-slow blur-sm"></div>
            <div className="absolute bottom-8 left-12 w-16 h-16 bg-emerald-400/25 rounded-full animate-float-medium blur-sm"></div>

            {/* Strategic three ball constellation */}
            <div className="absolute top-6 left-6 opacity-30">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-300 rounded-full enterprise-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-black mb-6 gradient-text-animated">
              ¿Listo para Transformar Su Operación?
            </h3>
            <p className="text-xl text-emerald-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Nuestros especialistas pueden evaluar su proceso actual y diseñar una solución personalizada.
              <span className="font-semibold text-emerald-300">Resultados comprobados como estos casos de éxito.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                className="group relative bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Solicitar Análisis Especializado</span>
              </button>

              <button
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Ver Más Casos de Éxito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
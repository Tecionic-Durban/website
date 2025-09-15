// src/components/EfficiencyComparison.js
'use client'
import { useState, useEffect } from 'react'
import { TrendingUp, Award, DollarSign, Zap, Gauge, Target } from 'lucide-react'

export default function EfficiencyComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [animatedMetrics, setAnimatedMetrics] = useState({})
  const [activeCase, setActiveCase] = useState('copper')

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
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Floating industrial elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-300/30 rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-emerald-500/40 rounded-full animate-pulse [animation-delay:2s]"></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-emerald-400/25 rounded-full animate-pulse [animation-delay:0.5s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 industrial-shimmer">
            Resultados Comprobados: Antes vs Después
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra el impacto real de nuestras optimizaciones en plantas operativas. 
            Use el deslizador para ver la transformación paso a paso.
          </p>
        </div>

        {/* Case Study Selection - Industrial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {Object.entries(caseStudies).map(([key, study]) => (
            <div
              key={key}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeCase === key ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              onClick={() => setActiveCase(key)}
            >
              {/* Industrial Border Shape */}
              <div className={`relative bg-white rounded-lg border-2 transition-all duration-300 ${
                activeCase === key
                  ? `${getColorClass(study.color, 'border')} shadow-lg`
                  : 'border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
              }`}>
                {/* Technical Corner Cut */}
                <div className={`absolute top-0 right-0 w-6 h-6 ${
                  activeCase === key ? getColorClass(study.color) : 'bg-gray-100'
                } clip-corner transition-colors duration-300`}></div>
                
                {/* Circuit Pattern */}
                <div className="absolute top-2 left-2 w-8 h-8 opacity-10">
                  <div className="w-full h-0.5 bg-gray-400 mb-1"></div>
                  <div className="w-0.5 h-full bg-gray-400 ml-2"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 border border-gray-400 rounded-sm"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeCase === key ? getColorClass(study.color) : 'bg-gray-300'
                    }`}></div>
                    <h3 className={`font-bold text-lg transition-colors duration-300 ${
                      activeCase === key ? getColorClass(study.color, 'text') : 'text-gray-700'
                    }`}>{study.industry}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{study.name}</p>
                  
                  {/* Mini metrics preview */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-semibold text-gray-800">{study.improvements.efficiency}</div>
                      <div className="text-gray-500">Eficiencia</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-semibold text-gray-800">{study.improvements.production}</div>
                      <div className="text-gray-500">Producción</div>
                    </div>
                  </div>
                </div>
                
                {/* Active indicator */}
                {activeCase === key && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${getColorClass(study.color)} rounded-b-lg`}></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main Comparison Interface - Industrial Card */}
        <div className="relative bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden group">
          {/* Technical Header with Circuit Pattern */}
          <div className={`relative ${getColorClass(currentCase.color)} p-6 text-white overflow-hidden`}>
            {/* Circuit pattern background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16">
                <div className="absolute inset-0">
                  <div className="w-full h-0.5 bg-white mb-2"></div>
                  <div className="w-0.5 h-full bg-white mr-2 inline-block"></div>
                  <div className="w-full h-0.5 bg-white mb-2"></div>
                  <div className="w-0.5 h-full bg-white inline-block"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12">
                <div className="absolute inset-0 border border-white rounded-full"></div>
                <div className="absolute inset-2 border border-white rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-8 w-8 h-8 border border-white transform rotate-45"></div>
            </div>
            
            {/* Corner cuts */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-white clip-corner-tl opacity-20"></div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-white clip-corner-tr opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold">{currentCase.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-75">SISTEMA ACTIVO</div>
                  <div className="text-sm font-mono">TD-{currentCase.industry.toUpperCase()}</div>
                </div>
              </div>
              <p className="text-white/90">Deslice para ver la transformación paso a paso de los indicadores</p>
            </div>
          </div>
          
          <div className="p-8">

          {/* Before/After Slider */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-red-500 font-semibold">ANTES</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-emerald-600 font-semibold">DESPUÉS</span>
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${sliderPosition}%, #10b981 ${sliderPosition}%, #10b981 100%)`
                }}
                suppressHydrationWarning
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Estado Inicial</span>
                <span>Optimización Tecionic</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
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

        {/* CTA Section - Industrial Card */}
        <div className="relative bg-white rounded-xl shadow-xl border-2 border-emerald-200 p-8 text-center mt-16 overflow-hidden">
          {/* Technical accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para transformar su operación como estos casos de éxito?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas pueden evaluar su proceso actual y diseñar una solución personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" suppressHydrationWarning>
              Solicitar Análisis Especializado
            </button>
            <button className="border-2 border-emerald-300 text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105" suppressHydrationWarning>
              Ver Más Casos de Éxito
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Chemistry, Flash, Enterprise, Renew, ArrowRight, Growth, Time, Security } from '@carbon/icons-react'

export default function SwipeableProcessCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef(null)

  const processes = [
    {
      id: 'filtration-dehydration',
      title: 'Filtración y Deshidratación',
      subtitle: 'Borras y sólidos en SX',
      icon: Chemistry,
      color: 'from-orange-500 to-red-600',
      description: 'Filtros prensa móviles con placas intercambiables y sistemas auxiliares automatizados. Montaje rápido sin fundaciones permanentes, certificados ex.proof para ambientes explosivos. Operación continua 24/7 con preparación y descarga automatizada para máxima eficiencia.',
      keyMetrics: {
        capacity: '70 ton/día',
        efficiency: '85-92%',
        availability: '24/7'
      },
      steps: [
        'Montaje rápido sin fundaciones',
        'Alimentación continua borras SX',
        'Filtración placas intercambiables',
        'Descarga automatizada torta seca'
      ],
      applications: ['Cobre', 'Zinc', 'Potasio', 'Litio', 'Hidrocarburos'],
      benefits: [
        'Sin instalaciones definitivas',
        'Sin modificación permisos',
        'Flexibilidad operativa',
        'Reducción pérdidas'
      ]
    },
    {
      id: 'organic-treatment',
      title: 'Tratamiento de Orgánico SX',
      subtitle: 'Recuperación y optimización',
      icon: Enterprise,
      color: 'from-emerald-500 to-teal-600',
      description: 'Sistemas de coalescencia y separación para recuperación 90-95% orgánico con reducción 60% pérdidas solvente. Proceso completo: caracterización composición → coalescencia fases → purificación selectiva contaminantes → reintegración circuito SX para optimización continua.',
      keyMetrics: {
        recovery: '95-98%',
        stability: '+40%',
        losses: '-60%'
      },
      steps: [
        'Caracterización orgánico contaminado',
        'Coalescencia y separación fases',
        'Purificación selectiva contaminantes',
        'Reintegración al circuito SX'
      ],
      applications: ['Plantas SX Cobre', 'Circuitos SX-Zn', 'Recuperación níquel'],
      benefits: [
        'Reducción pérdidas orgánico',
        'Estabilidad operacional',
        'Menor consumo reactivos',
        'Optimización planta'
      ]
    },
    {
      id: 'concentrate-dehydration',
      title: 'Deshidratación Concentrados',
      subtitle: 'Filtros prensa alta capacidad',
      icon: Flash,
      color: 'from-blue-500 to-purple-600',
      description: 'Filtros prensa automáticos con sistema de lavado contracorriente para concentrados de cobre. Secuencia optimizada para máxima recuperación de valores: filtración inicial → lavado ácido para remoción impurezas solubles → compresión membrana para deshidratación &lt;8% humedad → descarga automatizada.',
      keyMetrics: {
        capacity: '50 ton/día',
        moisture: '<8%',
        recovery: '>99%'
      },
      steps: [
        'Filtración inicial 4-6 bar',
        'Lavado contracorriente pH 2.0',
        'Compresión membrana 12 bar',
        'Soplado aire comprimido final'
      ],
      applications: ['Concentrados cobre', 'Concentrados zinc', 'Residuos mineros'],
      benefits: [
        'Máxima recuperación valores',
        'Menor humedad residual',
        'Reducción costos transporte',
        'Cumplimiento contratos'
      ]
    },
    {
      id: 'fine-solids-water',
      title: 'Sólidos Finos y Clarificación',
      subtitle: 'Centrífugas y clarificadores',
      icon: Renew,
      color: 'from-green-500 to-emerald-600',
      description: 'Centrífugas decanter para separación de sólidos finos &lt;10μm que causan crud formation y pérdidas orgánicas. Sistema integrado: centrifugación → coagulación-floculación → sedimentación lamelar → flotación DAF. Crítico para estabilidad operacional SX y cumplimiento ambiental descargas.',
      keyMetrics: {
        solids: '14 ton/día',
        water: '120 m³/día',
        clarity: '<5 NTU'
      },
      steps: [
        'Centrifugación decanter 3000G',
        'Dosificación floculante PAM',
        'Sedimentación lamelar rápida',
        'Flotación DAF aire disuelto'
      ],
      applications: ['Clarificadores', 'Espesadores', 'Circuitos agua proceso', 'DLE litio'],
      benefits: [
        'Recuperación agua proceso',
        'Cumplimiento ambiental',
        'Reducción consumo agua',
        'Optimización sistemas'
      ]
    }
  ]

  // Touch and mouse handlers for swipe functionality
  const handleStart = (clientX) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = (clientX) => {
    if (!isDragging) return
    const deltaX = clientX - startX
    setTranslateX(deltaX)
  }

  const handleEnd = () => {
    if (!isDragging) return
    
    const threshold = 100 // Minimum distance for swipe
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      } else if (translateX < 0 && currentIndex < processes.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
    }
    
    setIsDragging(false)
    setTranslateX(0)
  }

  // Mouse events
  const handleMouseDown = (e) => handleStart(e.clientX)
  const handleMouseMove = (e) => handleMove(e.clientX)
  const handleMouseUp = () => handleEnd()

  // Touch events
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX)
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX)
  const handleTouchEnd = () => handleEnd()

  const nextProcess = () => {
    setCurrentIndex((prev) => (prev + 1) % processes.length)
  }

  const prevProcess = () => {
    setCurrentIndex((prev) => (prev - 1 + processes.length) % processes.length)
  }

  const currentProcess = processes[currentIndex]

  return (
    <section className="relative py-12 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Servicios Móviles para Procesos LIX/SX/EW
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Soluciones especializadas de filtración y separación sólido-líquido con equipos móviles certificados ex.proof
          </p>
        </div>

        {/* Mobile-First Swipeable Cards Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on Mobile */}
          <button
            onClick={prevProcess}
            disabled={currentIndex === 0}
            className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            suppressHydrationWarning
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextProcess}
            disabled={currentIndex === processes.length - 1}
            className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            suppressHydrationWarning
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Swipeable Card Container */}
          <div
            ref={containerRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`
              }}
            >
              {processes.map((process, index) => (
                <div key={process.id} className="w-full flex-shrink-0 px-3">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
                    {/* Header with Gradient */}
                    <div className={`bg-gradient-to-r ${process.color} p-4 lg:p-6 text-white relative overflow-hidden`}>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                              <process.icon size={20} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{process.title}</h3>
                              <p className="text-white/80 text-xs">{process.subtitle}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-white/60">Proceso</div>
                            <div className="text-lg font-bold">{index + 1}/{processes.length}</div>
                          </div>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">{process.description}</p>
                      </div>
                      
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 opacity-10">
                        <div className="w-24 h-24 transform rotate-12">
                          <process.icon size={96} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 lg:p-6">
                      {/* Key Metrics */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Growth size={16} className="text-emerald-600 mr-2" />
                          Métricas Clave
                        </h4>
                        <div className="grid grid-cols-3 gap-3">
                          {Object.entries(process.keyMetrics).map(([key, value], idx) => (
                            <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                              <div className="text-lg font-bold text-emerald-600">{value}</div>
                              <div className="text-xs text-gray-600 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process Steps - More Visual */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Time size={16} className="text-emerald-600 mr-2" />
                          Pasos del Proceso
                        </h4>
                        <div className="relative">
                          {/* Process Flow Line */}
                          <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-emerald-500 lg:hidden"></div>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {process.steps.map((step, idx) => (
                              <div key={idx} className="relative flex items-start p-3 bg-gradient-to-r from-emerald-50 to-emerald-25 rounded-lg border border-emerald-100">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-md">
                                  {idx + 1}
                                </div>
                                <div className="flex-1">
                                  <span className="text-gray-700 text-sm font-medium">{step}</span>
                                  {idx < process.steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                                      <ArrowRight size={16} className="text-emerald-400" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Applications and Benefits */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Security size={16} className="text-emerald-600 mr-2" />
                            Aplicaciones
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {process.applications.map((app, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <ArrowRight size={16} className="text-emerald-600 mr-2" />
                            Beneficios
                          </h4>
                          <ul className="space-y-1">
                            {process.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-xs text-gray-700">
                                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {processes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                suppressHydrationWarning
              />
            ))}
          </div>

          {/* Mobile Navigation Hints */}
          <div className="lg:hidden mt-4 text-center">
            <p className="text-sm text-gray-500">
              👆 Desliza horizontalmente para explorar procesos
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">70</div>
              <div className="text-gray-600 text-sm">Ton/día Capacidad</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
              <div className="text-gray-600 text-sm">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">120</div>
              <div className="text-gray-600 text-sm">m³/día Agua Clarificada</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">Ex.proof</div>
              <div className="text-gray-600 text-sm">Certificación Equipos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
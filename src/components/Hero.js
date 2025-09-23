// src/components/Hero.js
'use client'
import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Activity, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

// Move achievements outside component to avoid dependency issues
const achievements = [
  {
    value: "80%",
    label: "Reducción de Lodos",
    description: "Volúmenes a disponer",
    icon: TrendingUp
  },
  {
    value: "+50%",
    label: "Capacidad Concentrados",
    description: "Procesamiento concentrados",
    icon: Zap
  },
  {
    value: "50%",
    label: "Reducción Arrastres",
    description: "Tratamiento orgánico",
    icon: Beaker
  },
  {
    value: "<10ppm",
    label: "Retención Sólidos",
    description: "En orgánico SX",
    icon: Activity
  }
]

export default function Hero() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0)

  // Simple cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % 4)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
      <div className="relative max-w-8xl mx-auto px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Content - 6 columns */}
          <div className="lg:col-span-6 max-w-4xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-[-0.02em]">
                  <span className="gradient-text-animated">Optimiza tus</span>
                  <span className="block text-emerald-300 font-black relative">
                    Operaciones
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-100/80 mt-2">Sin Parar la Planta</span>
                </h1>

                <div className="space-y-4 max-w-3xl">
                  <p className="text-lg lg:text-xl text-emerald-50/90 leading-[1.4] font-medium">
                    <span className="text-white font-semibold">Maximiza producción</span> mientras resuelves cuellos de botella críticos sin parar operaciones.
                  </p>

                  <div className="inline-flex items-center px-4 py-2 bg-emerald-400/10 rounded-lg border border-emerald-400/20">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-emerald-200 font-semibold text-sm tracking-wide">CERO CAPEX • CERO MODIFICACIONES • MÁXIMO ROI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={(e) => handleContactClick(e, router, pathname)}
                  className="group relative bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-emerald-50 flex items-center justify-center"
                >
                  <span className="relative z-10">Contactar Especialista</span>
                  <ArrowRight className="relative z-10 w-5 h-5 ml-3" />
                </button>

                <button
                  onClick={() => router.push('/services')}
                  className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  <span className="relative z-10">Ver Casos de Éxito</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visual - 6 columns */}
          <div className="lg:col-span-6 lg:mt-0">
            <div className="space-y-4">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-800/40 to-emerald-900/60 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Beaker className="w-8 h-8 text-emerald-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Equipos Móviles TSF</h3>
                    <p className="text-emerald-300/80 text-sm">Separación sólido-líquido avanzada</p>
                  </div>
                </div>
              </div>

              {/* Cycling Metric Display */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-4 border border-emerald-400/20 shadow-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                    {React.createElement(achievements[currentMetricIndex].icon, {
                      className: "w-4 h-4 text-emerald-300"
                    })}
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">
                    {achievements[currentMetricIndex].value}
                  </div>
                </div>
                <div className="text-sm text-emerald-100 font-semibold mb-1">
                  {achievements[currentMetricIndex].label}
                </div>
                <div className="text-xs text-emerald-200/70">
                  {achievements[currentMetricIndex].description}
                </div>

                {/* Progress indicators */}
                <div className="flex space-x-1 mt-3">
                  {achievements.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-700 ${
                        index === currentMetricIndex
                          ? 'w-6 bg-emerald-400'
                          : 'w-1 bg-emerald-400/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
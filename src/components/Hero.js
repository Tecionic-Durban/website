// src/components/Hero.js
'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Beaker, Droplets, Factory, Waves, Target, CheckCircle, ArrowRight, Play } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

// Move achievements outside component to avoid SSR dependency issues
const achievements = [
  {
    value: "80%",
    label: "Reducción de Lodos",
    description: "Volúmenes a disponer",
    icon: Droplets,
    color: "text-emerald-400"
  },
  {
    value: "+50%",
    label: "Capacidad Concentrados",
    description: "Procesamiento concentrados",
    icon: Factory,
    color: "text-blue-400"
  },
  {
    value: "50%",
    label: "Reducción Arrastres",
    description: "Tratamiento orgánico",
    icon: Waves,
    color: "text-purple-400"
  },
  {
    value: "<10ppm",
    label: "Retención Sólidos",
    description: "En orgánico SX",
    icon: Target,
    color: "text-green-400"
  }
]

export default function Hero() {
  const router = useRouter()
  const pathname = usePathname()
  const heroRef = useRef(null)
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0)

  // Progressive disclosure on scroll/mount
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
            }, index * 150) // Staggered revelation
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Cycle through metrics every 7 seconds - SSR safe
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % achievements.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating elements with enhanced animations */}
        <div className="absolute top-20 left-[8%] w-40 h-40 bg-gradient-to-br from-emerald-600/15 to-emerald-700/10 rounded-full opacity-20 animate-float-slow blur-sm"></div>
        <div className="absolute top-32 right-[12%] w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-emerald-600/15 rounded-full opacity-25 animate-float-medium blur-sm"></div>
        <div className="absolute bottom-40 left-[3%] w-36 h-36 bg-gradient-to-br from-emerald-400/15 to-emerald-500/10 rounded-full opacity-18 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-32 right-[8%] w-28 h-28 bg-gradient-to-br from-emerald-600/12 to-emerald-700/8 rounded-full opacity-15 animate-float-medium blur-sm"></div>

        {/* Secondary texture elements */}
        <div className="absolute top-1/4 left-[20%] w-24 h-24 bg-gradient-to-br from-emerald-400/8 to-emerald-500/5 rounded-full opacity-12 animate-float-slow blur-md"></div>
        <div className="absolute top-3/4 right-[25%] w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-emerald-600/7 rounded-full opacity-10 animate-float-medium blur-md"></div>

        {/* Geometric accent elements */}
        <div className="absolute top-16 right-[20%] w-16 h-16 bg-emerald-400/5 rotate-45 opacity-8 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-24 left-[15%] w-12 h-12 bg-emerald-500/6 rotate-12 opacity-6 animate-float-medium blur-sm"></div>

        {/* Enhanced gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-900/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-800/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-emerald-900/5 to-transparent"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-8 py-8 lg:py-12" style={{paddingBottom: 'calc(3rem + 30px)'}}>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Content - 6 columns */}
          <div className="lg:col-span-6 max-w-4xl">
            {/* Eyebrow + Headline Complex */}
            <div className="space-y-6">
              {/* Layered Headline Structure */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-[-0.02em] enterprise-slide-up stagger-1">
                  <span className="gradient-text-animated">Optimiza tus</span>
                  <span className="block text-emerald-300 font-black relative enterprise-slide-up stagger-2">
                    Operaciones
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-60 enterprise-scale-in stagger-3"></div>
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-100/80 mt-2 enterprise-slide-up stagger-4">Sin Parar la Planta</span>
                </h1>

                <div className="space-y-4 max-w-3xl">
                  <p className="text-lg lg:text-xl text-emerald-50/90 leading-[1.4] font-medium progressive-reveal">
                    <span className="text-white font-semibold gradient-text-animated">Maximiza producción</span> mientras resuelves cuellos de botella críticos sin parar operaciones.
                  </p>

                  <div className="inline-flex items-center px-4 py-2 bg-emerald-400/10 rounded-lg border border-emerald-400/20 sophisticated-hover layered-shadow progressive-reveal">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 enterprise-pulse" />
                    <span className="text-emerald-200 font-semibold text-sm tracking-wide">CERO CAPEX • CERO MODIFICACIONES • MÁXIMO ROI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Trust Architecture - Compact */}
            <div className="mt-6 space-y-4">
              {/* Client Social Proof - Streamlined */}
              <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10 backdrop-blur-sm sophisticated-hover progressive-reveal">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 enterprise-pulse" />
                    <div>
                      <div className="text-xs font-semibold text-emerald-300">BHP • Codelco • Antofagasta • Anglo American</div>
                      <div className="text-xs text-emerald-200/70">23+ años experiencia enterprise</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic CTAs - Compact */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={(e) => handleContactClick(e, router, pathname)}
                  className="group relative bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Contactar Especialista</span>
                  <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => router.push('/services')}
                  className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover"
                >
                  <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10">Ver Casos de Éxito</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visual + Cycling Metrics - 6 columns - Expanded */}
          <div className="lg:col-span-6 lg:mt-0">
            <div className="space-y-4">
              {/* Equipment Visual - Compact */}
              <div className="relative">
                <div className="aspect-[3/2] bg-gradient-to-br from-emerald-800/40 to-emerald-900/60 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {/* Enhanced equipment placeholder */}
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 magnetic-hover">
                      <Beaker className="w-8 h-8 text-emerald-300 enterprise-pulse" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Equipos Móviles TSF</h3>
                    <p className="text-emerald-300/80 text-sm">Separación sólido-líquido avanzada</p>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300 ripple-effect">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Metric Display - Cycling */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg p-3 border border-emerald-400/20 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 transition-opacity duration-1000"></div>

                {/* Progress indicators - top right */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  {achievements.map((_, index) => (
                    <div
                      key={index}
                      className={`h-0.5 rounded-full transition-all duration-700 ${
                        index === currentMetricIndex
                          ? 'w-4 bg-emerald-400'
                          : 'w-1 bg-emerald-400/30'
                      }`}
                    />
                  ))}
                </div>

                <div className="relative z-10 transition-all duration-1000 transform pr-6">
                  {/* Horizontal layout: Icon + Big KPI + Label & Description */}
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                      {React.createElement(achievements[currentMetricIndex].icon, {
                        className: "w-4 h-4 text-emerald-300 enterprise-pulse"
                      })}
                    </div>
                    <div className="text-4xl font-black text-white tracking-tight gradient-text-animated">
                      {achievements[currentMetricIndex].value}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-emerald-100 font-semibold leading-tight">
                        {achievements[currentMetricIndex].label}
                      </div>
                      <div className="text-xs text-emerald-200/70 leading-tight">
                        {achievements[currentMetricIndex].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgb(255,255,255)"></path>
        </svg>
      </div>
    </section>
  )
}
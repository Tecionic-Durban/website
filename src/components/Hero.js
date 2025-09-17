// src/components/Hero.js
'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Beaker, Activity, TrendingUp, Zap, CheckCircle, ArrowRight, Play } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

export default function Hero() {
  const router = useRouter()
  const pathname = usePathname()
  const heroRef = useRef(null)

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

  // Historical performance achievements
  const achievements = [
    {
      value: "80%",
      label: "Reducción de Lodos",
      description: "Volúmenes a disponer",
      icon: TrendingUp,
      color: "text-emerald-400"
    },
    {
      value: "+50%",
      label: "Capacidad Concentrados",
      description: "Procesamiento concentrados",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      value: "50%",
      label: "Reducción Arrastres",
      description: "Tratamiento orgánico",
      icon: Beaker,
      color: "text-purple-400"
    },
    {
      value: "<10ppm",
      label: "Retención Sólidos",
      description: "En orgánico SX",
      icon: Activity,
      color: "text-green-400"
    }
  ]

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Clean Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating elements with enhanced animations */}
        <div className="absolute top-20 left-[8%] w-40 h-40 bg-gradient-to-br from-emerald-600/15 to-emerald-700/10 rounded-full opacity-20 animate-float-slow blur-sm"></div>
        <div className="absolute top-32 right-[12%] w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-emerald-600/15 rounded-full opacity-25 animate-float-medium blur-sm"></div>
        <div className="absolute bottom-40 left-[3%] w-36 h-36 bg-gradient-to-br from-emerald-400/15 to-emerald-500/10 rounded-full opacity-18 animate-float-slow blur-sm"></div>


        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-900/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-800/5 to-transparent"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-16 gap-8 lg:gap-16 items-start">
          {/* Content - 9 columns */}
          <div className="lg:col-span-9 max-w-4xl">
            {/* Eyebrow + Headline Complex */}
            <div className="space-y-8">
              {/* Layered Headline Structure */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.85] tracking-[-0.02em] enterprise-slide-up stagger-1">
                  <span className="gradient-text-animated">Optimiza tus</span>
                  <span className="block text-emerald-300 font-black relative enterprise-slide-up stagger-2">
                    Operaciones
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-60 enterprise-scale-in stagger-3"></div>
                  </span>
                  <span className="block text-4xl lg:text-5xl font-bold text-emerald-100/80 mt-4 enterprise-slide-up stagger-4">Sin Parar la Planta</span>
                </h1>

                <div className="space-y-6 max-w-3xl">
                  <p className="text-xl lg:text-2xl text-emerald-50/90 leading-[1.5] font-medium progressive-reveal">
                    Equipos móviles de separación sólido-líquido que <span className="text-white font-semibold gradient-text-animated">eliminan cuellos de botella</span>,
                    reducen costos operacionales y aumentan capacidad productiva.
                  </p>

                  <div className="inline-flex items-center px-4 py-2 bg-emerald-400/10 rounded-lg border border-emerald-400/20 sophisticated-hover layered-shadow progressive-reveal">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 enterprise-pulse" />
                    <span className="text-emerald-200 font-semibold text-sm tracking-wide">CERO CAPEX • CERO MODIFICACIONES • MÁXIMO ROI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Trust Architecture - Compact */}
            <div className="mt-8 space-y-5">
              {/* Client Social Proof - Compact */}
              <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/10 backdrop-blur-sm sophisticated-hover layered-shadow progressive-reveal">

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center magnetic-hover">
                        <CheckCircle className="w-3 h-3 text-emerald-400 enterprise-pulse" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-300 tracking-wide">CLIENTES ENTERPRISE</div>
                        <div className="text-xs text-emerald-200/70">BHP • Codelco • Antofagasta • Anglo American</div>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-emerald-600/30"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center magnetic-hover">
                        <TrendingUp className="w-3 h-3 text-emerald-400 enterprise-pulse" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-emerald-300 gradient-text-animated">23+</div>
                        <div className="text-xs text-emerald-200/70">años experiencia</div>
                      </div>
                    </div>
                  </div>
                  {/* Strategic three ball brand accent */}
                  <div className="flex items-center space-x-1 opacity-40">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full enterprise-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>

              {/* Strategic CTAs - Compact */}
              <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Visual + Metrics - 7 columns - Optimized */}
          <div className="lg:col-span-7 lg:mt-0">
            <div className="grid grid-rows-2 gap-6 h-full">
              {/* Equipment Visual - Compact */}
              <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/15 layered-shadow-hover sophisticated-hover progressive-reveal">
                {/* Compact Brand Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white gradient-text-animated">Equipos Móviles TSF</h3>
                    <p className="text-emerald-200/70 text-xs">Tecnología de separación avanzada</p>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
                </div>

                <div className="aspect-[2/1] bg-gradient-to-br from-emerald-800/40 to-emerald-900/60 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {/* Compact sophisticated placeholder */}
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 magnetic-hover">
                      <Beaker className="w-8 h-8 text-emerald-300 enterprise-pulse" />
                    </div>
                    <p className="text-emerald-300/90 text-xs font-medium">Separación sólido-líquido móvil</p>
                  </div>

                  {/* Compact play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300 ripple-effect">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics - Compact */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/20 shadow-2xl progressive-reveal">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-white">Resultados Comprobados</h3>
                    <p className="text-emerald-200/70 text-xs">Datos históricos verificados</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`group relative bg-white/10 rounded-xl p-4 border border-emerald-400/20 hover:bg-white/15 hover:border-emerald-400/40 transition-all duration-500 backdrop-blur-sm overflow-hidden sophisticated-hover layered-shadow progressive-reveal stagger-${index + 1}`}>
                      {/* Subtle background animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-6 h-6 bg-emerald-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 magnetic-hover">
                            <achievement.icon className="w-3 h-3 text-emerald-300 enterprise-pulse" />
                          </div>
                          <div className="text-2xl font-black text-white tracking-tight group-hover:scale-105 transition-transform duration-300 gradient-text-animated">
                            {achievement.value}
                          </div>
                        </div>
                        <div className="text-xs text-emerald-100 font-semibold">
                          {achievement.label}
                        </div>
                        <div className="text-xs text-emerald-200/60 mt-1">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-emerald-400/20">
                  <div className="flex items-center justify-center space-x-2 progressive-reveal">
                    <CheckCircle className="w-3 h-3 text-emerald-400 enterprise-pulse" />
                    <span className="text-xs text-emerald-300/90 font-medium">Datos verificados por clientes</span>
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
// src/components/Hero.js
'use client'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { Beaker, Activity, TrendingUp, Zap, CheckCircle, ArrowRight, Play } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'

export default function Hero() {
  const router = useRouter()
  const pathname = usePathname()

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
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-emerald-600 rounded-full opacity-10 animate-float-slow"></div>
        <div className="absolute top-40 right-[15%] w-24 h-24 bg-emerald-500 rounded-full opacity-15 animate-float-medium"></div>
        <div className="absolute bottom-32 left-[5%] w-28 h-28 bg-emerald-400 rounded-full opacity-12 animate-float-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Problem-Focused Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                Optimiza tus Operaciones
                <span className="block text-emerald-300 font-extrabold">Sin Parar la Planta</span>
              </h1>

              <p className="text-lg lg:text-xl text-emerald-100/90 leading-[1.6] max-w-2xl font-medium">
                Equipos móviles de separación sólido-líquido que eliminan cuellos de botella,
                reducen costos y aumentan capacidad <span className="font-bold text-emerald-300">sin CAPEX ni modificaciones</span>.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-emerald-200/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium tracking-wide">BHP • Codelco • Antofagasta</span>
              </div>
              <div className="w-px h-5 bg-emerald-600/40"></div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-emerald-300">23+</span>
                <span className="text-sm">años experiencia</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={(e) => handleContactClick(e, router, pathname)}
                className="bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-200 hover:bg-emerald-50 hover:shadow-2xl shadow-xl flex items-center justify-center group transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Contactar Especialista
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => router.push('/services')}
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
              >
                Ver Casos de Éxito
              </button>
            </div>
          </div>

          {/* Visual - 5 columns */}
          <div className="lg:col-span-5 lg:mt-24">
            {/* Hero Visual Container */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 shadow-2xl">
              {/* Main Visual Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for equipment image */}
                <div className="text-center">
                  <Beaker className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
                  <p className="text-emerald-200 text-sm">Equipos Móviles de Filtración</p>
                </div>

                {/* Play button overlay for future video */}
                <div className="absolute inset-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Enhanced Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-5 border border-emerald-400/15 hover:bg-white/15 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm group">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-5 h-5 bg-emerald-500/25 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <achievement.icon className="w-3 h-3 text-emerald-300" />
                      </div>
                      <div className="text-xl font-black text-white tracking-tight">
                        {achievement.value}
                      </div>
                    </div>
                    <div className="text-xs text-emerald-100/80 font-semibold tracking-wide uppercase">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compact trust indicator */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-xs text-emerald-300/80 font-medium tracking-wide">
                  <CheckCircle className="w-3 h-3 mr-2" />
                  Resultados verificados
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
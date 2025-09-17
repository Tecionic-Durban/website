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
      value: "50%",
      label: "Aumento Capacidad",
      description: "Plantas concentradoras",
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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Problem-Focused Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-800/50 rounded-full text-emerald-200 text-sm font-medium border border-emerald-600/30">
                <CheckCircle className="w-4 h-4 mr-2" />
                Soluciones Móviles Sin Interrupciones
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Optimiza tus Operaciones
                <span className="block text-emerald-300">Sin Parar la Planta</span>
              </h1>

              <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed max-w-2xl">
                Equipos móviles de separación sólido-líquido que eliminan cuellos de botella,
                reducen costos y aumentan capacidad <span className="font-semibold text-emerald-300">sin CAPEX ni modificaciones</span>.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-emerald-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">BHP • Codelco • Antofagasta</span>
              </div>
              <div className="w-px h-6 bg-emerald-600"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-emerald-300">23+</span>
                <span>años experiencia</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => router.push('/services')}
                className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-emerald-50 hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                Ver Nuestros Servicios
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => handleContactClick(e, router, pathname)}
                className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-300 hover:text-emerald-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Solicitar Consulta
              </button>
            </div>
          </div>

          {/* Visual - 5 columns */}
          <div className="lg:col-span-5 relative">
            {/* Hero Visual Container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/30">
              {/* Main Visual Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for equipment image */}
                <div className="text-center">
                  <Beaker className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
                  <p className="text-emerald-200 text-sm">Equipos Móviles de Filtración</p>
                </div>

                {/* Play button overlay for future video */}
                <div className="absolute inset-0 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-emerald-200">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Sin Permisos Nuevos</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-200">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Instalación 24-48h</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-200">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Operación Continua</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-200">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>ROI Inmediato</span>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-600/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Achievement Metrics */}
        <div className="mt-20 pt-12 border-t border-emerald-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-emerald-100 mb-2">Resultados Comprobados</h3>
            <p className="text-emerald-300">Mejores casos documentados en operaciones reales</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-600/20 hover:border-emerald-500/40 transition-all duration-300 hover:bg-white/10 text-center">
                  <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-4`} />
                  <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                    {achievement.value}
                  </div>
                  <div className="text-emerald-100 font-medium mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-emerald-300">
                    {achievement.description}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-emerald-400 to-emerald-600 blur-xl -z-10"></div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-emerald-300/60">
              * Resultados variables según condiciones específicas de cada operación
            </p>
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
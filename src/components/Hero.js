// src/components/Hero.js
'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { Beaker, Activity, TrendingUp, Zap } from 'lucide-react'
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
      color: "text-emerald-300"
    },
    {
      value: "50%",
      label: "Aumento Capacidad",
      description: "Plantas concentradoras",
      icon: Zap,
      color: "text-blue-300"
    },
    {
      value: "50%",
      label: "Reducción Arrastres",
      description: "Tratamiento orgánico",
      icon: Beaker,
      color: "text-purple-300"
    },
    {
      value: "<10ppm",
      label: "Retención Sólidos",
      description: "En orgánico SX",
      icon: Activity,
      color: "text-green-300"
    }
  ]
  return (
    <>
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Background Balls - Branded Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large ball - top left */}
          <div 
            className="absolute w-32 h-32 bg-emerald-600 rounded-full opacity-10 animate-float-slow"
            style={{ top: '15%', left: '8%' }}
          ></div>
          
          {/* Medium ball - top right */}
          <div 
            className="absolute w-24 h-24 bg-emerald-500 rounded-full opacity-15 animate-float-medium"
            style={{ top: '25%', right: '15%' }}
          ></div>
          
          {/* Small ball - center left */}
          <div 
            className="absolute w-16 h-16 bg-emerald-400 rounded-full opacity-20 animate-float-fast"
            style={{ top: '45%', left: '5%' }}
          ></div>
          
          {/* Large ball - bottom right */}
          <div 
            className="absolute w-28 h-28 bg-emerald-600 rounded-full opacity-12 animate-float-slow"
            style={{ bottom: '20%', right: '10%' }}
          ></div>
          
          {/* Medium ball - bottom center */}
          <div 
            className="absolute w-20 h-20 bg-emerald-500 rounded-full opacity-18 animate-float-medium"
            style={{ bottom: '10%', left: '35%' }}
          ></div>
        </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 industrial-shimmer">
                  <span className="text-white text-lg font-bold">TD</span>
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">Tec-Ionic Durban</h1>
                  <p className="text-emerald-200 text-lg">Filtración y Separación Sólido-Líquido Móvil</p>
                </div>
              </div>
              
              <div className="w-24 h-1 bg-emerald-400 mb-6"></div>
              
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Especialistas en <span className="font-semibold text-emerald-300">separación sólido-líquido móvil</span> para plantas SX/EW.
                Optimizamos operaciones mineras con equipos móviles de alta capacidad que no requieren modificaciones de planta ni permisos ambientales adicionales.
                <span className="font-semibold text-emerald-300"> Soluciones rápidas, flexibles y escalables</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/services')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                suppressHydrationWarning
              >
                Ver Servicios
              </button>
              <button
                onClick={(e) => handleContactClick(e, router, pathname)}
                className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-300 hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                suppressHydrationWarning
              >
                Contactar
              </button>
            </div>
            
            {/* Performance Achievements */}
            <div className="pt-8 border-t border-emerald-700">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-5 h-5 text-emerald-400 mr-3" />
                <div>
                  <span className="text-lg text-emerald-100 font-semibold">Resultados Comprobados</span>
                  <p className="text-sm text-emerald-300">Mejores casos documentados en operaciones reales</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:bg-white/15">
                      <div className="flex items-center justify-between mb-3">
                        <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                        <span className="text-xs text-emerald-300 bg-emerald-800/40 px-2 py-1 rounded-full">
                          Máximo
                        </span>
                      </div>
                      <div className={`text-2xl font-bold ${achievement.color} mb-1`}>
                        {achievement.value}
                      </div>
                      <div className="text-sm font-medium text-emerald-100 mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-emerald-300">
                        {achievement.description}
                      </div>
                    </div>

                    {/* Subtle glow effect on hover */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-r from-emerald-400 to-emerald-600 blur-xl -z-10`}></div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-emerald-300/70">
                  * Resultados variables según condiciones específicas de cada operación
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
              <div className="aspect-video bg-emerald-800/50 rounded-xl mb-6 flex items-center justify-center">
                <Beaker className="w-16 h-16 text-emerald-300" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-100">
                  Lo que Nuestros Clientes Logran
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-emerald-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Reducen Costos Operacionales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Maximizan Recuperación Cu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Eliminan Paradas de Planta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Optimizan Flujo de Caja</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-600/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgb(255,255,255)"></path>
        </svg>
      </div>
      </section>
    </>
  )
}
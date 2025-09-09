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
  
  // Live metrics state
  const [liveMetrics, setLiveMetrics] = useState({
    litersProcessed: 2847350,
    activeProjects: 12,
    uptime: 99.7,
    efficiencyGain: 15.3
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        litersProcessed: prev.litersProcessed + Math.floor(Math.random() * 500) + 100,
        activeProjects: Math.floor(Math.random() * 3) + 11, // 11-13 projects
        uptime: 99.5 + Math.random() * 0.5, // 99.5-100%
        efficiencyGain: 14.8 + Math.random() * 1, // 14.8-15.8%
      }))
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])
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
                Especialistas en servicios de filtración, deshidratación de sólidos y tratamiento de orgánico 
                en plantas SX con más de <span className="font-semibold text-emerald-300">dos décadas de experiencia</span>. 
                Soluciones móviles que aportan valor, sostenibilidad y seguridad operacional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" suppressHydrationWarning>
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
            
            {/* Live Metrics Dashboard */}
            <div className="pt-8 border-t border-emerald-700">
              <div className="flex items-center mb-4">
                <Activity className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-sm text-emerald-200 font-medium">Métricas en Tiempo Real</span>
                <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-emerald-800/30 rounded-lg p-4 backdrop-blur-sm border border-emerald-600/20">
                  <div className="flex items-center justify-between mb-2">
                    <Beaker className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-300">Este Mes</span>
                  </div>
                  <div className="text-xl font-bold text-white transition-all duration-500">
                    {(liveMetrics.litersProcessed / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-xs text-emerald-200">Litros Procesados</div>
                </div>

                <div className="bg-emerald-800/30 rounded-lg p-4 backdrop-blur-sm border border-emerald-600/20">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-300">Activos</span>
                  </div>
                  <div className="text-xl font-bold text-white transition-all duration-500">
                    {liveMetrics.activeProjects}
                  </div>
                  <div className="text-xs text-emerald-200">Proyectos Activos</div>
                </div>

                <div className="bg-emerald-800/30 rounded-lg p-4 backdrop-blur-sm border border-emerald-600/20">
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-300">Tiempo Real</span>
                  </div>
                  <div className="text-xl font-bold text-white transition-all duration-500">
                    {liveMetrics.uptime.toFixed(1)}%
                  </div>
                  <div className="text-xs text-emerald-200">Tiempo Operativo</div>
                </div>

                <div className="bg-emerald-800/30 rounded-lg p-4 backdrop-blur-sm border border-emerald-600/20">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-300">Promedio</span>
                  </div>
                  <div className="text-xl font-bold text-white transition-all duration-500">
                    +{liveMetrics.efficiencyGain.toFixed(1)}%
                  </div>
                  <div className="text-xs text-emerald-200">Mejora Eficiencia</div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-emerald-300 opacity-75">
                  Datos actualizados cada 3 segundos • Sistema de monitoreo 24/7
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
                  Servicios Especializados
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-emerald-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Filtros Prensa Móviles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Tratamiento Orgánico</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Centrífugas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Deshidratación Sólidos</span>
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
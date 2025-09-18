'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'

export default function FiltrationPage() {
  const router = null // Will be imported when needed
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const caseStudiesRef = useRef(null)

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

    const refs = [heroRef, overviewRef, processRef, benefitsRef, caseStudiesRef]
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const processSteps = [
    {
      step: '1',
      title: 'Conexión',
      description: 'Integración móvil con sistemas existentes de planta',
      icon: Truck
    },
    {
      step: '2',
      title: 'Filtración',
      description: 'Separación borras SX mediante filtros prensa móviles',
      icon: Filter
    },
    {
      step: '3',
      title: 'Deshidratación',
      description: 'Reducción humedad hasta niveles transportables',
      icon: Settings
    },
    {
      step: '4',
      title: 'Recuperación',
      description: 'Orgánico recuperado y torta seca lista para disposición',
      icon: TrendingUp
    }
  ]

  const specifications = {
    pressure: 'Filtración: 4-16 bar | Lavado: 2-8 bar | Secado: hasta 20 bar',
    cycle: 'Ciclos completos: 90-180 min según material',
    moisture: 'Reducción humedad: 12-15% inicial → 3-8% final',
    filtrate: 'Turbidez filtrado: <50 NTU | TSS: <100 mg/L',
    plates: 'Configuraciones: 1.2-2.5 m² por placa | 20-80 placas/prensa',
    automation: 'Control PLC con HMI | Registro datos tiempo real',
    temperature: 'Operación: -10°C a +60°C ambiente',
    solids: 'Concentración alimentación: 15-35% p/p | Granulometría: >5 μm'
  }

  const useCases = [
    {
      industry: 'Cobre',
      application: 'Filtración de borras en plantas SX',
      challenge: 'Acumulación de borras causando crud runs y alta pérdida de orgánico',
      solution: 'Filtros prensa móviles con 90% recuperación orgánico',
      result: 'Eliminación de crud runs y reducción 60% pérdidas',
      client: 'Radomiro Tomic (Codelco)',
      savings: 'Ahorro significativo solvente'
    },
    {
      industry: 'Zinc',
      application: 'Control de sólidos en circuitos SX-Zn',
      challenge: 'Mayor abrasividad y sensibilidad orgánica extrema',
      solution: 'Filtros adaptados a densidades Zn',
      result: 'Manejo eficiente de fase sólida abrasiva',
      client: 'Desarrollo para sector zinc',
      savings: 'En prospección'
    },
    {
      industry: 'Petróleo',
      application: 'Deshidratación borras oleosas',
      challenge: 'Lodos con 67% aceite, 25% sólidos, 8% agua',
      solution: 'Filtros prensa para recuperación HC',
      result: '90% recuperación aceite, 70% reducción volumen',
      client: 'Refinerías nacionales',
      savings: 'Recuperación valor HC'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enterprise-Grade Filtration Hero */}
      <section ref={heroRef} className="relative bg-white overflow-hidden">
        {/* Strategic Enterprise Background Design System */}
        <div className="absolute inset-0">
          {/* Base gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white to-gray-50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-50/15 to-transparent"></div>

          {/* LEFT QUADRANT: Process Flow Visualization */}
          <div className="absolute top-1/4 left-[8%] opacity-15">
            {/* Main process flow line */}
            <div className="relative">
              {/* Horizontal process backbone */}
              <div className="w-64 h-1 bg-gradient-to-r from-emerald-600/30 via-emerald-500/40 to-emerald-400/30 rounded-full"></div>

              {/* Process nodes with data flow */}
              <div className="absolute -top-1 left-8 w-3 h-3 bg-emerald-600 rounded-full animate-pulse shadow-sm"></div>
              <div className="absolute -top-1 left-20 w-2 h-2 bg-emerald-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -top-1 left-32 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute -top-1 left-44 w-2 h-2 bg-emerald-600 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute -top-1 left-56 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

              {/* Vertical connection lines */}
              <div className="absolute top-2 left-8 w-0.5 h-8 bg-emerald-600/40"></div>
              <div className="absolute top-2 left-32 w-0.5 h-12 bg-emerald-400/40"></div>
              <div className="absolute top-2 left-56 w-0.5 h-6 bg-emerald-500/40"></div>

              {/* TSF Brand signature at process start */}
              <div className="absolute -top-2 -left-4 flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* TOP RIGHT: Equipment Silhouettes with Technical Context */}
          <div className="absolute top-1/6 right-[5%] opacity-[0.08]">
            <div className="relative w-48 h-64">
              {/* Main filtration unit */}
              <div className="absolute inset-x-8 top-8 bottom-16 bg-gradient-to-b from-emerald-600 to-emerald-700 shadow-2xl" style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 90% 10%, 90% 90%, 80% 100%, 20% 100%, 10% 90%, 10% 10%)'
              }}></div>

              {/* Technical connection grid */}
              <div className="absolute top-4 left-4 right-4 grid grid-cols-3 gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
              </div>

              {/* Input/Output connections */}
              <div className="absolute top-20 -left-8 w-12 h-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
              <div className="absolute bottom-20 -right-8 w-12 h-2 bg-gradient-to-l from-emerald-400 to-emerald-500 rounded-full"></div>

              {/* Process monitoring indicators */}
              <div className="absolute top-16 right-2 flex flex-col space-y-1">
                <div className="w-1 h-4 bg-emerald-400/60"></div>
                <div className="w-1 h-6 bg-emerald-500/60"></div>
                <div className="w-1 h-3 bg-emerald-600/60"></div>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT: Molecular Structure & Quality Control */}
          <div className="absolute bottom-1/4 left-[6%] opacity-[0.06]">
            <div className="relative w-40 h-32">
              {/* Central quality control hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full shadow-lg animate-pulse"></div>

              {/* Quality measurement nodes */}
              <div className="absolute top-4 left-8 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-4 right-8 w-3 h-3 bg-emerald-600 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute bottom-4 left-8 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute bottom-4 right-8 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1.6s'}}></div>

              {/* Connection matrix */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-0.5 bg-emerald-400/30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0.5 h-16 bg-emerald-400/30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-0.5 bg-emerald-400/30 transform rotate-45"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-0.5 bg-emerald-400/30 transform -rotate-45"></div>
              </div>

              {/* TSF brand constellation near quality control */}
              <div className="absolute -bottom-4 -right-8 flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>
          </div>

          {/* CENTER RIGHT: Floating Performance Indicators */}
          <div className="absolute top-1/2 right-[15%] opacity-20">
            <div className="relative">
              {/* Large performance orb */}
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-emerald-600/15 rounded-full blur-sm animate-float-slow shadow-lg"></div>

              {/* Satellite indicators */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400/25 to-emerald-500/20 rounded-full blur-sm animate-float-medium"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-600/15 to-emerald-700/10 rounded-full blur-md animate-float-slow" style={{animationDelay: '1s'}}></div>

              {/* Performance metrics constellation */}
              <div className="absolute top-2 right-2 flex items-center space-x-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.8s'}}></div>
              </div>
            </div>
          </div>


          {/* Advanced Technical Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>

          {/* Enterprise Molecular Structure Pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
            <div className="relative w-96 h-96">
              {/* Central processing hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-lg"></div>

              {/* Orbital processing nodes */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-16 transform -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-16 transform -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>

              {/* Secondary nodes */}
              <div className="absolute top-24 left-24 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-24 right-24 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute bottom-24 left-24 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
              <div className="absolute bottom-24 right-24 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>

              {/* Connection lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-emerald-400/30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-emerald-400/30 rotate-90"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-emerald-400/30 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-emerald-400/30 -rotate-45"></div>
            </div>
          </div>

          {/* Subtle Background Pattern matching Home Page */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          {/* Dynamic Three-Ball Constellation Pattern */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.9) 3px, transparent 3px),
              radial-gradient(circle at 23% 32%, rgba(16, 185, 129, 0.7) 2px, transparent 2px),
              radial-gradient(circle at 26% 34%, rgba(16, 185, 129, 0.5) 2.5px, transparent 2.5px),
              radial-gradient(circle at 70% 20%, rgba(16, 185, 129, 0.8) 3px, transparent 3px),
              radial-gradient(circle at 73% 22%, rgba(16, 185, 129, 0.6) 2px, transparent 2px),
              radial-gradient(circle at 76% 24%, rgba(16, 185, 129, 0.4) 2.5px, transparent 2.5px),
              radial-gradient(circle at 15% 80%, rgba(16, 185, 129, 0.7) 3px, transparent 3px),
              radial-gradient(circle at 18% 82%, rgba(16, 185, 129, 0.5) 2px, transparent 2px),
              radial-gradient(circle at 21% 84%, rgba(16, 185, 129, 0.3) 2.5px, transparent 2.5px)
            `,
            backgroundSize: '400px 400px, 400px 400px, 400px 400px, 400px 400px, 400px 400px, 400px 400px, 400px 400px, 400px 400px, 400px 400px'
          }}></div>
        </div>

        {/* Large Filter Icon - Premium Treatment */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <Filter className="w-full h-full text-emerald-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* TSF Branded Floating Elements */}
        <div className="absolute top-40 left-20 opacity-30">
          {/* TSF Three-Ball Signature */}
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Industrial Connection Lines */}
        <div className="absolute bottom-60 right-32 opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="w-6 h-0.5 bg-emerald-500"></div>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="w-6 h-0.5 bg-emerald-500"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* TSF Chemical Bond Pattern */}
        <div className="absolute top-2/3 left-1/3 opacity-25">
          <div className="relative w-8 h-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-1 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0.9s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-emerald-600/50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-emerald-600/50 rotate-90"></div>
          </div>
        </div>

        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-8xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-emerald-600 font-medium">Filtración & Deshidratación</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Disponible 24/7</span>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Hero Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-8 pt-12 pb-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Premium Content */}
            <div className="lg:col-span-7">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tight text-slate-900 leading-[0.9] mb-4">
                  Filtración y
                  <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Deshidratación
                  </span>
                </h1>
                <div className="text-2xl lg:text-3xl text-slate-600 font-light tracking-wide">
                  Móvil • Escalable • Alta Capacidad
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Sistemas especializados de separación sólido-líquido con capacidad hasta
                <span className="font-bold text-slate-900"> 130 toneladas por día</span>.
                <span className="text-emerald-600 font-medium"> Instalación rápida</span> en 24-48 horas
                sin modificar infraestructura existente.
              </p>

              {/* Enterprise CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 overflow-hidden hover:shadow-xl hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Evaluación Técnica</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 bg-white/50 hover:bg-white/80 backdrop-blur-sm">
                  <span>Descargar Especificaciones</span>
                  <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements - More Visible */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-600/15 to-emerald-700/8 rounded-full opacity-40 animate-float-slow blur-sm"></div>
                <div className="absolute bottom-8 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-emerald-600/12 rounded-full opacity-35 animate-float-medium blur-sm"></div>
                <div className="absolute top-1/3 right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/18 to-emerald-500/10 rounded-full opacity-30 animate-float-slow blur-md"></div>

                <div className="absolute bottom-1/4 right-8 opacity-25">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>

                {/* Data flow indicators */}
                <div className="absolute top-2/3 left-8 opacity-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid - Compact to fit in view */}
              <div className="relative z-10 grid grid-cols-1 gap-2">
                {[
                  {
                    icon: Shield,
                    title: "Certificación Ex.Proof",
                    description: "Seguridad certificada para atmósferas explosivas con el más alto nivel de protección industrial",
                    color: "emerald",
                    metric: "100%"
                  },
                  {
                    icon: Zap,
                    title: "Instalación Rápida",
                    description: "Sistema plug-and-play operativo en 24-48 horas sin modificaciones de infraestructura",
                    color: "blue",
                    metric: "24h"
                  },
                  {
                    icon: Truck,
                    title: "100% Móvil",
                    description: "Equipos completamente portátiles sin requerir instalaciones permanentes ni permisos adicionales",
                    color: "purple",
                    metric: "Móvil"
                  },
                  {
                    icon: BarChart3,
                    title: "Alta Capacidad",
                    description: "Procesamiento hasta 130 toneladas por día con tecnología de filtros prensa avanzados",
                    color: "slate",
                    metric: "130T"
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-3 border-0 shadow-sm hover:shadow-lg transition-all duration-300 progressive-reveal overflow-hidden hover:-translate-y-1">
                    {/* Atlassian-style color accent bar */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${feature.color}-400 to-${feature.color}-600 group-hover:w-2 transition-all duration-300`}></div>

                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Content with better hierarchy - More compact */}
                    <div className="relative z-10 ml-2">
                      {/* Icon with Atlassian-style treatment - Compact */}
                      <div className="flex items-start justify-between mb-2">
                        <div className={`relative p-1.5 bg-${feature.color}-100 rounded-md group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                          <feature.icon className={`w-3 h-3 text-${feature.color}-600`} />
                          {/* Subtle glow effect */}
                          <div className={`absolute inset-0 bg-${feature.color}-400/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>

                        {/* Metric badge with better styling - Smaller */}
                        <div className={`px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-${feature.color}-100 to-${feature.color}-50 text-${feature.color}-700 border border-${feature.color}-200/50`}>
                          {feature.metric}
                        </div>
                      </div>

                      {/* Typography with Atlassian hierarchy - Compact */}
                      <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {feature.description}
                      </p>

                      {/* Atlassian-style subtle CTA - Smaller */}
                      <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                        <span className="text-xs font-medium">Más información</span>
                        <ArrowRight className="w-2.5 h-2.5 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* Atlassian-style hover indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section - Progressive Disclosure */}
      <section ref={overviewRef} className="py-24 bg-gradient-to-br from-emerald-50/30 via-white to-gray-50 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball brand element */}
          <div className="absolute top-20 right-[12%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="flex items-center space-x-1 mr-3">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              Tecnología de Separación Móvil
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Sistemas de Filtración
              <span className="block text-emerald-600 gradient-text-animated">Móvil de Alta Capacidad</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Equipos especializados diseñados para el tratamiento eficiente de borras y sólidos en
              <span className="font-semibold text-emerald-600">plantas de procesamiento minero y petrolero</span>.
              Con certificación ex.proof para máxima seguridad en ambientes explosivos.
            </p>
          </div>

          {/* Service Page Key Benefits - Different Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20 progressive-reveal">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-emerald-100/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Tecnología Móvil sin Permisos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Despliegue inmediato de equipos de filtración de alta capacidad sin modificar permisos ambientales
                    ni construir instalaciones permanentes. Operativo en 24-48 horas.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-black text-emerald-600">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Instalación</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-black text-emerald-600">70+</div>
                  <div className="text-sm text-gray-600 font-medium">Ton/día</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-black text-emerald-600">0%</div>
                  <div className="text-sm text-gray-600 font-medium">CAPEX</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Certificación Ex.Proof</h4>
                <p className="text-emerald-100 text-sm">
                  Equipos certificados para ambientes explosivos con el más alto nivel de seguridad industrial.
                </p>
                <div className="mt-4 inline-flex items-center text-xs text-emerald-200">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Cumplimiento normativo total
                </div>
              </div>
            </div>
          </div>

          {/* Service Page Applications - Single Column Layout */}
          <div className="mb-20">
            <div className="text-center mb-12 progressive-reveal">
              <h3 className="text-4xl font-black text-gray-900 mb-4">Aplicaciones Industriales</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sistemas especializados para diferentes procesos industriales con tecnología adaptable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 progressive-reveal">
              {[
                { icon: Filter, title: "Plantas SX", description: "Filtración de borras en procesos de extracción por solventes", color: "bg-emerald-100 text-emerald-700" },
                { icon: Settings, title: "Refinerías", description: "Deshidratación de borras oleosas en procesos petroquímicos", color: "bg-blue-100 text-blue-700" },
                { icon: Target, title: "Metalurgia", description: "Tratamiento de sólidos en operaciones metalúrgicas", color: "bg-purple-100 text-purple-700" },
                { icon: TrendingUp, title: "Recuperación", description: "Optimización de recuperación de materiales valiosos", color: "bg-orange-100 text-orange-700" }
              ].map((app, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center mb-4`}>
                    <app.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{app.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
                </div>
              ))}
            </div>

            {/* Service Page Benefits */}
            <div className="mt-16 grid md:grid-cols-3 gap-6 progressive-reveal">
              {[
                { icon: Zap, title: "Sin Paradas", description: "Integración sin interrumpir operaciones", color: "bg-yellow-100 text-yellow-700" },
                { icon: Globe, title: "Total Movilidad", description: "Flexibilidad completa de ubicación", color: "bg-indigo-100 text-indigo-700" },
                { icon: Users, title: "Soporte 24/7", description: "Asistencia técnica continua", color: "bg-green-100 text-green-700" }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Enterprise Design */}
      <section ref={processRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div>

        <div className="max-w-8xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
              Proceso Optimizado
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Proceso de Filtración
              <span className="block text-emerald-600 gradient-text-animated">y Deshidratación</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Metodología probada de <span className="font-semibold text-emerald-600">4 etapas integradas</span>
              que garantiza máxima eficiencia en separación sólido-líquido.
            </p>
          </div>

          {/* Service Page Process Timeline - Vertical Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start space-x-8 progressive-reveal">
                    {/* Timeline node */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-emerald-100/50 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>

                      {/* Process indicator */}
                      <div className="mt-4 flex items-center text-emerald-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span className="text-sm font-medium">Paso {step.step} del proceso</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Specifications Panel */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl layered-shadow-hover border border-emerald-100/50 p-12 progressive-reveal">
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center space-x-3">
                <Settings className="w-6 h-6 text-emerald-600 enterprise-pulse" />
                <h3 className="text-3xl font-black text-gray-900 gradient-text-animated">Especificaciones Técnicas del Proceso</h3>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Parameters */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-5 h-5 text-emerald-600 mr-2 enterprise-pulse" />
                  Parámetros de Operación
                </h4>
                <div className="space-y-4">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="group flex items-start p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 leading-relaxed">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Control */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-5 h-5 text-emerald-600 mr-2 enterprise-pulse" />
                  Control de Calidad
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: Activity, title: "Monitoreo Continuo", description: "Presión, caudal, turbidez, sólidos", color: "text-emerald-600" },
                    { icon: BarChart3, title: "KPIs Tiempo Real", description: "Eficiencia filtración, throughput", color: "text-blue-600" },
                    { icon: Shield, title: "Certificación", description: "Ex.proof, ISO, trazabilidad completa", color: "text-purple-600" }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className={`w-5 h-5 ${item.color} enterprise-pulse`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                        <div className="text-sm text-gray-600 leading-relaxed">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className="py-24 bg-gradient-to-br from-emerald-50/30 via-white to-gray-50 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball brand element */}
          <div className="absolute top-20 right-[12%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
              Casos de Éxito Comprobados
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Resultados
              <span className="block text-emerald-600 gradient-text-animated">Verificados</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Implementaciones exitosas en <span className="font-semibold text-emerald-600">múltiples industrias</span>
              con resultados medibles y ROI comprobado.
            </p>
          </div>

          {/* Enterprise Case Studies Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl layered-shadow-hover border border-emerald-100/50 p-8 sophisticated-hover magnetic-hover progressive-reveal overflow-hidden">
                {/* Sophisticated background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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
                    <div className="w-4 h-4 bg-emerald-600 rounded-full enterprise-pulse"></div>
                    <h3 className="text-2xl font-black text-gray-900 gradient-text-animated">{useCase.industry}</h3>
                  </div>

                  <h4 className="text-lg font-bold text-emerald-600 mb-4">{useCase.application}</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Desafío:</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Solución:</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{useCase.solution}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Resultado:</h5>
                      <p className="text-emerald-600 text-sm font-semibold">{useCase.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">{useCase.client}</span>
                      <span className="text-xs text-emerald-600 font-semibold">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
        {/* Enterprise Background Elements */}
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

        <div className="relative max-w-8xl mx-auto px-8 py-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6 gradient-text-animated">
            ¿Necesita Soluciones de Filtración Móvil?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Diagnóstico técnico especializado y implementación rápida sin instalaciones permanentes.
            <span className="font-semibold text-emerald-300">Evaluación sin costo con nuestros expertos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Solicitar Evaluación</span>
              <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover">
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10">Descargar Especificaciones</span>
              <Play className="relative z-10 w-5 h-5 ml-3 enterprise-pulse" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
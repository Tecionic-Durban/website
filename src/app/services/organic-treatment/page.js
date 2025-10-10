'use client'

import { useState, useEffect, useRef } from 'react'
import { RefreshCw, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star, ChevronRight } from 'lucide-react'

export default function OrganicTreatmentServicePage() {
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
      title: 'Diagnóstico',
      description: 'Análisis orgánico contaminado en orgánico SX',
      additionalInfo: 'Análisis completo de calidad • Evaluación pérdidas actuales',
      icon: FlaskConical
    },
    {
      step: '2',
      title: 'Eficiencia Optimizada',
      description: 'Tratamiento del orgánico con tierras activadas',
      additionalInfo: 'Tiempo residencia optimizado • Dosificación óptima de tierras activadas',
      icon: RefreshCw
    },
    {
      step: '3',
      title: 'Purificación',
      description: 'Remoción tensoactivos y contaminantes',
      additionalInfo: 'Monitoreo continuo de calidad • Delta TIF y tiempos de separación de fase',
      icon: Shield
    },
    {
      step: '4',
      title: 'Retorno',
      description: 'Orgánico purificado reintegrado a circuito SX',
      additionalInfo: '',
      icon: TrendingUp
    }
  ]

  const useCases = [
    {
      industry: 'Cobre',
      application: 'Tratamiento orgánico SX plantas cobre',
      challenge: 'Entrainment acuoso y degradación extractante por contaminación',
      solution: 'Recuperación y purificación continua con coalescedor',
      result: 'Extensión vida útil orgánico 50% y mejora selectividad',
      client: 'BHP Operaciones Chile',
      savings: 'Cliente actual TSF'
    },
    {
      industry: 'Cobalto/Níquel',
      application: 'Recuperación extractante especializado',
      challenge: 'Alto costo extractantes específicos (Cyanex, D2EHPA)',
      solution: 'Sistema recuperación dedicado con tecnología selectiva',
      result: 'Ahorro significativo en reactivos especializados',
      client: 'Operaciones DRC/Indonesia',
      savings: 'Reducción 40% costo extractante'
    },
    {
      industry: 'Uranio',
      application: 'Control orgánico en SX uranio',
      challenge: 'Requisitos regulatorios estrictos y trazabilidad completa',
      solution: 'Tratamiento con documentación y monitoreo continuo',
      result: 'Cumplimiento 100% normativas nucleares',
      client: 'Kazatomprom/Cameco',
      savings: 'Cumplimiento regulatorio'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enterprise-Grade Organic Treatment Hero */}
      <section ref={heroRef} className="relative bg-white overflow-visible">
        {/* TSF Signature Organic Recovery Theme */}
        <div className="absolute inset-0 overflow-hidden" style={{
          maskImage: `linear-gradient(to left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 65%,
            rgba(0,0,0,0.15) 85%,
            rgba(0,0,0,0.05) 100%
          )`,
          WebkitMaskImage: `linear-gradient(to left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 65%,
            rgba(0,0,0,0.15) 85%,
            rgba(0,0,0,0.05) 100%
          )`
        }}>
          {/* Base gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-white to-gray-50/50"></div>

          {/* SIGNATURE SEPARATION PATTERN - Like molecular separation */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(34, 197, 94, 0.4) 49%, rgba(34, 197, 94, 0.4) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(34, 197, 94, 0.3) 49%, rgba(34, 197, 94, 0.3) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(34, 197, 94, 0.2) 49%, rgba(34, 197, 94, 0.2) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>

          {/* COALESCENCE PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.6'%3E%3Ccircle cx='20' cy='20' r='8'/%3E%3Ccircle cx='60' cy='20' r='8'/%3E%3Ccircle cx='40' cy='60' r='12'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>

          {/* ORGANIC FLOW LINES */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.12]">
            {/* Horizontal organic streams */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>

            {/* Vertical separation columns */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-600/50 to-transparent"></div>
            <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-500/40 to-transparent"></div>

            {/* Diagonal coalescence lines */}
            <div className="absolute top-0 left-0 w-full h-full" style={{
              background: `
                linear-gradient(45deg, transparent 49%, rgba(34, 197, 94, 0.15) 49.5%, rgba(34, 197, 94, 0.15) 50.5%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, rgba(34, 197, 94, 0.1) 49.5%, rgba(34, 197, 94, 0.1) 50.5%, transparent 51%)
              `,
              backgroundSize: '200px 200px, 200px 200px'
            }}></div>
          </div>

          {/* ORGANIC DROPLET INDICATORS */}
          <div className="absolute inset-0 opacity-[0.12]">
            {/* Large droplets (organic phase) */}
            <div className="absolute top-1/6 left-[15%] w-4 h-4 bg-green-600/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-[12%] w-3 h-3 bg-green-500/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-[18%] w-5 h-5 bg-green-700/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Medium droplets (separation process) */}
            <div className="absolute top-2/5 left-1/2 w-2 h-2 bg-green-500/40 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-3/5 left-1/2 w-2.5 h-2.5 bg-green-600/35 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>

            {/* Small droplets (purified output) */}
            <div className="absolute top-1/4 right-[15%] w-1.5 h-1.5 bg-green-400/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-[12%] w-1 h-1 bg-green-500/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-[18%] w-1.5 h-1.5 bg-green-600/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </div>
        </div>

        {/* Large Organic Icon - Premium Treatment */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <RefreshCw className="w-full h-full text-green-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>


        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-7xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-green-600 font-medium">Tratamiento y Recuperación de Orgánico</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Disponible 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Premium Content */}
            <div className="lg:col-span-7 overflow-visible">
              {/* Main Heading */}
              <div className="mb-6 relative z-[100]">
                <h1 className="text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight text-slate-900 leading-[0.9] mb-4">
                  Tratamiento y Recuperación
                  <span className="block text-emerald-600">
                    de Orgánico
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  Para Plantas SX • Eficiencia Optimizada • Alta Recuperación
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Sistemas especializados de recuperación de extractantes con
                <span className="font-bold text-slate-900"> 90-95% de eficiencia</span>.
                <span className="text-emerald-600 font-medium"> Reducción en 65% de arrastres</span> y
                <span className="text-emerald-600 font-medium"> +15% eficiencia de planta</span>.
              </p>

            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-600/15 to-green-700/8 rounded-full opacity-40 animate-float-slow blur-sm"></div>
                <div className="absolute bottom-8 -left-4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/12 rounded-full opacity-35 animate-float-medium blur-sm"></div>
                <div className="absolute top-1/3 right-4 w-20 h-20 bg-gradient-to-br from-green-400/18 to-green-500/10 rounded-full opacity-30 animate-float-slow blur-md"></div>

                <div className="absolute bottom-1/4 right-8 opacity-25">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full enterprise-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>

              {/* Hero Image Container */}
              <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for organic treatment equipment image */}
                <div className="w-full h-full bg-gradient-to-br from-green-100 via-green-50 to-white flex items-center justify-center border border-green-200/50">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
                      <RefreshCw className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">Sistema de Recuperación Orgánico</h3>
                    <p className="text-sm text-green-600">Coalescencia y purificación especializada</p>
                  </div>
                </div>

                {/* Technical overlay indicators */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-gray-700">Sistema Activo</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs text-gray-700">
                    <div className="font-bold">95%</div>
                    <div className="text-gray-500">Recuperación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section - Progressive Disclosure */}
      <section ref={overviewRef} className="py-24 bg-gradient-to-br from-green-50/30 via-white to-gray-50 relative overflow-hidden" style={{zIndex: 1}}>
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{zIndex: 1}}>
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-green-600/10 to-green-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-green-500/15 to-green-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball brand element */}
          <div className="absolute top-20 right-[12%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-500/10 to-green-400/5 rounded-full text-green-700 text-sm font-semibold border border-green-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="flex items-center space-x-1 mr-3">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-2 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              Tecnología de Coalescencia Avanzada
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Recuperación Orgánico
              <span className="block text-green-600 gradient-text-animated">SX de Alta Eficiencia</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Tecnología especializada para la recuperación eficiente del orgánico contaminado y{' '}
              <span className="font-semibold text-green-600">purificación de extractantes en plantas SX</span>.
              Maximización de recuperación y extensión de vida útil del solvente.
            </p>
          </div>

          {/* Feature Cards from Hero Section */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6 mb-20 progressive-reveal">
            {[
              {
                icon: Shield,
                title: "Recuperación 95%",
                description: "Eficiencia comprobada en recuperación de extractantes con coalescencia optimizada",
                color: "green",
                metric: "95%"
              },
              {
                icon: Zap,
                title: "Reducción 60% Pérdidas",
                description: "Minimización drástica de pérdidas de solvente",
                color: "blue",
                metric: "60%"
              },
              {
                icon: TrendingUp,
                title: "+15% Eficiencia de Planta",
                description: "Mejora significativa en la eficiencia operacional de la planta mediante purificación",
                color: "purple",
                metric: "+15%"
              },
              {
                icon: BarChart3,
                title: "ROI < 4 Días/Mes",
                description: "Retorno de inversión ultra rápido por ahorro en consumo de extractantes nuevos",
                color: "slate",
                metric: "<4d"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-xl p-6 border border-green-100/50 shadow-sm hover:shadow-lg transition-all duration-300 progressive-reveal overflow-hidden hover:-translate-y-1">
                {/* Simplified color accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500 group-hover:w-2 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 ml-3">
                  {/* Icon and metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-green-600" />
                    </div>

                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                      {feature.metric}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Interactive Periodic Table - Industry Applications */}
          <div className="mb-20">
            <div className="max-w-7xl mx-auto">
              {/* Full Periodic Table Blueprint */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700 p-8 overflow-visible">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-green-600 rounded-full text-white text-sm font-bold mb-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    APLICACIONES POR INDUSTRIA
                  </div>
                  <p className="text-sm text-slate-400">Haz hover sobre los elementos activos para ver detalles</p>
                </div>

                {/* Full Periodic Table Grid - 18 groups, 7 periods */}
                <div className="grid grid-cols-18 gap-1 text-[8px] sm:text-xs">
                  {/* Period 1 */}
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">1</div><div>H</div></div>
                  </div>
                  <div className="col-span-16"></div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">2</div><div>He</div></div>
                  </div>

                  {/* Period 2 */}
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">3</div><div>Li</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">4</div><div>Be</div></div>
                  </div>
                  <div className="col-span-10"></div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">5</div><div>B</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">6</div><div>C</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">7</div><div>N</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">8</div><div>O</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">9</div><div>F</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">10</div><div>Ne</div></div>
                  </div>

                  {/* Period 3 */}
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">11</div><div>Na</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">12</div><div>Mg</div></div>
                  </div>
                  <div className="col-span-10"></div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">13</div><div>Al</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">14</div><div>Si</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">15</div><div>P</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">16</div><div>S</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">17</div><div>Cl</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">18</div><div>Ar</div></div>
                  </div>

                  {/* Period 4 - THE IMPORTANT ONE */}
                  {/* K - Potassium - INTERACTIVE */}
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-purple-400 rounded flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:z-50 shadow-lg">
                      <div className="text-center"><div className="font-bold">19</div><div className="font-black text-base sm:text-lg">K</div></div>
                    </div>
                    {/* Hover Card */}
                    <a href="/industries/potassium" className="absolute top-full left-0 mt-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border-2 border-purple-400 p-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 cursor-pointer hover:shadow-3xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="text-center">
                            <div className="text-2xl font-black text-purple-700">K</div>
                            <div className="text-xs text-purple-600">19</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">Potasio</h4>
                          <p className="text-sm text-gray-600 mb-3">Filtración salmuera potásica con turbidez &lt;50 NTU</p>
                          <div className="text-xs text-gray-500 mt-2">Recuperación sales | Clarificación salmueras</div>
                        </div>
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Ca through Ni - inactive */}
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">20</div><div>Ca</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">21</div><div>Sc</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">22</div><div>Ti</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">23</div><div>V</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">24</div><div>Cr</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">25</div><div>Mn</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">26</div><div>Fe</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">27</div><div>Co</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">28</div><div>Ni</div></div>
                  </div>

                  {/* Cu - Copper - INTERACTIVE */}
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-orange-400 rounded flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:z-50 shadow-lg">
                      <div className="text-center"><div className="font-bold">29</div><div className="font-black text-base sm:text-lg">Cu</div></div>
                    </div>
                    {/* Hover Card */}
                    <a href="/industries/copper" className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border-2 border-orange-400 p-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 cursor-pointer hover:shadow-3xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="text-center">
                            <div className="text-2xl font-black text-orange-600">Cu</div>
                            <div className="text-xs text-orange-600">29</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">Cobre SX</h4>
                          <p className="text-sm text-gray-600 mb-3">Recuperación orgánico con reducción 50% arrastre acuoso</p>
                          <div className="text-xs text-gray-500 mt-2">TSF 153s | Eficiencia hasta 92%</div>
                        </div>
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Zn - Zinc - INTERACTIVE */}
                  <div className="relative group">
                    <div className="aspect-square bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-400 rounded flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:z-50 shadow-lg">
                      <div className="text-center"><div className="font-bold">30</div><div className="font-black text-base sm:text-lg">Zn</div></div>
                    </div>
                    {/* Hover Card */}
                    <a href="/industries/zinc" className="absolute top-full right-0 mt-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border-2 border-slate-400 p-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 cursor-pointer hover:shadow-3xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="text-center">
                            <div className="text-2xl font-black text-slate-700">Zn</div>
                            <div className="text-xs text-slate-600">30</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black text-gray-900 mb-1 group-hover:text-slate-700 transition-colors">Zinc SX</h4>
                          <p className="text-sm text-gray-600 mb-3">Recuperación orgánico con reducción 45% arrastre acuoso</p>
                          <div className="text-xs text-gray-500 mt-2">Control degradación | Alta resistencia abrasiva</div>
                        </div>
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Ga through Kr - inactive */}
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">31</div><div>Ga</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">32</div><div>Ge</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">33</div><div>As</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">34</div><div>Se</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">35</div><div>Br</div></div>
                  </div>
                  <div className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                    <div className="text-center"><div className="font-bold">36</div><div>Kr</div></div>
                  </div>

                  {/* Period 5 - All inactive */}
                  {['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'].map((el, i) => (
                    <div key={`p5-${i}`} className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                      <div className="text-center"><div className="font-bold">{37 + i}</div><div>{el}</div></div>
                    </div>
                  ))}

                  {/* Period 6 - All inactive (without lanthanides) */}
                  {['Cs', 'Ba', '*', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'].map((el, i) => (
                    <div key={`p6-${i}`} className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                      <div className="text-center"><div className="font-bold">{i === 2 ? '57-71' : 55 + i}</div><div>{el}</div></div>
                    </div>
                  ))}

                  {/* Period 7 - All inactive (without actinides) */}
                  {['Fr', 'Ra', '**', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'].map((el, i) => (
                    <div key={`p7-${i}`} className="aspect-square bg-slate-700/30 border border-slate-600/30 rounded flex items-center justify-center text-slate-500">
                      <div className="text-center"><div className="font-bold">{i === 2 ? '89-103' : 87 + i}</div><div>{el}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Enterprise Design */}
      <section ref={processRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[10%] w-32 h-32 bg-gradient-to-br from-green-600/10 to-green-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-green-500/15 to-green-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball accent */}
          <div className="absolute top-24 right-[8%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-500/10 to-green-400/5 rounded-full text-green-700 text-sm font-semibold border border-green-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 enterprise-pulse"></div>
              Proceso de Coalescencia Optimizado
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Recuperación Orgánico
              <span className="block text-green-600 gradient-text-animated">en 4 Etapas</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Metodología probada de <span className="font-semibold text-green-600">4 etapas integradas</span> que garantiza máxima recuperación de extractantes en plantas SX.
            </p>
          </div>

          {/* Process Flow Map - Horizontal & Vertical Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Process Flow Map Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative progressive-reveal">
                    {/* Connection Lines */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 -right-3 z-0">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-green-500 to-green-400"></div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    )}

                    {/* Process Step Card - Standardized Height */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 group h-96 flex flex-col">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <step.icon className="w-8 h-8 text-green-600" />
                      </div>

                      {/* Content - Flex grow to fill available space */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Additional Info - Cool Bullet Points */}
                          {step.additionalInfo ? (
                            <div className="space-y-2 mt-4">
                              {step.additionalInfo.split(' • ').map((bullet, bulletIndex) => (
                                <div key={bulletIndex} className="flex items-start space-x-3 group/bullet">
                                  {/* Cool bullet with three orbiting balls */}
                                  <div className="relative flex-shrink-0 mt-1 w-4 h-4">
                                    {/* Central point */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-600 rounded-full"></div>

                                    {/* Three orbiting balls */}
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '1s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '2s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-300 rounded-full"></div>
                                    </div>
                                  </div>
                                  {/* Bullet text with subtle styling */}
                                  <p className="text-xs text-gray-700 font-medium leading-relaxed group-hover/bullet:text-green-700 transition-colors duration-200">
                                    {bullet.trim()}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="mt-4 h-6">
                              {/* Empty space to match other cards */}
                            </div>
                          )}
                        </div>

                        {/* Process Flow Indicator - Always at bottom */}
                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <span className="text-xs font-medium text-gray-500">ETAPA {step.step}</span>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  parseInt(step.step) >= dot ? 'bg-green-500' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Connection Lines */}
              <div className="lg:hidden space-y-4 mt-8">
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-green-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className="py-24 bg-gradient-to-br from-green-50/30 via-white to-gray-50 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-green-600/10 to-green-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-green-500/15 to-green-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball brand element */}
          <div className="absolute top-20 right-[12%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-500/10 to-green-400/5 rounded-full text-green-700 text-sm font-semibold border border-green-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 enterprise-pulse"></div>
              Casos de Éxito Comprobados
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Resultados
              <span className="block text-green-600 gradient-text-animated">Verificados</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Implementaciones exitosas de recuperación orgánica en <span className="font-semibold text-green-600">múltiples tipos de extractantes</span>
              con resultados medibles y ROI comprobado.
            </p>
          </div>

          {/* Enterprise Case Studies Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl layered-shadow-hover border border-green-100/50 p-8 sophisticated-hover magnetic-hover progressive-reveal overflow-hidden">
                {/* Sophisticated background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Strategic three ball accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-green-400 rounded-full enterprise-pulse"></div>
                    <div className="w-1 h-1 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-green-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-4 h-4 bg-green-600 rounded-full enterprise-pulse"></div>
                    <h3 className="text-2xl font-black text-gray-900 gradient-text-animated">{useCase.industry}</h3>
                  </div>

                  <h4 className="text-lg font-bold text-green-600 mb-4">{useCase.application}</h4>

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
                      <p className="text-green-600 text-sm font-semibold">{useCase.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">{useCase.client}</span>
                      <span className="text-xs text-green-600 font-semibold">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 right-12 w-20 h-20 bg-green-500/20 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute bottom-8 left-12 w-16 h-16 bg-green-400/25 rounded-full animate-float-medium blur-sm"></div>

          {/* Strategic three ball constellation */}
          <div className="absolute top-6 left-6 opacity-30">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-300 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6 gradient-text-animated">
            ¿Problemas con Pérdidas de Orgánico?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Evaluación técnica especializada para optimizar tu recuperación de extractantes.
            <span className="font-semibold text-green-300">Análisis sin costo con nuestros expertos en coalescencia.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-white text-green-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-green-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Análisis de Pérdidas</span>
              <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover">
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10">Casos de Éxito</span>
              <Play className="relative z-10 w-5 h-5 ml-3 enterprise-pulse" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
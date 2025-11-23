'use client'

import { useState, useEffect, useRef } from 'react'
import { Chemistry, Settings, Humidity, CheckmarkFilled, Industry, Security, Growth } from '@carbon/icons-react'
import { CheckCircle, ArrowRight, Truck, BarChart3, Clock, Zap, Activity, Award, Target, Users, Globe, Play, Waves, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'

export default function ConcentrateDehydrationServicePage() {
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
      title: 'Análisis Mineralógico',
      description: 'Composición mineralógica del concentrado',
      additionalInfo: 'Análisis completo de minerales',
      icon: Chemistry
    },
    {
      step: '2',
      title: 'Acondicionamiento',
      description: 'Preparación pulpa y ajuste parámetros operacionales',
      additionalInfo: 'Optimización concentración sólidos',
      icon: Settings
    },
    {
      step: '3',
      title: 'Deshidratación',
      description: 'Equipos de alta eficiencia para reducción de humedad',
      additionalInfo: 'Monitoreo presión y caudal • Control humedad tiempo real',
      icon: Humidity
    },
    {
      step: '4',
      title: 'Control Calidad',
      description: 'Verificación especificaciones finales y certificación',
      additionalInfo: '',
      icon: CheckmarkFilled
    }
  ]

  const useCases = [
    {
      industry: 'Concentrados Cobre',
      application: 'Deshidratación Cu concentrados para fundición',
      challenge: 'Humedad >12% genera penalizaciones comerciales y aumenta costos transporte',
      solution: 'Filtros prensa alta presión reduciendo humedad hasta 8% final',
      result: 'Reducción 30% costos transporte y cumplimiento especificaciones comerciales',
      client: 'Codelco - División El Teniente',
      savings: 'Ahorros 25% logística'
    },
    {
      industry: 'Concentrados Zinc',
      application: 'Control humedad Zn concentrados',
      challenge: 'Requerimientos estrictos fundición (<10% humedad) y calidad granulométrica',
      solution: 'Centrífugas alta velocidad con control automático humedad',
      result: 'Cumplimiento 100% especificaciones comerciales',
      client: 'Nexa Resources',
      savings: 'Bonificación calidad'
    },
    {
      industry: 'Concentrados Oro',
      application: 'Recuperación valores en deshidratación',
      challenge: 'Pérdidas metálicas en agua filtrada y riesgo contaminación',
      solution: 'Sistemas cerrados con recuperación agua y recirculación',
      result: 'Máxima recuperación valores y cero pérdidas',
      client: 'Yamana Gold',
      savings: 'Recuperación total'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enterprise-Grade Concentrate Dehydration Hero */}
      <section ref={heroRef} className="relative bg-white overflow-visible">
        {/* TSF Signature Dehydration Theme */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-white to-gray-50/50"></div>

          {/* SIGNATURE DEHYDRATION PATTERN - Like water removal */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(8, 145, 178, 0.4) 49%, rgba(8, 145, 178, 0.4) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(8, 145, 178, 0.3) 49%, rgba(8, 145, 178, 0.3) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(8, 145, 178, 0.2) 49%, rgba(8, 145, 178, 0.2) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>

          {/* CONCENTRATE PARTICLES PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230891b2' fill-opacity='0.6'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='45' cy='15' r='4'/%3E%3Ccircle cx='65' cy='15' r='2'/%3E%3Ccircle cx='25' cy='45' r='5'/%3E%3Ccircle cx='55' cy='45' r='3'/%3E%3Ccircle cx='35' cy='65' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>

          {/* DEHYDRATION FLOW LINES */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.12]">
            {/* Horizontal moisture streams */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

            {/* Vertical filtration columns */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-600/50 to-transparent"></div>
            <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"></div>

            {/* Diagonal pressure lines */}
            <div className="absolute top-0 left-0 w-full h-full" style={{
              background: `
                linear-gradient(45deg, transparent 49%, rgba(8, 145, 178, 0.15) 49.5%, rgba(8, 145, 178, 0.15) 50.5%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, rgba(8, 145, 178, 0.1) 49.5%, rgba(8, 145, 178, 0.1) 50.5%, transparent 51%)
              `,
              backgroundSize: '200px 200px, 200px 200px'
            }}></div>
          </div>

          {/* MOISTURE DROPLET INDICATORS */}
          <div className="absolute inset-0 opacity-[0.12]">
            {/* Large droplets (wet concentrate) */}
            <div className="absolute top-1/6 left-[15%] w-4 h-4 bg-cyan-600/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-[12%] w-3 h-3 bg-cyan-500/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-[18%] w-5 h-5 bg-cyan-700/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Medium droplets (processing) */}
            <div className="absolute top-2/5 left-1/2 w-2 h-2 bg-cyan-500/40 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-3/5 left-1/2 w-2.5 h-2.5 bg-cyan-600/35 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>

            {/* Small droplets (dry output) */}
            <div className="absolute top-1/4 right-[15%] w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-[12%] w-1 h-1 bg-cyan-500/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-[18%] w-1.5 h-1.5 bg-cyan-600/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </div>
        </div>

        {/* Large Dehydration Icon - Premium Processing */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <Humidity className="w-full h-full text-cyan-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>


        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-7xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-cyan-600 font-medium">Deshidratación de Concentrados</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
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
                  Deshidratación
                  <span className="block text-cyan-600">
                    de Concentrados
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  170 ton/día • 85-92% Reducción Humedad • Sistemas Móviles
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Sistemas especializados de deshidratación para concentrados mineros con
                <span className="font-bold text-slate-900"> hasta 92% reducción de humedad</span>.
                <span className="text-cyan-600 font-medium"> Cumplimiento especificaciones</span> comerciales
                para fundición y transporte optimizado.
              </p>

            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-600/15 to-cyan-700/8 rounded-full opacity-40 animate-float-slow blur-sm"></div>
                <div className="absolute bottom-8 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-600/12 rounded-full opacity-35 animate-float-medium blur-sm"></div>
                <div className="absolute top-1/3 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/18 to-cyan-500/10 rounded-full opacity-30 animate-float-slow blur-md"></div>

                <div className="absolute bottom-1/4 right-8 opacity-25">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full enterprise-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-cyan-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>

              {/* Hero Image Container */}
              <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for concentrate dehydration equipment image */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 via-cyan-50 to-white flex items-center justify-center border border-cyan-200/50">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-cyan-500/10 rounded-full flex items-center justify-center">
                      <Humidity className="w-12 h-12 text-cyan-600" />
                    </div>
                    <h3 className="text-lg font-bold text-cyan-800 mb-2">Sistema de Deshidratación</h3>
                    <p className="text-sm text-cyan-600">Filtros prensa y centrífugas móviles</p>
                  </div>
                </div>

                {/* Technical overlay indicators */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-gray-700">Sistema Activo</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs text-gray-700">
                    <div className="font-bold">92%</div>
                    <div className="text-gray-500">Reducción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section - Progressive Disclosure */}
      <section ref={overviewRef} className="py-24 bg-gradient-to-br from-cyan-50/30 via-white to-gray-50 relative overflow-hidden" style={{zIndex: 1}}>
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{zIndex: 1}}>
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-cyan-600/10 to-cyan-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball brand element */}
          <div className="absolute top-20 right-[12%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 rounded-full text-cyan-700 text-sm font-semibold border border-cyan-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="flex items-center space-x-1 mr-3">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-2 bg-cyan-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              Tecnología de Deshidratación Avanzada
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Deshidratación Concentrados
              <span className="block text-cyan-600 gradient-text-animated">de Alta Eficiencia</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Tecnología especializada para deshidratación de concentrados mineros con
              <span className="font-semibold text-cyan-600">cumplimiento especificaciones comerciales</span>.
              Reducción de humedad hasta niveles requeridos por fundiciones.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-4 gap-6 mb-20 progressive-reveal">
            {[
              {
                icon: Humidity,
                title: "92% Reducción Humedad",
                description: "Eficiencia máxima en eliminación de humedad para cumplir especificaciones comerciales",
                color: "cyan",
                metric: "92%"
              },
              {
                icon: Industry,
                title: "170 Ton/día Capacidad",
                description: "Procesamiento alto volumen de concentrados con equipos móviles especializados",
                color: "blue",
                metric: "170t/d"
              },
              {
                icon: Security,
                title: "Cumplimiento 100%",
                description: "No requiere de nuevos permisos ambientales",
                color: "emerald",
                metric: "100%"
              },
              {
                icon: Growth,
                title: "ROI <6 Meses",
                description: "Retorno rápido por ahorro en costos transporte y bonificaciones calidad",
                color: "slate",
                metric: "<6m"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-xl p-6 border border-cyan-100/50 shadow-sm hover:shadow-lg transition-all duration-300 progressive-reveal overflow-hidden hover:-translate-y-1">
                {/* Simplified color accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 group-hover:w-2 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 ml-3">
                  {/* Icon and metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative p-3 bg-cyan-100 rounded-lg group-hover:bg-cyan-200 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-cyan-600" />
                    </div>

                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-700 border border-cyan-200">
                      {feature.metric}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Más información</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Industry Applications Matrix */}
          <div className="mb-20">
            <div className="text-center mb-12 progressive-reveal">
              <h3 className="text-4xl font-black text-gray-900 mb-4">Concentrados por Mineral</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Soluciones especializadas de deshidratación para cada tipo de concentrado con resultados garantizados
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Aplicaciones de Deshidratación TSF</h3>
                    <p className="text-slate-300 text-sm">Resultados comprobados por tipo de concentrado mineral</p>
                  </div>
                  <div className="text-cyan-400 text-sm font-mono">VALIDADO ✓</div>
                </div>
              </div>

              {/* Applications Grid */}
              <div className="p-8">
                <div className="space-y-4">
                  {[
                    {
                      element: "Cu",
                      industry: "Concentrados Cobre",
                      application: "Deshidratación Cu para fundición",
                      performance: "30% Ahorro Transporte",
                      specs: "Cumplimiento estándares comerciales de humedad",
                      color: "#ea580c",
                      status: "Operativo"
                    }
                  ].map((app, index) => (
                    <div key={index} className="group relative bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className="flex items-start space-x-6">
                        {/* Chemical Element Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{backgroundColor: `${app.color}15`}}>
                            <div className="text-center">
                              <div className="text-sm font-black" style={{color: app.color}}>{app.element}</div>
                              <div className="text-xs font-medium" style={{color: app.color}}>conc.</div>
                            </div>
                          </div>
                        </div>

                        {/* Industry & Application */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900">{app.industry}</h4>
                              <p className="text-sm text-gray-600">{app.application}</p>
                            </div>
                            <div className="text-right">
                              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                                   style={{backgroundColor: `${app.color}15`, color: app.color}}>
                                {app.status}
                              </div>
                            </div>
                          </div>

                          {/* Performance Metrics */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs font-medium text-gray-500 mb-1">RENDIMIENTO</div>
                              <div className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-bold text-white"
                                   style={{backgroundColor: app.color}}>
                                {app.performance}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-gray-500 mb-1">ESPECIFICACIONES</div>
                              <div className="text-sm text-gray-700 font-medium">{app.specs}</div>
                            </div>
                          </div>
                        </div>

                        {/* Performance Indicator */}
                        <div className="flex-shrink-0 w-16">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto rounded-full border-4 flex items-center justify-center"
                                 style={{borderColor: `${app.color}30`}}>
                              <div className="w-6 h-6 rounded-full" style={{backgroundColor: app.color}}></div>
                            </div>
                            <div className="text-xs font-medium text-gray-500 mt-1">TSF</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[10%] w-32 h-32 bg-gradient-to-br from-cyan-600/10 to-cyan-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 rounded-full text-cyan-700 text-sm font-semibold border border-cyan-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 enterprise-pulse"></div>
              Proceso de Deshidratación Optimizado
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Deshidratación
              <span className="block text-cyan-600 gradient-text-animated">en 4 Etapas</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Metodología probada de <span className="font-semibold text-cyan-600">4 etapas integradas</span> que garantiza máxima reducción de humedad en concentrados.
            </p>
          </div>

          {/* Process Flow Map */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Process Flow Map Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative progressive-reveal">
                    {/* Connection Lines */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 -right-3 z-0">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                    )}

                    {/* Process Step Card */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 group h-96 flex flex-col">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <step.icon className="w-8 h-8 text-cyan-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Additional Info */}
                          {step.additionalInfo ? (
                            <div className="space-y-2 mt-4">
                              {step.additionalInfo.split(' • ').map((bullet, bulletIndex) => (
                                <div key={bulletIndex} className="flex items-start space-x-3 group/bullet">
                                  {/* TSF three-ball bullet points */}
                                  <div className="relative flex-shrink-0 mt-1 w-4 h-4">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-600 rounded-full"></div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '1s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '2s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-300 rounded-full"></div>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-700 font-medium leading-relaxed group-hover/bullet:text-cyan-700 transition-colors duration-200">
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

                        {/* Process Flow Indicator */}
                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <span className="text-xs font-medium text-gray-500">ETAPA {step.step}</span>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  parseInt(step.step) >= dot ? 'bg-cyan-500' : 'bg-gray-200'
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
            </div>
          </div>

          {/* Performance Metrics Summary */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Métricas de Rendimiento TSF</h3>
              <p className="text-slate-300">Resultados comprobados en deshidratación de concentrados</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400 mb-2">50</div>
                <div className="text-sm text-slate-300">Toneladas/día</div>
                <div className="text-xs text-slate-400">Capacidad máxima</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400 mb-2">92%</div>
                <div className="text-sm text-slate-300">Reducción humedad</div>
                <div className="text-xs text-slate-400">Máxima eficiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400 mb-2">30%</div>
                <div className="text-sm text-slate-300">Ahorro transporte</div>
                <div className="text-xs text-slate-400">Costos logística</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400 mb-2">&lt;18m</div>
                <div className="text-sm text-slate-300">ROI</div>
                <div className="text-xs text-slate-400">Retorno inversión</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className="py-24 bg-gradient-to-br from-cyan-50/30 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-cyan-600/10 to-cyan-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 rounded-full text-cyan-700 text-sm font-semibold border border-cyan-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 enterprise-pulse"></div>
              Casos de Éxito Comprobados
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Resultados
              <span className="block text-cyan-600 gradient-text-animated">Verificados</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Implementaciones exitosas de deshidratación en <span className="font-semibold text-cyan-600">múltiples tipos de concentrados</span>
              con resultados medibles y ahorro comprobado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl layered-shadow-hover border border-cyan-100/50 p-8 sophisticated-hover magnetic-hover progressive-reveal overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full enterprise-pulse"></div>
                    <div className="w-1 h-1 bg-cyan-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-cyan-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-4 h-4 bg-cyan-600 rounded-full enterprise-pulse"></div>
                    <h3 className="text-2xl font-black text-gray-900 gradient-text-animated">{useCase.industry}</h3>
                  </div>

                  <h4 className="text-lg font-bold text-cyan-600 mb-4">{useCase.application}</h4>

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
                      <p className="text-cyan-600 text-sm font-semibold">{useCase.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">{useCase.client}</span>
                      <span className="text-xs text-cyan-600 font-semibold">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 right-12 w-20 h-20 bg-cyan-500/20 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute bottom-8 left-12 w-16 h-16 bg-cyan-400/25 rounded-full animate-float-medium blur-sm"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6 gradient-text-animated">
            Evita Cuellos de Botella en tu Producción
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Capacidad adicional móvil para mantener el flujo continuo de tu operación.
            <span className="font-semibold text-cyan-300"> Flexibilidad cuando más lo necesitas.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-white text-cyan-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-cyan-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-cyan-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Análisis de Concentrados</span>
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
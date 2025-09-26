'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
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
      additionalInfo: 'No utiliza equipamiento de planta cliente • Sistema 100% autónomo',
      icon: Truck
    },
    {
      step: '2',
      title: 'Filtración',
      description: 'Separación de borras SX mediante filtros de prensa o centrífugas móviles',
      additionalInfo: 'Mecanismos de succión de precisión, mínimamente invasivos',
      icon: Filter
    },
    {
      step: '3',
      title: 'Deshidratación',
      description: 'Reducción humedad hasta niveles transportables',
      additionalInfo: 'Monitoreo de variables de salida',
      icon: Settings
    },
    {
      step: '4',
      title: 'Recuperación',
      description: 'Orgánico recuperado y torta seca lista para disposición',
      additionalInfo: '',
      icon: TrendingUp
    }
  ]


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
        {/* TSF Signature Industrial Filtration Theme */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-gray-50/50"></div>

          {/* SIGNATURE FILTRATION MESH PATTERN - Like Stripe's diagonals */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(16, 185, 129, 0.4) 49%, rgba(16, 185, 129, 0.4) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(16, 185, 129, 0.3) 49%, rgba(16, 185, 129, 0.3) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(16, 185, 129, 0.2) 49%, rgba(16, 185, 129, 0.2) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>

          {/* HEXAGONAL FILTRATION SCREEN PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.6'%3E%3Cpath d='M20 20l20-11.5L60 20v23L40 54.5 20 43V20z' stroke='%23059669' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>

          {/* FLOW LINES - Representing Liquid Flow Through System */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.12]">
            {/* Horizontal flow streams */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>

            {/* Vertical process columns */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-600/50 to-transparent"></div>
            <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent"></div>

            {/* Diagonal separation lines */}
            <div className="absolute top-0 left-0 w-full h-full" style={{
              background: `
                linear-gradient(45deg, transparent 49%, rgba(16, 185, 129, 0.15) 49.5%, rgba(16, 185, 129, 0.15) 50.5%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, rgba(16, 185, 129, 0.1) 49.5%, rgba(16, 185, 129, 0.1) 50.5%, transparent 51%)
              `,
              backgroundSize: '200px 200px, 200px 200px'
            }}></div>
          </div>

          {/* PARTICLE SEPARATION INDICATORS */}
          <div className="absolute inset-0 opacity-[0.12]">
            {/* Large particles (input) */}
            <div className="absolute top-1/6 left-[15%] w-4 h-4 bg-emerald-600/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-[12%] w-3 h-3 bg-emerald-500/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-[18%] w-5 h-5 bg-emerald-700/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Medium particles (process) */}
            <div className="absolute top-2/5 left-1/2 w-2 h-2 bg-emerald-500/40 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-3/5 left-1/2 w-2.5 h-2.5 bg-emerald-600/35 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>

            {/* Small particles (output) */}
            <div className="absolute top-1/4 right-[15%] w-1.5 h-1.5 bg-emerald-400/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-[12%] w-1 h-1 bg-emerald-500/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-[18%] w-1.5 h-1.5 bg-emerald-600/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </div>

          {/* INDUSTRIAL CONNECTION NODES */}
          <div className="absolute inset-0 opacity-[0.12]">
            {/* Process connection points */}
            <div className="absolute top-1/5 left-1/5 w-6 h-6 border border-emerald-500/60 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-4/5 right-1/5 w-6 h-6 border border-emerald-400/60 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="absolute bottom-1/5 left-1/3 w-6 h-6 border border-emerald-600/60 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Connection lines between nodes */}
            <div className="absolute top-1/5 left-1/5 w-32 h-px bg-gradient-to-r from-emerald-500/30 to-transparent transform rotate-45 origin-left"></div>
            <div className="absolute bottom-1/5 left-1/3 w-40 h-px bg-gradient-to-r from-emerald-600/30 to-transparent transform -rotate-12 origin-left"></div>
          </div>

          {/* TSF BRAND MOLECULAR SIGNATURE */}
          <div className="absolute bottom-1/6 right-1/6 opacity-[0.12]">
            <div className="relative w-24 h-24">
              {/* Central brand hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>

              {/* Orbital brand elements */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

              {/* Molecular bonds */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-emerald-500/40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-emerald-500/40 rotate-90"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-emerald-500/30 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-emerald-500/30 -rotate-45"></div>
            </div>
          </div>

        </div>

        {/* Large Filter Icon - Premium Treatment */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <Filter className="w-full h-full text-emerald-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
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
                <h1 className="text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight text-slate-900 leading-[0.9] mb-4">
                  Filtración y Deshidratación
                  <span className="block text-emerald-600">
                    de Borras
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  Para Plantas SX • Móvil • Alta Capacidad
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
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

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements */}
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
              </div>

              {/* Hero Image Container */}
              <div className="relative z-10 aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl scale-110 origin-left">
                <Image
                  src="/filtro_prensa_1200_drone_view.png"
                  alt="Sistema de Filtración Móvil - Vista aérea del filtro prensa 1200"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Equipment specification overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-xs text-gray-700">
                    <div className="font-bold">Filtro de Prensa 1200</div>
                    <div className="text-gray-500">Capacidad 70 T/día</div>
                  </div>
                </div>
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

          {/* Feature Cards from Hero Section */}
          <div className="grid lg:grid-cols-4 gap-6 mb-20 progressive-reveal">
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
              <div key={index} className="group relative bg-white rounded-xl p-6 border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300 progressive-reveal overflow-hidden hover:-translate-y-1">
                {/* Simplified color accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 group-hover:w-2 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 ml-3">
                  {/* Icon and metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-emerald-600" />
                    </div>

                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
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
                  <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Más información</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>


          {/* Service Page Applications - Customer-Focused Design */}
          <div className="mb-20">
            <div className="text-center mb-12 progressive-reveal">
              <h3 className="text-4xl font-black text-gray-900 mb-4">Industrias que Servimos</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Soluciones móviles de filtración especializadas para cada sector industrial con resultados comprobados
              </p>
            </div>

            {/* Industry Applications Matrix - Clean & Focused */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Aplicaciones Industriales TSF</h3>
                    <p className="text-slate-300 text-sm">Resultados comprobados por sector mineral y petrolero</p>
                  </div>
                  <div className="text-emerald-400 text-sm font-mono">VALIDADO ✓</div>
                </div>
              </div>

              {/* Applications Grid */}
              <div className="p-8">
                <div className="space-y-4">
                  {[
                    {
                      element: "Cu²⁺",
                      industry: "Cobre SX/EW",
                      application: "Separación electrólitos",
                      performance: "89% Recuperación",
                      specs: "< 50 NTU turbidez | Retorno directo SX",
                      color: "#ea580c",
                      status: "Operativo"
                    },
                    {
                      element: "Li⁺",
                      industry: "Litio Premium",
                      application: "Procesamiento salmueras",
                      performance: "+99% Pureza",
                      specs: "Concentración selectiva | Calidad batería",
                      color: "#0891b2",
                      status: "Optimizado"
                    },
                    {
                      element: "Zn²⁺",
                      industry: "Zinc SX-EW",
                      application: "Control sólidos abrasivos",
                      performance: "En Desarrollo",
                      specs: "Alta densidad | Sensibilidad orgánica",
                      color: "#64748b",
                      status: "Prospección"
                    },
                    {
                      element: "K⁺",
                      industry: "Potasio KCl",
                      application: "Refinamiento sales",
                      performance: "95% Eficiencia",
                      specs: "Cristalización controlada | Grado fertilizante",
                      color: "#7c3aed",
                      status: "Validado"
                    },
                    {
                      element: "H₂S",
                      industry: "Petróleo",
                      application: "Desgasificación borras",
                      performance: "<5ppm H₂S",
                      specs: "90% recuperación HC | 70% reducción volumen",
                      color: "#dc2626",
                      status: "Especializado"
                    }
                  ].map((app, index) => (
                    <div key={index} className="group relative bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className="flex items-start space-x-6">
                        {/* Chemical Element Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{backgroundColor: `${app.color}15`}}>
                            <div className="text-center">
                              <div className="text-lg font-black" style={{color: app.color}}>{app.element}</div>
                              <div className="text-xs font-medium" style={{color: app.color}}>ion</div>
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
              Metodología probada de <span className="font-semibold text-emerald-600">4 etapas integradas</span> que garantiza máxima eficiencia en separación sólido-líquido.
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
                        <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                    )}

                    {/* Process Step Card - Standardized Height */}
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group h-96 flex flex-col">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <step.icon className="w-8 h-8 text-emerald-600" />
                      </div>

                      {/* Content - Flex grow to fill available space */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
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
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-emerald-600 rounded-full"></div>

                                    {/* Three orbiting balls */}
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '1s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '2s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-300 rounded-full"></div>
                                    </div>
                                  </div>
                                  {/* Bullet text with subtle styling */}
                                  <p className="text-xs text-gray-700 font-medium leading-relaxed group-hover/bullet:text-emerald-700 transition-colors duration-200">
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
                                  parseInt(step.step) >= dot ? 'bg-emerald-500' : 'bg-gray-200'
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
                  <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-emerald-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics Summary */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Métricas de Rendimiento TSF</h3>
              <p className="text-slate-300">Resultados comprobados en operaciones industriales</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400 mb-2">130</div>
                <div className="text-sm text-slate-300">Toneladas/día</div>
                <div className="text-xs text-slate-400">Capacidad máxima</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400 mb-2">24-48h</div>
                <div className="text-sm text-slate-300">Instalación</div>
                <div className="text-xs text-slate-400">Sistema operativo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400 mb-2">89%</div>
                <div className="text-sm text-slate-300">Recuperación</div>
                <div className="text-xs text-slate-400">Orgánico promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-400 mb-2">100%</div>
                <div className="text-sm text-slate-300">Móvil</div>
                <div className="text-xs text-slate-400">Sin infraestructura</div>
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
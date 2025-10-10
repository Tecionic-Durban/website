'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star, Layers, Grid, ChevronRight } from 'lucide-react'

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
      description: 'Separación de borras SX mediante equipos móviles',
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
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Premium Content */}
            <div className="lg:col-span-6 overflow-visible">
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

            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-6 relative">
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
              <div className="relative z-10 aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl">
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
              <span className="font-semibold text-emerald-600">operaciones de minería, procesamiento mineral y energía</span>.
              Con certificación ex.proof para máxima seguridad en ambientes explosivos.
            </p>
          </div>

          {/* Feature Cards from Hero Section */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6 mb-20 progressive-reveal">
            {[
              {
                icon: Shield,
                title: "Ambientes Extremos",
                description: "Equipos diseñados para operar de forma segura en atmósferas explosivas y altamente corrosivas con certificación ex.proof",
                color: "emerald",
                metric: "Ex.Proof"
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

                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Modular Configuration - Clean Minimal Design */}
          <div className="max-w-7xl mx-auto mb-20 py-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Configuración en Módulos Paralelos</h3>

            <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
              {/* Left - Large Image */}
              <div>
                <Image
                  src="/filtros_acoplados.png"
                  alt="Configuración Modular de Equipos"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Right - Text Content */}
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Los equipos pueden instalarse como módulos independientes en paralelo, permitiendo escalabilidad progresiva
                  y acelerando la estabilidad de planta. Esta configuración es económica con el espacio disponible y permite
                  instalación externa para minimizar la fricción operacional interna.
                </p>

                {/* Benefits - Icon Bullets */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Layers className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Escalabilidad ilimitada</div>
                      <div className="text-gray-600">Agrega todos los equipos que necesites según tu operación</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Instalación externa</div>
                      <div className="text-gray-600">Sin modificar infraestructura de planta existente</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Grid className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Eficiencia espacial</div>
                      <div className="text-gray-600">Optimiza espacio disponible con configuración flexible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Molecular Industries Section */}
          <div className="mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[50%_50%] gap-16 items-center">
                {/* Left - Text Content */}
                <div className="space-y-6">
                  <h3 className="text-4xl font-black text-gray-900 leading-tight">
                    Industrias que <span className="text-emerald-600">Servimos</span>
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Soluciones móviles de filtración especializadas para operaciones de
                    <span className="font-semibold text-gray-900"> cobre, zinc y petróleo</span>,
                    con tecnología adaptada a las características únicas de cada proceso industrial.
                  </p>

                  <div className="space-y-4 pt-4">
                    {/* Copper */}
                    <a href="/industries/copper" className="group flex items-center space-x-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#ea580c15'}}>
                        <div className="text-center">
                          <div className="text-sm font-black" style={{color: '#ea580c'}}>Cu²⁺</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">Cobre SX</h4>
                        <p className="text-sm text-gray-600">Filtración y deshidratación de borras SX con 98% sólidos capturados</p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>

                    {/* Zinc */}
                    <a href="/industries/zinc" className="group flex items-center space-x-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#64748b15'}}>
                        <div className="text-center">
                          <div className="text-sm font-black" style={{color: '#64748b'}}>Zn²⁺</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-slate-700 transition-colors">Zinc SX</h4>
                        <p className="text-sm text-gray-600">Filtración de sólidos abrasivos adaptado a densidades Zn y sensibilidad orgánica</p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>

                    {/* Petroleum */}
                    <a href="/industries/crude-oil" className="group flex items-center space-x-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#dc262615'}}>
                        <div className="text-center">
                          <div className="text-sm font-black" style={{color: '#dc2626'}}>HC</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">Petróleo</h4>
                        <p className="text-sm text-gray-600">Limpieza de borras desde estanques con 80% reducción de volumen</p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right - Vertical Zigzag Molecule */}
                <div className="relative h-[600px]">
                  {/* SVG for molecular bonds */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                    <defs>
                      {/* 3D Cylindrical gradient for bonds */}
                      <linearGradient id="cylindricalBond" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                        <stop offset="25%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                        <stop offset="75%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                      </linearGradient>

                      {/* Glow filter */}
                      <filter id="bondGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Bond from Copper to Zinc - Outer glow */}
                    <line
                      x1="50%" y1="64"
                      x2="96" y2="304"
                      stroke="#10b98140"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Bond from Copper to Zinc - Main bond */}
                    <line
                      x1="50%" y1="64"
                      x2="96" y2="304"
                      stroke="url(#cylindricalBond)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      filter="url(#bondGlow)"
                    />

                    {/* Bond from Zinc to Petroleum - Outer glow */}
                    <line
                      x1="96" y1="304"
                      x2="calc(100% - 144px)" y2="536"
                      stroke="#10b98140"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Bond from Zinc to Petroleum - Main bond */}
                    <line
                      x1="96" y1="304"
                      x2="calc(100% - 144px)" y2="536"
                      stroke="url(#cylindricalBond)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      filter="url(#bondGlow)"
                    />
                  </svg>

                  {/* Copper Node - Top Center */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      {/* Atom */}
                      <div className="w-32 h-32 rounded-full flex items-center justify-center border-4 shadow-lg relative z-10"
                           style={{backgroundColor: '#ea580c', borderColor: '#ea580c40'}}>
                        <div className="text-center text-white">
                          <div className="text-3xl font-black">Cu²⁺</div>
                          <div className="text-xs font-medium opacity-90">Cobre SX</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zinc Node - Middle Left */}
                  <div className="absolute top-[240px] left-8">
                    <div className="relative">
                      {/* Atom */}
                      <div className="w-32 h-32 rounded-full flex items-center justify-center border-4 shadow-lg relative z-10"
                           style={{backgroundColor: '#64748b', borderColor: '#64748b40'}}>
                        <div className="text-center text-white">
                          <div className="text-3xl font-black">Zn²⁺</div>
                          <div className="text-xs font-medium opacity-90">Zinc SX</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Petroleum Node - Bottom Right */}
                  <div className="absolute bottom-0 right-20">
                    <div className="relative">
                      {/* Atom */}
                      <div className="w-32 h-32 rounded-full flex items-center justify-center border-4 shadow-lg relative z-10"
                           style={{backgroundColor: '#dc2626', borderColor: '#dc262640'}}>
                        <div className="text-center text-white">
                          <div className="text-3xl font-black">HC</div>
                          <div className="text-xs font-medium opacity-90">Petróleo</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Electron orbits (decorative) */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 pointer-events-none">
                    <div className="absolute inset-0 border border-orange-300/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                  </div>
                  <div className="absolute top-[240px] left-8 w-32 h-32 pointer-events-none">
                    <div className="absolute inset-0 border border-slate-300/30 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
                  </div>
                  <div className="absolute bottom-0 right-20 w-32 h-32 pointer-events-none">
                    <div className="absolute inset-0 border border-red-300/30 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '2s'}}></div>
                  </div>
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
            ¿Necesitas Soluciones de Filtración Móvil?
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
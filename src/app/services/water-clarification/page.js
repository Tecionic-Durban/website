'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'

export default function WaterClarificationServicePage() {
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
      title: 'Caracterización Agua',
      description: 'Análisis completo calidad agua: turbidez, TSS, pH, metales, orgánicos',
      additionalInfo: 'Testing jar test • Selección reactivos • Optimización dosis',
      icon: FlaskConical
    },
    {
      step: '2',
      title: 'Diseño Sistema',
      description: 'Configuración clarificación: DAF, lamelar o híbrido según aplicación',
      additionalInfo: 'Dimensionamiento hidráulico • Selección equipos • Control automático',
      icon: Target
    },
    {
      step: '3',
      title: 'Clarificación Avanzada',
      description: 'Separación sólidos-líquido mediante coagulación-floculación optimizada',
      additionalInfo: 'Monitoreo turbidez continuo • Control pH automático • Dosificación proporcional',
      icon: Droplets
    },
    {
      step: '4',
      title: 'Reutilización Agua',
      description: 'Agua clarificada <5 NTU lista para recirculación proceso',
      additionalInfo: 'Verificación calidad • Sistema distribución • Monitoreo performance',
      icon: TrendingUp
    }
  ]

  const useCases = [
    {
      industry: 'Cobre SX-EW',
      application: 'Recuperación agua raffinate para recirculación',
      challenge: 'Pérdida crítica 40% agua proceso por turbidez >50 NTU en raffinate, imposibilitando recirculación',
      solution: 'Sistema integrado DAF + clarificadores lamelares de alta tasa con control automático',
      result: 'Recuperación agua proceso 95%, calidad <5 NTU constante',
      client: 'Minera Los Pelambres',
      savings: 'Ahorro agua fresca $1.8M/año'
    },
    {
      industry: 'Litio DLE',
      application: 'Cumplimiento ambiental efluentes DLE',
      challenge: 'Efluentes DLE excedían límites DS90 con TSS >200 mg/L, riesgo multas $500K',
      solution: 'Clarificación avanzada con coagulación-floculación optimizada para salmueras complejas',
      result: 'Cumplimiento 100% DS90, TSS efluente <10 mg/L',
      client: 'Salar de Uyuni Bolivia',
      savings: 'Eliminación riesgo multas'
    },
    {
      industry: 'Drenaje Ácido',
      application: 'Remediación AMD con neutralización pasiva',
      challenge: 'Drenaje ácido mina pH 2.8 con metales pesados requería tratamiento costoso $800K/año',
      solution: 'Sistema pasivo neutralización + clarificación lamelar para tratamiento continuo AMD',
      result: 'pH estabilizado 7.2, metales pesados <10 mg/L',
      client: 'Operaciones Mineras Norte Chile',
      savings: 'Reducción OPEX 60%'
    }
  ]

  const industrialApplications = [
    {
      element: "H₂O",
      industry: "Agua Proceso Minero",
      application: "Clarificación agua recirculación",
      performance: "95% Recuperación agua",
      specs: "Turbidez <5 NTU | TSS <10 mg/L | pH 6.5-8.5",
      color: "#0891b2",
      status: "Operativo"
    },
    {
      element: "Cu²⁺",
      industry: "Raffinate SX-EW",
      application: "Reutilización agua raffinate",
      performance: "98% Calidad agua fresca",
      specs: "Remoción 99% sólidos suspendidos | Claridad constante",
      color: "#ea580c",
      status: "Continuo"
    },
    {
      element: "Li⁺",
      industry: "Efluentes DLE",
      application: "Cumplimiento ambiental DS90",
      performance: "100% Compliance",
      specs: "TSS <10 mg/L | Metales <límites DS90",
      color: "#06b6d4",
      status: "Regulado"
    },
    {
      element: "AMD",
      industry: "Drenaje Ácido Mina",
      application: "Neutralización pasiva AMD",
      performance: "pH 7.2 estabilizado",
      specs: "Metales pesados <10 mg/L | Tratamiento continuo",
      color: "#dc2626",
      status: "Remediación"
    },
    {
      element: "Zn²⁺",
      industry: "Electrolito EW",
      application: "Ultra-purificación soluciones",
      performance: "99.9% Pureza electrolito",
      specs: "Partículas <1 μm | Calidad cátodos premium",
      color: "#64748b",
      status: "Crítico"
    },
    {
      element: "K⁺",
      industry: "Salmueras Concentradas",
      application: "Pre-cristalización clarificación",
      performance: "80% Reducción arcillas",
      specs: "Claridad óptica | Cristales pureza >99%",
      color: "#8b5cf6",
      status: "Optimizado"
    }
  ]

  const caseStudies = [
    {
      title: "Recuperación Total Agua SX-EW Cobre",
      client: "Minera Los Pelambres",
      challenge: "Pérdida crítica 40% agua proceso por turbidez >50 NTU en raffinate, imposibilitando recirculación y aumentando costos agua fresca $2M/año.",
      solution: "Sistema integrado DAF + clarificadores lamelares de alta tasa con control automático coagulación-floculación para tratamiento agua raffinate.",
      results: [
        "Recuperación agua proceso: 95%",
        "Calidad agua <5 NTU constante",
        "Ahorro agua fresca: $1.8M/año",
        "Disponibilidad sistema: 97.5%"
      ],
      metrics: {
        before: { turbidity: "65 NTU", recovery: "62%", cost: "$2M/año" },
        after: { turbidity: "<5 NTU", recovery: "95%", cost: "$0.2M/año" }
      },
      industry: "Cobre",
      color: "#ea580c"
    },
    {
      title: "Cumplimiento Ambiental DLE Litio",
      client: "Salar de Uyuni Bolivia",
      challenge: "Efluentes DLE excedían límites DS90 con TSS >200 mg/L, generando riesgo multas $500K y restricciones operacionales.",
      solution: "Clarificación avanzada con coagulación-floculación optimizada para salmueras complejas DLE y recuperación agua proceso.",
      results: [
        "Cumplimiento 100% DS90",
        "TSS efluente: <10 mg/L",
        "Recuperación agua: 90%",
        "Eliminación riesgo multas"
      ],
      metrics: {
        before: { tss: "200 mg/L", compliance: "45%", recovery: "25%" },
        after: { tss: "<10 mg/L", compliance: "100%", recovery: "90%" }
      },
      industry: "Litio",
      color: "#06b6d4"
    },
    {
      title: "Remediación Drenaje Ácido Mina",
      client: "Operaciones Mineras Norte Chile",
      challenge: "Drenaje ácido mina pH 2.8 con Cu 250 mg/L, Zn 180 mg/L requería tratamiento costoso $800K/año para cumplimiento ambiental.",
      solution: "Sistema pasivo neutralización + clarificación lamelar para tratamiento continuo AMD con minimización reactivos.",
      results: [
        "pH estabilizado: 7.2",
        "Metales pesados: <10 mg/L",
        "Reducción OPEX: 60%",
        "Operación autónoma"
      ],
      metrics: {
        before: { ph: "2.8", metals: "430 mg/L", cost: "$800K/año" },
        after: { ph: "7.2", metals: "<10 mg/L", cost: "$320K/año" }
      },
      industry: "Remediación",
      color: "#dc2626"
    }
  ]

  const benefits = [
    'Recuperación 95% agua proceso SX-EW',
    'Cumplimiento estricto DS90/2000',
    'Reducción 60% costos agua fresca',
    'Eliminación riesgo multas ambientales',
    'Tratamiento AMD con neutralización pasiva',
    'Control automático multiparámetro',
    'ROI <2 años en operaciones continuas'
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enterprise-Grade Water Clarification Hero */}
      <section ref={heroRef} className="relative bg-white overflow-hidden">
        {/* TSF Signature Industrial Water Treatment Theme */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-gray-50/50"></div>

          {/* SIGNATURE WATER FLOW PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(20, 184, 166, 0.4) 49%, rgba(20, 184, 166, 0.4) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(20, 184, 166, 0.3) 49%, rgba(20, 184, 166, 0.3) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(20, 184, 166, 0.2) 49%, rgba(20, 184, 166, 0.2) 51%, transparent 52%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}></div>

          {/* CLARIFICATION CHAMBER PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.6'%3E%3Crect x='10' y='20' width='60' height='40' rx='5' stroke='%2314b8a6' stroke-width='1' fill='none'/%3E%3Cline x1='20' y1='30' x2='60' y2='30' stroke='%2314b8a6' stroke-width='1'/%3E%3Cline x1='20' y1='40' x2='60' y2='40' stroke='%2314b8a6' stroke-width='1'/%3E%3Cline x1='20' y1='50' x2='60' y2='50' stroke='%2314b8a6' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>

          {/* WATER DROPLET FLOW */}
          <div className="absolute inset-0 opacity-[0.12]">
            {/* Large droplets (input) */}
            <div className="absolute top-1/6 left-[15%] w-4 h-4 bg-teal-600/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-[12%] w-3 h-3 bg-teal-500/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-[18%] w-5 h-5 bg-teal-700/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Treatment process */}
            <div className="absolute top-2/5 left-1/2 w-2 h-2 bg-teal-500/40 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-3/5 left-1/2 w-2.5 h-2.5 bg-teal-600/35 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>

            {/* Clean water (output) */}
            <div className="absolute top-1/4 right-[15%] w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-[12%] w-1 h-1 bg-teal-500/45 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-[18%] w-1.5 h-1.5 bg-teal-600/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </div>

          {/* TSF BRAND MOLECULAR SIGNATURE */}
          <div className="absolute bottom-1/6 right-1/6 opacity-[0.12]">
            <div className="relative w-24 h-24">
              {/* Central brand hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-teal-600 rounded-full animate-pulse"></div>

              {/* Orbital brand elements */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Large Water Treatment Icon - Premium Treatment */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <Droplets className="w-full h-full text-teal-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>


        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-8xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-teal-600 font-medium">Clarificación y Tratamiento de Aguas</span>
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
                  Clarificación y Tratamiento
                  <span className="block text-teal-600">
                    de Aguas
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  Para SX-EW • DLE • AMD • Recuperación Total
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Recuperación máxima agua proceso con tecnologías DAF y clarificación lamelar
                <span className="font-bold text-slate-900"> hasta 120 m³/día</span>.
                <span className="text-teal-600 font-medium"> 95% reutilización</span>
                con cumplimiento DS90/2000.
              </p>

              {/* Enterprise CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 overflow-hidden hover:shadow-xl hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Evaluación Técnica</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 bg-white/50 hover:bg-white/80 backdrop-blur-sm">
                  <span>Descargar Casos AMD</span>
                  <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-600/15 to-teal-700/8 rounded-full opacity-40 animate-float-slow blur-sm"></div>
                <div className="absolute bottom-8 -left-4 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-teal-600/12 rounded-full opacity-35 animate-float-medium blur-sm"></div>
                <div className="absolute top-1/3 right-4 w-20 h-20 bg-gradient-to-br from-teal-400/18 to-teal-500/10 rounded-full opacity-30 animate-float-slow blur-md"></div>

                <div className="absolute bottom-1/4 right-8 opacity-25">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full enterprise-pulse"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-teal-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>

              {/* Hero Image Container */}
              <div className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for water treatment equipment image */}
                <div className="w-full h-full bg-gradient-to-br from-teal-100 via-teal-50 to-white flex items-center justify-center border border-teal-200/50">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-teal-500/10 rounded-full flex items-center justify-center">
                      <Droplets className="w-12 h-12 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-teal-800 mb-2">Sistema Clarificación DAF</h3>
                    <p className="text-sm text-teal-600">Recuperación agua proceso para reutilización</p>
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
                    <div className="font-bold">120 m³/día</div>
                    <div className="text-gray-500">Capacidad Max</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section - Progressive Disclosure */}
      <section ref={overviewRef} className="py-24 bg-gradient-to-br from-teal-50/30 via-white to-gray-50 relative overflow-hidden">
        {/* Enterprise Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-teal-600/10 to-teal-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
          <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-teal-500/15 to-teal-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

          {/* Strategic three ball brand element */}
          <div className="absolute top-20 right-[12%] opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full enterprise-pulse"></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-teal-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-teal-500/10 to-teal-400/5 rounded-full text-teal-700 text-sm font-semibold border border-teal-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="flex items-center space-x-1 mr-3">
                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-2 bg-teal-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              Tecnología de Clarificación Avanzada
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Sistemas de Tratamiento
              <span className="block text-teal-600 gradient-text-animated">Agua de Alta Eficiencia</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Equipos especializados para recuperación y reutilización agua proceso con
              <span className="font-semibold text-teal-600">tecnologías DAF y clarificación lamelar</span>.
              Cumplimiento normativo DS90/2000 garantizado.
            </p>
          </div>

          {/* Feature Cards from Hero Section */}
          <div className="grid lg:grid-cols-4 gap-6 mb-20 progressive-reveal">
            {[
              {
                icon: Shield,
                title: "Cumplimiento DS90",
                description: "Garantía total cumplimiento normativo ambiental con monitoreo continuo calidad efluentes",
                color: "teal",
                metric: "100%"
              },
              {
                icon: Zap,
                title: "Instalación Rápida",
                description: "Sistema modular operativo en 48-72 horas sin modificaciones infraestructura existente",
                color: "blue",
                metric: "48h"
              },
              {
                icon: Truck,
                title: "100% Móvil",
                description: "Equipos completamente portátiles con autonomía total sin requerir instalaciones fijas",
                color: "purple",
                metric: "Móvil"
              },
              {
                icon: BarChart3,
                title: "Alta Capacidad",
                description: "Procesamiento hasta 120 m³/día con tecnología clarificación lamelar de alta tasa",
                color: "slate",
                metric: "120m³"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-xl p-6 border border-teal-100/50 shadow-sm hover:shadow-lg transition-all duration-300 progressive-reveal overflow-hidden hover:-translate-y-1">
                {/* Simplified color accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 group-hover:w-2 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 ml-3">
                  {/* Icon and metric */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative p-3 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-teal-600" />
                    </div>

                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">
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
                  <div className="flex items-center text-teal-600 group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Más información</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Service Page Applications - Customer-Focused Design */}
          <div className="mb-20">
            <div className="text-center mb-12 progressive-reveal">
              <h3 className="text-4xl font-black text-gray-900 mb-4">Industrias que Servimos</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Soluciones móviles de clarificación especializadas para cada sector con resultados comprobados
              </p>
            </div>

            {/* Industry Applications Matrix - Clean & Focused */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Aplicaciones Industriales TSF</h3>
                    <p className="text-slate-300 text-sm">Resultados comprobados por sector minero y ambiental</p>
                  </div>
                  <div className="text-teal-400 text-sm font-mono">VALIDADO ✓</div>
                </div>
              </div>

              {/* Applications Grid */}
              <div className="p-8">
                <div className="space-y-4">
                  {industrialApplications.map((app, index) => (
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
      <section ref={processRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-8 relative">
          {/* Enterprise Header */}
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-teal-500/10 to-teal-400/5 rounded-full text-teal-700 text-sm font-semibold border border-teal-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 enterprise-pulse"></div>
              Proceso Optimizado
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Proceso de Clarificación
              <span className="block text-teal-600 gradient-text-animated">y Tratamiento</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Metodología probada de <span className="font-semibold text-teal-600">4 etapas integradas</span> que garantiza máxima recuperación agua proceso.
            </p>
          </div>

          {/* Process Flow Map */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative progressive-reveal">
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 -right-3 z-0">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-teal-500 to-teal-400"></div>
                        <div className="absolute -right-1 -top-1 w-2 h-2 bg-teal-500 rounded-full"></div>
                      </div>
                    )}

                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 group h-96 flex flex-col">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>

                      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <step.icon className="w-8 h-8 text-teal-600" />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                            {step.title}
                          </h3>

                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>

                          {step.additionalInfo && (
                            <div className="space-y-2 mt-4">
                              {step.additionalInfo.split(' • ').map((bullet, bulletIndex) => (
                                <div key={bulletIndex} className="flex items-start space-x-3 group/bullet">
                                  <div className="relative flex-shrink-0 mt-1 w-4 h-4">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-teal-600 rounded-full"></div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '1s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s', animationDelay: '2s'}}>
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-300 rounded-full"></div>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-700 font-medium leading-relaxed group-hover/bullet:text-teal-700 transition-colors duration-200">
                                    {bullet.trim()}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <span className="text-xs font-medium text-gray-500">ETAPA {step.step}</span>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  parseInt(step.step) >= dot ? 'bg-teal-500' : 'bg-gray-200'
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
              <p className="text-slate-300">Resultados comprobados en operaciones agua</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-teal-400 mb-2">120</div>
                <div className="text-sm text-slate-300">m³/día</div>
                <div className="text-xs text-slate-400">Capacidad máxima</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-teal-400 mb-2">48-72h</div>
                <div className="text-sm text-slate-300">Instalación</div>
                <div className="text-xs text-slate-400">Sistema operativo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-teal-400 mb-2">95%</div>
                <div className="text-sm text-slate-300">Reutilización</div>
                <div className="text-xs text-slate-400">Agua proceso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-teal-400 mb-2">100%</div>
                <div className="text-sm text-slate-300">DS90</div>
                <div className="text-xs text-slate-400">Cumplimiento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className="py-24 bg-gradient-to-br from-teal-50/30 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-8 relative">
          <div className="text-center mb-20 progressive-reveal">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-teal-500/10 to-teal-400/5 rounded-full text-teal-700 text-sm font-semibold border border-teal-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 enterprise-pulse"></div>
              Casos de Éxito Comprobados
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight enterprise-slide-up">
              Resultados
              <span className="block text-teal-600 gradient-text-animated">Verificados</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed progressive-reveal">
              Implementaciones exitosas en <span className="font-semibold text-teal-600">tratamiento agua</span>
              con resultados medibles y ROI comprobado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl layered-shadow-hover border border-teal-100/50 p-8 sophisticated-hover magnetic-hover progressive-reveal overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-teal-400 rounded-full enterprise-pulse"></div>
                    <div className="w-1 h-1 bg-teal-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-1 bg-teal-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-4 h-4 bg-teal-600 rounded-full enterprise-pulse"></div>
                    <h3 className="text-2xl font-black text-gray-900 gradient-text-animated">{useCase.industry}</h3>
                  </div>

                  <h4 className="text-lg font-bold text-teal-600 mb-4">{useCase.application}</h4>

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
                      <p className="text-teal-600 text-sm font-semibold">{useCase.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">{useCase.client}</span>
                      <span className="text-xs text-teal-600 font-semibold">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="relative max-w-8xl mx-auto px-8 py-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-6 gradient-text-animated">
            ¿Necesitas Optimizar Recuperación de Agua?
          </h2>
          <p className="text-xl text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Diagnóstico técnico especializado para máxima reutilización y cumplimiento DS90.
            <span className="font-semibold text-teal-300">Evaluación sin costo con nuestros expertos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-white text-teal-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-teal-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-teal-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Solicitar Evaluación</span>
              <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover">
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10">Descargar Casos AMD</span>
              <Play className="relative z-10 w-5 h-5 ml-3 enterprise-pulse" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


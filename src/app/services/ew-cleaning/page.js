'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'

export default function EWCleaningServicePage() {
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
      title: 'Diagnóstico Integral',
      description: 'Evaluación estado celdas: eficiencia corriente, calidad cátodos, voltajes',
      additionalInfo: 'Medición parámetros eléctricos • Análisis impurezas • Inspección visual',
      icon: FlaskConical
    },
    {
      step: '2',
      title: 'Stripping Especializado',
      description: 'Remoción selectiva depósitos según tipo metal y contaminación',
      additionalInfo: 'Stripping ácido controlado • Recuperación metal • Protección substrato',
      icon: Target
    },
    {
      step: '3',
      title: 'Limpieza Avanzada',
      description: 'Tratamiento electroquímico y químico para reactivación superficies',
      additionalInfo: 'Limpieza electrolítica • Pasivación controlada • Preparación contactos',
      icon: Zap
    },
    {
      step: '4',
      title: 'Optimización Performance',
      description: 'Reajuste parámetros operacionales para máxima eficiencia',
      additionalInfo: 'Calibración densidad corriente • Control voltaje • Monitoreo continuo',
      icon: TrendingUp
    }
  ]

  const useCases = [
    {
      industry: 'Cobre SX-EW',
      application: 'Recuperación celdas contaminadas orgánico',
      challenge: 'Acumulación orgánico arrastrado causaba cortocircuitos masivos, eficiencia corriente caída 78%',
      solution: 'Stripping completo + limpieza ácida especializada + reoptimización parámetros',
      result: 'Eficiencia corriente recuperada 94%, cátodos 99.99% Cu',
      client: 'Codelco Radomiro Tomic',
      savings: 'ROI 4 meses'
    },
    {
      industry: 'Zinc EW',
      application: 'Calidad SHG premium para laminación',
      challenge: 'Deposición rugosa Zn por trazas Co/Ni imposibilitaba laminación directa',
      solution: 'Limpieza ultra-pura electrodos Al + control estricto &lt;0.001% impurezas',
      result: 'Pureza zinc 99.995% SHG, superficie lisa',
      client: 'Korea Zinc Smelter',
      savings: 'Premium +$200/t'
    },
    {
      industry: 'Níquel EW',
      application: 'Reactivación celdas degradadas alta corriente',
      challenge: 'Pasivación crítica ánodos Ni causaba voltaje excesivo +40% consumo energético',
      solution: 'Reactivación electroquímica ánodos DSA + optimización densidad corriente',
      result: 'Reducción consumo energético 30%, cátodos grado LME',
      client: 'Pacific Metals Ni Refinery',
      savings: 'Ahorro $2.8M/año'
    }
  ]

  const industrialApplications = [
    {
      element: "Cu",
      industry: "Electroobtención Cobre",
      application: "Optimización celdas EW contaminadas",
      performance: "95% Eficiencia corriente",
      specs: "Incremento 25% productividad | Cátodos 99.99% Cu",
      color: "#ea580c",
      status: "Operativo"
    },
    {
      element: "Zn",
      industry: "Electroobtención Zinc",
      application: "Purificación ultra-alta cátodos",
      performance: "99.995% Pureza Zn",
      specs: "Calidad SHG LME | Superficie lisa laminación",
      color: "#64748b",
      status: "Especializado"
    },
    {
      element: "Ni",
      industry: "Electroobtención Níquel",
      application: "Recuperación celdas degradadas",
      performance: "30% Reducción OPEX",
      specs: "Reactivación ánodos | Cátodos grado LME",
      color: "#10b981",
      status: "Recuperación"
    },
    {
      element: "Co",
      industry: "Electroobtención Cobalto",
      application: "Control impurezas trazas",
      performance: "99.8% Pureza Co",
      specs: "Eliminación Ni/Fe | Cátodos premium",
      color: "#6366f1",
      status: "Premium"
    },
    {
      element: "Au",
      industry: "Electroafinación Oro",
      application: "Limpieza cátodos Au contaminados",
      performance: "99.99% Pureza Au",
      specs: "Eliminación Ag/Cu | Estándar LBMA",
      color: "#f59e0b",
      status: "Afinación"
    },
    {
      element: "Ag",
      industry: "Electroafinación Plata",
      application: "Recuperación plata electrolítica",
      performance: "99.9% Pureza Ag",
      specs: "Stripping selectivo | Calidad comercial",
      color: "#94a3b8",
      status: "Precioso"
    }
  ]

  const caseStudies = [
    {
      title: "Recuperación Total Celdas EW Cobre",
      client: "Codelco Radomiro Tomic",
      challenge: "Acumulación orgánico arrastrado causaba cortocircuitos masivos, eficiencia corriente caída 78% y rechazo 15% cátodos por contaminación.",
      solution: "Stripping completo 120 celdas + limpieza ácida especializada electrodos + pasivación superficies + reoptimización parámetros.",
      results: [
        "Eficiencia corriente: 94%",
        "Cátodos 99.99% Cu sin rechazos",
        "Incremento producción: 18%",
        "ROI: 4 meses"
      ],
      metrics: {
        before: { efficiency: "78%", purity: "99.8%", rejection: "15%" },
        after: { efficiency: "94%", purity: "99.99%", rejection: "&lt;1%" }
      },
      industry: "Cobre",
      color: "#ea580c"
    },
    {
      title: "Optimización Premium Zinc SHG",
      client: "Korea Zinc Smelter",
      challenge: "Deposición rugosa Zn por trazas Co/Ni imposibilitaba laminación directa, pérdida premium $200/t por calidad inferior.",
      solution: "Limpieza ultra-pura electrodos Al + control estricto &lt;0.001% impurezas + optimización densidad corriente para superficie lisa.",
      results: [
        "Pureza zinc: 99.995% SHG",
        "Superficie lisa laminación",
        "Premium calidad: +$200/t",
        "Certificación LME mantenida"
      ],
      metrics: {
        before: { purity: "99.9%", surface: "rugosa", premium: "$0/t" },
        after: { purity: "99.995%", surface: "lisa", premium: "+$200/t" }
      },
      industry: "Zinc",
      color: "#64748b"
    },
    {
      title: "Reactivación Celdas Níquel Degradadas",
      client: "Pacific Metals Ni Refinery",
      challenge: "Pasivación crítica ánodos Ni causaba voltaje excesivo +40% consumo energético, amenazando viabilidad operación.",
      solution: "Reactivación electroquímica ánodos DSA + optimización densidad corriente + control automático parámetros.",
      results: [
        "Reducción consumo energético: 30%",
        "Cátodos grado LME recuperados",
        "Ahorro energía: $2.8M/año",
        "Extensión vida útil ánodos: 50%"
      ],
      metrics: {
        before: { voltage: "3.8V", efficiency: "65%", cost: "$4.2M/año" },
        after: { voltage: "2.6V", efficiency: "91%", cost: "$1.4M/año" }
      },
      industry: "Níquel",
      color: "#10b981"
    }
  ]

  const benefits = [
    'Incremento eficiencia corriente 15-25%',
    'Cátodos &gt;99.5% pureza sin rechazos',
    'Reducción 30% consumo energético',
    'Extensión 50% vida útil electrodos',
    'Eliminación cortocircuitos y dendritas',
    'ROI &lt;6 meses en operaciones continuas',
    'Cumplimiento estándares LME/LBMA'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enterprise Background with Advanced Patterns */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/30 min-h-screen overflow-hidden">
        {/* Complex Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        {/* Advanced Floating Elements */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* TSF Signature Corner */}
        <div className="absolute top-6 right-8 opacity-60">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-8xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-amber-600 font-medium">Limpieza y Optimización Celdas EW</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
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
        <div className="relative z-10 max-w-8xl mx-auto px-8 pt-12 pb-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Premium Content */}
            <div className="lg:col-span-7 overflow-visible">
              {/* Main Heading */}
              <div className="mb-6 relative z-[100] progressive-reveal">
                <h1 className="text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight text-slate-900 leading-[0.9] mb-4">
                  Limpieza y
                  <span className="block text-amber-600">
                    Optimización Celdas EW
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                  Incremento 15-25% eficiencia corriente con cátodos &gt;99.5% pureza mediante limpieza especializada
                </p>
              </div>

              {/* Key Value Props */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 progressive-reveal">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">25%</div>
                    <div className="text-sm text-slate-500">Incremento máximo</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">5000A</div>
                    <div className="text-sm text-slate-500">Capacidad celdas</div>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 progressive-reveal">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 flex items-center justify-center">
                  Evaluar mi Proceso
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                  Descargar Casos EW
                </button>
              </div>
            </div>

            {/* Right Column - Advanced Metrics */}
            <div className="lg:col-span-5 progressive-reveal">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Métricas de Performance</h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Eficiencia Corriente</span>
                    <span className="font-bold text-2xl text-amber-600">&gt;95%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Pureza Cátodos</span>
                    <span className="font-bold text-2xl text-amber-600">99.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Capacidad Celdas</span>
                    <span className="font-bold text-2xl text-amber-600">5000A</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900 mb-1">&lt;6 meses</div>
                    <div className="text-sm text-slate-500">ROI típico proyectos EW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section ref={overviewRef} className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 progressive-reveal">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-slate-900">{useCase.industry}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-amber-600 mb-2">{useCase.application}</h4>
                  <p className="text-slate-600 text-sm mb-4">{useCase.challenge}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Solución TSF</span>
                    <p className="text-slate-700 font-medium">{useCase.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Resultado</span>
                    <p className="text-slate-900 font-bold">{useCase.result}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{useCase.client}</span>
                      <span className="text-sm font-semibold text-green-600">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Matrix */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Aplicaciones por Metal
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Servicios especializados optimización electroobtención para cada metal con estándares internacionales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {industrialApplications.map((app, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-500 hover:-translate-y-2 progressive-reveal"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.element}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{app.industry}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">{app.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-500">Aplicación</span>
                    <p className="text-slate-900 font-medium">{app.application}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-500">Performance</span>
                    <p className="text-lg font-bold" style={{ color: app.color }}>{app.performance}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-500">Especificaciones Técnicas</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{app.specs}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 group-hover:bg-slate-900 group-hover:text-white">
                    Ver Especificaciones
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Proceso de Optimización EW
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Metodología especializada para máxima eficiencia corriente y calidad cátodos
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-96 flex flex-col progressive-reveal">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-amber-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{step.description}</p>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-slate-500">{step.additionalInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={caseStudiesRef} className="py-20 bg-slate-50">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transformaciones exitosas electroobtención con incrementos cuantificables eficiencia y calidad
            </p>
          </div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 progressive-reveal"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Case Study Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: study.color }}
                      >
                        {study.industry === 'Cobre' ? 'Cu' : study.industry === 'Zinc' ? 'Zn' : 'Ni'}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-500">{study.industry}</span>
                        <h3 className="text-2xl font-black text-slate-900">{study.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 font-medium">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Desafío
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        Solución TSF
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-1">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Resultados
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Before/After Metrics */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <span className="text-xs text-slate-500 block">Antes</span>
                          <div className="text-lg font-bold text-red-600">{Object.values(study.metrics.before)[0]}</div>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 block">Después</span>
                          <div className="text-lg font-bold text-green-600">{Object.values(study.metrics.after)[0]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Contact */}
      <section ref={benefitsRef} className="py-20 bg-slate-900">
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="progressive-reveal">
              <h2 className="text-4xl font-black text-white mb-6">
                Beneficios Clave
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Ventajas competitivas de nuestros servicios de optimización electroobtención
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 progressive-reveal">
              <h3 className="text-2xl font-bold text-white mb-6">Contacto Especializado</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Metal</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
                    <option>Cobre - EW Cu</option>
                    <option>Zinc - EW Zn SHG</option>
                    <option>Níquel - EW Ni</option>
                    <option>Metales Preciosos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Capacidad Celdas</label>
                  <input
                    type="text"
                    placeholder="ej: 5000A"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400"
                  />
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                  Solicitar Evaluación Técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
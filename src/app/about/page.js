// src/app/about/page.js
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Beaker, Users, Award, Target, CheckCircle, Calendar, TrendingUp, Zap, Clock, Building, Handshake, Globe, Fuel } from 'lucide-react'

export default function AboutPage() {
  // Phase 1: Live metrics
  const [liveMetrics, setLiveMetrics] = useState({
    yearsExperience: 23,
    clientsSatisfied: 100,
    projectsCompleted: 347,
    efficiencyGain: 22.5
  })

  // Phase 1: Three-ball loading state
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500)

    // Phase 1: Animate metrics
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        projectsCompleted: prev.projectsCompleted + Math.floor(Math.random() * 2),
        efficiencyGain: Math.round((prev.efficiencyGain + (Math.random() - 0.5) * 0.1) * 10) / 10
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Phase 1: Three-ball loader component
  const ThreeBallLoader = () => (
    <div className="flex items-center justify-center space-x-1 py-4">
      <div className="w-3 h-3 bg-emerald-600 rounded-full animate-float-up-1"></div>
      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-float-up-2"></div>
      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-float-up-3"></div>
    </div>
  )

  const milestones = [
    {
      year: "2002",
      title: "Fundación de la Empresa",
      description: "Inicio de operaciones como empresa especializada en servicios para la industria minera.",
      metric: "Fundación",
      icon: "building",
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2003",
      title: "Primer Contacto de Desborre de Celdas EW",
      description: "Exitoso primer contacto de desborre de celdas EW, estableciendo nuestra especialización en electroobtención.",
      metric: "1er Contacto EW",
      icon: "handshake",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      year: "2005",
      title: "Expansión de Servicios SX",
      description: "Expansión a servicios de filtrado de borra y tratamiento de orgánico en procesos de SX.",
      metric: "Servicios SX",
      icon: "beaker",
      color: "from-orange-500 to-orange-600"
    },
    {
      year: "2010",
      title: "Liderazgo en Mercado Chileno",
      description: "Se alcanza presencia en más del 50% del mercado minero en Chile.",
      metric: ">50% Mercado",
      icon: "trending-up",
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2020",
      title: "Expansión a Li y K",
      description: "Diversificación hacia el mercado del litio y potasio, ampliando nuestro portafolio de servicios.",
      metric: "Li & K",
      icon: "zap",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      year: "2022",
      title: "Expansión a Perú",
      description: "Comienza expansión al mercado minero en Perú mientras se aumenta la presencia en mercado chileno por sobre 70% de la minería de cobre.",
      metric: ">70% Cu Chile",
      icon: "globe",
      color: "from-green-500 to-green-600"
    },
    {
      year: "2025",
      title: "Mercado de Refinación de Petróleo",
      description: "Expansión hacia el mercado de refinación de petróleo, consolidando nuestra presencia en Latinoamérica.",
      metric: "Petróleo",
      icon: "fuel",
      color: "from-slate-600 to-slate-700"
    }
  ]

  const values = [
    {
      icon: Award,
      title: "Innovación Aplicada",
      description: "Desarrollamos e implementamos soluciones tecnológicas que generen valor real para nuestros clientes.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: CheckCircle,
      title: "Seguridad Operacional",
      description: "Priorizamos la seguridad en todas nuestras operaciones, protegiendo a nuestro equipo y clientes.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Sostenibilidad Ambiental",
      description: "Comprometidos con soluciones que contribuyan al cuidado del medio ambiente y desarrollo sostenible.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Flexibilidad Operativa",
      description: "Adaptamos nuestros servicios móviles a las necesidades específicas de cada operación.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Compromiso con Clientes y Colaboradores",
      description: "Construimos relaciones duraderas basadas en confianza, transparencia y resultados.",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  const stats = [
    { number: liveMetrics.yearsExperience + "+", label: "Años de Experiencia", description: "En el mercado minero", icon: Clock },
    { number: liveMetrics.clientsSatisfied + "%", label: "Satisfacción Cliente", description: "Índice de satisfacción", icon: Award },
    { number: liveMetrics.projectsCompleted + "+", label: "Proyectos Completados", description: "Exitosamente entregados", icon: CheckCircle },
    { number: liveMetrics.efficiencyGain + "%", label: "Mejora Promedio", description: "En eficiencia operacional", icon: TrendingUp }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Phase 2: Industrial textures */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16 relative overflow-hidden metal-texture">
          {/* Phase 2: Floating background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400 rounded-full animate-float-slow"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-emerald-600 rounded-full animate-float-delayed"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 animate-in slide-in-from-left duration-500">
                  Acerca de Tec-Ionic Durban
                </h1>
                <div className="w-24 h-1 bg-emerald-400 mb-6"></div>
                <p className="text-xl text-emerald-100 leading-relaxed mb-8 animate-in slide-in-from-left duration-700">
                  Con más de 23 años de experiencia, somos la empresa líder en servicios
                  especializados de filtrado y tratamiento de borra para procesos de
                  lixiviación, extracción por solventes y electroobtención.
                </p>
                
                {/* Phase 1: Live metrics display */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-emerald-800/30 backdrop-blur rounded-lg p-4 border border-emerald-600/30">
                    <div className="text-2xl font-bold text-emerald-300">{liveMetrics.projectsCompleted}+</div>
                    <div className="text-sm text-emerald-200">Proyectos Exitosos</div>
                  </div>
                  <div className="bg-emerald-800/30 backdrop-blur rounded-lg p-4 border border-emerald-600/30">
                    <div className="text-2xl font-bold text-emerald-300">{liveMetrics.efficiencyGain}%</div>
                    <div className="text-sm text-emerald-200">Mejora Promedio</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 industrial-shimmer">
                    <Image 
                      src="/logo.png" 
                      alt="Tec-Ionic Durban"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Tec-Ionic Durban</div>
                    <div className="text-emerald-300">Servicios LIX/SX/EW</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Phase 2: Interactive process visualization */}
                <div className="aspect-video bg-emerald-800/30 rounded-2xl flex items-center justify-center backdrop-blur border border-emerald-600/30 carbon-fiber">
                  {isLoading ? (
                    <ThreeBallLoader />
                  ) : (
                    <div className="text-center">
                      <Beaker className="w-24 h-24 text-emerald-300 mx-auto mb-4 animate-pulse" />
                      <div className="text-emerald-200 font-semibold">Innovación en Procesos Mineros</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision with Phase 2: Micro-animations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer">
                <Target className="w-12 h-12 text-emerald-600 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Asegurar la continuidad y eficiencia de las operaciones de nuestros clientes
                  mediante soluciones móviles de filtración y deshidratado que aporten valor,
                  sostenibilidad y seguridad.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer">
                <Award className="w-12 h-12 text-emerald-600 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Convertirse en el socio estratégico líder en Latinoamérica en tecnologías
                  móviles de separación sólido-líquido, ampliando presencia en cobre, zinc,
                  litio, potasio y petróleo crudo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics with Phase 1: Real-time updates */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 steel-gradient">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Resultados que Hablan</h2>
              <p className="text-xl text-emerald-100">
                Números que reflejan nuestro compromiso y experiencia
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 micro-bounce">{stat.number}</div>
                  <div className="text-xl font-semibold mb-1">{stat.label}</div>
                  <div className="text-emerald-200 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values with Phase 2: Gradient backgrounds */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                    {/* Phase 2: Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline with Enhanced Professional Design */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Más de dos décadas construyendo liderazgo en servicios especializados para la industria minera en Latinoamérica
              </p>
            </div>

            <div className="relative">
              {/* Enhanced timeline line with gradient */}
              <div className="absolute left-12 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600 rounded-full shadow-sm"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => {
                  const IconComponent = {
                    building: Building,
                    handshake: Handshake,
                    beaker: Beaker,
                    'trending-up': TrendingUp,
                    zap: Zap,
                    globe: Globe,
                    fuel: Fuel
                  }[milestone.icon] || Calendar;

                  return (
                    <div key={index} className="relative flex items-start group">
                      {/* Enhanced timeline node with icon */}
                      <div className="relative z-10">
                        <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>

                      {/* Timeline content card */}
                      <div className="ml-6 md:ml-8 flex-1">
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-emerald-200">
                          {/* Header with year and metric */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div className="flex items-center mb-2 sm:mb-0">
                              <div className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full mr-3`}></div>
                              <span className="text-2xl md:text-3xl font-bold text-gray-800">{milestone.year}</span>
                            </div>
                            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full text-sm font-semibold shadow-sm`}>
                              {milestone.metric}
                            </div>
                          </div>

                          {/* Title and description */}
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {milestone.description}
                          </p>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Timeline completion indicator */}
              <div className="flex justify-center mt-12">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-semibold">Consolidando liderazgo en Latinoamérica</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA with Phase 1: Three-ball animation */}
        <section className="py-16 bg-gray-900 relative overflow-hidden">
          {/* Phase 2: Industrial pattern overlay */}
          <div className="absolute inset-0 opacity-5 industrial-pattern"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
            <h2 className="text-4xl font-bold mb-4">¿Listo para Trabajar Juntos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubra cómo nuestra experiencia puede optimizar sus operaciones mineras.
            </p>
            
            {/* Phase 1: Three-ball decoration */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 precision-click">
                Contactar Ahora
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Ver Servicios
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
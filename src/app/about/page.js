// src/app/about/page.js
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Beaker, Users, Award, Target, CheckCircle, Calendar, TrendingUp, Shield, Zap, Clock } from 'lucide-react'

export default function AboutPage() {
  // Phase 1: Live metrics
  const [liveMetrics, setLiveMetrics] = useState({
    yearsExperience: 18,
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
      year: "2006",
      title: "Fundación de la Empresa",
      description: "Inicio de operaciones especializándose en servicios de filtrado y tratamiento de borra.",
      metric: "1° Planta"
    },
    {
      year: "2010",
      title: "Expansión de Servicios",
      description: "Incorporación de servicios de housekeeping integral y desborre de celdas EW.",
      metric: "+150% Crecimiento"
    },
    {
      year: "2015",
      title: "Certificaciones de Calidad",
      description: "Obtención de certificaciones ISO y implementación de estándares de seguridad.",
      metric: "ISO 9001/14001"
    },
    {
      year: "2020",
      title: "Tecnología Avanzada",
      description: "Incorporación de tecnologías de diálisis y filtración selectiva avanzada.",
      metric: "+40% Eficiencia"
    },
    {
      year: "2024",
      title: "Liderazgo en el Mercado",
      description: "Reconocidos como líderes en servicios especializados para la industria minera.",
      metric: "#1 Chile"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Excelencia Técnica",
      description: "Comprometidos con la máxima calidad técnica en cada servicio que proporcionamos.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Profesionales altamente capacitados con años de experiencia en la industria.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Innovación Continua",
      description: "Constantemente desarrollamos nuevas soluciones para optimizar procesos mineros.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: CheckCircle,
      title: "Compromiso Ambiental",
      description: "Servicios que priorizan la sostenibilidad y el cuidado del medio ambiente.",
      color: "from-green-500 to-emerald-600"
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
                  Con más de 18 años de experiencia, somos la empresa líder en servicios 
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
                  Proporcionar servicios especializados de filtrado y tratamiento de borra 
                  que generen mejoras significativas en las eficiencias de plantas de 
                  extracción por solventes y electroobtención, contribuyendo al éxito 
                  operacional de nuestros clientes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer">
                <Award className="w-12 h-12 text-emerald-600 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconocidos como la empresa líder en servicios especializados 
                  para la industria minera, estableciendo nuevos estándares de 
                  excelencia técnica y contribuyendo al desarrollo sostenible 
                  del sector en Chile y Latinoamérica.
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Timeline with Phase 2: Enhanced animations */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
              <p className="text-xl text-gray-600">
                Un recorrido de crecimiento y especialización continua
              </p>
            </div>
            <div className="relative">
              {/* Timeline line with gradient */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className="absolute left-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="ml-16 bg-gray-50 rounded-lg p-6 flex-1 hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                          <span className="text-emerald-600 font-bold text-lg">{milestone.year}</span>
                        </div>
                        {/* Phase 1: Metric badge */}
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          {milestone.metric}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
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
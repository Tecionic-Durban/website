'use client'

import { useState } from 'react'
import { AlertTriangle, CheckCircle, ArrowRight, Clock, TrendingUp, Zap, Settings, Shield, Target } from 'lucide-react'

export default function OperationalProblemsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const commonProblems = [
    {
      problem: 'Acumulación Borras en Plantas SX',
      industry: 'Cobre',
      symptoms: [
        'Incremento frecuencia crud runs',
        'Pérdidas orgánico >2% mensuales',
        'Deterioro separación fases'
      ],
      impact: 'Pérdidas económicas significativas por paradas y reactivos',
      solution: 'Filtros prensa móviles 70 ton/día',
      timeline: '1-2 semanas implementación',
      icon: AlertTriangle,
      urgency: 'high'
    },
    {
      problem: 'Contaminación Orgánico SX',
      industry: 'Hidrometalurgia',
      symptoms: [
        'Degradación extractante acelerada',
        'Formación emulsiones estables',
        'Reducción selectividad extracción'
      ],
      impact: 'Incremento 40-60% costos operacionales',
      solution: 'Sistemas recuperación orgánico 90-95%',
      timeline: '2-3 semanas implementación',
      icon: Settings,
      urgency: 'high'
    },
    {
      problem: 'Sólidos Finos en Procesos DLE',
      industry: 'Litio',
      symptoms: [
        'Fouling membranas selectivas',
        'Reducción vida útil resinas IX',
        'Deterioro eficiencia extracción'
      ],
      impact: 'Incremento OPEX 15-25% por reemplazos',
      solution: 'Centrífugas alta velocidad 14 ton/día',
      timeline: '1-2 semanas implementación',
      icon: Target,
      urgency: 'medium'
    },
    {
      problem: 'Eficiencia Baja Celdas EW',
      industry: 'Electroobtención',
      symptoms: [
        'Eficiencia corriente <90%',
        'Formación dendritas',
        'Calidad cátodos deficiente'
      ],
      impact: 'Pérdida productividad 10-20%',
      solution: 'Limpieza y optimización celdas',
      timeline: '3-5 días mantenimiento',
      icon: Zap,
      urgency: 'medium'
    }
  ]

  const solutionSteps = [
    {
      step: '1',
      title: 'Diagnóstico Rápido',
      description: 'Evaluación in-situ en 24-48 horas',
      icon: Settings,
      duration: '1-2 días'
    },
    {
      step: '2',
      title: 'Propuesta Técnica',
      description: 'Solución personalizada con cronograma',
      icon: Target,
      duration: '3-5 días'
    },
    {
      step: '3',
      title: 'Implementación',
      description: 'Montaje equipos sin parada planta',
      icon: TrendingUp,
      duration: '1-3 semanas'
    },
    {
      step: '4',
      title: 'Optimización',
      description: 'Ajuste fino y transferencia conocimiento',
      icon: CheckCircle,
      duration: '1 semana'
    }
  ]

  const benefits = [
    'Resolución rápida sin paradas prolongadas',
    'Implementación sin modificar permisos',
    'Recuperación inmediata productividad',
    'ROI típico <6 meses',
    'Soporte técnico continuo',
    'Flexibilidad operacional total',
    'Transferencia conocimiento técnico'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-red-800/50 rounded-xl flex items-center justify-center mr-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Problemas Operacionales</h1>
              <p className="text-red-200 text-lg mt-2">Soluciones rápidas para desafíos operacionales críticos</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-red-300 mr-2" />
                <span className="text-lg font-bold">24-48h</span>
              </div>
              <p className="text-red-200 text-sm">Diagnóstico inicial</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-red-300 mr-2" />
                <span className="text-lg font-bold">1-3 sem</span>
              </div>
              <p className="text-red-200 text-sm">Implementación típica</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-red-300 mr-2" />
                <span className="text-lg font-bold">Sin paradas</span>
              </div>
              <p className="text-red-200 text-sm">Instalación en operación</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-red-300 mr-2" />
                <span className="text-lg font-bold">&lt;6 meses</span>
              </div>
              <p className="text-red-200 text-sm">ROI típico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Descripción General' },
              { id: 'problems', label: 'Problemas Comunes' },
              { id: 'process', label: 'Proceso Solución' },
              { id: 'benefits', label: 'Beneficios' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {activeTab === 'overview' && (
            <div className="prose max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuando los Problemas Operacionales Impactan su Productividad</h2>
              <p className="text-lg text-gray-600 mb-6">
                Los problemas operacionales en plantas hidrometalúrgicas pueden surgir repentinamente y generar 
                pérdidas significativas. Nuestro servicio está diseñado para ofrecer soluciones rápidas y efectivas 
                que resuelvan crisis operacionales sin necesidad de paradas prolongadas o inversiones mayores.
              </p>
              
              <div className="bg-red-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Cuándo Necesita Nuestros Servicios</h3>
                <p className="text-red-800 mb-4">
                  Identifique si su operación presenta alguno de estos síntomas críticos:
                </p>
                <ul className="text-red-800 space-y-2">
                  <li>• <strong>Pérdidas orgánico SX</strong> superiores al 2% mensual</li>
                  <li>• <strong>Formación crud runs</strong> frecuentes (&gt;1 vez por semana)</li>
                  <li>• <strong>Eficiencia EW</strong> por debajo del 90%</li>
                  <li>• <strong>Contaminación sólidos finos</strong> en procesos DLE</li>
                  <li>• <strong>Acumulación borras</strong> que afecta capacidad planta</li>
                  <li>• <strong>Deterioro calidad</strong> productos finales</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestro Enfoque</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                      Diagnóstico rápido in-situ
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                      Soluciones móviles inmediatas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                      Implementación sin paradas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                      Resultados medibles inmediatos
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ventajas Competitivas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-red-600 mr-2" />
                      15+ años experiencia hidrometalurgia
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-red-600 mr-2" />
                      Equipos móviles certificados
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-red-600 mr-2" />
                      Respuesta &lt;72 horas emergencias
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-red-600 mr-2" />
                      Soporte técnico especializado 24/7
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'problems' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Problemas Operacionales Más Frecuentes</h2>
              
              <div className="space-y-8">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          problem.urgency === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}>
                          <problem.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{problem.problem}</h3>
                          <p className="text-gray-600">Sector: {problem.industry}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        problem.urgency === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {problem.urgency === 'high' ? 'Alta Urgencia' : 'Urgencia Media'}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Síntomas</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {problem.symptoms.map((symptom, idx) => (
                            <li key={idx}>• {symptom}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Impacto</h4>
                        <p className="text-gray-600 text-sm">{problem.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Solución TSF</h4>
                        <p className="text-red-600 text-sm font-medium">{problem.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Timeline</h4>
                        <p className="text-green-600 text-sm font-medium">{problem.timeline}</p>
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      problem.urgency === 'high' ? 'bg-red-50' : 'bg-yellow-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Nivel de Urgencia</span>
                        <span className={`text-sm font-bold ${
                          problem.urgency === 'high' ? 'text-red-600' : 'text-yellow-600'
                        }`}>
                          {problem.urgency === 'high' ? 'CRÍTICO - Acción Inmediata' : 'IMPORTANTE - Planificar Solución'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Resolución</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {solutionSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Metodología de Diagnóstico</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Evaluación In-Situ</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">Análisis proceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">Muestreo y caracterización</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">Medición parámetros críticos</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Análisis Técnico</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Settings className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">Identificación causa raíz</span>
                      </li>
                      <li className="flex items-start">
                        <Settings className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">Modelamiento soluciones</span>
                      </li>
                      <li className="flex items-start">
                        <Settings className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">Evaluación económica</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-red-900 mb-6">Garantías de Servicio</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">Tiempo Respuesta</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Emergencias: &lt;72 horas</li>
                      <li>• Diagnóstico inicial: 24-48 horas</li>
                      <li>• Propuesta técnica: 3-5 días</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">Resultados</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Solución efectiva garantizada</li>
                      <li>• ROI demostrable</li>
                      <li>• Soporte continuo incluido</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">Flexibilidad</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Sin inversión CAPEX inicial</li>
                      <li>• Contratos flexibles</li>
                      <li>• Escalabilidad según necesidad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios de Resolver Problemas Operacionales</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Inmediatas</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-red-800">Recuperación productividad</span>
                        <span className="font-bold text-red-900">Inmediata</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-red-800">ROI típico</span>
                        <span className="font-bold text-red-900">&lt; 6 meses</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-red-800">Reducción pérdidas</span>
                        <span className="font-bold text-red-900">60-80%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Impacto Operacional</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Tiempo implementación</span>
                        <span className="font-bold text-green-900">1-3 semanas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Paradas requeridas</span>
                        <span className="font-bold text-green-900">Ninguna</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Casos de Éxito Recientes</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">72h</div>
                    <div className="text-sm text-gray-600">Promedio resolución emergencias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                    <div className="text-sm text-gray-600">Clientes satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">80%</div>
                    <div className="text-sm text-gray-600">Reducción típica pérdidas</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Enfrentando Problemas Operacionales Críticos?</h2>
          <p className="text-xl mb-8">
            Contacte a nuestros especialistas para diagnóstico rápido y solución efectiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 flex items-center justify-center">
              Solicitar Diagnóstico Urgente
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
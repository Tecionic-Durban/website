'use client'

import { useState } from 'react'
import { Droplets, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, TrendingUp, Activity } from 'lucide-react'

export default function ConcentrateDehydrationServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const specifications = {
    moisture: 'Cu concentrados: 18-22% → 8-12% | Zn concentrados: 15-20% → 6-10%',
    pressure: 'Filtros prensa: 8-15 bar | Centrífugas: 800-1200 G-force',
    granulometry: 'Rango partículas: 5-150 μm | D50: 25-45 μm típico',
    density: 'Concentrados Cu: 3.2-4.1 g/cm³ | Concentrados Zn: 3.8-4.3 g/cm³',
    chemistry: 'pH trabajo: 6-9 | Conductividad: <5000 μS/cm agua proceso',
    transport: 'TML compliance: <10% humedad final | Certificación IMSBC',
    recovery: 'Recuperación agua: 85-92% | Claridad filtrado: <200 NTU',
    automation: 'Control humedad tiempo real | Sistemas pesaje automático'
  }

  const processSteps = [
    {
      step: '1',
      title: 'Caracterización',
      description: 'Análisis granulometría y composición mineralógica',
      icon: Activity
    },
    {
      step: '2', 
      title: 'Acondicionamiento',
      description: 'Preparación pulpa y ajuste parámetros',
      icon: Settings
    },
    {
      step: '3',
      title: 'Deshidratación',
      description: 'Filtración/centrifugación de alta eficiencia',
      icon: Droplets
    },
    {
      step: '4',
      title: 'Calidad',
      description: 'Control humedad y especificaciones finales',
      icon: TrendingUp
    }
  ]

  const benefits = [
    'Reducción significativa costos transporte',
    'Mejora calidad concentrados para fundición',
    'Cumplimiento especificaciones comerciales',
    'Menor impacto ambiental',
    'Optimización logística y almacenamiento',
    'Recuperación agua proceso',
    'Operación continua 24/7'
  ]

  const applications = [
    {
      mineral: 'Concentrados Cobre',
      challenge: 'Humedad &gt;12% penaliza fundición y transporte',
      solution: 'Filtros prensa hasta 8% humedad final',
      benefit: 'Reducción 30% costos transporte'
    },
    {
      mineral: 'Concentrados Zinc',
      challenge: 'Requerimientos estrictos fundición (&lt;10%)',
      solution: 'Centrífugas de alta velocidad',
      benefit: 'Cumplimiento especificaciones comerciales'
    },
    {
      mineral: 'Concentrados Oro',
      challenge: 'Pérdidas metálicas en agua filtrada',
      solution: 'Sistemas cerrados con recuperación',
      benefit: 'Máxima recuperación valores'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-cyan-800/50 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="8" width="16" height="12" rx="2" strokeWidth="2"/>
                <rect x="6" y="10" width="12" height="8" fill="currentColor" opacity="0.3"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6V4a2 2 0 014 0v2m4 0V4a2 2 0 014 0v2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 14h2m4 0h2M9 16h6"/>
                <circle cx="12" cy="3" r="1" fill="currentColor"/>
                <circle cx="8" cy="3" r="0.5" fill="currentColor" opacity="0.6"/>
                <circle cx="16" cy="3" r="0.5" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Deshidratación de Concentrados</h1>
              <p className="text-cyan-200 text-lg mt-2">Hasta 50 ton/día con 85-92% reducción humedad</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 text-cyan-300 mr-2" />
                <span className="text-lg font-bold">50</span>
              </div>
              <p className="text-cyan-200 text-sm">Ton/día capacidad máxima</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-cyan-300 mr-2" />
                <span className="text-lg font-bold">92%</span>
              </div>
              <p className="text-cyan-200 text-sm">Reducción humedad máxima</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Truck className="w-5 h-5 text-cyan-300 mr-2" />
                <span className="text-lg font-bold">100%</span>
              </div>
              <p className="text-cyan-200 text-sm">Móvil sin instalaciones</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-cyan-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-cyan-200 text-sm">Operación continua</p>
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
              { id: 'process', label: 'Proceso' },
              { id: 'benefits', label: 'Beneficios' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-cyan-600 text-cyan-600'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Deshidratación Eficiente para Concentrados Mineros</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros sistemas de deshidratación están diseñados para procesar concentrados mineros de alta calidad, 
                reduciendo la humedad hasta niveles comerciales requeridos por fundiciones. Utilizamos tecnología móvil 
                que permite implementación rápida sin modificar la infraestructura existente.
              </p>
              
              <div className="bg-cyan-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-cyan-900 mb-4">Desafíos de la Deshidratación de Concentrados</h3>
                <p className="text-cyan-800 mb-4">
                  Los concentrados con alta humedad generan problemas significativos:
                </p>
                <ul className="text-cyan-800 space-y-2">
                  <li>• Penalizaciones comerciales por exceso humedad</li>
                  <li>• Incremento costos transporte y manejo</li>
                  <li>• Problemas operacionales en fundición</li>
                  <li>• Riesgo contaminación y pérdida calidad</li>
                  <li>• Dificultades almacenamiento prolongado</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologías Disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                      Filtros prensa alta presión
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                      Centrífugas industriales
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                      Sistemas híbridos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mr-2" />
                      Secado térmico complementario
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Minerales Procesados</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-cyan-600 mr-2" />
                      Concentrados cobre (Cu)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-cyan-600 mr-2" />
                      Concentrados zinc (Zn)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-cyan-600 mr-2" />
                      Concentrados plomo (Pb)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-cyan-600 mr-2" />
                      Concentrados oro y metales preciosos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Deshidratación</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Especificaciones Técnicas</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Parámetros Operacionales</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Control de Calidad</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Activity className="w-5 h-5 text-cyan-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Monitoreo Continuo</div>
                          <div className="text-sm text-gray-600">Humedad, densidad, granulometría</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-cyan-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">KPIs Tiempo Real</div>
                          <div className="text-sm text-gray-600">Eficiencia, throughput, calidad</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-cyan-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Certificación</div>
                          <div className="text-sm text-gray-600">Cumplimiento especificaciones comerciales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

{activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios de la Deshidratación</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Operacionales</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-cyan-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-cyan-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-800">Reducción costos transporte</span>
                        <span className="font-bold text-cyan-900">25-35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-800">Mejora precio venta</span>
                        <span className="font-bold text-cyan-900">3-5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-800">ROI típico</span>
                        <span className="font-bold text-cyan-900">&lt; 18 meses</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Impacto Ambiental</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Recuperación agua</span>
                        <span className="font-bold text-green-900">80-90%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Reducción emisiones CO₂</span>
                        <span className="font-bold text-green-900">20-30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Necesita Optimizar la Humedad de sus Concentrados?</h2>
          <p className="text-xl mb-8">
            Evaluación técnica especializada para cumplir especificaciones comerciales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center">
              Análisis de Concentrados
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
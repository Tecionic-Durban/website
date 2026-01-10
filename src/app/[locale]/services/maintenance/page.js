'use client'

import { useState } from 'react'
import { Settings, CheckCircle, ArrowRight, Truck, Shield, Clock, BarChart3, TrendingUp, Wrench, AlertCircle, Users } from 'lucide-react'

export default function MaintenanceServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const specifications = {
    availability: '24/7 soporte técnico especializado',
    response: '&lt;4 horas respuesta emergencias',
    coverage: 'Mantenimiento preventivo y correctivo',
    expertise: '15+ años experiencia hidrometalurgia'
  }

  const serviceTypes = [
    {
      type: 'Mantenimiento Preventivo',
      description: 'Programas estructurados para maximizar uptime',
      icon: Clock,
      features: [
        'Inspecciones programadas mensuales',
        'Análisis predictivo vibración y temperatura',
        'Reemplazo componentes vida útil',
        'Optimización parámetros operacionales'
      ]
    },
    {
      type: 'Mantenimiento Correctivo',
      description: 'Reparaciones especializadas emergencias',
      icon: AlertCircle,
      features: [
        'Respuesta &lt;4 horas emergencias',
        'Diagnóstico avanzado fallas',
        'Reparación in-situ equipos',
        'Respaldo equipos disponibles'
      ]
    },
    {
      type: 'Mantenimiento Predictivo',
      description: 'Tecnología IoT para anticipar fallas',
      icon: TrendingUp,
      features: [
        'Sensores IoT monitoreo continuo',
        'Analytics AI predicción fallas',
        'Alertas tempranas deterioro',
        'Optimización automática performance'
      ]
    }
  ]

  const benefits = [
    'Maximización uptime &gt;95% disponibilidad',
    'Reducción costos mantenimiento 30%',
    'Extensión vida útil equipos',
    'Soporte técnico especializado 24/7',
    'Respuesta rápida emergencias',
    'Inventario respuestos optimizado',
    'Transferencia conocimiento técnico'
  ]

  const maintenancePrograms = [
    {
      program: 'Programa Integral Filtros Prensa',
      equipment: 'Filtros Prensa Móviles',
      challenge: 'Desgaste placas y membranas, pérdida eficiencia filtración',
      solution: 'Mantenimiento preventivo 500 hrs + predictivo sensores presión',
      result: 'Disponibilidad &gt;95%, vida útil +40% componentes',
      client: 'Operaciones Cobre',
      kpi: { availability: '95%', lifespan: '+40%' }
    },
    {
      program: 'Mantenimiento Predictivo Centrífugas',
      equipment: 'Centrífugas Alta Velocidad',
      challenge: 'Fallas imprevistas por desbalance y desgaste rodamientos',
      solution: 'Monitoreo vibración continuo + análisis aceite lubricante',
      result: 'Reducción 80% paradas no programadas, MTBF +60%',
      client: 'Operaciones DLE Litio',
      kpi: { downtime: '-80%', mtbf: '+60%' }
    },
    {
      program: 'Soporte Integral Clarificadores',
      equipment: 'Sistemas Clarificación',
      challenge: 'Variabilidad calidad agua afecta eficiencia separación',
      solution: 'Optimización continua parámetros + mantenimiento lamelas',
      result: 'Turbidez estable &lt;5 NTU, reducción 25% consumo floculante',
      client: 'Tratamiento Aguas',
      kpi: { turbidity: '&lt;5 NTU', chemicals: '-25%' }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mr-4">
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Mantenimiento y Soporte Técnico</h1>
              <p className="text-gray-200 text-lg mt-2">24/7 disponibilidad con &gt;95% uptime garantizado</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-gray-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-gray-200 text-sm">Soporte técnico</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-gray-300 mr-2" />
                <span className="text-lg font-bold">95%</span>
              </div>
              <p className="text-gray-200 text-sm">Disponibilidad equipos</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-5 h-5 text-gray-300 mr-2" />
                <span className="text-lg font-bold">&lt;4h</span>
              </div>
              <p className="text-gray-200 text-sm">Respuesta emergencias</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-gray-300 mr-2" />
                <span className="text-lg font-bold">15+</span>
              </div>
              <p className="text-gray-200 text-sm">Años experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Descripción General' },
              { id: 'services', label: 'Tipos de Servicio' },
              { id: 'programs', label: 'Programas' },
              { id: 'benefits', label: 'Beneficios' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-gray-600 text-gray-600'
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
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {activeTab === 'overview' && (
            <div className="prose max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Soporte Técnico Especializado en Hidrometalurgia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro servicio de mantenimiento y soporte técnico está diseñado para maximizar la disponibilidad 
                y eficiencia de equipos de separación sólido-líquido en procesos hidrometalúrgicos. Combinamos 
                mantenimiento preventivo, predictivo y correctivo con soporte técnico especializado 24/7.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Filosofía de Mantenimiento TSF</h3>
                <p className="text-gray-800 mb-4">
                  Nuestro enfoque integra las mejores prácticas industriales:
                </p>
                <ul className="text-gray-800 space-y-2">
                  <li>• <strong>Mantenimiento Centrado en Confiabilidad (RCM)</strong></li>
                  <li>• <strong>Mantenimiento Productivo Total (TPM)</strong></li>
                  <li>• <strong>Análisis de Modo y Efecto de Fallas (FMEA)</strong></li>
                  <li>• <strong>Tecnologías Industria 4.0 (IoT, AI, Analytics)</strong></li>
                  <li>• <strong>Transferencia de conocimiento continua</strong></li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Servicios Incluidos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-gray-600 mr-2" />
                      Mantenimiento preventivo programado
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-gray-600 mr-2" />
                      Soporte emergencias 24/7
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-gray-600 mr-2" />
                      Monitoreo predictivo IoT
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-gray-600 mr-2" />
                      Gestión inventario repuestos
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipos Cubiertos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Wrench className="w-4 h-4 text-gray-600 mr-2" />
                      Filtros prensa móviles
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Wrench className="w-4 h-4 text-gray-600 mr-2" />
                      Centrífugas industriales
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Wrench className="w-4 h-4 text-gray-600 mr-2" />
                      Sistemas clarificación
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Wrench className="w-4 h-4 text-gray-600 mr-2" />
                      Equipos tratamiento orgánico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Mantenimiento</h2>
              
              <div className="grid gap-8 mb-12">
                {serviceTypes.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.type}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Especificaciones del Servicio</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Compromisos de Servicio</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">KPIs de Servicio</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Disponibilidad Equipos</div>
                          <div className="text-sm text-gray-600">&gt;95% uptime garantizado</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">MTBF (Mean Time Between Failures)</div>
                          <div className="text-sm text-gray-600">Incremento 40-60% vs. baseline</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">MTTR (Mean Time To Repair)</div>
                          <div className="text-sm text-gray-600">Reducción 50% tiempo reparación</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'programs' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Programas de Mantenimiento Especializados</h2>
              
              <div className="space-y-8">
                {maintenancePrograms.map((program, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                          <Settings className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{program.program}</h3>
                          <p className="text-gray-600">Equipo: {program.equipment}</p>
                        </div>
                      </div>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {program.client}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Desafío</h4>
                        <p className="text-gray-600 text-sm">{program.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solución TSF</h4>
                        <p className="text-gray-600 text-sm">{program.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Resultado</h4>
                        <p className="text-gray-600 text-sm font-medium">{program.result}</p>
                      </div>
                    </div>

                    {/* KPI Display */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(program.kpi).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-gray-600">{value}</div>
                            <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Metodologías Aplicadas</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">RCM (Reliability Centered Maintenance)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Análisis funciones críticas</li>
                      <li>• Identificación modos falla</li>
                      <li>• Estrategias mantenimiento optimizadas</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">TPM (Total Productive Maintenance)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Mantenimiento autónomo operadores</li>
                      <li>• Mejora continua equipos</li>
                      <li>• Eliminación pérdidas operacionales</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Industria 4.0</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sensores IoT monitoreo continuo</li>
                      <li>• Analytics AI predictivo</li>
                      <li>• Digital twin equipos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios del Mantenimiento Especializado</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Operacionales</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Impacto en Disponibilidad</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800">Uptime equipos</span>
                        <span className="font-bold text-gray-900">95%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800">Reducción paradas no programadas</span>
                        <span className="font-bold text-gray-900">70-80%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800">Incremento MTBF</span>
                        <span className="font-bold text-gray-900">40-60%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Reducción costos mantenimiento</span>
                        <span className="font-bold text-green-900">25-35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Extensión vida útil equipos</span>
                        <span className="font-bold text-green-900">30-50%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">ROI programa mantenimiento</span>
                        <span className="font-bold text-green-900">200-400%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Resultados Comprobados</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600 mb-2">95%+</div>
                    <div className="text-sm text-gray-600">Disponibilidad garantizada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600 mb-2">&lt;4h</div>
                    <div className="text-sm text-gray-600">Respuesta emergencias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600 mb-2">30%</div>
                    <div className="text-sm text-gray-600">Reducción costos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Soporte técnico</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Maximizar la Disponibilidad de tus Equipos?</h2>
          <p className="text-xl mb-8">
            Evaluación integral de mantenimiento con programas personalizados 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
              Evaluación Mantenimiento
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-600 transition-all duration-300">
              Programas Disponibles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
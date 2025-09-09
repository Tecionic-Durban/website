'use client'

import { useState } from 'react'
import { Zap, CheckCircle, ArrowRight, Clock, AlertTriangle, Truck, Shield, Phone, Users } from 'lucide-react'

export default function EmergencyShutdownsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const emergencyScenarios = [
    {
      scenario: 'Falla Crítica Filtros Principales',
      industry: 'Concentradora',
      triggers: [
        'Rotura placas filtros prensa',
        'Falla bombas alimentación',
        'Problemas sistema control'
      ],
      impact: 'Parada completa línea concentración',
      response: 'Despliegue filtros móviles <24 horas',
      duration: '2-4 días resolución',
      icon: AlertTriangle,
      severity: 'critical'
    },
    {
      scenario: 'Contaminación Masiva Orgánico SX',
      industry: 'SX-EW',
      triggers: [
        'Ingreso agua lluvia al circuito',
        'Contaminación bacteriana',
        'Falla sistemas separación'
      ],
      impact: 'Pérdida total extractante (>$500K)',
      response: 'Sistemas recuperación emergencia',
      duration: '1-2 semanas tratamiento',
      icon: Zap,
      severity: 'critical'
    },
    {
      scenario: 'Colapso Sistema Clarificación',
      industry: 'Tratamiento Aguas',
      triggers: [
        'Sobrecarga hidráulica extrema',
        'Falla coagulación-floculación',
        'Problemas mecánicos clarificador'
      ],
      impact: 'Incumplimiento normativas descarga',
      response: 'Clarificadores móviles inmediatos',
      duration: '1-3 semanas instalación',
      icon: Shield,
      severity: 'high'
    },
    {
      scenario: 'Parada Emergencia Celdas EW',
      industry: 'Electroobtención',
      triggers: [
        'Cortocircuito masivo celdas',
        'Falla rectificadores principales',
        'Problemas calidad electrolito'
      ],
      impact: 'Pérdida producción diaria completa',
      response: 'Limpieza express y reactivación',
      duration: '3-7 días mantenimiento',
      icon: Truck,
      severity: 'high'
    }
  ]

  const responseProtocol = [
    {
      phase: 'Alerta',
      time: '0-2 horas',
      actions: [
        'Recepción llamada emergencia',
        'Activación equipo respuesta',
        'Evaluación remota preliminar',
        'Despacho equipo técnico'
      ],
      icon: Phone
    },
    {
      phase: 'Evaluación',
      time: '2-8 horas',
      actions: [
        'Arribo equipo in-situ',
        'Diagnóstico técnico detallado',
        'Plan acción inmediata',
        'Coordinación logística equipos'
      ],
      icon: Users
    },
    {
      phase: 'Implementación',
      time: '8-24 horas',
      actions: [
        'Movilización equipos móviles',
        'Instalación sistemas backup',
        'Puesta en marcha operacional',
        'Verificación funcionamiento'
      ],
      icon: Truck
    },
    {
      phase: 'Estabilización',
      time: '1-7 días',
      actions: [
        'Optimización parámetros',
        'Monitoreo performance continuo',
        'Ajustes finos proceso',
        'Transferencia operacional'
      ],
      icon: CheckCircle
    }
  ]

  const benefits = [
    'Respuesta inmediata <24 horas',
    'Minimización tiempo parada',
    'Evita pérdidas producción masivas',
    'Mantiene cumplimiento ambiental',
    'Protege activos críticos',
    'Soporte técnico continuo',
    'Solución temporal hasta reparación definitiva'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-yellow-800/50 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Paradas de Emergencia</h1>
              <p className="text-yellow-200 text-lg mt-2">Respuesta rápida para crisis operacionales críticas</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">&lt;24h</span>
              </div>
              <p className="text-yellow-200 text-sm">Respuesta emergencias</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Truck className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">Móvil</span>
              </div>
              <p className="text-yellow-200 text-sm">Equipos backup disponibles</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-yellow-200 text-sm">Disponibilidad total</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">15+ años</span>
              </div>
              <p className="text-yellow-200 text-sm">Experiencia emergencias</p>
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
              { id: 'scenarios', label: 'Escenarios Críticos' },
              { id: 'protocol', label: 'Protocolo Respuesta' },
              { id: 'benefits', label: 'Beneficios' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-yellow-600 text-yellow-600'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuando Cada Minuto Cuenta</h2>
              <p className="text-lg text-gray-600 mb-6">
                Las paradas de emergencia en plantas mineras pueden resultar en pérdidas millonarias por hora. 
                Nuestro servicio de respuesta rápida está diseñado para proporcionar soluciones inmediatas que 
                mantengan la operación funcionando mientras se resuelve la falla principal.
              </p>
              
              <div className="bg-yellow-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Situaciones de Emergencia Típicas</h3>
                <p className="text-yellow-800 mb-4">
                  Nuestro servicio de emergencia se activa ante:
                </p>
                <ul className="text-yellow-800 space-y-2">
                  <li>• <strong>Fallas catastróficas</strong> de equipos principales de separación</li>
                  <li>• <strong>Contaminación masiva</strong> de circuitos SX que requiere tratamiento urgente</li>
                  <li>• <strong>Problemas ambientales</strong> que comprometen permisos de operación</li>
                  <li>• <strong>Colapso sistemas críticos</strong> que paralizan producción</li>
                  <li>• <strong>Crisis operacionales</strong> que requieren solución inmediata</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuestra Capacidad de Respuesta</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Equipo técnico 24/7 en standby
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Inventario equipos móviles listos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Logística expressa establecida
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Protocolos pre-establecidos
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipos Disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Truck className="w-4 h-4 text-yellow-600 mr-2" />
                      Filtros prensa móviles 70 ton/día
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Truck className="w-4 h-4 text-yellow-600 mr-2" />
                      Centrífugas alta velocidad
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Truck className="w-4 h-4 text-yellow-600 mr-2" />
                      Sistemas clarificación 120 m³/día
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Truck className="w-4 h-4 text-yellow-600 mr-2" />
                      Equipos tratamiento orgánico
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Contacto de Emergencia</h3>
                <p className="text-red-800">
                  Para emergencias críticas que requieren respuesta inmediata, contacte nuestra línea de emergencia 24/7. 
                  Nuestro equipo técnico evaluará la situación y movilizará recursos en tiempo récord.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'scenarios' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Escenarios de Emergencia Críticos</h2>
              
              <div className="space-y-8">
                {emergencyScenarios.map((scenario, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          scenario.severity === 'critical' ? 'bg-red-500' : 'bg-orange-500'
                        }`}>
                          <scenario.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{scenario.scenario}</h3>
                          <p className="text-gray-600">Área: {scenario.industry}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        scenario.severity === 'critical' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {scenario.severity === 'critical' ? 'CRÍTICO' : 'ALTA PRIORIDAD'}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Disparadores</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {scenario.triggers.map((trigger, idx) => (
                            <li key={idx}>• {trigger}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Impacto</h4>
                        <p className="text-gray-600 text-sm">{scenario.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 mb-2">Respuesta TSF</h4>
                        <p className="text-yellow-600 text-sm font-medium">{scenario.response}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Tiempo Resolución</h4>
                        <p className="text-green-600 text-sm font-medium">{scenario.duration}</p>
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      scenario.severity === 'critical' ? 'bg-red-50' : 'bg-orange-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Protocolo de Respuesta</span>
                        <span className={`text-sm font-bold ${
                          scenario.severity === 'critical' ? 'text-red-600' : 'text-orange-600'
                        }`}>
                          {scenario.severity === 'critical' ? 'ACTIVACIÓN INMEDIATA' : 'RESPUESTA PRIORITARIA'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-yellow-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-6">Equipos de Respuesta Disponibles</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-4">Flota Móvil Inmediata</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• 3 Filtros prensa móviles (20-70 ton/día)</li>
                      <li>• 2 Centrífugas alta velocidad</li>
                      <li>• 4 Sistemas clarificación modular</li>
                      <li>• Equipos tratamiento orgánico</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-4">Capacidad Logística</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Transporte especializado 24/7</li>
                      <li>• Instalación sin grúas mayores</li>
                      <li>• Alimentación eléctrica flexible</li>
                      <li>• Personal técnico especializado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'protocol' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Protocolo de Respuesta de Emergencia</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {responseProtocol.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                    <p className="text-yellow-600 text-sm font-medium text-center mb-4">{phase.time}</p>
                    <ul className="text-gray-600 text-sm space-y-2">
                      {phase.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Criterios de Activación</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Emergencia Crítica (Nivel 1)</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Parada Total Producción</div>
                          <div className="text-sm text-gray-600">Falla equipos críticos, pérdidas &gt;$100K/día</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Riesgo Ambiental</div>
                          <div className="text-sm text-gray-600">Incumplimiento normativas, multas potenciales</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Emergencia Alta (Nivel 2)</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Degradación Crítica</div>
                          <div className="text-sm text-gray-600">Reducción &gt;50% capacidad, problemas calidad</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Truck className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Backup Urgente</div>
                          <div className="text-sm text-gray-600">Necesidad equipos respaldo inmediatos</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-6">Compromisos de Respuesta</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Tiempos Garantizados</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Respuesta inicial: &lt;2 horas</li>
                      <li>• Arribo técnico: &lt;8 horas</li>
                      <li>• Equipos en sitio: &lt;24 horas</li>
                      <li>• Operación: &lt;48 horas</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Recursos Disponibles</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Ingeniero senior 24/7</li>
                      <li>• Equipos backup certificados</li>
                      <li>• Transporte especializado</li>
                      <li>• Repuestos críticos stock</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Soporte Continuo</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Monitoreo remoto 24/7</li>
                      <li>• Optimización in-situ</li>
                      <li>• Reportes ejecutivos diarios</li>
                      <li>• Coordinación con equipos cliente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios del Servicio de Emergencia</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Críticas</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-800">Pérdidas evitadas</span>
                        <span className="font-bold text-yellow-900">$50K-500K/día</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-800">Tiempo respuesta</span>
                        <span className="font-bold text-yellow-900">&lt; 24 horas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-800">ROI del servicio</span>
                        <span className="font-bold text-yellow-900">500-2000%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Protección Operacional</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Continuidad operacional</span>
                        <span className="font-bold text-green-900">Garantizada</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Cumplimiento ambiental</span>
                        <span className="font-bold text-green-900">Mantenido</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Casos de Emergencia Resueltos</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">18h</div>
                    <div className="text-sm text-gray-600">Promedio respuesta más rápida</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Emergencias resueltas exitosamente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">$2M+</div>
                    <div className="text-sm text-gray-600">Pérdidas evitadas clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Emergencias atendidas</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="bg-red-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Línea de Emergencia 24/7</h2>
          </div>
          <p className="text-xl mb-8">
            Para emergencias críticas que requieren respuesta inmediata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 flex items-center justify-center">
              Contactar Emergencia AHORA
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              Ver Protocolo Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
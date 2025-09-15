'use client'

import { useState } from 'react'
import { Zap, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, TrendingUp, Battery, AlertTriangle } from 'lucide-react'

export default function EWCleaningServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const specifications = {
    electrical: 'Densidad corriente: 200-400 A/m² | Voltaje: 1.8-2.2 V/celda',
    current: 'Eficiencia corriente: 85-95% | Consumo energético: 1.8-2.1 kWh/kg Cu',
    cleaning: 'Frecuencia limpieza: cada 7-14 días | Tiempo stripping: 4-8 h/ciclo',
    chemistry: 'Electrolito: 40-50 g/L Cu | 150-180 g/L H₂SO₄ | Temp: 45-65°C',
    impurities: 'Fe: <2 g/L | As: <500 mg/L | Sb: <200 mg/L | Bi: <50 mg/L',
    cathodes: 'Pureza: >99.99% Cu | Densidad depósito: >8.5 kg/m²',
    automation: 'Control rectificadores automático | Monitoreo temperatura/nivel',
    maintenance: 'Inspección ánodos: semanal | Reemplazo: cada 45-60 días'
  }

  const useCases = [
    {
      industry: 'Cobre',
      application: 'Limpieza celdas EW cobre contaminadas',
      challenge: 'Acumulación orgánico arrastrado en celdas causa cortocircuitos y baja eficiencia corriente (75-80%)',
      solution: 'Stripping completo + limpieza ácida electrodos + pasivación superficies',
      result: 'Recuperación eficiencia corriente >92% y cátodos 99.99% Cu sin rechazos',
      client: 'Codelco Radomiro Tomic',
      savings: 'Incremento 18% producción Cu',
      metrics: { before: 78, after: 94 }
    },
    {
      industry: 'Zinc',
      application: 'Optimización celdas EW zinc alta pureza',
      challenge: 'Deposición rugosa Zn por impurezas Co/Ni <0.01 mg/L requiere cátodos 99.995% pureza',
      solution: 'Limpieza ultra-pura electrodos Al + control estricto trazas metálicas',
      result: 'Cátodos zinc 99.995% pureza y superficie lisa para laminación directa',
      client: 'Korea Zinc Smelter',
      savings: 'Premium calidad +$200/t Zn',
      metrics: { before: 85, after: 97 }
    },
    {
      industry: 'Níquel',
      application: 'Recuperación celdas EW níquel degradadas',
      challenge: 'Pasivación ánodos Ni causa caída voltaje y consumo energético excesivo (+40%)',
      solution: 'Reactivación electroquímica ánodos + optimización densidad corriente',
      result: 'Reducción 30% consumo energético y recuperación cátodos grado LME',
      client: 'Pacific Metals Ni Refinery',
      savings: 'Ahorro $2.8M anuales energía',
      metrics: { before: 65, after: 91 }
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Diagnóstico',
      description: 'Evaluación estado celdas y eficiencia actual',
      icon: AlertTriangle
    },
    {
      step: '2', 
      title: 'Stripping',
      description: 'Remoción completa cátodos contaminados',
      icon: Settings
    },
    {
      step: '3',
      title: 'Limpieza',
      description: 'Tratamiento ácido y pasivación electrodos',
      icon: Zap
    },
    {
      step: '4',
      title: 'Optimización',
      description: 'Ajuste parámetros y puesta en marcha',
      icon: TrendingUp
    }
  ]

  const benefits = [
    'Incremento eficiencia corriente 15-25%',
    'Mejora calidad cátodos &gt;99.5% pureza',
    'Reducción consumo energético',
    'Extensión vida útil electrodos',
    'Menor frecuencia mantenimiento',
    'Optimización densidad corriente',
    'Eliminación cortocircuitos'
  ]

  const applications = [
    {
      application: 'Optimización Celdas EW Cobre',
      industry: 'Cobre',
      challenge: 'Baja eficiencia corriente (85%) y formación dendritas por contaminación',
      solution: 'Limpieza profunda + reacondicionamiento electrodos permanentes',
      result: 'Eficiencia corriente &gt;95%, eliminación dendritas',
      client: 'Radomiro Tomic',
      improvement: { before: '85%', after: '95%' }
    },
    {
      application: 'Mantenimiento Preventivo EW',
      industry: 'Zinc',
      challenge: 'Acumulación plomo en cátodos afecta pureza final del zinc',
      solution: 'Programa limpieza periódica con stripping selectivo',
      result: 'Pureza zinc SHG &gt;99.995%, cumplimiento LME',
      client: 'Operaciones Zn',
      improvement: { before: '99.90%', after: '99.995%' }
    },
    {
      application: 'Recuperación Celdas Deterioradas',
      industry: 'Níquel',
      challenge: 'Pasivación cátodos de acero inoxidable, baja adherencia',
      solution: 'Tratamiento químico especializado + reactivación superficie',
      result: 'Recuperación 90% celdas, calidad cátodos A1',
      client: 'Operaciones Ni-Co',
      improvement: { before: '60%', after: '98%' }
    }
  ]

  const problemSigns = [
    {
      sign: 'Eficiencia Corriente Baja',
      description: '&lt;90% indica problemas conductividad o cortocircuitos',
      icon: Battery,
      severity: 'high'
    },
    {
      sign: 'Formación Dendritas',
      description: 'Crecimiento metálico irregular por distribución corriente',
      icon: AlertTriangle,
      severity: 'high'
    },
    {
      sign: 'Calidad Cátodos',
      description: 'Pureza <99.5% o adherencia deficiente',
      icon: Shield,
      severity: 'medium'
    },
    {
      sign: 'Consumo Energético Alto',
      description: 'Incremento voltaje por resistencia en contactos',
      icon: Zap,
      severity: 'medium'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-yellow-800/50 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="8" width="18" height="10" rx="2" strokeWidth="2" fill="currentColor" opacity="0.2"/>
                <rect x="5" y="6" width="3" height="4" rx="0.5" strokeWidth="2"/>
                <rect x="10" y="6" width="3" height="4" rx="0.5" strokeWidth="2"/>
                <rect x="16" y="6" width="3" height="4" rx="0.5" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.5 14v1.5M11.5 14v1.5M17.5 14v1.5"/>
                <circle cx="8" cy="4" r="1" fill="currentColor"/>
                <circle cx="12" cy="3" r="1" fill="currentColor"/>
                <circle cx="16" cy="4" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Limpieza y Optimización Celdas EW</h1>
              <p className="text-yellow-200 text-lg mt-2">Incremento 15-25% eficiencia con &gt;99.5% pureza cátodos</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">25%</span>
              </div>
              <p className="text-yellow-200 text-sm">Incremento eficiencia</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">99.5%</span>
              </div>
              <p className="text-yellow-200 text-sm">Pureza cátodos</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Battery className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">5000A</span>
              </div>
              <p className="text-yellow-200 text-sm">Capacidad celdas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-yellow-200 text-sm">Soporte técnico</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimización Experta de Electroobtención</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro servicio de limpieza y optimización de celdas EW está diseñado para maximizar la eficiencia 
                de corriente y calidad de cátodos en operaciones de electroobtención. Combinamos técnicas avanzadas 
                de limpieza con reacondicionamiento de electrodos para lograr rendimientos superiores.
              </p>
              
              <div className="bg-yellow-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Problemas Comunes en Electroobtención</h3>
                <p className="text-yellow-800 mb-4">
                  Las celdas EW enfrentan desafíos operacionales que reducen eficiencia:
                </p>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Pasivación electrodos por contaminantes orgánicos</li>
                  <li>• Cortocircuitos por formación dendritas</li>
                  <li>• Deposición irregular y baja adherencia</li>
                  <li>• Acumulación residuos en contactos eléctricos</li>
                  <li>• Deterioro gradual pureza cátodos</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Servicios Especializados</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Limpieza profunda electrodos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Stripping selectivo cátodos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Reacondicionamiento superficies
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      Optimización parámetros operacionales
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Signos de Problemas</h3>
                  <div className="space-y-3">
                    {problemSigns.map((problem, index) => (
                      <div key={index} className="flex items-start">
                        <problem.icon className={`w-5 h-5 mr-3 mt-0.5 ${
                          problem.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                        <div>
                          <div className="font-medium text-gray-900">{problem.sign}</div>
                          <div className="text-sm text-gray-600">{problem.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Optimización</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Especificaciones del Servicio</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Parámetros de Mejora</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Técnicas Aplicadas</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Zap className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Limpieza Electrolítica</div>
                          <div className="text-sm text-gray-600">Inversión polaridad, soluciones ácidas</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Settings className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Reacondicionamiento</div>
                          <div className="text-sm text-gray-600">Pasivación superficies, preparación contactos</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Optimización</div>
                          <div className="text-sm text-gray-600">Densidad corriente, voltaje, aditivos</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-6">Protocolos de Mantenimiento</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Mantenimiento Preventivo</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Inspección visual mensual</li>
                      <li>• Medición eficiencia corriente</li>
                      <li>• Análisis calidad cátodos</li>
                      <li>• Limpieza contactos programada</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Mantenimiento Correctivo</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Stripping completo celdas</li>
                      <li>• Limpieza profunda electrodos</li>
                      <li>• Reemplazo elementos deteriorados</li>
                      <li>• Reoptimización parámetros</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Monitoreo Continuo</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Eficiencia corriente en línea</li>
                      <li>• Voltaje celdas individual</li>
                      <li>• Temperatura electrolito</li>
                      <li>• Calidad cátodos lote</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

{activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios de la Optimización EW</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Operacionales</h3>
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
                        <span className="text-yellow-800">Incremento eficiencia</span>
                        <span className="font-bold text-yellow-900">15-25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-800">Reducción consumo energía</span>
                        <span className="font-bold text-yellow-900">10-15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-800">ROI típico</span>
                        <span className="font-bold text-yellow-900">&lt; 6 meses</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">Impacto en Calidad</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-orange-800">Pureza cátodos</span>
                        <span className="font-bold text-orange-900">&gt;99.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-800">Reducción rechazos</span>
                        <span className="font-bold text-orange-900">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Resultados Típicos</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">95%+</div>
                    <div className="text-sm text-gray-600">Eficiencia corriente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">99.5%</div>
                    <div className="text-sm text-gray-600">Pureza cátodos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">25%</div>
                    <div className="text-sm text-gray-600">Mejora productividad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">6 meses</div>
                    <div className="text-sm text-gray-600">ROI típico</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Eficiencia de sus Celdas EW Bajo 90%?</h2>
          <p className="text-xl mb-8">
            Diagnóstico especializado para optimizar electroobtención y calidad cátodos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300 flex items-center justify-center">
              Evaluación EW
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Waves, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, TrendingUp, Beaker } from 'lucide-react'

export default function WaterClarificationServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const specifications = {
    daf: 'Presión saturación: 4-6 bar | Recirculación: 8-12% caudal',
    bubbles: 'Tamaño burbujas: 40-70 μm | Densidad: 10⁶-10⁷ burbujas/mL',
    retention: 'Tiempo residencia: 15-25 min | Velocidad ascensional: <5 m/h',
    chemistry: 'Coagulante: 20-80 mg/L | Floculante: 0.5-3 mg/L | pH: 6.5-8.5',
    removal: 'TSS: >95% (500→<25 mg/L) | Turbidez: 150→<5 NTU | Aceites: >90%',
    overflow: 'Velocidad barrido: 3-8 m/min | Espesor lodos: 2-8% sólidos',
    hydraulics: 'Carga superficial: 8-15 m³/m²/h | Gradiente floculación: 20-60 s⁻¹',
    automation: 'Control pH automático | Dosificación proporcional | Monitoreo continuo'
  }

  const useCases = [
    {
      industry: 'Cobre',
      application: 'Recuperación agua en circuitos SX/EW',
      challenge: 'Pérdida 30-40% agua proceso por turbidez alta (>50 NTU) que impide recirculación efectiva',
      solution: 'Sistema DAF + clarificadores lamelares para tratamiento agua raffinate y overflow',
      result: 'Recuperación 95% agua proceso con calidad <5 NTU para reutilización completa',
      client: 'Minera Los Pelambres',
      savings: 'Ahorro $1.8M anuales agua fresca',
      metrics: { before: 62, after: 95 }
    },
    {
      industry: 'Litio',
      application: 'Tratamiento efluentes operaciones DLE',
      challenge: 'Efluentes DLE con alta carga sólidos suspendidos exceden límites descarga DS90',
      solution: 'Clarificación avanzada con coagulación-floculación optimizada para salmueras complejas',
      result: 'Cumplimiento 100% normativas descarga y recuperación 80% agua para reuso',
      client: 'Salar de Uyuni Bolivia',
      savings: 'Evita multas ambientales $500K',
      metrics: { before: 45, after: 98 }
    },
    {
      industry: 'Minería General',
      application: 'Clarificación agua mina ácida',
      challenge: 'Drenaje ácido mina (pH 2.5-3.8) con metales pesados requiere neutralización y clarificación',
      solution: 'Sistema integrado neutralización + clarificación lamelar para tratamiento pasivo',
      result: 'Agua tratada pH 7.2 y <10 mg/L metales para descarga controlada o reuso',
      client: 'Operaciones Mineras Norte Chile',
      savings: 'Reducción 60% costos tratamiento',
      metrics: { before: 35, after: 89 }
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Evaluación',
      description: 'Análisis agua proceso con sólidos suspendidos',
      icon: Beaker
    },
    {
      step: '2', 
      title: 'Acondicionamiento',
      description: 'Dosificación coagulantes/floculantes según agua',
      icon: Settings
    },
    {
      step: '3',
      title: 'Flotación DAF',
      description: 'Separación sólidos mediante burbujas de aire',
      icon: Waves
    },
    {
      step: '4',
      title: 'Recirculación',
      description: 'Agua clarificada retorna como agua de proceso',
      icon: TrendingUp
    }
  ]

  const benefits = [
    'Recuperación máxima agua proceso',
    'Cumplimiento normativas descarga',
    'Reducción costos agua fresca',
    'Minimización impacto ambiental',
    'Reutilización hasta 95% agua',
    'Operación automatizada',
    'Bajo consumo energético'
  ]

  const applications = [
    {
      application: 'Clarificación Agua Proceso Minero',
      industry: 'Minería',
      challenge: 'Turbidez alta por arcillas y finos, afecta procesos downstream',
      solution: 'Clarificadores lamelares de alta tasa con polímeros selectivos',
      result: '&lt;5 NTU turbidez, 95% recuperación agua',
      client: 'Operaciones Mineras',
      parameters: { before: '150 NTU', after: '&lt;5 NTU' }
    },
    {
      application: 'Tratamiento Efluentes SX',
      industry: 'Hidrometalurgia',
      challenge: 'Orgánico disperso y sólidos suspendidos en purgas y derrames',
      solution: 'DAF (Dissolved Air Flotation) con coalescencia',
      result: 'Cumplimiento DS90/2000, reutilización agua',
      client: 'Plantas SX-EW',
      parameters: { before: '200 mg/L SST', after: '&lt;10 mg/L' }
    },
    {
      application: 'Recirculación Agua Salmueras',
      industry: 'Sales Minerales',
      challenge: 'Alta salinidad y sólidos disueltos limitan reutilización',
      solution: 'Sistema híbrido clarificación + ósmosis inversa',
      result: 'Recuperación 90% agua, concentración salmueras',
      client: 'Operaciones Salares',
      parameters: { before: '80,000 TDS', after: '&lt;500 TDS' }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-teal-800/50 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="16" width="20" height="6" rx="1" strokeWidth="2" fill="currentColor" opacity="0.3"/>
                <circle cx="6" cy="14" r="2" strokeWidth="2"/>
                <circle cx="12" cy="12" r="1.5" strokeWidth="2"/>
                <circle cx="18" cy="14" r="2" strokeWidth="2"/>
                <circle cx="9" cy="9" r="1" strokeWidth="2"/>
                <circle cx="15" cy="9" r="1" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6c2 0 4 1 8 1s6-1 8-1"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 5v1m5-1v1m5-1v1"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Clarificación y Tratamiento de Aguas</h1>
              <p className="text-teal-200 text-lg mt-2">Hasta 120 m³/día con &gt;99% remoción turbidez</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 text-teal-300 mr-2" />
                <span className="text-lg font-bold">120</span>
              </div>
              <p className="text-teal-200 text-sm">m³/día capacidad</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-teal-300 mr-2" />
                <span className="text-lg font-bold">99%</span>
              </div>
              <p className="text-teal-200 text-sm">Remoción turbidez</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Waves className="w-5 h-5 text-teal-300 mr-2" />
                <span className="text-lg font-bold">95%</span>
              </div>
              <p className="text-teal-200 text-sm">Reutilización agua</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-teal-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-teal-200 text-sm">Operación continua</p>
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
                    ? 'border-teal-600 text-teal-600'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Soluciones Avanzadas de Clarificación</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros sistemas de clarificación de aguas están diseñados para maximizar la recuperación de agua 
                en procesos mineros e industriales. Combinamos tecnologías de coagulación, flotación y sedimentación 
                para lograr niveles de claridad que permiten reutilización directa o cumplimiento normativo.
              </p>
              
              <div className="bg-teal-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">Desafíos del Tratamiento de Aguas</h3>
                <p className="text-teal-800 mb-4">
                  El agua en procesos mineros presenta complejidades únicas:
                </p>
                <ul className="text-teal-800 space-y-2">
                  <li>• Alta turbidez por arcillas y sólidos finos</li>
                  <li>• Contaminación con orgánicos (extractantes, aceites)</li>
                  <li>• Variabilidad composición y pH</li>
                  <li>• Requerimientos estrictos reutilización</li>
                  <li>• Cumplimiento normativas ambientales</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologías Aplicadas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      Clarificadores lamelares alta tasa
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      Flotación por aire disuelto (DAF)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      Coagulación-floculación optimizada
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                      Filtración multimedia
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sectores de Aplicación</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-teal-600 mr-2" />
                      Plantas concentración mineral
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-teal-600 mr-2" />
                      Operaciones SX-EW
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-teal-600 mr-2" />
                      Tratamiento salmueras
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-teal-600 mr-2" />
                      Efluentes industriales
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Clarificación</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Especificaciones Técnicas</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Parámetros de Diseño</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Control de Calidad</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Beaker className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Análisis Continuo</div>
                          <div className="text-sm text-gray-600">Turbidez, pH, SST, DQO</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Control Automático</div>
                          <div className="text-sm text-gray-600">Dosificación reactivos, caudales</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Cumplimiento</div>
                          <div className="text-sm text-gray-600">Normativas ambientales DS90/2000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-teal-900 mb-6">Tecnologías Avanzadas</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-teal-900 mb-3">Clarificadores Lamelares</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Área superficial optimizada</li>
                      <li>• Tasas hasta 10 m³/m²/h</li>
                      <li>• Módulos intercambiables</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-teal-900 mb-3">Flotación DAF</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Microburbujas 20-40 μm</li>
                      <li>• Remoción aceites y grasas</li>
                      <li>• Presión saturación optimizada</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-teal-900 mb-3">Control Inteligente</h4>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• Sensores en línea</li>
                      <li>• Algoritmos predictivos</li>
                      <li>• Optimización automática</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

{activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios del Tratamiento de Aguas</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Operacionales</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-teal-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-teal-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-teal-800">Reducción costos agua</span>
                        <span className="font-bold text-teal-900">40-60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-teal-800">Reutilización agua</span>
                        <span className="font-bold text-teal-900">95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-teal-800">ROI típico</span>
                        <span className="font-bold text-teal-900">&lt; 2 años</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Impacto Ambiental</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Reducción captación agua</span>
                        <span className="font-bold text-green-900">80%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Cumplimiento DS90</span>
                        <span className="font-bold text-green-900">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Casos de Éxito</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">120 m³/día</div>
                    <div className="text-sm text-gray-600">Capacidad máxima instalada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">&lt;5 NTU</div>
                    <div className="text-sm text-gray-600">Turbidez final típica</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                    <div className="text-sm text-gray-600">Disponibilidad sistema</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Necesita Optimizar el Tratamiento de sus Aguas?</h2>
          <p className="text-xl mb-8">
            Evaluación completa para maximizar reutilización y cumplimiento normativo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 flex items-center justify-center">
              Análisis de Agua
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
              Casos de Reutilización
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { RefreshCw, CheckCircle, ArrowRight, Truck, Shield, Beaker, BarChart3, Clock, Zap, TrendingUp } from 'lucide-react'

export default function OrganicTreatmentServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const specifications = {
    coalescence: 'Tiempo residencia: 15-45 min | Eficiencia coalescencia: >98%',
    separation: 'Velocidad sedimentación: 0.5-2.0 cm/min | Interfase definida',
    entrainment: 'Reducción entrainment: 500-1500 ppm → <50 ppm acuoso',
    density: 'Diferencia densidades mínima: 0.05 g/cm³ | Viscosidad: <50 cP',
    temperature: 'Operación óptima: 25-45°C | Control ±2°C',
    chemistry: 'pH operacional: 1.5-3.5 | Compatible extractantes Cu/Zn',
    quality: 'Agua residual: <2% en orgánico | Orgánico en acuoso: <0.1%',
    flowrate: 'Caudales: 50-800 L/min | Relación O/A variable 0.5-5:1'
  }

  const useCases = [
    {
      industry: 'Cobre',
      application: 'Tratamiento orgánico SX plantas cobre',
      challenge: 'Entrainment acuoso y degradación extractante por contaminación',
      solution: 'Recuperación y purificación continua con coalescedor',
      result: 'Extensión vida útil orgánico 50% y mejora selectividad',
      client: 'BHP Operaciones Chile',
      savings: 'Cliente actual TSF',
      metrics: { before: 85, after: 95 }
    },
    {
      industry: 'Cobalto/Níquel',
      application: 'Recuperación extractante especializado',
      challenge: 'Alto costo extractantes específicos (Cyanex, D2EHPA)',
      solution: 'Sistema recuperación dedicado con tecnología selectiva',
      result: 'Ahorro significativo en reactivos especializados',
      client: 'Operaciones DRC/Indonesia',
      savings: 'Reducción 40% costo extractante',
      metrics: { before: 75, after: 92 }
    },
    {
      industry: 'Uranio',
      application: 'Control orgánico en SX uranio',
      challenge: 'Requisitos regulatorios estrictos y trazabilidad completa',
      solution: 'Tratamiento con documentación y monitoreo continuo',
      result: 'Cumplimiento 100% normativas nucleares',
      client: 'Kazatomprom/Cameco',
      savings: 'Cumplimiento regulatorio',
      metrics: { before: 88, after: 99 }
    }
  ]

  const benefits = [
    'Reducción significativa pérdidas orgánico',
    'Optimización eficiencia planta SX',
    'Estabilidad operacional mejorada',
    'Menor consumo de extractante nuevo',
    'Cumplimiento ambiental mejorado',
    'Extensión vida útil solvente',
    'Mejora selectividad extracción'
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Diagnóstico',
      description: 'Análisis entrainment acuoso en orgánico SX',
      icon: Beaker
    },
    {
      step: '2', 
      title: 'Coalescencia',
      description: 'Separación gravitacional asistida de fases',
      icon: RefreshCw
    },
    {
      step: '3',
      title: 'Purificación',
      description: 'Remoción agua arrastrada y contaminantes',
      icon: Shield
    },
    {
      step: '4',
      title: 'Retorno',
      description: 'Orgánico purificado reintegrado a circuito SX',
      icon: TrendingUp
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-green-800/50 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="8" cy="12" r="6" strokeWidth="2" opacity="0.6"/>
                <circle cx="16" cy="12" r="6" strokeWidth="2" opacity="0.6"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12"/>
                <circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.8"/>
                <circle cx="12" cy="15" r="2" fill="currentColor" opacity="0.8"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l12 8M18 8L6 16"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Tratamiento y Recuperación de Orgánico</h1>
              <p className="text-green-200 text-lg mt-2">Recuperación 90-95% con reducción 60% pérdidas solvente</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">95%</span>
              </div>
              <p className="text-green-200 text-sm">Recuperación orgánico</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">60%</span>
              </div>
              <p className="text-green-200 text-sm">Reducción pérdidas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">50%</span>
              </div>
              <p className="text-green-200 text-sm">Extensión vida útil</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-green-200 text-sm">Monitoreo continuo</p>
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
                    ? 'border-green-600 text-green-600'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recuperación Avanzada de Solventes Orgánicos</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro servicio de tratamiento de orgánico se enfoca en la recuperación eficiente del entrainment 
                acuoso y la purificación de extractantes en plantas de extracción por solventes. Utilizamos tecnología 
                avanzada de coalescencia y separación para maximizar la recuperación y extender la vida útil del solvente.
              </p>
              
              <div className="bg-green-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Problemas Críticos del Entrainment</h3>
                <p className="text-green-800 mb-4">
                  El entrainment orgánico es uno de los mayores problemas operacionales en plantas SX, causando:
                </p>
                <ul className="text-green-800 space-y-2">
                  <li>• Pérdidas costosas de extractante (LIX984N, LIX622N, etc.)</li>
                  <li>• Degradación acelerada por contaminación</li>
                  <li>• Problemas de separación en settlers</li>
                  <li>• Contaminación del electrolito en EW</li>
                  <li>• Formación de crud y emulsiones estables</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnología de Recuperación</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Coalescedores de alta eficiencia
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Separación gravitacional optimizada
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Sistemas de flotación assistida
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Monitoreo continuo de calidad
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sectores de Aplicación</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-green-600 mr-2" />
                      Plantas SX cobre (LIX984N, LIX622N)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-green-600 mr-2" />
                      Extracción cobalto/níquel (Cyanex)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-green-600 mr-2" />
                      Procesos uranio (D2EHPA, TBP)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-green-600 mr-2" />
                      Tierras raras y REE
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Tratamiento Orgánico</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Especificaciones Técnicas del Proceso</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Parámetros de Operación</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Control de Calidad</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Beaker className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Análisis Continuo</div>
                          <div className="text-sm text-gray-600">Contenido agua, pH, densidad</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">KPIs Tiempo Real</div>
                          <div className="text-sm text-gray-600">Eficiencia separación, recuperación</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Trazabilidad</div>
                          <div className="text-sm text-gray-600">Documentación completa proceso</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios del Tratamiento Orgánico</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Operacionales</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Ahorro extractante anual</span>
                        <span className="font-bold text-green-900">40-60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">ROI típico</span>
                        <span className="font-bold text-green-900">&lt; 12 meses</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Reducción costos operativos</span>
                        <span className="font-bold text-green-900">15-25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">Impacto Ambiental</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-orange-800">Reducción residuos peligrosos</span>
                        <span className="font-bold text-orange-900">70%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-800">Mejora cumplimiento</span>
                        <span className="font-bold text-orange-900">100%</span>
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
      <section className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Problemas con Pérdidas de Orgánico?</h2>
          <p className="text-xl mb-8">
            Evaluación técnica especializada para optimizar su recuperación de extractantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center">
              Análisis de Pérdidas
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
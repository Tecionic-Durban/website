'use client'

import { useState } from 'react'
import { Search, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, TrendingUp, Layers } from 'lucide-react'

export default function FineSolidsServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const specifications = {
    centrifuge: 'G-force: 2000-3200 x g | RPM: 3600-4200 | Bowl Ø: 350-450 mm',
    separation: 'Corte granulométrico: 2-15 μm | Eficiencia: >98% para >5 μm',
    flowrates: 'Caudal líquido: 15-80 m³/h | Sólidos: 0.5-14 ton/día',
    differential: 'Velocidad diferencial: 5-50 RPM | Torque: hasta 1200 Nm',
    polymer: 'Floculante: 0.5-5 kg/ton sólidos | Preparación automática',
    clarity: 'Centrado: <50 mg/L TSS | Turbidez: <20 NTU',
    density: 'Diferencia mínima: 0.3 g/cm³ | Concentración sólidos: 1-25%',
    viscosity: 'Rango operacional: 1-50 cP | Temperatura: 10-80°C'
  }

  const useCases = [
    {
      industry: 'Litio',
      application: 'Pretratamiento salmueras para DLE',
      challenge: 'Sólidos finos <10μm causan fouling membranas adsorbentes Li+ reduciendo capacidad intercambio',
      solution: 'Centrífugas decanter + hidrociclones para clarificación salmueras concentradas',
      result: 'Extensión vida útil medios DLE en 200% y mejora selectividad Li+/Na+',
      client: 'Operaciones Salar de Atacama',
      savings: 'Reducción 70% reemplazo medios adsorbentes',
      metrics: { before: 65, after: 92 }
    },
    {
      industry: 'Cobre',
      application: 'Control sólidos en circuitos SX',
      challenge: 'Acumulación sólidos finos en orgánico causa crud formation y pérdidas extractante',
      solution: 'Sistema integrado centrifugación para remoción continua partículas coloidales',
      result: 'Reducción 80% incidents crud runs y estabilidad operacional SX',
      client: 'Plantas SX Región Antofagasta',
      savings: 'Ahorro $2.5M anuales pérdidas orgánico',
      metrics: { before: 78, after: 94 }
    },
    {
      industry: 'Zinc',
      application: 'Purificación soluciones EW zinc',
      challenge: 'Sólidos suspendidos interfieren deposición catódica Zn causando rugosidad superficial',
      solution: 'Clarificación avanzada con centrífugas alta G-force para soluciones ultra-puras',
      result: 'Calidad cátodos 99.995% Zn y reducción rechazo productos',
      client: 'Refinería Zinc Internacional',
      savings: 'Mejora 25% rendimiento catódico',
      metrics: { before: 82, after: 98 }
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Evaluación',
      description: 'Análisis sólidos finos provenientes de clarificadores',
      icon: Search
    },
    {
      step: '2', 
      title: 'Despliegue',
      description: 'Configuración centrífugas móviles en sitio',
      icon: Settings
    },
    {
      step: '3',
      title: 'Centrifugación',
      description: 'Separación sólidos finos mediante fuerza centrífuga',
      icon: Layers
    },
    {
      step: '4',
      title: 'Clarificación',
      description: 'Líquido clarificado retorna a proceso',
      icon: TrendingUp
    }
  ]

  const benefits = [
    'Protección equipos downstream',
    'Mejora calidad productos finales',
    'Reducción costos mantenimiento',
    'Extensión vida útil membranas',
    'Cumplimiento especificaciones DLE',
    'Optimización procesos SX/EW',
    'Operación automatizada'
  ]

  const applications = [
    {
      application: 'Extracción Directa Litio (DLE)',
      industry: 'Litio',
      challenge: 'Sólidos finos contaminan membranas y resinas de intercambio iónico',
      solution: 'Centrífugas 10,000 RPM para partículas &lt;5μm',
      result: 'Extensión 300% vida útil membranas',
      client: 'Operaciones Salar de Atacama'
    },
    {
      application: 'Clarificación Salmueras Potasio',
      industry: 'Potasio',
      challenge: 'Arcillas y sólidos ultra-finos afectan cristalización',
      solution: 'Sistemas integrados centrífuga + hidrociclones',
      result: 'Pureza &gt;99% sales potásicas',
      client: 'SQM Operaciones'
    },
    {
      application: 'Pre-tratamiento Circuitos SX',
      industry: 'Cobre',
      challenge: 'Sólidos en suspensión generan crud y problemas separación',
      solution: 'Baterías centrífugas móviles 14 ton/día',
      result: 'Reducción 80% formación crud',
      client: 'Plantas SX-EW'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-purple-800/50 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.2"/>
                <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M4 12H2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 6.5L16 8M8 16l-1.5 1.5M6.5 6.5L8 8M16 16l1.5 1.5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Separación de Sólidos Finos</h1>
              <p className="text-purple-200 text-lg mt-2">Hasta 14 ton/día con &gt;95% eficiencia partículas &lt;20μm</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-lg font-bold">14</span>
              </div>
              <p className="text-purple-200 text-sm">Ton/día centrífugas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-lg font-bold">95%</span>
              </div>
              <p className="text-purple-200 text-sm">Eficiencia remoción</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Layers className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-lg font-bold">&lt;20μm</span>
              </div>
              <p className="text-purple-200 text-sm">Tamaño partículas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-purple-200 text-sm">Operación continua</p>
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
                    ? 'border-purple-600 text-purple-600'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tecnología Avanzada para Sólidos Ultra-Finos</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros sistemas de separación de sólidos finos están especializados en el manejo de partículas 
                submicrónicas y coloidales que afectan procesos hidrometalúrgicos modernos. Utilizamos centrífugas 
                de alta velocidad y sistemas híbridos para aplicaciones críticas como DLE y purificación de salmueras.
              </p>
              
              <div className="bg-purple-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Desafíos de los Sólidos Finos</h3>
                <p className="text-purple-800 mb-4">
                  Los sólidos finos (&lt;20μm) representan problemas únicos en hidrometalurgia:
                </p>
                <ul className="text-purple-800 space-y-2">
                  <li>• Contaminación de membranas en procesos DLE</li>
                  <li>• Fouling de resinas de intercambio iónico</li>
                  <li>• Formación de crud estable en circuitos SX</li>
                  <li>• Interferencia en cristalización de sales</li>
                  <li>• Degradación calidad productos finales</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologías Disponibles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      Centrífugas alta velocidad (10,000+ RPM)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      Hidrociclones de pequeño diámetro
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      Sistemas híbridos integrados
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                      Flotación micro-burbujas
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicaciones Principales</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-purple-600 mr-2" />
                      Extracción directa litio (DLE)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-purple-600 mr-2" />
                      Purificación salmueras potasio
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-purple-600 mr-2" />
                      Pre-tratamiento circuitos SX
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-purple-600 mr-2" />
                      Clarificación soluciones PLS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Separación</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
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
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Control Avanzado</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Search className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Análisis Granulométrico</div>
                          <div className="text-sm text-gray-600">Laser diffraction, microscopia</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Monitoreo Turbidez</div>
                          <div className="text-sm text-gray-600">Control automático claridad</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Optimización AI</div>
                          <div className="text-sm text-gray-600">Algoritmos aprendizaje automático</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Aplicaciones Especializadas</h2>
              
              <div className="space-y-8">
                {applications.map((app, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          app.industry === 'Litio' ? 'bg-cyan-500' :
                          app.industry === 'Potasio' ? 'bg-purple-500' :
                          'bg-orange-500'
                        }`}>
                          {app.industry === 'Litio' ? (
                            <span className="text-white font-bold">Li</span>
                          ) : app.industry === 'Potasio' ? (
                            <span className="text-white font-bold">K</span>
                          ) : (
                            <span className="text-white font-bold">Cu</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{app.application}</h3>
                          <p className="text-gray-600">Industria: {app.industry}</p>
                        </div>
                      </div>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {app.client}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Desafío Técnico</h4>
                        <p className="text-gray-600 text-sm">{app.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solución TSF</h4>
                        <p className="text-gray-600 text-sm">{app.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Resultado</h4>
                        <p className="text-purple-600 text-sm font-medium">{app.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Tecnologías de Vanguardia</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-700 font-bold">DLE</span>
                    </div>
                    <h4 className="font-semibold text-purple-900 mb-2">Extracción Directa Litio</h4>
                    <p className="text-purple-700 text-sm">Protección membranas selectivas y resinas IX</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-700 font-bold">AI</span>
                    </div>
                    <h4 className="font-semibold text-purple-900 mb-2">Control Inteligente</h4>
                    <p className="text-purple-700 text-sm">Optimización automática parámetros separación</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-700 font-bold">IoT</span>
                    </div>
                    <h4 className="font-semibold text-purple-900 mb-2">Monitoreo Remoto</h4>
                    <p className="text-purple-700 text-sm">Supervisión 24/7 y mantenimiento predictivo</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios de la Separación de Finos</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Operacionales</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Impacto en Procesos DLE</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800">Vida útil membranas</span>
                        <span className="font-bold text-purple-900">+300%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800">Eficiencia extracción Li</span>
                        <span className="font-bold text-purple-900">98%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-800">Reducción OPEX</span>
                        <span className="font-bold text-purple-900">15-25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-cyan-900 mb-4">Impacto en SX</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-800">Reducción crud formation</span>
                        <span className="font-bold text-cyan-900">80%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-cyan-800">Mejora separación fases</span>
                        <span className="font-bold text-cyan-900">40%</span>
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
      <section className="bg-purple-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Problemas con Sólidos Finos en sus Procesos?</h2>
          <p className="text-xl mb-8">
            Evaluación especializada para procesos DLE, SX y purificación de salmueras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center">
              Análisis Granulométrico
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Casos DLE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
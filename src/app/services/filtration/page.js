'use client'

import { useState } from 'react'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp } from 'lucide-react'

export default function FiltrationServicePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const processSteps = [
    {
      step: '1',
      title: 'Conexión',
      description: 'Integración móvil con sistemas existentes de planta',
      icon: Truck
    },
    {
      step: '2', 
      title: 'Filtración',
      description: 'Separación borras SX mediante filtros prensa móviles',
      icon: Filter
    },
    {
      step: '3',
      title: 'Deshidratación',
      description: 'Reducción humedad hasta niveles transportables',
      icon: Settings
    },
    {
      step: '4',
      title: 'Recuperación',
      description: 'Orgánico recuperado y torta seca lista para disposición',
      icon: TrendingUp
    }
  ]

  const specifications = {
    pressure: 'Filtración: 4-16 bar | Lavado: 2-8 bar | Secado: hasta 20 bar',
    cycle: 'Ciclos completos: 90-180 min según material',
    moisture: 'Reducción humedad: 12-15% inicial → 3-8% final',
    filtrate: 'Turbidez filtrado: <50 NTU | TSS: <100 mg/L',
    plates: 'Configuraciones: 1.2-2.5 m² por placa | 20-80 placas/prensa',
    automation: 'Control PLC con HMI | Registro datos tiempo real',
    temperature: 'Operación: -10°C a +60°C ambiente',
    solids: 'Concentración alimentación: 15-35% p/p | Granulometría: >5 μm'
  }

  const useCases = [
    {
      industry: 'Cobre',
      application: 'Filtración de borras en plantas SX',
      challenge: 'Acumulación de borras causando crud runs y alta pérdida de orgánico',
      solution: 'Filtros prensa móviles con 90% recuperación orgánico',
      result: 'Eliminación de crud runs y reducción 60% pérdidas',
      client: 'Radomiro Tomic (Codelco)',
      savings: 'Ahorro significativo solvente'
    },
    {
      industry: 'Zinc',
      application: 'Control de sólidos en circuitos SX-Zn',
      challenge: 'Mayor abrasividad y sensibilidad orgánica extrema',
      solution: 'Filtros adaptados a densidades Zn',
      result: 'Manejo eficiente de fase sólida abrasiva',
      client: 'Desarrollo para sector zinc',
      savings: 'En prospección'
    },
    {
      industry: 'Petróleo',
      application: 'Deshidratación borras oleosas',
      challenge: 'Lodos con 67% aceite, 25% sólidos, 8% agua',
      solution: 'Filtros prensa para recuperación HC',
      result: '90% recuperación aceite, 70% reducción volumen',
      client: 'Refinerías nacionales',
      savings: 'Recuperación valor HC'
    }
  ]

  const benefits = [
    'Sin necesidad de instalaciones definitivas',
    'Sin modificaciones a permisos ambientales',
    'Montaje rápido en faena',
    'Operación continua 7x7',
    'KPIs diarios de rendimiento',
    'Equipos respaldo disponibles',
    'Mantenimiento preventivo incluido'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-800/50 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 7h12M6 11h8M6 15h6"/>
                <rect x="16" y="13" width="4" height="6" fill="currentColor" opacity="0.3"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 15v2m0 0v2m0-2h-1m1 0h1"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Filtración y Deshidratación de Borras y Sólidos</h1>
              <p className="text-blue-200 text-lg mt-2">Soluciones móviles hasta 70 ton/día de capacidad</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">70</span>
              </div>
              <p className="text-blue-200 text-sm">Ton/día capacidad máxima</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">Ex.Proof</span>
              </div>
              <p className="text-blue-200 text-sm">Certificación ambientes explosivos</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Truck className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">100%</span>
              </div>
              <p className="text-blue-200 text-sm">Móvil sin instalaciones</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">24/7</span>
              </div>
              <p className="text-blue-200 text-sm">Operación continua</p>
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
                    ? 'border-blue-600 text-blue-600'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sistemas de Filtración Móvil de Alta Capacidad</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros sistemas de filtros prensa móviles están diseñados para el tratamiento eficiente de borras y sólidos 
                en plantas de procesamiento minero y petrolero. Con equipos certificados ex.proof, podemos operar en ambientes 
                explosivos con máxima seguridad y sin requerir instalaciones definitivas.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Tecnología Móvil Avanzada</h3>
                <p className="text-blue-800">
                  La principal ventaja de nuestro servicio es la capacidad de desplegar equipos de filtración de alta 
                  capacidad sin necesidad de modificar permisos ambientales o construir instalaciones permanentes. 
                  Esto permite implementación rápida y operación inmediata.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicaciones Principales</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Filtración de borras en plantas SX
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Deshidratación borras oleosas refinerías
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Tratamiento sólidos plantas metalúrgicas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Recuperación de valores en residuos
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diferenciadores Clave</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      Implementación sin paradas de planta
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      Flexibilidad total de ubicación
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      Escalabilidad según demanda
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-blue-600 mr-2" />
                      Soporte técnico 24/7
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Filtración y Deshidratación</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
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
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Control de Calidad</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Activity className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Monitoreo Continuo</div>
                          <div className="text-sm text-gray-600">Presión, caudal, turbidez, sólidos</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">KPIs Tiempo Real</div>
                          <div className="text-sm text-gray-600">Eficiencia filtración, throughput</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Certificación</div>
                          <div className="text-sm text-gray-600">Ex.proof, ISO, trazabilidad completa</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios del Servicio</h2>
              
              <div className="space-y-8">
                {/* ROI Analysis */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                    Análisis de Retorno de Inversión
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">18-24</div>
                      <div className="text-sm text-gray-600">Meses payback típico</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">$2-8M</div>
                      <div className="text-sm text-gray-600">Ahorro anual proyectado</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                      <div className="text-sm text-gray-600">ROI promedio 5 años</div>
                    </div>
                  </div>
                </div>

                {/* Implementation Timeline */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Timeline de Implementación</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Evaluación y Diagnóstico (1-3 días)</h4>
                        <p className="text-sm text-gray-600">Análisis in-situ, caracterización borras, diseño configuración</p>
                      </div>
                      <div className="text-blue-600 font-semibold">$0</div>
                    </div>
                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Despliegue y Puesta en Marcha (3-5 días)</h4>
                        <p className="text-sm text-gray-600">Montaje equipos, integración sistemas, arranque asistido</p>
                      </div>
                      <div className="text-green-600 font-semibold">Inicio facturación</div>
                    </div>
                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">Operación Estabilizada (7-14 días)</h4>
                        <p className="text-sm text-gray-600">Optimización parámetros, entrenamiento operadores, KPIs objetivo</p>
                      </div>
                      <div className="text-purple-600 font-semibold">Beneficios completos</div>
                    </div>
                  </div>
                </div>

                {/* Cost-Benefit Comparison */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Costos Sin Solución</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Pérdidas orgánico/mes</span>
                        <span className="font-semibold text-red-600">$200-800K</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Paradas no planificadas</span>
                        <span className="font-semibold text-red-600">$150-400K</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Multas ambientales potenciales</span>
                        <span className="font-semibold text-red-600">$50-200K</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Costo oportunidad producción</span>
                        <span className="font-semibold text-red-600">$100-300K</span>
                      </li>
                      <li className="border-t border-red-200 pt-2 flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total mensual</span>
                        <span className="font-bold text-red-600">$500K-1.7M</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Beneficios Con TSF</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Costo servicio/mes</span>
                        <span className="font-semibold text-green-600">$80-150K</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Ahorro pérdidas orgánico</span>
                        <span className="font-semibold text-green-600">+$120-480K</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Ahorro paradas evitadas</span>
                        <span className="font-semibold text-green-600">+$90-240K</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Ahorro cumplimiento</span>
                        <span className="font-semibold text-green-600">+$50-200K</span>
                      </li>
                      <li className="border-t border-green-200 pt-2 flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Beneficio neto mensual</span>
                        <span className="font-bold text-green-600">$180K-770K</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Decision Matrix */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Comparación vs Alternativas</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">Factor</th>
                          <th className="px-4 py-3 text-center font-semibold">Construcción Planta</th>
                          <th className="px-4 py-3 text-center font-semibold">Equipos Usados</th>
                          <th className="px-4 py-3 text-center font-semibold text-blue-600">TSF Móvil</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Tiempo implementación</td>
                          <td className="px-4 py-3 text-center text-red-600">18-36 meses</td>
                          <td className="px-4 py-3 text-center text-yellow-600">6-12 meses</td>
                          <td className="px-4 py-3 text-center text-green-600 font-semibold">&lt;1 semana</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">CAPEX inicial</td>
                          <td className="px-4 py-3 text-center text-red-600">$3-8M</td>
                          <td className="px-4 py-3 text-center text-yellow-600">$1-3M</td>
                          <td className="px-4 py-3 text-center text-green-600 font-semibold">$0</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Flexibilidad ubicación</td>
                          <td className="px-4 py-3 text-center text-red-600">Fija</td>
                          <td className="px-4 py-3 text-center text-red-600">Fija</td>
                          <td className="px-4 py-3 text-center text-green-600 font-semibold">Total</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Permisos ambientales</td>
                          <td className="px-4 py-3 text-center text-red-600">Nuevos requeridos</td>
                          <td className="px-4 py-3 text-center text-yellow-600">Modificación</td>
                          <td className="px-4 py-3 text-center text-green-600 font-semibold">No requeridos</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Soporte técnico</td>
                          <td className="px-4 py-3 text-center text-yellow-600">Limitado</td>
                          <td className="px-4 py-3 text-center text-red-600">Sin garantía</td>
                          <td className="px-4 py-3 text-center text-green-600 font-semibold">24/7 incluido</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Necesita Soluciones de Filtración Móvil?</h2>
          <p className="text-xl mb-8">
            Diagnóstico técnico especializado y implementación rápida sin instalaciones permanentes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
              Solicitar Evaluación
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Descargar Especificaciones
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
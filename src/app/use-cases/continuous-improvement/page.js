'use client'

import { useState } from 'react'
import { TrendingUp, CheckCircle, ArrowRight, Target, BarChart3, Settings, Lightbulb, Zap, Users } from 'lucide-react'

export default function ContinuousImprovementPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const improvementAreas = [
    {
      area: 'Optimización Eficiencia Filtración',
      objective: 'Incrementar throughput 15-25% sin CAPEX',
      industry: 'Concentración Mineral',
      baseline: 'Filtros operando 70% capacidad nominal',
      improvements: [
        'Optimización ciclos filtración',
        'Mejora distribución presión',
        'Automatización secuencias'
      ],
      result: 'Incremento 22% capacidad, ROI 8 meses',
      investment: 'Solo OPEX optimización',
      icon: Target,
      difficulty: 'medium'
    },
    {
      area: 'Reducción Pérdidas Orgánico SX',
      objective: 'Disminuir pérdidas <1% vs 2-3% actual',
      industry: 'SX-EW Cobre',
      baseline: 'Pérdidas orgánico 2.5% mensuales',
      improvements: [
        'Sistemas recuperación continua',
        'Optimización separadores',
        'Control calidad tiempo real'
      ],
      result: 'Reducción pérdidas 65%, ahorro $2M/año',
      investment: 'Equipos móviles, sin instalaciones',
      icon: TrendingUp,
      difficulty: 'high'
    },
    {
      area: 'Mejora Calidad Agua Proceso',
      objective: 'Reutilización 90% vs 60% actual',
      industry: 'Tratamiento Aguas',
      baseline: 'Claridad irregular, reutilización limitada',
      improvements: [
        'Clarificación avanzada',
        'Control automático calidad',
        'Optimización químicos'
      ],
      result: 'Reutilización 92%, reducción 40% agua fresca',
      investment: 'Sistemas modulares escalables',
      icon: Lightbulb,
      difficulty: 'low'
    },
    {
      area: 'Incremento Productividad EW',
      objective: 'Eficiencia corriente >95% estable',
      industry: 'Electroobtención',
      baseline: 'Eficiencia variable 85-92%',
      improvements: [
        'Programa limpieza optimizado',
        'Control parámetros automático',
        'Mantenimiento predictivo'
      ],
      result: 'Eficiencia estable 96%, +12% producción',
      investment: 'Programa mantenimiento especializado',
      icon: Zap,
      difficulty: 'medium'
    }
  ]

  const improvementProcess = [
    {
      phase: 'Diagnóstico Basal',
      duration: '2-4 semanas',
      activities: [
        'Auditoría técnica integral',
        'Medición KPIs actuales',
        'Identificación oportunidades',
        'Benchmarking industria'
      ],
      deliverable: 'Reporte diagnóstico con roadmap',
      icon: BarChart3
    },
    {
      phase: 'Diseño Soluciones',
      duration: '3-6 semanas', 
      activities: [
        'Ingeniería conceptual',
        'Modelamiento procesos',
        'Evaluación económica',
        'Plan implementación fases'
      ],
      deliverable: 'Propuesta técnico-económica',
      icon: Settings
    },
    {
      phase: 'Implementación Piloto',
      duration: '4-8 semanas',
      activities: [
        'Instalación equipos piloto',
        'Pruebas optimización',
        'Validación resultados',
        'Ajuste parámetros'
      ],
      deliverable: 'Validación técnica y económica',
      icon: Target
    },
    {
      phase: 'Escalamiento',
      duration: '6-12 semanas',
      activities: [
        'Implementación escala industrial',
        'Capacitación equipos',
        'Monitoreo performance',
        'Optimización continua'
      ],
      deliverable: 'Sistema optimizado funcionando',
      icon: TrendingUp
    }
  ]

  const benefits = [
    'Incremento productividad sin inversión CAPEX mayor',
    'Optimización recursos existentes',
    'Implementación sin paradas programadas',
    'ROI típico 6-18 meses',
    'Transferencia conocimiento equipos',
    'Mejora sostenible long-term',
    'Reducción costos operacionales',
    'Cumplimiento superiores estándares'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-800/50 rounded-xl flex items-center justify-center mr-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Mejora Continua</h1>
              <p className="text-blue-200 text-lg mt-2">Optimización sistemática sin inversiones mayores</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">15-25%</span>
              </div>
              <p className="text-blue-200 text-sm">Incremento típico productividad</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">6-18 meses</span>
              </div>
              <p className="text-blue-200 text-sm">ROI típico proyectos</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Settings className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">Sin paradas</span>
              </div>
              <p className="text-blue-200 text-sm">Implementación operando</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-blue-300 mr-2" />
                <span className="text-lg font-bold">100%</span>
              </div>
              <p className="text-blue-200 text-sm">Transferencia conocimiento</p>
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
              { id: 'areas', label: 'Áreas de Mejora' },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimización Sistemática de Procesos Existentes</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro programa de mejora continua está diseñado para optimizar procesos existentes sin requerir 
                inversiones CAPEX significativas. A través de metodologías probadas, logramos incrementos sustanciales 
                en productividad, eficiencia y calidad utilizando tecnología móvil y conocimiento especializado.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Cuándo Aplicar Mejora Continua</h3>
                <p className="text-blue-800 mb-4">
                  Este enfoque es ideal cuando su operación presenta:
                </p>
                <ul className="text-blue-800 space-y-2">
                  <li>• <strong>Performance por debajo del potencial</strong> - equipos operando &lt;80% capacidad</li>
                  <li>• <strong>Variabilidad operacional</strong> - resultados inconsistentes día a día</li>
                  <li>• <strong>Costos operacionales altos</strong> - consumos elevados reactivos/energía</li>
                  <li>• <strong>Calidad productos variable</strong> - especificaciones no siempre cumplidas</li>
                  <li>• <strong>Restricciones CAPEX</strong> - presupuestos limitados para inversiones</li>
                  <li>• <strong>Necesidad competitividad</strong> - presión reducir costos unitarios</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Metodología Aplicada</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Lean Manufacturing principles
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Six Sigma statistical approach
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Kaizen continuous improvement
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                      Digital twin modeling
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Herramientas de Optimización</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
                      Equipos móviles para testing
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
                      Sensores IoT temporales
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
                      Analytics avanzados
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
                      Simulación procesos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Garantía de Resultados</h3>
                <p className="text-green-800">
                  Todos nuestros proyectos de mejora continua incluyen garantías de performance. Si no se alcanzan 
                  los KPIs comprometidos, ajustamos la solución sin costo adicional hasta lograr los objetivos.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'areas' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Áreas de Mejora Típicas</h2>
              
              <div className="space-y-8">
                {improvementAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          area.difficulty === 'high' ? 'bg-red-500' :
                          area.difficulty === 'medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}>
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{area.area}</h3>
                          <p className="text-gray-600">Sector: {area.industry}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        area.difficulty === 'high' ? 'bg-red-100 text-red-800' :
                        area.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {area.difficulty === 'high' ? 'Alta Complejidad' :
                         area.difficulty === 'medium' ? 'Complejidad Media' :
                         'Baja Complejidad'}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Objetivo</h4>
                        <p className="text-blue-600 text-sm font-medium">{area.objective}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2 mt-4">Situación Actual</h4>
                        <p className="text-gray-600 text-sm">{area.baseline}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mejoras Implementadas</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {area.improvements.map((improvement, idx) => (
                            <li key={idx}>• {improvement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 bg-gray-50 rounded-lg p-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Resultado Alcanzado</h4>
                        <p className="text-green-600 text-sm font-medium">{area.result}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Inversión Requerida</h4>
                        <p className="text-blue-600 text-sm font-medium">{area.investment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Oportunidades de Mejora Adicionales</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Automatización Procesos</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Control automático parámetros</li>
                      <li>• Optimización ciclos operación</li>
                      <li>• Reducción variabilidad</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Eficiencia Energética</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Optimización consumos</li>
                      <li>• Recuperación energía</li>
                      <li>• Variable frequency drives</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Digitalización</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Sensores IoT avanzados</li>
                      <li>• Analytics predictivos</li>
                      <li>• Dashboard tiempo real</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Mejora Continua</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {improvementProcess.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                    <p className="text-blue-600 text-sm font-medium text-center mb-4">{phase.duration}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Actividades:</h4>
                    <ul className="text-gray-600 text-xs space-y-1 mb-4">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-900 mb-1 text-xs">Entregable:</h4>
                      <p className="text-blue-700 text-xs">{phase.deliverable}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Metodología de Optimización</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Análisis de Datos</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Statistical Process Control</div>
                          <div className="text-sm text-gray-600">Análisis variabilidad y control</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Root Cause Analysis</div>
                          <div className="text-sm text-gray-600">Identificación causas raíz</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Implementación</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Settings className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Pruebas Piloto</div>
                          <div className="text-sm text-gray-600">Validación escala reducida</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Escalamiento Controlado</div>
                          <div className="text-sm text-gray-600">Implementación progresiva</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">KPIs de Seguimiento</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-1">Productividad</h4>
                    <p className="text-blue-700 text-sm">Throughput, eficiencia, disponibilidad</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-1">Calidad</h4>
                    <p className="text-blue-700 text-sm">Especificaciones, variabilidad, rechazos</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-1">Costos</h4>
                    <p className="text-blue-700 text-sm">OPEX unitario, consumos, eficiencia</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Settings className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-1">Confiabilidad</h4>
                    <p className="text-blue-700 text-sm">Uptime, MTBF, mantenimiento</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios de la Mejora Continua</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Estratégicas</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Impacto Económico</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">Incremento productividad</span>
                        <span className="font-bold text-blue-900">15-25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">Reducción costos OPEX</span>
                        <span className="font-bold text-blue-900">10-20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">ROI típico</span>
                        <span className="font-bold text-blue-900">6-18 meses</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Impacto Operacional</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Mejora calidad productos</span>
                        <span className="font-bold text-green-900">Consistente</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Reducción variabilidad</span>
                        <span className="font-bold text-green-900">50-70%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Incremento disponibilidad</span>
                        <span className="font-bold text-green-900">5-10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Casos de Éxito en Mejora Continua</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Planta Concentradora</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-blue-700 text-sm">Throughput</span>
                        <span className="font-bold text-blue-900 text-sm">+22%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700 text-sm">ROI</span>
                        <span className="font-bold text-blue-900 text-sm">8 meses</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700 text-sm">CAPEX</span>
                        <span className="font-bold text-blue-900 text-sm">Cero</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-3">Planta SX-EW</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-green-700 text-sm">Pérdidas orgánico</span>
                        <span className="font-bold text-green-900 text-sm">-65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700 text-sm">Ahorro anual</span>
                        <span className="font-bold text-green-900 text-sm">$2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700 text-sm">Payback</span>
                        <span className="font-bold text-green-900 text-sm">6 meses</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-900 mb-3">Tratamiento Aguas</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-purple-700 text-sm">Reutilización</span>
                        <span className="font-bold text-purple-900 text-sm">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700 text-sm">Agua fresca</span>
                        <span className="font-bold text-purple-900 text-sm">-40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-700 text-sm">ROI</span>
                        <span className="font-bold text-purple-900 text-sm">12 meses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Resultados Típicos por Área</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                    <div className="text-sm text-gray-600">Incremento promedio productividad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
                    <div className="text-sm text-gray-600">Reducción costos operacionales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">12 meses</div>
                    <div className="text-sm text-gray-600">ROI promedio proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Proyectos exitosos</div>
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
          <h2 className="text-3xl font-bold mb-4">¿Listo para Optimizar su Operación?</h2>
          <p className="text-xl mb-8">
            Evaluación de oportunidades sin compromiso - identifique potencial de mejora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
              Solicitar Diagnóstico
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
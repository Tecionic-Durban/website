'use client'

import { useState } from 'react'
import { Shield, CheckCircle, ArrowRight, FileText, AlertTriangle, Truck, Clock, Zap, Users, Scale } from 'lucide-react'

export default function EnvironmentalCompliancePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const complianceAreas = [
    {
      area: 'Cumplimiento DS90/2000 Descarga Efluentes',
      regulation: 'Decreto Supremo 90/2000',
      challenge: 'Superación límites SST, turbidez y metales en descargas',
      requirements: [
        'SST <80 mg/L',
        'Turbidez <50 NTU', 
        'Metales disueltos según tabla',
        'pH 6.0-9.0'
      ],
      solution: 'Clarificadores móviles 120 m³/día + filtración pulimento',
      timeline: '2-4 semanas implementación',
      icon: FileText,
      severity: 'critical'
    },
    {
      area: 'Manejo Residuos Peligrosos Borras',
      regulation: 'DS148/2003 Residuos Peligrosos',
      challenge: 'Clasificación y disposición borras con metales pesados',
      requirements: [
        'Caracterización TCLP',
        'Manifesto transporte',
        'Disposición autorizada',
        'Trazabilidad completa'
      ],
      solution: 'Deshidratación in-situ para reducir volumen 70%',
      timeline: '1-2 semanas instalación',
      icon: AlertTriangle,
      severity: 'high'
    },
    {
      area: 'Permisos Sectoriales Ambientales',
      regulation: 'RCA y Permisos SEA',
      challenge: 'Modificaciones proceso requieren tramitación SEA prolongada',
      requirements: [
        'Evaluación impacto ambiental',
        'Consulta ciudadana',
        'Línea base actualizada',
        'Plan seguimiento'
      ],
      solution: 'Equipos móviles sin modificar permisos existentes',
      timeline: 'Implementación inmediata',
      icon: Scale,
      severity: 'medium'
    },
    {
      area: 'Emisiones Atmosféricas Material Particulado',
      regulation: 'DS113/2003 y DS59/1998',
      challenge: 'Control emisiones polvo en manejo sólidos secos',
      requirements: [
        'MP10 <150 μg/m³',
        'MP2.5 <50 μg/m³',
        'Monitoreo continuo',
        'Plan descontaminación'
      ],
      solution: 'Sistemas filtración cerrados con captación polvo',
      timeline: '3-6 semanas implementación',
      icon: Shield,
      severity: 'medium'
    }
  ]

  const complianceProcess = [
    {
      phase: 'Evaluación Regulatoria',
      duration: '1-2 semanas',
      activities: [
        'Auditoría cumplimiento actual',
        'Identificación gaps normativos',
        'Evaluación riesgos legales',
        'Benchmarking mejores prácticas'
      ],
      deliverable: 'Reporte compliance con plan acción',
      icon: FileText
    },
    {
      phase: 'Diseño Solución',
      duration: '2-3 semanas',
      activities: [
        'Ingeniería conceptual',
        'Evaluación alternativas',
        'Análisis costo-beneficio',
        'Cronograma implementación'
      ],
      deliverable: 'Propuesta técnica compliance',
      icon: Shield
    },
    {
      phase: 'Implementación',
      duration: '2-6 semanas',
      activities: [
        'Instalación equipos móviles',
        'Calibración y puesta en marcha',
        'Validación performance',
        'Documentación procesos'
      ],
      deliverable: 'Sistema operativo cumpliendo normativa',
      icon: Truck
    },
    {
      phase: 'Monitoreo',
      duration: 'Continuo',
      activities: [
        'Monitoreo parámetros críticos',
        'Reportes regulatorios',
        'Auditorías internas',
        'Mejora continua'
      ],
      deliverable: 'Cumplimiento sostenido largo plazo',
      icon: Users
    }
  ]

  const benefits = [
    'Cumplimiento normativo inmediato',
    'Evita multas y sanciones',
    'Mantiene licencia operacional',
    'Implementación sin parar operación',
    'No requiere modificar permisos',
    'Reducción riesgos legales',
    'Mejora relaciones comunitarias',
    'Sustentabilidad operacional'
  ]

  const regulations = [
    {
      name: 'DS90/2000',
      description: 'Norma de emisión para la regulación de contaminantes asociados a las descargas de residuos líquidos a aguas marinas y continentales superficiales',
      parameters: ['SST', 'DBO5', 'Aceites y grasas', 'pH', 'Temperatura'],
      typical_limits: '80 mg/L SST, 35 mg/L DBO5'
    },
    {
      name: 'DS148/2003', 
      description: 'Reglamento sanitario sobre manejo de residuos peligrosos',
      parameters: ['Toxicidad TCLP', 'Inflamabilidad', 'Reactividad', 'Corrosividad'],
      typical_limits: 'Clasificación según características peligrosidad'
    },
    {
      name: 'DS113/2003',
      description: 'Norma primaria de calidad de aire para material particulado',
      parameters: ['MP10', 'MP2.5'],
      typical_limits: '150 μg/m³ MP10, 50 μg/m³ MP2.5'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-green-800/50 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Cumplimiento Ambiental</h1>
              <p className="text-green-200 text-lg mt-2">Soluciones para cumplir normativas sin instalaciones definitivas</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <FileText className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">100%</span>
              </div>
              <p className="text-green-200 text-sm">Cumplimiento normativo</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">2-6 sem</span>
              </div>
              <p className="text-green-200 text-sm">Implementación típica</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">Sin permisos</span>
              </div>
              <p className="text-green-200 text-sm">Modificar autorizaciones</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-green-300 mr-2" />
                <span className="text-lg font-bold">Zero</span>
              </div>
              <p className="text-green-200 text-sm">Multas y sanciones</p>
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
              { id: 'areas', label: 'Áreas de Cumplimiento' },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cumplimiento Ambiental Sin Complejidades</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestras soluciones móviles permiten cumplir normativas ambientales de manera inmediata sin 
                requerir modificaciones a permisos existentes o construcción de instalaciones permanentes. 
                Ideal para operaciones que necesitan mantener compliance mientras evalúan soluciones definitivas.
              </p>
              
              <div className="bg-green-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Desafíos Regulatorios Comunes</h3>
                <p className="text-green-800 mb-4">
                  Las operaciones mineras enfrentan presión regulatoria creciente:
                </p>
                <ul className="text-green-800 space-y-2">
                  <li>• <strong>Normativas más estrictas</strong> - Límites de descarga cada vez menores</li>
                  <li>• <strong>Fiscalización intensificada</strong> - Multas significativas por incumplimiento</li>
                  <li>• <strong>Presión social</strong> - Comunidades más exigentes con temas ambientales</li>
                  <li>• <strong>Tramitación lenta</strong> - Modificaciones de permisos toman 12-24 meses</li>
                  <li>• <strong>Riesgos operacionales</strong> - Paradas forzadas por incumplimiento</li>
                  <li>• <strong>Costos elevados</strong> - Instalaciones permanentes requieren CAPEX mayor</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ventajas de Soluciones Móviles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Implementación inmediata
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Sin modificar permisos existentes
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Inversión CAPEX mínima
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Flexibilidad operacional
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Normativas Principales</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <FileText className="w-4 h-4 text-green-600 mr-2" />
                      DS90/2000 - Descargas líquidas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FileText className="w-4 h-4 text-green-600 mr-2" />
                      DS148/2003 - Residuos peligrosos
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FileText className="w-4 h-4 text-green-600 mr-2" />
                      DS113/2003 - Material particulado
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FileText className="w-4 h-4 text-green-600 mr-2" />
                      Permisos sectoriales SEA
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Tiempo es Crítico</h3>
                <p className="text-yellow-800">
                  Las multas ambientales pueden alcanzar miles de UTA (&gt;$50M en casos extremos). Cada día de 
                  incumplimiento incrementa el riesgo legal y reputacional. Nuestras soluciones permiten 
                  compliance inmediato mientras se evalúan alternativas permanentes.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'areas' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Áreas Críticas de Cumplimiento</h2>
              
              <div className="space-y-8">
                {complianceAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          area.severity === 'critical' ? 'bg-red-500' :
                          area.severity === 'high' ? 'bg-orange-500' :
                          'bg-yellow-500'
                        }`}>
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{area.area}</h3>
                          <p className="text-gray-600">Normativa: {area.regulation}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        area.severity === 'critical' ? 'bg-red-100 text-red-800' :
                        area.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.severity === 'critical' ? 'CRÍTICO' :
                         area.severity === 'high' ? 'ALTA PRIORIDAD' :
                         'PRIORIDAD MEDIA'}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Desafío</h4>
                        <p className="text-gray-600 text-sm mb-3">{area.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">Requerimientos</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {area.requirements.map((req, idx) => (
                            <li key={idx}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Solución TSF</h4>
                        <p className="text-green-600 text-sm font-medium">{area.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2">Timeline</h4>
                        <p className="text-blue-600 text-sm font-medium">{area.timeline}</p>
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      area.severity === 'critical' ? 'bg-red-50' :
                      area.severity === 'high' ? 'bg-orange-50' :
                      'bg-yellow-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Riesgo de Incumplimiento</span>
                        <span className={`text-sm font-bold ${
                          area.severity === 'critical' ? 'text-red-600' :
                          area.severity === 'high' ? 'text-orange-600' :
                          'text-yellow-600'
                        }`}>
                          {area.severity === 'critical' ? 'MULTAS MAYORES' :
                           area.severity === 'high' ? 'SANCIONES SIGNIFICATIVAS' :
                           'OBSERVACIONES REGULATORIAS'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-green-900 mb-6">Marco Regulatorio Chileno</h3>
                <div className="grid gap-6">
                  {regulations.map((reg, index) => (
                    <div key={index} className="bg-white rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-semibold text-green-900">{reg.name}</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Vigente
                        </span>
                      </div>
                      <p className="text-green-700 text-sm mb-3">{reg.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-green-900 mb-2">Parámetros Controlados</h5>
                          <p className="text-green-700 text-sm">{reg.parameters.join(', ')}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-green-900 mb-2">Límites Típicos</h5>
                          <p className="text-green-700 text-sm">{reg.typical_limits}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso de Cumplimiento</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {complianceProcess.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{phase.phase}</h3>
                    <p className="text-green-600 text-sm font-medium text-center mb-4">{phase.duration}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Actividades:</h4>
                    <ul className="text-gray-600 text-xs space-y-1 mb-4">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                    
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-900 mb-1 text-xs">Entregable:</h4>
                      <p className="text-green-700 text-xs">{phase.deliverable}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Metodología de Compliance</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Evaluación Legal</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Scale className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Due Diligence Regulatorio</div>
                          <div className="text-sm text-gray-600">Revisión exhaustiva normativa aplicable</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Gap Analysis</div>
                          <div className="text-sm text-gray-600">Identificación brechas compliance</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Implementación</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Truck className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Despliegue Rápido</div>
                          <div className="text-sm text-gray-600">Equipos móviles sin tramitación</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Validación Compliance</div>
                          <div className="text-sm text-gray-600">Verificación cumplimiento normativo</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-green-900 mb-6">Garantías de Cumplimiento</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-3">Performance Garantizada</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Cumplimiento 100% normativa</li>
                      <li>• Parámetros dentro de límites</li>
                      <li>• Monitoreo tiempo real</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-3">Soporte Legal</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Documentación regulatoria</li>
                      <li>• Reportes autoridades</li>
                      <li>• Respaldo técnico auditorías</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-3">Contingencias</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Equipos backup disponibles</li>
                      <li>• Respuesta emergencias 24/7</li>
                      <li>• Plan continuidad operacional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios del Cumplimiento Ambiental</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ventajas Estratégicas</h3>
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
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Protección Legal</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Riesgo multas</span>
                        <span className="font-bold text-green-900">Eliminado</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Cumplimiento normativo</span>
                        <span className="font-bold text-green-900">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Tiempo implementación</span>
                        <span className="font-bold text-green-900">2-6 semanas</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Ventajas Operacionales</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">Modificación permisos</span>
                        <span className="font-bold text-blue-900">No requerida</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">Paradas operación</span>
                        <span className="font-bold text-blue-900">Ninguna</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">Flexibilidad</span>
                        <span className="font-bold text-blue-900">Total</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Impacto Económico del Incumplimiento</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">Multas Potenciales</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-red-700 text-sm">DS90 Leve</span>
                        <span className="font-bold text-red-900 text-sm">1-10 UTA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-700 text-sm">DS90 Grave</span>
                        <span className="font-bold text-red-900 text-sm">11-500 UTA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-700 text-sm">DS90 Gravísima</span>
                        <span className="font-bold text-red-900 text-sm">501-10,000 UTA</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-900 mb-3">Costos Adicionales</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-orange-700 text-sm">Asesoría legal</span>
                        <span className="font-bold text-orange-900 text-sm">$50-200K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700 text-sm">Estudios adicionales</span>
                        <span className="font-bold text-orange-900 text-sm">$100-500K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-700 text-sm">Tiempo management</span>
                        <span className="font-bold text-orange-900 text-sm">6-18 meses</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Riesgos Operacionales</h4>
                    <div className="space-y-2">
                      <div className="text-yellow-700 text-sm">• Parada forzada operación</div>
                      <div className="text-yellow-700 text-sm">• Pérdida licencia social</div>
                      <div className="text-yellow-700 text-sm">• Daño reputacional</div>
                      <div className="text-yellow-700 text-sm">• Restricciones futuras</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Casos de Cumplimiento Exitoso</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Cumplimiento normativo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">Zero</div>
                    <div className="text-sm text-gray-600">Multas o sanciones</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">4 sem</div>
                    <div className="text-sm text-gray-600">Promedio implementación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Proyectos compliance</div>
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Cumplir Normativas Ambientales Urgente?</h2>
          <p className="text-xl mb-8">
            Evaluación compliance sin compromiso - evite multas con soluciones inmediatas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center">
              Auditoría Compliance
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Marco Regulatorio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

// src/app/services/page.js
import { useState } from 'react'
import { ChevronDown, ChevronRight, Beaker, Droplets, Factory, Zap, Filter, Microscope, RefreshCw, Truck, Settings, Shield, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null)
  const [hoveredUseCase, setHoveredUseCase] = useState(null)

  const servicesData = [
    {
      id: 'filtration',
      title: 'Filtración y Deshidratación de Borras y Sólidos',
      icon: Filter,
      description: 'Filtración móvil en refinerías y plantas SX con capacidad hasta 70 ton/día de torta seca',
      detailedDescription: 'Sistemas de filtros prensa móviles de alta capacidad para el tratamiento eficiente de borras y sólidos en plantas de procesamiento. Nuestros equipos certificados ex.proof permiten operar en ambientes explosivos con máxima seguridad.',
      specifications: {
        capacity: 'Hasta 70 ton/día de torta seca',
        equipment: 'Filtros prensa móviles',
        certification: 'Equipos ex.proof para ambientes explosivos',
        mobility: 'Plataformas móviles sin instalaciones definitivas'
      },
      benefits: [
        'Sin necesidad de instalaciones definitivas',
        'Sin modificaciones a permisos ambientales',
        'Montaje rápido en faena',
        'Operación continua 7x7',
        'KPIs diarios de rendimiento'
      ],
      useCases: [
        {
          industry: 'Cobre',
          application: 'Filtración de borras en plantas SX',
          challenge: 'Acumulación de borras causando crud runs',
          solution: 'Filtros prensa móviles con 90% recuperación orgánico',
          result: 'Eliminación de crud runs y reducción 60% pérdidas'
        },
        {
          industry: 'Zinc',
          application: 'Control de sólidos en circuitos SX-Zn',
          challenge: 'Mayor abrasividad y sensibilidad orgánica',
          solution: 'Filtros adaptados a densidades Zn',
          result: 'Manejo eficiente de fase sólida'
        },
        {
          industry: 'Petróleo',
          application: 'Deshidratación borras oleosas',
          challenge: 'Lodos con 67% aceite, 25% sólidos, 8% agua',
          solution: 'Filtros prensa para recuperación HC',
          result: '90% recuperación aceite, 70% reducción volumen'
        }
      ]
    },
    {
      id: 'organic',
      title: 'Tratamiento y Recuperación de Orgánico',
      icon: Beaker,
      description: 'Recuperación de orgánico en procesos SX con reducción de pérdidas y optimización de eficiencia',
      detailedDescription: 'Tratamiento especializado para la recuperación de orgánico entrainment en plantas de extracción por solventes. Tecnología avanzada para reducir pérdidas de extractante y mantener la calidad del proceso SX.',
      specifications: {
        recovery: '90-95% recuperación de orgánico',
        technology: 'Sistemas de coalescencia y separación',
        monitoring: 'Control continuo de calidad orgánico',
        efficiency: 'Reducción 60% pérdidas de solvente'
      },
      benefits: [
        'Reducción significativa pérdidas orgánico',
        'Optimización eficiencia planta SX',
        'Estabilidad operacional mejorada',
        'Menor consumo de extractante nuevo',
        'Cumplimiento ambiental'
      ],
      useCases: [
        {
          industry: 'Cobre',
          application: 'Tratamiento orgánico SX',
          challenge: 'Entrainment y degradación extractante',
          solution: 'Recuperación y purificación continua',
          result: 'Extensión vida útil orgánico 50%'
        },
        {
          industry: 'Cobalto/Níquel',
          application: 'Recuperación extractante especializado',
          challenge: 'Alto costo extractantes específicos',
          solution: 'Sistema recuperación dedicado',
          result: 'Ahorro significativo en reactivos'
        },
        {
          industry: 'Uranio',
          application: 'Control orgánico en SX uranio',
          challenge: 'Requisitos regulatorios estrictos',
          solution: 'Tratamiento con trazabilidad completa',
          result: 'Cumplimiento 100% normativas'
        }
      ]
    },
    {
      id: 'dehydration',
      title: 'Deshidratación de Concentrados',
      icon: Droplets,
      description: 'Filtros prensa de alta capacidad para deshidratación de concentrados metálicos',
      detailedDescription: 'Deshidratación eficiente de concentrados de cobre y otros metales mediante filtros prensa de alta capacidad. Optimización del contenido de humedad para transporte y procesamiento posterior.',
      specifications: {
        moisture: 'Humedad final 8-10%',
        capacity: 'Procesamiento continuo alta capacidad',
        metals: 'Cobre, zinc, plomo, otros',
        recovery: 'Máxima recuperación de valores'
      },
      benefits: [
        'Optimización costos de transporte',
        'Mejor manejo de concentrados',
        'Reducción pérdidas por humedad',
        'Cumplimiento especificaciones comerciales',
        'Operación continua confiable'
      ],
      useCases: [
        {
          industry: 'Cobre',
          application: 'Concentrados de flotación',
          challenge: 'Alto contenido humedad post-flotación',
          solution: 'Filtrado alta presión',
          result: 'Humedad <9% para exportación'
        },
        {
          industry: 'Zinc',
          application: 'Concentrados zinc para fundición',
          challenge: 'Requerimientos fundición específicos',
          solution: 'Control preciso humedad',
          result: 'Cumplimiento specs fundición'
        },
        {
          industry: 'Polimetálicos',
          application: 'Concentrados complejos',
          challenge: 'Variabilidad mineralógica',
          solution: 'Ajuste dinámico parámetros',
          result: 'Proceso estable multi-producto'
        }
      ]
    },
    {
      id: 'fines',
      title: 'Tratamiento de Sólidos Finos',
      icon: Microscope,
      description: 'Manejo de sólidos finos de clarificadores con capacidad hasta 14 ton/día',
      detailedDescription: 'Procesamiento especializado de sólidos finos provenientes de clarificadores y procesos de separación. Sistemas de centrifugación y filtración para partículas ultrafinas.',
      specifications: {
        capacity: 'Hasta 14 ton/día sólidos finos',
        equipment: 'Centrífugas especializadas',
        particle: 'Manejo partículas <10 micrones',
        efficiency: 'Recuperación >95% sólidos'
      },
      benefits: [
        'Clarificación eficiente de aguas',
        'Recuperación valores en finos',
        'Reducción carga a tranques',
        'Mejora calidad agua recirculada',
        'Cumplimiento ambiental descargas'
      ],
      useCases: [
        {
          industry: 'Litio',
          application: 'Salmueras con sólidos finos',
          challenge: 'Protección sistemas DLE',
          solution: 'Pretratamiento UF integrado',
          result: 'Extensión vida medios DLE'
        },
        {
          industry: 'Potasio',
          application: 'Clarificación salmueras KCl',
          challenge: 'Cumplimiento ambiental descargas',
          solution: 'Sistema reducción TSS',
          result: 'Cumplimiento NPDES garantizado'
        },
        {
          industry: 'Cobre',
          application: 'Overflow espesadores',
          challenge: 'Pérdidas cobre en finos',
          solution: 'Recuperación ultracentrífuga',
          result: 'Recuperación adicional 2% Cu'
        }
      ]
    },
    {
      id: 'water',
      title: 'Remoción Sólidos de Aguas Clarificadas',
      icon: RefreshCw,
      description: 'Optimización de recirculación con capacidad hasta 120 m³/día agua clarificada',
      detailedDescription: 'Sistemas avanzados para la remoción de sólidos suspendidos en aguas clarificadas, optimizando la recirculación de agua de proceso y minimizando el consumo de agua fresca.',
      specifications: {
        capacity: 'Hasta 120 m³/día agua clarificada',
        quality: 'TSS <50 ppm en agua tratada',
        technology: 'Bombas especiales para pulpas',
        recovery: 'Recuperación >98% agua proceso'
      },
      benefits: [
        'Reducción consumo agua fresca',
        'Optimización balance hídrico',
        'Menor impacto ambiental',
        'Ahorro costos operacionales',
        'Cumplimiento normativas hídricas'
      ],
      useCases: [
        {
          industry: 'Minería General',
          application: 'Recirculación agua proceso',
          challenge: 'Escasez hídrica y regulaciones',
          solution: 'Clarificación avanzada móvil',
          result: 'Reducción 40% consumo agua fresca'
        },
        {
          industry: 'Lixiviación',
          application: 'Agua para riego pilas',
          challenge: 'Acumulación sólidos en solución',
          solution: 'Filtración continua PLS',
          result: 'Mejora percolación 25%'
        },
        {
          industry: 'Flotación',
          application: 'Agua recuperada flotación',
          challenge: 'Reactivos residuales y finos',
          solution: 'Tratamiento selectivo',
          result: 'Reutilización 95% agua proceso'
        }
      ]
    },
    {
      id: 'ew-cleaning',
      title: 'Limpieza de Celdas EW',
      icon: Zap,
      description: 'Limpieza especializada de celdas electroobtención para optimización de cátodos',
      detailedDescription: 'Servicios especializados de limpieza y mantenimiento de celdas de electroobtención para mantener eficiencias operacionales óptimas y calidad superior de cátodos.',
      specifications: {
        efficiency: 'Mejora 15% eficiencia corriente',
        quality: 'Reducción 80% contaminación cátodos',
        downtime: 'Limpieza sin parada prolongada',
        safety: 'Procedimientos seguros certificados'
      },
      benefits: [
        'Mayor calidad cátodos grado A',
        'Reducción consumo energético',
        'Extensión vida útil ánodos',
        'Menor contaminación física',
        'Optimización densidad corriente'
      ],
      useCases: [
        {
          industry: 'Cobre',
          application: 'Celdas EW convencionales',
          challenge: 'Nodulación y cortocircuitos',
          solution: 'Limpieza programada preventiva',
          result: 'Reducción 90% cortocircuitos'
        },
        {
          industry: 'Zinc',
          application: 'EW zinc alta pureza',
          challenge: 'Sticky zinc y contaminación',
          solution: 'Protocolo limpieza especializado',
          result: 'Cátodos 99.995% pureza'
        },
        {
          industry: 'Cobalto',
          application: 'Electroobtención cobalto',
          challenge: 'Adherencia y desprendimiento',
          solution: 'Tratamiento superficie optimizado',
          result: 'Mejora 30% desprendimiento'
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Mantenimiento Preventivo y Soporte',
      icon: Settings,
      description: 'Mantenimiento integral de equipos con cambios rápidos para minimizar detenciones',
      detailedDescription: 'Programa completo de mantenimiento preventivo para filtros prensa, bombas y sistemas auxiliares. Incluye cambios rápidos de equipamiento cuando se requiere mantenimiento mayor.',
      specifications: {
        availability: 'Soporte 24/7',
        response: 'Respuesta <4 horas',
        spare: 'Equipos respaldo disponibles',
        training: 'Capacitación operadores incluida'
      },
      benefits: [
        'Minimización tiempos muertos',
        'Disponibilidad equipos respaldo',
        'Extensión vida útil equipos',
        'Optimización costos mantenimiento',
        'Transferencia conocimiento'
      ],
      useCases: [
        {
          industry: 'Operación Continua',
          application: 'Plantas 24/7',
          challenge: 'No puede parar producción',
          solution: 'Cambio equipos en caliente',
          result: 'Cero pérdida producción'
        },
        {
          industry: 'Sitios Remotos',
          application: 'Faenas aisladas',
          challenge: 'Difícil acceso repuestos/servicio',
          solution: 'Programa preventivo integral',
          result: 'Reducción 70% fallas imprevistas'
        },
        {
          industry: 'Multi-sitio',
          application: 'Operaciones múltiples',
          challenge: 'Gestión compleja mantenimiento',
          solution: 'Contrato marco servicios',
          result: 'Estandarización y eficiencia'
        }
      ]
    },
    {
      id: 'hazardous',
      title: 'Manejo Residuos Peligrosos',
      icon: Shield,
      description: 'Tratamiento seguro de lodos con hidrocarburos y residuos peligrosos',
      detailedDescription: 'Gestión especializada de residuos peligrosos petroleros y mineros con cumplimiento total de normativas ambientales. Equipos certificados ex.proof para ambientes explosivos.',
      specifications: {
        certification: 'Equipos ex.proof certificados',
        compliance: 'Cumplimiento DS148 y normativas',
        tracking: 'Trazabilidad completa residuos',
        disposal: 'Disposición final autorizada'
      },
      benefits: [
        'Cumplimiento regulatorio 100%',
        'Reducción riesgos ambientales',
        'Trazabilidad documentada',
        'Minimización responsabilidad legal',
        'Recuperación valores cuando posible'
      ],
      useCases: [
        {
          industry: 'Refinerías',
          application: 'Lodos tanques almacenamiento',
          challenge: 'Residuos con HC y metales pesados',
          solution: 'Tratamiento three-phase separation',
          result: 'Recuperación 90% hidrocarburos'
        },
        {
          industry: 'Minería',
          application: 'Borras con cianuro/arsénico',
          challenge: 'Alta peligrosidad y regulación',
          solution: 'Protocolo especializado seguro',
          result: 'Cero incidentes ambientales'
        },
        {
          industry: 'Petroquímica',
          application: 'Catalizadores gastados',
          challenge: 'Metales valiosos en residuo peligroso',
          solution: 'Recuperación selectiva metales',
          result: 'Recuperación Pt, Pd, V económica'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Servicios Especializados TSF</h1>
          <p className="text-xl text-emerald-100">
            Soluciones móviles de filtración y separación sólido-líquido para la industria minera y petrolera
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Services List */}
              <div className="border-r border-gray-200">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Nuestros Servicios</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Seleccione un servicio para ver casos de uso específicos
                  </p>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {servicesData.map((service) => (
                    <div
                      key={service.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        activeService?.id === service.id 
                          ? 'bg-emerald-50 border-l-4 border-emerald-600' 
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                      onClick={() => setActiveService(service)}
                    >
                      <div className="p-4">
                        <div className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            activeService?.id === service.id
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <service.icon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className={`font-semibold ${
                                activeService?.id === service.id
                                  ? 'text-emerald-900'
                                  : 'text-gray-900'
                              }`}>
                                {service.title}
                              </h3>
                              {activeService?.id === service.id ? (
                                <ChevronDown className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 mt-1">
                              {service.description}
                            </p>

                            {activeService?.id === service.id && (
                              <div className="mt-3 space-y-2">
                                <div className="bg-white rounded-lg p-3">
                                  <h4 className="text-xs font-semibold text-emerald-700 mb-2">
                                    ESPECIFICACIONES TÉCNICAS
                                  </h4>
                                  <ul className="space-y-1">
                                    {Object.entries(service.specifications).map(([key, value]) => (
                                      <li key={key} className="flex items-start text-xs">
                                        <CheckCircle className="w-3 h-3 text-emerald-500 mr-1 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{value}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Use Cases */}
              <div>
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Casos de Uso</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Aplicaciones específicas por industria
                  </p>
                </div>

                {activeService ? (
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {activeService.title}
                      </h3>
                      <p className="text-gray-600">
                        {activeService.detailedDescription}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">BENEFICIOS CLAVE</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {activeService.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">CASOS DE USO POR INDUSTRIA</h4>
                      <div className="space-y-3">
                        {activeService.useCases.map((useCase, index) => (
                          <div
                            key={index}
                            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                              hoveredUseCase === index
                                ? 'border-emerald-500 bg-emerald-50 shadow-md'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onMouseEnter={() => setHoveredUseCase(index)}
                            onMouseLeave={() => setHoveredUseCase(null)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-emerald-600 rounded">
                                  {useCase.industry}
                                </span>
                                <h5 className="font-semibold text-gray-900 mt-2">
                                  {useCase.application}
                                </h5>
                              </div>
                            </div>
                            
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium text-gray-700">Desafío:</span>
                                <p className="text-gray-600">{useCase.challenge}</p>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Solución TSF:</span>
                                <p className="text-gray-600">{useCase.solution}</p>
                              </div>
                              <div>
                                <span className="font-medium text-emerald-700">Resultado:</span>
                                <p className="text-emerald-600 font-medium">{useCase.result}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Filter className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 mb-2">Seleccione un servicio para ver casos de uso</p>
                    <p className="text-sm text-gray-400">
                      Cada servicio incluye múltiples aplicaciones industriales
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="mt-12 bg-emerald-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Diferenciadores Clave TSF</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">100% Móvil</h3>
                <p className="text-sm text-emerald-100">
                  Sin instalaciones definitivas ni modificaciones a permisos
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Certificado Ex.Proof</h3>
                <p className="text-sm text-emerald-100">
                  Equipos para ambientes explosivos y peligrosos
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Flexibilidad Total</h3>
                <p className="text-sm text-emerald-100">
                  Múltiples líneas de trabajo en paralelo
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">KPIs Diarios</h3>
                <p className="text-sm text-emerald-100">
                  Reporte continuo de volumen, sólidos y eficiencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesita una Solución Móvil de Filtración?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Diagnóstico inicial especializado y montaje rápido en faena
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300">
              Solicitar Evaluación Técnica
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Descargar Especificaciones
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
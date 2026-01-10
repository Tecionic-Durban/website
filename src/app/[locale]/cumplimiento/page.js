export const metadata = {
  title: 'Cumplimiento - Tec-Ionic Durban',
  description: 'Normativas, certificaciones y estándares de cumplimiento en operaciones mineras y procesos LIX/SX/EW.',
}

export default function CumplimientoPage() {
  const certifications = [
    {
      id: 1,
      name: "Registro SICEP",
      category: "Registro Oficial",
      description: "Registro en el Sistema de Información de Contratistas para prestación de servicios en la industria petrolera y minera",
      status: "Certificado",
      validUntil: "Vigente",
      scope: "Servicios de filtración, deshidratación y tratamiento de sólidos en industria minera y petrolera",
      benefits: [
        "Habilitación para trabajar con empresas estatales",
        "Cumplimiento de requisitos legales",
        "Validación de capacidades técnicas",
        "Acceso a licitaciones públicas"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Clasificación Ex.Proof",
      category: "Seguridad Industrial",
      description: "Equipos con clasificación para ambientes explosivos, cumpliendo estándares internacionales de seguridad",
      status: "Certificado",
      validUntil: "Vigente",
      scope: "Filtros prensa móviles, centrífugas y sistemas auxiliares para operación en zonas de riesgo",
      benefits: [
        "Operación segura en atmósferas explosivas",
        "Cumplimiento normativas de seguridad minera",
        "Reducción de riesgos operacionales",
        "Protección de personal y equipos"
      ],
      color: "from-red-500 to-red-600"
    }
  ]

  const regulations = [
    {
      category: "Normativa Equipos Móviles Mineros Chile",
      items: [
        {
          name: "DS 132/2004 - Reglamento Seguridad Minera",
          description: "Regulación de seguridad para equipos móviles y sistemas de tratamiento en operaciones mineras",
          compliance: "Cumplimiento total",
          requirements: [
            "Certificación ex.proof para equipos en zonas peligrosas",
            "Inspección periódica de equipos móviles",
            "Protocolos de seguridad operacional",
            "Capacitación especializada de operadores"
          ]
        },
        {
          name: "DS 90/2000 - MINSEGPRES",
          description: "Norma de emisión para regulación de efluentes en procesos SX/EW",
          compliance: "Cumplimiento total",
          requirements: [
            "Monitoreo continuo de efluentes de filtros prensa",
            "Límites de descargas para Cu, Zn, Fe",
            "Sistemas de recirculación de agua proceso",
            "Reportes mensuales de calidad de agua"
          ]
        },
        {
          name: "NCh 2245/2003 - Manejo Sustancias Peligrosas",
          description: "Normativa chilena para manejo seguro de reactivos SX y solventes orgánicos",
          compliance: "Cumplimiento total",
          requirements: [
            "Almacenamiento seguro de extractantes",
            "Sistemas de contención secundaria",
            "Planes de respuesta a derrames",
            "Etiquetado y documentación SDS"
          ]
        }
      ]
    },
    {
      category: "Estándares Internacionales Equipos Móviles",
      items: [
        {
          name: "ATEX Directive 2014/34/EU",
          description: "Directiva europea para equipos destinados a atmósferas explosivas en minería",
          compliance: "Cumplimiento total",
          requirements: [
            "Certificación Ex d IIC T4 para filtros prensa",
            "Evaluación de riesgos ATEX",
            "Documentación técnica completa",
            "Inspección de organismos notificados"
          ]
        },
        {
          name: "IMSBC Code - IMO",
          description: "Código Marítimo Internacional para Cargas Sólidas a Granel (concentrados)",
          compliance: "Cumplimiento total",
          requirements: [
            "TML compliance para concentrados Cu/Zn",
            "Certificados de humedad <10%",
            "Procedimientos de muestreo estándar",
            "Documentación para autoridades portuarias"
          ]
        },
        {
          name: "NFPA 70E - Electrical Safety",
          description: "Estándar de seguridad eléctrica para trabajos en sistemas EW de alta corriente",
          compliance: "Cumplimiento total",
          requirements: [
            "Análisis de peligros de arco eléctrico",
            "EPP certificados para alta corriente",
            "Procedimientos de bloqueo/etiquetado",
            "Capacitación calificada de electricistas"
          ]
        },
        {
          name: "IEC 60079 - Explosive Atmospheres",
          description: "Estándar internacional para equipos eléctricos en atmósferas explosivas",
          compliance: "Cumplimiento total",
          requirements: [
            "Clasificación de áreas peligrosas",
            "Selección de equipos Ex certificados",
            "Instalación según códigos aplicables",
            "Mantenimiento especializado"
          ]
        }
      ]
    }
  ]

  const complianceMetrics = [
    {
      metric: "Auditorías Exitosas",
      value: "100%",
      period: "Últimos 3 años",
      description: "Todas las auditorías de seguridad y cumplimiento aprobadas sin observaciones mayores"
    },
    {
      metric: "Incidentes de Seguridad",
      value: "0",
      period: "2023-2024",
      description: "Cero incidentes en operaciones con equipos Ex.Proof certificados"
    },
    {
      metric: "Cumplimiento Normativo",
      value: "100%",
      period: "Histórico",
      description: "Cumplimiento total de regulaciones mineras y de seguridad industrial"
    },
    {
      metric: "Certificaciones Vigentes",
      value: "2",
      period: "Actuales",
      description: "Registro SICEP y Clasificación Ex.Proof para equipos móviles"
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Certificado':
        return 'bg-green-100 text-green-800'
      case 'Vigente':
        return 'bg-emerald-100 text-emerald-800'
      case 'En proceso':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getComplianceIcon = (compliance) => {
    switch(compliance) {
      case 'Cumplimiento total':
        return '✅'
      case 'Cumplimiento parcial':
        return '⚠️'
      case 'Aplicable según proyecto':
        return '📋'
      default:
        return '📄'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Cumplimiento y Certificaciones</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Nuestro compromiso con los más altos estándares de calidad, seguridad y 
              protección ambiental en todas las operaciones mineras.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {complianceMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
                <div className="text-sm text-emerald-700 font-medium mb-2">{metric.period}</div>
                <div className="text-xs text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Certificaciones</h2>
            <p className="text-lg text-gray-600">
              Certificados por organismos internacionales reconocidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">
                      {cert.name.split(' ')[0].substring(0, 3)}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <div className="text-emerald-600 font-semibold mb-4">{cert.category}</div>
                
                <p className="text-gray-600 mb-6">{cert.description}</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Alcance:</span>
                    <span className="text-sm text-gray-500">Válido hasta {cert.validUntil}</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">{cert.scope}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Beneficios Clave:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cumplimiento Normativo</h2>
            <p className="text-lg text-gray-600">
              Adherencia total a regulaciones locales e internacionales
            </p>
          </div>

          <div className="space-y-12">
            {regulations.map((regCategory, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {regCategory.category}
                </h3>
                
                <div className="grid gap-8">
                  {regCategory.items.map((regulation, regIndex) => (
                    <div key={regIndex} className="bg-gray-50 rounded-xl p-6">
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{getComplianceIcon(regulation.compliance)}</span>
                            <h4 className="text-lg font-bold text-gray-900">{regulation.name}</h4>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{regulation.description}</p>
                          
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm font-semibold text-gray-700">Estado:</span>
                            <span className={`px-2 py-1 rounded text-sm font-semibold ${
                              regulation.compliance === 'Cumplimiento total' ? 'bg-green-100 text-green-800' :
                              regulation.compliance === 'Cumplimiento parcial' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {regulation.compliance}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Requerimientos:</h5>
                          <ul className="space-y-2">
                            {regulation.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start text-sm">
                                <svg className="w-3 h-3 text-emerald-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Cumplimiento</h2>
            <p className="text-lg text-gray-600">
              Metodología sistemática para asegurar adherencia total a normativas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Identificación</h4>
              <p className="text-gray-600 text-sm">
                Mapeo completo de todas las regulaciones aplicables al proyecto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Evaluación</h4>
              <p className="text-gray-600 text-sm">
                Análisis de brechas y evaluación del estado actual de cumplimiento
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementación</h4>
              <p className="text-gray-600 text-sm">
                Desarrollo e implementación de medidas correctivas y preventivas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Monitoreo</h4>
              <p className="text-gray-600 text-sm">
                Seguimiento continuo y auditorías periódicas de cumplimiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Asegurar el Cumplimiento de tu Proyecto?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Nuestro equipo de expertos en cumplimiento puede ayudarte a navegar
            las complejas regulaciones y asegurar la adherencia total a normativas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Consulta de Cumplimiento
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Descargar Certificados
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export const metadata = {
  title: 'Casos de Estudio - Tec-Ionic Durban',
  description: 'Explore nuestros casos de estudio detallados de optimización de procesos LIX/SX/EW en operaciones mineras reales.',
}

export default function CasosEstudioPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Optimización de Planta SX de Cobre - Región de Atacama",
      client: "Minera del Norte SpA",
      industry: "Cobre",
      challenge: "Baja recuperación de cobre y alto consumo de orgánicos",
      solution: "Implementación de housekeeping integral y tratamiento de orgánicos degradados",
      results: [
        "12% incremento en recuperación de cobre",
        "25% reducción en consumo de orgánicos",
        "Ahorro anual de $2.3M USD"
      ],
      timeline: "8 meses",
      image: "/case-study-1.jpg",
      category: "Extracción por Solventes",
      location: "Región de Atacama, Chile",
      details: {
        background: "Una operación de cobre con 15 años de funcionamiento experimentaba declive en la eficiencia de extracción y altos costos operacionales debido al deterioro progresivo de los orgánicos y acumulación de impurezas en el circuito SX.",
        approach: [
          "Análisis completo del inventario orgánico existente",
          "Identificación de contaminantes críticos (cloro, hierro, sílice)",
          "Diseño de protocolo de housekeeping especializado",
          "Implementación de sistema de tratamiento con tierra activada",
          "Capacitación del personal operativo"
        ],
        technologies: [
          "Filtración con tierra de diatomea activada",
          "Sistema de lavado ácido modificado",
          "Análisis espectroscópico en línea",
          "Monitoreo continuo de parámetros críticos"
        ],
        metrics: {
          beforeAfter: {
            recovery: { before: 87.2, after: 98.8 },
            organicConsumption: { before: 2.4, after: 1.8 },
            availability: { before: 82.5, after: 94.2 }
          }
        }
      }
    },
    {
      id: 2,
      title: "Mejora de Eficiencia en Celdas EW - Proyecto Minero del Norte",
      client: "Corporación Minera del Pacífico",
      industry: "Cobre",
      challenge: "Alto consumo energético y calidad inconsistente de cátodos",
      solution: "Optimización de parámetros electroquímicos y desborre preventivo",
      results: [
        "20% reducción en consumo energético",
        "98.5% pureza en cátodos (vs 96.2% anterior)",
        "Reducción 40% en mantenimiento correctivo"
      ],
      timeline: "6 meses",
      image: "/case-study-2.jpg",
      category: "Electroobtención",
      location: "Norte de Chile",
      details: {
        background: "Planta EW con problemas recurrentes de cortocircuitos, alto consumo energético y cátodos con impurezas que afectaban la comercialización del producto final.",
        approach: [
          "Caracterización electroquímica completa del proceso",
          "Implementación de protocolo de desborre predictivo",
          "Optimización de densidad de corriente por celda",
          "Mejora en composición y flujo de electrolito",
          "Instalación de sistema de monitoreo en tiempo real"
        ],
        technologies: [
          "Desborre robotizado con alta frecuencia",
          "Control automático de temperatura",
          "Sistema de purga inteligente de electrolito",
          "Rectificadores de alta eficiencia"
        ]
      }
    },
    {
      id: 3,
      title: "Recuperación de Litio en Salmueras - Salar de Atacama",
      client: "Lithium Extraction Corp",
      industry: "Litio",
      challenge: "Baja concentración de litio y alta relación Mg/Li en salmueras",
      solution: "Implementación de proceso híbrido: evaporación solar + extracción selectiva",
      results: [
        "65% reducción en tiempo de concentración",
        "92% recuperación de litio (vs 78% proceso anterior)",
        "Disminución 50% en huella de agua"
      ],
      timeline: "12 meses",
      image: "/case-study-3.jpg",
      category: "Procesamiento de Salmueras",
      location: "Salar de Atacama, Chile",
      details: {
        background: "Operación de litio enfrentaba desafíos para alcanzar concentraciones comerciales debido a alta presencia de magnesio y condiciones climáticas variables que afectaban la evaporación solar tradicional.",
        approach: [
          "Análisis geoquímico detallado de las salmueras",
          "Diseño de proceso híbrido de concentración",
          "Implementación de tecnología de membranas selectivas",
          "Optimización de piscinas de evaporación",
          "Sistema de control climático predictivo"
        ],
        technologies: [
          "Membranas de ósmosis inversa selectiva",
          "Cristalizadores evaporativos asistidos",
          "Sistema de monitoreo meteorológico avanzado",
          "Tecnología de intercambio iónico especializada"
        ]
      }
    },
    {
      id: 4,
      title: "Modernización de Planta de Zinc - Electroobtención",
      client: "Zinc Technologies SA",
      industry: "Zinc",
      challenge: "Equipos obsoletos y eficiencia energética deficiente",
      solution: "Renovación integral con tecnología de celdas de alta densidad",
      results: [
        "35% mejora en eficiencia energética",
        "99.95% pureza en zinc metálico",
        "Incremento 28% en capacidad de producción"
      ],
      timeline: "10 meses",
      image: "/case-study-4.jpg",
      category: "Electroobtención",
      location: "Valparaíso, Chile",
      details: {
        background: "Planta de electroobtención de zinc con más de 25 años de operación requería modernización para mantenerse competitiva y cumplir nuevos estándares ambientales.",
        approach: [
          "Evaluación integral de equipos existentes",
          "Diseño de layout optimizado",
          "Instalación de celdas de última generación",
          "Implementación de sistemas de control digital",
          "Programa de capacitación técnica avanzada"
        ],
        technologies: [
          "Celdas EW de alta densidad de corriente",
          "Sistema SCADA integrado",
          "Rectificadores de conmutación suave",
          "Automatización robótica para manejo de cátodos"
        ]
      }
    }
  ]

  const filterCategories = ["Todos", "Extracción por Solventes", "Electroobtención", "Procesamiento de Salmueras"]
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Casos de Estudio</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Descubra cómo hemos ayudado a empresas mineras a optimizar sus procesos LIX/SX/EW, 
              logrando mejoras significativas en eficiencia, costos y sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$180M</div>
              <div className="text-gray-600">Ahorros Generados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
              <div className="text-gray-600">Mejora Promedio</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image placeholder */}
                <div className="h-64 bg-gradient-to-r from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <div className="text-emerald-600 text-lg font-medium">Imagen del Proyecto</div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-gray-500 text-sm">{study.industry}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cliente:</h4>
                      <p className="text-gray-600">{study.client}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Desafío:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solución:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Resultados Clave:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Timeline:</span> {study.timeline}
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Optimizar sus Procesos?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Cada operación minera es única. Permítanos desarrollar una solución 
            personalizada que maximice la eficiencia de sus procesos LIX/SX/EW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Solicitar Consulta
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Descargar Portafolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
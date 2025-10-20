export const metadata = {
  title: 'Casos de Estudio - Tec-Ionic Durban',
  description: 'Explore nuestros casos de estudio detallados de optimización de procesos LIX/SX/EW en operaciones mineras reales.',
}

export default function CasosEstudioPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Tratamiento de Fase Orgánica en Planta SX - USD $3.1M Ahorro Anual",
      client: "Planta SX - Operación Minera",
      industry: "Cobre",
      challenge: "Problemas persistentes en calidad físico-química: TIF bajos (20,4-21,10 dinas/cm), Delta TIF elevados (5,5-6,5 dinas/cm), viscosidad >6,3 cP, TSF hasta 444 seg, arrastres de hasta 65% acuoso",
      solution: "Filtrado mediante filtro prensa, aplicación de arcilla tratante (5-10 kg/m³) y centrifugado de mezcla con monitoreo continuo",
      results: [
        "52% reducción en arrastre diario (6 → 2,9 m³)",
        "92,16% eficiencia global alcanzada",
        "Ahorro anual de USD $3.124M",
        "TIF aumentado de 20,4 a 23,7 dinas/cm (+16%)",
        "TSF reducido de 444 a 153 segundos (-66%)"
      ],
      timeline: "18 meses",
      image: "/case-study-organicos.jpg",
      category: "Extracción por Solventes",
      location: "Operación Minera - América Latina",
      link: "/casos-de-estudio/tratamiento-organico-sx",
      details: {
        background: "Durante 2023 y 2024, la planta SX enfrentó problemas persistentes en la calidad físico-química del orgánico con TIF bajos, delta TIF elevados, viscosidad sobre umbral, TSF alto, altos arrastres de acuoso (hasta 65%), descarga máxima de cobre hasta 410 ppm y eficiencia global fluctuante entre 77% y 92%.",
        approach: [
          "Filtrado de fase orgánica mediante filtro prensa",
          "Retiro de sólidos desde el inventario",
          "Aplicación de arcilla tratante con dosis optimizadas (5-10 kg/m³)",
          "Centrifugado de mezcla con arcilla",
          "Monitoreo continuo de TIF, viscosidad, TSF, contenido acuoso y descarga de cobre"
        ],
        technologies: [
          "Filtro prensa para fase orgánica",
          "Tratamiento con arcilla activada",
          "Sistema de centrifugado industrial",
          "Monitoreo de parámetros críticos en tiempo real"
        ],
        metrics: {
          beforeAfter: {
            tif: { before: 20.4, after: 23.7 },
            deltaTIF: { before: 6.5, after: 3 },
            tsf: { before: 444, after: 153 },
            viscosity: { before: 7.5, after: 6.35 },
            efficiency: { before: 77, after: 92.16 },
            cuDischarge: { before: 410, after: 190 },
            dailyDrag: { before: 6, after: 2.9 },
            monthlyCost: { before: 504000, after: 243600 }
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
    },
    {
      id: 5,
      title: "Deshidratación de Lodos Petroleros - Refinería ENAP",
      client: "ENAP Refinería Concón",
      industry: "Petróleo Crudo",
      challenge: "4.5+ millones kg/año de lodos petroleros con 70-92% humedad generan altos costos de disposición y logística. Tres corrientes críticas (planta fenólica, fenoles y T-2402) requieren solución de reducción volumétrica sin inversión en infraestructura permanente.",
      solution: "Validación técnica de laboratorio con tecnología de filtración móvil. Pruebas con filtros equivalentes a sistemas industriales demostraron viabilidad de deshidratación mediante filtro prensa/centrífuga. Se identificaron 5 áreas de aplicación en procesos Delayed Coker, FCC, tratamiento efluentes y separadores API.",
      results: [
        "84.23% reducción volumen lodos planta fenólica (92.59% → 53% humedad)",
        "77.31% reducción volumen lodos planta fenoles (90.02% → 56% humedad)",
        "32.96% reducción volumen lodos T-2402 (70.37% → 55.8% humedad)",
        "Validación técnica sin inversión del cliente",
        "5 oportunidades adicionales identificadas en refinería",
        "Potencial recuperación de agua para reutilización"
      ],
      timeline: "3 meses",
      image: "/case-study-enap.jpg",
      category: "Deshidratación de Lodos",
      location: "Refinería ENAP Concón, Chile",
      link: "/casos-de-estudio/enap-lodos-petroleros",
      details: {
        background: "ENAP Refinería Concón enfrentaba desafíos en la gestión de lodos petroleros generados en múltiples procesos, con alta humedad (70-92%) que incrementaba costos de transporte y disposición final. La refinería requería una solución que permitiera evaluar tecnología de deshidratación sin comprometer recursos de capital antes de validar su efectividad.",
        approach: [
          "Caracterización fisicoquímica de tres corrientes de lodos (planta fenólica, fenoles, T-2402)",
          "Pruebas de laboratorio con filtros equivalentes a escala industrial",
          "Evaluación de tecnología de filtro prensa y centrífuga",
          "Análisis de viabilidad técnica y económica",
          "Identificación de oportunidades adicionales en Delayed Coker, FCC y tratamiento de efluentes"
        ],
        technologies: [
          "Tecnología de filtración móvil bajo vacío",
          "Filtro prensa industrial",
          "Sistemas de centrífuga para lodos petroleros",
          "Caracterización fisicoquímica avanzada",
          "Modelo predictivo de reducción volumétrica"
        ],
        metrics: {
          beforeAfter: {
            volume: { before: "4.5M kg/año", after: "↓35-85%" },
            humidity: { before: "70-92%", after: "53-56%" },
            disposalCost: { before: "Alto", after: "Optimizado" },
            transportTrips: { before: "100%", after: "↓40-85%" }
          }
        }
      }
    }
  ]

  const filterCategories = ["Todos", "Extracción por Solventes", "Electroobtención", "Procesamiento de Salmueras", "Deshidratación de Lodos"]
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Casos de Estudio</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas mineras a optimizar sus procesos LIX/SX/EW, 
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
                    {study.link ? (
                      <a href={study.link} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                        Ver Detalles
                      </a>
                    ) : (
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                        Ver Detalles
                      </button>
                    )}
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
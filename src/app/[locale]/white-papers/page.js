export const metadata = {
  title: 'White Papers - Tec-Ionic Durban',
  description: 'Investigación técnica profunda y análisis especializados en procesos LIX/SX/EW para la industria minera.',
}

export default function WhitePapersPage() {
  const whitePapers = [
    {
      id: 1,
      title: "Optimización de Procesos SX: Metodologías Avanzadas para Maximizar Recuperación",
      abstract: "Este documento presenta metodologías innovadoras para la optimización de procesos de extracción por solventes, incluyendo análisis predictivo, control automático de parámetros y técnicas de housekeeping preventivo que han demostrado incrementos de hasta 25% en recuperación de cobre.",
      authors: ["Dr. Carlos Mendoza", "Ing. María González"],
      date: "Marzo 2024",
      pages: 45,
      downloads: 2847,
      category: "Extracción por Solventes",
      topics: ["Análisis Predictivo", "Control Automático", "Housekeeping", "Recuperación Cobre"],
      keyFindings: [
        "25% incremento promedio en recuperación mediante housekeeping optimizado",
        "Reducción 40% en variabilidad operacional con control predictivo",
        "ROI de 340% en implementaciones integrales",
        "Metodología aplicable a 95% de operaciones SX existentes"
      ],
      level: "Avanzado"
    },
    {
      id: 2,
      title: "Electroobtención de Alta Eficiencia: Tecnologías Emergentes y Mejores Prácticas",
      abstract: "Análisis comprehensivo de las tecnologías emergentes en electroobtención, incluyendo rectificadores de última generación, diseño optimizado de celdas y protocolos de desborre predictivo para maximizar eficiencia energética y calidad de producto.",
      authors: ["Dr. Luis Marchant", "Ing. Roberto Silva"],
      date: "Febrero 2024",
      pages: 38,
      downloads: 1926,
      category: "Electroobtención",
      topics: ["Eficiencia Energética", "Rectificadores", "Diseño Celdas", "Desborre Predictivo"],
      keyFindings: [
        "35% reducción consumo energético con rectificadores avanzados",
        "99.99% pureza alcanzable con protocolos optimizados",
        "Desborre predictivo reduce mantenimiento en 60%",
        "Payback promedio de 18 meses en modernizaciones"
      ],
      level: "Intermedio"
    },
    {
      id: 3,
      title: "Sostenibilidad en Minería: Economía Circular aplicada a Procesos Hidrometalúrgicos",
      abstract: "Investigación sobre la implementación de principios de economía circular en operaciones mineras, con énfasis en reutilización de reactivos, tratamiento de efluentes y minimización de residuos en procesos LIX/SX/EW.",
      authors: ["Dra. Ana Cortés", "MSc. Patricia Vega"],
      date: "Enero 2024",
      pages: 52,
      downloads: 3142,
      category: "Sostenibilidad",
      topics: ["Economía Circular", "Reutilización Reactivos", "Tratamiento Efluentes", "Cero Residuos"],
      keyFindings: [
        "70% reducción en generación de residuos mediante circuitos cerrados",
        "Reutilización de orgánicos extiende vida útil en 300%",
        "$5-12M USD ahorro anual en operaciones medianas",
        "Cumplimiento anticipado normativas ambientales 2025-2030"
      ],
      level: "Avanzado"
    },
    {
      id: 4,
      title: "Digitalización en Minería: IoT y Analytics para Optimización en Tiempo Real",
      abstract: "Estudio sobre la implementación de tecnologías digitales en operaciones mineras, incluyendo sensores IoT, analytics avanzado y sistemas de control automático para optimización continua de procesos.",
      authors: ["Ing. Diego Morales", "MSc. Carmen López"],
      date: "Diciembre 2023",
      pages: 41,
      downloads: 2654,
      category: "Digitalización",
      topics: ["Internet de las Cosas", "Analytics", "Control Automático", "Optimización"],
      keyFindings: [
        "28% mejora en eficiencia operacional con IoT integrado",
        "Reducción 45% en downtime no planificado",
        "Predicción de fallas con 92% de precisión",
        "ROI promedio 280% en implementaciones exitosas"
      ],
      level: "Intermedio"
    },
    {
      id: 5,
      title: "Procesamiento de Litio: Innovaciones en Extracción y Purificación de Salmueras",
      abstract: "Análisis detallado de las últimas innovaciones en procesamiento de litio, incluyendo tecnologías de extracción directa, membranas selectivas y procesos híbridos para maximizar recuperación y pureza.",
      authors: ["Dr. Fernando Soto", "Ing. Valeria Ramírez"],
      date: "Noviembre 2023",
      pages: 47,
      downloads: 4321,
      category: "Procesamiento Litio",
      topics: ["Extracción Directa", "Membranas Selectivas", "Purificación", "Procesos Híbridos"],
      keyFindings: [
        "65% reducción en tiempo de procesamiento con métodos híbridos",
        "92% recuperación de litio vs 78% métodos tradicionales",
        "50% menor huella de agua con tecnologías selectivas",
        "Viabilidad económica en salmueras de baja concentración"
      ],
      level: "Avanzado"
    },
    {
      id: 6,
      title: "Análisis de Riesgo en Operaciones Mineras: Metodologías Cuantitativas Avanzadas",
      abstract: "Desarrollo de metodologías cuantitativas para análisis de riesgo en operaciones mineras, incluyendo modelos probabilísticos, simulación Monte Carlo y frameworks de decisión bajo incertidumbre.",
      authors: ["PhD. Miguel Torres", "MSc. Laura Henríquez"],
      date: "Octubre 2023",
      pages: 34,
      downloads: 1789,
      category: "Gestión de Riesgo",
      topics: ["Análisis Cuantitativo", "Monte Carlo", "Gestión Incertidumbre", "Toma Decisiones"],
      keyFindings: [
        "40% mejora en precisión de proyecciones con modelos probabilísticos",
        "Reducción 25% en riesgos operacionales mediante análisis predictivo",
        "Framework aplicable a proyectos desde $10M USD",
        "Integration con sistemas ERP existentes en 95% casos"
      ],
      level: "Avanzado"
    }
  ]

  const categories = ["Todos", "Extracción por Solventes", "Electroobtención", "Sostenibilidad", "Digitalización", "Procesamiento Litio", "Gestión de Riesgo"]
  const levels = ["Todos", "Básico", "Intermedio", "Avanzado"]

  const getLevelColor = (level) => {
    switch(level) {
      case 'Básico':
        return 'bg-green-100 text-green-800'
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800'
      case 'Avanzado':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">White Papers</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Investigación técnica profunda y análisis especializados desarrollados por 
              nuestros expertos para impulsar la innovación en la industria minera.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-600">White Papers Publicados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Descargas Totales</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-gray-600">Especialistas Autores</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-gray-600">Áreas de Investigación</div>
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {paper.category}
                  </span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getLevelColor(paper.level)}`}>
                    {paper.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {paper.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {paper.abstract}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Hallazgos Clave:</h4>
                  <ul className="space-y-2">
                    {paper.keyFindings.slice(0, 2).map((finding, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-600">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="space-x-4">
                    <span>{paper.date}</span>
                    <span>•</span>
                    <span>{paper.pages} páginas</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    <span>{paper.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Autores:</strong> {paper.authors.join(", ")}
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Descargar PDF
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors">
                      Vista Previa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Investigación</h2>
            <p className="text-lg text-gray-600">
              Nuestros white papers cubren las áreas más críticas de la industria minera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 text-xl font-bold">{category.substring(0, 2)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-600">
                  {whitePapers.filter(p => p.category === category).length} publicaciones disponibles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Acceda a Investigación Exclusiva</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Suscríbase para recibir nuestros últimos white papers y análisis técnicos 
            directamente en su bandeja de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Suscribirse
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Consultoría Personalizada
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
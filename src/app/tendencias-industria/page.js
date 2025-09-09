export const metadata = {
  title: 'Tendencias de la Industria - Tec-Ionic Durban',
  description: 'Análisis y perspectivas sobre las últimas tendencias en tecnología minera, sostenibilidad y optimización de procesos LIX/SX/EW.',
}

export default function TendenciasIndustriaPage() {
  const trends = [
    {
      id: 1,
      category: "Tecnología",
      title: "Digitalización y Automatización en Procesos SX/EW",
      excerpt: "La integración de IoT, IA y automatización está revolucionando la eficiencia operacional en plantas de extracción por solventes y electroobtención.",
      date: "Marzo 2024",
      readTime: "8 min",
      author: "Dr. Carlos Mendoza",
      tags: ["Digitalización", "Automatización", "IoT", "Inteligencia Artificial"],
      impact: "Alto",
      trend: "Creciendo",
      keyInsights: [
        "35% de reducción en costos operacionales mediante automatización",
        "Monitoreo en tiempo real mejora eficiencia en 28%",
        "Predicción de fallas reduce downtime en 45%",
        "ROI promedio de 280% en implementaciones exitosas"
      ],
      forecast: "Se espera que el 80% de las operaciones mineras adopten algún nivel de automatización para 2026.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      category: "Sostenibilidad",
      title: "Economía Circular en Minería: Reutilización de Orgánicos",
      excerpt: "Las nuevas tecnologías de regeneración y tratamiento están extendiendo significativamente la vida útil de los solventes orgánicos en procesos SX.",
      date: "Febrero 2024",
      readTime: "10 min",
      author: "Ing. María González",
      tags: ["Sostenibilidad", "Economía Circular", "Tratamiento Orgánicos"],
      impact: "Alto",
      trend: "Emergente",
      keyInsights: [
        "Extensión de vida útil de orgánicos hasta 300%",
        "50% reducción en generación de residuos",
        "Ahorro de $2-4M USD anuales en plantas medianas",
        "Cumplimiento anticipado de regulaciones ambientales 2025"
      ],
      forecast: "La regeneración de orgánicos se convertirá en estándar de la industria para 2025.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      category: "Mercados",
      title: "Boom del Litio: Nuevos Desafíos en Procesamiento de Salmueras",
      excerpt: "La creciente demanda de litio para baterías está impulsando innovaciones en métodos de extracción más eficientes y ambientalmente responsables.",
      date: "Enero 2024",
      readTime: "12 min",
      author: "Roberto Silva",
      tags: ["Litio", "Salmueras", "Baterías", "Tecnología Verde"],
      impact: "Muy Alto",
      trend: "Explosivo",
      keyInsights: [
        "Demanda de litio crecerá 400% para 2030",
        "Nuevas tecnologías reducen tiempo extracción en 65%",
        "Inversión global en proyectos litio: $50B en 2024",
        "Chile mantiene 60% de reservas mundiales"
      ],
      forecast: "Se proyectan 15 nuevos proyectos de litio en Sudamérica para 2025-2027.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 4,
      category: "Regulación",
      title: "Nuevas Normativas Ambientales en Electroobtención",
      excerpt: "Las regulaciones más estrictas sobre emisiones y consumo energético están impulsando la adopción de tecnologías EW de alta eficiencia.",
      date: "Diciembre 2023",
      readTime: "6 min",
      author: "Dra. Ana Cortés",
      tags: ["Regulación", "Medio Ambiente", "Eficiencia Energética"],
      impact: "Alto",
      trend: "Regulatorio",
      keyInsights: [
        "Nuevos límites de emisión 40% más restrictivos",
        "Eficiencia energética mínima del 85% requerida para 2025",
        "Incentivos fiscales para tecnologías verdes",
        "Multas por incumplimiento hasta $10M USD"
      ],
      forecast: "100% de plantas EW deberán cumplir nuevos estándares antes de 2026.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 5,
      category: "Innovación",
      title: "Membranas Selectivas: Revolución en Separación de Metales",
      excerpt: "Las nuevas membranas de intercambio iónico están permitiendo separaciones más precisas y eficientes en procesos hidrometalúrgicos complejos.",
      date: "Noviembre 2023",
      readTime: "9 min",
      author: "Dr. Luis Marchant",
      tags: ["Membranas", "Separación", "Hidrometalurgia", "Innovación"],
      impact: "Medio",
      trend: "Prometedor",
      keyInsights: [
        "95% pureza en primera pasada vs 78% métodos tradicionales",
        "Reducción 60% en consumo de reactivos",
        "Aplicable a 12+ metales diferentes",
        "Tiempo de payback promedio: 18 meses"
      ],
      forecast: "Adopción comercial masiva esperada para 2025-2026.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 6,
      category: "Geopolítica",
      title: "Reshoring de Cadenas de Suministro Mineras",
      excerpt: "Los eventos geopolíticos están impulsando la diversificación y relocalización de cadenas de suministro, creando oportunidades en Latinoamérica.",
      date: "Octubre 2023",
      readTime: "11 min",
      author: "Econ. Patricia Vega",
      tags: ["Geopolítica", "Cadena Suministro", "Latinoamérica"],
      impact: "Alto",
      trend: "Geopolítico",
      keyInsights: [
        "$100B en inversiones relocalizadas desde 2022",
        "Chile posicionado como hub regional estable",
        "Demanda creciente por expertise local especializado",
        "Nuevos TLCs facilitan exportación de servicios técnicos"
      ],
      forecast: "Latinoamérica podría capturar 25% más del mercado de servicios mineros para 2027.",
      color: "from-red-500 to-red-600"
    }
  ]

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'Creciendo':
        return '📈'
      case 'Emergente':
        return '🌱'
      case 'Explosivo':
        return '🚀'
      case 'Regulatorio':
        return '⚖️'
      case 'Prometedor':
        return '💡'
      case 'Geopolítico':
        return '🌍'
      default:
        return '📊'
    }
  }

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'Muy Alto':
        return 'bg-red-100 text-red-800'
      case 'Alto':
        return 'bg-orange-100 text-orange-800'
      case 'Medio':
        return 'bg-yellow-100 text-yellow-800'
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
            <h1 className="text-5xl font-bold mb-6">Tendencias de la Industria</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Manténgase al día con las últimas tendencias, innovaciones y análisis 
              que están transformando la industria minera y de procesamiento de metales.
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vista General del Mercado 2024</h2>
            <p className="text-lg text-gray-600">Indicadores clave que están moldeando la industria</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">+22%</div>
              <div className="text-emerald-100">Crecimiento Tecnología Minera</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">$85B</div>
              <div className="text-blue-100">Inversión Global en Minería</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">65%</div>
              <div className="text-purple-100">Plantas con Automatización</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-orange-100">Reducción Emisiones Meta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8">
            {trends.map((trend, index) => (
              <div key={trend.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`bg-gradient-to-r ${trend.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          {trend.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImpactColor(trend.impact)}`}>
                          Impacto {trend.impact}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          {getTrendIcon(trend.trend)} {trend.trend}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{trend.title}</h3>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{trend.excerpt}</p>

                      <div className="flex items-center text-sm text-gray-500 mb-6">
                        <span>{trend.date}</span>
                        <span className="mx-2">•</span>
                        <span>{trend.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{trend.author}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {trend.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Insights Panel */}
                    <div className="lg:w-96">
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Insights Clave</h4>
                        <ul className="space-y-3 mb-6">
                          {trend.keyInsights.map((insight, insightIndex) => (
                            <li key={insightIndex} className="flex items-start text-sm">
                              <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              <span className="text-gray-700">{insight}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="border-t border-gray-200 pt-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Proyección</h5>
                          <p className="text-sm text-gray-600">{trend.forecast}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Manténgase Informado</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Suscríbase a nuestro análisis semanal de tendencias y reciba insights 
            exclusivos sobre el futuro de la industria minera.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="email"
              placeholder="Su email profesional"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button
              type="submit"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Suscribirse
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Descargar Reporte Anual
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Consultoría Estratégica
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
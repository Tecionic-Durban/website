import Link from 'next/link'

export const metadata = {
  title: 'Tendencias de la Industria - Tec-Ionic Durban',
  description: 'Análisis y perspectivas sobre las últimas tendencias en tecnología minera, sostenibilidad y optimización de procesos LIX/SX/EW.',
}

export default function TendenciasIndustriaPage() {
  const trends = [
    {
      id: 1,
      slug: "perdidas-solvente-sx",
      category: "Tecnología",
      title: "Pérdidas de Solvente en SX: Un Problema de Millones que Tiene Solución",
      excerpt: "Con más del 60% de nuevos proyectos optando por SX-EW, las pérdidas de orgánico representan costos ocultos de $300-900K USD anuales. Nuevas tecnologías de tratamiento recuperan hasta 98% del solvente degradado.",
      date: "Diciembre 2025",
      readTime: "10 min",
      author: "Equipo Técnico TSF",
      tags: ["SX-EW", "Recuperación Orgánico", "Reducción Costos", "Hidrometalurgia"],
      impact: "Alto",
      trend: "Creciendo",
      keyInsights: [
        "60% de nuevos proyectos prefieren métodos hidrometalúrgicos SX-EW",
        "Pérdidas de 100-200 L/día = $300-900K USD anuales en reposición",
        "Tratamiento especializado recupera 90-98% del orgánico degradado",
        "Reducción del 60% en pérdidas continuas post-tratamiento"
      ],
      forecast: "La optimización de circuitos SX será crítica con Chile proyectando 5.8Mt de cobre para 2025 (+5.8%) y $50B en inversiones antes de 2030.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 2,
      slug: "litio-triangulo-agua",
      category: "Mercados",
      title: "Litio en el Triángulo: El Desafío del Agua y la Oportunidad de la Filtración",
      excerpt: "Argentina podría convertirse en el mayor productor mundial de litio, pero la industria debe resolver un problema crítico: el consumo de 21 millones de litros de agua diarios amenaza la viabilidad de nuevos proyectos.",
      date: "Diciembre 2025",
      readTime: "12 min",
      author: "Equipo Técnico TSF",
      tags: ["Litio", "Gestión de Agua", "Argentina", "Filtración", "Sustentabilidad"],
      impact: "Muy Alto",
      trend: "Explosivo",
      keyInsights: [
        "Demanda de litio sube 24% en 2025, 65% para vehículos eléctricos",
        "Argentina lanza 4 nuevos proyectos (+79% capacidad, 202K ton adicionales)",
        "Consumo de agua: 21 millones de litros/día amenaza permisos",
        "Tribunal de Catamarca suspendió nuevos permisos por agua en 2024"
      ],
      forecast: "Argentina podría superar a Australia y Chile como mayor productor mundial si resuelve el desafío hídrico. La filtración móvil permite cumplir exigencias ambientales sin infraestructura permanente.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 3,
      slug: "politica-minera-2050",
      category: "Regulación",
      title: "Política Minera 2050: Chile Limita Uso de Agua Continental al 10%",
      excerpt: "La nueva regulación chilena exige que la minería no supere el 10% de uso de agua continental para 2025 y 5% para 2040. Las operaciones deben alcanzar 85-90% de recirculación de agua.",
      date: "Noviembre 2025",
      readTime: "8 min",
      author: "Equipo Técnico TSF",
      tags: ["Regulación", "Agua", "Chile", "Desalinización", "Recirculación"],
      impact: "Alto",
      trend: "Regulatorio",
      keyInsights: [
        "Límite de 10% agua continental para minería en 2025",
        "BHP y Antofagasta ya usan 30% agua desalinizada, meta 50% para 2030",
        "Plantas modernas alcanzan 85-90% de recirculación de agua",
        "Capacidad de desalinización crecerá 130% para 2031"
      ],
      forecast: "El consumo de agua del sector cobre crecerá 2.3% anual hasta 23.7 m³/s en 2034. El uso de agua de mar aumentará 230% esta década.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      slug: "boom-cobre-chile-peru",
      category: "Producción",
      title: "Boom del Cobre: Chile y Perú Proyectan Récords de Producción",
      excerpt: "Chile proyecta 5.8Mt de cobre para 2025 (+5.8%), con Escondida subiendo 22% y Codelco apuntando a 1.4Mt. La capacidad de filtración será el cuello de botella durante mantenciones.",
      date: "Noviembre 2025",
      readTime: "9 min",
      author: "Equipo Técnico TSF",
      tags: ["Cobre", "Chile", "Perú", "Producción", "Mantenciones"],
      impact: "Alto",
      trend: "Creciendo",
      keyInsights: [
        "Chile: 5.8Mt cobre proyectado 2025 (+5.8%)",
        "Escondida: +22% producción primer semestre 2025",
        "BHP invierte $10.8B en Chile, $2B solo en Escondida",
        "Codelco-Anglo American JV: 2.7Mt adicionales en 21 años"
      ],
      forecast: "Casi $50B USD se invertirán en proyectos de cobre que iniciarán producción antes de 2030, agregando 3.2 Mt/año a los 7.6 Mt/año actuales.",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      slug: "ia-automatizacion-sx-ew",
      category: "Innovación",
      title: "IA y Automatización Revolucionan Eficiencia en Plantas SX-EW",
      excerpt: "La integración de inteligencia artificial y sensores en tiempo real está optimizando procesos de lixiviación y electroobtención, reduciendo costos operacionales hasta 35%.",
      date: "Octubre 2025",
      readTime: "8 min",
      author: "Dr. Carlos Mendoza",
      tags: ["Digitalización", "Automatización", "IoT", "Inteligencia Artificial"],
      impact: "Alto",
      trend: "Creciendo",
      keyInsights: [
        "35% reducción en costos operacionales mediante automatización",
        "Monitoreo en tiempo real mejora eficiencia en 28%",
        "Predicción de fallas reduce downtime en 45%",
        "Celdas EW modulares permiten escalamiento rápido"
      ],
      forecast: "Se espera que el 80% de las operaciones mineras adopten algún nivel de automatización para 2026.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 6,
      slug: "minerales-criticos-latam",
      category: "Geopolítica",
      title: "Minerales Críticos: Latinoamérica en el Centro de la Competencia Global",
      excerpt: "Con aranceles de EE.UU. a China y restricciones de exportación, los fabricantes occidentales buscan proveedores alternativos. Chile y Perú emergen como opciones estratégicas.",
      date: "Octubre 2025",
      readTime: "11 min",
      author: "Econ. Patricia Vega",
      tags: ["Geopolítica", "Minerales Críticos", "Cadena Suministro", "Latinoamérica"],
      impact: "Alto",
      trend: "Geopolítico",
      keyInsights: [
        "Latinoamérica tiene 40.5% de producción global de cobre",
        "Triángulo del Litio posee 68% de reservas mundiales",
        "China domina cadena de valor del litio, genera presión por diversificar",
        "Aranceles de Trump impulsan búsqueda de proveedores alternativos"
      ],
      forecast: "Latinoamérica podría capturar mayor participación del mercado si demuestra producción sustentable y gestión responsable del agua.",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vista General del Mercado 2025</h2>
            <p className="text-lg text-gray-600">Indicadores clave que están moldeando la industria</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">5.8Mt</div>
              <div className="text-emerald-100">Cobre Chile 2025 (+5.8%)</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">$50B</div>
              <div className="text-blue-100">Inversión Cobre pre-2030</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">+24%</div>
              <div className="text-cyan-100">Demanda Litio 2025</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">10%</div>
              <div className="text-orange-100">Límite Agua Continental</div>
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

                      <Link
                        href={`/tendencias-industria/${trend.slug}`}
                        className={`inline-flex items-center bg-gradient-to-r ${trend.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                      >
                        Leer artículo completo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
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

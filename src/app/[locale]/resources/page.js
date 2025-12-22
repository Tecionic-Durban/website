// src/app/resources/page.js
export const metadata = {
  title: 'Recursos - Tec-Ionic Durban',
  description: 'Recursos técnicos, casos de estudio y documentación especializada en procesos LIX/SX/EW.',
}

export default function ResourcesPage() {
  const resources = [
    {
      category: "Casos de Estudio",
      items: [
        {
          title: "Optimización de Planta SX de Cobre - Región de Atacama",
          description: "Incremento del 12% en recuperación mediante tratamiento especializado de orgánicos.",
          type: "Case Study",
          downloadUrl: "#",
          readTime: "8 min"
        },
        {
          title: "Mejora de Eficiencia en Celdas EW - Proyecto Minero del Norte",
          description: "Reducción del 20% en consumo energético y mejora en calidad del producto final.",
          type: "Case Study",
          downloadUrl: "#",
          readTime: "6 min"
        },
        {
          title: "Implementación de Housekeeping Integral - Planta SX",
          description: "Programa completo de limpieza y mantenimiento que resultó en 15% menos paradas.",
          type: "Case Study",
          downloadUrl: "#",
          readTime: "10 min"
        }
      ]
    },
    {
      category: "Guías Técnicas",
      items: [
        {
          title: "Mejores Prácticas en Tratamiento de Orgánicos",
          description: "Guía completa sobre filtración con tierra activada y optimización de solventes.",
          type: "Technical Guide",
          downloadUrl: "#",
          readTime: "15 min"
        },
        {
          title: "Manual de Desborre de Celdas EW",
          description: "Procedimientos paso a paso para mantenimiento óptimo de sistemas de electroobtención.",
          type: "Technical Guide",
          downloadUrl: "#",
          readTime: "12 min"
        },
        {
          title: "Protocolo de Seguridad en Procesos SX/EW",
          description: "Estándares de seguridad y procedimientos de emergencia para operaciones especializadas.",
          type: "Safety Manual",
          downloadUrl: "#",
          readTime: "20 min"
        }
      ]
    },
    {
      category: "Análisis de Mercado",
      items: [
        {
          title: "Tendencias en Tecnología SX/EW 2024",
          description: "Análisis de las últimas innovaciones y tendencias en extracción por solventes.",
          type: "Market Analysis",
          downloadUrl: "#",
          readTime: "18 min"
        },
        {
          title: "Eficiencias Operacionales en Minería del Cobre",
          description: "Estudio comparativo de eficiencias en diferentes operaciones mineras de Chile.",
          type: "Industry Report",
          downloadUrl: "#",
          readTime: "25 min"
        }
      ]
    }
  ]

  const webinars = [
    {
      title: "Optimización de Procesos SX: Estrategias Avanzadas",
      date: "15 Marzo 2024",
      time: "14:00 - 15:30 CLT",
      speaker: "Dr. Carlos Mendoza, Director Técnico",
      description: "Webinar sobre las últimas técnicas de optimización en plantas de extracción por solventes.",
      status: "upcoming"
    },
    {
      title: "Mantenimiento Predictivo en Sistemas EW",
      date: "28 Febrero 2024",
      time: "11:00 - 12:00 CLT",
      speaker: "Ing. María González, Especialista EW",
      description: "Implementación de tecnologías predictivas para mantenimiento de celdas de electroobtención.",
      status: "completed"
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Centro de Recursos</h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Acceda a nuestra biblioteca de recursos técnicos, casos de estudio y documentación 
            especializada para optimizar sus procesos mineros.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                <div className="ml-6 flex-1 h-px bg-emerald-200"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-gray-500 text-sm">{item.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {item.description}
                      </p>

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
          ))}
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Webinars y Eventos</h2>
            <p className="text-lg text-gray-600">
              Únase a nuestros webinars técnicos y manténgase actualizado con las últimas tendencias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    webinar.status === 'upcoming' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {webinar.status === 'upcoming' ? 'Próximo' : 'Completado'}
                  </span>
                  <span className="text-emerald-700 font-semibold">{webinar.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {webinar.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {webinar.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Horario:</span> {webinar.time}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Expositor:</span> {webinar.speaker}
                  </p>
                </div>

                <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  webinar.status === 'upcoming'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}>
                  {webinar.status === 'upcoming' ? 'Registrarse' : 'Ver Grabación'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Manténgase Actualizado</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Suscríbase a nuestro boletín técnico para recibir los últimos recursos, 
            casos de estudio y análisis de la industria.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
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

          <p className="text-sm text-emerald-200 mt-4">
            Frecuencia mensual. Sin spam. Cancele cuando desee.
          </p>
        </div>
      </section>
      </div>
    </>
  )
}
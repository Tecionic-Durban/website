// src/components/Services.js
import { Beaker, Waves, Factory, Zap, Microscope, RefreshCw, Droplets } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Filtración y Deshidratación de Borras y Sólidos",
      description: "Filtración móvil de borras y sólidos en refinerías y plantas SX. Capacidad hasta 70 ton/día de torta seca mediante filtros prensa de alta capacidad.",
      icon: Beaker,
      features: ["Hasta 70 ton/día torta seca", "Filtros prensa móviles", "Equipos ex.proof"]
    },
    {
      title: "Tratamiento y Recuperación de Orgánico SX",
      description: "Tratamiento especializado para recuperación de orgánico en procesos de extracción por solventes. Reduce pérdidas y optimiza la eficiencia de planta.",
      icon: RefreshCw,
      features: ["Reducción pérdidas orgánico", "Optimización eficiencia", "Estabilidad operacional"]
    },
    {
      title: "Deshidratación de Concentrados",
      description: "Deshidratación de concentrados de cobre mediante filtros prensa de alta capacidad. Procesos optimizados para máxima recuperación de valores.",
      icon: Droplets,
      features: ["Concentrados de cobre", "Filtros prensa alta capacidad", "Máxima recuperación"]
    },
    {
      title: "Tratamiento de Sólidos Finos",
      description: "Procesamiento de sólidos finos provenientes de clarificadores. Capacidad hasta 14 ton/día con centrífugas especializadas.",
      icon: Microscope,
      features: ["Hasta 14 ton/día sólidos finos", "Centrífugas especializadas", "Sistemas auxiliares"]
    },
    {
      title: "Limpieza de Celdas EW",
      description: "Limpieza especializada de celdas de electroobtención para optimizar la producción de cátodos de cobre y mantener eficiencias operacionales.",
      icon: Zap,
      features: ["Celdas electroobtención", "Optimización cátodos", "Mantenimiento especializado"]
    },
    {
      title: "Remoción de Sólidos de Aguas Clarificadas",
      description: "Optimización de la recirculación de agua de proceso mediante remoción eficiente de sólidos. Hasta 120 m³/día de agua clarificada.",
      icon: Waves,
      features: ["Hasta 120 m³/día agua", "Recirculación optimizada", "Bombas especiales pulpas"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Especializados
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de filtración, deshidratación de sólidos y separación sólido-líquido 
            con equipos móviles escalables. Más de dos décadas de experiencia en faenas 
            mineras respaldando nuestras soluciones.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:scale-105 group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl">
                <div className="w-full h-full steel-gradient rounded-xl"></div>
              </div>
              
              {/* Floating balls on hover - matching industry page layout */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-float-up-1"></div>
                <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-float-up-2"></div>
                <div className="absolute top-6 right-12 w-1 h-1 bg-emerald-600 rounded-full animate-float-up-3"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 text-emerald-500 mr-2 micro-bounce">✓</div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Soluciones Móviles que Aportan Valor y Sostenibilidad
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Diagnóstico inicial, montaje rápido mediante plataformas móviles y operación 
            continua con entrega de KPIs diarios. Flexibilidad operativa sin instalaciones definitivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors" suppressHydrationWarning>
              Solicitar Consulta
            </button>
            <button className="border-2 border-emerald-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-300 hover:text-emerald-900 transition-colors" suppressHydrationWarning>
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
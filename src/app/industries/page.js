// src/app/industries/page.js
export const metadata = {
  title: 'Industrias - Tec-Ionic Durban',
  description: 'Soluciones especializadas para diferentes sectores de la industria minera y metalúrgica.',
}

export default function IndustriesPage() {
  const industries = [
    {
      id: 1,
      title: "Minería del Cobre",
      description: "Soluciones integrales para plantas de lixiviación, SX y EW de cobre, optimizando cada etapa del proceso.",
      icon: "🟫",
      image: "/industries/copper.jpg",
      challenges: [
        "Optimización de recuperación de cobre",
        "Gestión eficiente de orgánicos",
        "Control de impurezas en el proceso",
        "Mantenimiento de celdas EW"
      ],
      solutions: [
        "Tratamiento especializado de orgánicos",
        "Desborre de celdas EW optimizado",
        "Housekeeping integral de plantas SX",
        "Recuperación máxima de solventes"
      ],
      caseStudy: {
        title: "Planta de Cobre - Región de Atacama",
        result: "Incremento del 12% en la recuperación de cobre y reducción del 20% en costos de mantención.",
        details: "Implementación de programa integral de tratamiento de orgánicos y desborre de celdas."
      }
    },
    {
      id: 2,
      title: "Procesamiento de Oro",
      description: "Servicios especializados para operaciones de oro que utilizan tecnologías de lixiviación y extracción por solventes.",
      icon: "🥇",
      image: "/industries/gold.jpg",
      challenges: [
        "Pureza del producto final",
        "Gestión de soluciones cianuradas",
        "Optimización de circuitos de lixiviación",
        "Tratamiento de residuos especiales"
      ],
      solutions: [
        "Filtración avanzada de soluciones",
        "Tratamiento seguro de residuos",
        "Optimización de procesos de extracción",
        "Sistemas de purificación especializados"
      ],
      caseStudy: {
        title: "Operación Aurífera - Norte de Chile",
        result: "Mejora del 8% en la pureza del oro y reducción del 15% en pérdidas de reactivos.",
        details: "Programa de optimización de circuitos de lixiviación y tratamiento de soluciones."
      }
    },
    {
      id: 3,
      title: "Litio y Sales",
      description: "Tecnologías avanzadas para la extracción y purificación de litio y otras sales de valor comercial.",
      icon: "🔋",
      image: "/industries/lithium.jpg",
      challenges: [
        "Purificación de salmueras",
        "Concentración selectiva de litio",
        "Gestión de impurezas múltiples",
        "Optimización de procesos de cristalización"
      ],
      solutions: [
        "Sistemas de filtración selectiva",
        "Procesos de purificación avanzada",
        "Tratamiento de salmueras complejas",
        "Optimización de circuitos de concentración"
      ],
      caseStudy: {
        title: "Proyecto de Litio - Salar de Atacama",
        result: "Incremento del 18% en la pureza del carbonato de litio producido.",
        details: "Implementación de tecnologías de purificación y filtración avanzada."
      }
    },
    {
      id: 4,
      title: "Tierras Raras y Elementos Estratégicos",
      description: "Soluciones especializadas para la extracción y purificación de elementos de tierras raras y otros metales estratégicos.",
      icon: "🌍",
      image: "/industries/rare-earth.jpg",
      challenges: [
        "Separación selectiva de elementos",
        "Manejo de matrices complejas",
        "Alta pureza requerida",
        "Procesos ambientalmente sensibles"
      ],
      solutions: [
        "Tecnologías de separación avanzada",
        "Sistemas de purificación de alta precisión",
        "Procesos ambientalmente responsables",
        "Control de calidad especializado"
      ],
      caseStudy: {
        title: "Proyecto de Tierras Raras - Región de Antofagasta",
        result: "Logro de pureza >99.5% en productos finales con 25% menos residuos.",
        details: "Desarrollo de procesos de separación selectiva y purificación avanzada."
      }
    },
    {
      id: 5,
      title: "Zinc y Metales Base",
      description: "Servicios integrales para plantas de zinc y otros metales base que utilizan tecnologías hidrometalúrgicas.",
      icon: "⚪",
      image: "/industries/zinc.jpg",
      challenges: [
        "Control de impurezas férreas",
        "Optimización de electroobtención",
        "Gestión de residuos de lixiviación",
        "Eficiencia energética en EW"
      ],
      solutions: [
        "Sistemas de purificación de soluciones",
        "Optimización de celdas EW",
        "Tratamiento especializado de residuos",
        "Mejora de eficiencia energética"
      ],
      caseStudy: {
        title: "Refinería de Zinc - Región de Valparaíso",
        result: "Reducción del 22% en consumo energético y mejora del 10% en calidad del zinc.",
        details: "Optimización integral de procesos de purificación y electroobtención."
      }
    },
    {
      id: 6,
      title: "Plantas de Reciclaje Metalúrgico",
      description: "Soluciones especializadas para el reciclaje de metales y recuperación de valores desde residuos industriales.",
      icon: "♻️",
      image: "/industries/recycling.jpg",
      challenges: [
        "Matrices complejas y variables",
        "Recuperación selectiva de metales",
        "Cumplimiento ambiental estricto",
        "Viabilidad económica del proceso"
      ],
      solutions: [
        "Procesos adaptativos de tratamiento",
        "Tecnologías de recuperación selectiva",
        "Gestión ambiental integral",
        "Optimización económica continua"
      ],
      caseStudy: {
        title: "Planta de Reciclaje - Región Metropolitana",
        result: "Incremento del 35% en recuperación de metales valiosos desde residuos electrónicos.",
        details: "Desarrollo de procesos especializados para matrices complejas de e-waste."
      }
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Industrias que Servimos</h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Soluciones especializadas adaptadas a las necesidades específicas de cada sector 
            de la industria minera y metalúrgica, con más de 18 años de experiencia comprobada.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sectores de Especialización</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestros servicios están diseñados para atender los desafíos específicos 
              de cada industria, proporcionando soluciones técnicas de vanguardia.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl">
                      {industry.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{industry.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Challenges */}
                    <div className="bg-red-50 rounded-lg p-6">
                      <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                        🚨 Desafíos Típicos
                      </h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-red-700 flex items-start">
                            <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-emerald-50 rounded-lg p-6">
                      <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                        ✅ Nuestras Soluciones
                      </h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-emerald-700 flex items-start">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-gray-900 text-white rounded-lg p-6">
                    <h4 className="font-semibold mb-2 flex items-center">
                      📊 Caso de Éxito
                    </h4>
                    <h5 className="text-emerald-300 font-medium mb-2">{industry.caseStudy.title}</h5>
                    <p className="text-gray-300 text-sm mb-2">{industry.caseStudy.result}</p>
                    <p className="text-gray-400 text-xs">{industry.caseStudy.details}</p>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-10"></div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center text-6xl">
                    {industry.icon}
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
          <h2 className="text-3xl font-bold mb-4">
            ¿Su industria no está listada?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Nuestros especialistas pueden desarrollar soluciones personalizadas 
            para cualquier proceso que involucre LIX/SX/EW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Consulta Especializada
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Ver Todos los Casos
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
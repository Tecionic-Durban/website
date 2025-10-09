export const metadata = {
  title: 'Historias de Clientes - Tec-Ionic Durban',
  description: 'Testimonios reales de nuestros clientes y sus experiencias trabajando con Tec-Ionic Durban en proyectos de optimización minera.',
}

export default function HistoriasClientesPage() {
  const clientStories = [
    {
      id: 1,
      client: "ENAP",
      clientLogo: "/client-enap.png",
      industry: "Petróleo y Refinación",
      project: "Optimización de Procesos de Refinación",
      testimonial: "Trabajar con Tec-Ionic Durban fue transformador para nuestra operación. Su expertise técnico y enfoque metodológico nos permitió reducir costos operacionales en un 18% mientras mejoramos la eficiencia general al 95%. El equipo demostró un profundo conocimiento de los procesos de refinación y una capacidad excepcional para implementar soluciones innovadoras.",
      spokesperson: "Carlos Mendoza",
      position: "Director de Operaciones",
      location: "Concón, Chile",
      duration: "8 meses",
      keyResults: [
        "18% reducción en costos operacionales",
        "95% eficiencia operacional",
        "Cero incidentes de seguridad durante implementación",
        "ROI del 340% en primer año"
      ],
      background: "ENAP necesitaba modernizar sus procesos de refinación para mantenerse competitiva en un mercado global cada vez más desafiante.",
      challenge: "Los procesos de refinación presentaban ineficiencias que impactaban tanto la rentabilidad como la capacidad de cumplir con nuevos estándares ambientales.",
      approach: "Tec-Ionic Durban implementó una metodología integral que incluyó análisis de procesos, optimización de equipos y capacitación del personal.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      client: "Minera Escondida",
      clientLogo: "/client-escondida.png",
      industry: "Cobre",
      project: "Optimización de Circuito SX/EW",
      testimonial: "La experiencia con Tec-Ionic Durban superó nuestras expectativas. No solo logramos los objetivos técnicos planteados, sino que el equipo aportó ideas innovadoras que nos permitieron alcanzar un 22% de mejora adicional en recuperación de cobre. Su profesionalismo y dedicación fueron evidentes en cada etapa del proyecto.",
      spokesperson: "María González",
      position: "Gerente de Procesos",
      location: "Región de Antofagasta",
      duration: "12 meses",
      keyResults: [
        "22% mejora en recuperación de cobre",
        "30% reducción en consumo de reactivos",
        "Disponibilidad de planta >96%",
        "Payback en 14 meses"
      ],
      background: "Como una de las minas de cobre más grandes del mundo, Escondida buscaba optimizar continuamente sus operaciones para mantener su liderazgo.",
      challenge: "El circuito SX/EW presentaba oportunidades de mejora en recuperación y eficiencia energética.",
      approach: "Implementación de housekeeping integral, optimización de parámetros operacionales y modernización de sistemas de control.",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      client: "SQM",
      clientLogo: "/client-sqm.png",
      industry: "Litio",
      project: "Mejora en Procesamiento de Salmueras",
      testimonial: "Tec-Ionic Durban demostró un entendimiento excepcional de nuestros procesos únicos de extracción de litio. Su solución innovadora nos permitió incrementar la recuperación en un 28% mientras reducíamos significativamente el tiempo de procesamiento. La colaboración fue ejemplar y los resultados hablan por sí solos.",
      spokesperson: "Roberto Silva",
      position: "Director Técnico",
      location: "Salar de Atacama",
      duration: "10 meses",
      keyResults: [
        "28% incremento en recuperación de litio",
        "45% reducción en tiempo de procesamiento",
        "Menor impacto ambiental",
        "Capacidad adicional de 15,000 t/año LCE"
      ],
      background: "SQM, líder mundial en litio, buscaba optimizar sus procesos para mantener su posición competitiva en un mercado en expansión.",
      challenge: "Los métodos tradicionales de concentración de salmueras requerían largos períodos de evaporación que limitaban la capacidad de producción.",
      approach: "Desarrollo de proceso híbrido combinando evaporación solar optimizada con tecnologías de concentración acelerada.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 4,
      client: "Teck Resources",
      clientLogo: "/client-teck.png",
      industry: "Zinc",
      project: "Modernización de Electroobtención",
      testimonial: "El trabajo realizado por Tec-Ionic Durban en nuestra planta de electroobtención fue excepcional. Lograron modernizar completamente nuestras operaciones mientras manteníamos la producción. Los resultados incluyeron un 32% de mejora en eficiencia energética y una calidad de producto que superó nuestros estándares más exigentes.",
      spokesperson: "Jennifer Walsh",
      position: "Plant Manager",
      location: "Trail, Canadá",
      duration: "6 meses",
      keyResults: [
        "32% mejora en eficiencia energética",
        "99.99% pureza en zinc metálico",
        "Zero downtime durante implementación",
        "Certificación ISO 14001 conseguida"
      ],
      background: "Teck Resources necesitaba modernizar su histórica planta de Trail para cumplir con nuevos estándares de eficiencia y sostenibilidad.",
      challenge: "Equipos antiguos limitaban la eficiencia energética y la capacidad de cumplir con regulaciones ambientales más estrictas.",
      approach: "Implementación gradual de tecnología de punta sin interrumpir la producción, incluyendo nuevos sistemas de control y equipos de alta eficiencia.",
      color: "from-slate-500 to-slate-600"
    },
    {
      id: 5,
      client: "Antofagasta Minerals",
      clientLogo: "/client-antofagasta.png",
      industry: "Cobre",
      project: "Optimización Integral de Procesos",
      testimonial: "Tec-Ionic Durban nos ayudó a transformar nuestra operación. Su enfoque holístico y experiencia técnica profunda resultaron en mejoras que van más allá de lo que esperábamos. No solo optimizaron nuestros procesos técnicos, sino que también fortalecieron las capacidades de nuestro equipo humano.",
      spokesperson: "Luis Marchant",
      position: "VP Operaciones",
      location: "Región de Antofagasta",
      duration: "15 meses",
      keyResults: [
        "25% incremento en producción",
        "19% reducción costos operacionales",
        "Mejora en indicadores de sustentabilidad",
        "Personal certificado internacionalmente"
      ],
      background: "Antofagasta Minerals buscaba un socio estratégico para optimizar integralmente sus operaciones en múltiples sitios.",
      challenge: "Necesidad de estandarizar procesos y mejorar eficiencias across diferentes operaciones con características únicas.",
      approach: "Desarrollo de metodología estándar adaptable, implementación por fases y programa robusto de transferencia de conocimientos.",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Historias de Clientes</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Descubre las experiencias de nuestros clientes y cómo hemos contribuido al éxito
              de sus operaciones mineras a través de soluciones innovadoras y especializadas.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Empresas que Confían en Nosotros</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center justify-center">
            {clientStories.slice(0, 5).map((story) => (
              <div key={story.id} className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold text-lg">{story.client.substring(0, 3)}</span>
                </div>
                <div className="text-sm font-medium text-gray-700">{story.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {clientStories.map((story, index) => (
              <div key={story.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold text-lg">{story.client.substring(0, 3)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{story.client}</h3>
                        <p className="text-gray-600">{story.industry}</p>
                      </div>
                    </div>

                    <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                      &quot;{story.testimonial}&quot;
                    </blockquote>

                    <div className="border-t pt-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-emerald-700 font-bold">
                            {story.spokesperson.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{story.spokesperson}</div>
                          <div className="text-gray-600 text-sm">{story.position}</div>
                          <div className="text-gray-500 text-sm">{story.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {story.project}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      Resultados Excepcionales en {story.duration}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      {story.keyResults.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Contexto:</h4>
                        <p className="text-gray-600 text-sm">{story.background}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Desafío:</h4>
                        <p className="text-gray-600 text-sm">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Nuestra Solución:</h4>
                        <p className="text-gray-600 text-sm">{story.approach}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impacto Comprobado</h2>
            <p className="text-lg text-gray-600">
              Nuestros resultados hablan por sí solos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
              <div className="text-gray-700 font-medium">Mejora Promedio en Eficiencia</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">$200M</div>
              <div className="text-gray-700 font-medium">Ahorros Acumulados</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Proyectos Exitosos</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-700 font-medium">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Listo para ser Nuestra Próxima Historia de Éxito?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Únete a las empresas líderes que han transformado sus operaciones con Tec-Ionic Durban.
            Permítenos desarrollar una solución personalizada para tus desafíos únicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Iniciar Conversación
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Ver Más Casos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
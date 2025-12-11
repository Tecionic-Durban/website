// src/app/about/page.js
import Image from 'next/image'
import { Flash, Security, Renew, Connect, Collaborate, Time, CertificateCheck, CheckmarkFilled, Growth, Building, Partnership, Chemistry, Earth, OilPump, Calendar } from '@carbon/icons-react'

export default function AboutPage() {
  // Static metrics
  const metrics = {
    yearsExperience: "23+",
    clientsSatisfied: "100%",
    projectsCompleted: "120+",
    efficiencyGain: "22%"
  }

  const milestones = [
    {
      year: "2002",
      title: "Fundación de la Empresa",
      description: "Inicio de operaciones como empresa especializada en servicios para la industria minera.",
      metric: "Fundación",
      icon: "building",
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2003",
      title: "Primer Contacto de Desborre de Celdas EW",
      description: "Exitoso primer contacto de desborre de celdas EW, estableciendo nuestra especialización en electroobtención.",
      metric: "1er Contacto EW",
      icon: "handshake",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      year: "2005",
      title: "Expansión de Servicios SX",
      description: "Expansión a servicios de filtrado de borra y tratamiento de orgánico en procesos de SX.",
      metric: "Servicios SX",
      icon: "beaker",
      color: "from-orange-500 to-orange-600"
    },
    {
      year: "2010",
      title: "Liderazgo en Mercado Chileno",
      description: "Se alcanza presencia en más del 50% del mercado minero en Chile.",
      metric: ">50% Mercado",
      icon: "trending-up",
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2020",
      title: "Expansión a Li y K",
      description: "Diversificación hacia el mercado del litio y potasio, ampliando nuestro portafolio de servicios.",
      metric: "Li & K",
      icon: "zap",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      year: "2022",
      title: "Expansión a Perú",
      description: "Comienza expansión al mercado minero en Perú mientras se aumenta la presencia en mercado chileno por sobre 70% de la minería de cobre.",
      metric: ">70% Cu Chile",
      icon: "globe",
      color: "from-green-500 to-green-600"
    },
    {
      year: "2025",
      title: "Mercado de Refinación de Petróleo",
      description: "Expansión hacia el mercado de refinación de petróleo, consolidando nuestra presencia en Latinoamérica.",
      metric: "Petróleo",
      icon: "fuel",
      color: "from-slate-600 to-slate-700"
    }
  ]

  const values = [
    {
      icon: Flash,
      title: "Innovación Aplicada",
      description: "Desarrollamos e implementamos soluciones tecnológicas que generen valor real para nuestros clientes.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Security,
      title: "Seguridad Operacional",
      description: "Priorizamos la seguridad en todas nuestras operaciones, protegiendo a nuestro equipo y clientes.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Renew,
      title: "Sostenibilidad Ambiental",
      description: "Comprometidos con soluciones que contribuyan al cuidado del medio ambiente y desarrollo sostenible.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Connect,
      title: "Flexibilidad Operativa",
      description: "Adaptamos nuestros servicios móviles a las necesidades específicas de cada operación.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Collaborate,
      title: "Compromiso con Clientes y Colaboradores",
      description: "Construimos relaciones duraderas basadas en confianza, transparencia y resultados.",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  const stats = [
    { number: metrics.yearsExperience, label: "Años de Experiencia", description: "En el mercado minero", icon: Time },
    { number: metrics.clientsSatisfied, label: "Satisfacción Cliente", description: "Índice de satisfacción", icon: CertificateCheck },
    { number: metrics.projectsCompleted, label: "Proyectos Exitosos", description: "Exitosamente entregados", icon: CheckmarkFilled },
    { number: metrics.efficiencyGain, label: "Mejora Promedio", description: "En eficiencia operacional", icon: Growth }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Technical/Blueprint Style */}
        <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
          {/* Technical grid background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Fine grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #059669 1px, transparent 1px),
                  linear-gradient(to bottom, #059669 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            ></div>
            {/* Larger grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #059669 2px, transparent 2px),
                  linear-gradient(to bottom, #059669 2px, transparent 2px)
                `,
                backgroundSize: '200px 200px'
              }}
            ></div>
            {/* Corner accent - top left */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-emerald-500/20"></div>
            {/* Corner accent - bottom right */}
            <div className="absolute bottom-0 right-0 w-48 h-48 border-r-4 border-b-4 border-emerald-500/10"></div>
          </div>

          {/* Highlighted grid paths - traces along existing 40px grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Path 1 - Top middle, zigzag down-right */}
            <div className="absolute top-0 left-[400px] w-[1px] h-[80px] bg-emerald-500/45"></div>
            <div className="absolute top-[80px] left-[400px] w-[120px] h-[1px] bg-emerald-500/45"></div>
            <div className="absolute top-[80px] left-[520px] w-[1px] h-[120px] bg-emerald-500/40"></div>
            <div className="absolute top-[200px] left-[520px] w-[80px] h-[1px] bg-emerald-500/35"></div>

            {/* Path 2 - Right side, long vertical with horizontal branch */}
            <div className="absolute top-[40px] right-[120px] w-[1px] h-[280px] bg-emerald-500/40"></div>
            <div className="absolute top-[160px] right-[120px] w-[120px] h-[1px] bg-emerald-500/40"></div>

            {/* Path 3 - Right bottom, staircase pattern */}
            <div className="absolute bottom-[200px] right-0 w-[80px] h-[1px] bg-emerald-500/50"></div>
            <div className="absolute bottom-[200px] right-[80px] w-[1px] h-[80px] bg-emerald-500/45"></div>
            <div className="absolute bottom-[120px] right-[80px] w-[160px] h-[1px] bg-emerald-500/45"></div>
            <div className="absolute bottom-[120px] right-[240px] w-[1px] h-[120px] bg-emerald-500/40"></div>

            {/* Path 4 - Top right corner, short L */}
            <div className="absolute top-0 right-[280px] w-[1px] h-[120px] bg-emerald-500/35"></div>
            <div className="absolute top-[120px] right-[280px] w-[160px] h-[1px] bg-emerald-500/30"></div>

            {/* Path 5 - Far right edge, vertical drop */}
            <div className="absolute top-[200px] right-[40px] w-[1px] h-[200px] bg-emerald-500/35"></div>
            <div className="absolute top-[400px] right-[40px] w-[80px] h-[1px] bg-emerald-500/30"></div>

            {/* Path 6 - Bottom right corner trace */}
            <div className="absolute bottom-[40px] right-[320px] w-[200px] h-[1px] bg-emerald-500/30"></div>
            <div className="absolute bottom-[40px] right-[320px] w-[1px] h-[80px] bg-emerald-500/25"></div>

            {/* Path 7 - Top edge, horizontal with short drop */}
            <div className="absolute top-[40px] right-[400px] w-[160px] h-[1px] bg-emerald-500/30"></div>
            <div className="absolute top-[40px] right-[400px] w-[1px] h-[80px] bg-emerald-500/25"></div>

            {/* Path 8 - Bottom left, horizontal going right */}
            <div className="absolute bottom-[40px] left-0 w-[280px] h-[1px] bg-emerald-500/35"></div>
            <div className="absolute bottom-[40px] left-[280px] w-[1px] h-[80px] bg-emerald-500/30"></div>

          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="text-gray-900">Acerca de</span>
                  <span className="block text-emerald-600">Tec-Ionic Durban</span>
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  Con más de 23 años de experiencia, somos la empresa líder en servicios
                  especializados de filtrado y tratamiento de borra para procesos de
                  lixiviación, extracción por solventes y electroobtención.
                </p>

                {/* Metrics display - Latam style */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-gray-900">{metrics.projectsCompleted}</div>
                    <div className="text-gray-500 text-sm mt-1">Proyectos exitosos</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-gray-900">{metrics.efficiencyGain}</div>
                    <div className="text-gray-500 text-sm mt-1">Mejora promedio</div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-gray-200/80 ring-1 ring-gray-200">
                  <Image
                    src="/filtro_prensa_1200_drone_view.png"
                    alt="TSF Industrial Equipment"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision with Phase 2: Micro-animations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer">
                <Flash className="w-12 h-12 text-emerald-600 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Asegurar la continuidad y eficiencia de las operaciones de nuestros clientes
                  mediante soluciones móviles de filtración y deshidratado que aporten valor,
                  sostenibilidad y seguridad.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 industrial-shimmer">
                <Growth className="w-12 h-12 text-emerald-600 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Convertirse en el socio estratégico líder en Latinoamérica en tecnologías
                  móviles de separación sólido-líquido, ampliando presencia en cobre, zinc,
                  litio, potasio y petróleo crudo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics with Phase 1: Real-time updates */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 steel-gradient">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Resultados que Hablan</h2>
              <p className="text-xl text-emerald-100">
                Números que reflejan nuestro compromiso y experiencia
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 micro-bounce">{stat.number}</div>
                  <div className="text-xl font-semibold mb-1">{stat.label}</div>
                  <div className="text-emerald-200 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values with Phase 2: Gradient backgrounds */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  {/* Circuit node container */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    {/* Connecting lines - circuit traces */}
                    <div className="absolute top-1/2 left-0 w-3 h-[2px] bg-emerald-300 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-3 h-[2px] bg-emerald-300 -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 h-3 w-[2px] bg-emerald-300 -translate-x-1/2"></div>
                    <div className="absolute left-1/2 bottom-0 h-3 w-[2px] bg-emerald-300 -translate-x-1/2"></div>
                    {/* Corner traces */}
                    <div className="absolute top-1 left-1 w-2 h-[2px] bg-emerald-200 rotate-45 origin-left"></div>
                    <div className="absolute top-1 right-1 w-2 h-[2px] bg-emerald-200 -rotate-45 origin-right"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-[2px] bg-emerald-200 -rotate-45 origin-left"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-[2px] bg-emerald-200 rotate-45 origin-right"></div>
                    {/* Central node */}
                    <div className="absolute inset-3 bg-white rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-sm text-emerald-600">
                      <value.icon size={24} />
                    </div>
                    {/* Node dots at line ends */}
                    <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2"></div>
                    <div className="absolute left-1/2 bottom-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline with Enhanced Professional Design */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Más de dos décadas construyendo liderazgo en servicios especializados para la industria minera en Latinoamérica
              </p>
            </div>

            <div className="relative">
              {/* Enhanced timeline line with gradient */}
              <div className="absolute left-12 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600 rounded-full shadow-sm"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => {
                  const IconComponent = {
                    building: Building,
                    handshake: Partnership,
                    beaker: Chemistry,
                    'trending-up': Growth,
                    zap: Flash,
                    globe: Earth,
                    fuel: OilPump
                  }[milestone.icon] || Calendar;

                  return (
                    <div key={index} className="relative flex items-start group">
                      {/* Enhanced timeline node with icon */}
                      <div className="relative z-10">
                        <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-300 text-white`}>
                          <IconComponent size={20} />
                        </div>
                      </div>

                      {/* Timeline content card */}
                      <div className="ml-6 md:ml-8 flex-1">
                        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-emerald-200">
                          {/* Header with year and metric */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div className="flex items-center mb-2 sm:mb-0">
                              <div className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full mr-3`}></div>
                              <span className="text-2xl md:text-3xl font-bold text-gray-800">{milestone.year}</span>
                            </div>
                            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full text-sm font-semibold shadow-sm`}>
                              {milestone.metric}
                            </div>
                          </div>

                          {/* Title and description */}
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {milestone.description}
                          </p>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Timeline completion indicator */}
              <div className="flex justify-center mt-12">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-semibold">Consolidando liderazgo en Latinoamérica</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA with Phase 1: Three-ball animation */}
        <section className="py-16 bg-gray-900 relative overflow-hidden">
          {/* Phase 2: Industrial pattern overlay */}
          <div className="absolute inset-0 opacity-5 industrial-pattern"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
            <h2 className="text-4xl font-bold mb-4">¿Listo para Trabajar Juntos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo nuestra experiencia puede optimizar tus operaciones mineras.
            </p>
            
            {/* Phase 1: Three-ball decoration */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 precision-click">
                Contactar Ahora
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Ver Servicios
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
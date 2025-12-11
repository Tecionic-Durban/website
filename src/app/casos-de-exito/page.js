import Link from 'next/link'
import { ArrowRight, Factory, Droplets, FlaskConical, Zap, Shield, Clock } from 'lucide-react'

export const metadata = {
  title: 'Casos de Éxito - Tecionic',
  description: 'Resultados comprobados en operaciones mineras y petroleras. Explore nuestros casos de éxito con métricas reales de ahorro y eficiencia.',
}

export default function CasosExitoPage() {
  const caseStudies = [
    {
      id: 1,
      slug: "tratamiento-organico-sx",
      industry: "Cobre",
      industryIcon: Factory,
      headlineMetric: "$3.1M USD",
      headlineLabel: "Ahorro anual",
      title: "Optimización de circuito SX mediante filtrado y tratamiento con arcilla",
      services: ["Filtrado", "Arcilla"],
    },
    {
      id: 2,
      slug: "enap-lodos-petroleros",
      industry: "Petróleo",
      industryIcon: Droplets,
      headlineMetric: "84%",
      headlineLabel: "Reducción volumétrica",
      title: "Deshidratación de lodos petroleros en refinería sin inversión de capital",
      services: ["Filtración", "Deshidratación"],
    },
    {
      id: 3,
      slug: "deshidratacion-concentrados",
      industry: "Cobre",
      industryIcon: Factory,
      headlineMetric: "$2.43M",
      headlineLabel: "Valor protegido",
      title: "Respaldo de filtración durante mantención programada en Cerro Negro",
      services: ["Filtración", "Respaldo"],
    },
    {
      id: 4,
      slug: "limpieza-celdas-ew",
      industry: "Cobre",
      industryIcon: Shield,
      headlineMetric: "Zero",
      headlineLabel: "Incidentes",
      title: "Limpieza de celdas EW en faena de alta montaña - Caserones",
      services: ["Limpieza EW", "Seguridad"],
    },
    {
      id: 5,
      slug: "soporte-sx-dgm",
      industry: "Cobre",
      industryIcon: Clock,
      headlineMetric: "8 años",
      headlineLabel: "Operación continua",
      title: "Soporte continuo de planta SX para CODELCO - DGM",
      services: ["Filtrado SX", "Soporte"],
    },
    {
      id: 6,
      slug: "solidos-finos-yoduro",
      industry: "Químico",
      industryIcon: FlaskConical,
      headlineMetric: "100%",
      headlineLabel: "Continuidad",
      title: "Filtración de sólidos finos para producción de yoduro",
      services: ["Sólidos finos", "Monitoreo"],
    },
  ]

  const headlineStats = [
    { value: "$3.1M", label: "Ahorro anual generado", company: "Planta SX" },
    { value: "84%", label: "Reducción volumétrica", company: "ENAP Refinería" },
    { value: "8 años", label: "Soporte continuo", company: "CODELCO DGM" },
    { value: "50+", label: "Proyectos completados", company: "Latinoamérica" },
  ]

  const industries = ["Todos", "Cobre", "Petróleo", "Químico", "Zinc", "Litio"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Minimal like Linear */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Resultados que hablan
            <span className="block text-slate-400">por sí mismos</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
            Operaciones reales con métricas verificables. Descubra cómo hemos ayudado a empresas
            mineras y petroleras en toda Latinoamérica.
          </p>
          <Link
            href="#casos"
            className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors group"
          >
            Ver todos los casos
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Metrics Bar - Stripe Style */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-center text-slate-600 mb-8 font-medium">
            Ayudamos a nuestros clientes a lograr resultados medibles
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {headlineStats.map((stat, index) => (
              <div key={index} className="text-center md:text-left md:border-l md:border-slate-300 md:pl-6 first:border-l-0 first:pl-0">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
                <div className="text-slate-400 text-xs mt-1">{stat.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Clean Cards */}
      <section id="casos" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Casos de éxito
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Cada proyecto representa un desafío único resuelto con nuestras soluciones móviles.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {industries.map((industry, idx) => (
              <button
                key={industry}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  idx === 0
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => {
              const IconComponent = study.industryIcon
              return (
                <Link
                  key={study.id}
                  href={`/casos-de-exito/${study.slug}`}
                  className="group block bg-slate-50 hover:bg-slate-100 rounded-2xl p-6 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-slate-200 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                    {study.title}
                  </h3>

                  {/* Metric */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-slate-900">{study.headlineMetric}</span>
                    <span className="text-slate-500 text-sm ml-2">{study.headlineLabel}</span>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.services.map((service, serviceIdx) => (
                      <span
                        key={serviceIdx}
                        className="bg-white text-slate-500 text-xs px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Read Story Link */}
                  <div className="flex items-center text-slate-600 group-hover:text-emerald-600 font-medium text-sm transition-colors">
                    Leer caso
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case - Simplified */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Caso destacado
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tratamiento de fase orgánica en planta SX
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Durante 18 meses, implementamos un sistema integral de filtrado, tratamiento con arcilla
                y centrifugado que transformó la operación de una planta SX con problemas críticos de
                calidad de orgánico.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "TSF reducido de 444 a 153 segundos (-66%)",
                  "TIF aumentado de 20.4 a 23.7 dinas/cm (+16%)",
                  "Eficiencia global estabilizada en 92.16%"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-700">
                    <Zap className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/casos-de-exito/tratamiento-organico-sx"
                className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors group"
              >
                Ver caso completo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$3.1M", label: "Ahorro anual USD" },
                { value: "52%", label: "Reducción arrastres" },
                { value: "92%", label: "Eficiencia global" },
                { value: "18", label: "Meses operación" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section - Like Stripe */}
      <section className="py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-500 text-sm mb-8">
            Empresas que confían en nuestras soluciones
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {["CODELCO", "ENAP", "Caserones", "Minera Spence", "Cerro Negro"].map((company) => (
              <div key={company} className="text-xl md:text-2xl font-bold text-slate-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para optimizar sus procesos?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Cada operación es única. Permítanos desarrollar una solución personalizada
            que maximice la eficiencia de sus procesos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition-colors group"
            >
              Solicitar consulta
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-slate-500 hover:bg-slate-800 transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

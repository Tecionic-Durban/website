'use client'

import Link from 'next/link'
import { ArrowRight, Factory, Droplets, FlaskConical, Shield, Clock } from 'lucide-react'

export default function CasosExitoPage() {
  const caseStudies = [
    {
      id: 1,
      slug: "tratamiento-organico-sx",
      industry: "Cobre",
      industryIcon: Factory,
      headlineMetric: "$3.1M",
      metricUnit: "USD",
      headlineLabel: "Ahorro anual",
      title: "Optimización de circuito SX mediante filtrado y tratamiento con arcilla",
      services: ["Filtrado", "Arcilla"],
    },
    {
      id: 2,
      slug: "enap-lodos-petroleros",
      industry: "Petróleo",
      industryIcon: Droplets,
      headlineMetric: "84",
      metricUnit: "%",
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
      metricUnit: "USD",
      headlineLabel: "Valor protegido",
      title: "Respaldo de filtración durante mantención programada en Cerro Negro",
      services: ["Filtración", "Respaldo"],
    },
    {
      id: 4,
      slug: "limpieza-celdas-ew",
      industry: "Cobre",
      industryIcon: Shield,
      headlineMetric: "0",
      metricUnit: "",
      headlineLabel: "Incidentes",
      title: "Limpieza de celdas EW en faena de alta montaña - Caserones",
      services: ["Limpieza EW", "Seguridad"],
    },
    {
      id: 5,
      slug: "soporte-sx-dgm",
      industry: "Cobre",
      industryIcon: Clock,
      headlineMetric: "8",
      metricUnit: "años",
      headlineLabel: "Operación continua",
      title: "Soporte continuo de planta SX para CODELCO - DGM",
      services: ["Filtrado SX", "Soporte"],
    },
    {
      id: 6,
      slug: "solidos-finos-yoduro",
      industry: "Químico",
      industryIcon: FlaskConical,
      headlineMetric: "100",
      metricUnit: "%",
      headlineLabel: "Continuidad operacional",
      title: "Filtración de sólidos finos para producción de yoduro",
      services: ["Sólidos finos", "Monitoreo"],
    },
  ]

  const headlineStats = [
    { value: "$3.1M", label: "Ahorro documentado" },
    { value: "84%", label: "Reducción máxima" },
    { value: "8+", label: "Años operando" },
    { value: "120+", label: "Proyectos completados" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Clean Technical */}
      <section className="relative pt-32 pb-20 border-b border-gray-200">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(gray 1px, transparent 1px), linear-gradient(90deg, gray 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Technical label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-emerald-600" />
              <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">Casos de Éxito</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Resultados que satisfacen<br />
              <span className="text-gradient">las operaciones</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Métricas verificables de operaciones reales en minería y petróleo a través de Latinoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar - Technical Readout Style */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {headlineStats.map((stat, index) => (
              <div
                key={index}
                className={`px-6 py-8 ${index < 3 ? 'border-r border-gray-200' : ''} ${index < 2 ? 'border-b lg:border-b-0 border-gray-200' : ''}`}
              >
                <div className="font-mono text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="casos" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">Proyectos</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Casos documentados
              </h2>
            </div>

            </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {caseStudies.map((study) => {
              const IconComponent = study.industryIcon
              return (
                <Link
                  key={study.id}
                  href={`/casos-de-exito/${study.slug}`}
                  className="group bg-white p-8 hover:bg-gray-50 transition-colors relative"
                >
                  {/* Technical corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-gray-300 group-hover:border-emerald-600 transition-colors" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-gray-300 group-hover:border-emerald-600 transition-colors" />

                  {/* Industry indicator */}
                  <div className="flex items-center gap-2 mb-6">
                    <IconComponent className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{study.industry}</span>
                  </div>

                  {/* Metric - Technical readout */}
                  <div className="mb-4">
                    <span className="font-mono text-4xl font-semibold text-gray-900">{study.headlineMetric}</span>
                    {study.metricUnit && (
                      <span className="font-mono text-lg text-gray-400 ml-1">{study.metricUnit}</span>
                    )}
                    <div className="text-sm text-gray-500 mt-1">{study.headlineLabel}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-medium text-gray-900 mb-4 line-clamp-2 leading-snug">
                    {study.title}
                  </h3>

                  {/* Services - Minimal tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service, serviceIdx) => (
                      <span
                        key={serviceIdx}
                        className="text-xs font-mono text-gray-500 px-2 py-1 border border-gray-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Read link */}
                  <div className="flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                    <span>Leer caso</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case - Technical Document Style */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">Caso Destacado</span>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Tratamiento de fase orgánica en planta SX
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Durante 18 meses, implementamos un sistema integral de filtrado, tratamiento con arcilla
                y centrifugado que transformó la operación de una planta SX con problemas críticos de
                calidad de orgánico.
              </p>

              {/* Technical specs list */}
              <div className="space-y-4 mb-10">
                {[
                  { label: "TSF", before: "444s", after: "153s", change: "-66%" },
                  { label: "TIF", before: "20.4", after: "23.7", change: "+16%", unit: "dinas/cm" },
                  { label: "Eficiencia global", value: "92.16%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-sm font-mono text-gray-600">{item.label}</span>
                    <div className="text-right">
                      {item.value ? (
                        <span className="font-mono font-semibold text-gray-900">{item.value}</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gray-400">{item.before}</span>
                          <ArrowRight className="w-3 h-3 text-emerald-600" />
                          <span className="font-mono font-semibold text-gray-900">{item.after}</span>
                          <span className="font-mono text-xs text-emerald-600">{item.change}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/casos-de-exito/tratamiento-organico-sx"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Ver caso completo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Metrics Panel - Technical Display */}
            <div className="bg-white border border-gray-200 p-8">
              {/* Panel header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Resultados Clave</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "$3.1M", label: "Ahorro anual", unit: "USD" },
                  { value: "52%", label: "Reducción arrastres" },
                  { value: "92%", label: "Eficiencia global" },
                  { value: "18", label: "Meses operación" },
                ].map((stat, i) => (
                  <div key={i} className="relative">
                    {/* Corner accent */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-emerald-600/30" />

                    <div className="font-mono text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    {stat.unit && (
                      <div className="font-mono text-xs text-gray-400">{stat.unit}</div>
                    )}
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Minimal */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-10">Empresas que confían en nuestras soluciones</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {["CODELCO", "ENAP", "Caserones", "Minera Spence", "Cerro Negro"].map((company) => (
              <span key={company} className="font-mono text-sm text-gray-400 tracking-wider">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            ¿Listo para optimizar sus procesos?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Cada operación es única. Desarrollamos soluciones personalizadas que maximizan la eficiencia de sus procesos.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Solicitar consulta
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

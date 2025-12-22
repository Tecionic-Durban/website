'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Activity, Globe } from 'lucide-react'

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const numValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    const increment = numValue / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        setCount(numValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, duration])

  const prefix = value.includes('$') ? '$' : value.includes('+') ? '+' : ''
  const isDecimal = value.includes('.')

  return (
    <span>
      {prefix}{isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  )
}

// Futuristic Stat Card
function StatCard({ value, label, color, delay }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 enterprise-slide-up overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-bl-[48px]`} />

      <div className={`text-4xl md:text-5xl font-bold mb-2 font-[family-name:var(--font-family-headings)] ${color.replace('bg-', 'text-')}`}>
        <AnimatedCounter value={value} suffix={value.includes('%') ? '%' : value.includes('Mt') ? 'Mt' : value.includes('B') ? 'B' : ''} />
      </div>
      <div className="text-sm text-gray-500 font-medium">{label}</div>
    </div>
  )
}

// Trend Card Component - News Article Style
function TrendCard({ trend, index }) {
  return (
    <Link
      href={`/tendencias-industria/${trend.slug}`}
      className="group block"
    >
      <article className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 hover:-translate-y-1">
        {/* Image/Visual Header */}
        <div className={`h-40 bg-gradient-to-br ${trend.color} relative overflow-hidden`}>
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0">
            <div className="absolute -top-4 -right-4 w-36 h-36 border-2 border-white/40 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 border-2 border-white/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white/20 rounded-full" />
          </div>

          {/* Category badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
              {trend.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors font-[family-name:var(--font-family-headings)] line-clamp-2">
            {trend.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
            {trend.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{trend.date} · {trend.readTime}</span>
            <span className="text-emerald-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Leer más
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

// Filter Tabs Component
function FilterTabs({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <button
        onClick={() => setActiveCategory('all')}
        className={`
          px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
          ${activeCategory === 'all'
            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
            : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'}
        `}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`
            px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
            ${activeCategory === cat
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
              : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default function TendenciasIndustriaPage() {
  const [activeCategory, setActiveCategory] = useState('all')

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

  const categories = [...new Set(trends.map(t => t.category))]

  const filteredTrends = activeCategory === 'all'
    ? trends
    : trends.filter(t => t.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-emerald-700 overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Large geometric circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 border border-white/10 rounded-full" />
        <div className="absolute -top-16 -right-16 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute -bottom-24 right-1/4 w-72 h-72 border border-white/10 rounded-full" />

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-family-headings)]">
              Tendencias de la Industria
            </h1>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Análisis técnico y perspectivas estratégicas sobre las fuerzas que están transformando la minería hidrometalúrgica en Latinoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* Market Dashboard Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-family-headings)]">
              Panorama del Mercado 2025
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Indicadores clave que definen el escenario competitivo de la industria minera latinoamericana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="5.8Mt"
              label="Producción Cobre Chile 2025"
              color="bg-emerald-500"
              delay={0}
            />
            <StatCard
              value="$50B"
              label="Inversión Proyectos pre-2030"
              color="bg-blue-500"
              delay={100}
            />
            <StatCard
              value="+24%"
              label="Crecimiento Demanda Litio"
              color="bg-cyan-500"
              delay={200}
            />
            <StatCard
              value="10%"
              label="Límite Agua Continental"
              color="bg-orange-500"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Trends Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-family-headings)]">
              Análisis y Perspectivas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Investigación técnica sobre las tendencias que impactan la operación y competitividad del sector
            </p>
          </div>

          {/* Filter Tabs */}
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Trends Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrends.map((trend, index) => (
              <TrendCard key={trend.id} trend={trend} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Industrial Design */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #10b981 1px, transparent 1px),
              linear-gradient(to bottom, #10b981 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Animated traces */}
        <div className="grid-trace grid-trace-h grid-trace-cyan" style={{ top: '30%', animationDelay: '0s', animationDuration: '8s' }} />
        <div className="grid-trace grid-trace-h" style={{ top: '70%', animationDelay: '3s', animationDuration: '7s' }} />

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">Inteligencia Estratégica</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-family-headings)]">
            Manténgase Adelante del Mercado
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Suscríbase a nuestro análisis semanal y reciba insights exclusivos
            sobre el futuro de la industria minera latinoamericana.
          </p>

          {/* Email Form */}
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-10">
            <input
              type="email"
              placeholder="Su email profesional"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
            >
              Suscribirse
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Activity className="w-4 h-4" />
              Descargar Reporte Anual
            </button>
            <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              Consultoría Estratégica
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

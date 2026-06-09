'use client'

import { useState, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ArrowRight, Flash, Earth } from '@carbon/icons-react'
import HalftoneHero from '@/components/HalftoneHero'

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
function TrendCard({ trend, readMore }) {
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
              {readMore}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

// Filter Tabs Component
function FilterTabs({ categories, activeCategory, setActiveCategory, allLabel }) {
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
        {allLabel}
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

// Color mapping for trends — keyed by slug so colors stay stable
// regardless of array order (mirrors ArticleContent.js).
const trendColors = {
  'perdidas-solvente-sx': 'from-emerald-500 to-emerald-600',
  'litio-triangulo-agua': 'from-cyan-500 to-cyan-600',
  'politica-minera-2050': 'from-blue-500 to-blue-600',
  'boom-cobre-chile-peru': 'from-orange-500 to-orange-600',
  'ia-automatizacion-sx-ew': 'from-purple-500 to-purple-600',
  'minerales-criticos-latam': 'from-red-500 to-red-600',
  'deshidratacion-movil-vs-capex': 'from-violet-500 to-violet-600',
}

export default function TendenciasIndustriaPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const tc = useTranslations('industryTrends.common')
  const tl = useTranslations('industryTrends.listing')

  // Get trends from translations, sort by sortDate descending (newest first),
  // and assign colors by slug so they stay stable across reorders.
  const trendsRaw = useTranslations('industryTrends').raw('trends')
  const trends = [...trendsRaw]
    .sort((a, b) => (b.sortDate || '').localeCompare(a.sortDate || ''))
    .map((trend, index) => ({
      ...trend,
      id: index + 1,
      color: trendColors[trend.slug] || 'from-gray-500 to-gray-600'
    }))

  const categories = [...new Set(trends.map(t => t.category))]

  const filteredTrends = activeCategory === 'all'
    ? trends
    : trends.filter(t => t.category === activeCategory)

  // Get stats from translations
  const stats = tl.raw('stats')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — Halftone (light, banner variant) */}
      <HalftoneHero
        compact
        title={tl('heroTitle')}
        lead={tl('heroDescription')}
      />

      {/* Market Dashboard Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-family-headings)]">
              {tl('marketTitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {tl('marketDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                color={['bg-emerald-500', 'bg-blue-500', 'bg-cyan-500', 'bg-orange-500'][index]}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trends Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-family-headings)]">
              {tl('analysisTitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {tl('analysisDescription')}
            </p>
          </div>

          {/* Filter Tabs */}
          <FilterTabs
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            allLabel={tc('allCategories')}
          />

          {/* Trends Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrends.map((trend, index) => (
              <TrendCard key={trend.id} trend={trend} readMore={tc('readMore')} />
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
            <Flash className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">{tl('ctaBadge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-family-headings)]">
            {tl('ctaTitle')}
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {tl('ctaDescription')}
          </p>

          {/* Email Form */}
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-10">
            <input
              type="email"
              placeholder={tl('emailPlaceholder')}
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
            >
              {tl('subscribeButton')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Secondary CTA */}
          <div className="flex justify-center">
            <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Earth className="w-4 h-4" />
              {tl('consultingButton')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

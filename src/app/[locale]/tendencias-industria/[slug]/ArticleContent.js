'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

// Color mapping for each article
const articleColors = {
  'perdidas-solvente-sx': 'from-emerald-500 to-emerald-600',
  'litio-triangulo-agua': 'from-cyan-500 to-cyan-600',
  'politica-minera-2050': 'from-blue-500 to-blue-600',
  'boom-cobre-chile-peru': 'from-orange-500 to-orange-600',
  'ia-automatizacion-sx-ew': 'from-purple-500 to-purple-600',
  'minerales-criticos-latam': 'from-red-500 to-red-600'
}

export default function ArticleContent({ slug }) {
  const tc = useTranslations('industryTrends.common')
  const t = useTranslations('industryTrends')

  // Get article data from translations
  let article
  try {
    article = t.raw(`articles.${slug}`)
  } catch {
    return null
  }

  if (!article) {
    return null
  }

  const color = articleColors[slug] || 'from-gray-500 to-gray-600'

  const getImpactColor = (impact) => {
    const impactLower = impact?.toLowerCase() || ''
    if (impactLower.includes('very') || impactLower.includes('muy') || impactLower.includes('muito')) {
      return 'bg-red-100 text-red-800'
    }
    if (impactLower.includes('high') || impactLower.includes('alto') || impactLower.includes('alt')) {
      return 'bg-orange-100 text-orange-800'
    }
    if (impactLower.includes('medium') || impactLower.includes('medio') || impactLower.includes('médio')) {
      return 'bg-yellow-100 text-yellow-800'
    }
    return 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${color} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <Link
            href="/tendencias-industria"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tc('backToTrends')}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImpactColor(article.impact)}`}>
              {tc('impact')} {article.impact}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
          <p className="text-xl text-white/90 mb-8">{article.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} {tc('readingTime')}</span>
            <span>•</span>
            <span>{article.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {article.tags && article.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {article.content && article.content.map((block, index) => {
              switch(block.type) {
                case 'section':
                  return (
                    <div key={index} className="mb-10">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{block.title}</h2>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">{block.text}</p>
                      {block.list && (
                        <ul className="mt-4 space-y-2">
                          {block.list.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )

                case 'subsection':
                  return (
                    <div key={index} className="mb-6 pl-4 border-l-4 border-emerald-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{block.title}</h3>
                      <p className="text-gray-600">{block.text}</p>
                    </div>
                  )

                case 'highlight':
                  return (
                    <div key={index} className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                      <p className="text-emerald-900 text-lg font-medium">{block.text}</p>
                    </div>
                  )

                case 'stats':
                  return (
                    <div key={index} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                      {block.items && block.items.map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                          <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                          <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                          <div className="text-xs text-gray-500">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  )

                case 'table':
                  return (
                    <div key={index} className="my-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h3>
                      {block.description && <p className="text-gray-600 mb-4">{block.description}</p>}
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                          <thead>
                            <tr className="bg-emerald-600 text-white">
                              {block.headers && block.headers.map((header, i) => (
                                <th key={i} className="px-6 py-4 text-left text-sm font-semibold">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows && block.rows.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                {row.map((cell, j) => (
                                  <td key={j} className="px-6 py-4 text-sm text-gray-700">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )

                case 'conclusion':
                  return (
                    <div key={index} className="bg-gray-900 text-white rounded-xl p-8 my-10">
                      <h3 className="text-xl font-bold mb-4">{tc('conclusionTitle')}</h3>
                      <p className="text-gray-300 whitespace-pre-line leading-relaxed">{block.text}</p>
                    </div>
                  )

                default:
                  return null
              }
            })}
          </div>

          {/* Sources */}
          {article.sources && article.sources.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{tc('sources')}</h3>
              <ul className="space-y-2">
                {article.sources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-emerald-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{tc('ctaTitle')}</h3>
            <p className="text-emerald-100 mb-6">
              {tc('ctaDescription')}
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              {tc('ctaButton')}
            </Link>
          </div>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              href="/tendencias-industria"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tc('viewMoreTrends')}
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

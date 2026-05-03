import { routing } from '@/i18n/routing'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import ArticleContent from './ArticleContent'

const baseUrl = 'https://tecionic.com'

// Valid article slugs (must have content in messages/<locale>.json under industryTrends.articles)
const validSlugs = [
  'perdidas-solvente-sx',
  'litio-triangulo-agua',
  'politica-minera-2050',
  'boom-cobre-chile-peru',
  'deshidratacion-movil-vs-capex',
]

// Generate static params for all locale + slug combinations
export function generateStaticParams() {
  const params = []
  for (const locale of routing.locales) {
    for (const slug of validSlugs) {
      params.push({ locale, slug })
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  if (!validSlugs.includes(slug)) return {}

  const t = await getTranslations({ locale, namespace: 'industryTrends' })

  // Listing data (in trends[]) carries title, excerpt, date, category
  // Article data (in articles[slug]) carries subtitle, author, tags
  let listing
  try {
    const trends = t.raw('trends')
    listing = Object.values(trends).find((item) => item?.slug === slug)
  } catch {
    listing = null
  }

  let article
  try {
    article = t.raw(`articles.${slug}`)
  } catch {
    article = null
  }

  const title = listing?.title || article?.title || ''
  const description = listing?.excerpt || article?.subtitle || ''
  const path = `/tendencias-industria/${slug}`

  return {
    title: `${title} | Tecionic`,
    description,
    keywords: article?.tags?.join(', '),
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        'es-CL': `${baseUrl}/es-cl${path}`,
        'es-MX': `${baseUrl}/es-mx${path}`,
        es: `${baseUrl}/es-mx${path}`,
        'pt-BR': `${baseUrl}/pt-br${path}`,
        en: `${baseUrl}/en${path}`,
        'x-default': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}${path}`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'article',
      publishedTime: listing?.date,
      authors: article?.author ? [article.author] : undefined,
      tags: article?.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params

  // Enable static rendering
  setRequestLocale(locale)

  // Validate slug
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return <ArticleContent slug={slug} />
}

import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import ArticleContent from './ArticleContent'

// Valid article slugs
const validSlugs = [
  'perdidas-solvente-sx',
  'litio-triangulo-agua',
  'politica-minera-2050',
  'boom-cobre-chile-peru',
  'ia-automatizacion-sx-ew',
  'minerales-criticos-latam'
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

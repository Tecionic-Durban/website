// src/app/[locale]/tendencias-industria/layout.js - SEO metadata
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadata = {
    'es-cl': {
      title: 'Tendencias de la Industria Minera | Tecionic',
      description: 'Artículos y análisis sobre tendencias en la industria minera. Innovación en filtración, sostenibilidad y tecnología para minería.',
      keywords: 'tendencias minería, innovación filtración, tecnología minera, sostenibilidad minería, noticias industria minera',
    },
    'es-mx': {
      title: 'Tendencias de la Industria Minera | Tecionic',
      description: 'Artículos y análisis sobre tendencias en la industria minera. Innovación en filtración, sostenibilidad y tecnología para minería.',
      keywords: 'tendencias minería, innovación filtración, tecnología minera, sostenibilidad minería, noticias industria minera',
    },
    'pt-br': {
      title: 'Tendências da Indústria de Mineração | Tecionic',
      description: 'Artigos e análises sobre tendências na indústria de mineração. Inovação em filtração, sustentabilidade e tecnologia para mineração.',
      keywords: 'tendências mineração, inovação filtração, tecnologia mineração, sustentabilidade mineração, notícias indústria mineração',
    },
    'en': {
      title: 'Mining Industry Trends | Tecionic',
      description: 'Articles and analysis on mining industry trends. Filtration innovation, sustainability and technology for mining.',
      keywords: 'mining trends, filtration innovation, mining technology, mining sustainability, mining industry news',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/tendencias-industria`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/tendencias-industria`,
        'es-MX': `${baseUrl}/es-mx/tendencias-industria`,
        'pt-BR': `${baseUrl}/pt-br/tendencias-industria`,
        'en': `${baseUrl}/en/tendencias-industria`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/tendencias-industria`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function TendenciasIndustriaLayout({ children }) {
  return children;
}

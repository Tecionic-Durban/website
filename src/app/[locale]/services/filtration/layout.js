// src/app/[locale]/services/filtration/layout.js - SEO metadata
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
      title: 'Servicios de Filtración Industrial - Filtro Prensa Móvil | Tecionic',
      description: 'Servicios completos de filtración industrial con equipos móviles. Separación sólido-líquido para minería, química y petróleo. Movilización en 48 horas.',
      keywords: 'filtración industrial, filtro prensa móvil, separación sólido-líquido, servicios filtración minería, equipos móviles filtración',
    },
    'es-mx': {
      title: 'Servicios de Filtración Industrial - Filtro Prensa Móvil | Tecionic',
      description: 'Servicios completos de filtración industrial con equipos móviles. Separación sólido-líquido para minería, química y petróleo. Movilización en 48 horas.',
      keywords: 'filtración industrial, filtro prensa móvil, separación sólido-líquido, servicios filtración minería, equipos móviles filtración',
    },
    'pt-br': {
      title: 'Serviços de Filtração Industrial - Filtro Prensa Móvel | Tecionic',
      description: 'Serviços completos de filtração industrial com equipamentos móveis. Separação sólido-líquido para mineração, química e petróleo. Mobilização em 48 horas.',
      keywords: 'filtração industrial, filtro prensa móvel, separação sólido-líquido, serviços filtração mineração, equipamentos móveis filtração',
    },
    'en': {
      title: 'Industrial Filtration Services - Mobile Filter Press | Tecionic',
      description: 'Complete industrial filtration services with mobile equipment. Solid-liquid separation for mining, chemical and oil industries. 48-hour mobilization.',
      keywords: 'industrial filtration, mobile filter press, solid-liquid separation, mining filtration services, mobile filtration equipment',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/filtration`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/filtration`,
        'es-MX': `${baseUrl}/es-mx/services/filtration`,
        'pt-BR': `${baseUrl}/pt-br/services/filtration`,
        'en': `${baseUrl}/en/services/filtration`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/filtration`,
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

export default function FiltrationLayout({ children }) {
  return children;
}

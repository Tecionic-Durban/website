// src/app/[locale]/resources/layout.js - SEO metadata
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
      title: 'Recursos Técnicos - Documentación y Guías | Tecionic',
      description: 'Recursos técnicos, documentación y guías sobre filtración móvil para minería. Fichas técnicas, manuales y material educativo.',
      keywords: 'recursos técnicos, documentación filtración, guías minería, fichas técnicas filtro prensa, material técnico',
    },
    'es-mx': {
      title: 'Recursos Técnicos - Documentación y Guías | Tecionic',
      description: 'Recursos técnicos, documentación y guías sobre filtración móvil para minería. Fichas técnicas, manuales y material educativo.',
      keywords: 'recursos técnicos, documentación filtración, guías minería, fichas técnicas filtro prensa, material técnico',
    },
    'pt-br': {
      title: 'Recursos Técnicos - Documentação e Guias | Tecionic',
      description: 'Recursos técnicos, documentação e guias sobre filtração móvel para mineração. Fichas técnicas, manuais e material educativo.',
      keywords: 'recursos técnicos, documentação filtração, guias mineração, fichas técnicas filtro prensa, material técnico',
    },
    'en': {
      title: 'Technical Resources - Documentation & Guides | Tecionic',
      description: 'Technical resources, documentation and guides on mobile filtration for mining. Datasheets, manuals and educational materials.',
      keywords: 'technical resources, filtration documentation, mining guides, filter press datasheets, technical materials',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/resources`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/resources`,
        'es-MX': `${baseUrl}/es-mx/resources`,
        'pt-BR': `${baseUrl}/pt-br/resources`,
        'en': `${baseUrl}/en/resources`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/resources`,
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

export default function ResourcesLayout({ children }) {
  return children;
}

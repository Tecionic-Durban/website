// src/app/[locale]/services/ew-cleaning/layout.js - SEO metadata
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
      title: 'Limpieza de Celdas EW - Desborre Especializado | Tecionic',
      description: 'Servicio de limpieza y desborre de celdas de electrowinning. Mejore la eficiencia de su proceso EW con nuestros equipos móviles de filtración.',
      keywords: 'limpieza celdas EW, desborre electrowinning, filtración EW, mantenimiento celdas electrolíticas, minería cobre EW',
    },
    'es-mx': {
      title: 'Limpieza de Celdas EW - Desborre Especializado | Tecionic',
      description: 'Servicio de limpieza y desborre de celdas de electrowinning. Mejore la eficiencia de su proceso EW con nuestros equipos móviles de filtración.',
      keywords: 'limpieza celdas EW, desborre electrowinning, filtración EW, mantenimiento celdas electrolíticas, minería cobre EW',
    },
    'pt-br': {
      title: 'Limpeza de Células EW - Desborre Especializado | Tecionic',
      description: 'Serviço de limpeza e desborre de células de electrowinning. Melhore a eficiência do seu processo EW com nossos equipamentos móveis de filtração.',
      keywords: 'limpeza células EW, desborre electrowinning, filtração EW, manutenção células eletrolíticas, mineração cobre EW',
    },
    'en': {
      title: 'EW Cell Cleaning - Specialized Sludge Removal | Tecionic',
      description: 'Electrowinning cell cleaning and sludge removal service. Improve your EW process efficiency with our mobile filtration equipment.',
      keywords: 'EW cell cleaning, electrowinning sludge removal, EW filtration, electrolytic cell maintenance, copper mining EW',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/ew-cleaning`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/ew-cleaning`,
        'es-MX': `${baseUrl}/es-mx/services/ew-cleaning`,
        'pt-BR': `${baseUrl}/pt-br/services/ew-cleaning`,
        'en': `${baseUrl}/en/services/ew-cleaning`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/ew-cleaning`,
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

export default function EWCleaningLayout({ children }) {
  return children;
}

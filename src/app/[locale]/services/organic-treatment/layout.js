// src/app/[locale]/services/organic-treatment/layout.js - SEO metadata
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
      title: 'Tratamiento Orgánico SX - Eliminación de Degradados | Tecionic',
      description: 'Servicio especializado de tratamiento orgánico para circuitos SX. Eliminación de degradados, recuperación de solventes y mejora de eficiencia en extracción por solventes.',
      keywords: 'tratamiento orgánico SX, eliminación degradados, recuperación solventes, extracción por solventes, crud treatment, minería cobre',
    },
    'es-mx': {
      title: 'Tratamiento Orgánico SX - Eliminación de Degradados | Tecionic',
      description: 'Servicio especializado de tratamiento orgánico para circuitos SX. Eliminación de degradados, recuperación de solventes y mejora de eficiencia en extracción por solventes.',
      keywords: 'tratamiento orgánico SX, eliminación degradados, recuperación solventes, extracción por solventes, crud treatment, minería cobre',
    },
    'pt-br': {
      title: 'Tratamento Orgânico SX - Eliminação de Degradados | Tecionic',
      description: 'Serviço especializado de tratamento orgânico para circuitos SX. Eliminação de degradados, recuperação de solventes e melhoria de eficiência em extração por solventes.',
      keywords: 'tratamento orgânico SX, eliminação degradados, recuperação solventes, extração por solventes, crud treatment, mineração cobre',
    },
    'en': {
      title: 'SX Organic Treatment - Degraded Removal | Tecionic',
      description: 'Specialized organic treatment service for SX circuits. Degraded removal, solvent recovery and efficiency improvement in solvent extraction operations.',
      keywords: 'SX organic treatment, degraded removal, solvent recovery, solvent extraction, crud treatment, copper mining',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/organic-treatment`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/organic-treatment`,
        'es-MX': `${baseUrl}/es-mx/services/organic-treatment`,
        'pt-BR': `${baseUrl}/pt-br/services/organic-treatment`,
        'en': `${baseUrl}/en/services/organic-treatment`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/organic-treatment`,
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

export default function OrganicTreatmentLayout({ children }) {
  return children;
}

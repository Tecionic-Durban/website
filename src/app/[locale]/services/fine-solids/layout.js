// src/app/[locale]/services/fine-solids/layout.js - SEO metadata
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
      title: 'Tratamiento de Sólidos Finos - Filtración Especializada | Tecionic',
      description: 'Servicio especializado de filtración de sólidos finos en procesos hidrometalúrgicos. Recuperación de partículas finas y clarificación de soluciones.',
      keywords: 'sólidos finos, filtración partículas finas, clarificación soluciones, hidrometalurgia, recuperación finos, minería procesamiento',
    },
    'es-mx': {
      title: 'Tratamiento de Sólidos Finos - Filtración Especializada | Tecionic',
      description: 'Servicio especializado de filtración de sólidos finos en procesos hidrometalúrgicos. Recuperación de partículas finas y clarificación de soluciones.',
      keywords: 'sólidos finos, filtración partículas finas, clarificación soluciones, hidrometalurgia, recuperación finos, minería procesamiento',
    },
    'pt-br': {
      title: 'Tratamento de Sólidos Finos - Filtração Especializada | Tecionic',
      description: 'Serviço especializado de filtração de sólidos finos em processos hidrometalúrgicos. Recuperação de partículas finas e clarificação de soluções.',
      keywords: 'sólidos finos, filtração partículas finas, clarificação soluções, hidrometalurgia, recuperação finos, mineração processamento',
    },
    'en': {
      title: 'Fine Solids Treatment - Specialized Filtration | Tecionic',
      description: 'Specialized fine solids filtration service in hydrometallurgical processes. Fine particle recovery and solution clarification.',
      keywords: 'fine solids, fine particle filtration, solution clarification, hydrometallurgy, fines recovery, mining processing',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/services/fine-solids`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/services/fine-solids`,
        'es-MX': `${baseUrl}/es-mx/services/fine-solids`,
        'pt-BR': `${baseUrl}/pt-br/services/fine-solids`,
        'en': `${baseUrl}/en/services/fine-solids`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/services/fine-solids`,
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

export default function FineSolidsLayout({ children }) {
  return children;
}

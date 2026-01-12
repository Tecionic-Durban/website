// src/app/[locale]/casos-de-exito/deshidratacion-concentrados/layout.js - SEO metadata
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
      title: 'Caso de Éxito: Deshidratación de Concentrados | Tecionic',
      description: 'Caso de éxito en deshidratación de concentrados de cobre con filtro prensa móvil. Resultados, métricas y beneficios obtenidos.',
      keywords: 'caso éxito deshidratación, concentrados cobre, filtro prensa resultados, proyecto minería cobre',
    },
    'es-mx': {
      title: 'Caso de Éxito: Deshidratación de Concentrados | Tecionic',
      description: 'Caso de éxito en deshidratación de concentrados de cobre con filtro prensa móvil. Resultados, métricas y beneficios obtenidos.',
      keywords: 'caso éxito deshidratación, concentrados cobre, filtro prensa resultados, proyecto minería cobre',
    },
    'pt-br': {
      title: 'Caso de Sucesso: Desidratação de Concentrados | Tecionic',
      description: 'Caso de sucesso em desidratação de concentrados de cobre com filtro prensa móvel. Resultados, métricas e benefícios obtidos.',
      keywords: 'caso sucesso desidratação, concentrados cobre, filtro prensa resultados, projeto mineração cobre',
    },
    'en': {
      title: 'Success Story: Concentrate Dehydration | Tecionic',
      description: 'Success story in copper concentrate dehydration with mobile filter press. Results, metrics and benefits achieved.',
      keywords: 'dehydration success story, copper concentrates, filter press results, copper mining project',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito/deshidratacion-concentrados`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito/deshidratacion-concentrados`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito/deshidratacion-concentrados`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito/deshidratacion-concentrados`,
        'en': `${baseUrl}/en/casos-de-exito/deshidratacion-concentrados`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito/deshidratacion-concentrados`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function DeshidratacionConcentradosLayout({ children }) {
  return children;
}
